import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const salesObjectionsConversion: OnePager = {
  key: "sales-objections-conversion",
  category: "Sales",
  question: "How do we handle objections and convert more qualified prospects?",
  hook: "Diagnose → acknowledge → reframe → prove → trial close. A compact playbook for higher close rates.",
  summary:
    "A practical reference for objection diagnosis, talk-tracks, conversion tactics, and follow-up cadence. Use it live on calls or for coaching reps.",
  bullets: [
    "Top 6 objections with go-to moves.",
    "Call flow: discovery → proof → stack → de-risk → close.",
    "Conversion toolkit with scripts and follow-ups.",
  ],
  steps: [
    {
      t: "Discovery & Fit",
      d: "Surface goals, constraints, and decision criteria.",
    },
    {
      t: "Value Map & Proof",
      d: "Tie outcomes to mechanisms; show a matched case.",
    },
    { t: "Offer & De-risk", d: "Guarantee, scope control, or starter phase." },
    {
      t: "Objections",
      d: "Diagnose → acknowledge → reframe → proof → trial close.",
    },
    {
      t: "Next Step",
      d: "Invoice/booking; recap email and follow-up cadence.",
    },
  ],
  kpis: [
    "Show ≥ 75%",
    "Close ≥ 25%",
    "PIF ≥ 40% of wins",
    "Cycle time ↓",
    "No-show rate ↓",
  ],
  tools: [
    "Call script",
    "ROI calculator",
    "One-pager recap",
    "Email/SMS follow-up",
  ],
  cta: "Open the playbook, run the call flow, and use the objection maps + toolkit to raise close rates.",
  render: () => <LegacyMount slug="sales-objections-conversion" />,
};

export default salesObjectionsConversion;
