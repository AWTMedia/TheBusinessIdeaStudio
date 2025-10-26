import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const the4TypesOfLeadFlowModels: OnePager = {
  key: "the-4-types-of-lead-flow-models",
  category: "Acquisition",
  question: "What are the 4 types of lead flow models and which should I use?",
  hook: "Map how leads enter, move, and convert in your business. Choose the right model—Inbound, Outbound, Referral, or Paid—for your growth stage and resources.",
  summary:
    "This one-pager explains the four core lead flow models: Inbound (content-driven), Outbound (direct outreach), Referral (trust-based), and Paid (advertising). Each model has distinct mechanics, strengths, and ROI drivers. Learn how to align model selection to your business type, sales cycle, and goals.",
  bullets: [
    "Inbound → Attract leads via content, SEO, and value-first funnels.",
    "Outbound → Proactively reach ideal clients via cold outreach.",
    "Referral → Leverage existing trust through partners and clients.",
    "Paid → Use advertising to generate leads at scale and speed.",
  ],
  steps: [
    {
      t: "Understand Each Model",
      d: "Study how Inbound, Outbound, Referral, and Paid models work in practice.",
    },
    {
      t: "Align With Your Business Type",
      d: "Choose based on audience, price point, and cycle (e.g., B2B favors Outbound; consumer favors Inbound).",
    },
    {
      t: "Map the Flow",
      d: "Visualize how leads enter, are nurtured, and convert—ensure no gaps between stages.",
    },
    {
      t: "Measure & Optimize",
      d: "Track KPIs like CTR, cost per lead, conversion rate, and ROI to refine the model over time.",
    },
  ],
  kpis: [
    "Cost per Lead (CPL)",
    "Lead-to-Call Conversion Rate",
    "Booking Rate %",
    "Close Rate %",
    "Lead Velocity (per week)",
  ],
  tools: [
    "CRM (HubSpot, Pipedrive)",
    "Email Outreach (Instantly, Apollo)",
    "Ads Manager (Meta, Google)",
    "Automation (Zapier, Make)",
    "Analytics Dashboard (GA4, Notion, Sheets)",
  ],
  cta: "Open the one-pager and identify which lead flow model your business currently runs on. Then add a complementary secondary model to diversify acquisition channels.",
  render: () => <LegacyMount slug="the-4-types-of-lead-flow-models" />,
};

export default the4TypesOfLeadFlowModels;
