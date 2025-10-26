import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const tokenizedLoyaltySimulator: OnePager = {
  key: "tokenized-loyalty-simulator",
  category: "Business Models & Simulators",
  question:
    "Tokanized loyalty for local brands",
  hook: "An interactive, single-file simulator: tweak redemption, spend lift, bundle premium, and growth to visualize sales, costs, and upside—no external libs.",
  summary:
    "This one-pager renders the 'Tokenized Loyalty for Local Brands' demo. It includes minimal UI primitives, SVG Line/Area charts, and a 12-month side-by-side simulation (traditional vs tokenized). Sliders control redemption %, spend-lift from holders, bundle premium (+20%), and customer growth. Outputs include monthly charts, totals, effective cost curves, and a detailed table. Also ships explainers (How it works, Token Flow), a value vs. points comparison, risks/mitigations, and a 90-day GTM roadmap.",
  bullets: [
    "Pure React + Tailwind; zero chart deps (hand-rolled SVG).",
    "Interactive sliders: Redemption %, Spend Lift, Token Growth, Bundle Premium toggle.",
    "12-month sim: customers, sales, and effective cost by model.",
    "Dual charts: Area (sales) + Line (cost vs redemption).",
    "Explainers: Token flow and why tokenized outperforms points.",
    "Risks & mitigations: redemption spikes, UX, speculation, regulation.",
    "GTM plan: hero SKU launch, in-store scripts, PR + micro-influencers, metrics.",
  ],
  steps: [
    {
      t: "Set Assumptions",
      d: "Adjust redemption, spend-lift, bundle premium, and growth sliders.",
    },
    {
      t: "Compare Sales",
      d: "Use the monthly AreaChart to see traditional vs tokenized revenue.",
    },
    {
      t: "Model Cost",
      d: "Review cost curves: fixed 10% vs redemption-linked effective cost.",
    },
    {
      t: "Read Insights",
      d: "Check totals, average cost %, and the month-by-month table.",
    },
    {
      t: "Plan GTM",
      d: "Follow the 90-day roadmap and track CAC, redemption%, CLV lift.",
    },
  ],
  kpis: [
    "Total sales (traditional vs tokenized).",
    "Average effective loyalty cost (% of sales).",
    "Redemption rate and spend-lift sensitivity.",
    "Monthly new customers (growth deltas).",
    "CLV lift proxy from spend-lift × holder %.",
  ],
  tools: [
    "SVG Area/Line charts with simple scales and gridlines.",
    "Simulation engine (12-month loop; params object).",
    "Currency formatter + minimal stat cards.",
    "Token flow cards (Buy → Mint → Hold → Redeem → Burn → Scarcity).",
  ],
  targets: [
    "Demonstrate ≥10–20% revenue lift at moderate redemption (≤40%).",
    "Keep effective cost below classic points at typical redemption bands.",
    "Ship Phase-1 pilot on one hero SKU within 2 weeks.",
  ],
  cta: "Plug in your real assumptions, snapshot the graphs, and run a 90-day pilot on a single SKU. Measure redemption%, CAC, and CLV lift—then scale.",
  render: () => <LegacyMount slug="tokenized-loyalty-simulator" />,
};

export default tokenizedLoyaltySimulator;
