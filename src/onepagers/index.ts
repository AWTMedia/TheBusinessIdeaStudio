// src/onepagers/index.ts
import { lazy } from "react";
import type { OnePager as LegacyOnePager } from "@/types/OnePager";

// ───────────────────────────────────────────────────────────────────────────────
// 1) Keep your legacy one-pagers (hard imports)
// ───────────────────────────────────────────────────────────────────────────────
import profileFunnelLegacy from "./profile-funnel.legacy";
import the4TypesOfLeverageLegacy from "./the-4-types-of-leverage.legacy";

// ───────────────────────────────────────────────────────────────────────────────
// 2) Define minimal shape for auto-discovered docs (MDX/PDF)
//    NOTE: we unify on `key` so App + Repository keep working.
// ───────────────────────────────────────────────────────────────────────────────
export type Stage =
  | "self"
  | "identity"
  | "empathy"
  | "offer"
  | "systems"
  | "scale"
  | "proof";

export type AutoDoc = {
  key: string;                         // slug
  title: string;                       // human title (from slug by default)
  stage: Stage;
  type: "mdx" | "pdf";
  Component?: React.ComponentType<any>; // for MDX
  url?: string;                        // for PDF
  // Optional fields to satisfy existing UI fallbacks
  question?: string;
  hook?: string;
};

// This registry will hold both legacy and auto docs.
export const onePagers: Record<string, LegacyOnePager | AutoDoc> = {};

// ───────────────────────────────────────────────────────────────────────────────
// 3) Seed registry with legacy content first (cannot be skipped by globs)
// ───────────────────────────────────────────────────────────────────────────────
onePagers[profileFunnelLegacy.key] = profileFunnelLegacy;
onePagers[the4TypesOfLeverageLegacy.key] = the4TypesOfLeverageLegacy;

// ───────────────────────────────────────────────────────────────────────────────
// 4) Auto-discover MDX & PDF under /src/docs/<stage>/<slug>.mdx|pdf
//    - MDX is lazy-loaded as a component
//    - PDF is imported as a URL (eager) for <object> viewer
// ───────────────────────────────────────────────────────────────────────────────
const mdxModules = import.meta.glob("../docs/**/*.mdx"); // lazy
const pdfAssets = import.meta.glob("../docs/**/*.pdf", {
  eager: true,
  as: "url",
});

function pathParts(p: string) {
  // "../docs/<stage>/<slug>.<ext>"
  const m = p.match(/\.{2}\/docs\/([^/]+)\/([^/]+)\.(mdx|pdf)$/i);
  if (!m) return null;
  return { stage: m[1] as Stage, slug: m[2], ext: m[3].toLowerCase() };
}

function slugToTitle(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// MDX entries
Object.entries(mdxModules).forEach(([p, loader]) => {
  const parts = pathParts(p);
  if (!parts) return;
  const { stage, slug } = parts;

  // build lazy MDX component
  const Component = lazy(async () => {
    const mod: any = await (loader as any)();
    return { default: mod.default };
  });

  const key = slug;
  // don’t overwrite legacy pages if a slug collides
  if (!onePagers[key]) {
    const title = slugToTitle(slug);
    onePagers[key] = {
      key,
      title,
      stage,
      type: "mdx",
      Component,
      // fill optional fallbacks used by grids/cards
      question: title,
      hook: "",
    };
  }
});

// PDF entries
Object.entries(pdfAssets).forEach(([p, url]) => {
  const parts = pathParts(p);
  if (!parts) return;
  const { stage, slug } = parts;

  const key = slug;
  if (!onePagers[key]) {
    const title = slugToTitle(slug);
    onePagers[key] = {
      key,
      title,
      stage,
      type: "pdf",
      url: url as string,
      question: title,
      hook: "",
    };
  }
});

// ───────────────────────────────────────────────────────────────────────────────
// 5) Sorted list for Repository grid
//    Keeps "profile-funnel" at the top, then alphabetical by display text
// ───────────────────────────────────────────────────────────────────────────────
export const allDocItems: { k: string; title: string; category?: string }[] =
  Object.values(onePagers)
    .sort((a: any, b: any) => {
      if (a.key === "profile-funnel") return -1;
      if (b.key === "profile-funnel") return 1;
      const at = (a.question || a.title || a.key || "").toLowerCase();
      const bt = (b.question || b.title || b.key || "").toLowerCase();
      return at.localeCompare(bt);
    })
    .map((p: any) => ({
      k: p.key,
      title: p.question || p.title || p.key,
      category: p.stage || (p.category ?? "Other"),
    }));

// (Optional) quick visibility check in the browser console
console.log("[onepagers] loaded keys:", Object.keys(onePagers));