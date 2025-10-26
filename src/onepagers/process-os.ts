// src/onepagers/process-os.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "process-os",
  question:
    "How do I document repeatable processes so I can deliver consistently at scale?",
  hook:
    "Codify how work gets done (SOPs), make it visible (boards & metrics), and enforce it with templates, checklists, and automations.",
  summary:
    "This is a repeatability question — turning good work into consistent work. The aim is to build an operating system that produces the same quality output, regardless of who executes.",

  // Implied Goals
  bullets: [
    "Consistency: Same inputs → same outputs across clients and team members.",
    "Speed: Less decision thrash; work moves through defined steps fast.",
    "Control: Clear ownership, SLAs, and metrics to spot & fix issues early.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🧱 1) SOP Architecture (Tribal Knowledge → Playbooks)",
      d: [
        "Principle: If it isn’t written, it doesn’t exist.",
        "Core Idea: Document the top 5–7 workflows in a uniform, one-page SOP format that anyone can follow.",
        "Key Levers: Pick the Flows — Intake → Qualification → Delivery → QA → Handover → Reporting → Renewal. One-Page SOP Template — Purpose (why it exists), Trigger (what starts it), Inputs (files/data), Steps (checkboxes, with roles), Outputs/Done (acceptance criteria), Owner/Backup + SLA, Tools/Links + Failure path ('If X fails, do Y'). Level of Detail — click-by-click for novices; link to deeper guides/videos for nuance. Pattern Libraries — reusable components (email snippets, proposal blocks, ad set templates, delivery checklists).",
        "Tools & Systems: Docs — Notion/Confluence with Loom walkthroughs embedded. Template Hub — central folder with versioned SOPs and templates.",
        "Takeaway: Standardize the format so every SOP feels familiar and is quick to use.",
      ].join(" "),
    },
    {
      t: "🛠️ 2) Workflow Execution Layer (Docs → Doing)",
      d: [
        "Principle: SOPs must drive tasks automatically — not live in a wiki graveyard.",
        "Core Idea: Convert SOPs into executable templates that spin up work with owners, SLAs, and checklists.",
        "Key Levers: Task Templates — each SOP = pre-built template with subtasks, fields (Owner, SLA, Priority), and attachments. Pipelines/Kanban — one board per value stream (Sales, Delivery, Content, Support) with clear stage definitions. Intake Forms → Auto-Tasks — Typeform/Tally/Checkout triggers create tasks/projects with the right template. Checklists & QA Gates — non-negotiable checks before moving stage (e.g., 'Creative meets spec,' 'QA signed'). Service Blueprints — swimlanes for Roles × Steps × Systems to expose handoffs and wait states. Observability — every stage change logs time; blocked items surface to an 'Escalations' view.",
        "Tools & Systems: PM — ClickUp/Asana/Trello with templates and automations. Triggers — Zapier/Make/n8n + webhooks from Stripe/Calendly/Typeform. Files — Google Drive auto-folders per client/project.",
        "Takeaway: Make the default path the right path by templating it.",
      ].join(" "),
    },
    {
      t: "📈 3) Governance & Improvement (Static → Self-Improving)",
      d: [
        "Principle: Processes decay unless reviewed and measured.",
        "Core Idea: Install a cadence and metrics so SOPs evolve with reality.",
        "Key Levers: RACI & DRIs — each workflow has a Directly Responsible Individual and backups. SLAs & KPIs — time to first response, SLA hit rate, cycle time, error/rework rate, CSAT/NPS, margin per project. Change Control — version SOPs; every incident → root cause → SOP update or new guardrail. WBR (Weekly Business Review) — review blocked items, misses, and one improvement per team. Training & Onboarding — role-based paths; certification checklists to 'graduate' operators. Audit Cadence — monthly spot checks; quarterly SOP overhaul.",
        "Tools & Systems: Dashboards — Looker Studio/Airtable Interfaces/PM reports. Incident Log — simple form to capture misses and fixes.",
        "Takeaway: The system gets better every week — on purpose, not by accident.",
      ].join(" "),
    },
  ],

  cta:
    "Scale is a byproduct of clear SOPs, executable templates, and a governance rhythm. When every repeatable task has a written play and an automated path, quality holds, speed increases, and the founder finally gets leverage.",
};

export default pager;