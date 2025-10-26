// src/onepagers/demand-os.ts
import type { OnePager } from "../types/OnePager";

const pager: OnePager = {
  key: "demand-os",
  question: "How do I get predictable leads without posting 10× a day?",
  hook: "We get a predictable stream of qualified leads without posting 10× a day. Here’s how:",
  summary:
    "This is a marketing systems question—about efficiency of content-to-lead conversion rather than volume. The aim is to engineer a system where lead flow becomes predictable, qualified, and consistent—without relying on constant activity.",

  // Implied Goals
  bullets: [
    "Predictability: steady, forecastable lead flow.",
    "Qualification: relevant, ready-to-buy prospects.",
    "Efficiency: lower posting frequency without losing reach.",
  ],

  // The Answer → three pillars
  steps: [
    {
      t: "⚡ 1) Signal Content",
      d: [
        "Principle: Speak directly to pain, not broadly to everyone.",
        "Core Idea: Signal content focuses on the specific pains your offer solves so each piece attracts ideal customers rather than mass attention.",
        "Key Levers: Specificity = selectivity (tighter pain focus → higher-quality audience). Relevance = resonance (mirror your ICP’s internal dialogue). Positioning = predictability (tie content to one core offer).",
        "Takeaway: High-signal content means you post less but convert more.",
      ].join(" "),
    },
    {
      t: "🌿 2) Evergreen Content",
      d: [
        "Principle: Create once, benefit forever.",
        "Core Idea: Evergreen assets decouple time from traffic; they keep qualifying and converting across months and channels.",
        "Key Levers: Time decoupling (one strong piece works on autopilot). Cross-channel portability (atomize across formats/platforms). Funnel anchoring (every asset has a job: Attract → Educate → Prove → Convert).",
        "Takeaway: Turn your best ideas into permanent discovery engines that compound visibility, leads, and proof.",
      ].join(" "),
    },
    {
      t: "🤝 3) Referral Incentive",
      d: [
        "Principle: Turn happy clients into your marketing team.",
        "Core Idea: Referrals convert existing customer trust into predictable lead flow; each client becomes a distribution node.",
        "Key Levers: Trust compounding (arrive pre-sold). Network multiplication (satisfied clients amplify exposure). Systemization (reward + track referrals to create a repeatable loop).",
        "Takeaway: When every client can generate new clients, you unlock geometric, low-cost, self-reinforcing growth.",
      ].join(" "),
    },
  ],

  // Practical tracking
  kpis: [
    "Leads/week (qualified)",
    "Booked calls/week",
    "Content → click-through rate (CTR)",
    "Profile/link CTR → booking conversion %",
    "Referral rate (% of new leads from clients)",
    "Evergreen pageviews → lead conversion %",
  ],

  tools: [
    "Notion or Sheets (content & KPI tracker)",
    "Scheduling link (Calendly/Cal.com)",
    "Lightweight CRM (Pipedrive/HubSpot/Sheet)",
    "Analytics (GA4 + UTMs, platform insights)",
    "Canva/Figma (templates for evergreen & signal posts)",
    "Simple referral tracker (form + coupon/credit system)",
  ],

  cta: "Ship one high-signal post tied to your core offer and connect three booking paths (bio link, pinned comment, DM keyword). Create one evergreen asset this week and add a simple referral reward for current clients.",
};

export default pager;
