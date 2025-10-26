import type { OnePager } from "../types/OnePager";
import LegacyMount from "./LegacyMount";

const profileFunnelLegacy: OnePager = {
  key: "profile-funnel",
  question: "What is the Profile Funnel system?",
  hook: "An end-to-end profile funnel that converts views into conversations, calls, and clients.",
  summary:
    "This is a legacy one-pager rendered by its own React component. Open to see the full visual system, swimlanes, assets, automations, and KPIs.",
  bullets: [
    "Traffic → Profile → Nurture/Qualify → DM/Setting → Sales → Onboarding → Fulfillment → Proof → Monetization",
    "Retargeting loops and follow-ups to recover value",
    "Clear roles, ownership, and governance cadence",
  ],
  steps: [
    {
      t: "Open the legacy page",
      d: "Principle: Click Open to view it fully rendered as its own component.",
    },
  ],
  kpis: [
    "CTR",
    "Profile Visits",
    "Book %",
    "Show %",
    "Close %",
    "ASP",
    "TTV",
    "NPS",
  ],
  tools: ["IG/FB/LI", "Meta Ads", "Calendly", "CRM", "GA4"],
  cta: "Use this as the end-to-end operating system for profile-led growth.",
  render: () => <LegacyMount slug="profile-funnel" />,
};

export default profileFunnelLegacy;
