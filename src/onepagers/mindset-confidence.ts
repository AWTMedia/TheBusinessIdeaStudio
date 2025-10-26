// src/onepagers/mindset-confidence.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "mindset-confidence",
  question:
    "How do I overcome fear of selling, perfectionism, and self-doubt?",
  hook:
    "Build confidence through evidence — small wins, repetition, and reframing selling as helping.",
  summary:
    "This is a mindset and identity question — removing internal friction so execution becomes natural. The aim is to develop a proof-based belief system where confidence is earned, not forced.",

  // Implied Goals
  bullets: [
    "Self-Trust: Replace self-criticism with data-backed confidence.",
    "Momentum: Take consistent, small actions that create visible progress.",
    "Authenticity: Redefine selling and execution as aligned acts of service — not performance.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🔹 1) Belief Reframing (Fear → Clarity)",
      d: [
        "Principle: You can’t outwork a belief that contradicts your goals.",
        "Core Idea: Identify internal stories that block execution and rewrite them as neutral, testable statements.",
        "Key Levers: Awareness Audit — write down the recurring thought before hesitation (e.g., “I’m not qualified,” “People will judge me”). Truth Test — ask, “What evidence proves this belief true? What evidence disproves it?” Reframe — replace “I need to be the best” with “I need to be useful.” Selling Reframe — selling = helping the right people solve the right problem faster. Fear Protocol — instead of fighting anxiety, use it as data; fear often marks the edge of growth.",
        "Takeaway: Confidence begins when beliefs become testable instead of emotional.",
      ].join(" "),
    },
    {
      t: "🔹 2) Evidence Building (Doubt → Proof)",
      d: [
        "Principle: You can’t think your way into confidence — you must earn it.",
        "Core Idea: Collect tangible micro-wins that prove capability through action.",
        "Key Levers: Micro Wins Framework — set 7-day, low-stakes challenges (e.g., make one offer, record one video, send one pitch). Action → Feedback → Reflection Loop — review what worked, extract learnings, and iterate instead of judging yourself. Progress Journal — track completed actions, wins, compliments, and testimonials daily to reinforce reality. Public Practice — share learnings, not perfection; “build in public” normalizes growth instead of comparison. Mentorship & Mirrors — surround yourself with people who normalize your next level, not your current fears.",
        "Takeaway: The fastest cure for doubt is evidence collected through small, repeated wins.",
      ].join(" "),
    },
    {
      t: "🔹 3) Identity Reinforcement (Insecurity → Integrity)",
      d: [
        "Principle: Confidence compounds when your actions align with your values.",
        "Core Idea: Anchor identity to integrity, not achievement — confidence then grows from consistency.",
        "Key Levers: Identity Statements — “I am the kind of person who ___.” (e.g., shows up, learns fast, finishes what I start). Consistency Rituals — morning journaling, weekly reviews, gratitude reflections — proof you’re showing up. Environment Design — follow creators and peers who model the mindset you want; unfollow those who fuel comparison. Somatic Grounding — breathwork, walks, and fitness regulate the nervous system; calm fuels clarity. Celebrate Milestones — publicly acknowledge progress; ritualize reflection after each launch or client win.",
        "Takeaway: Identity built on aligned behavior makes confidence sustainable — not fragile.",
      ].join(" "),
    },
  ],

  cta:
    "Mindset mastery isn’t positive thinking — it’s belief engineering through evidence. Reframe fear, collect proof of your capability, and align your identity with consistent action so imposter syndrome dissolves and execution becomes effortless and authentic.",
};

export default pager;