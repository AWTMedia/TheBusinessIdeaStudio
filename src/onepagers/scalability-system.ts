// src/onepagers/scalability-system.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "scalability-system",
  question:
    "How do I move from project-based work into productized or recurring revenue models?",
  hook:
    "Turn your service into a repeatable system, package it with clear outcomes, and deliver it through assets instead of hours.",
  summary:
    "This is a scalability question — moving from one-off delivery to predictable, leveraged revenue. The aim is to design a self-replicating offer that delivers consistent results without constant founder involvement.",

  // Implied Goals
  bullets: [
    "Predictability: Replace sporadic project cashflow with recurring, forecastable revenue.",
    "Leverage: Shift delivery from time-based to asset-based (systems, tools, templates).",
    "Freedom: Build a business that grows even when you’re not personally delivering.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🔹 1) Productization Blueprint (Custom Work → Repeatable Offer)",
      d: [
        "Principle: You can’t scale custom.",
        "Core Idea: Extract the repeatable outcome from your best projects and turn it into a standardized, packaged offer.",
        "Key Levers: Define Core Outcome — what consistent transformation or result do you deliver every time? (e.g., “Generate 30 qualified leads/month” vs “Marketing help”). Create the Method — name your process, your unique mechanism (e.g., “Growth Loop™” or “Demand Engine™”). Bundle into Tiers — build 2–3 clear packages (Lite / Core / Pro) that vary by speed, support, or scope, not customization. Set Boundaries — define what’s in vs. out of scope to prevent scope creep. Product Assets — templates, dashboards, automations, SOPs, or frameworks used for consistent delivery.",
        "Takeaway: Treat your service like a product — clearly defined, scoped, named, and repeatable.",
      ].join(" "),
    },
    {
      t: "🔹 2) Recurring Delivery Engine (Projects → Predictable Revenue)",
      d: [
        "Principle: Scale requires rhythm — not reinvention.",
        "Core Idea: Convert one-time clients into ongoing value through recurring delivery and subscription-style experiences.",
        "Key Levers: Recurring Mechanism — monthly retainers, performance fees, or access subscriptions (e.g., ongoing optimization, maintenance, reporting). Onboarding → Delivery → Review — standardize the client journey with set milestones and templates. System-Driven Communication — weekly or monthly updates auto-pulled from dashboards, reducing meeting dependency. Tiered Access — higher tiers get faster turnaround, private channels, or strategic reviews. Upsell Path — after initial success, offer upgrades like group coaching, training, licensing, or implementation add-ons.",
        "Takeaway: Revenue stability comes from recurring relationships powered by clear delivery cadence and automation.",
      ].join(" "),
    },
    {
      t: "🔹 3) Asset-Based Growth Loop (Manual → Compounding)",
      d: [
        "Principle: Build once, sell forever.",
        "Core Idea: Convert your processes, insights, and results into assets that generate leads and sales passively.",
        "Key Levers: Intellectual Property — turn frameworks into courses, templates, or digital products that feed the funnel. Automation & Delegation — use tools like Zapier/n8n/Make to automate delivery triggers, invoicing, and reporting. Performance Data — showcase outcomes through dashboards, case studies, and testimonials to create a self-selling proof loop. Affiliate/Partner Model — let others resell or white-label your process for additional revenue streams. Continuous Improvement — each delivery cycle updates templates, improves automation, and adds to your IP library.",
        "Takeaway: Assets replace effort — every system you build becomes a permanent revenue engine.",
      ].join(" "),
    },
  ],

  cta:
    "Scaling from service to product is about standardization, subscription, and systemization. When your offer is productized, your delivery is automated, and your results become reusable assets — you stop trading time for money and start building a business that compounds even when you’re offline.",
};

export default pager;