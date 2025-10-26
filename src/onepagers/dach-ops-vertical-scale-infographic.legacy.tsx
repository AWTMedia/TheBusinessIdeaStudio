import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const dachOpsVerticalScaleInfographic: OnePager = {
  key: "dach-ops-vertical-scale-infographic",
  category: "Ops • GTM • DACH",
  question:
    "DACH Ops Vertical Scale Business",
  hook: "‘Scale ohne Einstellung’: a single-file React + Tailwind infographic landing with pricing, funnel, proof, ICP, team, KPIs, and CTA—purpose-built for DACH.",
  summary:
    "This page is a conversion-ready infographic/landing for DACH Ops Management + Vertical Scale System. It packages the narrative (hero/elevator pitch), ICP and offer, pricing (Accelerator/Scale), full funnel (Lead Gen → CTA → Nurture → Delivery), compliance/proof tiles, demographics/psychographics, collaboration & marketing angles, media ecosystem, the 4-person pod with SLAs, KPI scoreboard, and final CTA. Built in pure React + Tailwind, ready to drop into any project.",
  bullets: [
    "Hero + elevator pitch tuned for DE audience (DSGVO/Impressum-aware).",
    "Two price tiers: Accelerator (€4,000 setup + €2,500/mo) and Scale (€6,000 setup + €4,000/mo).",
    "Offer stack: KPI cadence, compliant acquisition, CRM/automation, hiring pipeline, 2 placements, fast-win guarantee.",
    "End-to-end funnel blocks: Lead Gen, Primary CTA, Nurture/Conversion, Delivery.",
    "Trust layer: Market Reality, Compliance & Trust, Proof Mechanics.",
    "ICP/psych: 1–3 FTE, €10k–€40k/mo, Ordnung- & ROI-oriented, time-poor.",
    "Team of 4 with SLAs; KPI scoreboard (+25% reply→book, −30% cycle time, 95% OTD, etc.).",
  ],
  steps: [
    {
      t: "Open with Outcome",
      d: "Use the Hero and elevator pitch; add CTA to the Ops Potential Check.",
    },
    {
      t: "Qualify ICP",
      d: "Show ‘Offer/ICP’ and pricing cards; apply the fast-win guarantee.",
    },
    {
      t: "Map the Funnel",
      d: "Display Lead Gen → CTA → Nurture → Delivery to set buyer expectations.",
    },
    {
      t: "Build Trust",
      d: "Show Compliance & Proof tiles; reference DSGVO/Impressum readiness.",
    },
    {
      t: "Introduce the Pod",
      d: "Present the 4-person team and SLAs; align on responsibilities.",
    },
    {
      t: "Close with KPIs",
      d: "Use the scoreboard and final CTA; link to DE one-pager/compliance pack.",
    },
  ],
  kpis: [
    "Reply → Book +25%",
    "Cycle Time −30%",
    "Show-Up Rate +15%",
    "On-Time Delivery 95%",
    "Gross Margin +8–12%",
  ],
  tools: [
    "Infographic Landing (single React file, Tailwind only)",
    "Pricing cards (Accelerator/Scale) with bullets",
    "Funnel sections with checklist bullets",
    "Compliance/cred tiles and KPI scoreboard",
    "CTA buttons (Ops Potential Check, DE One-Pager download)",
  ],
  targets: [
    "Convert qualified DACH solopreneurs (1–3 FTE) into 20-min Ops Potential Check calls.",
    "Demonstrate compliance posture and proof to reduce perceived risk.",
    "Set delivery expectations with pod roles, SLAs, and KPI ladders.",
  ],
  cta: "Use the built-in CTAs: ‘Free 20-min Ops Potential Check’ (primary) and ‘Download DE One-Pager’ (secondary). Pair with a Calendly + DSGVO lead form.",
  render: () => <LegacyMount slug="dach-ops-vertical-scale-infographic" />,
};

export default dachOpsVerticalScaleInfographic;
