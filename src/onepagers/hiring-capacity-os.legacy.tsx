import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const hiringCapacityOS: OnePager = {
  key: "hiring-capacity-os",
  category: "People & Delivery",
  question: "How do we hire, ramp, and plan capacity without fire drills?",
  hook: "Standardize the path from candidate → offer → onboarding → utilization. Ship faster with clear KPIs, simple pipelines, and lightweight scorecards.",
  summary:
    "A compact operating system for teams to run hiring and delivery capacity: live KPIs, candidate pipeline, interview rubrics, offers, 30/60/90 scorecards, a 7-day onboarding generator, weekly utilization grid with pod rollups, and a no-loss handover doc.",
  bullets: [
    "KPI dashboard: time-to-fill, offer acceptance, 90-day success, utilization, on-time delivery.",
    "Candidate pipeline with one-click stage advance + stamped dates.",
    "Interview tracker with rubric (technical, decision, velocity, comms, collaboration).",
    "Offers board with status and close dates; auto-mark hired on accept.",
    "Scorecards (30/60/90) with outcomes + rubric averages.",
    "7-day onboarding generator with status pills (todo / in-progress / done).",
    "Weekly utilization table (capacity vs booked) with pod tagging and color thresholds.",
    "Handover generator + copy-to-clipboard to prevent knowledge loss.",
  ],
  steps: [
    {
      t: "Open Reqs & Sourcing",
      d: "Create the role, start the pipeline, log source and dates.",
    },
    {
      t: "Screen → Skills → Values",
      d: "Record interviews with rubric scores and notes.",
    },
    {
      t: "Offer & Close",
      d: "Track offer status; mark hired on accept to lock time-to-fill.",
    },
    {
      t: "Onboard in 7 Days",
      d: "Generate SOP tasks; move pills to done and capture on-time rate.",
    },
    {
      t: "90-Day Scorecards",
      d: "Review outcomes and rubric; decide pass / extension / PIP.",
    },
    {
      t: "Plan Capacity Weekly",
      d: "Update booked hours; watch pod utilization and rebalance early.",
    },
    {
      t: "Handover Cleanly",
      d: "Generate the continuity doc before any internal move or exit.",
    },
  ],
  kpis: [
    "Time-to-fill (req open → hire date)",
    "Offer acceptance rate (accepted / sent)",
    "90-day success rate (passed probation)",
    "Utilization (booked / capacity) this week",
    "On-time delivery (tasks completed by due)",
    "Headcount (active people)",
  ],
  tools: [
    "Candidate pipeline with stage timestamps",
    "Interview rubric & notes log",
    "Offers tracker with band/status",
    "7-day onboarding task generator",
    "30/60/90 scorecards with rubric averages",
    "Utilization grid (person + pod) with color thresholds",
    "Handover document generator (copy-ready)",
    "Email/script templates (offer, references, PIP)",
  ],
  targets: [
    "Time-to-fill: 21–35 days",
    "Offer acceptance: ≥ 60%",
    "90-day success: ≥ 80%",
    "Utilization: 70–85%",
    "On-time delivery: ≥ 90%",
  ],
  cta: "Open the one-pager, add this week’s candidates, log interviews, and send offers. Generate onboarding for new hires, update utilization every Monday, and review 30/60/90 scorecards on Fridays.",
  render: () => <LegacyMount slug="hiring-capacity-os" />,
};

export default hiringCapacityOS;
