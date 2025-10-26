// src/onepagers/data-loop.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "data-loop",
  question:
    "How do I know what parts of my business are working — and what to stop doing?",
  hook:
    "Define a simple measurement model, instrument your funnel end-to-end, and run a weekly decision rhythm that funds winners and cuts noise.",
  summary:
    "This is a visibility question — turning guesses into evidence. The aim is to build a data loop that shows where growth really comes from and what to change next.",

  // Implied Goals
  bullets: [
    "Clarity: A few metrics that explain performance at a glance.",
    "Traceability: Every lead and sale has a source and cost.",
    "Actionability: A weekly cadence that turns numbers into decisions.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "📐 1) Measurement Model (Chaos → Clarity)",
      d: [
        "Principle: If everything is a KPI, nothing is.",
        "Core Idea: Ladder metrics from one North Star to a handful of input drivers and guardrails.",
        "Key Levers: North Star (pick one) — Lead-gen: Sales-Qualified Leads/week (SQLs); Subscription/SaaS: Active Subscribers; Ecom: Contribution Margin after CAC. Input Drivers — Reach → Sessions/Impressions; Capture → LP CVR, CPL; Conversion → SQ rate, Close rate, AOV/ARPA; Economics → CAC, Payback, Gross Margin. Guardrails — Refund %, Churn/Cancel rate, SLA hit rate, NPS/CSAT. Scorecard — 10–12 metrics max, weekly trend vs target.",
        "Takeaway: One North Star, few drivers, visible every week.",
      ].join(" "),
    },
    {
      t: "🧰 2) Instrumentation & Attribution (Blind → Traceable)",
      d: [
        "Principle: No source, no spend.",
        "Core Idea: Track the journey from click → lead → revenue with consistent IDs, UTMs, and events.",
        "Key Levers: UTM Discipline — utm_source / utm_medium / utm_campaign / utm_content on every link; use templates to standardize. Event Map — View → Lead → Qualified → Opportunity → Won (with timestamps and campaign IDs). Pixels & APIs — Meta/Google/LinkedIn pixels; server-side events where possible. CRM Hygiene — every lead has Source, Campaign, Content, Owner, Stage; no manual 'unknown'. Call/Email Capture — calendar + form IDs, call recordings summarized to attach intent and outcome. Attribution Model — start simple (last non-direct click) + sanity check with first-touch; upgrade later if needed. Single Source of Truth — a lightweight warehouse (Sheets/Airtable/HubSpot) feeding a Looker Studio dashboard.",
        "Tools & Systems: Analytics — GA4 + Tag Manager. Capture/CRM — HubSpot/Pipedrive/Airtable. Dashboards — Looker Studio. Ops Glue — Zapier/Make/n8n to sync IDs and events.",
        "Takeaway: Every lead should answer: From where? At what cost? Did it close?",
      ].join(" "),
    },
    {
      t: "🔁 3) Decision Rhythm & Experiments (Data → Action)",
      d: [
        "Principle: Metrics matter only when they change decisions.",
        "Core Idea: Run a weekly business review (WBR) and a rolling experiment backlog.",
        "Key Levers: WBR Agenda (45–60 min) — North Star vs target (4-week trend); Channel report: spend → clicks → leads → SQL → revenue → CAC/ROAS; Funnel leaks (LP CVR, SQ rate, close rate); Ops guardrails (SLA, NPS, refunds, churn); Decisions: Scale, Fix, Kill. Experiment Cards (ICE score) — Hypothesis, Metric, Variant(s), Run window, Success criteria. Budget Rules — move 20–30% of spend weekly from losers to winners; cap tests until n ≥ 100 clicks / 20 leads. Postmortems — for misses, add to 'Lessons' and update playbooks (headline, offer, audience).",
        "Takeaway: Same meeting, same scorecard, real budget moves — every week.",
      ].join(" "),
    },
  ],

  cta:
    "Data-driven doesn’t mean complex — it means one North Star, clean capture, and a weekly decision loop. When every lead is traceable and every meeting moves money, you stop guessing and start compounding what works.",
};

export default pager;