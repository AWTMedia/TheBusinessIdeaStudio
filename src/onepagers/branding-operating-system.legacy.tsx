import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const brandingOperatingSystem: OnePager = {
  key: "branding-operating-system",
  category: "Brand",
  question: "How do we build a brand that reliably changes customer behavior?",
  hook: "Pair your brand with outcomes your ICP already likes to create net-positive behavior change—then measure, iterate, and earn pricing power.",
  summary:
    "The Branding OS (BOS) is a practical system for deliberate pairing, experiment design, recovery protocols, and operating rhythm—so your brand lifts notice, preference, willingness to pay, and repeat/ referral.",
  bullets: [
    "Behavior-Change Ladder: Notice → Prefer → Pay More → Repeat/Refer.",
    "Pairing Strategy: align with outcomes, values, symbols, and experiences your ICP likes.",
    "Money Link: pricing power, conversion lift, retention, and ad efficiency.",
  ],
  steps: [
    {
      t: "Define Doctrine & Ladder",
      d: "Clarify what behavior must change (notice, prefer, pay more, repeat) and the brand’s role in causing it.",
    },
    {
      t: "Choose Pairings",
      d: "Pick 3–5 net-positive associations to saturate across assets and channels; avoid anti-pairings.",
    },
    {
      t: "Design Experiments",
      d: "7–14 day sprints: hypothesis → assets → metrics; evaluate EV and keep/iterate/kill.",
    },
    {
      t: "Operate & Measure",
      d: "Weekly cadence, BMI dashboard (Influence × Direction × Reach), and WTP/elasticity tests.",
    },
    {
      t: "Recover Fast",
      d: "If a bad pairing hits, isolate, overwhelm with positives, ship product wins, and track Direction delta.",
    },
  ],
  kpis: [
    "Brand-lift deltas",
    "Branded vs non-branded CTR",
    "Share of search",
    "Price elasticity / WTP",
    "Repeat & referral rate",
  ],
  tools: [
    "Asset library & naming",
    "Survey/choice tests",
    "Analytics dashboard",
    "Ads manager & retargeting",
    "SOPs for recovery & QA",
  ],
  cta: "Open BOS and run one pairing experiment this week. Track BMI and a pricing power signal—then iterate.",
  render: () => <LegacyMount slug="branding-operating-system" />,
};

export default brandingOperatingSystem;
