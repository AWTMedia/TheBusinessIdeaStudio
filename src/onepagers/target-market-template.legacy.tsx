import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const targetMarketTemplate: OnePager = {
  key: "target-market-template",
  question: "How do I define my target market and generate platform-ready targeting?",
  hook:
    "An editable, exportable template to define avatar, psychometrics, interests, platform recipes, and messaging—ready to copy-paste.",
  summary:
    "This one-pager lets you capture your market, avatar, psychometrics, interests, and job titles, then auto-generates Meta/LinkedIn/YouTube/CRM targeting strings, messaging angles, content pillars, and hashtags. Export the JSON for reuse.",
  bullets: [
    "Editable fields for avatar, pain points, platforms, titles, behaviors.",
    "Auto-generated platform recipes and messaging blocks.",
    "Export JSON for the model and outputs; print-friendly layout.",
  ],
  steps: [
    {
      t: "Fill core fields",
      d: "Principle: Start with avatar, pains, and platforms. Levers: psychometrics, job titles, behavioral tags. Takeaway — Inputs drive precise targeting.",
    },
    {
      t: "Review auto-generated recipes",
      d: "Core Idea — Platform-ready strings for Meta, LinkedIn, YouTube, and CRM lookalikes. Takeaway — Copy/paste to test fast.",
    },
    {
      t: "Export & iterate",
      d: "Levers: export model JSON, outputs JSON, print to PDF. Takeaway — Reuse across projects and refine weekly.",
    },
  ],
  kpis: [
    "Audience definition completeness",
    "Creative-message fit score",
    "First test lead quality",
  ],
  tools: ["Meta Ads", "LinkedIn", "YouTube/Google", "CRM/ESP"],
  cta: "Open the template, complete the inputs, copy the recipes, and launch your first targeting tests.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="target-market-template" />,
};

export default targetMarketTemplate;