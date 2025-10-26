// src/onepagers/ai-tooling.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "ai-tooling",
  question: "Which AI tools actually work for business — and how do I integrate them?",
  hook:
    "Choose tools by capability × connectivity, then embed them into workflows through clearly defined triggers and hand-offs.",
  summary:
    "This is an execution question — selecting and integrating tools so they actually deliver leverage. The aim is to build an automation stack where AI tools reduce manual work and link seamlessly with ops.",

  // Implied Goals
  bullets: [
    "Effectiveness: Tools must solve real bottlenecks (not shiny toys).",
    "Integration: Tools must connect — no siloed subscriptions.",
    "Scalability: Selected tools must enable workflows that scale with team and volume.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🧭 1) Use-Case Mapping (Problem → Capability)",
      d: [
        "Principle: Every tool should solve a specific workflow/step — not general 'AI for marketing.'",
        "Core Idea: Map bottlenecks, then match AI capabilities to clear tactical use-cases.",
        "Key Levers: Bottleneck Inventory — manual/slow tasks: content creation, email/drip copy, customer support triage, lead segmentation, report summaries. Capability Table — Generation (text/video/image), Extraction/Classification (sentiment, intent, entity), Orchestration (trigger + route + action). Priority Filter — prioritize high volume × low value-add tasks (ideal for AI) over high-value complex decisions (human). Outcome Metrics — hours saved, errors reduced, cycle time cut.",
        "Takeaway: Define what you need before picking a tool.",
      ].join(" "),
    },
    {
      t: "🧰 2) Tool Selection & Connectivity (Capability → Stack)",
      d: [
        "Principle: Select tools not only for capability but also for how they connect to your stack.",
        "Core Idea: Choose tools that integrate via API, Zapier/Make/n8n, or native connectors — then embed them in your workflows.",
        "Key Levers: Tool Criteria — API/integration availability; reliability & uptime; cost vs usage (pay-per-use > flat subscription when testing); community/templates to reduce build time. Stack Example — Content generation: GPT-4 (via OpenAI) or Claude + prompt templates in Notion. Repurposing: Descript (video) + CapCut (edits) + Lumen5 (shorts). Support triage: Chatbot (e.g., ChatGPT plugin) → Zendesk/Freshdesk ticket automation. Workflow Orchestration: n8n/Make linking Typeform → Airtable → Slack → Notion. Connector Strategy — always automate 'data-in' and 'data-out' to avoid manual copy/paste. Pilot vs Production — start lower tier/free; benchmark before full-scale license.",
        "Takeaway: Stack = tools + connectors. Without connectors, tools remain islands.",
      ].join(" "),
    },
    {
      t: "🚀 3) Implementation Workflow (Tool → Live System)",
      d: [
        "Principle: A tool is only as valuable as its implementation and adoption.",
        "Core Idea: Treat tool rollout as a mini-project: map, build, test, train, measure.",
        "Key Levers: Mini-Project Plan — Week 1 map workflow; Week 2 build integration; Week 3 pilot with team/clients; Week 4 review & iterate. Change Management — train users, capture SOPs for the new tool, define owner and SLA for tool output. Monitoring & Metrics — track tool uptime, error rates, usage logs, and savings (time/cost). Feedback Loop — every 'tool error' or manual workaround triggers a workflow update or tool switch. Governance — maintain tool inventory, license tracking, monthly ROI review, and a tool retirement plan.",
        "Takeaway: Rollout must include people + process + tech, not tech alone.",
      ].join(" "),
    },
  ],

  cta:
    "Don’t chase the latest shiny tool. Map a real bottleneck, pick a tool that fits the capability and connects cleanly, implement with a mini-project plan, and measure the impact. When tools are selected for fit and wired into workflows, you unlock true leverage.",
};

export default pager;