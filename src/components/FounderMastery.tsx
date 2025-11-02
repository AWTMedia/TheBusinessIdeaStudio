// src/components/FounderMastery.tsx
import React from "react";
import CTA from "./CTA";

const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

/* ───────────────────────────
   Small pill badge (dark mode)
   ─────────────────────────── */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-[3px] text-[11px] font-semibold leading-none"
      style={{
        background: "rgba(0,0,0,.6)",
        border: "1px solid rgba(255,255,255,.2)",
        color: "#fff",
      }}
    >
      {children}
    </span>
  );
}

/* ───────────────────────────
   Light Card Shell
   ─────────────────────────── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/90 backdrop-blur p-5 md:p-6 shadow-sm ${className}`}
      style={{ borderColor: C.gray }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────
   Sub-card for each lesson (1–5 under a stage)
   ─────────────────────────── */
function LessonItem({
  idx,
  title,
  why,
}: {
  idx: number;
  title: string;
  why: string;
}) {
  return (
    <li
      className="rounded-xl border bg-white p-4 hover:shadow-md transition"
      style={{ borderColor: C.gray }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-[12px] text-white leading-none"
          style={{ background: C.blue }}
        >
          {String(idx + 1).padStart(2, "0")}
        </div>
        <div className="flex-1">
          <div
            className="text-[14px] font-semibold leading-snug"
            style={{ color: C.ink }}
          >
            {title}
          </div>
          <div className="mt-1 text-[13px] leading-relaxed opacity-90">
            {why}
          </div>
        </div>
      </div>
    </li>
  );
}

/* ───────────────────────────
   Stage block (1–7)
   ─────────────────────────── */
function StageBlock({
  idx,
  headline,
  transformation,
  because,
  lessons,
  outcome,
}: {
  idx: number;
  headline: string;
  transformation: string;
  because: string;
  lessons: { t: string; w: string }[];
  outcome: string;
}) {
  return (
    <Card className="space-y-4">
      {/* Stage header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-widest opacity-60">
            {`Stage ${idx} · Core Shift`}
          </div>
          <h2
            className="text-lg font-bold leading-snug"
            style={{ color: C.ink }}
          >
            {headline}
          </h2>

          <div className="mt-2 text-[13px] leading-relaxed opacity-90">
            <div>
              <strong>Transformation:</strong> {transformation}
            </div>
            <div className="mt-1">
              <strong>Because:</strong> {because}
            </div>
          </div>
        </div>

        <div className="md:text-right text-[13px] leading-relaxed opacity-80 shrink-0">
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex flex-wrap gap-2">
              <Pill>Internal control</Pill>
              <Pill>Compounding identity</Pill>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons list */}
      <ol className="space-y-3">
        {lessons.map((L, i) => (
          <LessonItem key={i} idx={i} title={L.t} why={L.w} />
        ))}
      </ol>

      {/* Outcome footer row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t"
        style={{ borderColor: C.gray }}
      >
        <div className="text-[12px] leading-relaxed opacity-80">
          <strong>🧩 Outcome:</strong> {outcome}
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span
            className="rounded-full border px-2.5 py-[3px] bg-white leading-none font-medium"
            style={{ borderColor: C.gray }}
          >
            Alignment
          </span>
          <span
            className="rounded-full border px-2.5 py-[3px] bg-white leading-none font-medium"
            style={{ borderColor: C.gray }}
          >
            Stability
          </span>
          <span
            className="rounded-full border px-2.5 py-[3px] bg-white leading-none font-medium"
            style={{ borderColor: C.gray }}
          >
            Momentum
          </span>
        </div>
      </div>
    </Card>
  );
}

/* ───────────────────────────
   Flow of Transformation (table)
   ─────────────────────────── */
function FlowOfTransformation() {
  return (
    <Card>
      <div className="text-[11px] uppercase tracking-widest opacity-60">
        🧭 The Flow of Transformation
      </div>
      <h2
        className="text-lg font-bold leading-snug mt-1"
        style={{ color: C.ink }}
      >
        The path from chaos → clarity → influence → proof
      </h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-[13px] leading-relaxed">
          <thead>
            <tr className="text-[11px] uppercase tracking-widest opacity-60">
              <th className="py-2 pr-4 whitespace-nowrap font-medium">
                Stage
              </th>
              <th className="py-2 pr-4 whitespace-nowrap font-medium">
                Core Shift
              </th>
              <th className="py-2 pr-4 whitespace-nowrap font-medium">
                What You Gain
              </th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                1
              </td>
              <td className="py-2 pr-4 text-[13px]">Chaos → Clarity</td>
              <td className="py-2 pr-4 text-[13px]">
                Focus and emotional control
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                2
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Confusion → Conviction
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Clear identity and confidence
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                3
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Self-Focus → Resonance
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Deep understanding of others
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                4
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Logic → Persuasion
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Offers that emotionally connect
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                5
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Reaction → Rhythm
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Systems and daily consistency
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                6
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Effort → Leverage
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Freedom through smarter scaling
              </td>
            </tr>
            <tr className="border-t" style={{ borderColor: C.gray }}>
              <td className="py-2 pr-4 whitespace-nowrap text-[13px]">
                7
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Proving → Becoming
              </td>
              <td className="py-2 pr-4 text-[13px]">
                Authority, peace, and lasting impact
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[12px] leading-relaxed opacity-80">
        You’re not “working on mindset.” You’re installing cognitive systems,
        rituals, and identity structures that make output inevitable.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] leading-none font-medium">
        <Pill>Clarity</Pill>
        <Pill>Identity</Pill>
        <Pill>Demand</Pill>
        <Pill>Offer</Pill>
        <Pill>Cadence</Pill>
        <Pill>Leverage</Pill>
        <Pill>Authority</Pill>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[13px] leading-relaxed opacity-90">
          We'll map these 7 stages to actual weekly systems, scorecards, and
          measurable KPIs in your operating rhythm.
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <CTA href="#/repo" variant="ghost">
            Open Library
          </CTA>
          <CTA href="#/book-a-call" variant="lime">
            Book a Call
          </CTA>
        </div>
      </div>
    </Card>
  );
}

/* ───────────────────────────
   Page Component
   ─────────────────────────── */

export default function FounderMastery() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      {/* Top bar / nav */}
      <div className="flex items-center justify-between">
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: C.blue }}
        >
          ← Home
        </a>
        <div className="text-[11px] opacity-70 text-right leading-tight">
          Founder Psychology
        </div>
      </div>

      {/* HERO */}
      <div
        className="mt-4 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
          color: "#fff",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-widest opacity-80">
              Founder Psychology → Behavioral Operating System
            </div>

            <h1 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight">
              The 7 Stages of Becoming a Business Typhoon
            </h1>

            <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed opacity-95">
              (with the psychology behind each lesson)  
              Each stage removes a bottleneck: attention → identity → empathy →
              persuasion → rhythm → leverage → embodied authority.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] leading-none font-semibold">
              <Pill>Focus</Pill>
              <Pill>Identity</Pill>
              <Pill>Demand</Pill>
              <Pill>Proof</Pill>
            </div>
          </div>

          <div className="md:text-right text-[13px] leading-relaxed opacity-80 shrink-0 space-y-3">
            <div>
              <div className="font-semibold text-white/90">
                What this actually does
              </div>
              <div className="mt-1 text-white/70">
                • Control mind & state  
                <br />
                • Build identity people trust  
                <br />
                • Turn empathy into demand  
                <br />
                • Hold authority without noise
              </div>
            </div>

            <div className="pt-2">
              <CTA href="#/book-a-call" variant="lime">
                Get a 48–72h plan →
              </CTA>
            </div>
          </div>
        </div>
      </div>

      {/* STAGES */}
      <div className="mt-6 md:mt-8 space-y-6 md:space-y-7">
        <StageBlock
          idx={1}
          headline="From Chaos to Clarity"
          transformation="You’ll take back control of your thoughts, focus, and emotions. You’ll stop reacting and start choosing how you work."
          because="If your mind isn’t calm and clear, no system or plan will last."
          lessons={[
            {
              t: "Focus Training — Learn how to stay focused even when distracted.",
              w: "Focus is the foundation of performance. Without attention control, your brain can’t complete long-term goals.",
            },
            {
              t: "Self-Trust Builder — Keep promises to yourself so your word means something.",
              w: "Confidence starts with reliability. Each small kept promise rebuilds belief in your ability to execute.",
            },
            {
              t: "Emotional Reset — Handle stress and fear without losing momentum.",
              w: "Calm under pressure is a trained response. This rewires your nervous system to stay composed during chaos.",
            },
            {
              t: "Belief Check — Find and replace thoughts that hold you back.",
              w: "Thoughts shape action. Identifying limiting beliefs removes hidden brakes on your growth.",
            },
            {
              t: "Discipline System — Build habits that keep going when motivation fades.",
              w: "Discipline is emotion-proof consistency — it anchors the whole operating system.",
            },
          ]}
          outcome="Clear thinking, steady energy, and strong focus."
        />

        <StageBlock
          idx={2}
          headline="From Confusion to Conviction"
          transformation="You’ll build a clear sense of who you are as a founder and show it confidently through your brand."
          because="People follow those who know who they are."
          lessons={[
            {
              t: "Founder Type Finder — Discover the kind of leader you naturally are.",
              w: "Knowing your natural style prevents identity conflict and lets you lead authentically.",
            },
            {
              t: "Story Alignment — Connect your personal story to your business story.",
              w: "People relate to emotion, not titles. Linking your story builds trust and memorability.",
            },
            {
              t: "Authority Habits — Practice small actions that make people trust you.",
              w: "Authority is earned through repetition of reliable behavior — not bold claims.",
            },
            {
              t: "Proof Through Action — Turn real wins and experiences into credibility.",
              w: "Evidence replaces insecurity. Action-based proof builds self-respect and external trust.",
            },
            {
              t: "Identity Rebuild — Strengthen the version of you that leads with confidence.",
              w: "Repetition reprograms the subconscious. This finalizes your new self-image.",
            },
          ]}
          outcome="Confidence, clear identity, natural authority."
        />

        <StageBlock
          idx={3}
          headline="From Self-Focus to Market Resonance"
          transformation="You’ll understand your audience so well that your content and offers speak straight to their emotions."
          because="Business is not about selling — it’s about understanding people."
          lessons={[
            {
              t: "Emotion Mapping — Learn what your audience feels before they buy.",
              w: "Emotion drives decision-making. Understanding feelings helps predict actions.",
            },
            {
              t: "Behavior Study — Notice how habits shape people’s choices.",
              w: "Behavior reveals truth more than words. Patterns show what people really value.",
            },
            {
              t: "Belief Finder — Discover what your audience truly believes and values.",
              w: "Beliefs guide perception. Aligning with them builds instant connection.",
            },
            {
              t: "Speak Their Language — Write and talk in a way that feels real to them.",
              w: "People listen when they feel understood. Mirroring language creates trust.",
            },
            {
              t: "Empathy in Action — Use what you learn to create content that connects.",
              w: "Empathy without expression changes nothing. Execution makes it real.",
            },
          ]}
          outcome="Emotional connection, loyal audience, accurate marketing."
        />

        <StageBlock
          idx={4}
          headline="From Logic to Persuasion"
          transformation="You’ll design offers people actually want — not just understand. You’ll learn how to make 'yes' feel easy."
          because="People buy with emotion first, logic second."
          lessons={[
            {
              t: "Value Framing — Show value in a way people can instantly feel.",
              w: "Perception shapes worth. The brain decides based on meaning, not math.",
            },
            {
              t: "Risk Remover — Make buying feel safe and smart.",
              w: "Fear stops sales. Reducing uncertainty activates trust and action.",
            },
            {
              t: "Smart Pricing — Use simple pricing strategies that feel fair and premium.",
              w: "Price tells a story. Proper framing creates confidence instead of doubt.",
            },
            {
              t: "Story-Driven Offer — Explain what you sell through emotion, not jargon.",
              w: "Stories bypass skepticism and activate belief.",
            },
            {
              t: "Fast Testing — Try your offer quickly and fix what doesn’t work.",
              w: "Rapid feedback removes ego from decision-making and accelerates learning.",
            },
          ]}
          outcome="Clear offers, easy conversions, confident selling."
        />

        <StageBlock
          idx={5}
          headline="From Reaction to Rhythm"
          transformation="You’ll turn your daily work into a system that runs smoothly and keeps you in flow."
          because="Consistency beats intensity when building a real business."
          lessons={[
            {
              t: "Energy Budget — Focus only on what gives real results.",
              w: "Your brain has limited attention. Prioritizing energy creates sustainable productivity.",
            },
            {
              t: "System Builder — Turn repeated tasks into simple step-by-step routines.",
              w: "Systems free cognitive load. Routine builds freedom, not boredom.",
            },
            {
              t: "Decision Shortcut — Avoid burnout by planning choices in advance.",
              w: "Decision fatigue kills creativity. Pre-set frameworks protect willpower.",
            },
            {
              t: "Daily Rhythm — Create routines that build focus and progress.",
              w: "The brain loves rhythm — it turns effort into automatic flow.",
            },
            {
              t: "Flow Environment — Set up your space and tools to help you perform better.",
              w: "Environment shapes behavior. Structure fuels discipline.",
            },
          ]}
          outcome="Organized systems, smooth workflow, consistent growth."
        />

        <StageBlock
          idx={6}
          headline="From Effort to Leverage"
          transformation="You’ll learn how to get bigger results without doing everything yourself."
          because="Real freedom comes from systems and people that work even when you rest."
          lessons={[
            {
              t: "Leverage Basics — Understand how time, tools, and people multiply results.",
              w: "Recognizing leverage points turns effort into scalability.",
            },
            {
              t: "Delegation Made Easy — Learn to hand off tasks without losing quality.",
              w: "Letting go builds leadership. Delegation teaches trust and efficiency.",
            },
            {
              t: "Reward Loops — Create small wins that motivate you and your team.",
              w: "The brain repeats what feels rewarding — motivation can be designed.",
            },
            {
              t: "Network Growth — Build relationships that bring new chances and reach.",
              w: "Opportunity flows through people. Connection multiplies visibility.",
            },
            {
              t: "Automation Starter Pack — Let simple tools do repeated work for you.",
              w: "Automating repetition protects creativity for high-value work.",
            },
          ]}
          outcome="More output, less stress, scalable growth."
        />

        <StageBlock
          idx={7}
          headline="From Proving to Becoming"
          transformation="You’ll stop chasing validation and start leading with quiet confidence. Your results and calmness will speak for you."
          because="Real authority isn’t loud — it’s consistent, proven, and peaceful."
          lessons={[
            {
              t: "Proof Builder — Collect and show your best results clearly.",
              w: "Visible proof turns private wins into public trust.",
            },
            {
              t: "Reputation System — Create habits that grow your name over time.",
              w: "Reputation compounds like interest — slow and unstoppable.",
            },
            {
              t: "Purpose Alignment — Match your goals with what truly matters to you.",
              w: "Meaning prevents burnout. When goals align with values, energy stays high.",
            },
            {
              t: "Legacy Planner — Build systems and values that last beyond you.",
              w: "Legacy thinking shifts focus from ego to impact.",
            },
            {
              t: "Calm Power Practice — Learn to lead without noise or pressure.",
              w: "Stillness signals mastery. Calm leaders attract by presence, not persuasion.",
            },
          ]}
          outcome="Trust, influence, and long-term stability."
        />
      </div>

      {/* FLOW TABLE */}
      <div className="mt-6 md:mt-8">
        <FlowOfTransformation />
      </div>
    </section>
  );
}
