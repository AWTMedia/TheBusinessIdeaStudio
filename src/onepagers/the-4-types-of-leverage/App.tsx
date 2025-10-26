import React from "react";

/*
  The 4 Types of Leverage — One‑Pager
  React + TailwindCSS (Matrix theme style)
  - MacBook Air friendly (1280–1440px)
  - Soft cards, subtle rings by tone, compact spacing
  - Print / Save as PDF ready
*/

export default function LeverageOnePager() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <Intro />
        <Levers />
        <Decision />
        <Template />
        <ExampleStack />
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
        The 4 Types of Leverage
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Leverage is how you <strong>do more with less</strong>: outputs go up
        while time, cost, and energy stay flat or go down. Stack 2–3 levers to
        create compounding returns without compounding effort.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Automation</Tag>
        <Tag color="amber">Scale</Tag>
        <Tag color="rose">Ops</Tag>
      </div>
    </header>
  );
}

/* ---------------------------------- Intro -------------------------------- */
function Intro() {
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Definition</h2>
        <p className="text-sm leading-6">
          <strong>Leverage</strong> = higher output per unit of input. Use
          software, media, capital, and people to multiply your impact while
          preserving focus. The goal:{" "}
          <em>build systems that sell, deliver, and learn on their own</em>.
        </p>
      </Card>
    </section>
  );
}

/* --------------------------------- Levers --------------------------------- */
function Levers() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">The Four Levers (expanded)</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <LeverCard
          tone="emerald"
          icon="🧠"
          title="Code / Technology"
          definition="Use software, code, and AI to remove manual effort and run 24/7."
          signals={[
            "Repetitive tasks >3×/week",
            "Delays from handoffs or approvals",
            "Data entry errors and missing tags",
            "Team moves info more than outcomes",
          ]}
          plays={[
            "CRM: capture → enrich → route → SLA alerts",
            "Content ops: upload → caption → resize → schedule",
            "RevOps: checkout → access → NPS/UGC → affiliate invite",
            "AI assistants: FAQ, drafts, call notes → next steps",
          ]}
          kpis={[
            "Hours saved/seat: 5–10h/wk",
            "Automation success ≥ 98%",
            "Lead response < 5 min",
            "Data completeness ≥ 95%",
          ]}
          risks={["Automation spaghetti", "Silent failures", "Tool lock‑in"]}
          mitigations={[
            "Flow maps + naming",
            "Alerts + retries",
            "Open APIs + exports",
          ]}
          sprint={[
            "Day 1–2 map system",
            "Day 3–5 build MVP flow",
            "Day 6 QA + edge cases",
            "Day 7 ship; Week 2 add alerts & dashboard",
          ]}
        />
        <LeverCard
          tone="indigo"
          icon="🎥"
          title="Media"
          definition="Create once, distribute many. Content sells without meetings."
          signals={[
            "Repeat explanations on calls",
            "Low inbound, high trust gap",
            "Prospects ask for proof/how‑it‑works",
          ]}
          plays={[
            "Evergreen explainers (offer, process, ROI)",
            "Proof library (case studies, testimonials)",
            "ICP one‑pagers & carousels",
            "3–5 email lessons that answer objections",
          ]}
          kpis={[
            "Content‑assisted pipeline > 40%",
            "Short VTR > 35% • LP CTR > 3%",
            "+20–30% booking rate with content",
          ]}
          risks={[
            "Volume without intent",
            "Inconsistent quality",
            "Platform mismatch",
          ]}
          mitigations={[
            "Topic map by funnel stage",
            "Templates + review SOP",
            "Native packaging per channel",
          ]}
          sprint={[
            "Script 3 explainers",
            "Record 90 min (studio or Zoom)",
            "Edit → 12 shorts + 3 long",
            "Publish with CTAs; set retarget audiences",
          ]}
        />
        <LeverCard
          tone="amber"
          icon="💰"
          title="Capital"
          definition="Use money to buy speed, reach, and capacity (ads, tools, talent)."
          signals={[
            "Offer & message proven; need volume",
            "Time‑sensitive opportunity",
            "Constraint solvable by spend (editing, data)",
          ]}
          plays={[
            "Boost winners (retarget top UGC/shorts)",
            "Hire to remove constraints (editor, ops VA)",
            "Tool upgrades for analytics & enrichment",
            "Time‑bound promos to accelerate cash",
          ]}
          kpis={[
            "Payback < 30–45d",
            "ROAS/MER by channel",
            "$ per booked/qualified",
            "Throughput gained",
          ]}
          risks={["Spend pre‑PMF", "Vendor drift", "Tool bloat"]}
          mitigations={[
            "Gate by leading indicators",
            "SOW + weekly metrics",
            "Quarterly stack audit",
          ]}
          sprint={[
            "Day 1 budget + guardrails",
            "Day 2 creatives",
            "Day 3–10 test 3 hooks × 2 offers",
            "Day 11–14 scale 2 winners; pause rest",
          ]}
        />
        <LeverCard
          tone="rose"
          icon="👥"
          title="People"
          definition="Delegate to specialists so you stay in your highest‑value work."
          signals={[
            "Founder calendar > 60% delivery/admin",
            "Quality drops when volume rises",
            "Projects stall from context switching",
          ]}
          plays={[
            "Ops Manager + Editor/Creative core",
            "Setter/Closer split",
            "1‑page SOPs + 3‑min Looms",
            "Daily rhythm: standup → focus → EOD scorecard",
          ]}
          kpis={[
            "Founder in genius zone ≥ 70%",
            "SLA hit ≥ 95%",
            "Revisions ≤ 1.5 avg",
            "Ramp ≤ 4 weeks",
          ]}
          risks={["Shadow work", "Knowledge loss", "Mis‑hire"]}
          mitigations={[
            "Scorecards + demos",
            "Central SOPs + x‑training",
            "Trial projects + clear criteria",
          ]}
          sprint={[
            "Hire part‑time editor + ops VA",
            "Define outputs + SLAs",
            "Daily async check‑ins",
            "End‑of‑sprint review & tighten SOPs",
          ]}
        />
      </div>
    </section>
  );
}

function LeverCard({
  tone,
  icon,
  title,
  definition,
  signals,
  plays,
  kpis,
  risks,
  mitigations,
  sprint,
}: {
  tone: Tone;
  icon: string;
  title: string;
  definition: string;
  signals: string[];
  plays: string[];
  kpis: string[];
  risks: string[];
  mitigations: string[];
  sprint: string[];
}) {
  return (
    <Card tone={tone}>
      <div className="flex items-start gap-3">
        <div className="text-xl leading-none select-none">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-slate-700 mt-1">{definition}</p>
        </div>
      </div>
      <div className="mt-3 grid gap-3">
        <Sub title="When to use (signals)">
          <Bullets items={signals} />
        </Sub>
        <Sub title="80/20 plays">
          <Bullets items={plays} />
        </Sub>
        <Sub title="KPIs & floors">
          <Chips items={kpis} tone={tone} />
        </Sub>
        <Sub title="Risks → Mitigations">
          <Bullets
            items={risks.map(
              (r, i) => `${r} → ${mitigations[i] ?? "Mitigate"}`
            )}
          />
        </Sub>
        <Sub title="14‑day sprint plan">
          <Bullets items={sprint} />
        </Sub>
      </div>
    </Card>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-slate-800">{title}</h4>
      <div className="mt-1">{children}</div>
    </div>
  );
}

/* ---------------------------- Decision Framework ------------------------- */
function Decision() {
  const rules = [
    "No proof? → Media first (case studies, explainers)",
    "Too much manual? → Code (automate the obvious)",
    "Proof + process, need volume? → Capital (boost winners/hire capacity)",
    "Founder overloaded? → People (ops + creative seats)",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Choosing Your Next Lever</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="slate">
          <p className="text-sm leading-6">
            Start with one primary lever and one secondary. Ship a 14‑day
            sprint, review weekly, then stack the next lever. Typical order for
            small teams: <strong>Media → Code → People → Capital</strong>.
          </p>
          <Bullets items={rules} />
        </Card>
        <Card tone="violet">
          <h3 className="font-semibold mb-1">Compound Combos</h3>
          <Bullets
            items={[
              "Code × Media: auto‑repurpose & distribute UGC",
              "Code × People: assistants & QA guardrails",
              "Capital × Media: amplify top‑performing proof",
              "Capital × People: specialist sprints to remove constraints",
            ]}
          />
        </Card>
      </div>
    </section>
  );
}

/* ------------------------- Leverage Map (Template) ----------------------- */
function Template() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Leverage Map — Fill‑in Template
      </h2>
      <Card tone="indigo">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <KV label="Goal" value="e.g., +40 qualified calls / month" />
          <KV label="Primary Lever" value="(Media / Code / Capital / People)" />
          <KV label="Secondary Lever(s)" value="Pick 1–2" />
          <KV label="Review Cadence" value="Weekly or Bi‑weekly" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <Card>
            <h4 className="font-medium">Key Plays</h4>
            <Bullets items={["Play #1", "Play #2", "Play #3"]} />
            <h4 className="font-medium mt-3">KPIs & Floors</h4>
            <Bullets
              items={["e.g., $/Booked ≤ $90", "Show ≥ 75%", "Response < 5m"]}
            />
          </Card>
          <Card>
            <h4 className="font-medium">Risks & Mitigation</h4>
            <Bullets items={["Risk → Mitigation", "Risk → Mitigation"]} />
            <h4 className="font-medium mt-3">14‑Day Sprint</h4>
            <Bullets
              items={[
                "Day 1–2 map",
                "Day 3–5 build",
                "Day 6 QA",
                "Day 7 ship",
                "Week 2 iterate",
              ]}
            />
          </Card>
        </div>
      </Card>
    </section>
  );
}

/* ----------------------------- Example Stack ----------------------------- */
function ExampleStack() {
  const items = [
    "Media: 6 flagship explainers + weekly wins reel",
    "Code: DM triage → CRM tags → setter routing → reminders → UGC capture → affiliate invite",
    "People: Ops Manager + Editor (12 shorts/wk)",
    "Capital: Retarget top 5 proof assets; hire conversion copy sprint",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Example Stack — Profile Funnel Business
      </h2>
      <Card tone="amber">
        <Bullets items={items} />
        <p className="text-sm text-slate-700 mt-2">
          <strong>Expected lift (30–45 days):</strong> +20–30% booked calls,
          −25% response time, +15% show rates.
        </p>
      </Card>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="mt-10 flex flex-wrap items-center gap-3">
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

/* ------------------------------- UI primitives --------------------------- */
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
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Chips({ items = [] as string[], tone = "slate" as Tone }) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-50 text-slate-700 border-slate-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
  };
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span key={i} className={`px-2 py-1 rounded-full border ${map[tone]}`}>
          {t}
        </span>
      ))}
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="text-sm font-medium text-slate-800">{value}</div>
    </div>
  );
}
