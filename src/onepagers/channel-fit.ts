// src/onepagers/channel-fit.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "channel-fit",
  question: "Which marketing channels should I use — social, SEO, paid ads, or content?",
  hook:
    "Pick channels by Channel–Offer Fit, not popularity. Map where your ICP already hangs out, run small controlled experiments, and scale only what hits your CAC targets.",
  summary:
    "This is a prioritization question — choosing fewer, better channels. The goal is to build a focused, data-driven channel mix that reliably creates pipeline at target CAC by validating fit before scaling.",

  // Implied Goals
  bullets: [
    "Focus: Fewer channels, deeper mastery.",
    "Signal: Fast feedback to kill losers early.",
    "Efficiency: Channels that hit CAC targets and compound over time.",
  ],

  // The Answer → three parts
  steps: [
    {
      t: "🔎 1) ICP Habitat Mapping (Audience → Where to Hunt)",
      d: [
        "Principle: Go where your buyers already pay attention and seek solutions.",
        "Core Idea: Inventory the 'habitats' your ICP uses at each awareness stage — problem-aware vs solution-aware.",
        "Key Levers: List Habitats — search queries, subreddits/FB groups/Discords, newsletters, YouTube channels, events/podcasts, comparison pages. Intent Signals — high-intent (Google search, review sites) vs mid-intent (YouTube, LinkedIn) vs low-intent (TikTok/IG). Proof of Life — analyze competitor traffic, case study shares, and active buyer discussions.",
        "Tools: SparkToro, Similarweb, Ahrefs/SEMrush (keywords/referrers), Reddit/Twitter/X advanced search, podcast databases.",
        "Takeaway: Don’t guess channels; discover them from buyer behavior.",
      ].join(" "),
    },
    {
      t: "🧩 2) Channel Fit Matrix (Offer → Channel Mechanics)",
      d: [
        "Principle: The best channel matches your sales motion, ticket size, and content strengths.",
        "Core Idea: Score each potential channel on six criteria and pick the top 1–2 that align with your offer and capabilities.",
        "Key Levers: Buyer Intent Fit — how close to purchase are users here? Economic Fit — expected CAC vs target CAC/LTV. Content Advantage — can you consistently make the format (video/writing/UGC)? Speed to Signal — how quickly we learn (days vs months). Compounding Effect — does effort stack (SEO, YouTube, newsletter) or decay (Stories)? Operational Complexity — tools and skills required.",
        "Typical Fits: High-ticket B2B — LinkedIn + YouTube + Google Search/Retargeting + Email. DTC <$60 AOV — Meta Ads + UGC Creators + Email/SMS + TikTok organic. Courses/coaching — YouTube + Email + Meta/YT retargeting. Local services — Google Search/LSA + GMB + Meta retargeting.",
        "Takeaway: Choose channels your offer can win on — not just exist on.",
      ].join(" "),
    },
    {
      t: "🧪 3) 3-Week Pilot Sprints (Evidence → Budget)",
      d: [
        "Principle: Decisions follow data. Run small, controlled tests → scale winners → kill losers.",
        "Core Idea: Launch 2–3 channel pilots with identical goals and measure results objectively.",
        "Key Levers: Goal — one KPI (CPL for lead gen, CPA for sales, demo rate). Creative/Assets — 3 hooks × 2 formats (e.g., video + carousel). Budget — enough for 100+ meaningful actions (clicks/leads) to get signal. Measure — LP CVR, CTR, CPL/CPA, lead quality. Decide — Scale, iterate, or cut after 3 weeks.",
        "Benchmarks: Search — highest intent, smaller volume, watch CPC & CVR. Meta/TikTok — cheap reach, creative-dependent, needs retargeting + LTV math. YouTube — slow start, compounding authority. SEO/Blog — slow burn, pair with lead magnets. LinkedIn — strong for high-ticket if posting 3–5×/week.",
        "Operating Stack (Lean): Research — SparkToro, Ahrefs, Similarweb. Creation — CapCut/Premiere Rush, Descript, Canva/Figma. Landing & Capture — Webflow/Framer, ConvertKit/MailerLite, Typeform/Tally. Analytics — GA4, Tag Manager, Meta Pixel, Looker Studio. Project Mgmt — Notion/ClickUp with weekly channel review.",
        "Takeaway: Treat channels like a portfolio — test, prove, and pour fuel on what works.",
      ].join(" "),
    },
  ],

  cta:
    "Right channels emerge from where your buyers live, what your offer demands, and what the numbers prove. Map habitats, score fit, and run 3-week pilot sprints. Choose two, test hard, and scale only when CAC and ROI align — that’s how you build a sustainable channel mix.",
};

export default pager;