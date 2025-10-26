import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const modernBusinessBlueprintContents: OnePager = {
  key: "modern-business-blueprint-contents",
  category: "Repository",
  question: "Where can I browse the full library and open pages in new tabs?",
  hook: "A print-ready, no-embed index of your one-pagers with a left TOC, anchors, and search across titles, blurbs, and tags.",
  summary:
    "Contents view for the Modern Business Blueprint. Logical ‘book’ flow (Foundations → Offers → Content/Scale → Pipeline → Sales → Ops → Sprints → Finance) with section anchors, search, and cards that open each page in a new tab.",
  bullets: [
    "Left TOC with anchors to sections.",
    "Search titles, blurbs, and tags.",
    "Cards per entry with open-in-new-tab.",
  ],
  steps: [
    {
      t: "Search or jump via TOC",
      d: "Use the left sidebar to filter or click an anchor.",
    },
    {
      t: "Scan the cards",
      d: "Each card shows blurb + tags; click Open to launch the page.",
    },
    {
      t: "Print",
      d: "Use the print action for A4 landscape; no iframes/embeds here.",
    },
  ],
  kpis: [
    "Time-to-doc ↓",
    "Team usage of standard pages ↑",
    "Reduced duplicate links",
  ],
  tools: ["Index UI", "Anchors", "Search"],
  cta: "Open the Contents, search for a topic (e.g., ‘pricing’ or ‘UGC’), and pop the page in a new tab.",
  render: () => <LegacyMount slug="modern-business-blueprint-contents" />,
};

export default modernBusinessBlueprintContents;
