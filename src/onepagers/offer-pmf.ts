// src/onepagers/offer-pmf.ts
import type { OnePager } from "@/types/OnePager";

const pager: OnePager = {
  key: "offer-pmf",
  question: "How do I create an irresistible offer that people will buy?",
  hook:
    "Prove demand first, then package a specific outcome with a believable mechanism, de-risked by proof and guarantees.",
  summary:
    "This is a product–market fit question — aligning a painful problem with a compelling promise. The aim is to engineer a clear, de-risked offer that people want now and can say yes to quickly.",

  // Implied Goals
  bullets: [
    "Clarity: One painful problem → one specific outcome → one mechanism.",
    "Demand: Evidence people already want this (searches, spend, alternatives).",
    "Confidence: Proof, pricing logic, and risk reversal that reduce hesitation.",
  ],

  // The Answer → three synchronized parts
  steps: [
    {
      t: "🔎 1) Customer Proof Mining (Pain → Promise)",
      d: [
        "Principle: The market writes the offer; you assemble it.",
        "Core Idea: Extract exact words, outcomes, and buying triggers from real prospects.",
        "Key Levers: Jobs-to-be-Done Interviews — ask “When did you last try solving this? What broke? What would ‘done’ look like in 30 days?”. Competitor Teardown — identify common promises, price anchors, guarantees, and gaps you can own. Willingness-to-Pay Signals — existing spend, tools they already buy, time lost, urgent deadlines. Problem Math — quantify pain (hours wasted, revenue left, risk exposure) → informs ROI story.",
        "Takeaway: Offers convert when they mirror the market’s own words and math.",
      ].join(" "),
    },
    {
      t: "🧱 2) Offer Architecture (Promise → Package)",
      d: [
        "Principle: An irresistible offer = Outcome (what) × Mechanism (how) × Evidence (why believe) − Risk (what if).",
        "Core Idea: Package a single transformation with a clear path, price logic, and risk reversal.",
        "Key Levers: Outcome Statement — “We help [ICP] go from [pain] to [specific result + timeline] using [mechanism].”. Mechanism & Deliverables — name your method (framework/tech/process) and list what’s included (calls, assets, dashboards, automations). Price Logic — anchor to value math (e.g., 10% of monthly outcome; or 1–3× current wasted spend). Offer 1–3 tiers: Core / Pro / Done-For-You. Bonuses (Friction Killers) — templates, SOPs, audits, onboarding call, priority chat. Proof & Guarantees — case metrics, demos, screenshots, third-party reviews. Risk reversal: “Diagnostic first,” “Milestone guarantee,” or “Credit toward DFY.” Urgency/Ease — limited cohort seats, start date, or fast-start implementation in 7 days.",
        "Takeaway: Make saying “yes” safer than staying stuck.",
      ].join(" "),
    },
    {
      t: "🧪 3) Validation Loops (Belief → Buy)",
      d: [
        "Principle: Sell it small before you build it big.",
        "Core Idea: Run rapid tests that prove people will book/pay at your target price.",
        "Key Levers: Smoke Test — landing page with outcome + mechanism + price range → collect payments/deposits or book calls. Pilot Cohort / Beta (5–10 buyers) — deliver manually, track outcomes, refine scope and timeline. Pricing Staircase — close the first 3–5 at entry price, then raise 20–30% once outcomes are proven. Objection Ledger — log every objection → add FAQ, bonus, or process change to neutralize it. PMF Indicator — 30–40% close rate on qualified calls, 60%+ completion of onboarding steps, referrals from early customers.",
        "Takeaway: PMF is measured by money, outcomes, and referrals — not opinions.",
      ].join(" "),
    },
  ],

  cta:
    "A compelling offer is designed, not discovered: mine real demand, package a named mechanism that delivers a specific transformation, and de-risk the purchase with proof and guarantees. Do that, and PMF shows up as paid pilots and repeatable wins.",
};

export default pager;