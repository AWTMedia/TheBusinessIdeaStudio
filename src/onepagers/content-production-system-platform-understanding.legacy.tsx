import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const cpsPlatformUnderstanding: OnePager = {
  key: "content-production-system-platform-understanding",
  question:
    "How should we tailor formats, structure, pacing, and mindset per platform?",
  hook: "A compact map of formats, structures, pacing, and platform mindsets to operationalize the ideate→produce→repurpose→distribute→track→iterate loop.",
  summary:
    "This one-pager standardizes platform knowledge: what to publish, how to structure it, how fast to pace it, and what each audience expects. Built for MacBook Air and printing.",
  bullets: [
    "Production Loop overview with ‘Step’ chips.",
    "Platform format libraries (TikTok, X, Instagram, LinkedIn, YouTube, plus extended set).",
    "Content structure guidance: Hook / Body / CTA + YouTube thumbnail-promise note.",
    "Pacing & cadence table by platform.",
    "Platform mindset cards to align tone and intent.",
  ],
  steps: [
    { t: "Choose core platforms", d: "Select 2–3 primary, 1–2 secondary." },
    {
      t: "Lock formats & cadences",
      d: "Match to pacing table; set weekly quotas.",
    },
    { t: "Standardize structure", d: "Hook/Body/CTA templates per platform." },
    {
      t: "Instrument tracking",
      d: "Name conventions; capture hook-hold/CTR, etc.",
    },
    { t: "Iterate weekly", d: "Double-down winners; retire losers." },
  ],
  kpis: [
    "Hook-hold %",
    "CTR",
    "Watch time",
    "Saves/Shares",
    "Conversion %",
    "Output/Week",
  ],
  tools: [
    "Scheduler",
    "Analytics (GA4/Native)",
    "Asset tracker",
    "Captioning/Editing",
    "Docs/Notion",
  ],
  cta: "Open the page, pick your platforms, and set this quarter’s cadence and templates.",
  render: () => (
    <LegacyMount slug="content-production-system-platform-understanding" />
  ),
};

export default cpsPlatformUnderstanding;
