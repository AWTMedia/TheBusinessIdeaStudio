// src/onepagers/lead-rhythm.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "lead-rhythm",
  question: "How do I reduce fluctuating lead flow?",
  hook: "Here’s the Lead Rhythm System that ended feast-or-famine months for solo founders permanently.",
  summary:
    "This is a lead stability question—about creating consistent, predictable growth instead of random spikes and droughts. The goal is to engineer a Lead Rhythm System that keeps qualified opportunities flowing every week—independent of mood, luck, or motivation.",

  // Implied Goals
  bullets: [
    "Stability: Eliminate the roller-coaster of unpredictable months.",
    "Control: Build a system you can run and measure, not a guessing game.",
    "Scalability: Turn client acquisition into a repeatable, compounding process.",
  ],

  // The Answer → three engines
  steps: [
    {
      t: "⚡ 1) Lead-Generating System",
      d: [
        "Principle: Consistency in action produces consistency in outcome.",
        "Core Idea: Create a fixed process—whether that’s a profile funnel, automated outreach, or a daily lead scraper—and run it religiously. The power lies in repetition, not complexity.",
        "Key Levers: Defined pipeline (know where leads come from each week), daily discipline (small fixed routines compound into steady inflow), and systemization (use automation or checklists to remove variance).",
        "Takeaway: Predictable lead flow starts with a predictable process—not inspiration or luck.",
      ].join(" "),
    },
    {
      t: "🎯 2) Lead-Qualifying System",
      d: [
        "Principle: A healthy pipeline is defined by quality, not just quantity.",
        "Core Idea: Build a scoring system that filters who’s worth your time. Define 3–5 key metrics—like budget, urgency, and fit—that determine if a lead is ‘in’ or ‘out.’",
        "Key Levers: Decision variables (pre-set rules remove emotion), pipeline efficiency (fewer, better leads = more focus), and consistency loop (feedback from qualification improves your generation targeting).",
        "Takeaway: Systematic qualification stabilizes results—no more empty calls or random spikes.",
      ].join(" "),
    },
    {
      t: "🧱 3) Offer Consistency",
      d: [
        "Principle: Constantly changing your offer resets your lead flow to zero.",
        "Core Idea: Anchor around 1–3 proven offer frameworks that you can optimize, not reinvent. Consistency builds recognition, and recognition builds trust—both are prerequisites for steady growth.",
        "Key Levers: Fixed frameworks (one clear offer = one clear audience), message memory (repetition cements trust faster than novelty), and performance feedback (consistency makes improvement measurable).",
        "Takeaway: Consistency compounds—the more stable your offer, the more rhythmic your revenue.",
      ].join(" "),
    },
  ],

  // Practical tracking
  kpis: [
    "Weekly leads generated (qualified vs unqualified)",
    "Lead-to-call conversion rate",
    "Offer consistency score (how often core offer changes)",
    "Pipeline movement (interested → booked → closed)",
    "Average response rate on cold/warm outreach",
    "Weekly retention rate of recurring clients",
  ],

  tools: [
    "CRM or spreadsheet for pipeline tracking",
    "Notion or Trello for daily lead-gen checklist",
    "Zapier/n8n for automation (lead capture → CRM)",
    "Calendly or TidyCal for booking flow",
    "Google Sheets dashboard or Airtable for KPIs",
    "Automation tracker for repetitive outreach",
  ],

  cta: "Set a 5-day rhythm: generate leads daily, qualify weekly, review monthly. Keep one consistent offer for at least 90 days and track lead inflow stability week to week.",
};

export default pager;
