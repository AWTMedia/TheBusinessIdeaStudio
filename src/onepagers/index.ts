// src/onepagers/index.ts
import React from "react";
import type { OnePager } from "@/types/OnePager";

// 1) Legacy .legacy one-pagers that render their own UI
import profileFunnelLegacy from "./profile-funnel.legacy";
import the4TypesOfLeverageLegacy from "./the-4-types-of-leverage.legacy";

// 2) Structured top-level .ts/.tsx one-pagers (question/summary/steps)
const structured = import.meta.glob<{ default: OnePager }>("./*.{ts,tsx}", {
  eager: true,
});

// 3) Component-based legacy pages under subfolders (./*/index.tsx)
import { legacyPages } from "./registry"; // each: { slug, title?, Component }

export const onePagers: Record<string, OnePager> = {};

// --- Add the .legacy exports first
onePagers[profileFunnelLegacy.key] = profileFunnelLegacy as OnePager;
onePagers[the4TypesOfLeverageLegacy.key] =
  the4TypesOfLeverageLegacy as OnePager;

// --- Add structured top-level .ts/.tsx one-pagers
for (const mod of Object.values(structured)) {
  const p = mod.default as OnePager;
  if (p?.key && !onePagers[p.key]) {
    onePagers[p.key] = p;
  }
}

// --- Wrap subfolder legacy Component pages so they open via #/p/<slug>
// (avoid JSX here since this file is .ts)
for (const lp of legacyPages) {
  const k = lp.slug;
  if (!k || onePagers[k]) continue;
  onePagers[k] = {
    key: k,
    // OnePagerView checks `render` for legacy pages
    render: () => React.createElement(lp.Component),
    // Optional header/title in the view
    question: lp.title ?? undefined,
  } as unknown as OnePager;
}

// --- Auto-register all MDX docs in /src/docs/<stage>/<slug>.mdx
// (EXCLUDES root-level /src/docs/<slug>.mdx by pattern)
const mdxMods = import.meta.glob<{
  default: React.ComponentType<any>;
  frontmatter?: Record<string, any>;
}>("../docs/*/*.mdx", { eager: true });

const stageLabel: Record<string, string> = {
  "self-mastery": "Self-Mastery & Execution Discipline",
  identity: "Identity & Brand Perception",
  audience: "Audience Empathy",
  offer: "Offer Psychology",
  systems: "Systems Thinking",
  growth: "Behavioral Scaling",
  proof: "Proof & Legitimacy",
};

function toTitle(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

for (const [path, mod] of Object.entries(mdxMods)) {
  // path like: ../docs/<stage>/<slug>.mdx
  const parts = path.split("/");
  const stage = parts[parts.length - 2];
  const file = parts[parts.length - 1];
  const slug = file.replace(/\.mdx$/i, "");

  const fm = (mod as any).frontmatter || {};
  const key: string = fm.key || slug; // prefer frontmatter key
  const title: string = fm.title || toTitle(slug);
  const hook: string | undefined = fm.excerpt || fm.hook;

  if (onePagers[key]) continue;

  onePagers[key] = {
    key,
    type: "mdx" as any,
    title,
    Component: (mod as any).default,
    category: stageLabel[stage] || toTitle(stage),
    hook,
  } as any;
}

// --- Sorted list for Library/Repository
export const allDocItems: { k: string; title: string; category?: string }[] =
  Object.values(onePagers)
    .sort((a, b) => {
      if (a.key === "profile-funnel") return -1;
      if (b.key === "profile-funnel") return 1;
      const at = (
        (("title" in a && (a as any).title) || a.question || a.hook || a.key) as string
      ).toLowerCase();
      const bt = (
        (("title" in b && (b as any).title) || b.question || b.hook || b.key) as string
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

// Debug
console.log("[onepagers] loaded keys:", Object.keys(onePagers));