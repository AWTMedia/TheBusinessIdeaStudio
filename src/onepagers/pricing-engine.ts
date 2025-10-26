// src/onepagers/pricing-engine.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "pricing-engine",
  question:
    "How do I price my services or products effectively (not too cheap, not too expensive)?",
  hook:
    "Anchor price to outcome value, frame it with tiers and guarantees, and validate with controlled tests.",
  summary:
    "This is a value capture question — charging in proportion to the results you deliver. The aim is to design a pricing system that maximizes profit without killing conversion.",

  // Implied Goals
  bullets: [
    "Profitability: Healthy contribution margin after delivery and acquisition costs.",
    "Positioning: Price signals quality and attracts the right buyers.",
    "Proof-Driven Confidence: Clear ROI math and risk reversal lift willingness to pay.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "📐 1) Value Math & Anchors (Outcome → Willingness to Pay)",
      d: [
        "Principle: Price the result, not the inputs.",
        "Core Idea: Quantify the economic impact you create and use it to set anchors and floors.",
        "Key Levers: Outcome Math — estimate revenue gained, costs reduced, or time saved (monetize hours). Anchors — present the economic value (e.g., “This saves ±R50k/month”) before revealing price. Floors & Ceilings — Floor: COGS + delivery + overhead + target margin. Ceiling: % of outcome (e.g., 10–20% of monthly value) or LTV share. Payment Structure — setup + monthly retainer; or success fee/usage-based where measurable. Risk Reversal — milestone guarantee, diagnostic-first credit, or limited pilot fee.",
        "Takeaway: When buyers see the math, price feels fair — not expensive.",
      ].join(" "),
    },
    {
      t: "🧱 2) Packaging & Tiers (Perceived Value → Choice Architecture)",
      d: [
        "Principle: Buyers need context to choose; tiers create it.",
        "Core Idea: Offer 2–3 clear packages with ascending outcomes and support.",
        "Key Levers: Good/Better/Best — Core (essentials for baseline outcome); Pro (adds speed, depth, or automation); Elite/DFY (white-glove, highest certainty, priority SLAs). Price Psychology — end with 9s; show “was/now” only when honest; use annual discount. Feature Framing — lead with outcomes/SLAs, not feature lists. Bundled Bonuses — templates, audits, strategy sessions — explicitly priced to raise perceived value. Fences — keep cheap plans from cannibalizing premium (limits on scope, speed, or access). Add-Ons — support seats, extra locations, advanced reports, priority launch.",
        "Takeaway: Tiers let buyers self-select value and increase average order value (AOV).",
      ].join(" "),
    },
    {
      t: "🧪 3) Market Tests & Instrumentation (Belief → Proof)",
      d: [
        "Principle: Pricing is a hypothesis until the market pays it.",
        "Core Idea: Run small, controlled experiments and measure both conversion and margin.",
        "Key Levers: A/B or Sequential Tests — change only one variable: price, tier names, or guarantee. Offer-Price Combos — pair price with a credible guarantee or diagnostic to stabilize CVR. Qualification & Fit — track close rate by segment; keep the price that yields best Profit = (CVR × AOV × Margin) − CAC. Guardrails — minimum gross margin target; pause if refund rate or churn spikes. Documentation — capture objections → adjust the value story, not just the number.",
        "Tools & Systems: Quoting/Invoicing — Stripe/Chargebee/HubSpot quotes. Analytics — GA4 + Looker Studio for CVR/AOV; CRM for win/loss by segment. Testing — landing-page forks (Framer/Webflow), order bumps/upsells (Shopify/CartHook).",
        "Takeaway: Keep what the data proves — not what feels right.",
      ].join(" "),
    },
  ],

  cta:
    "Effective pricing is value-based math + smart packaging + real-world testing. When your number reflects the outcome, your tiers frame the choice, and your data confirms the win, pricing becomes a growth lever — not a guess.",
};

export default pager;