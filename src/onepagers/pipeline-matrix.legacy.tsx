import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const pipelineMatrix: OnePager = {
  key: "pipeline-matrix",
  question: "How do I run a full Market → Lead Gen → Nurture → Conversion pipeline?",
  hook:
    "A single-page operating diagram you can run in any niche, from market selection to conversion systems.",
  summary:
    "This one-pager maps an avatar-led, system-first pipeline. It covers market/value selection, lead gen systems, nurture & qualification, conversion layers, a production method, and KPIs—so a small team can execute repeatably.",
  bullets: [
    "Market & value selection upfront to ensure ROI potential.",
    "Parallel Stage 2 lanes: Lead Gen, Nurture/Qualification, Conversion.",
    "Production & distribution method to feed every layer continuously.",
  ],
  steps: [
    {
      t: "Pick the right market & value",
      d: "Principle: Wealthy market + urgent value. Levers: ticket size, CAC tolerance, ΔROI vs status quo. Takeaway — 1 avatar • 1 problem • 1 belief shift • 1 CTA.",
    },
    {
      t: "Stand up the three core lanes",
      d: "Core Idea — Lead Gen (organic/outbound/paid), Nurture/Qualify (education + proof), Conversion (assets + SDR + calls). Takeaway — Warm before you push for the sale.",
    },
    {
      t: "Install a weekly production method",
      d: "Levers: record → clip → repurpose → long-form → schedule → insert in flows. Takeaway — Consistency beats bursts.",
    },
  ],
  kpis: [
    "Profile → CTA CTR",
    "Cold reply rate",
    "Magnet CPL & quality",
    "Email/YT engagement",
    "Lead score progression",
    "Time-to-first-call",
    "Booked→Close rate",
    "Payback period",
  ],
  tools: ["YouTube", "Email/ESP", "LinkedIn/X", "Calendly", "CRM/SMS", "Meta Ads"],
  cta: "Open the matrix, choose your avatar and value, then execute the Stage 2 lanes while feeding them via the production method.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="pipeline-matrix" />,
};

export default pipelineMatrix;