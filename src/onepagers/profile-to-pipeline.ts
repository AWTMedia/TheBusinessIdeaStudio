// src/onepagers/profile-to-pipeline.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "profile-to-pipeline",
  question: "How do I turn views into booked calls?",
  hook: "Here’s the Profile-to-Pipeline System that turns followers into booked calls on autopilot.",
  summary:
    "This is a conversion consistency question—about transforming attention into appointments without chasing DMs or endless follow-ups. The goal is to design a Profile-to-Pipeline System that converts daily content reach into scheduled calls automatically—by aligning content, automation, and accessibility.",

  // Implied Goals
  bullets: [
    "Conversion: Move from vanity metrics to measurable business outcomes.",
    "Automation: Replace manual outreach with scalable, trigger-based systems.",
    "Frictionless Flow: Make booking a call the most natural next step for an engaged viewer.",
  ],

  // The Answer → three layers
  steps: [
    {
      t: "⚡ 1) Push Winning Organic into Retargeting Ads",
      d: [
        "Principle: What already resonates organically will convert even better with direction.",
        "Core Idea: Identify your top-performing organic posts and turn them into retargeting ads with a stronger, action-driven ending. You’re not guessing what works—you’re amplifying what’s already proven.",
        "Key Levers: Signal tracking (use analytics to find high watch time, saves, or comments), creative repurposing (keep format + message but end with a CTA), and warm audience targeting (only retarget people who’ve engaged).",
        "Takeaway: Scale what’s already working and guide warm attention straight to your calendar.",
      ].join(" "),
    },
    {
      t: "💬 2) DM Lead Magnet",
      d: [
        "Principle: Engagement is highest where conversations start—in the DMs.",
        "Core Idea: Use automation to send a free lead magnet when someone comments or DMs a keyword. This shifts passive viewers into active, pre-qualified leads.",
        "Key Levers: Keyword triggers (e.g., “Comment ‘Guide’ to get the checklist”), automated nurture (deliver the magnet, then follow with a call offer), and inbound psychology (when they initiate, conversion rates multiply).",
        "Takeaway: Turn comments into conversations, and conversations into conversions—automatically.",
      ].join(" "),
    },
    {
      t: "📞 3) Booked Call Accessibility",
      d: [
        "Principle: Every second of friction loses potential clients.",
        "Core Idea: Make booking effortless by placing your CTA everywhere—bio, captions, pinned comments, even inside your videos.",
        "Key Levers: Multi-point access (calendar link in bio, posts, stories, replies), visual prompts (on-screen text saying “Book a call—link in bio”), and ease of use (mobile-friendly booking forms with pre-filled fields).",
        "Takeaway: Eliminate guesswork—when booking is obvious and simple, followers convert naturally.",
      ].join(" "),
    },
  ],

  // KPIs & Tools
  kpis: [
    "Profile-to-booking conversion rate",
    "Retargeting ad CTR and cost per booked call",
    "DM keyword trigger count and reply rate",
    "Lead magnet downloads → booked calls %",
    "Average booking friction (clicks to calendar)",
    "Show-up rate and call-to-sale conversion %",
  ],

  tools: [
    "Meta Ads Manager (retargeting)",
    "ManyChat / Chatbase (DM automation)",
    "Calendly / Cal.com (booking system)",
    "Google Analytics 4 + UTM tracking",
    "Notion or Airtable CRM tracker",
    "Canva / CapCut for CTA overlays & creative templates",
  ],

  cta: "Audit your last five organic posts and identify the top performer. Turn it into a warm retargeting ad with a clear CTA. Add a DM keyword magnet to your next post and link your booking calendar everywhere. The goal: 3 touchpoints → 1 booked call daily.",
};

export default pager;
