// src/onepagers/founder-os.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "founder-os",
  question:
    "How do I manage my time, avoid burnout, and stay productive as a one-person business?",
  hook:
    "Design your week like a system: automate the routine, batch the creative, and protect energy as aggressively as time.",
  summary:
    "This is a sustainability question — balancing growth with endurance. The aim is to build a founder operating system that preserves mental bandwidth while driving consistent output.",

  // Implied Goals
  bullets: [
    "Focus: Work on high-leverage actions instead of reacting to noise.",
    "Energy: Maintain creativity and clarity by managing energy, not just hours.",
    "Consistency: Build habits and rhythms that compound results without exhaustion.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🔹 1) Energy & Priority Calibration (Overwhelm → Clarity)",
      d: [
        "Principle: You can’t manage time without managing energy.",
        "Core Idea: Define priorities by energy and impact — not urgency — and eliminate low-leverage input work.",
        "Key Levers: The 3-Zone Framework — Zone of Genius (high-impact, high-enjoyment work like strategy, creation, selling). Zone of Competence (tasks you can do but should delegate soon). Zone of Drain (low ROI tasks to automate or remove entirely). Weekly Priority Mapping — choose 3 outcomes per week (Revenue, Brand, Systems). Time Budgeting — assign energy-intensive work to high-focus hours (AM blocks). Boundary Setting — create 'no-call days' or 'deep work blocks' for creative tasks. Digital Hygiene — audit apps, tabs, and notifications weekly to reduce context switching.",
        "Takeaway: Focus follows energy — not the calendar.",
      ].join(" "),
    },
    {
      t: "🔹 2) Rhythmic Scheduling (Chaos → Consistency)",
      d: [
        "Principle: Productivity compounds through routine, not intensity.",
        "Core Idea: Build a structured weekly rhythm that automates when and how things happen.",
        "Key Levers: Weekly Architecture — Monday: Planning + Admin + Vision check. Tue–Thu: Deep work and client creation. Friday: Reflection + Metrics + Improvement. Time Blocking — AM for creative, PM for collaborative; protect your best cognitive hours. Batching Tasks — group similar actions (content, emails, outreach, meetings) into single blocks. Themed Days — assign each day a purpose (e.g., 'Creation Tuesday', 'System Saturday'). 90/60 Rule — 90 minutes deep focus → 15-minute recovery cycle using tools like Pomofocus or Sunsama. Review Rhythm — weekly reflection on wins, misses, and system tweaks.",
        "Takeaway: Systems don’t drain discipline — they protect it.",
      ].join(" "),
    },
    {
      t: "🔹 3) Systems for Focus & Recovery (Fatigue → Flow)",
      d: [
        "Principle: Productivity without recovery is just burnout in disguise.",
        "Core Idea: Build feedback loops for mental reset, physical wellness, and momentum tracking.",
        "Key Levers: Morning Routine — non-negotiable habits (hydration, sunlight, exercise, journaling) before screens. Evening Shutdown — review tomorrow’s top 3 tasks; close loops to reduce mental load. Task Automation — use tools (Notion, ClickUp, Zapier) to manage recurring reminders. Energy Tracking — log mood and output daily to identify burnout patterns. Digital Sabbaths — one day weekly with no inputs to reset dopamine and regain perspective. Accountability Loops — weekly check-ins with a peer, mentor, or dashboard to track balance.",
        "Takeaway: Recovery is not optional — it’s the fuel for high performance.",
      ].join(" "),
    },
  ],

  cta:
    "Time management isn’t about squeezing more hours — it’s about engineering energy, focus, and rhythm. When you work inside a system that protects your best hours and restores your creative energy, productivity stops being a sprint and becomes a sustainable flow.",
};

export default pager;