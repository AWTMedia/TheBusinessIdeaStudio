// src/onepagers/index.ts
import type { OnePager } from "@/types/OnePager";

// 1) Bring in legacy one-pagers that render their own UI
import profileFunnelLegacy from "./profile-funnel.legacy";
import the4TypesOfLeverageLegacy from "./the-4-types-of-leverage.legacy";

// 2) Eagerly import all top-level .ts/.tsx one-pagers (structured format)
const modules = import.meta.glob<{ default: OnePager }>("./*.{ts,tsx}", {
  eager: true,
});

export const onePagers: Record<string, OnePager> = {};

// Put legacy first so they cannot be skipped by the glob overwriting
onePagers[profileFunnelLegacy.key] = profileFunnelLegacy as OnePager;
onePagers[the4TypesOfLeverageLegacy.key] =
  the4TypesOfLeverageLegacy as OnePager;

// Add everything from the glob (won’t overwrite existing keys)
for (const mod of Object.values(modules)) {
  const p = mod.default as OnePager;
  if (!p?.key) continue;
  if (!onePagers[p.key]) onePagers[p.key] = p;
}

/* ------------------------------------------------------------------
   3) (Optional) Register doc-like entries (MDX / PDF / EMBED)
   - Uncomment when you add the file/URL so builds don’t break.
------------------------------------------------------------------- */

// Example: MDX component (when you place a file at src/docs/monk-mode.mdx)
// import MonkMode from "@/docs/monk-mode.mdx";
// onePagers["monk-mode"] = {
//   key: "monk-mode",
//   question: "Monk Mode → Execution Protocol",
//   hook: "Guardrails, environment, inputs, outputs.",
//   bullets: [],
//   steps: [],
//   type: "mdx",
//   title: "Monk Mode — Execution Protocol",
//   Component: MonkMode,
// };

// Example: PDF (host a file under /public/docs or any public URL)
// onePagers["analytics-report-template"] = {
//   key: "analytics-report-template",
//   question: "Free Analytics Report Template",
//   bullets: [],
//   steps: [],
//   type: "pdf",
//   title: "Analytics Report Template",
//   url: "/docs/analytics-report-template.pdf",
// };

// Example: EMBED (public Notion page or any external URL)
// onePagers["squadstart"] = {
//   key: "squadstart",
//   question: "SquadStart — Team-First Founder Engine",
//   bullets: [],
//   steps: [],
//   type: "embed",
//   title: "SquadStart — Team-First Founder Engine",
//   url: "https://www.notion.so/your-public-notion-page",
// };

/* ------------------------------------------------------------------ */

// Build a predictable, sorted list for Library/Repository
export const allDocItems: { k: string; title: string; category?: string }[] =
  Object.values(onePagers)
    .sort((a, b) => {
      // Keep "profile-funnel" prominent; then alphabetical by display title
      if (a.key === "profile-funnel") return -1;
      if (b.key === "profile-funnel") return 1;
      const at = (
        ("title" in a && (a as any).title) ||
        a.question ||
        a.hook ||
        a.key
      ).toLowerCase();
      const bt = (
        ("title" in b && (b as any).title) ||
        b.question ||
        b.hook ||
        b.key
      ).toLowerCase();
      return at.localeCompare(bt);
    })
    .map((p) => ({
      k: p.key,
      title: (("title" in p && (p as any).title) ||
        p.question ||
        p.hook ||
        p.key) as string,
      category: (p as any).category ?? "Other",
    }));

// (Optional) quick visibility check in the browser console
console.log("[onepagers] loaded keys:", Object.keys(onePagers));
