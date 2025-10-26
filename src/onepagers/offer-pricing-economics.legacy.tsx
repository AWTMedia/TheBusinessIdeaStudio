import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const offerPricingEconomics: OnePager = {
  key: "offer-pricing-economics",
  question:
    "What should we charge (floor/target/anchor) given COGS, capacity, and risk?",
  hook: "Capacity-aware pricing model that computes floor/target/anchor prices, guarantee reserves, LTV:CAC, and money-model packages.",
  summary:
    "This calculator turns your delivery costs, overhead, CAC, capacity, margin targets, and guarantee rules into a coherent pricing ladder. It also proposes ‘Safe Retainer’, ‘Hybrid’, and ‘Performance-heavy’ packages and scores your offer quality.",
  bullets: [
    "Derives per-client overhead & CAC allocation from capacity and payback.",
    "Computes price floor/target/anchor and contribution at target.",
    "Guarantee wallet sizing with reserve guidance (p × % × clients).",
    "Money-model tiers (retainer, hybrid, performance) with caps.",
    "Irresistible Offer Score across outcome/proof/speed/risk/ease/bonuses.",
  ],
  steps: [
    {
      t: "Set assumptions",
      d: "Principle: Price from economics, not vibes. Core Idea — enter COGS, overhead, CAC, capacity, margin, reserve. Takeaway — the model returns floor, target, and anchor.",
    },
    {
      t: "Choose a money model",
      d: "Levers: Retainer vs Hybrid vs Performance; prepay discounts; success-fee caps; attribute revenue inputs.",
    },
    {
      t: "Stress-test & publish",
      d: "Takeaway — use conservative/base/aggressive scenarios and the Offer Score to refine copy, guarantees, and pricing page.",
    },
  ],
  kpis: [
    "Price floor / target / anchor",
    "Contribution @ target",
    "LTV : CAC",
    "Reserve % vs liability",
    "Offer Score",
  ],
  tools: [
    "Sheets/Notion",
    "Stripe/Billing",
    "CRM (HubSpot)",
    "Analytics (GA4/GTM)",
  ],
  cta: "Open the calculator, set your assumptions, and lock a price ladder that survives volatility and scales margin.",
  // Mount the full interactive page inside the viewer:
  render: () => <LegacyMount slug="offer-pricing-economics" />,
};

export default offerPricingEconomics;
