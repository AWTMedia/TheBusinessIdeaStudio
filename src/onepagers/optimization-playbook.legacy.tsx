import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const optimizationPlaybook: OnePager = {
  key: "optimization-playbook",
  question: "How do I quickly fix bottlenecks across my funnel?",
  hook:
    "A practical Issue → Action playbook to reduce costs, raise conversion, and tighten handoffs.",
  summary:
    "Use this one-pager to triage the biggest leaks in your funnel and deploy focused fixes. It covers high-cost traffic, weak profile conversion, DM-to-book gaps, show-up rate, and more—each with KPIs to watch and concrete actions.",
  bullets: [
    "Diagnose by issue; execute the matching action set.",
    "Track the right KPIs per stage to validate impact fast.",
    "Includes a 7–14 day experiment template to ship improvements.",
  ],
  steps: [
    {
      t: "Identify the top constraint",
      d: "Principle: Optimize the narrowest bottleneck first. Levers: traffic cost, profile conversion, DM→Booked, show %, proof. Takeaway — Fix one stage at a time to compound wins.",
    },
    {
      t: "Select matching action set",
      d: "Core Idea — Each issue maps to 3–4 proven actions. Takeaway — Fewer, stronger moves > scattered tweaks.",
    },
    {
      t: "Run a 7–14 day experiment",
      d: "Levers: clear hypothesis, primary KPI, owner, budget, timeline. Takeaway — Ship quickly, review weekly, keep what works.",
    },
  ],
  kpis: [
    "CPM/CPV",
    "Profile visit CPC",
    "CTR",
    "$/Follower",
    "Follower→DM %",
    "$/Booked Appt",
    "Show %",
  ],
  tools: ["Meta Ads", "IG/LI", "Calendly", "GA4", "CRM/SMS"],
  cta: "Open the playbook, pick your #1 issue, and run a 7–14 day test using the template.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="optimization-playbook" />,
};

export default optimizationPlaybook;