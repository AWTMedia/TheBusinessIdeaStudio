import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const schengenVisaPackZA: OnePager = {
  key: "schengen-visa-pack-za",
  category: "Customer Delivery",
  question:
    "Schengen Visa Pack ZA",
  hook: "A printable, searchable delivery guide with auto ToC, local search/highlighting, collapsible sections, copy-ready templates, interactive checklists, and a file-order blueprint.",
  summary:
    "This one-pager renders the Schengen Visa Pack (ZA) Customer Delivery App. It includes a sticky header with quick actions (Print / Expand / Collapse), left ToC derived from H2s, a Markdown-lite renderer (headings, lists, quotes, code, tables), client-side search with highlights, copy buttons on code blocks, and interactive task lists with per-section persistence. Content covers Executive Summary, ‘Who it’s for’, 60-minute Quick Start, deliverables, core embassy-style templates (cover/sponsor/employer/freelance/student), funds phrasing & formatting, itinerary & booking strategy, submission-day pack with file order blueprint + checklist, country phrasing variants (NL/DE/FR/IT), common rejection reasons with fixes, proof-of-ties gallery, FAQs, 14-day fit-for-purpose guarantee, compliance/privacy, versioning & updates, worked examples, support, and license.",
  bullets: [
    "Sticky header with Print / Expand / Collapse, plus instant ToC.",
    "Markdown-lite renderer: headings, tables, quotes, code with Copy.",
    "Local search with match highlighting across sections.",
    "Collapsible per-section accordions; ‘Expand/Collapse all’.",
    "Interactive task lists (− [ ] / − [x]) saved per section (localStorage).",
    "Embassy-style letter templates + funds phrasing + itinerary table.",
    "Submission-day file order blueprint and mini-checklist.",
    "Country phrasing variants (NL/DE/FR/IT) and rejection fixes cheat sheet.",
  ],
  steps: [
    {
      t: "Pick Scenario",
      d: "Solo / Sponsored / Employed / Freelance / Student.",
    },
    {
      t: "Generate Letters",
      d: "Cover + scenario letters using the provided wording.",
    },
    {
      t: "Funds Narrative",
      d: "Apply phrasing patterns; gather 3–6 months statements and balance letter.",
    },
    {
      t: "Itinerary & Bookings",
      d: "Align dates across flights, accommodation, insurance; prefer refund-friendly options.",
    },
    {
      t: "Assemble Pack",
      d: "Order documents per file blueprint; run the submission-day checklist.",
    },
    {
      t: "Submit",
      d: "Print neatly; arrive early; keep copies as your personal archive.",
    },
  ],
  kpis: [
    "Document Completeness Score (checklist pass rate, %).",
    "Date Alignment Pass (flights/hotels/insurance/letters all match).",
    "Funds Consistency Check (letters ↔ statements ↔ itinerary budget).",
    "Print Readiness (all letters signed/dated, letterhead where required).",
    "Country Variant Applied (NL/DE/FR/IT phrasing, where relevant).",
    "Time-to-Assembly ≤ 60 minutes for typical scenarios.",
  ],
  tools: [
    "Letter Generator Suite: Cover, Sponsor/Invitation, Employer, Freelance, Student.",
    "Funds & Bank Statements phrasing patterns and formatting tips.",
    "Itinerary table template with example rows.",
    "Submission-Day Pack: file order blueprint + mini-checklist.",
    "Country phrasing variants (NL/DE/FR/IT).",
    "Common rejections cheat sheet + fixes.",
    "Proof-of-ties gallery (employment, study, property, family).",
  ],
  targets: [
    "Zero missing required items at appointment (checklist 100%).",
    "All core dates aligned across docs (0 inconsistencies).",
    "Professional letter tone/structure accepted by clerks.",
    "Assembly under 60 minutes for a solo/employed case.",
  ],
  cta: "Print the Submission-Day Pack, generate your letters, and follow the 60-minute Quick Start. Optional: request a document review add-on if you want a second set of eyes.",
  render: () => <LegacyMount slug="schengen-visa-pack-za" />,
};

export default schengenVisaPackZA;
