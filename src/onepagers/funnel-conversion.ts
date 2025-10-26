// src/onepagers/funnel-conversion.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "funnel-conversion",
  question: "How do I turn my traffic and content into paying customers?",
  hook:
    "Tighten Message–Offer fit, rebuild the Conversion Spine, and remove friction from the buying path.",
  summary:
    "This is a conversion reliability question — turning attention into action. The aim is to design a clear, low-friction path from click → belief → purchase or booking that turns engaged visitors into paying customers.",

  // Implied Goals
  bullets: [
    "Clarity: Prospects instantly 'get it' (problem → promise → proof → path).",
    "Confidence: Objections handled before checkout or call.",
    "Control: Metrics show where drop-off happens and what to fix next.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🎯 1) Message–Offer Fit (Attention → Intent)",
      d: [
        "Principle: If the message doesn’t match the visitor’s pain and desired outcome, no tactic will save conversion.",
        "Core Idea: Align copy and offer with the visitor’s job-to-be-done and stage of awareness.",
        "Key Levers: One Pain, One Promise — headline states problem → concrete outcome + timeline. Specific ICP — call out who it’s for/not for to raise perceived relevance. Value Math — spell out ROI or tangible results (time saved, revenue gained, risk reduced).",
        "Tools & Systems: Voice-of-Customer mining in YouTube/Reddit/TikTok comments, DMs, and call notes. Build a messaging board in Notion/Airtable (Pains, Desired Outcomes, Objections, Exact Phrases). Validate hooks with A/B headlines using Google Optimize alternatives (e.g., VWO, Convert).",
        "Takeaway: Fit first. When the promise mirrors the visitor’s words, intent rises and the rest gets easier.",
      ].join(" "),
    },
    {
      t: "🧭 2) The Conversion Spine (Intent → Decision)",
      d: [
        "Principle: Every high-converting page follows a belief sequence: Problem → Promise → Proof → Process → Package → Price → Push (CTA) → Peace (risk reversal).",
        "Core Idea: Build a single, scrollable narrative that answers 'Why this? Why you? Why now?'.",
        "Key Levers: Above the Fold — pain-to-promise headline, subhead with mechanism, primary CTA. Proof Stack — case studies, before/after metrics, screenshots, logos, testimonials (with numbers). Process — 3–5 step visual of how it works (makes outcome feel achievable). Package & Price — 1–3 options anchored to outcomes, not features. Risk Reversal — guarantee, free audit, trial, or paid diagnostic credited to service. FAQs that Sell — turn top objections into answers with data and proof.",
        "Tools & Systems: Page builders — Webflow, Framer, Shopify + PageFly (for info/DTC), or Typedream for speed. Proof capture — Testimonial.to, Senja, Fathom (record calls → clips). Email follow-up — ConvertKit/MailerLite 5-email sequence (Case study → Objection → FAQ → CTA).",
        "Benchmarks to Aim For: LP CVR 2–5% (B2B calls) or 3–8% (low-ticket checkouts). CTA Click-Through 3–10% from hero to next step. Email Post-Optin 35–45% open rate, 3–7% click in first 3 emails.",
        "Takeaway: A tight narrative + proof + risk reversal is the backbone of conversion.",
      ].join(" "),
    },
    {
      t: "🛣️ 3) Frictionless Path to Purchase (Decision → Purchase/Booking)",
      d: [
        "Principle: Reduce cognitive and mechanical friction at every step.",
        "Core Idea: Make the desired action the easiest action.",
        "Key Levers: One Path, Not Five — one primary CTA (Book Call / Start Trial / Checkout), secondary = support. Short Forms — only ask what’s needed to qualify (name, email, 1–2 qualifiers). Fast Checkout/Booking — Calendly/TidyCal embedded above the fold; Shopify/Stripe with express pay. Speed & Mobile — sub-2s load, responsive design, big tap targets. Social Proof Near CTA — mini-testimonials or review stars beside buttons. Exit & Retarget — demo clip or audit for exits + retarget drop-offs with matching objections.",
        "Tools & Systems: Diagnostics — Clarity/Hotjar (heatmaps, session replays), GA4 (event funnel), Meta Pixel. Performance — Cloudflare, Fastly, compress with TinyPNG/Squoosh. Retargeting — Meta Ads (LP viewers, 75% video viewers), Google RLSA for search returners.",
        "Takeaway: Remove choices, shorten steps, and speed everything up — conversions rise.",
      ].join(" "),
    },
  ],

  cta:
    "Rebuild your funnel for clarity, proof, and speed. Align your message and offer, design a Conversion Spine that builds belief, and streamline your checkout or booking path. When fit, proof, and friction are optimized, traffic reliably turns into revenue.",
};

export default pager;