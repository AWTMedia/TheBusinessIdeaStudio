import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const ugcBrandsGrowthMoneyModels: OnePager = {
  key: "ugc-brands-growth-money-models",
  question:
    "How do we scale brands with UGC and AI-managed affiliate engines without paid ads?",
  hook: "Zero-ad-spend growth: capture UGC automatically, recruit advocates with AI, and compound referrals — all in one loop.",
  summary:
    "This one-pager packages the UGC + Affiliate growth system into a deployable plan: executive framing, ICPs, positioning, lead-gen matrix, SEO/GEO angles, landing-page frameworks by market, and a seven-step execution roadmap. Built in the Matrix theme for MacBook Air + print.",
  bullets: [
    "Executive Summary with value prop and targets.",
    "Market Overview: locations, targets, ICP profile.",
    "Problem → Solution narrative with automation focus.",
    "Service Breakdown (capture → recruit → reward → amplify).",
    "Awareness-level elevator pitches.",
    "Business infrastructure: core, sales, trust, fulfillment.",
    "SEO & GEO keyword pairs; positioning statements.",
    "Lead-Gen Summary Matrix across 7 ICPs × 6 geos.",
    "Landing-page frameworks per ICP with ‘Key Automations’.",
    "Next Steps plan + summary timeline.",
  ],
  steps: [
    {
      t: "Brand & site",
      d: "Authority hub, clear service stack, proof layer.",
    },
    { t: "ICP pages", d: "7 landing pages tailored to target markets." },
    { t: "Prospecting engine", d: "Cold email → LP → booking; CRM tagging." },
    {
      t: "Automation demos",
      d: "Show UGC→Affiliate loop with Loom walkthroughs.",
    },
    { t: "Onboarding system", d: "Forms, client portal, SOPs, alerts." },
    { t: "Content engine", d: "LinkedIn/IG cadence + blog frameworks." },
    { t: "Delegate & scale", d: "VA hire, SOPs, weekly dashboards." },
  ],
  kpis: [
    "UGC submissions / week",
    "Approved UGC → publish rate",
    "Advocate sign-ups / month",
    "Referral revenue %",
    "Cost-free CAC (referrals/UGC)",
    "Time-to-launch (days)",
  ],
  tools: [
    "Zapier/Make/N8N",
    "Shopify/Woo + Stripe/PayPal",
    "Calendly/CRM (Airtable/Pipedrive)",
    "Clay/Apollo (prospecting)",
    "CapCut/Descript (editing)",
    "Notion (SOPs/portal)",
  ],
  cta: "Open the page, select an ICP to ship first, and use the Next Steps cards to launch the zero-ad-spend loop this week.",
  render: () => <LegacyMount slug="ugc-brands-growth-money-models" />,
};

export default ugcBrandsGrowthMoneyModels;
