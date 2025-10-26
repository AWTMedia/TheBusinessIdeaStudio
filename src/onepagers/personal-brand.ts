// src/onepagers/personal-brand.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "personal-brand",
  question:
    "How do I build a personal brand and authority when I’m new or don’t have a big following?",
  hook:
    "Pick a narrow problem, publish proof-based content weekly, and compound trust with social receipts and consistent interaction.",
  summary:
    "This is an authority-building question — earning trust on the internet, fast. The aim is to create a repeatable credibility engine that turns small signals into compounding reputation.",

  // Implied Goals
  bullets: [
    "Clarity: Be known for solving one painful problem for one ICP.",
    "Credibility: Show outcomes and receipts (not opinions).",
    "Consistency: Ship on a weekly cadence so trust compounds.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🎯 1) Positioning & Narrative (Unknown → Recognized)",
      d: [
        "Principle: Specific > credible > famous. Get specific first.",
        "Core Idea: Define a sharp 'who/what/outcome' and a signature story that explains why you.",
        "Key Levers: One-Liner — “I help [ICP] go from [pain] to [outcome] with [mechanism].”. Signature Story — 3-paragraph origin → insight → mission (why you care + what you learned). Content Pillars — 3–4 core themes: problem fixes, case breakdowns, frameworks, and behind-the-scenes. Visual Identity Lite — headshot set, 2–3 brand colors, simple thumbnail/cover style. Credibility Map — list degrees, projects, niche wins, mentors, or books studied — all turned into visible assets.",
        "Takeaway: People trust specificity and a believable reason you care about this problem.",
      ].join(" "),
    },
    {
      t: "🧾 2) Proof Stack Production (Doubt → Trust)",
      d: [
        "Principle: Authority is demonstrated, not declared.",
        "Core Idea: Publish proof weekly in multiple formats so strangers can verify your claims.",
        "Key Levers: Micro-Case Studies — before/after metrics, screenshots, and timelines (Problem → Intervention → Result). Demonstrations — live teardowns, audits, or 'build in public' sessions. Artifacts — checklists, SOPs, calculators — release one monthly. Testimonials — collect via forms/DMs; include names, roles, and numbers. Consistency Cadence — 1 long-form (YT/blog/LinkedIn doc) + 3 shorts + 2 carousels per week.",
        "Tools & Systems: Capture — Loom, Fathom, Testimonial.to/Senja. Edit/Repurpose — CapCut/Descript, Canva/Figma. Library — Notion/Airtable for proof archive with tags (industry, metric, claim).",
        "Takeaway: Every week, add one new receipt. Over 12 weeks, you look 'established.'",
      ].join(" "),
    },
    {
      t: "📡 3) Distribution & Interaction (Invisible → In-Demand)",
      d: [
        "Principle: Trust grows in public through repeated helpful interactions.",
        "Core Idea: Show up where your ICP hangs out, teach freely, and create lightweight invitations.",
        "Key Levers: Platform OS — pick 2 platforms (e.g., LinkedIn + YouTube, or IG Reels + Email). Engagement Rituals (30 min/day) — comment meaningfully on ICP/partner posts, answer group questions, DM value-first. Lead Magnet + Email — one evergreen guide or audit → 5-email nurture (story, case study, FAQ, CTA). Light CTAs — 'Free mini-audit,' 'DM CHECKLIST,' or 'Join the weekly teardown.' Partnerships — guest on 2 podcasts/month, co-host a webinar, or swap newsletters.",
        "Tools & Systems: Scheduling — Buffer/Metricool. Email — ConvertKit/MailerLite. Community — Circle/Discord (optional, after signal). Analytics — GA4, platform insights, or a simple KPI tracker.",
        "Takeaway: Teach where your buyers are, invite softly, and keep the conversation going.",
      ].join(" "),
    },
  ],

  cta:
    "You don’t need a big following to be trusted. Build your credibility engine: one clear promise, weekly proof, and public consistency. Do that for 12 weeks, and you’ll look like the obvious choice in your niche.",
};

export default pager;