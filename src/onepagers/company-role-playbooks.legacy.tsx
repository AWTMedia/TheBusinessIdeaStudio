import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const companyRolePlaybooks: OnePager = {
  key: "company-role-playbooks",
  question:
    "How should each role operate to drive a nurture-first client pipeline?",
  hook: "Tabbed playbooks for Founder, Setter, Ops, Creative, Closer, CRM, Editor, plus shared SOPs—built for measurement and ROI.",
  summary:
    "This one-pager centralizes role playbooks and shared SOPs so your team runs a single, measurable operating model. It includes KPIs, cadence, artifacts, and a KPI loop with an AI reporting layer feeding an executive review.",
  bullets: [
    "Role-specific objectives, cadence, KPIs, and artifacts.",
    "Shared data backbone: events, UTMs, pipelines, dashboards.",
    "KPI loop + AI reports → weekly executive review.",
  ],
  steps: [
    {
      t: "Adopt the shared data & SOP backbone",
      d: "Principle: One data language for all teams. Levers: core events, UTM schema, pipeline stages. Takeaway — Comparable, trustworthy metrics.",
    },
    {
      t: "Run role playbooks by cadence",
      d: "Core Idea — Each role ships outputs on a fixed rhythm (daily/weekly/monthly). Takeaway — Consistency creates signal and speed.",
    },
    {
      t: "Close the KPI loop weekly",
      d: "Levers: collect → define → analyze → refine → moderate → repeat. Takeaway — Continuous improvement compounds.",
    },
  ],
  kpis: [
    "Follower→Convo %",
    "Booked rate",
    "Show %",
    "Close %",
    "Payback period",
    "ROAS",
    "Data completeness %",
  ],
  tools: [
    "HubSpot/GoHighLevel",
    "GA4 + GTM",
    "Meta/LinkedIn/YouTube",
    "Klaviyo/ESP",
    "Sales Navigator",
    "n8n",
    "Wistia",
  ],
  cta: "Open the playbooks, align each owner on cadence & KPIs, and review the KPI loop every week.",
  // Mount the legacy React page inside the viewer:
  render: () => <LegacyMount slug="company-role-playbooks" />,
};

export default companyRolePlaybooks;
