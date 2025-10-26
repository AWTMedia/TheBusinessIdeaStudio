import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const tenKInSixWeeks: OnePager = {
  key: "10k-in-6-weeks",
  category: "Revenue",
  question: "The 10k in 6 weeks challenge blueprint",
  hook: "A portable system: 3 weeks to build, 3 weeks to sell. Lead gen → nurture/qualify → conversion → onboarding.",
  summary:
    "A fixed-timeline challenge that ships a working revenue engine in six weeks. Use the prep stack to stand up assets and automations, then run a 3-week revenue sprint with clear guardrails, daily/weekly rhythm, KPIs, and risk controls.",
  bullets: [
    "3-week preparation → 3-week execution.",
    "Guardrails for leads, convos, bookings, show & close rates.",
    "Portable system stack across organic, outbound, paid, and referrals.",
  ],
  steps: [
    {
      t: "Prep (Weeks −3 to −1)",
      d: "ICP/offer/guarantees; profiles, Calendly, CRM, automations; 30 hooks; QA flows.",
    },
    {
      t: "Launch (Week 1)",
      d: "Publish 15 shorts + 2 long-form; DM keywords; outbound 3 sequences; book 14–18 calls.",
    },
    {
      t: "Optimize (Week 2)",
      d: "Double-down top hooks, add referral micro-offer, introduce upsell; keep cadence.",
    },
    {
      t: "Close (Week 3)",
      d: "Last-chance cadences, expand slots, PIF bonus; same-day onboarding & proof loop.",
    },
    {
      t: "Handoff",
      d: "Payment → contract → onboarding; micro-win in 48–72h; testimonial SOP → ads/content.",
    },
  ],
  kpis: [
    "Leads/wk ≥ 120",
    "Lead→Convo ≥ 35%",
    "Convo→Booked ≥ 25%",
    "Show ≥ 75%",
    "Close ≥ 25%",
    "PIF ≥ 40% of wins",
  ],
  tools: [
    "Notion (docs/board)",
    "CRM (Airtable/Pipedrive)",
    "Calendly",
    "Stripe",
    "Make/Zapier",
    "Clay/Apollo",
    "Instantly/Smartlead",
    "CapCut/Descript",
  ],
  cta: "Open the challenge and run the 6-week plan: stand up the system in Weeks −3…−1, then execute Weeks 1–3 against the guardrails and KPIs.",
  render: () => <LegacyMount slug="10k-in-6-weeks" />,
};

export default tenKInSixWeeks;
