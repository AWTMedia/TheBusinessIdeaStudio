import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const assessmentLeadGen: OnePager = {
  key: "assessment-leadgen",
  category: "Acquisition",
  question:
    "How do we build a simple online assessment that reliably generates qualified demand and clear next steps?",
  hook: "Leads power everything. Ship a one-page flow: plan the landing, run a 15-question assessment, reveal a score with insights, and present tailored next steps.",
  summary:
    "A print-clean one-pager that guides you from landing page planning to a 15-question scorecard (10 best-practices + 5 qualifying) and a dynamic results section that converts. Includes copy scaffolds for hooks/value prop/credibility/CTA, live scoring logic, heat bands, insights, and next-step presets aligned to user readiness.",
  bullets: [
    "Landing planner: frustration/result hooks, 3-pillar value prop, credibility triad, CTA copy.",
    "Questionnaire: contact capture + 10 best-practice checkboxes + 5 qualifying selects/text.",
    "Scoring: auto-normalized 0–100 with heat band (Cold/Warm/Hot) and progress bar.",
    "Dynamic results: big reveal, three tailored insights, and next-step actions by score.",
    "Signals: preferred solution → implied budget bands for routing.",
  ],
  steps: [
    {
      t: "Plan the landing",
      d: "Write frustration + results hooks, 3-area value prop, credibility lines, and a clear CTA.",
    },
    {
      t: "Capture contact",
      d: "Require name + email to enable the assessment. (Phone/location optional.)",
    },
    {
      t: "Ask the 15",
      d: "Ten best-practice checkboxes (foundations) + five qualifying questions (fit & intent).",
    },
    {
      t: "Score & label",
      d: "Normalize to 100, band into Cold (<45), Warm (45–74), Hot (≥75).",
    },
    {
      t: "Reveal & guide",
      d: "Show score, 3 insights, and tailored next steps (free → group → 1:1/DFY).",
    },
    {
      t: "Route & follow up",
      d: "Use solution preference/budget signal for pipeline routing and offers.",
    },
  ],
  kpis: [
    "Landing → Start rate: 20–40%",
    "Completion rate: 55–85%",
    "Qualified rate (Warm/Hot): 40–70% of completions",
    "Booked calls from Hot: 20–40%",
    "Reply time SLA: < 24h for Hot, < 48h for Warm",
  ],
  tools: [
    "Hook templates (Frustration / Readiness) + directive subheading",
    "3-pillar value prop + credibility checklist",
    "Best-practice library (10) with auto-score",
    "Qualifying bank (situation, 90-day outcome, obstacle, solution, notes)",
    "Heat bands + implied-budget mapping by solution type",
    "Results page scaffold: Big Reveal → Insights (3) → Tailored next steps",
  ],
  targets: [
    "Ship v1 in a single page; iterate weekly on completion and qualified rates.",
    "Collect 10–15 completions before changing structure; tweak copy/CTA first.",
    "Maintain clear contact gating (name + email) before enabling answers.",
    "Keep questions scannable; minimize friction, use plain language.",
  ],
  cta: "Draft hooks and value prop, require contact, publish the 15-question assessment, and go live. Review completions and qualified rates weekly, then tune copy, sequencing, and next-step offers based on score bands and solution preference.",
  render: () => <LegacyMount slug="assessment-leadgen" />,
};

export default assessmentLeadGen;
