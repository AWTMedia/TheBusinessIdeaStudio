import React from "react";
import { getOnePager } from "./registry"; // keep for old-style entries

// dynamic views inside subfolders: ./<slug>/index.tsx or .ts
const views = import.meta.glob("./*/index.{ts,tsx}");

type Props = { slug: string };

// Simple error boundary so a failed lazy import doesn't blank the app
class Boundary extends React.Component<{ children: React.ReactNode }, { err?: any }> {
  state = { err: undefined as any };
  static getDerivedStateFromError(err: any) { return { err }; }
  componentDidCatch(err: any) { console.error("[LegacyMount] render error:", err); }
  render() {
    if (this.state.err) {
      return (
        <div className="p-4 text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
          <div className="font-semibold mb-1">Failed to load view.</div>
          <div className="text-sm">Check the console for details.</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function LegacyMount({ slug }: Props) {
  // 1) Old style: registry has a Component (back-compat)
  const entry = getOnePager?.(slug);
  if (entry && (entry as any).Component) {
    const Cmp = (entry as any).Component;
    return <Cmp />;
  }

  // 2) New style: lazy-load ./<slug>/index.(ts|tsx)
  const tsxKey = `./${slug}/index.tsx`;
  const tsKey = `./${slug}/index.ts`;
  const loader = views[tsxKey] ?? views[tsKey];

  if (!loader) {
    console.warn("[LegacyMount] view not found for slug:", slug, "available keys:", Object.keys(views));
    return (
      <div className="p-4 text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
        Not found: <code>{slug}</code>
        <div className="text-xs mt-2 text-rose-600">
          Available: {Object.keys(views).map((k) => k.replace("./", "")).join(", ") || "(none)"}
        </div>
      </div>
    );
  }

  const Lazy = React.lazy(loader as any);
  return (
    <Boundary>
      <React.Suspense fallback={<div className="p-4 text-slate-500">Loading…</div>}>
        <Lazy />
      </React.Suspense>
    </Boundary>
  );
}