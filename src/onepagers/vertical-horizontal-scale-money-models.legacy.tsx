import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const scaleAndMoneyModels: OnePager = {
  key: "vertical-horizontal-scale-money-models",
  question:
    "How do we scale horizontally, scale vertically, and structure money models?",
  hook: "A clean matrix showing no-brand vs brand pipelines, the two types of scale, PMF→Scale journey, and a practical catalog of attraction/upsell/downsell/continuity offers.",
  summary:
    "Use this page to explain and plan growth paths. It visualizes horizontal vs vertical scale, brand prerequisites, PMF→Scale milestones, and a ready-to-ship money-model menu for revenue expansion.",
  bullets: [
    "No-brand vs brand flows with crisp steps and hints.",
    "Horizontal vs vertical scale diagrams (duplicate what works vs optimize LTV/CAC/offer ladder).",
    "PMF → Proven offer → Horizontal scale → Vertical scale journey map.",
    "‘Nik Setting’ case narrative to anchor the model in reality.",
    "Money-model library: Attraction, Upsell, Downsell, Continuity.",
  ],
  steps: [
    {
      t: "Map your current flow",
      d: "Pick ‘No-brand’ or ‘Brand’ and confirm each step exists.",
    },
    {
      t: "Choose scale path",
      d: "Duplicate what works (horizontal) or optimize the value ladder (vertical).",
    },
    {
      t: "Design money models",
      d: "Select attraction, upsell, downsell, and continuity offers to raise LTV.",
    },
  ],
  kpis: ["CAC", "LTV", "Payback", "Show %", "Close %", "MRR/Client", "Churn %"],
  tools: [
    "Ads Manager",
    "CRM",
    "Billing/Stripe",
    "Analytics (GA4)",
    "Docs/Notion",
  ],
  cta: "Open the page, pick your scale path, and assemble a money-model stack you can test this month.",
  render: () => <LegacyMount slug="vertical-horizontal-scale-money-models" />,
};

export default scaleAndMoneyModels;
