// src/onepagers/index.ts
import * as React from "react";
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
  const p = mod?.default as OnePager | undefined;
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

/* ─────────────────────────── MDX AUTOREG ────────────────────────────
   We import all MDX docs under /src/docs/<stage>/<slug>.mdx and register
   them as OnePagers. To avoid "Coming soon" from slug mismatches, we
   register multiple alias keys per doc:
   - frontmatter.slug (preferred)
   - frontmatter.key
   - filename (without .mdx)
   - slugified frontmatter.title
   Any of these URLs (#/p/<alias>) will resolve the same page.
--------------------------------------------------------------------- */

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

function toSlug(s: string) {
  return s
    .toLowerCase()
    .replace(/['"’“”]/g, "") // drop quotes
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

for (const [path, mod] of Object.entries(mdxMods)) {
  // path like: ../docs/<stage>/<slug>.mdx
  const parts = path.split("/");
  const stage = parts[parts.length - 2];
  const file = parts[parts.length - 1];
  const fileBaseSlug = file.replace(/\.mdx$/i, "");

  const fm = (mod as any).frontmatter || {};
  const fmSlug: string | undefined = fm.slug;
  const fmKey: string | undefined = fm.key;
  const fmTitle: string | undefined = fm.title;

  // Primary key preference: frontmatter.slug → frontmatter.key → filename
  const primaryKey: string =
    (fmSlug && String(fmSlug)) ||
    (fmKey && String(fmKey)) ||
    String(fileBaseSlug);

  const title: string = fmTitle || toTitle(fileBaseSlug);
  const description: string | undefined = fm.description || fm.subtitle || fm.tagline;
  const meta: string | undefined = fm.meta;
  const hook: string | undefined = fm.excerpt || fm.hook;

  // Build the page object once
  const page: any = {
    key: primaryKey,
    type: "mdx", // consumed by OnePagerView → DocViewer
    title,
    description,
    meta,
    category: stageLabel[stage] || toTitle(stage),
    hook,
    // DocViewer commonly looks for `Component` on pager to render MDX
    Component: (mod as any).default,
  };

  // Alias keys to register for this doc
  const aliases = new Set<string>([
    primaryKey,
    fileBaseSlug,
  ]);

  if (fmSlug) aliases.add(String(fmSlug));
  if (fmKey) aliases.add(String(fmKey));
  if (fmTitle) aliases.add(toSlug(String(fmTitle)));

  // Register under every alias (first one wins, but we want this doc
  // to override empty/placeholder entries from earlier passes)
  for (const k of aliases) {
    if (!k) continue;
    // Prefer not to overwrite an existing *real* page with different content,
    // but do overwrite placeholders if any were added earlier.
    if (!onePagers[k]) {
      onePagers[k] = { ...page, key: k } as OnePager;
    } else {
      // If an existing record has no renderer and this one is MDX, upgrade it
      const existing = onePagers[k] as any;
      const lacksRenderer =
        !("render" in existing) && !("Component" in existing) && !existing.type;
      if (lacksRenderer) {
        onePagers[k] = { ...page, key: k } as OnePager;
      }
    }
  }
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
