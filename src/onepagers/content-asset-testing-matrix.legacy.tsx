import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const contentAssetTestingMatrix: OnePager = {
  key: "content-asset-testing-matrix",
  question:
    "How do we plan, test, and iterate creatives across paid and organic?",
  hook: "A single matrix to design and iterate video/carousel/story assets with hooks, formats, CTAs, placements, analytics, and variants.",
  summary:
    "Filter by channel, platform, funnel stage, and offer type. Build one-pagers, plan story sequences, track analytics, export JSON/CSV, and clone variants for rapid testing.",
  bullets: [
    "Channels covered: Paid, Organic Short, Organic Long.",
    "Encodes variables: Hook (0–3s), Format, Copy, CTA, Angle, Placement, Length.",
    "Inline analytics editor (hook hold, CTR, CPM/CPR, watch time, saves/shares/comments, conv%).",
    "Variant cloning (+ Variant) and CSV/JSON export for weekly reviews.",
    "Platform views and an Organic Long-Form funnel map (TOF/MOF/BOF).",
  ],
  steps: [
    {
      t: "Filter & search",
      d: "Narrow by channel/platform/funnel/offer and search hooks/CTAs/placements.",
    },
    {
      t: "Edit & clone",
      d: "Tweak copy, hooks, structures, and create +Variant rows to A/B the angle.",
    },
    {
      t: "Log analytics",
      d: "Enter results inline; export CSV for team review and iteration planning.",
    },
  ],
  kpis: [
    "Hook hold % (3s)",
    "CTR",
    "CPM / CPR",
    "Watch time",
    "Conv %",
    "Saves/Shares/Comments",
  ],
  tools: ["Ads Manager", "GA4", "Sheets/Notion", "Editor Stack"],
  cta: "Open the matrix, apply filters, and start cloning variants for this week’s tests.",
  // Mount the full interactive page inside the viewer:
  render: () => <LegacyMount slug="content-asset-testing-matrix" />,
};

export default contentAssetTestingMatrix;
