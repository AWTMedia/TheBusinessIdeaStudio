// src/onepagers/delegation-engine.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "delegation-engine",
  question:
    "When should I hire help or delegate tasks — and what should I outsource first?",
  hook:
    "Delegate outcomes, not tasks: quantify the work, productize roles, and start with low-risk, high-leverage handoffs.",
  summary:
    "This is a capacity question — removing the founder as the bottleneck. The aim is to build a small but scalable org where the right people, tools, and SOPs multiply your output.",

  // Implied Goals
  bullets: [
    "Leverage: Free founder time from repeatable work to high-value decisions.",
    "Reliability: Consistent delivery via roles, SOPs, and SLAs — not heroics.",
    "Speed to Impact: Prioritize handoffs that return time and improve throughput quickly.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🔹 1) Work Audit & Role Design (Overload → Clarity)",
      d: [
        "Principle: Hire for outcomes you can measure.",
        "Core Idea: Inventory everything you do, quantify time and value, then group duties into outcome-owned roles.",
        "Key Levers: Time–Value Audit (2 weeks) — log tasks; tag each as $10, $100, $1,000, or $10,000/hr value. 80/20 Map — identify the 20% of tasks consuming 80% of time with low strategic value. Role Canvases (one page) — mission, 3–5 outcomes, KPIs/SLAs, tools, decision rights, boundaries. Sequence to Delegate — first: repetitive, rules-based; next: process-driven production; last: strategy/creative. Cost Model — target 3–5× ROI on role (time saved × your effective hourly rate or gross margin lift).",
        "Takeaway: Design roles around measurable outcomes — not generic job descriptions.",
      ].join(" "),
    },
    {
      t: "🔹 2) SOPs & Delegation Ladder (Chaos → Repeatability)",
      d: [
        "Principle: Delegation fails when the path isn’t written.",
        "Core Idea: Turn recurring work into SOPs and climb the delegation ladder from demo → joint → shadow → autonomous.",
        "Key Levers: SOP Template — Purpose → Trigger → Inputs → Steps (checkboxes) → Outputs (acceptance criteria) → Owner → SLA → 'If X fails, do Y.' Delegation Ladder — Demo: you do it on Loom. Do Together: they follow the SOP live. They Do, You Watch: QA before delivery. They Do, You Audit: spot checks; track KPIs. They Own: improve SOPs and flag risks. Quality Gates — required checklists and QA sign-offs before 'Done.' Tooling — ClickUp/Asana templates; Drive/Notion knowledge base; Zapier/Make for intake → task creation.",
        "Takeaway: Write it once, teach it twice, then let the metrics manage it.",
      ].join(" "),
    },
    {
      t: "🔹 3) Hiring/Outsourcing Playbook (Bottleneck → Extended Capacity)",
      d: [
        "Principle: Start with external capacity; internalize only proven, core functions.",
        "Core Idea: Use a 'contract-first, convert-later' approach with clear scorecards and a tight onboarding sprint.",
        "Key Levers: What to Outsource First — Admin/OPS (inbox triage, scheduling, reporting, file ops). Production (editing, design, repurposing, research, QA). Ads/Tech (media ops, analytics tagging, web maintenance). What to Keep In-House Initially — offer, messaging, pricing, sales calls, client strategy. Scorecards — 3–5 metrics/role (SLA hit rate, cycle time, error rate, throughput, satisfaction). Trial Sprints (2–4 weeks) — paid pilot with real work and daily async standups; extend or exit fast. Talent Sources — referrals, specialized job boards, vetted agencies; always test with a work sample. Comp & Cadence — clear rates, scope fences, weekly WBR, monthly retro; document improvements to SOPs.",
        "Takeaway: Buy capacity fast, prove ROI, then decide whether to hire, extend, or replace.",
      ].join(" "),
    },
  ],

  cta:
    "Delegate when repeatable work crowds out high-value decisions. Audit your time, design outcome-owned roles, document the path, and pilot with contractors. When the work runs on SOPs and scorecards, hiring stops being a risk and becomes a multiplier.",
};

export default pager;