// src/onepagers/differentiation.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "differentiation",
  question: "How do I stand out so clients choose me over competitors?",
  hook:
    "Own a sharp position, prove it with unique evidence, and deliver a signature experience competitors can’t copy.",
  summary:
    "This is a differentiation question — shifting from commodity to category-of-one. The aim is to build a distinct value narrative that changes how buyers compare options.",

  // Implied Goals
  bullets: [
    "Clarity: A one-sentence promise that is unmistakably yours.",
    "Proof: Evidence and outcomes others can’t claim or easily replicate.",
    "Experience: A signature way of working that buyers remember and talk about.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🧭 1) Positioning & POV (Generic → Recognized)",
      d: [
        "Principle: You don’t need to be better at everything — just be only at something.",
        "Core Idea: Narrow the ICP, outcome, and mechanism; then publish a point of view (POV) that reframes the buyer’s decision.",
        "Key Levers: Onlyness Statement — “We help [very specific ICP] achieve [singular outcome] using [named mechanism] within [time/scope].” POV Pillars — 3–4 non-obvious beliefs that drive your method (e.g., “Signal beats volume,” “Ops before ads”). Comparison Frames — “Old Way vs Our Way” visuals that make your approach feel inevitable. Category Angle — name your method/process (e.g., “Demand OS™”) to anchor memory. Focused Surface Area — say “no” to adjacent services that muddy the story.",
        "Takeaway: Different starts by being sharply specific — and memorable — on who/what/how.",
      ].join(" "),
    },
    {
      t: "📚 2) Proof Architecture (Claims → Confidence)",
      d: [
        "Principle: Differentiation sticks when it’s evidenced, not asserted.",
        "Core Idea: Build a layered proof stack that demonstrates your unique mechanism reliably creates outcomes.",
        "Key Levers: Mechanism Evidence — before/after dashboards, teardown videos, methodology whitepaper. Case Type Mix — 3 “quick wins,” 3 “turnarounds,” 3 “scale-ups” — all metric-led. Demonstrations — live audits/teardowns, public builds, sandbox access, ROI calculators. Third-Party Signals — certifications, partner badges, press mentions, community testimonials. Proof Placement — mini-receipts near every CTA; full case studies for deep readers.",
        "Tools & Systems: Capture — Loom/Fathom, Testimonial.to/Senja. Library — Notion/Airtable proof index tagged by industry, KPI, offer.",
        "Takeaway: Make it easy to verify you’re different — in numbers, not adjectives.",
      ].join(" "),
    },
    {
      t: "✨ 3) Signature Delivery (Comparable → Incomparable)",
      d: [
        "Principle: The easiest way to look different is to be different in how you deliver.",
        "Core Idea: Productize your service with a named, time-bound program, distinct artifacts, and service standards.",
        "Key Levers: Named Program — “90-Day [Outcome] Sprint” with milestones and acceptance criteria. Artifacts — dashboards, SOP packs, templates — deliverables clients keep (and show others). Service Standards — SLAs, weekly WBRs, escalation rules, proactive comms schedule. Onboarding Moments — kickoff scorecard, roadmap, “first 7 days wins.” Community Layer — office hours, peer channels, alumni perks — creates network effects.",
        "Tools & Systems: PM & Client Hub — ClickUp/Asana + shared Notion hub. Visibility — Looker Studio dashboards; automated weekly summaries.",
        "Takeaway: A signature experience makes apples-to-apples comparisons impossible.",
      ].join(" "),
    },
  ],

  cta:
    "Standing out isn’t louder marketing — it’s sharper positioning, undeniable proof, and a signature way of working. When those align, buyers stop comparing prices and start choosing you for the way you uniquely solve their problem.",
};

export default pager;