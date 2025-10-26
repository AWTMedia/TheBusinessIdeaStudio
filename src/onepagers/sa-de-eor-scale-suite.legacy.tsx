import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const SaDeEorScaleSuiteLegacy: OnePager = {
  key: "sa-de-eor-scale-suite",
  category: "Legal & Ops • Go-to-Market",
  question: "DACH Business Plan Documents",
  hook:
    "Legacy mount for the three-page EOR + Scale suite: deck, landing, contracts.",
  summary:
    "Runs the full EOR + Scale suite through the legacy registry system (uses hash routing #deck/#landing/#contracts).",
  render: () => <LegacyMount slug="sa-de-eor-scale-suite" />,
};

export default SaDeEorScaleSuiteLegacy;