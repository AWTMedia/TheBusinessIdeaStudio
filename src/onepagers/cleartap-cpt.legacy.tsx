import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const cleartapCPT: OnePager = {
  key: "cleartap-cpt",
  category: "Productized Service",
  question:
    "Clear Tap Cpt: Premium whole-home water filtration install; request a quote",
  hook: "Pick a whole-home plan, add optional room/tap polishers and extras, see an instant estimate (incl. travel), and book via WhatsApp in one screen.",
  summary:
    "Single-file React + Tailwind sales one-pager for ClearTap CPT. Presents three engineered whole-home plans (Signature/Premier/Essential), optional room add-ons and extras, an annual service toggle, postcode-aware travel estimate, and WhatsApp quote handoff. Includes differentiators, comparison tables, FAQ, and a neat, print-ready UI.",
  bullets: [
    "3 primary POE plans with instrumentation and clear inclusions.",
    "Optional annual service plan with tier-based pricing.",
    "Room/tap add-ons (Under-Sink Dual/Single, Tap-Mount) + extras.",
    "Live cart with subtotal, travel estimate, and total.",
    "WhatsApp deep link prefilled with selections for fast booking.",
    "Why-us section, comparisons, and FAQ for objection handling.",
  ],
  steps: [
    {
      t: "Choose plan",
      d: "Select Signature, Premier, or Essential based on assurance/flow needs.",
    },
    {
      t: "Toggle service",
      d: "Add the annual service plan for cartridge/lamp changes and health checks.",
    },
    {
      t: "Add rooms",
      d: "Pick kitchen/bath polishers, set quantities per room, or leave as none.",
    },
    {
      t: "Pick extras",
      d: "Add gauge sets, spare cartridges, leak sensors, or move service.",
    },
    {
      t: "Enter basics",
      d: "Add name and postcode to estimate travel and prefill WhatsApp message.",
    },
    {
      t: "Book",
      d: "Tap WhatsApp link to confirm audit/installation slots with the team.",
    },
  ],
  kpis: [
    "Plan selection → WhatsApp click-through rate",
    "Average cart value (ACV) incl. add-ons/extras",
    "Service plan attach rate",
    "Room add-on penetration (kitchen, bathrooms)",
    "Lead-to-install conversion and time-to-schedule",
  ],
  tools: [
    "Postcode buckets → travel estimate (free/near/south/north/east).",
    "Currency helper for ZAR formatting.",
    "WhatsApp link composer with human-readable order lines.",
    "Ring/highlight for selected plan and active extras.",
    "Tables for plan/add-on comparisons + FAQ for objections.",
  ],
  targets: [
    "≤ 60s to configure and request a quote.",
    "≥ 35% WhatsApp CTR from unique visitors.",
    "≥ 40% attach on annual service plan.",
    "≤ 24h response SLA for new WhatsApp leads.",
  ],
  cta: "Select your whole-home plan, add optional room polishers/extras, and tap “Book on WhatsApp.” We’ll confirm the next available audit/installation slot.",
  render: () => <LegacyMount slug="cleartap-cpt" />,
};

export default cleartapCPT;
