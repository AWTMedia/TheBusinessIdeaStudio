import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const digitalProductCreationGTM: OnePager = {
  key: "digital-product-creation-gtm",
  category: "Operating Guides",
  question:
    "How can a solo founder ideate, validate, build, launch, and scale a digital product with a practical, end-to-end SOP?",
  hook: "A complete, sequential operating guide (idea → validation → MVP → launch → analytics) with prompts, formulas, checklists, and GTM playbooks you can ship this week.",
  summary:
    "This one-pager renders the Digital Product Creation & GTM — All-In-One Guide. It includes a sticky header with quick actions (Print / Expand / Collapse), auto-generated ToC from H2s, a Markdown-lite renderer (headings, lists, quotes, code), client-side search with highlight, collapsible per-section panels, and copy-to-clipboard on code blocks. The content covers mindset/guardrails, prerequisites/tooling, RACI, Phase A–H (Topic Discovery, Validation, Store Page, MVP, Launch Traffic, Pricing/Monetization, Post-Purchase/Retention, Analytics/Cadence), governance/risks, legal/compliance, 30-60-90 plan, and ready-to-use templates (UTMs, influencer kit, affiliate mini-agreement, VSL outline, ad copy starters, QA checklist, and spreadsheet schemas).",
  bullets: [
    "Sticky header with Print / Expand / Collapse; left ToC from H2s.",
    "Local search with match highlighting across all sections.",
    "Markdown-lite rendering for headings, lists, quotes, code; copy buttons for snippets.",
    "Collapsible section accordions; ‘Expand/Collapse all’.",
    "AI prompts for topic radar, landing copy, and ebook drafting.",
    "Validation playbook: ClickBank gravity, Meta Ads Library, marketplace scans, review mining.",
    "Influencer arbitrage system (prospecting → outreach → deal structure → promo kit).",
    "Paid ads quick-start for Google Search & Meta with KPI guardrails.",
    "Pricing ladder, offer stacks, guarantees, and price-test matrix.",
    "Post-purchase email sequence, support SOPs, refund policy scaffolding.",
  ],
  steps: [
    {
      t: "Pick Topics",
      d: "Run Skill-Led + AI-Led discovery; score via UVZ, demand, speed.",
    },
    {
      t: "Validate",
      d: "Triangulate with CB gravity, Ads Library longevity, marketplace signals; mine reviews.",
    },
    {
      t: "Write Offer",
      d: "Promise, avatar, mechanism, deliverables, bonuses, guarantee, FAQs.",
    },
    {
      t: "Build Page",
      d: "Wireframe hero → proof → inside → benefits → offer stack → FAQs → CTA; connect payments + tracking.",
    },
    {
      t: "Create MVP",
      d: "Draft ebook/toolkit with AI prompts; design/QA; export PDF; align license.",
    },
    {
      t: "Launch Traffic",
      d: "Influencer arbitrage first; then Search/Meta after initial sales; start faceless content.",
    },
    {
      t: "Price & Monetize",
      d: "Ladder (Gateway/Core/Advanced/Continuity); run 3×2 price/bonus tests.",
    },
    {
      t: "Retain & Upsell",
      d: "6-email onboarding, support macros, upsell at Day 10, affiliate invite Day 14.",
    },
    {
      t: "Review & Scale",
      d: "Weekly WBR with CAC, ROAS, Profit/Visitor; duplicate winners, kill losers.",
    },
  ],
  kpis: [
    "LP Conversion Rate (cold 2–5%, warm 6–12%).",
    "CAC ≤ 30–50% of price during MVP tests.",
    "ROAS ≥ 1.5× in test phase; target ≥ 2.0× at scale.",
    "Influencer: Clicks, Sales, Revenue, Commission %, ROAS by partner.",
    "Profit per Visitor and Refund %.",
    "Time-to-MVP ≤ 3 days; Time-to-First-Sale ≤ 14 days.",
  ],
  tools: [
    "Topic Radar & Landing Copy AI prompts.",
    "Validation sheet schema (sources, hooks, prices, gaps).",
    "UTM builder + tracking taxonomy.",
    "Influencer outreach scripts, 3-story promo kit, mini affiliate agreement.",
    "Google Search & Meta campaign scaffolds + KPI benchmarks.",
    "Email onboarding sequence (Day 0/1/3/7/10/14).",
    "QA launch checklist; spreadsheet schemas for Leads/Ads/Sales.",
  ],
  targets: [
    "Publish store page and payment connection in ≤ 48 hours.",
    "Export shippable MVP (ebook/toolkit) in ≤ 72 hours.",
    "First revenue from influencer promo within 14 days.",
    "≥ 3 validated external demand signals prior to paid scale.",
    "Weekly review cadence with 3 fresh tests queued.",
  ],
  cta: "Copy the prompts, ship the MVP, and run the influencer launch this week. Track CAC/ROAS/Profit-per-Visitor, then iterate price and bonus stack.",
  render: () => <LegacyMount slug="digital-product-creation-gtm" />,
};

export default digitalProductCreationGTM;
