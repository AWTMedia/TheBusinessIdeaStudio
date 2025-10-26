// src/onepagers/demand-engine.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "demand-engine",
  question: "How do I get consistent traffic and leads to my online business?",
  hook:
    "Build a Demand Engine that turns signal content + owned assets + warm ads into predictable lead flow.",
  summary:
    "This is a pipeline reliability question — about moving from random spikes to steady, qualified demand. The aim is to engineer a repeatable system that produces traffic daily and converts a % of that attention into leads every week.",

  // Implied Goals
  bullets: [
    "Predictability: A calendar you can forecast, not hope for.",
    "Quality: Traffic from people who match your offer, intent, and budget.",
    "Leverage: Inputs that compound (not burn out) over time.",
  ],

  // The Answer → three parts
  steps: [
    {
      t: "⚡ 1) Signal Content (Attention → Clicks)",
      d: [
        "Principle: Speak to one pain, one promise, one person.",
        "Core Idea: Post weekly pieces that mirror your ICP’s internal dialogue and point to one destination (lead magnet or call).",
        "Key Levers: Problem Posts — “If you’re stuck with X, here’s how we fixed it…”. Proof Posts — case studies, screenshots, before/after transformations. Process Posts — “Our 3-step way to achieve Y” → CTA to free guide or audit.",
        "Tools & Systems: Use Notion/ClickUp to plan a 4-week content cadence (1 value, 1 proof, 1 process per week). Automate posting using Buffer or Metricool. Capture engagement data via UTM links + Google Sheets or Airtable.",
        "Takeaway: Specificity beats volume. Fewer, sharper posts drive consistent clicks from the right people.",
      ].join(" "),
    },
    {
      t: "🌿 2) Evergreen Assets (Clicks → Leads)",
      d: [
        "Principle: Create once, capture forever.",
        "Core Idea: Turn your best insight into one irresistible lead magnet + short email sequence that nurtures to a call.",
        "Key Levers: One Magnet — free audit checklist, ROI calculator, or “X Mistakes” PDF tied to your offer. One Page — simple landing page (headline → bullets → form → thank-you redirect). One Sequence (5 emails) — Value → Case study → Objection bust → FAQ → Soft CTA to call.",
        "Tools & Systems: Build with ConvertKit, MailerLite, or Beehiiv for automations. Host your lead magnet on Notion, Google Drive, or Gumroad (free). Track conversions using Google Tag Manager and Meta Pixel for retargeting.",
        "Takeaway: Own your audience. A single evergreen magnet + sequence can turn traffic spikes into a steady flow of booked calls.",
      ].join(" "),
    },
    {
      t: "🔁 3) Warm Amplification (Leads → More Leads)",
      d: [
        "Principle: Scale what already resonates.",
        "Core Idea: Retarget engaged users and site visitors with your top organic content re-edited to end in a strong CTA. Layer lookalikes only after profitable conversion.",
        "Key Levers: Source Audiences — 180-day engagers, 95% video viewers, website visitors. Winning Creatives — pull from organic winners (keep same hook + value, add CTA). Budget Rule — start at R100–R300/day; scale on 2.0+ ROAS or CPA consistency.",
        "Tools & Systems: Use Meta Ads Manager for retargeting. Connect Zapier → Sheets → Meta for dynamic updates. Use CapCut Templates or Premiere Rush to repurpose videos for ads.",
        "Takeaway: Pay to re-reach the right people. Warm ads stabilize your inbound pipeline and ensure consistent, qualified leads.",
      ].join(" "),
    },
  ],

  cta:
    "Connect content → capture → conversion. Implement one weekly Signal Content cadence, one Evergreen magnet + 5-email sequence, and Warm Amplification at R100–R300/day — then track clicks, leads, and booked calls as your pipeline shifts from random luck to reliable leverage.",
};

export default pager;