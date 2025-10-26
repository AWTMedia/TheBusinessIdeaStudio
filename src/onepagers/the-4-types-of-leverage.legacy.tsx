import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const leverage: OnePager = {
  key: "the-4-types-of-leverage",
  question: "What are the 4 types of leverage?",
  hook: "Stack Media, Code, People, and Capital to compound results in 14-day sprints.",
  summary:
    "A practical map of the four types of leverage with signals, plays, KPIs, and a sprint template.",
  bullets: [
    "Media sells without meetings",
    "Code runs 24/7",
    "People free you to stay in your genius zone",
    "Capital buys speed and capacity",
  ],
  steps: [
    {
      t: "Pick primary lever",
      d: "Choose based on current constraint (proof, manual load, capacity, overload).",
    },
    {
      t: "Ship 14-day sprint",
      d: "Define outputs, KPIs, risks → mitigations; review weekly.",
    },
    {
      t: "Stack a second lever",
      d: "Combine for compounding returns (e.g., Media × Code).",
    },
  ],
  kpis: [
    "$/Booked",
    "Lead response time",
    "Automation success",
    "Content-assisted pipeline %",
  ],
  tools: ["CRM", "Scheduler", "Editor", "Ad Manager", "Automation"],
  cta: "Open the page and ship one 14-day sprint with a primary + secondary lever.",
  render: () => <LegacyMount slug="the-4-types-of-leverage" />,
};

export default leverage;
