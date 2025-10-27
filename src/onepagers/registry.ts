import React from "react";

/**
 * LEGACY dynamic pages (each folder with ./index.tsx exporting { slug, title?, Component })
 */
const modules = import.meta.glob("./*/index.tsx", { eager: true });

type LegacyModule = {
  default: {
    slug: string;
    title?: string;
    Component: React.ComponentType<any>;
  };
};

export const legacyPages = Object.values(modules).map(
  (m) => (m as LegacyModule).default
);

/**
 * MDX pages (Self-Mastery round 1)
 * These import your MDX files compiled by @mdx-js/rollup.
 * Make sure these files exist:
 *   src/docs/self-mastery/monk-mode.mdx
 *   src/docs/self-mastery/distraction-less.mdx
 *   src/docs/self-mastery/routine.mdx
 *   src/docs/self-mastery/mental-energy.mdx
 *   src/docs/self-mastery/belief-reframes.mdx
 *   src/docs/self-mastery/kaizen.mdx
 *   src/docs/self-mastery/meta-learning.mdx
 *   src/docs/self-mastery/mastery-checklist.mdx
 *   src/docs/self-mastery/scientific-method.mdx
 *   src/docs/self-mastery/long-term-stance.mdx
 */

import MonkMode from "@/docs/self-mastery/monk-mode.mdx";
import FocusProtocol from "@/docs/self-mastery/distraction-less.mdx";
import DailyRoutine from "@/docs/self-mastery/routine.mdx";
import MentalEnergy from "@/docs/self-mastery/mental-energy.mdx";
import BeliefReframes from "@/docs/self-mastery/belief-reframes.mdx";
import Kaizen from "@/docs/self-mastery/kaizen.mdx";
import MetaLearning from "@/docs/self-mastery/meta-learning.mdx";
import MasteryChecklist from "@/docs/self-mastery/mastery-checklist.mdx";
import ScientificMethod from "@/docs/self-mastery/scientific-method.mdx";
import LongTermStance from "@/docs/self-mastery/long-term-stance.mdx";

type MdxPage = {
  slug: string;
  title: string;
  Component: React.ComponentType<any>;
};

export const mdxPages: MdxPage[] = [
  {
    slug: "monk-mode",
    title: "Monk Mode → Execution Protocol",
    Component: MonkMode,
  },
  {
    slug: "focus-protocol",
    title: "Distraction-less = Focused",
    Component: FocusProtocol,
  },
  { slug: "daily-routine", title: "Routine", Component: DailyRoutine },
  {
    slug: "mental-energy-systems",
    title: "Mental Energy Systems",
    Component: MentalEnergy,
  },
  {
    slug: "belief-reframes",
    title: "Limiting Beliefs → Reframes",
    Component: BeliefReframes,
  },
  {
    slug: "kaizen-iteration",
    title: "Kaizen & Iteration Cycles",
    Component: Kaizen,
  },
  {
    slug: "meta-learning",
    title: "Learning Techniques (Meta-learning)",
    Component: MetaLearning,
  },
  {
    slug: "mastery-checklist",
    title: "Mastery Checklist",
    Component: MasteryChecklist,
  },
  {
    slug: "scientific-method-for-growth",
    title: "The Scientific Method (for builders)",
    Component: ScientificMethod,
  },
  {
    slug: "long-term-stance",
    title: "Abundance / Long-Term Perspective",
    Component: LongTermStance,
  },
];

/**
 * Unified access for legacy + mdx by slug
 */
const map = new Map([
  ...legacyPages.map((p) => [p.slug, p] as const),
  ...mdxPages.map((p) => [p.slug, p] as const),
]);

export function getOnePager(slug: string) {
  return map.get(slug);
}
