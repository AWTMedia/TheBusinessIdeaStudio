import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const saDeEorScale: OnePager = {
  key: "sa-de-eor-scale",
  category: "Compliance & Operations",
  question: "DACH 2025 Full Legal Brief",
  hook: "Operate via a South Africa–based Employer of Record and embed a Vertical Scale Operations Pod—SOPs, dashboards, cadence—so you scale in ≤90 days without German hiring headaches.",
  summary:
    "A single-file React + Tailwind one-pager that renders a full 2025 business plan & legal brief for a South Africa ↔ Germany EOR + Scale Management model. It frames the market problem (AÜG, Rome I, PE, social security), defines the SA-based EOR + Ops Pod solution with offers/price points, sets the legal architecture across Germany and South Africa (incl. ZAR-denominated payroll and salary-peg clause), and lays out KPIs, SLAs, risk register, GTM narrative, and a 6-month rollout.",
  bullets: [
    "SA Employer of Record handles employment, payroll, and compliance; client receives services in Germany.",
    "Vertical Scale Ops Pod installs SOPs, KPI cadence, automation, and governance.",
    "Euro-denominated client billing; SA payroll settled in ZAR per BCEA with EUR/USD salary-peg clause.",
    "GDPR-grade data transfers with SCCs/TOMs and role-based access.",
    "Risk controls for AÜG posture and Permanent Establishment exposure.",
  ],
  steps: [
    {
      t: "Scope & Risk Check (Day 0–14)",
      d: "Assess AÜG posture, PE exposure, data flows; map roles; set FX policy and salary pegs.",
    },
    {
      t: "Paper & Onboard (Day 15–30)",
      d: "MSA/SOW/DPA executed; SA employment contracts issued; payroll rails live; KPI baseline set.",
    },
    {
      t: "Embed Pod (Day 31–60)",
      d: "Ops Pod running SOPs, dashboards, WBR/MBR cadence; first compensation architecture defined.",
    },
    {
      t: "Lock Performance (Day 61–90)",
      d: "Complete 10–15 SOPs; QBR and guarantee milestone; optional rev-share kicker switched on.",
    },
    {
      t: "Scale (Post-90d)",
      d: "Expand headcount, deepen automation, quarterly planning; monitor AÜG/PE and GDPR compliance.",
    },
  ],
  kpis: [
    "Lead-to-close cycle time ↓ 20–30%",
    "On-time delivery ≥ 95%",
    "Gross margin +5–10 pp at tier level",
    "SOP adoption ≥ 90% within 90 days",
    "NPS ≥ 50",
    "Payroll & filings 100% on-time/accurate",
  ],
  tools: [
    "Salary-peg clause (EUR/USD pegged, ZAR-settled per BCEA s32).",
    "GDPR DPA + SCCs and TOMs; sub-processor register; audit rights.",
    "AÜG posture notes and ‘services not leasing’ contract language.",
    "PE risk governance: agency wording, decision-rights allocation.",
    "FX policy: EUR billing, rolling 30-day hedges for payroll exposure.",
  ],
  targets: [
    "Deploy 2–3 pilot clients in Month 1–2 with 10 SOPs/client.",
    "Hit ‘Scale in 90 days’ guarantee criteria by Day 90.",
    "≥ 40% attach rate on rev-share kicker where elected.",
    "Zero high-severity security incidents; 100% security training.",
  ],
  cta: "Book a strategy session: review AÜG/PE posture, confirm the SA payroll/FX model, and map your first 90-day SOP set. If we don’t scale you in 90 days, you don’t pay the following month.",
  render: () => <LegacyMount slug="sa-de-eor-scale" />,
};

export default saDeEorScale;
