import React from "react";

/*
  Sales, Objections & Conversion — One‑Pager
  React + Tailwind (Matrix theme aesthetic)
  - Soft cards, rounded corners, subtle rings
  - Compact, scannable; print‑friendly
*/

export default function SalesObjectionPlaybook() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <Overview />
        <WhyItMatters />
        <TopObjections />
        <Tactics />
        <ConversionToolkit />
        <FlowAndCadence />
        <CheatSheet />
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
        Sales, Objections, Handling & Conversion
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        A practical, on‑call reference for diagnosing objections, answering with
        clarity, and guiding prospects to a confident decision.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Call Script</Tag>
        <Tag color="emerald">Objection Maps</Tag>
        <Tag color="amber">Conversion Tactics</Tag>
        <Tag color="rose">Follow‑ups</Tag>
      </div>
    </header>
  );
}

/* ------------------------------- Overview -------------------------------- */
function Overview() {
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Overview</h2>
        <p className="text-sm leading-6">
          Closing is about understanding needs, resolving risk, and making the
          next step simple. Objections are normal pauses in a decision—not
          rejection. Treat them as data, then respond with empathy, proof, and a
          clear path forward.
        </p>
        <blockquote className="text-sm text-slate-600 mt-3 border-l-2 border-slate-200 pl-3 italic">
          “Sales is not about selling; it’s about helping your prospects make
          the best decision.” — Grant Cardone
        </blockquote>
      </Card>
    </section>
  );
}

/* --------------------------- Why Objections Matter ----------------------- */
function WhyItMatters() {
  const items = [
    "Objections are normal: they surface real decision criteria.",
    "Trust builder: thoughtful handling raises credibility.",
    "Higher close rates: fewer stalls, clearer value/ROI.",
    "Prevents churn: concerns handled early stay handled later.",
  ];
  return (
    <section className="mb-8">
      <Card tone="emerald">
        <h2 className="text-lg font-bold mb-3">
          Why Objection Handling Matters
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ------------------------------ Top Objections --------------------------- */
function TopObjections() {
  const blocks: Array<{ title: string; talk: string; moves: string[] }> = [
    {
      title: "It’s too expensive",
      talk: "Totally fair. Most clients felt that initially—until they mapped the outcome and time saved. If we achieve [result], this pays for itself in [timeframe]. Can I walk you through that math?",
      moves: [
        "ROI calculator live on call",
        "Anchor with outcome + timeline",
        "Offer PIF bonus / de‑risk guarantee",
      ],
    },
    {
      title: "I don’t have the budget right now",
      talk: "Understood. Budget timing matters. If the return window is [X], we can phase the rollout or use a plan so you benefit now and spread the cash out.",
      moves: [
        "Payment plan",
        "Smaller starter package",
        "90‑day outcome milestone",
      ],
    },
    {
      title: "I need to think about it",
      talk: "Of course. When folks say ‘think’, it’s usually one of three things: fit, outcome, or risk. Which one should we unpack together so your thinking is easier?",
      moves: [
        "Surface real blocker",
        "Summarize value in 3 bullets",
        "Schedule decision checkpoint",
      ],
    },
    {
      title: "I’m not ready yet",
      talk: "Timing is key. Based on your goals for the next 3–6 months, waiting costs [opportunity]. Want to see the difference between starting now vs. later?",
      moves: [
        "Opportunity‑cost framing",
        "Soft start / prep sprint",
        "Hold spot with refundable deposit",
      ],
    },
    {
      title: "I’ve tried this before—didn’t work",
      talk: "That’s frustrating. Let’s pinpoint what failed: offer, execution, or consistency? Our approach differs because [differentiator]. Here’s a quick case from someone in a similar spot.",
      moves: [
        "Root‑cause triage",
        "Show proof/case study",
        "Scope control + milestone reviews",
      ],
    },
    {
      title: "I need to talk to my partner/team",
      talk: "Great—what questions will they ask so we can prep succinct answers? I’m happy to join that call and keep it tight.",
      moves: [
        "Co‑decision call",
        "One‑pager recap email",
        "ROI summary tailored to stakeholder",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Top 6 Objections (with moves)</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {blocks.map((b, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-slate-700 mt-1">{b.talk}</p>
            <h4 className="mt-2 font-medium">Go‑to Moves</h4>
            <Bullets items={b.moves} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Tactics ------------------------------- */
function Tactics() {
  const tactics = [
    {
      title: "Active Listening",
      points: [
        "Let them fully explain; mirror key phrases.",
        "Validate: ‘That makes sense.’ ‘I hear you.’",
        "Clarify with one question before responding.",
      ],
      tone: "slate" as Tone,
    },
    {
      title: "Reframe the Objection",
      points: [
        "Translate price → ROI & outcomes.",
        "Translate time → speed‑to‑value & support.",
        "Translate risk → guarantees & phased scope.",
      ],
      tone: "indigo" as Tone,
    },
    {
      title: "Social Proof",
      points: [
        "Case study that mirrors their situation.",
        "Short testimonial + metric.",
        "Name the mechanism that produced the result.",
      ],
      tone: "emerald" as Tone,
    },
    {
      title: "Trial Close",
      points: [
        "‘If we solved [blocker], would you feel good moving forward?’",
        "Use to check if the objection is resolved.",
        "Queue next step (invoice/booking) when yes.",
      ],
      tone: "amber" as Tone,
    },
    {
      title: "Create Urgency",
      points: [
        "Capacity, pricing windows, or outcome deadlines.",
        "Opportunity cost of waiting (quantify).",
        "Time‑bound bonus (implementation, 1:1 sprint).",
      ],
      tone: "rose" as Tone,
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Key Tactics for Turning Objections into Wins
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tactics.map((t, i) => (
          <Card key={i} tone={t.tone}>
            <h3 className="font-semibold">{t.title}</h3>
            <Bullets items={t.points} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- Conversion Toolkit ------------------------- */
function ConversionToolkit() {
  const scripts = [
    "Diagnose → Acknowledge → Reframe → Proof → Trial close → Next step.",
    "‘On a scale of 1–10, how close are we?’ (If <8, ask ‘What would make it a 9–10?’)",
    "Decision check: ‘Is there anything else that would stop us from starting today?’",
  ];
  const follow = [
    "D1: Recap email (bullets + ROI + next step link).",
    "D3: Proof drop (case study matching their context).",
    "D7: Value add (loom walkthrough / quick win).",
  ];
  const assets = [
    "One‑pager recap (offer, value, de‑risk).",
    "ROI calc sheet (inputs from call).",
    "Guarantee terms & simple payment options.",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Conversion Toolkit</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Talk‑Tracks</h3>
          <Bullets items={scripts} />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">Follow‑Up Cadence</h3>
          <Bullets items={follow} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Assets</h3>
          <Bullets items={assets} />
        </Card>
      </div>
    </section>
  );
}

/* ---------------------------- Flow & Cadence ----------------------------- */
function FlowAndCadence() {
  const steps = [
    "Discovery → Fit → Value Map",
    "Demo / Outline → Proof",
    "Offer Stack → De‑risk",
    "Objections → Diagnose & Reframe",
    "Trial Close → Payment / Booking",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Recommended Call Flow</h2>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <Step label={s} />
            {i < steps.length - 1 ? <Arrow /> : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Cheat Sheet ----------------------------- */
function CheatSheet() {
  const rows: Array<[string, string, string, string]> = [
    [
      "Price",
      "‘What would make this a clear ROI inside 90 days?’",
      "Walk the math, anchor to outcome",
      "PIF bonus • plan • scope phase",
    ],
    [
      "Timing",
      "‘What changes by waiting 30–60 days?’",
      "Quantify opportunity cost",
      "Hold spot • prep sprint • refundable deposit",
    ],
    [
      "Trust",
      "‘What proof would make this a yes today?’",
      "Match case study + mechanism",
      "Guarantee • milestone reviews",
    ],
    [
      "Authority",
      "‘Who else weighs in & what do they need?’",
      "Prep a 1‑page ROI brief",
      "Joint call • recap deck",
    ],
  ];
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-3">
        Objection → Diagnose → Talk‑Track → Offer Move
      </h2>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="py-2 pr-4">Objection Type</th>
                <th className="py-2 pr-4">Diagnostic Question</th>
                <th className="py-2 pr-4">Talk‑Track</th>
                <th className="py-2">Offer Move</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-100 align-top">
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

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="mt-2 flex flex-wrap items-center gap-3">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
      >
        Print / Save as PDF
      </button>
      <span className="text-xs text-slate-500">
        Matrix UI style • Optimised for 1280–1440px (A4 landscape prints well)
      </span>
    </footer>
  );
}

/* ------------------------------- Micro UI -------------------------------- */
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

type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

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

function Bullets({ items = [] as string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
    </ul>
  );
}

function Arrow() {
  return <span className="mx-2 select-none text-slate-400">→</span>;
}

function Step({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">
      <span className="font-medium text-slate-800">{label}</span>
    </span>
  );
}
