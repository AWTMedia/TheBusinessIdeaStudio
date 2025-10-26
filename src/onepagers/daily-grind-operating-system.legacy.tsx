import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const dailyGrindOS: OnePager = {
  key: "daily-grind-operating-system",
  category: "Personal Systems • Habits",
  question:
    "Dailt Grind Personal Operating System",
  hook: "A single-file React + Tailwind ‘Daily Grind’ OS: map INPUT → PROCESS → GOAL, then track it weekly with localStorage, Ikigai, milestones, and quotes.",
  summary:
    "This one-pager renders a clean, printable habit OS. Left column is an infographic table (Input → Process → Goal). Beneath it: a persistent weekly tracker (ISO-week keyed). The right column contains Daily Core and Weekly Anchors, an Ikigai visual, and a Milestones checklist—both persisted to localStorage. Two Quote cards bookend the layout.",
  bullets: [
    "Infographic rows: frequency → process → outcome (three colored lanes).",
    "Weekly tracker: ISO-week storage, reset control, daily checkboxes.",
    "Right rail: Daily Core, Weekly Anchors, Ikigai SVG, Milestones (persisted).",
    "Accessible, print-friendly, responsive grid; zero external UI deps.",
    "Header quote + scripture quote; tasteful Tailwind styling.",
  ],
  steps: [
    {
      t: "Define your loop",
      d: "List 5 daily processes and 5 weekly anchors with clear outcomes.",
    },
    {
      t: "Map the lanes",
      d: "Place each as INPUT → PROCESS → GOAL for instant ‘why’ visibility.",
    },
    {
      t: "Track weekly",
      d: "Use the built-in tracker; it keys to the current ISO week automatically.",
    },
    {
      t: "Align purpose",
      d: "Customize Ikigai labels and the reminder text to keep intent visible.",
    },
    {
      t: "Lock milestones",
      d: "Set 4–6 season milestones; check off as you hit them (persisted).",
    },
  ],
  kpis: [
    "Daily Core completion ≥ 4/5",
    "Weekly Anchors completion ≥ 4/5",
    "Exercise minutes ≥ 45/day avg",
    "Finance touch ≥ 1×/week",
    "Milestones done ≥ 1 per month",
  ],
  tools: [
    "Infographic habit map (3-lane grid)",
    "Weekly tracker with ISO-week persistence",
    "Ikigai SVG with legend",
    "Milestone checklist with localStorage",
    "Quote cards (top/right and footer)",
  ],
  targets: [
    "Individuals building a consistent daily routine with explicit weekly anchors.",
    "Creators/founders who want a printable, visual OS without Notion overhead.",
    "Anyone who benefits from a simple streak-and-milestone feedback loop.",
  ],
  cta: "Clone and personalize your INPUT → PROCESS → GOAL rows, then commit to a 4-week streak using the tracker. Revisit milestones each Sunday.",
  render: () => <LegacyMount slug="daily-grind-operating-system" />,
};

export default dailyGrindOS;
