import React, { useMemo } from "react";
import { onePagers } from "@/onepagers";
import CTA from "./CTA";

/**
 * The Business Idea Studio — Repository (Authoritative "The System" voice)
 *
 * This file renders the library through a psychological progression:
 * Self → Identity → Audience → Offer → Systems → Growth → Proof.
 * Each stage uses directive, authoritative copy for a business site.
 */

type Stage = {
  id: string;
  emoji: string;
  title: string;
  blurb: string; // short, directive
  items: string[]; // exact one-pager questions/titles
  focus: string; // what you will train
};

const STAGES: Stage[] = [
  {
    id: "self",
    emoji: "🧭",
    title: "1. Self-Mastery & Execution Discipline",
    blurb:
      "Before you scale mechanisms, stabilize the operator. Master attention, regulate emotion, and remove internal friction.",
    items: [
      "How do I overcome fear of selling, perfectionism, and self-doubt?",
      "How do I manage my time, avoid burnout, and stay productive as a one-person business?",
      "Dailt Grind Personal Operating System",
      "How do I know what parts of my business are working — and what to stop doing?",
    ],
    focus:
      "You will train: emotional regulation, execution rhythm, cognitive clarity, and truthful self-diagnosis.",
  },
  {
    id: "identity",
    emoji: "💡",
    title: "2. Identity Design & Market Perception",
    blurb:
      "Translate your internal clarity into an external identity. Shape the narrative, signal authority, and establish trust.",
    items: [
      "How do I build a personal brand and authority when I’m new or don’t have a big following?",
      "How do we build a brand that reliably changes customer behavior?",
      "How do we design offers and content that align with core human motivation?",
      "How do I stand out so clients choose me over competitors?",
      "What is the Profile Funnel system?",
    ],
    focus:
      "You will train: narrative positioning, authority bias, proof sequencing, identity signaling, and trust mechanics.",
  },
  {
    id: "audience",
    emoji: "🧩",
    title: "3. Audience Insight & Behavioral Diagnosis",
    blurb:
      "Model buyer reality. Map pains, jobs, and biases. Build empathy you can execute on—not fluff.",
    items: [
      "How do I define my target market and generate platform-ready targeting?",
      "How do we consistently find pains and turn them into high-performing content?",
      "How do we build a simple online assessment that reliably generates qualified demand and clear next steps?",
      "Which marketing channels should I use — social, SEO, paid ads, or content?",
      "What channel should I pick if I can only pick one?",
    ],
    focus:
      "You will train: psychographic targeting, bias recognition, behavior modeling, and practical research loops.",
  },
  {
    id: "offer",
    emoji: "🧠",
    title: "4. Offer Psychology & Decision Architecture",
    blurb:
      "Engineer the choice. Package value, frame risk, and remove friction so the default outcome is ‘yes’.",
    items: [
      "How do I create an irresistible offer that people will buy?",
      "What’s the simplest way to validate an offer in 7 days?",
      "What should we charge (floor/target/anchor) given COGS, capacity, and risk?",
      "How do I price my services or products effectively (not too cheap, not too expensive)?",
      "How do you model ad spend, CAC, ASP and close rate?",
      "How do we handle objections and convert more qualified prospects?",
    ],
    focus:
      "You will train: value perception, anchoring, loss aversion, objection handling, and pricing under constraints.",
  },
  {
    id: "systems",
    emoji: "⚙️",
    title: "5. Systems Thinking & Repeatable Throughput",
    blurb:
      "Convert persuasion into process. Build pipelines, eliminate decision fatigue, and automate consistency.",
    items: [
      "How do I run a full Market → Lead Gen → Nurture → Conversion pipeline?",
      "How do I turn views into booked calls?",
      "How do I turn my traffic and content into paying customers?",
      "How do I quickly fix bottlenecks across my funnel?",
      "How do I automate my business so I’m not trading time for money?",
      "How do I document repeatable processes so I can deliver consistently at scale?",
      "How do I turn my expertise into a standardized, scalable service?",
      "How do I start a business in 90 days?",
      "Client Onboarding Process",
      "How should each role operate to drive a nurture-first client pipeline?",
      "How can a solo founder ideate, validate, build, launch, and scale a digital product with a practical, end-to-end SOP?",
    ],
    focus:
      "You will train: constraint diagnosis, SOP design, pipeline math, and habit-driven execution.",
  },
  {
    id: "growth",
    emoji: "📈",
    title: "6. Growth Loops, Leverage & Team Cognition",
    blurb:
      "Scale behavior, not chaos. Build loops, add leverage, and align incentives so wins compound.",
    items: [
      "How can I monetize my brand through performance-based partnerships?",
      "How do we engineer referrals and reviews to lower CAC and raise trust?",
      "How do we plan, test, and iterate creatives across paid and organic?",
      "How do we launch, test, and scale Meta profile/story ads that turn into qualified conversations?",
      "How can I browse and open all one-pagers in a single place?",
      "Which AI tools actually work for business — and how do I integrate them?",
      "When should I hire help or delegate tasks — and what should I outsource first?",
      "How do we hire, ramp, and plan capacity without fire drills?",
      "What are the 4 types of leverage?",
      "How do we scale brands with UGC and AI-managed affiliate engines without paid ads?",
      "How do we scale horizontally, scale vertically, and structure money models?",
      "The 10k in 6 weeks challenge blueprint",
    ],
    focus:
      "You will train: social reinforcement, incentive design, operational leverage, and portfolio thinking.",
  },
  {
    id: "proof",
    emoji: "🧾",
    title: "7. Proof, Legitimacy & Market Signaling",
    blurb:
      "Close the credibility loop. Show evidence, reduce perceived risk, and formalize authority.",
    items: [
      "Clear Tap CPT Business Overview",
      "Clear Tap Cpt: Premium whole-home water filtration install; request a quote",
      "DACH 2025 Full Legal Brief",
      "DACH Business Plan Documents",
      "DACH Ops Vertical Scale Business",
      "How can German solo/micro-SMEs scale with South African talent while managing AÜG, PE risk, GDPR, and SA payroll/FX rules?",
      "Tokanized loyalty for local brands",
      "Schengen Visa Pack ZA",
    ],
    focus:
      "You will train: proof stacking, legal/operational legitimacy, and high-signal market assets.",
  },
];

// Build a quick lookup from question/title → key
function useQuestionToKeyMap() {
  return useMemo(() => {
    const map = new Map<string, string>();
    Object.values(onePagers).forEach((p: any) => {
      if (p?.question && p?.key) map.set(String(p.question), String(p.key));
    });
    return map;
  }, []);
}

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
        <h2 className="text-3xl font-black">The Business Idea Studio Repository</h2>
        <p className="mt-2 text-sm opacity-85">
          This is <strong>The System</strong>: a deliberate sequence of{" "}
          <strong>Founder Psychology → Business Mechanics</strong>. Move through the stages in order.
          Each module resolves a specific behavioral bottleneck and installs a business capability.
        </p>
      </div>

      {/* Stages */}
      <div className="space-y-10">
        {STAGES.map((stage, idx) => (
          <div key={stage.id} id={stage.id} className="space-y-4">
            {/* Divider */}
            {idx > 0 && <div className="h-px w-full bg-gray-200" aria-hidden />}

            {/* Stage header */}
            <div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <span className="text-xl">{stage.emoji}</span>
                <span>{stage.title}</span>
              </div>
              {stage.blurb && (
                <p className="mt-1 text-sm opacity-80">{stage.blurb}</p>
              )}
            </div>

            {/* Items */}
            <ul className="grid grid-cols-1 gap-3">
              {stage.items.map((title) => {
                const key = q2k.get(title);
                const found = Boolean(key);
                return (
                  <li key={title} className="rounded-xl border bg-white/90">
                    <details className="group rounded-xl open:bg-white">
                      <summary className="cursor-pointer px-4 py-3 text-base font-semibold flex items-center justify-between">
                        <span className="pr-4">{title}</span>
                        <span className="opacity-60 group-open:rotate-90 transition-transform">›</span>
                      </summary>
                      <div className="px-4 pb-4 text-sm leading-6 opacity-90">
                        {found ? (
                          <CTA
                            href={`#/p/${key}`}
                            onClick={(evt) => {
                              evt.preventDefault();
                              onOpenPager(key!);
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

            {/* Focus */}
            <p className="text-xs opacity-70">{stage.focus}</p>
          </div>
        ))}

        {/* Divider */}
        <div className="h-px w-full bg-gray-200" aria-hidden />

        {/* Summary */}
        <div>
          <h3 className="text-xl font-bold">🧠 The Psychological Arc (Operating Order)</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-3 py-2 border">Phase</th>
                  <th className="px-3 py-2 border">Core Psychology</th>
                  <th className="px-3 py-2 border">Business Capability Installed</th>
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

          <p className="mt-6 text-sm opacity-85">
            This isn’t a document dump. It’s a sequenced curriculum for the entrepreneurial brain—over{" "}
            <strong>60 discrete mental models</strong>, each mapped to a real constraint and its fix.
          </p>
        </div>
      </div>
    </section>
  );
}