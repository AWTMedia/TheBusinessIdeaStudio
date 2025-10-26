import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const personalMbaFiveCoreDrives: OnePager = {
  key: "personal-mba-5-core-drives",
  category: "Foundations",
  question:
    "How do we design offers and content that align with core human motivation?",
  hook: "Use the 5 Core Human Drives — Acquire, Bond, Learn, Defend, Feel — to map offers, hooks, and landing pages to what people actually want.",
  summary:
    "A practical, color-coded reference for applying the Personal MBA’s five drives to product design and marketing. Includes examples of products that win, marketing levers, content angles, and simple steps per drive, plus a quick ‘Apply’ section to wire offers and hooks.",
  bullets: [
    "Acquire (emerald): outcomes, ROI, speed, exclusivity.",
    "Bond (indigo): identity, community, recognition, UGC.",
    "Learn (slate): clarity, step-by-step, checklists, proof.",
    "Defend (rose): safeguards, reliability, guarantees, checklists.",
    "Feel (amber): vivid experiences, pacing, novelty, anticipation.",
  ],
  steps: [
    {
      t: "Pick Primary Drive",
      d: "Choose one dominant drive your promise satisfies.",
    },
    {
      t: "Layer Secondaries",
      d: "Add Bond (proof/community) and Defend (risk reversal).",
    },
    {
      t: "Write Hooks",
      d: "Mirror pains and outcomes in the audience’s own words.",
    },
    {
      t: "Design Page",
      d: "Above-the-fold matches primary drive; below adds proof & safety.",
    },
    {
      t: "Ship & Test",
      d: "Validate with CTR, hold, reply rate, and conversion.",
    },
  ],
  kpis: [
    "Hook CTR / 3-sec hold",
    "Landing page scroll depth",
    "Conversion rate / booked calls",
    "Refund/objection rate (Defend)",
  ],
  tools: [
    "VOC boards, testimonial vault",
    "Guarantee/risk reversal templates",
    "Hook library by drive",
    "Landing page block kit by drive",
  ],
  cta: "Open the one-pager and map your current offer to one primary drive and up to two secondary drives. Rewrite your hero, proof, and CTA to match.",
  render: () => <LegacyMount slug="personal-mba-5-core-drives" />,
};

export default personalMbaFiveCoreDrives;
