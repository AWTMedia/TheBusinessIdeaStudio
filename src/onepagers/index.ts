// src/onepagers/index.ts
import type { OnePager } from "@/types/OnePager";

// 👇 Hard-import legacy proxies so they're guaranteed to be included
import profileFunnelLegacy from "./profile-funnel.legacy";
import the4TypesOfLeverageLegacy from "./the-4-types-of-leverage.legacy";

// Eagerly import all top-level .ts/.tsx one-pagers in this folder
const modules = import.meta.glob<{ default: OnePager }>("./*.{ts,tsx}", {
  eager: true,
});

export const onePagers: Record<string, OnePager> = {};

// 1) Put hard-imported ones in first (cannot be skipped by the glob)
onePagers[profileFunnelLegacy.key] = profileFunnelLegacy;
onePagers[the4TypesOfLeverageLegacy.key] = the4TypesOfLeverageLegacy;

// 2) Add everything from the glob (won’t overwrite existing keys)
for (const mod of Object.values(modules)) {
  const p = mod.default;
  if (!p?.key) continue;
  if (!onePagers[p.key]) onePagers[p.key] = p;
}

// Build a predictable, sorted list for Library/Repository
export const allDocItems: { k: string; title: string; category?: string }[] =
  Object.values(onePagers)
    .sort((a, b) => {
      // Keep "profile-funnel" prominent; then alphabetical
      if (a.key === "profile-funnel") return -1;
      if (b.key === "profile-funnel") return 1;
      const at = (a.question || a.hook || a.key).toLowerCase();
      const bt = (b.question || b.hook || b.key).toLowerCase();
      return at.localeCompare(bt);
    })
    .map((p) => ({
      k: p.key,
      title: p.question || p.hook || p.key,
      category: (p as any).category ?? "Other",
    }));

// (Optional) quick visibility check in the browser console
console.log("[onepagers] loaded keys:", Object.keys(onePagers));
