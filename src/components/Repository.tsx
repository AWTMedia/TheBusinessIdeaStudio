import React, { useMemo } from "react";
import CTA from "./CTA";
import { onePagers } from "@/onepagers";

/* --------------------------- TYPES --------------------------- */

type ModuleItem = { title: string; slug?: string };
type Subsection = { title: string; modules: ModuleItem[] };

type Stage = {
  id: string;
  emoji: string;
  title: string;
  blurb: string;
  faqs: string[];
  modules: ModuleItem[];
  subsections?: Subsection[];
  focus: string;
};

/* --------------------------- DATA --------------------------- */

const STAGES: Stage[] = [
  {
    id: "self",
    emoji: "🧭",
    title: "1) Self-Mastery",
    blurb:
      "Before you scale mechanisms, stabilize the operator. Master attention, regulate emotion, and remove internal friction.",
    faqs: [
      "How do I overcome fear of selling, perfectionism, and self-doubt?",
      "How do I manage my time, avoid burnout, and stay productive as a one-person business?",
      "Daily Grind Personal Operating System",
      "How do I know what parts of my business are working — and what to stop doing?",
    ],
    modules: [
      { title: "Monk Mode → Execution Protocol", slug: "monk-mode" },
      { title: "Distraction-less = Focused", slug: "focus-protocol" },
      { title: "Routine", slug: "daily-routine" },
      { title: "Mental Energy Systems", slug: "mental-energy-systems" },
      { title: "Limiting Beliefs → Reframes", slug: "belief-reframes" },
      { title: "Kaizen & Iteration Cycles", slug: "kaizen-iteration" },
      { title: "Learning Techniques (Meta-learning)", slug: "meta-learning" },
      { title: "Mastery Checklist", slug: "mastery-checklist" },
      { title: "The Scientific Method (for builders)", slug: "scientific-method-for-builders" },
      { title: "Abundance / Long-Term Perspective", slug: "long-term-stance" },
    ],
    focus:
      "You will train: emotional regulation, execution rhythm, cognitive clarity, and truthful self-diagnosis.",
  },
  {
    id: "identity",
    emoji: "💡",
    title: "2) Identity & Brand Perception",
    blurb:
      "Translate your internal clarity into an external identity. Shape the narrative, signal authority, and establish trust.",
    faqs: [
      "How do I build a personal brand and authority when I’m new or don’t have a big following?",
      "How do we build a brand that reliably changes customer behavior?",
      "How do we design offers and content that align with core human motivation?",
      "How do I stand out so clients choose me over competitors?",
      "What is the Profile Funnel system?",
    ],
    modules: [
      { title: "Niche & Keyword — AWT Media Brand", slug: "brand-keywords" },
      { title: "Brand Foundation Framework", slug: "brand-foundations" },
      { title: "Brand Positioning & Pillars", slug: "brand-pillars" },
      { title: "Thought Leadership Process", slug: "thought-leadership-system" },
      { title: "Elevator Pitch Framework", slug: "elevator-pitch" },
      { title: "The Business Art Studio", slug: "business-art-studio" },
      { title: "My War Strategy (Competitive Theory of War)", slug: "competitive-theory-of-war" },
      { title: "Operating Principles: Natural Law / Stoicism", slug: "operating-principles" },
    ],
    focus:
      "You will train: narrative positioning, authority bias, proof sequencing, identity signaling, and trust mechanics.",
  },
  {
    id: "audience",
    emoji: "🧩",
    title: "3) Audience Empathy",
    blurb:
      "Model buyer reality. Map pains, jobs, and biases. Build empathy you can execute on—not fluff.",
    faqs: [
      "How do I define my target market and generate platform-ready targeting?",
      "How do we consistently find pains and turn them into high-performing content?",
      "How do we build a simple online assessment that reliably generates qualified demand and clear next steps?",
      "Which marketing channels should I use — social, SEO, paid ads, or content?",
      "What channel should I pick if I can only pick one?",
    ],
    modules: [
      { title: "Full Market Research System", slug: "market-research-system" },
      { title: "Ideal Avatar (Brick & Mortar)", slug: "ideal-avatar-bm" },
      { title: "300+ High-Income Target Clients Blueprint", slug: "high-income-icp" },
      { title: "100 Common Client Goals", slug: "client-goals" },
      { title: "Skill–Market–Problem–Solution Statements", slug: "smps-statements" },
      { title: "Lead Scraping (Ethical)", slug: "lead-scraping-playbook" },
    ],
    focus:
      "You will train: psychographic targeting, bias recognition, behavior modeling, and practical research loops.",
  },
  {
    id: "offer",
    emoji: "🧠",
    title: "4) Offer Psychology",
    blurb:
      "Engineer the choice. Package value, frame risk, and remove friction so the default outcome is “yes”.",
    faqs: [
      "How do I create an irresistible offer that people will buy?",
      "What’s the simplest way to validate an offer in 7 days?",
      "What should we charge (floor/target/anchor) given COGS, capacity, and risk?",
      "How do you model ad spend, CAC, ASP and close rate?",
      "How do we handle objections and convert more qualified prospects?",
    ],
    modules: [
      { title: "Offers: The Value Equation", slug: "value-equation" },
      { title: "50+ Proven Offer Formats", slug: "offer-format-library" },
      { title: "Value Ladder Framework (+ examples)", slug: "value-ladder" },
      { title: "Pricing Scripts & Anchoring", slug: "pricing-anchors" },
      { title: "Productizing a Skill → Service", slug: "productize-skill" },
      { title: "Skill → Profit Gameplan", slug: "skill-to-profit" },
      { title: "Dream Outcome + Hassle: Time (8.60)", slug: "offer-friction-matrix" },
      { title: "4 Types of Leverage", slug: "leverage-four-types" },
      { title: "150+ Common Objections & Handling", slug: "objection-handling" },
    ],
    focus:
      "You will train: value perception, anchoring, loss aversion, objection handling, and pricing under constraints.",
  },
  {
    id: "systems",
    emoji: "⚙️",
    title: "5) Systems Thinking",
    blurb:
      "Convert persuasion into process. Build pipelines, eliminate decision fatigue, and automate consistency.",
    faqs: [
      "How do I run a full Market → Lead Gen → Nurture → Conversion pipeline?",
      "How do I turn views into booked calls?",
      "How do I turn my traffic and content into paying customers?",
      "How do I quickly fix bottlenecks across my funnel?",
      "How do I automate so I’m not trading time for money?",
      "How do I document processes to deliver consistently at scale?",
      "How do I turn my expertise into a standardized, scalable service?",
      "How do I start a business in 90 days?",
      "Client Onboarding Process",
      "How should each role operate to drive a nurture-first client pipeline?",
    ],
    modules: [
      { title: "Planning System", slug: "planning-system" },
      { title: "Content Production System Framework", slug: "content-system" },
      { title: "Posting Calendar SOP", slug: "posting-calendar" },
      { title: "Engagement Tracker SOP", slug: "engagement-tracker" },
      { title: "Research Hub SOP", slug: "research-hub" },
      { title: "Script Archive SOP", slug: "script-archive" },
      { title: "Editor Brief (Short)", slug: "editor-brief" },
      { title: "Weekly KPI Tracker (Brand Games)", slug: "weekly-kpis" },
      { title: "AWT Media Processes", slug: "awt-processes" },
      { title: "Full-Stack Marketing Process", slug: "full-stack-marketing" },
      { title: "Team Directory & Roles (RACI + rituals)", slug: "team-directory-roles" },
      { title: "Action Priority Matrix", slug: "action-priority-matrix" },
    ],
    subsections: [
      {
        title: "Product & Digital Delivery",
        modules: [
          { title: "Digital Product Creation & GTM — Step-by-Step SOP", slug: "digital-product-sop" },
          { title: "Digital Product Creation & GTM — Master Template", slug: "digital-product-template" },
          { title: "Leverage Map Builder", slug: "leverage-map" },
        ],
      },
    ],
    focus:
      "You will train: constraint diagnosis, SOP design, pipeline math, and habit-driven execution.",
  },
  {
    id: "growth",
    emoji: "📈",
    title: "6) Behavioral Scaling",
    blurb:
      "Scale behavior, not chaos. Build loops, add leverage, and align incentives so wins compound.",
    faqs: [
      "How can I monetize my brand via performance-based partnerships?",
      "How do we engineer referrals/reviews to lower CAC and raise trust?",
      "How do we plan, test, and iterate creatives across paid and organic?",
      "How do we launch, test, and scale Meta profile/story ads into qualified conversations?",
      "Which AI tools actually work—and how do I integrate them?",
      "When should I hire help or delegate—and what first?",
      "How do we hire, ramp, and plan capacity without fire drills?",
      "What are the 4 types of leverage?",
      "How do we scale with UGC and affiliate engines without paid ads?",
      "How do we scale horizontally/vertically and structure money models?",
      "The 10k in 6 weeks challenge blueprint",
    ],
    modules: [
      { title: "Omnipresence Marketing — What, brands & tips", slug: "omnipresence" },
      { title: "60+ GTM Strategies", slug: "gtm-strategies" },
      { title: "100+ Lead Flow Opportunities", slug: "lead-flow-opportunities" },
      { title: "Instagram Organic Inbound Funnel", slug: "ig-inbound" },
      { title: "Master Logical Upsell Journey Map", slug: "upsell-journey" },
      { title: "Thought Leadership Distribution", slug: "tl-distribution" },
      { title: "To-Market Plan Framework", slug: "go-to-market-plan" },
      { title: "Brand Games Methodology", slug: "brand-games-method" },
      { title: "Brand Games — How To", slug: "brand-games-howto" },
      { title: "SquadStart — Team-First Founder Engine", slug: "squadstart" },
    ],
    subsections: [
      {
        title: "UGC Suite",
        modules: [
          { title: "UGC Brands — Blueprint", slug: "ugc-blueprint" },
          { title: "UGC Brands — Processes", slug: "ugc-processes" },
          { title: "UGC Growth Money Models", slug: "ugc-economics" },
          { title: "User-Generated Content Brands (Overview)", slug: "ugc-overview" },
        ],
      },
    ],
    focus:
      "You will train: social reinforcement, incentive design, operational leverage, and portfolio thinking.",
  },
  {
    id: "proof",
    emoji: "🧾",
    title: "7) Proof & Legitimacy",
    blurb:
      "Close the credibility loop. Show evidence, reduce perceived risk, and formalize authority.",
    faqs: [],
    modules: [
      { title: "Free Analytics Report Template", slug: "analytics-report-template" },
      { title: "Demo / Discovery SOP", slug: "demo-call" },
      { title: "Sales Call SOP", slug: "sales-call" },
    ],
    subsections: [
      {
        title: "Case Study Library (each a one-pager)",
        modules: [
          { title: "Maya — Side Skill → Offer", slug: "cs-maya-side-skill" },
          { title: "Darius — Engagement Breakthrough", slug: "cs-darius-engagement" },
          { title: "Kyle — Outcomes over “Content Help”", slug: "cs-kyle-outcomes" },
          { title: "Eliza — Systemized Service", slug: "cs-eliza-systemized" },
          { title: "Omar — Anchoring to Revenue", slug: "cs-omar-anchoring" },
          { title: "Jamie — Delivery Time Halved", slug: "cs-jamie-delivery-time" },
          { title: "Jess — Discovery Close-Rate Up", slug: "cs-jess-conversions" },
          { title: "Kayla — Pathway to Consistent Clients", slug: "cs-kayla-pathway" },
        ],
      },
      {
        title: "Ops/Legal Proof Assets (examples)",
        modules: [
          { title: "Clear Tap CPT — Business Overview" },
          { title: "Clear Tap CPT — Premium whole-home water filtration (Request a Quote)" },
          { title: "DACH 2025 — Full Legal Brief" },
          { title: "DACH — Business Plan Documents" },
          { title: "DACH — Ops: Vertical Scale Business" },
          { title: "How German solo/micro-SMEs scale with South African talent…" },
          { title: "Tokenized loyalty for local brands" },
          { title: "Schengen Visa Pack ZA" },
        ],
      },
    ],
    focus:
      "You will train: proof stacking, legal/operational legitimacy, and high-signal market assets.",
  },
];

/* ------------------------ HELPERS ------------------------ */

// Normalize punctuation/whitespace so FAQ text matches onePagers.questions
function norm(s: string) {
  return s
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// Explicit aliases: FAQ text → slug (for existing pages whose question text differs)
const RAW_ALIAS_ENTRIES: Array<[string, string]> = [
  // Stage 1 — Self-Mastery
  ["Daily Grind Personal Operating System", "daily-grind-operating-system"],

  // Stage 5 — Systems Thinking
  ["How do I automate so I’m not trading time for money?", "systems-engine"],
  ["How do I document processes to deliver consistently at scale?", "process-os"],

  // Stage 6 — Behavioral Scaling
  ["How can I monetize my brand via performance-based partnerships?", "personal-brand-affiliate-model"],
  ["How do we engineer referrals/reviews to lower CAC and raise trust?", "referral-reviews-os"],
  ["How do we launch, test, and scale Meta profile/story ads into qualified conversations?", "meta-ads-info"],
  ["Which AI tools actually work—and how do I integrate them?", "ai-tooling"],
  ["When should I hire help or delegate—and what first?", "delegation-engine"],
  ["How do we hire, ramp, and plan capacity without fire drills?", "hiring-capacity-os"],
  ["How do we scale with UGC and affiliate engines without paid ads?", "ugc-brands-growth-money-models"],
  ["How do we scale horizontally/vertically and structure money models?", "vertical-horizontal-scale-money-models"],
];

const FAQ_ALIAS_TO_SLUG: Record<string, string> = Object.fromEntries(
  RAW_ALIAS_ENTRIES.map(([q, slug]) => [norm(q), slug])
);

// Map normalized question -> key so FAQs can open local pages if present
function useQuestionToKeyMap() {
  return useMemo(() => {
    const map = new Map<string, string>();
    Object.values(onePagers).forEach((p: any) => {
      if (p?.question && p?.key) map.set(norm(String(p.question)), String(p.key));
      // Also index by explicit title for MDX pages
      if ((p as any).title && p.key) map.set(norm(String((p as any).title)), String(p.key));
    });
    return map;
  }, []);
}

/**
 * ModuleLink
 * - If a slug exists **and** a local page is registered, open the local page.
 * - Otherwise, show a “Coming soon” chip. No external fallbacks.
 */
function ModuleLink({
  item,
  onOpenPager,
}: {
  item: ModuleItem;
  onOpenPager: (k: string) => void;
}) {
  const k = item.slug?.trim();
  const hasLocal = !!(k && onePagers[k]);

  if (hasLocal) {
    return (
      <a
        href={`#/p/${k}`}
        onClick={(e) => {
          e.preventDefault();
          onOpenPager(k!);
        }}
        className="underline"
      >
        {item.title}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span>{item.title}</span>
      <span className="inline-flex items-center rounded-lg border px-2 py-0.5 text-[11px] opacity-70">
        Coming soon
      </span>
    </span>
  );
}

/* --------------------------- VIEW --------------------------- */

export default function Repository({
  onOpenPager,
}: {
  onOpenPager: (k: string) => void;
}) {
  const q2k = useQuestionToKeyMap();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-black">
          The Business Ideas Studio – Open Library
        </h2>
        <p className="mt-2 text-sm opacity-85">
          <strong>This is The System</strong>: a deliberate sequence of{" "}
          <em>Founder Psychology → Business Mechanics</em>. Move through the
          stages in order. Each module resolves a specific behavioral bottleneck
          and installs a business capability.
        </p>
      </div>

      {/* Stages */}
      <div className="space-y-10">
        {STAGES.map((stage, idx) => (
          <div key={stage.id} id={stage.id}>
            {/* Divider */}
            {idx > 0 && <div className="h-px w-full bg-gray-200 mb-6" />}

            {/* Stage header */}
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className="text-xl">{stage.emoji}</span>
              <span>{stage.title}</span>
            </div>
            <p className="mt-1 text-sm opacity-80">{stage.blurb}</p>

            {/* FAQs — white row card UI */}
            {stage.faqs.length > 0 && (
              <>
                <h4 className="mt-4 font-semibold">FAQs</h4>
                <ul className="mt-2 grid grid-cols-1 gap-3">
                  {stage.faqs.map((q) => {
                    const nq = norm(q);
                    const keyOrSlug = q2k.get(nq) || FAQ_ALIAS_TO_SLUG[nq];
                    const found = Boolean(keyOrSlug);
                    return (
                      <li
                        key={q}
                        className="rounded-xl border bg-white/90 shadow-sm"
                      >
                        <details className="group rounded-xl open:bg-white">
                          <summary className="cursor-pointer px-4 py-3 text-base font-semibold flex items-center justify-between">
                            <span className="pr-4">{q}</span>
                            <span className="opacity-60 group-open:rotate-90 transition-transform">
                              ›
                            </span>
                          </summary>
                          <div className="px-4 pb-4 text-sm leading-6 opacity-90">
                            {found ? (
                              <CTA
                                href={`#/p/${keyOrSlug}`}
                                onClick={(evt) => {
                                  evt.preventDefault();
                                  onOpenPager(keyOrSlug!);
                                }}
                              >
                                Open →
                              </CTA>
                            ) : (
                              <span className="inline-flex items-center rounded-lg border px-3 py-1 text-xs opacity-70">
                                Coming soon
                              </span>
                            )}
                          </div>
                        </details>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* Modules */}
            {stage.modules.length > 0 && (
              <>
                <h4 className="mt-5 font-semibold">Modules</h4>
                <ul className="mt-2 space-y-1">
                  {stage.modules.map((m) => (
                    <li key={m.title} className="flex items-start gap-2">
                      <span>•</span>
                      <ModuleLink item={m} onOpenPager={onOpenPager} />
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Optional subsections */}
            {stage.subsections?.map((sub) => (
              <div key={sub.title} className="mt-5">
                <h5 className="font-semibold">{sub.title}</h5>
                <ul className="mt-2 space-y-1">
                  {sub.modules.map((m) => (
                    <li key={m.title} className="flex items-start gap-2">
                      <span>•</span>
                      <ModuleLink item={m} onOpenPager={onOpenPager} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Focus tagline */}
            <p className="mt-4 text-xs opacity-70 italic">{stage.focus}</p>
          </div>
        ))}

        <div className="h-px w-full bg-gray-200 my-6" />

        {/* Psychological Arc */}
        <div>
          <h3 className="text-xl font-bold">
            🧠 The Psychological Arc (Operating Order)
          </h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-3 py-2 border">Phase</th>
                  <th className="px-3 py-2 border">Core Psychology</th>
                  <th className="px-3 py-2 border">
                    Business Capability Installed
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Emotional regulation & clarity", "Founder operating system"],
                  ["2", "Identity & social perception", "Brand that commands attention"],
                  ["3", "Empathy & behavior insight", "True market understanding"],
                  ["4", "Cognitive bias & framing", "Offers that convert by design"],
                  ["5", "Cognitive economy & SOPs", "Reliable throughput and quality"],
                  ["6", "Behavioral feedback & leverage", "Compounding growth loops"],
                  ["7", "Authority signaling & proof", "Credibility that accelerates sales"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-3 py-2 border">{row[0]}</td>
                    <td className="px-3 py-2 border">{row[1]}</td>
                    <td className="px-3 py-2 border">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <blockquote className="mt-6 text-sm opacity-85 border-l-4 pl-3">
            This isn’t a document dump. It’s a sequenced curriculum for the
            entrepreneurial brain—60+ discrete mental models, each mapped to a
            real constraint
            <br />
            <strong>and</strong>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
