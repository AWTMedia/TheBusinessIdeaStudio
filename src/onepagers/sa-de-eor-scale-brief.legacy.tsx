import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const saDeEorScaleBrief: OnePager = {
  key: "sa-de-eor-scale-brief",
  category: "Legal & Ops • Business Plans",
  question:
    "How can German solo/micro-SMEs scale with South African talent while managing AÜG, PE risk, GDPR, and SA payroll/FX rules?",
  hook: "A complete EOR + Scale Ops blueprint: pricing tiers, 90-day operating model, salary peg clause, compliance architecture, KPIs, and a 6-month rollout.",
  summary:
    "This one-pager renders the 'South Africa–Germany EOR + Scale Management: Full Business Plan & Legal Brief (2025)'. It outlines the market problem (AÜG reach into remote work, Rome I, social-security coordination, PE risk), the SA-based EOR + embedded Scale Ops Pod solution, euro-denominated offers, GDPR/TOMs/SCCs posture, SA payroll and FX constraints (BCEA s32; SARS; SARB), a salary-peg sample clause, risk register, KPIs/SLAs, a financial model snapshot, GTM narrative, a 6-month implementation plan, and selected legal sources.",
  bullets: [
    "Positioning: SA EOR + Vertical Scale Ops Pod for German micro-operators.",
    "Offers: Accelerator (€7k setup + €5.5k/mo) and Scale (€11k setup + €7.5k/mo).",
    "Guarantee: Scale in 90 days or you skip the next month’s fee (per SOW criteria).",
    "Compliance stack: AÜG posture, Rome I, PE mitigation, GDPR (DPA + SCCs), SA payroll/FX.",
    "Salary peg model: EUR/USD-pegged base, ZAR-settled; post-tax FX/crypto conversion.",
    "Risk register with likelihood/impact and mitigations; KPI/SLAs for ops and compliance.",
    "Roadmap: pilot clients → SOPs/Dashboards → guarantee checkpoints → ISO-aligned journey.",
  ],
  steps: [
    {
      t: "Frame the Problem",
      d: "Explain German remote-hiring friction (AÜG, PE, dual payroll, data transfers).",
    },
    {
      t: "Present the Model",
      d: "SA EOR as legal employer + embedded Ops Pod installing SOPs and cadence.",
    },
    {
      t: "Price & Guarantees",
      d: "Select Accelerator or Scale tier; align on the 90-day risk-reversal.",
    },
    {
      t: "Compliance Setup",
      d: "MSA/SOW/DPA, SCCs, GDPR TOMs, AÜG posture, SA payroll/FX rails.",
    },
    {
      t: "90-Day Execution",
      d: "Scope & risk checks → onboarding → dashboards & SOPs → QBR and milestone review.",
    },
    {
      t: "Scale & Audit",
      d: "Quarterly AÜG/PE reviews; ISO-aligned policies; rev-share kicker if elected.",
    },
  ],
  kpis: [
    "Lead-to-close cycle time (↓ 20–30%).",
    "On-time delivery (≥ 95%).",
    "Gross margin lift (+5–10 pp).",
    "SOP adoption (≥ 90% in 90 days).",
    "NPS (≥ 50).",
    "Payroll accuracy/filings (100% on-time).",
  ],
  tools: [
    "Contracting set: MSA + SOW + DPA (+ SCCs).",
    "Salary-peg clause with ZAR settlement and post-tax conversion option.",
    "Risk register & review cadence (AÜG/PE/GDPR/FX/crypto).",
    "SOP program (10–15 core SOPs in 90 days) and KPI dashboards.",
  ],
  targets: [
    "Stand-up compliant SA payroll + FX rails before first hire.",
    "Deliver 10–15 SOPs and live dashboards by Day 60.",
    "Hit 90-day guarantee criteria or apply fee waiver as promised.",
    "Quarterly posture reviews for AÜG/PE and GDPR transfer mapping.",
  ],
  cta: "Run a readiness session: confirm roles, risk posture, and tier. Then kick off the 90-day scope → onboard → SOPs → QBR cycle with the salary-peg framework in place.",
  render: () => <LegacyMount slug="sa-de-eor-scale-brief" />,
};

export default saDeEorScaleBrief;
