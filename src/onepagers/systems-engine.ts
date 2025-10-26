// src/onepagers/systems-engine.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "systems-engine",
  question: "How do I automate my business so I’m not trading time for money?",
  hook: "Standardize the work, then let software and simple roles do the work.",
  summary:
    "This is a leverage question — turning founder effort into repeatable, scalable systems. The aim is to build a self-running machine where inputs (leads, orders, tasks) flow through documented processes, automations, and lightweight ops.",

  // Implied Goals
  bullets: [
    "Clarity: Every outcome has a single owner, a single workflow, and a visible status.",
    "Leverage: Software handles repeatable steps; humans handle judgment and relationships.",
    "Reliability: Metrics and alerts catch failures before customers feel them.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🗺️ 1) Process Mapping & SOPs (Chaos → Clarity)",
      d: [
        "Principle: You can’t automate what isn’t standardized.",
        "Core Idea: Capture the 5–7 core workflows end-to-end and turn them into click-by-click SOPs.",
        "Key Levers: Identify Core Flows — Lead → Qualification → Proposal → Fulfillment → Reporting → Renewal/Referral. Define DRI & SLA — Directly Responsible Individual + deadlines for each stage. SOP Format — Purpose → Trigger → Inputs → Steps (checkboxes) → Outputs → Owner → Tools. Visual Map — Simple swimlane or Kanban (To Do → Doing → Done) tied to statuses your tools can read. Fail-safes — 'If X fails, do Y' paths + escalation channel.",
        "Tools & Systems: Docs — Notion/Confluence + Loom screen captures. Workboard — ClickUp/Asana/Trello with custom fields (Owner, SLA date, Status, Priority).",
        "Takeaway: Standardize first; automation without SOPs just speeds up the mess.",
      ].join(" "),
    },
    {
      t: "🤖 2) Automation Stack & Orchestration (Manual → Automatic)",
      d: [
        "Principle: Automate triggers between systems, not entire jobs.",
        "Core Idea: Use event-driven automations to move data, notify people, and launch checklists — with observability.",
        "Key Levers: Capture & Route — form/checkout → CRM row → Slack alert → task template. No-Code/Low-Code — Zapier/Make for 80%; n8n/cloud functions for edge cases. Source of Truth — one database (Airtable/HubSpot/Notion DB) feeds everything else. State Changes, Not Polling — webhooks (Stripe, Calendly, Typeform) trigger flows instantly. Observability — every automation logs success/fail; failures ping a #ops-alerts channel. AI Helpers — summarize calls, draft emails, tag intents, and generate first-pass docs reviewed by humans.",
        "Tools & Systems: Glue — Zapier/Make/n8n, Webhooks, Cloudflare Workers. Data/CRM — Airtable/HubSpot/Notion DB. Comms — Slack/Discord for alerts; Gmail for templated replies. Payments & Scheduling — Stripe, Paddle, Calendly/TidyCal. Docs & Files — Google Drive with structured folders auto-created per client/project.",
        "Takeaway: Great automation is boring: clear triggers, tidy data, loud failures.",
      ].join(" "),
    },
    {
      t: "🧑‍✈️ 3) Delegation & Operating Cadence (Founder-Centric → Team-Run)",
      d: [
        "Principle: Systems scale when small roles own outcomes, not tasks.",
        "Core Idea: Create a minimal 'Ops Pod' with clear swimlanes and a weekly drumbeat.",
        "Key Levers: Three Roles — OPS COORDINATOR: opens/assigns work, watches SLAs, clears blockers. FULFILLMENT SPECIALIST: delivers core service using SOPs and templates. ANALYST/QA: checks outputs, compiles weekly metrics, maintains dashboards. Cadence — Daily standup (15m), Weekly WBR (45–60m), Monthly Retros (improvements + SOP updates). Dashboards — Time to first response, SLA hit rate, cycle time, error rate, NPS/CSAT, gross margin per project. Continuous Improvement — every miss → add step to SOP, add guardrail to automation, or add checklist item.",
        "Tools & Systems: Standards — RACI chart, role scorecards (3–5 metrics each). Dashboards — Looker Studio/Airtable Interfaces/HubSpot reports.",
        "Takeaway: The machine runs on people, but people run on cadence.",
      ].join(" "),
    },
  ],

  cta:
    "Freedom comes from clarity + automation + cadence. Standardize the work, make software move it, and let a small team own outcomes. Do that, and your business keeps running — whether you’re at the desk or not.",
};

export default pager;