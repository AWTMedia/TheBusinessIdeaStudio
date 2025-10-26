import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const personalBrandAffiliateModel: OnePager = {
  key: "personal-brand-affiliate-model",
  category: "Growth Systems",
  question: "How can I monetize my brand through performance-based partnerships?",
  hook:
    "A creator-led affiliate model where your personal brand drives leads, qualifies buyers, and earns on outcomes without delivery.",
  summary:
    "The Personal Brand Affiliate Model transforms your personal brand into a scalable, performance-based revenue system. You generate attention, nurture leads, and hand off qualified buyers to partners who fulfill — earning recurring commissions or rev-share on results.",
  bullets: [
    "Creator-led affiliate structure with qualified handoffs.",
    "Outcome-based commissions (10–20%) tied to partner success.",
    "Trust-led, high-ticket growth system that compounds authority and income.",
  ],
  steps: [
    { t: "Awareness", d: "Create content that builds trust and attracts inbound attention." },
    { t: "Nurture", d: "Use DM/email automation to segment, qualify, and score leads." },
    { t: "Conversion", d: "Handoff qualified leads to partners with transparent tracking." },
    { t: "Revenue", d: "Earn recurring commissions or percentage of deal value." },
  ],
  kpis: [
    "Qualified leads generated",
    "Partner close rate",
    "Average commission per deal",
    "Recurring monthly rev-share",
  ],
  tools: [
    "Content & lead magnets",
    "DM automations",
    "Partner attribution tracker",
    "Playbook templates",
  ],
  cta: "Open the playbook to implement your own Personal Brand Affiliate funnel and start earning on performance.",
  render: () => <LegacyMount slug="personal-brand-affiliate-model" />,
};

export default personalBrandAffiliateModel;