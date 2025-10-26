import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const productizingASkillIntoAScalableService: OnePager = {
  key: "productizing-a-skill-into-a-scalable-service",
  category: "Strategy",
  question: "How do I turn my expertise into a standardized, scalable service?",
  hook: "Move beyond time-for-money by packaging your expertise into a repeatable offer with clear deliverables, systems, and KPIs.",
  summary:
    "This one-pager maps why and how to productize a skill: define the core offer, standardize deliverables, systemize delivery, package and price it, then automate and delegate. Includes examples and quotes to anchor the approach.",
  bullets: [
    "Standardize deliverables to ensure consistent quality.",
    "Replace bespoke work with repeatable systems and SOPs.",
    "Package, price, and present the offer so buyers ‘get it’ fast.",
    "Automate admin and delegate repeatable tasks to scale capacity.",
  ],
  steps: [
    {
      t: "Identify Your Core Offer",
      d: "Pick a proven, repeatable service with clear outcomes to standardize.",
    },
    {
      t: "Define the Deliverables",
      d: "Specify exactly what the client receives and the acceptance criteria.",
    },
    {
      t: "Create Systems & Processes",
      d: "Document onboarding, delivery, comms, and measurement as SOPs.",
    },
    {
      t: "Package the Service",
      d: "Brand the offer with outcome, timeline, scope, and an easy checkout path.",
    },
    {
      t: "Set Pricing & Structure",
      d: "Price for value and efficiency (one-time, plan, retainer, or subscription).",
    },
    {
      t: "Automate & Delegate",
      d: "Automate reminders/tracking; delegate admin to protect deep-work time.",
    },
  ],
  kpis: [
    "Gross margin per package",
    "Throughput / active clients",
    "Cycle time (onboard → delivery)",
    "NPS / revision rate",
  ],
  tools: [
    "SOP/Docs",
    "Project board",
    "Scheduler/Calendar",
    "CRM/Payments",
    "Automation (email/Zap-like)",
  ],
  cta: "Open the page and complete the six steps: draft the offer, list deliverables, write SOPs, package & price, then automate and delegate.",
  render: () => (
    <LegacyMount slug="productizing-a-skill-into-a-scalable-service" />
  ),
};

export default productizingASkillIntoAScalableService;
