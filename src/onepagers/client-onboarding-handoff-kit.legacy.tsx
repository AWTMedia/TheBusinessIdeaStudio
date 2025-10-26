import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const clientOnboardingHandoffKit: OnePager = {
  key: "client-onboarding-handoff-kit",
  question: "Client Onboarding Process",
  hook:
    "A duplicable onboarding kit that compresses Time-to-Value with clear RACI, SLAs, access checklists, automations, and a 0→90 day plan.",
  summary:
    "Use this matrix to standardize handoff, kickoff, access, success planning, weekly comms, and reviews. It’s designed to be duplicated per client: set labels once, run the same reliable process every time, and print when needed.",
  bullets: [
    "Quick duplicate controls for brand/offer/client.",
    "RACI/SLAs, step-by-step process string, and access checklists.",
    "0→90 day timeline, 30/60/90 success plan, automation map, templates, and risks.",
  ],
  steps: [
    {
      t: "Duplicate & label",
      d: "Principle: Standardize first. Core Idea — set Business/Offer/Client labels once to reuse. Takeaway — consistency beats improvisation.",
    },
    {
      t: "Run the process string",
      d: "Levers: Handoff pack → Welcome & Intake → Access → Kickoff → Success Plan → Sprint 1 micro-win (≤D7).",
    },
    {
      t: "Automate and enforce SLAs",
      d: "Takeaway — automate reminders, stage moves, and docs so nothing slips.",
    },
  ],
  kpis: [
    "Time-to-Value (days)",
    "Kickoff lag (days)",
    "Onboarding completion %",
    "NPS @ D30",
    "Weekly update SLA %",
  ],
  tools: ["HubSpot/CRM", "Calendly", "GA4 + GTM", "n8n/Make", "Slack", "Drive/Notion"],
  cta: "Open the kit, set your labels, and run the 0→90 plan to deliver a Day-7 micro-win reliably.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="client-onboarding-handoff-kit" />,
};

export default clientOnboardingHandoffKit;