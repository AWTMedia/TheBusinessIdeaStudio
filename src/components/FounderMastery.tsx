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

function SectionBlock({
  index,
  title,
  subtitle,
  because,
  lessons,
  outcome,
}: {
  index: number | string;
  title: string;
  subtitle: string;
  because: string;
  lessons: Array<{
    name: string;
    why: string;
  }>;
  outcome: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white border shadow-sm p-6 md:p-8"
      style={{ borderColor: C.gray }}
    >
      {/* Header */}
      <div className="text-xs uppercase tracking-widest opacity-60">
        {index}. {title}
      </div>
      <h2
        className="mt-2 text-xl font-bold leading-snug"
        style={{ color: C.ink }}
      >
        {subtitle}
      </h2>

      <p className="mt-3 text-sm opacity-90">
        <strong>Transformation:</strong> {subtitle}
      </p>
      <p className="mt-2 text-sm opacity-90">
        <strong>Because:</strong> {because}
      </p>

      {/* Lessons */}
      <div className="mt-5 space-y-4">
        {lessons.map((l, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-4"
            style={{ borderColor: C.gray }}
          >
            <div className="text-sm font-semibold" style={{ color: C.ink }}>
              {i + 1}. {l.name}
            </div>
            <div className="mt-1 text-[13px] leading-relaxed opacity-90">
              <strong>Why:</strong> {l.why}
            </div>
          </div>
        ))}
      </div>

      {/* Outcome */}
      <div className="mt-5 rounded-lg bg-white px-4 py-3 text-[13px] leading-relaxed border"
        style={{ borderColor: C.gray }}
      >
        <strong>🧩 Outcome:</strong> {outcome}
      </div>
    </div>
  );
}

export default function FounderMastery() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Top header / hero */}
      <div className="rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden mb-10"
        style={{
          background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
          color: "#fff",
        }}
      >
        <div className="text-xs uppercase tracking-widest opacity-80 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase"
            style={{
              border: `1px solid ${C.accent}`,
              color: C.accent,
              background: "rgba(0,0,0,.3)",
            }}
          >
            ⚔️ The Business Idea Studio
          </span>
          <span>Founder Mastery</span>
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
          The 7 Stages of Becoming a Business Typhoon
        </h1>
        <p className="mt-3 text-sm md:text-base opacity-95">
          (with the psychology behind each lesson)
        </p>

        <div
          className="mt-6 h-px w-full"
          style={{ background: "rgba(255,255,255,.15)" }}
        />
        <div className="mt-6 text-xs opacity-80">
          A psychological progression: control → conviction → resonance → persuasion
          → rhythm → leverage → embodied authority.
        </div>
      </div>

      {/* Stage 1 */}
      <SectionBlock
        index="1"
        title="Cognitive Control"
        subtitle="From Chaos to Clarity"
        because="If your mind isn’t calm and clear, no system or plan will last."
        lessons={[
          {
            name: "Focus Training — Learn how to stay focused even when distracted.",
            why: "Focus is the foundation of performance. Without attention control, your brain can’t complete long-term goals.",
          },
          {
            name: "Self-Trust Builder — Keep promises to yourself so your word means something.",
            why: "Confidence starts with reliability. Each small kept promise rebuilds belief in your ability to execute.",
          },
          {
            name: "Emotional Reset — Handle stress and fear without losing momentum.",
            why: "Calm under pressure is a trained response. This rewires your nervous system to stay composed during chaos.",
          },
          {
            name: "Belief Check — Find and replace thoughts that hold you back.",
            why: "Thoughts shape action. Identifying limiting beliefs removes hidden brakes on your growth.",
          },
          {
            name: "Discipline System — Build habits that keep going when motivation fades.",
            why: "Discipline is emotion-proof consistency — it anchors the whole operating system.",
          },
        ]}
        outcome="Clear thinking, steady energy, and strong focus."
      />

      {/* Stage 2 */}
      <SectionBlock
        index="2"
        title="Identity Construction"
        subtitle="From Confusion to Conviction"
        because="People follow those who know who they are."
        lessons={[
          {
            name: "Founder Type Finder — Discover the kind of leader you naturally are.",
            why: "Knowing your natural style prevents identity conflict and lets you lead authentically.",
          },
          {
            name: "Story Alignment — Connect your personal story to your business story.",
            why: "People relate to emotion, not titles. Linking your story builds trust and memorability.",
          },
          {
            name: "Authority Habits — Practice small actions that make people trust you.",
            why: "Authority is earned through repetition of reliable behavior — not bold claims.",
          },
          {
            name: "Proof Through Action — Turn real wins and experiences into credibility.",
            why: "Evidence replaces insecurity. Action-based proof builds self-respect and external trust.",
          },
          {
            name: "Identity Rebuild — Strengthen the version of you that leads with confidence.",
            why: "Repetition reprograms the subconscious. This finalizes your new self-image.",
          },
        ]}
        outcome="Confidence, clear identity, natural authority."
      />

      {/* Stage 3 */}
      <SectionBlock
        index="3"
        title="Empathic Intelligence"
        subtitle="From Self-Focus to Market Resonance"
        because="Business is not about selling — it’s about understanding people."
        lessons={[
          {
            name: "Emotion Mapping — Learn what your audience feels before they buy.",
            why: "Emotion drives decision-making. Understanding feelings helps predict actions.",
          },
          {
            name: "Behavior Study — Notice how habits shape people’s choices.",
            why: "Behavior reveals truth more than words. Patterns show what people really value.",
          },
          {
            name: "Belief Finder — Discover what your audience truly believes and values.",
            why: "Beliefs guide perception. Aligning with them builds instant connection.",
          },
          {
            name: "Speak Their Language — Write and talk in a way that feels real to them.",
            why: "People listen when they feel understood. Mirroring language creates trust.",
          },
          {
            name: "Empathy in Action — Use what you learn to create content that connects.",
            why: "Empathy without expression changes nothing. Execution makes it real.",
          },
        ]}
        outcome="Emotional connection, loyal audience, accurate marketing."
      />

      {/* Stage 4 */}
      <SectionBlock
        index="4"
        title="Offer Architecture"
        subtitle="From Logic to Persuasion"
        because="People buy with emotion first, logic second."
        lessons={[
          {
            name: "Value Framing — Show value in a way people can instantly feel.",
            why: "Perception shapes worth. The brain decides based on meaning, not math.",
          },
          {
            name: "Risk Remover — Make buying feel safe and smart.",
            why: "Fear stops sales. Reducing uncertainty activates trust and action.",
          },
          {
            name: "Smart Pricing — Use simple pricing strategies that feel fair and premium.",
            why: "Price tells a story. Proper framing creates confidence instead of doubt.",
          },
          {
            name: "Story-Driven Offer — Explain what you sell through emotion, not jargon.",
            why: "Stories bypass skepticism and activate belief.",
          },
          {
            name: "Fast Testing — Try your offer quickly and fix what doesn’t work.",
            why: "Rapid feedback removes ego from decision-making and accelerates learning.",
          },
        ]}
        outcome="Clear offers, easy conversions, confident selling."
      />

      {/* Stage 5 */}
      <SectionBlock
        index="5"
        title="Operational Cognition"
        subtitle="From Reaction to Rhythm"
        because="Consistency beats intensity when building a real business."
        lessons={[
          {
            name: "Energy Budget — Focus only on what gives real results.",
            why: "Your brain has limited attention. Prioritizing energy creates sustainable productivity.",
          },
          {
            name: "System Builder — Turn repeated tasks into simple step-by-step routines.",
            why: "Systems free cognitive load. Routine builds freedom, not boredom.",
          },
          {
            name: "Decision Shortcut — Avoid burnout by planning choices in advance.",
            why: "Decision fatigue kills creativity. Pre-set frameworks protect willpower.",
          },
          {
            name: "Daily Rhythm — Create routines that build focus and progress.",
            why: "The brain loves rhythm — it turns effort into automatic flow.",
          },
          {
            name: "Flow Environment — Set up your space and tools to help you perform better.",
            why: "Environment shapes behavior. Structure fuels discipline.",
          },
        ]}
        outcome="Organized systems, smooth workflow, consistent growth."
      />

      {/* Stage 6 */}
      <SectionBlock
        index="6"
        title="Behavioral Multiplication"
        subtitle="From Effort to Leverage"
        because="Real freedom comes from systems and people that work even when you rest."
        lessons={[
          {
            name: "Leverage Basics — Understand how time, tools, and people multiply results.",
            why: "Recognizing leverage points turns effort into scalability.",
          },
          {
            name: "Delegation Made Easy — Learn to hand off tasks without losing quality.",
            why: "Letting go builds leadership. Delegation teaches trust and efficiency.",
          },
          {
            name: "Reward Loops — Create small wins that motivate you and your team.",
            why: "The brain repeats what feels rewarding — motivation can be designed.",
          },
          {
            name: "Network Growth — Build relationships that bring new chances and reach.",
            why: "Opportunity flows through people. Connection multiplies visibility.",
          },
          {
            name: "Automation Starter Pack — Let simple tools do repeated work for you.",
            why: "Automating repetition protects creativity for high-value work.",
          },
        ]}
        outcome="More output, less stress, scalable growth."
      />

      {/* Stage 7 */}
      <SectionBlock
        index="7"
        title="Embodied Authority"
        subtitle="From Proving to Becoming"
        because="Real authority isn’t loud — it’s consistent, proven, and peaceful."
        lessons={[
          {
            name: "Proof Builder — Collect and show your best results clearly.",
            why: "Visible proof turns private wins into public trust.",
          },
          {
            name: "Reputation System — Create habits that grow your name over time.",
            why: "Reputation compounds like interest — slow and unstoppable.",
          },
          {
            name: "Purpose Alignment — Match your goals with what truly matters to you.",
            why: "Meaning prevents burnout. When goals align with values, energy stays high.",
          },
          {
            name: "Legacy Planner — Build systems and values that last beyond you.",
            why: "Legacy thinking shifts focus from ego to impact.",
          },
          {
            name: "Calm Power Practice — Learn to lead without noise or pressure.",
            why: "Stillness signals mastery. Calm leaders attract by presence, not persuasion.",
          },
        ]}
        outcome="Trust, influence, and long-term stability."
      />

      {/* Flow of Transformation */}
      <div className="mt-10 rounded-2xl bg-white border shadow-sm p-6 md:p-8"
        style={{ borderColor: C.gray }}
      >
        <h2
          className="text-xl font-bold leading-snug"
          style={{ color: C.ink }}
        >
          🧭 The Flow of Transformation
        </h2>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm border" style={{ borderColor: C.gray }}>
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="px-3 py-2 border">Stage</th>
                <th className="px-3 py-2 border">Core Shift</th>
                <th className="px-3 py-2 border">What You Gain</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Chaos → Clarity", "Focus and emotional control"],
                ["2", "Confusion → Conviction", "Clear identity and confidence"],
                ["3", "Self-Focus → Resonance", "Deep understanding of others"],
                ["4", "Logic → Persuasion", "Offers that emotionally connect"],
                ["5", "Reaction → Rhythm", "Systems and daily consistency"],
                ["6", "Effort → Leverage", "Freedom through smarter scaling"],
                ["7", "Proving → Becoming", "Authority, peace, and lasting impact"],
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

        <p className="mt-6 text-[13px] leading-relaxed opacity-80">
          This is the order you upgrade in. Mind → Identity → Empathy → Offer →
          Operations → Leverage → Authority.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[15px] leading-relaxed opacity-90 max-w-lg">
          Next we’ll map these stages to actual weekly actions, scorecards, and
          systems. That will live in <strong>Business Systems</strong>.
        </div>
        <div className="flex gap-2">
          <CTA href="#/repo">Open Library</CTA>
          <CTA href="#/book-a-call" variant="lime">
            Book a Call
          </CTA>
        </div>
      </div>
    </section>
  );
}
