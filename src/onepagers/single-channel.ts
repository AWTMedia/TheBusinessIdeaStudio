// src/onepagers/single-channel.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "single-channel",
  question: "What channel should I pick if I can only pick one?",
  hook: "The Single-Channel Dominance Method helped creators 3× engagement by focusing on one platform.",
  summary:
    "This is a channel clarity question—about maximizing traction through focus instead of dilution. The goal is to identify the one platform that perfectly aligns with your audience, your message, and your content style—so every post compounds instead of competing for attention.",

  // Implied Goals
  bullets: [
    "Clarity: Eliminate confusion about where to post and why.",
    "Efficiency: Focus time and creative energy on one channel that multiplies results.",
    "Relevance: Align message, platform, and audience for maximum engagement.",
  ],

  // The Answer → three filters
  steps: [
    {
      t: "🧭 1) ICP Avatar Identification",
      d: [
        "Principle: You can’t dominate a channel if you don’t know who you’re speaking to.",
        "Core Idea: Clearly define your Ideal Customer Persona (ICP)—not just demographics but psychographics, values, and intent. Understand how they think, what they want, and what triggers action.",
        "Key Levers: Quantitative data (age, income, occupation, digital behavior), qualitative insight (desires, frustrations, aspirations), and emotional triggers (the real 'why' behind their engagement).",
        "Takeaway: The tighter your ICP definition, the easier it is to find and resonate with them online.",
      ].join(" "),
    },
    {
      t: "🌐 2) Avatar-Platform Matching",
      d: [
        "Principle: Every platform has its own rhythm, culture, and tempo—your ICP lives where they feel understood.",
        "Core Idea: Match your target audience with the platform that mirrors their mindset and attention span. TikTok is fast, impulsive, and emotional; LinkedIn is slower, analytical, and professional. Choose based on your ICP’s psychology, not your personal preference.",
        "Key Levers: Pace alignment (match posting frequency to platform energy), cultural fit (choose where your ICP already spends time), and growth synergy (platforms reward cultural alignment).",
        "Takeaway: The right channel isn’t where you want to post—it’s where your people already are.",
      ].join(" "),
    },
    {
      t: "🎥 3) Avatar-Content Matching",
      d: [
        "Principle: Even on the right platform, the wrong content style kills traction.",
        "Core Idea: Tailor your format and storytelling to fit both your platform and your ICP’s behavior. Do they scroll for quick 15-second insights or prefer long-form breakdowns? Your delivery defines your reach.",
        "Key Levers: Format fit (visual, written, or verbal), consumption behavior (how your ICP learns and engages), and cross-style balance (short-form hooks + long-form trust builders).",
        "Takeaway: When message, platform, and content format align, engagement multiplies effortlessly.",
      ].join(" "),
    },
  ],

  // KPIs & Tools
  kpis: [
    "Engagement rate (likes/comments/saves per post)",
    "Profile-to-follower conversion rate",
    "Average watch/read time per post",
    "DM or inbound lead rate from target platform",
    "Follower growth trend over 90 days",
    "Platform retention (how often ICP returns to engage)",
  ],

  tools: [
    "Notion or Airtable (ICP research database)",
    "Platform analytics (TikTok/LinkedIn/YouTube/Instagram)",
    "Canva/Figma (brand templates for content formats)",
    "Google Sheets KPI dashboard",
    "CapCut or Descript for short-form editing",
    "ChatGPT/Claude for idea repurposing & caption variation",
  ],

  cta: "Pick one channel today. Define your ICP, match their mindset to the platform, and craft one recurring content format native to that platform. Stick with it for 90 days and measure compounding engagement.",
};

export default pager;
