import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const contentResearchSystems: OnePager = {
  key: "content-research-systems",
  category: "Content Systems",
  question:
    "How do we consistently find pains and turn them into high-performing content?",
  hook: "A weekly, repeatable research OS that mines pains, trends, and winning patterns — then converts them into hooks, angles, and formats.",
  summary:
    "The Content Research Systems one-pager operationalizes problem-aware research. Sweep comments, communities, reviews, ads, and trend tools; extract verbatim pains and what works now; synthesize into hooks, angles, proof, and formats you can ship every week.",
  bullets: [
    "Problem-aware focus: mirror verbatim pains and objections.",
    "Seven systems: Pain Mining, Teardowns, Search-Intent, VOC, Communities, Ad Angle Scanner, Trend Radar.",
    "Lightweight weekly cadence with Notion-ready cards and QA gates to ship fewer, better pieces.",
  ],
  steps: [
    {
      t: "Collect",
      d: "Mine comments, threads, reviews, ads, and trend dashboards.",
    },
    {
      t: "Tag",
      d: "Label pain, trigger, consequence, desired outcome, objection.",
    },
    { t: "Cluster", d: "Group repeating hooks, angles, and winning patterns." },
    { t: "Synthesize", d: "Turn into scripts/outlines: Hook → Angle → Proof." },
    { t: "Ship", d: "Publish 10 shorts + 2 long-form outlines per week." },
  ],
  kpis: [
    "Hook CTR / 3-sec hold",
    "Save/share rate",
    "Reply rate on prompts",
    "Content → lead conversions",
  ],
  tools: [
    "Reddit, YouTube/TikTok/IG comments, Quora",
    "People Also Ask, AnswerThePublic, AlsoAsked, Google Trends",
    "Meta Ad Library, TikTok Creative Center, BuzzSumo",
    "Notion cards for Pain, Pattern, Angle",
  ],
  cta: "Open the playbook and use the templates to run your weekly research sweep and ship problem-aware content that converts.",
  render: () => <LegacyMount slug="content-research-systems" />,
};

export default contentResearchSystems;
