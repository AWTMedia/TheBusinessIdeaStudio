// src/onepagers/offer-lab-7d.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "offer-lab-7d",
  question: "What’s the simplest way to validate an offer in 7 days?",
  hook: "Here’s the 7-Day Offer Lab that helps solopreneurs validate an offer and get sales within a week.",
  summary:
    "This is a go-to-market validation question—about speed, proof, and certainty before investing time into scaling. The aim is to confirm that your offer solves a real, urgent problem and that real people will pay for it—in less than a week.",

  // Implied Goals
  bullets: [
    "Speed: Validate fast before building the wrong thing.",
    "Proof: Get real, quantifiable market signals.",
    "Simplicity: A lean system you can repeat for every new idea.",
  ],

  // The Answer → three stages
  steps: [
    {
      t: "⚡ 1) Problem Validation",
      d: [
        "Principle: Prove the problem exists using what the market is already saying.",
        "Core Idea: Use AI to scan Reddit threads, TikTok comments, and YouTube discussions for live pain and demand signals.",
        "Key Levers: Data = truth (real conversations), Volume = urgency (frequency of pain), Recency = relevance (fresh problems).",
        "Takeaway: Don’t guess—let public conversations reveal what people are already struggling with.",
      ].join(" "),
    },
    {
      t: "🔍 2) Market Confirmation (Facebook Ads Library)",
      d: [
        "Principle: If others are spending to promote it—and keep spending—demand exists.",
        "Core Idea: Search Facebook Ads Library for offers like yours. Long-running ads usually mean they’re profitable.",
        "Key Levers: Ad longevity, angle analysis (problem/promise language), and creative benchmarking (visuals, hooks, CTAs).",
        "Takeaway: If competitors are profitably advertising, your offer lives in an active demand zone.",
      ].join(" "),
    },
    {
      t: "💡 3) Actual Demand Testing",
      d: [
        "Principle: Real validation = people show intent for your exact offer.",
        "Core Idea: Run a small “profile ad” to your page. Track if attention turns into follows, replies, and booked calls/lead captures.",
        "Key Levers: Micro-budget proof ($10/day for 3–5 days), qualified signals (who follows > how many), rapid iteration (tweak promise/outcome daily).",
        "Takeaway: Validation isn’t theory—it’s people raising their hand for what you’re offering.",
      ].join(" "),
    },
  ],

  // Practical tracking for the 7-day sprint
  kpis: [
    "Problem mentions/week (from Reddit/TikTok/YouTube scrape)",
    "Competitor ad longevity (days/weeks active)",
    "Profile ad CTR and cost per profile visit",
    "Follows from ads (quality of followers/ICP fit)",
    "Inbound DMs / replies / lead magnet requests",
    "Booked calls or paid pilot accept rate",
  ],

  tools: [
    "Reddit/TikTok/YouTube search (manual or AI helper)",
    "Custom/AI scraping tool or search dashboards",
    "Facebook Ads Library",
    "Meta Ads Manager (profile ad)",
    "Notion/Sheets for daily iteration log",
    "Calendly or simple booking link",
  ],

  cta: "Run the 7-Day Offer Lab this week: Day 1–2 validate the problem, Day 3–4 confirm the market with Ads Library, Day 5–7 run a micro-budget profile ad and iterate daily. Decide: go, pivot, or kill.",
};

export default pager;
