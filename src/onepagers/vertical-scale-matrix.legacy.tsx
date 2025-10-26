import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const verticalScaleMatrix: OnePager = {
  key: "vertical-scale-matrix",
  question:
    "How do I build a content system that scales a vertical business—end to end?",
  hook: "A pyramid-based system (Consulting Insights → Proof & Story → Snippets) with a 12-week cadence, production method, and KPIs.",
  summary:
    "This one-pager operationalizes a nurture-first, avatar-led content engine that drives qualified attention, belief, trust, and conversion. It combines top-layer consulting insights, mid-layer proof & stories, and bottom-layer magnet snippets into a repeatable pipeline with weekly production and clear KPIs.",
  bullets: [
    "Top/Middle/Bottom ‘Pyramid Flow’ for authority, trust, and volume.",
    "12-week timeline to keep cadence across layers and conversion paths.",
    "Production & distribution loop that continuously feeds all lanes.",
  ],
  steps: [
    {
      t: "Define the ICP and value to deliver",
      d: "Principle: One avatar → one problem → one belief shift → one CTA. Takeaway — Clarity compounds across the system.",
    },
    {
      t: "Stand up the Pyramid Flow",
      d: "Core Idea — Ship Consulting Insights (top), Proof & Story (middle), and Snippets & Magnets (bottom). Levers: formats, angles, and resonance per layer.",
    },
    {
      t: "Run the weekly production method",
      d: "Levers: record → clip → repurpose → long-form → schedule → insert into flows. Takeaway — Consistency beats bursts.",
    },
  ],
  kpis: [
    "Profile → CTA CTR",
    "Email open/click",
    "YT watch time",
    "Lead score progression",
    "Time-to-first-call",
    "Booked→Close rate",
    "Payback period",
  ],
  tools: [
    "YouTube",
    "Instagram/Stories",
    "LinkedIn/X",
    "ESP/Email",
    "Calendly",
    "CRM/SMS",
  ],
  cta: "Open the matrix, choose your avatar and core value, then run the 12-week cadence while tracking the KPIs above.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="vertical-scale-matrix" />,
};

export default verticalScaleMatrix;
