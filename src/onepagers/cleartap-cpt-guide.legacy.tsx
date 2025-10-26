import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const cleartapCptGuide: OnePager = {
  key: "cleartap-cpt-guide",
  category: "Field Guides",
  question:
    "Clear Tap CPT Business Overview",
  hook: "A printable, search-able customer guide with room-by-room picks, install checklists, maintenance cadence, and WhatsApp booking—built as a single-file React + Tailwind app.",
  summary:
    "This one-pager renders the ClearTap CPT Customer Guide: sticky header + ToC, instant search, collapsible sections, markdown-lite rendering (headings, lists, quotes, code, tables, links), interactive task lists, copy buttons, and print mode. Content covers problems & principles, selection rubric, kitchen/bath/bar playbooks, maintenance cadence, special cases (renters/BNBs/cafés), ROI framing, worksheets, FAQs, 30-day guarantee, and next steps.",
  bullets: [
    "Sticky header + Table of Contents with smooth scroll.",
    "Local search highlights results across sections; expand/collapse all.",
    "Markdown-lite renderer: headings, quotes, code with Copy, tables, links.",
    "Interactive task lists (− [ ] / − [x]) stored in session state.",
    "Print-ready layout + WhatsApp booking shortcut with prefilled template.",
  ],
  steps: [
    {
      t: "Plan",
      d: "Use the room-by-room rubric to choose Tap-Mount / Single / Dual / Optimiser per room.",
    },
    { t: "Book", d: "WhatsApp postcode + room picks; confirm same-week slot." },
    {
      t: "Install",
      d: "Tea test, aerator clean, fit hardware, flush, label, set reminders.",
    },
    {
      t: "Maintain",
      d: "Quarterly/semi-annual refills; track on the cartridge/service log.",
    },
  ],
  kpis: [
    "Taste Satisfaction Score (1–10) before/after",
    "1-litre fill-time delta (sec) per tap",
    "Flow-feel delta (1–10) post-optimiser",
    "On-time change rate (±2 weeks)",
    "Uptime % (system in expected state)",
    "Payback period vs bottled-water baseline",
  ],
  tools: [
    "Room planner worksheet (printable table).",
    "Install day checklist and cartridge/service log.",
    "Flow check sheet (1-litre test).",
    "WhatsApp booking template with postcode + picks.",
    "Refill subscription cadence (R89–R169/mo).",
  ],
  targets: [
    "Kitchen taste improvement on day 1 (side-by-side test).",
    "Bathrooms flow-feel uplift within 30 minutes.",
    "≥90% on-time cartridge changes via reminders.",
    "Payback < 6 months vs bottled-water spend (typical).",
  ],
  cta: "Book on WhatsApp with your postcode and room picks. We’ll confirm a same-week slot and bring everything needed. 30-day love-it guarantee on taste & flow feel.",
  render: () => <LegacyMount slug="cleartap-cpt-guide" />,
};

export default cleartapCptGuide;
