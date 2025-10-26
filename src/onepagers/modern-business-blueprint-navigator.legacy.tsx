import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const modernBusinessBlueprintNavigator: OnePager = {
  key: "modern-business-blueprint-navigator",
  category: "Repository",
  question: "How can I browse and open all one-pagers in a single place?",
  hook: "A left-nav ‘book’ with search and an embedded viewer so you can scan, open, and print any page fast.",
  summary:
    "Navigator UI that organizes the entire library into sections (Foundations → Market/Offer → Content/Scale → Pipeline → Sales → Ops → Sprints → Finance). Includes search across titles/tags/blurbs and an iframe viewer with open-in-new-tab + print.",
  bullets: [
    "Left TOC grouped by logical build → launch → scale flow.",
    "Search titles, tags, and blurbs across all entries.",
    "Right-side embedded viewer with external open + print.",
  ],
  steps: [
    {
      t: "Search or pick a section",
      d: "Use the sidebar to filter by query or jump to a chapter.",
    },
    {
      t: "Select an entry",
      d: "Loads in the right-pane viewer; open in a new tab if needed.",
    },
    {
      t: "Print/Save",
      d: "Use the built-in print action for A4 landscape friendly output.",
    },
  ],
  kpis: [
    "Time-to-find doc ↓",
    "Team adoption of standard pages ↑",
    "Reduced duplicate links in docs",
  ],
  tools: ["Navigator UI", "Search", "Embed viewer"],
  cta: "Open the Navigator, search a topic like ‘offer’ or ‘SOP’, and jump straight into the page you need.",
  render: () => <LegacyMount slug="modern-business-blueprint-navigator" />,
};

export default modernBusinessBlueprintNavigator;
