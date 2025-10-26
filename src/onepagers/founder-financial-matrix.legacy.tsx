import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const founderFinancialMatrix: OnePager = {
  key: "founder-financial-matrix",
  question:
    "How do you model ad spend, CAC, ASP and close rate?",
  hook: "An interactive matrix for founders to model ad spend, CAC, ASP, close rate, and people/tools budgets—then stress-test scenarios.",
  summary:
    "This one-pager helps you set monthly budgets, sanity-check CAC math, and preview Conservative/Base/Aggressive outcomes. Adjust sliders for spend, shown qualified, close rate, ASP, and overhead to see real-time impact on deals, revenue, ROAS, and breakeven.",
  bullets: [
    "Editable assumptions for spend, show %, close %, ASP, and overhead.",
    "Two CAC views: per-shown ÷ close vs spend ÷ deals.",
    "Scenario cards (Conservative/Base/Aggressive) to plan risk & upside.",
  ],
  steps: [
    {
      t: "Set assumptions",
      d: "Principle: Model the unit economics before scaling. Levers: Ad spend, shown qualified, close %, ASP, per-shown cost, overhead. Takeaway — Know CAC and breakeven up front.",
    },
    {
      t: "Review scenarios",
      d: "Core Idea — Compare Conservative/Base/Aggressive to understand sensitivity. Takeaway — Align budget with acceptable downside.",
    },
    {
      t: "Allocate by phase",
      d: "Levers: Foundations, Nurture, Lead Gen, Conversion ranges. Takeaway — Resource the container before flooding traffic.",
    },
  ],
  kpis: [
    "Deals/mo",
    "Revenue/mo",
    "ROAS",
    "Ad CAC / deal",
    "All-in CAC / deal",
    "Payback period",
  ],
  tools: [
    "GA4 + GTM",
    "HubSpot/CRM",
    "n8n alerts",
    "Spreadsheets",
    "Ads Manager",
  ],
  cta: "Open the matrix, set your real numbers, and lock budgets before scaling campaigns.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="founder-financial-matrix" />,
};

export default founderFinancialMatrix;
