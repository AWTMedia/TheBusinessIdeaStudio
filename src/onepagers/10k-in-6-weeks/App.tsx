import React from "react";

/*
  $10k in 6 Weeks Challenge — One-Pager
  React + Tailwind (Matrix theme aesthetic)
  - Compact soft cards, rounded corners, subtle rings
  - MacBook Air friendly (1280–1440px)
  - Print / Save as PDF ready
*/

export default function TenKChallenge() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <QuickLinks />
        <StatsBar />
        <Charter />
        <UnitEconomics />
        <Guardrails />
        <SystemStack />
        <Roles />
        <Deliverables />
        <MoneyModels />
        <GanttTimelineSixWeeks /> {/* ← fixed timeline */}
        <ExecutionWeeks />
        <Rhythm />
        <KPIs />
        <RiskControls />
        <Handoff />
        <Footer />
      </div>
    </main>
  );
}

/* --------------------------------- Header -------------------------------- */
function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        $10,000 in 6 Weeks — Challenge Blueprint
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        A repeatable, scalable playbook to collect <strong>$10,000 cash</strong>{" "}
        in 6 weeks using lead generation → nurture &amp; qualification →
        conversion. Built to duplicate across multiple businesses.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Systems</Tag>
        <Tag color="amber">Revenue</Tag>
        <Tag color="rose">Proof</Tag>
        <Tag color="slate">Operations</Tag>
      </div>
    </header>
  );
}

/* ------------------------------ Quick Links ------------------------------ */
function QuickLinks() {
  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Planning &amp; Documentation</h3>
          <p className="text-sm text-slate-700">
            All outputs land here in the <strong>Task</strong> column.
          </p>
          <a
            href="https://www.notion.so/228535509471808bb45fddebacf25658?pvs=21"
            className="inline-flex items-center gap-2 mt-3 text-indigo-700 text-sm font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Open Notion →
          </a>
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">3-Week Preparation</h3>
          <p className="text-sm text-slate-700">
            System for building the digital ecosystem.
          </p>
          <a
            href="https://www.notion.so/228535509471800581dfd8f4f8461769?pvs=21"
            className="inline-flex items-center gap-2 mt-3 text-emerald-700 text-sm font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Open Preparation →
          </a>
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">3-Week System (Execution)</h3>
          <p className="text-sm text-slate-700">
            Revenue push: publish, book, close, onboard.
          </p>
          <a
            href="https://www.notion.so/22953550947180ad8ad7f44909958ebb?pvs=21"
            className="inline-flex items-center gap-2 mt-3 text-amber-700 text-sm font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Open Execution →
          </a>
        </Card>
      </div>
    </section>
  );
}

/* ------------------------------- Stats Bar ------------------------------- */
function StatsBar() {
  const items: Array<{ label: string; value: string; tone: Tone }> = [
    { label: "Revenue Goal", value: "$10,000", tone: "amber" },
    { label: "Timeline", value: "6 Weeks", tone: "indigo" },
    { label: "Build Window", value: "Weeks −3 to −1", tone: "emerald" },
    { label: "Sell Window", value: "Weeks 1 to 3", tone: "rose" },
  ];
  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <Stat key={i} label={it.label} value={it.value} tone={it.tone} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Charter ------------------------------- */
function Charter() {
  const bullets = [
    "Scope: Lead gen → nurture/qualify → conversion → onboarding",
    "Constraint: 3 weeks to build, 3 weeks to sell (no slipping)",
    "Proof: Stripe/PayPal receipts, CRM deals, booked calls & show rates, onboarding forms",
  ];
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Challenge Charter</h2>
        <p className="text-sm leading-6">
          <strong>Goal:</strong> Collect <strong>$10,000 cash</strong> by end of
          Week 6.
        </p>
        <Bullets items={bullets} />
      </Card>
    </section>
  );
}

/* ---------------------------- Unit Economics ----------------------------- */
function UnitEconomics() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Unit Economics &amp; Target Paths
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">High-Ticket</h3>
          <p className="text-sm text-slate-700">
            $2,000 offer → <strong>5 sales</strong>
          </p>
          <p className="text-xs text-slate-600 mt-1">
            30% close, 80% show → ~21 appts → ~26 invites → ~70 qualified convos
            → ~200 warm leads
          </p>
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Mid-Ticket</h3>
          <p className="text-sm text-slate-700">
            $1,000 offer → <strong>10 sales</strong>
          </p>
          <p className="text-xs text-slate-600 mt-1">
            25% close, 80% show → ~40 appts → ~50 invites → ~140 qualified
            convos → ~400 warm leads
          </p>
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Continuity Hybrid</h3>
          <p className="text-sm text-slate-700">$1,500 setup + $300/m × 3 mo</p>
          <p className="text-xs text-slate-600 mt-1">
            5 sales → cash $7,500 + $1,500 upfront M1; add 2 × $1k upsells to
            clear $10k
          </p>
        </Card>
      </div>
      <Card className="mt-4">
        <h4 className="font-medium">
          Conversion Ladder (per week during execution)
        </h4>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="py-2 pr-4">Stage</th>
                <th className="py-2 pr-4">Target</th>
                <th className="py-2 pr-4">Rate</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["New warm leads", "120+", "—", "Opt-ins, DMs, inbound"],
                [
                  "Qualified conversations",
                  "45+",
                  ">= 35% of leads",
                  "Setter 5-touch cadence",
                ],
                [
                  "Booked calls",
                  "14–22",
                  ">= 25% of convos",
                  "Calendly + reminders",
                ],
                ["Show rate", ">= 75%", "—", "24h/4h/1h + SMS primer"],
                ["Close rate", ">= 25%", "—", "PIF bonus or de-risk guarantee"],
              ].map((r, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">
                    {r[0]}
                  </td>
                  <td className="py-2 pr-4">{r[1]}</td>
                  <td className="py-2 pr-4">{r[2]}</td>
                  <td className="py-2">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

/* ------------------------------ Guardrails ------------------------------- */
function Guardrails() {
  const list = [
    "Content/posts: 15 short-form + 2 long-form per week",
    "New warm leads: 120+ per week",
    "Qualified conversations: 45+ per week",
    "Booked calls: 14–18 (wk1), 18–22 (wk2/3)",
    "Show rate ≥ 75%",
    "Close rate ≥ 25% (PIF or deposit + plan)",
  ];
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Funnel Guardrails</h2>
        <Bullets items={list} />
      </Card>
    </section>
  );
}

/* ------------------------------ System Stack ----------------------------- */
function SystemStack() {
  const lead = [
    "Organic: Profile funnel (LI/IG/FB), daily story sequences, 2× weekly YouTube breakdowns",
    "Outbound: LinkedIn → Email bridge (connect → DM → value → permission → email)",
    "Paid (optional): Profile ads + low-budget retargeting",
    "Referrals: Win-your-money-back or tiered credit",
  ];
  const mid = [
    "Content ecosystem: pain → belief shift → proof → offer primers",
    "Automations: DM keywords → CRM, mini-sequences, reminders",
    "Setters: 2-touch same day, 5-touch over 7–10 days",
    "Qual rules: ICP fit, budget, timeline, severity, authority",
  ];
  const end = [
    "Story Ad Sequence + DM pre-frame → Closer call (30–45m)",
    "Offer: price floor/target, guarantee rules aligned to COGS/capacity",
    "Payment ops: Pay links, deposits, contracts, onboarding same day",
  ];
  const tools = [
    "Notion (docs/tasks), Airtable/Pipedrive (CRM), Calendly, Stripe",
    "Make/Zapier (automation), Clay/Apollo (prospects), Instantly/Smartlead (email)",
    "CapCut/Descript (editing)",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">System Stack (portable)</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">Lead Generation</h3>
          <Bullets items={lead} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Nurture &amp; Qualification</h3>
          <Bullets items={mid} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Conversion</h3>
          <Bullets items={end} />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Core Tools</h3>
          <Bullets items={tools} />
        </Card>
      </div>
    </section>
  );
}

/* ---------------------------------- Roles -------------------------------- */
function Roles() {
  const roles = [
    {
      name: "Founder (Face)",
      items: ["Final offer/guarantee", "Flagship content", "Closes key deals"],
    },
    {
      name: "Setter",
      items: ["DM triage", "Qualification", "Booking", "Reminders"],
    },
    {
      name: "Closer",
      items: ["Sales calls", "Proposal", "Payment", "Handoff"],
    },
    {
      name: "Creative Director",
      items: ["Content strategy", "Hooks", "Proof packaging"],
    },
    { name: "Editor", items: ["Long → short", "Carousels", "Ship daily"] },
    {
      name: "Ops / CRM",
      items: ["Pipeline hygiene", "Automations", "Onboarding", "Analytics"],
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Roles &amp; Ownership</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((r, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <h3 className="font-semibold">{r.name}</h3>
            <Bullets items={r.items} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Deliverables ----------------------------- */
function Deliverables() {
  const board = [
    "Backlog",
    "Ready",
    "In-Progress",
    "Review",
    "Done",
    "Task (artifact link)",
  ];
  const templates = [
    "Quick Experiment (7–14 day)",
    "Creative Brief",
    "LinkedIn → Email Scripts",
    "DM Playbook",
    "Call Script",
    "Offer & Pricing Calculator",
    "Onboarding Form",
    "Testimonial SOP",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Deliverables &amp; Documentation
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="slate">
          <h3 className="font-semibold">Planning Board Columns</h3>
          <Tags items={board} tone="slate" />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Templates (Notion)</h3>
          <Bullets items={templates} />
        </Card>
      </div>
    </section>
  );
}

/* ------------------------------ Money Models ----------------------------- */
function MoneyModels() {
  const a = [
    "Continuity discount (commit 3 months, get 4th free)",
    "Win-your-money-back challenge",
  ];
  const u = ["Fast-track implementation", "1:1 sprint"];
  const d = ["Payment plan", "Trial with penalty", "Feature-light"];
  const c = ["Community", "Office hours", "Templates vault"];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Money Model Add-Ons (de-risk hitting $10k)
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">Attraction</h3>
          <Bullets items={a} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Upsell</h3>
          <Bullets items={u} />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Downsell</h3>
          <Bullets items={d} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Continuity</h3>
          <Bullets items={c} />
        </Card>
      </div>
    </section>
  );
}

/* -------------------------------------------
   Gantt-Style Timeline (6 Weeks) — FIXED v2
   - 1st column = system lane labels
   - Columns = W-3, W-2, W-1, W1, W2, W3
   - Bars align perfectly with the grid (no negative margins)
-------------------------------------------- */

export function GanttTimelineSixWeeks() {
  const lanes: Lane[] = [
    {
      name: "Strategy & Offer",
      bars: [bar("W-3", 1, "indigo", "ICP • Offer • Guarantees")],
    },
    {
      name: "Infra & Assets",
      bars: [bar("W-3", 1, "emerald", "Profiles • Calendly • CRM • 30 hooks")],
    },
    {
      name: "Rehearsal & Warmup",
      bars: [bar("W-2", 1, "amber", "12–15 shorts • QA flows")],
    },
    {
      name: "Launch & Fill",
      bars: [bar("W-1", 2, "rose", "Publish • Outbound • Book calls")], // spans W-2 → W-1
    },
    {
      name: "Optimize & Push",
      bars: [bar("W2", 2, "indigo", "Double down • Referrals • Upsell")], // spans W1 → W2
    },
    {
      name: "Close & Compound",
      bars: [
        bar("W2", 2, "emerald", "Stack calendar • PIF bonus • Testimonials"),
      ], // spans W1 → W2
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold mb-3">Gantt-Style Timeline (6 Weeks)</h2>

      <div className="rounded-3xl border border-slate-200 p-4 ring-1 ring-slate-100 bg-white">
        {/* Header row */}
        <div className="grid grid-cols-7 gap-2 px-1 pb-2">
          <div className="text-xs font-medium text-slate-500">System</div>
          <HeaderCell>W-3</HeaderCell>
          <HeaderCell>W-2</HeaderCell>
          <HeaderCell>W-1</HeaderCell>
          <HeaderCell>W1</HeaderCell>
          <HeaderCell>W2</HeaderCell>
          <HeaderCell>W3</HeaderCell>
        </div>

        {/* Lanes */}
        <div className="space-y-3">
          {lanes.map((lane, i) => (
            <LaneRow key={i} lane={lane} />
          ))}
        </div>

        <p className="text-xs text-slate-500 mt-4">
          Arrows indicate default path. Retargeting & follow-ups create loops
          back to Profile, Stories and DMs.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- Row & Cells ------------------------------ */

type GTone = "slate" | "emerald" | "amber" | "rose" | "indigo";

type Bar = {
  start: "W-3" | "W-2" | "W-1" | "W1" | "W2" | "W3";
  span: 1 | 2 | 3 | 4 | 5 | 6;
  tone: GTone;
  label: string;
};

type Lane = {
  name: string;
  bars: Bar[];
};

function bar(
  start: Bar["start"],
  span: Bar["span"],
  tone: Bar["tone"],
  label: string
): Bar {
  return { start, span, tone, label };
}

function LaneRow({ lane }: { lane: Lane }) {
  return (
    <div className="grid grid-cols-7 gap-2 items-stretch">
      {/* Lane label */}
      <div className="text-sm font-semibold text-slate-800 bg-slate-50/80 border border-slate-200 rounded-xl px-3 py-2 flex items-center">
        {lane.name}
      </div>

      {/* Week cells grid with overlayed bars */}
      <div className="col-span-6 relative">
        {/* Background cells */}
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-xl bg-slate-50 border border-slate-100"
            />
          ))}
        </div>

        {/* Bars overlay */}
        <div className="absolute inset-0 grid grid-cols-6 gap-2">
          {lane.bars.map((b, i) => (
            <BarBlock key={i} {...b} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center text-xs font-medium text-slate-500">
      {children}
    </div>
  );
}

/* ------------------------------ Bars ----------------------------------- */

const START_CLASS: Record<Bar["start"], string> = {
  "W-3": "col-start-1",
  "W-2": "col-start-2",
  "W-1": "col-start-3",
  W1: "col-start-4",
  W2: "col-start-5",
  W3: "col-start-6",
};

const SPAN_CLASS: Record<Bar["span"], string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const TONE_CLASS: Record<GTone, string> = {
  slate: "bg-slate-100 text-slate-800 border-slate-200 ring-1 ring-slate-100",
  emerald:
    "bg-emerald-50 text-emerald-800 border-emerald-200 ring-1 ring-emerald-100",
  amber: "bg-amber-50 text-amber-800 border-amber-200 ring-1 ring-amber-100",
  rose: "bg-rose-50 text-rose-800 border-rose-200 ring-1 ring-rose-100",
  indigo:
    "bg-indigo-50 text-indigo-800 border-indigo-200 ring-1 ring-indigo-100",
};

function BarBlock({ start, span, tone, label }: Bar) {
  return (
    <div
      className={[
        START_CLASS[start],
        SPAN_CLASS[span],
        "h-12 rounded-xl border shadow-sm flex items-center justify-center text-[12px] font-medium px-3",
        TONE_CLASS[tone],
      ].join(" ")}
      title={label}
    >
      <span className="truncate">{label}</span>
    </div>
  );
}

/* ------------------------------ Execution Weeks -------------------------- */
function ExecutionWeeks() {
  const wk1 = [
    "Publish 15 shorts + 2 long-form; Stories with polls & DM keywords",
    "Launch LinkedIn → Email campaigns (3 seq × 100 leads)",
    "Setters run 5-touch cadence; book 14–18 calls",
    "Retarget viewers/engagers",
    "Experiment #01 live (e.g., win-your-money-back hook)",
  ];
  const wk2 = [
    "Double-down top 3 hooks; kill losers",
    "Add referral micro-offer to wins/losses",
    "Founder posts 2 authority threads + 1 client story",
    "Introduce upsell (fast-track)",
    "Experiment #02 (pricing + pre-frame variant)",
  ];
  const wk3 = [
    "Last-chance cadence: DM + email + Stories with proof montage",
    "Double calendar slots; SMS reminders; same-day follow-ups",
    "PIF bonus or deadline-bound guarantee enhancement",
    "Handoff won clients same-day; testimonial at 48–72h micro-win",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        3-Week Execution Plan (Revenue Sprint)
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="rose">
          <h3 className="font-semibold">Week 1 — Launch &amp; Fill</h3>
          <Bullets items={wk1} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Week 2 — Optimize &amp; Push</h3>
          <Bullets items={wk2} />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">Week 3 — Close &amp; Compound</h3>
          <Bullets items={wk3} />
        </Card>
      </div>
    </section>
  );
}

/* --------------------------------- Rhythm -------------------------------- */
function Rhythm() {
  const daily = [
    "Numbers: leads, convos, calls, show, wins",
    "What shipped (assets), what blocked",
    "Top 3 today (one per function)",
  ];
  const weekly = [
    "Scorecard review",
    "Experiment decision (keep/iterate/kill)",
    "Next hypothesis",
    "Pipeline hygiene",
    "Offer tweak if needed",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Daily &amp; Weekly Rhythm</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="slate">
          <h3 className="font-semibold">Daily (45–90 min)</h3>
          <Bullets items={daily} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Weekly (90 min)</h3>
          <Bullets items={weekly} />
        </Card>
      </div>
    </section>
  );
}

/* ----------------------------------- KPIs -------------------------------- */
function KPIs() {
  const rows = [
    ["Content", "10–15 shorts/week/platform; Hook CTR & 3-sec hold"],
    ["DMs", "Lead→convo ≥ 35%; Convo→book ≥ 25%"],
    ["Calls", "Show ≥ 75%; Close ≥ 25%; PIF ≥ 40% of wins"],
    ["Revenue", "Linear pace to $10k (burn-up chart)"],
    ["Ops", "100% same-day onboarding; 100% CRM updates"],
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Core KPIs &amp; Thresholds</h2>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="py-2 pr-4">Area</th>
                <th className="py-2">Target</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">
                    {r[0]}
                  </td>
                  <td className="py-2">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

/* ------------------------------- Risk Controls --------------------------- */
function RiskControls() {
  const cards = [
    {
      title: "Missed Bookings by Day 3",
      items: ["Loom micro-win value drop + DM push", "Expand audience slice"],
    },
    {
      title: "Low Show Rate",
      items: ["Tighten reminders (24h/4h/1h + SMS)", "Send pre-call primer"],
    },
    {
      title: "Low Close Rate",
      items: [
        "Clarify guarantee + add fast-track bonus",
        "Re-order opener/stack",
      ],
    },
    {
      title: "Content Flop",
      items: ["Recycle proven frameworks", "Ship proof-dense carousels"],
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Risk Controls &amp; Pivots</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "rose") ||
              (i % 4 === 1 && "indigo") ||
              (i % 4 === 2 && "emerald") ||
              "amber"
            }
          >
            <h3 className="font-semibold">{c.title}</h3>
            <Bullets items={c.items} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- Handoff ------------------------------- */
function Handoff() {
  const won = [
    "Payment → Contract → Onboarding form",
    "Create Slack/Notion space",
    "Book kickoff",
  ];
  const proof = [
    "Deliver micro-win within 48h",
    "Request testimonial via SOP",
    "Feed proof back into content/ads",
  ];
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-3">Handoff &amp; Proof Loop</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Won Deals</h3>
          <Bullets items={won} />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">Proof Loop</h3>
          <Bullets items={proof} />
        </Card>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="mt-6 flex flex-wrap items-center gap-3">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
      >
        Print / Save as PDF
      </button>
      <span className="text-xs text-slate-500">
        Optimised for 1280–1440px (MacBook Air). A4 landscape recommended.
      </span>
    </footer>
  );
}

/* ------------------------------- UI Primitives --------------------------- */
type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

function Card({
  children,
  className = "",
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}) {
  const ring: Record<Tone, string> = {
    slate: "ring-1 ring-slate-100",
    emerald: "ring-1 ring-emerald-100",
    amber: "ring-1 ring-amber-100",
    rose: "ring-1 ring-rose-100",
    indigo: "ring-1 ring-indigo-100",
    violet: "ring-1 ring-violet-100",
  } as const;
  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-sm ${
        tone ? ring[tone] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ children, color = "slate" as Tone }) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}
    >
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  tone = "slate" as Tone,
}: {
  label: string;
  value: string;
  tone?: Tone;
}) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-50 text-slate-800",
    emerald: "bg-emerald-50 text-emerald-800",
    indigo: "bg-indigo-50 text-indigo-800",
    amber: "bg-amber-50 text-amber-800",
    rose: "bg-rose-50 text-rose-800",
    violet: "bg-violet-50 text-violet-800",
  };
  return (
    <div
      className={`rounded-2xl border border-slate-200 p-3 ${map[tone]} shadow-sm`}
    >
      <div className="text-[11px] uppercase tracking-wide text-slate-600">
        {label}
      </div>
      <div className="text-xl font-bold mt-1">{value}</div>
    </div>
  );
}

function Tags({ items = [] as string[], tone = "slate" as Tone }) {
  const edge: Record<Tone, string> = {
    slate: "bg-slate-50 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((t, i) => (
        <span
          key={i}
          className={`px-2 py-1 rounded-full border border-black/5 ${edge[tone]}`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Bullets({ items = [] as string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
    </ul>
  );
}
