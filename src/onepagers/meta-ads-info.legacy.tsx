import React from "react";
import type { OnePager } from "@/types/OnePager";
import LegacyMount from "./LegacyMount";

const metaAdsInfo: OnePager = {
  key: "meta-ads-info",
  category: "Acquisition",
  question: "How do we launch, test, and scale Meta profile/story ads that turn into qualified conversations?",
  hook:
    "Run a simple 3-lane architecture (Profile, Story, Retargeting), measure weekly, and let setters convert. Hit CPV/CPQF gates, isolate winners, and scale horizontally.",
  summary:
    "A field-ready, print-clean one-pager for Meta Ads focused on Instagram Stories/Reels. Includes weekly benchmarks (CPV/CPQF/call costs), a 3-lane campaign structure, audience setup with IG_Engagers_180, creative system and naming, budget & scaling rules, objectives/placements, a launch checklist, metrics schema, setter ops, troubleshooting, and swipeable hooks/CTAs.",
  bullets: [
    "Benchmarks: CPV ≤ ~$0.20, Qualified ≥ 30%, CPQF ≤ $13–$14, cost/qualified call $80–$100, show-ups ≥ 75%, ROAS 8–15×.",
    "Creative volume: 3–5 ad sets total; 10–15 creatives across; isolate clear winners into their own ad set.",
    "3-lane architecture: A) Profile/Reel TOF, B) Story Ads (TOF+MOF), C) Retargeting (BOF).",
    "Audience OS: build IG_Engagers_180; exclude from cold; include only for retargeting.",
    "Placements: Manual — IG Stories + Reels only; multi-advertiser off.",
    "Budgets: $30–$100 per ad set/day (up to $150). Scale horizontally when profile ads flatten > ~$200–$300/day.",
    "Launch checklist: audiences, lanes, placements, 10–15 mixed creatives, budgets, naming, 3–5 day triage.",
    "Weekly tracker schema for decisioning and attribution habits.",
    "Setter ops: qualify in 24h, ≥80% convo-start on qualified, ManyChat for DM keywords, protect call quality.",
    "Troubleshooting matrices for low qualified %, high CPQF, or poor show-ups.",
  ],
  steps: [
    { t: "Create Audience", d: "Build IG_Engagers_180 (everyone who engaged, 180d)." },
    { t: "Set Lanes", d: "A) Profile/Engagement (Broad + Entrepreneurship, exclude IG_Engagers_180). B) Story Ads (Broad + Entrepreneurship exclude; IG retarget include-only). C) Retargeting (IG_Engagers_180 only)." },
    { t: "Lock Placements", d: "Manual → IG Stories + Reels; turn off Advantage placements and multi-advertiser." },
    { t: "Upload Creatives", d: "10–15 assets: F2C pattern-interrupt, carousels, one-pager static, problem→solution, credibility, DM-keyword." },
    { t: "Name & Budget", d: "C_[lane] / AS_[aud]_[geo] / AD_[hook]_v1; $30–$100/ad set/day." },
    { t: "Go Live & Trim", d: "After 3–5 days cut bottom 50% creatives on CPQF/quality; isolate the winner and raise 20–30% every 48–72h." },
    { t: "Run Setters", d: "Tag Qualified daily; outreach within 24h; hold ≥75% show-ups and $80–$100 per qualified call." },
    { t: "Review Weekly", d: "Update tracker; decide Kill / Fix / Scale; add new creatives for horizontal scale." },
  ],
  kpis: [
    "CPV (Cost per Profile Visit) ≤ ~$0.20",
    "Qualified follower ratio ≥ 30% (fix < 20%)",
    "CPQF ≤ $13–$14",
    "New convos started ≥ 80% of qualified follows",
    "Cost per qualified booked call: $80–$100",
    "Show-up rate ≥ 75%",
    "ROAS 8–15× (10× solid)",
  ],
  tools: [
    "IG_Engagers_180 audience (exclude cold / include retarget)",
    "3-lane campaign structure (Profile, Story, Retargeting)",
    "Creative naming: C_[lane] / AS_[aud]_[geo] / AD_[hook]_v1",
    "Launch checklist (placements, budgets, assets)",
    "Weekly metrics schema (spend→ROAS, creative, notes)",
    "Troubleshooting matrix (Low Qualified %, High CPQF, High $/Call or Low Show-ups)",
    "Hooks & CTA swipe (DM keyword, problem→solution, credibility, one-pager structure)",
  ],
  targets: [
    "Creative volume: 10–15 live; rotate weekly",
    "Isolate clear winners; +20–30% budget every 48–72h",
    "Scale horizontally when profile lane > ~$200–$300/day",
    "Maintain Stories + Reels-only placements",
    "Setter SLA: 24h outreach to all Qualified",
  ],
  cta:
    "Open the one-pager, build IG_Engagers_180, spin up the 3 lanes with Stories/Reels-only, upload 10–15 creatives, and launch at $30–$100/ad set/day. After 3–5 days, trim losers, isolate winners, and hand setters a clear SLA. Review the weekly tracker and use the troubleshooting card to decide Kill / Fix / Scale.",
  render: () => <LegacyMount slug="meta-ads-info" />,
};

export default metaAdsInfo;