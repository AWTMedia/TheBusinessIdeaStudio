import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const clientPipeline: OnePager = {
  key: "client-pipeline",
  question:
    "How do I design and measure a complete client acquisition pipeline?",
  hook: "A nurture-first, four-phase pipeline system designed for predictable ROI — from foundations to conversion.",
  summary:
    "This one-pager lays out a full-funnel pipeline framework for service-based or growth-stage businesses. It defines each system (Foundations, Nurture, Lead Generation, Conversion), provides KPIs, optimization playbooks, and loops for continuous improvement. Built for agency, SaaS, and consultancy teams optimizing client acquisition.",
  bullets: [
    "Four interconnected pipeline systems with measurable acceptance criteria.",
    "Unified tech stack and KPI structure for clarity and accountability.",
    "Optimization and KPI loop to drive continuous improvement.",
  ],
  steps: [
    {
      t: "Build Foundations",
      d: "Principle: Market-match and measurement first. Levers: avatar definition, profile funnel, proof library, KPI tracking. Takeaway — Establish clarity before traffic.",
    },
    {
      t: "Nurture & Qualify",
      d: "Core Idea — Educate and filter before conversion. Levers: content ecosystem, scoring, email drips, community, DM flows. Takeaway — Warm before selling.",
    },
    {
      t: "Lead Generation",
      d: "Principle: Open consistent qualified traffic. Levers: outbound, organic funnels, paid magnets, retargeting. Takeaway — Traffic that’s measurable, not random.",
    },
    {
      t: "Conversion & Optimization",
      d: "Core Idea — Close predictably with feedback loops. Levers: story ad sequence, SDR automation, sales frameworks, KPI loop. Takeaway — System, not scripts.",
    },
  ],
  kpis: [
    "CPL (Cost per Lead)",
    "Profile → CTA CTR",
    "Cold reply rate",
    "Qualified % of followers",
    "Show-up rate",
    "Close rate",
    "Payback period",
    "ROAS",
  ],
  tools: [
    "HubSpot",
    "Meta/LinkedIn Ads",
    "Klaviyo",
    "n8n",
    "Calendly",
    "Webflow/Framer",
    "Sales Navigator",
    "Instantly",
  ],
  cta: "Review each system’s criteria, wire up tracking, and run the KPI loop weekly to identify bottlenecks and scale sustainably.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="client-pipeline" />,
};

export default clientPipeline;
