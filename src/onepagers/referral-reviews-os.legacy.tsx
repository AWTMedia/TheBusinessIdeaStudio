import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const referralReviewsOS: OnePager = {
  key: "referral-reviews-os",
  category: "Growth & Proof",
  question:
    "How do we engineer referrals and reviews to lower CAC and raise trust?",
  hook: "Turn peak customer moments into referrals and public proof with scripts, KPIs, and simple ops. Lower CAC with trust loops.",
  summary:
    "A compact operating system for referrals and reviews: track peak events, trigger templated asks, log intros and proof, and watch KPIs update live. Color-coded by function (emerald=referrals, indigo=reviews, amber=ops, rose=risks, slate=neutral).",
  bullets: [
    "Emerald: Referrals (intros, status, rewards).",
    "Indigo: Reviews (requests → posted, links).",
    "Amber: Peak events log (onboarding win, first ROI, QBR, support save).",
    "Scripts with merge tags + copy buttons.",
    "Live KPIs: referral rate, referral CVR, review velocity, time-to-review, rewards paid.",
  ],
  steps: [
    {
      t: "Log Peak Moments",
      d: "Capture onboarding wins, first ROI, QBRs, and support saves.",
    },
    {
      t: "Trigger Scripts",
      d: "Use merged templates to ask for reviews/referrals within 24h.",
    },
    {
      t: "Track Pipeline",
      d: "Record referral status (intro → qualified → won/lost) and rewards.",
    },
    {
      t: "Publish Proof",
      d: "Collect links/screenshots; feed back into marketing assets.",
    },
    {
      t: "Review KPIs Weekly",
      d: "Tune targets: 10–20% referral rate, ≥25% CVR, 3–5 new reviews/mo.",
    },
  ],
  kpis: [
    "Active clients count",
    "Referral rate (referred leads / active clients)",
    "Referral CVR (wins / referred leads)",
    "Review velocity (per week, last 30d)",
    "Avg time-to-review (requested → posted)",
    "Rewards paid (ZAR)",
  ],
  tools: [
    "Email/DM script templates with {{placeholders}}",
    "Peak event log & scheduler",
    "Referral pipeline board + rewards tracker",
    "Review request tracker (Google/Clutch/G2/Trustpilot)",
    "Proof vault (links, screenshots, quotes)",
  ],
  cta: "Open the one-pager, add this week’s peak events, send the merged asks, and review KPIs every Friday. Aim for one new posted review and one qualified intro per 5 active clients weekly.",
  render: () => <LegacyMount slug="referral-reviews-os" />,
};

export default referralReviewsOS;
