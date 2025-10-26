// src/components/DocViewer.tsx
import { Suspense } from "react";
import type { OnePager } from "@/types/OnePager";

export default function DocViewer({ pager }: { pager: OnePager }) {
  // MDX component (lazy import)
  if (pager.type === "mdx" && pager.Component) {
    const C = pager.Component;
    return (
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-slate max-w-none">
          <Suspense fallback={<div className="p-6">Loading…</div>}>
            <C />
          </Suspense>
        </article>
      </section>
    );
  }

  // PDF in an iframe
  if (pager.type === "pdf" && pager.url) {
    return (
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <iframe
          className="w-full h-[80vh] rounded-xl border"
          src={pager.url}
          title={pager.title ?? pager.question}
        />
      </section>
    );
  }

  // External URL (only works if the site allows embedding)
  if (pager.type === "url" && pager.url) {
    return (
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl border"
            src={pager.url}
            title={pager.title ?? pager.question}
          />
        </div>
      </section>
    );
  }

  // Nothing to render
  return null;
}