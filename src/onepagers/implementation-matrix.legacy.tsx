import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const implementationMatrix: OnePager = {
  key: "implementation-matrix",
  question: "How do I start a business in 90 days?",
  hook: "A sequenced Foundations → Nurture & Qualification → Lead Gen → Conversion plan with timeline and KPIs.",
  summary:
    "This one-pager provides a week-by-week rollout for a nurture-first growth system. It includes phase cards, a 12-week Gantt-style timeline, supporting systems, and KPI bars, so a small team can execute predictably.",
  bullets: [
    "Four clear phases with outputs and ownership.",
    "Fixed 12-week visual timeline to keep pace and expectations aligned.",
    "System blocks and KPIs ensure you measure what matters at each stage.",
  ],
  steps: [
    {
      t: "Establish Foundations",
      d: "Principle: Clarity and tracking before scale. Levers: ICP, offer mapping, profile funnel, pixels/CRM. Takeaway — Ship instrumentation and single CTA first.",
    },
    {
      t: "Build Nurture & Qualification",
      d: "Core Idea — Educate and filter before adding traffic. Levers: content engine, email drips, community, lead scoring.",
    },
    {
      t: "Open Lead Gen Streams",
      d: "Levers: organic profile funnel, outbound to narrow ICP, paid magnet + retargeting. Takeaway — Add channels only after nurture exists.",
    },
    {
      t: "Install Conversion Systems",
      d: "Levers: story ad sequence, VSL/webinar/one-pagers, SDR follow-ups, sales framework. Takeaway — Turn warmed demand into revenue.",
    },
  ],
  kpis: [
    "Profile → CTA CTR",
    "Cold reply rate",
    "CPL & quality score",
    "YT watch time / Email click %",
    "Lead score (cold→warm→hot)",
    "Time-to-first-call",
    "Call→close rate",
    "Payback period",
  ],
  tools: [
    "YouTube",
    "Email/ESP",
    "Skool/Discord",
    "Calendly",
    "CRM/SMS",
    "Meta Ads",
  ],
  cta: "Open the matrix, align the team on this 12-week plan, and review KPIs weekly to stay on track.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="implementation-matrix" />,
};

export default implementationMatrix;
