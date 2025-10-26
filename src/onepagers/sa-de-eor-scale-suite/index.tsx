import React from "react";
import App from "./App";
import type { OnePager } from "@/types/OnePager";

const SaDeEorScaleSuite: OnePager = {
  key: "sa-de-eor-scale-suite",
  category: "Legal & Ops • Go-to-Market",
  question: "DACH Business Plan Documents",
  hook:
    "A three-page React + Tailwind suite: client deck, landing, and contract pack (MSA/SOW/DPA/Employment) with EUR billing and ZAR payroll peg.",
  summary:
    "Client-ready deck, conversion landing + pricing/CTA, and corporate-grade contract pack. SA-based EOR + Ops Pod for German clients (AÜG/PE posture, GDPR DPA+SCCs+TOMs, SA payroll in ZAR with EUR/USD peg and post-tax FX/crypto, KPIs/SLAs, guarantee, 6-month roadmap).",
  bullets: [
    "Three views: Deck • Landing • Contracts",
    "Positioning: services (not leasing) posture",
    "Pricing: Accelerator (€7k + €5.5k/mo), Scale (€11k + €7.5k/mo)",
    "Guarantee: ≤90 days or next month free (per SOW)",
    "Compliance: AÜG posture, PE discipline, GDPR DPA+SCCs, BCEA ZAR payroll with EUR/USD peg",
  ],
  cta: "Open #landing for pricing & CTA, #deck for alignment, #contracts to finalize.",
  render: () => <App />,
};

export default SaDeEorScaleSuite;