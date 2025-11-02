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

// small pill tag
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold leading-none"
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

// neutral card shell
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/90 backdrop-blur p-6 md:p-7 shadow-sm ${className}`}
      style={{ borderColor: C.gray }}
    >
      {children}
    </div>
  );
}

// thin divider line
function Line({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div
      className={className}
      style={{
        background: light ? "rgba(255,255,255,.15)" : C.gray,
        height: "1px",
        width: "100%",
      }}
    />
  );
}

// SECTION BLOCK for each stage (1–7)
function StageBlock({
  index,
  title,
  bullets,
  checkpoint,
  kpi,
}: {
  index: number;
  title: string;
  bullets: {
    label: string; // "Infrastructure:" / "System:" / "Leverage:"
    name: string;
    system: string;
    why: string;
  }[];
  checkpoint: string;
  kpi: string;
}) {
  return (
    <Card className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest opacity-60">
            Phase {index}
          </div>
          <h2
            className="text-xl font-bold leading-snug"
            style={{ color: C.ink }}
          >
            {title}
          </h2>
        </div>
        <div className="md:text-right text-sm opacity-70">
          <div className="font-semibold" style={{ color: C.ink }}>
            {checkpoint}
          </div>
          <div className="mt-1">{kpi}</div>
        </div>
      </div>

      <Line />

      <ol className="space-y-6">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="rounded-xl border bg-white p-5 hover:shadow-md transition"
            style={{ borderColor: C.gray }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold text-sm text-white"
                  style={{ background: C.blue }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold leading-snug"
                    style={{ color: C.ink }}
                  >
                    {b.label} {b.name}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed opacity-90">
                    <strong>System:</strong> {b.system}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 text-[13px] leading-relaxed opacity-90">
              <strong>Why:</strong> {b.why}
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

// DAILY / WEEKLY CADENCE block
function CadenceBlock() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest opacity-60">
            Execution Rhythm
          </div>
          <h2
            className="text-xl font-bold leading-snug"
            style={{ color: C.ink }}
          >
            Daily / Weekly Operating Cadence (Minimal)
          </h2>
        </div>
        <Pill>Run This Loop</Pill>
      </div>

      <Line className="mt-6 mb-4" />

      <ul className="space-y-3 text-[15px] leading-relaxed opacity-90">
        <li>
          • <strong>Daily (90 min):</strong> Deep work on the single
          highest-leverage asset due.
        </li>
        <li>
          • <strong>Mon:</strong> Pipeline review; set top 3 moves.
        </li>
        <li>
          • <strong>Tue–Thu:</strong> Content + Outbound blocks; delivery
          milestones.
        </li>
        <li>
          • <strong>Fri:</strong> Finance, ops, offer tweaks; publish 1 proof
          asset.
        </li>
      </ul>
    </Card>
  );
}

// SUMMARY / "WHAT YOU'RE BUILDING"
function SummaryBlock() {
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest opacity-60">
        Build Targets
      </div>
      <h2
        className="text-xl font-bold leading-snug mt-1"
        style={{ color: C.ink }}
      >
        What You're Building (at a glance)
      </h2>

      <Line className="mt-6 mb-4" />

      <div className="grid md:grid-cols-3 gap-6 text-[15px] leading-relaxed opacity-90">
        <div>
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            Infrastructure
          </div>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
            <li>• Offer doc</li>
            <li>• Landing page</li>
            <li>• Booking stack</li>
            <li>• Onboarding pack</li>
            <li>• Role cards</li>
            <li>• Finance control sheet</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            Systems
          </div>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
            <li>• Validation calls</li>
            <li>• Content loop</li>
            <li>• Outbound block</li>
            <li>• 1-call close</li>
            <li>• Weekly reporting</li>
            <li>• SOP cadence</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            Leverage
          </div>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
            <li>• Proof assets</li>
            <li>• Partner plays</li>
            <li>• Automation for repeats</li>
            <li>• Training library</li>
            <li>• Team roles / handoff</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        <span
          className="rounded-full border px-3 py-1 bg-white"
          style={{ borderColor: C.gray }}
        >
          Minimum viable machine
        </span>
        <span
          className="rounded-full border px-3 py-1 bg-white"
          style={{ borderColor: C.gray }}
        >
          Repeatable revenue
        </span>
        <span
          className="rounded-full border px-3 py-1 bg-white"
          style={{ borderColor: C.gray }}
        >
          Founder time-protection
        </span>
      </div>
    </Card>
  );
}

export default function BusinessSystems() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Top nav / back link row */}
      <div className="flex items-center justify-between">
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: C.blue }}
        >
          ← Home
        </a>
        <div className="text-xs opacity-70">Mechanical Layer</div>
      </div>

      {/* HERO HEADER */}
      <div
        className="mt-4 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
          color: "#fff",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest opacity-80">
              Mechanical Layer
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
              The Business Idea Studio — Operating System for Revenue
            </h1>

            <p className="mt-4 text-sm md:text-base opacity-95">
              This is the "do-this" layer. Each phase gives you infrastructure,
              systems, and leverage. You build one controllable machine:
              messaging → proof → traffic → calls → close → delivery →
              retention → scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] leading-none font-semibold">
              <Pill>Founder Safety</Pill>
              <Pill>Pipeline Predictability</Pill>
              <Pill>Time Leverage</Pill>
            </div>
          </div>

          <div className="md:text-right text-sm opacity-80 shrink-0 space-y-3">
            <div>
              <div className="font-semibold text-white/90">
                Core KPI Targets
              </div>
              <div className="mt-1 text-white/70">
                • Paid pilot in Phase 2 <br />
                • 10–20 bookings/mo in Phase 4 <br />
                • 25–40% close rate in Phase 5
              </div>
            </div>

            <div className="pt-2">
              <CTA href="#/book-a-call" variant="lime">
                Get 48–72h Plan →
              </CTA>
            </div>
          </div>
        </div>

        <Line className="mt-8" light />

        <div className="mt-6 text-xs opacity-80">
          Built for solo founders / lean operators who want repeatable revenue
          without needing a 10-person team.
        </div>
      </div>

      {/* PHASES STACK */}
      <div className="mt-10 space-y-8">
        {/* 1) Foundation & Focus */}
        <StageBlock
          index={1}
          title="Foundation & Focus"
          bullets={[
            {
              label: "Infrastructure:",
              name: "Skill → Niche → Problem 1-Pager",
              system:
                "Skill/Niche scoring matrix + Problem Hypothesis doc",
              why: "Forces one clear market bet so all assets align.",
            },
            {
              label: "Infrastructure:",
              name: "ICP Card (1 page)",
              system:
                "Pain → Desired Outcome → Constraints → Buying Triggers",
              why: "Makes messaging specific, increases reply/booking rates.",
            },
            {
              label: "Leverage:",
              name: "10 Validation Calls",
              system: "6-question script + booking sheet",
              why: "Replaces guesses with voice-of-customer language you’ll reuse.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="70% of calls confirm pain + urgency; 1 niche chosen."
        />

        {/* 2) Offer & Proof */}
        <StageBlock
          index={2}
          title="Offer & Proof"
          bullets={[
            {
              label: "Infrastructure:",
              name: "Minimum Offer Doc",
              system:
                "Promise, scope, timeline, floor/target/anchor price, guarantee",
              why: "Turns value into a sellable package you can defend.",
            },
            {
              label: "Leverage:",
              name: "Fast Proof Asset (7-day sprint)",
              system: "Case, demo, or sample before/after",
              why: "Cuts sales friction; proof > pitch.",
            },
            {
              label: "System:",
              name: "Pricing Ladder",
              system:
                "Floor (cost+margin), Target (most closes), Anchor (signal)",
              why: "Anchoring frames value and preserves margin.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="1 paid pilot (floor→target)."
        />

        {/* 3) Funnel & Conversion Path */}
        <StageBlock
          index={3}
          title="Funnel & Conversion Path"
          bullets={[
            {
              label: "Infrastructure:",
              name: "Profile Funnel",
              system:
                'Optimized bio, pinned proof post, CTA → DM “keyword” → booking',
              why: "Makes social profiles a working top-of-funnel, not a resume.",
            },
            {
              label: "Infrastructure:",
              name: "One-Page Landing",
              system:
                "Problem → Promise → Proof → CTA (calendar)",
              why: "Shortest path to action; measurable conversion.",
            },
            {
              label: "System:",
              name: "Booking Stack",
              system:
                "Calendar + intake form + confirmation templates",
              why: "Standardizes qualification and raises show-up rate.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="Landing CR→booking ≥ 2–5%; DM→booking ≥ 10–20%."
        />

        {/* 4) Traffic Engine (One Channel First) */}
        <StageBlock
          index={4}
          title="Traffic Engine (One Channel First)"
          bullets={[
            {
              label: "System:",
              name: "30-Day Content Run",
              system:
                "3 pillars × 10 posts (hooks, proof, offers)",
              why: "Builds authority and creates daily conversation flow.",
            },
            {
              label: "Leverage:",
              name: "Outbound Block",
              system:
                "30 tailored DMs/emails/day (signal → value → CTA)",
              why: "Predictable volume = predictable pipeline.",
            },
            {
              label: "Leverage:",
              name: "Partner Plays",
              system:
                "2 collabs/month (guest post, live, newsletter swap)",
              why: "Borrowed audiences compound faster than solo grind.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="5–10 new convos/day; 10–20 bookings/month."
        />

        {/* 5) Sales & Closing */}
        <StageBlock
          index={5}
          title="Sales & Closing"
          bullets={[
            {
              label: "System:",
              name: "1-Call Close Script",
              system:
                "Diagnose → Fit → Plan → Price → Handle → Next step",
              why: "Removes rambling; increases close rate ethically.",
            },
            {
              label: "Infrastructure:",
              name: "Offer Deck + Proposal + Agreement",
              system:
                "10–12 slide deck, scope doc, payment terms",
              why: "Speeds decisions; reduces back-and-forth.",
            },
            {
              label: "System:",
              name: "Objection Tree",
              system:
                "Price / Time / Trust / Partner branches with responses",
              why: "Turns stalls into structured resolutions.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="Show-up ≥ 70%; close ≥ 25–40%; cycle ≤ 14 days."
        />

        {/* 6) Delivery & Retention */}
        <StageBlock
          index={6}
          title="Delivery & Retention"
          bullets={[
            {
              label: "Infrastructure:",
              name: "Onboarding Pack",
              system:
                "Access checklist, kickoff agenda, success metrics",
              why: "Sets expectations; prevents scope drift.",
            },
            {
              label: "System:",
              name: "90-Day Roadmap + Weekly Rhythm",
              system:
                "Milestones, owner, date; weekly scorecard + update",
              why: "Makes progress visible and momentum durable.",
            },
            {
              label: "Leverage:",
              name: "Reporting Template",
              system:
                "Wins, metrics, risks, next 7-day plan",
              why: "Keeps clients bought-in; turns delivery into proof.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="Time-to-first-win ≤ 14 days; NPS ≥ 8/10; retention ≥ 80–90%."
        />

        {/* 7) Scale & Leverage */}
        <StageBlock
          index={7}
          title="Scale & Leverage"
          bullets={[
            {
              label: "Infrastructure:",
              name: "Role Cards + SOPs",
              system:
                "Outcome, responsibilities, 3–7 step SOP links",
              why: "Enables handoff without quality drop.",
            },
            {
              label: "Leverage:",
              name: "Training Library (Looms)",
              system:
                "5–10 videos mapping to SOPs; checklist per video",
              why: "Onboards contractors fast; reduces founder bottlenecks.",
            },
            {
              label: "System:",
              name: "Finance Control Sheet",
              system:
                "MRR, margin, CAC, LTV, runway; monthly review",
              why: "Prevents “busy but broke”; guides pricing and hiring.",
            },
          ]}
          checkpoint="Checkpoint KPI"
          kpi="Margin ≥ 60–70%; founder hours/client ≤ 4–6 hrs/mo."
        />
      </div>

      {/* CADENCE */}
      <div className="mt-10">
        <CadenceBlock />
      </div>

      {/* SUMMARY */}
      <div className="mt-10">
        <SummaryBlock />
      </div>

      {/* CTA FOOTER */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[15px] leading-relaxed opacity-90">
          Want this implemented for you in 48–72h?
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <CTA href="#/book-a-call" variant="lime">
            Book a Strategy Call
          </CTA>
          <CTA href="#/repo" variant="ghost">
            Browse Playbooks
          </CTA>
        </div>
      </div>
    </section>
  );
}
