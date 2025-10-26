import React from "react";

/*
  Profile Funnel — Lead Gen → Nurture/Qualify → Conversion → Ascension
  One‑pager React + Tailwind (Matrix theme style)
  - Soft cards, rounded corners, compact spacing, semantic color accents
  - MacBook Air friendly (1280–1440px)
  - Print / Save as PDF ready
*/

export default function ProfileFunnelOnePager() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <MasterFlow />
        <Swimlanes />
        <Inventory />
        <Automations />
        <Messaging />
        <Retargeting />
        <Outcomes />
        <KPIs />
        <Governance />
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
        Profile Funnel — End‑to‑End System
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Unified blueprint across roles, assets and processes: Traffic → Profile
        → Nurture/Qualify → DM/Setting → Sales → Onboarding → Fulfillment →
        Proof → Monetization.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Lead Gen</Tag>
        <Tag color="emerald">Nurture</Tag>
        <Tag color="amber">Qualification</Tag>
        <Tag color="rose">Conversion</Tag>
        <Tag color="slate">Fulfillment</Tag>
        <Tag color="violet">Ascension</Tag>
      </div>
    </header>
  );
}

/* ------------------------------- Master Flow ------------------------------ */
function MasterFlow() {
  const nodes: FlowNode[] = [
    {
      title: "Traffic Mechanism",
      owner: "Growth Specialist",
      bullets: [
        "#1 Video Ad",
        "#2 Carousel Ad",
        "#3 One-Pager Ad",
        "Profile Ads → IG/FB/LI Profile",
      ],
      tone: "indigo",
    },
    {
      title: "Profile Entry",
      owner: "IG / FB / LI Profile",
      bullets: ["Bio promise + CTA", "Pixel seeds RT audiences"],
      tone: "indigo",
    },
    {
      title: "Nurturing Mechanism",
      owner: "Content Manager",
      bullets: [
        "SF Content",
        "LF Content",
        "IG Story Sequence",
        "Dynamic Asset library",
        "Lead Magnet",
      ],
      tone: "emerald",
    },
    {
      title: "Story Ad System",
      owner: "Growth + Content",
      bullets: ["Proof → Lesson → Offer → CTA", "Boost with RT Ads"],
      tone: "rose",
    },
    {
      title: "Engagement",
      owner: "Engager",
      bullets: ["Inbound DM triage", "Warm Outbound to engagers"],
      tone: "amber",
    },
    {
      title: "Appointment",
      owner: "Apt Setter",
      bullets: [
        "DM re-qual → Book",
        "Reminders 24h / 4h / 1h",
        "Re-book 2nd Call (no-show)",
      ],
      tone: "amber",
    },
    {
      title: "Sales Call",
      owner: "Closer",
      bullets: [
        "Discovery → Offer",
        "Follow-ups if not closed",
        "Client $3k–$15k Offer",
      ],
      tone: "rose",
    },
    {
      title: "Onboarding",
      owner: "CSM",
      bullets: ["Onboarding Call", "Access & plan"],
      tone: "slate",
    },
    {
      title: "Fulfillment",
      owner: "Fulfillment",
      bullets: ["Deliver service", "Milestone tracking"],
      tone: "slate",
    },
    {
      title: "Proof Flywheel",
      owner: "Editor",
      bullets: ["Testimonial Cadence", "Client Results → assets"],
      tone: "emerald",
    },
    {
      title: "Monetization",
      owner: "Partner",
      bullets: ["Up-Sell / Resell / Cross-Sell", "MRR / Ascension"],
      tone: "violet",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Master Flow</h2>

      <div className="relative overflow-x-auto">
        {/* Rail */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-200" />

        {/* Steps */}
        <div className="relative flex items-stretch gap-4 min-w-[1100px] py-4 pr-6">
          {nodes.map((n, i) => (
            <div key={i} className="relative flex items-center">
              <StepCard node={n} />
              {i < nodes.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-2">
        Arrows indicate default path. Retargeting & follow-ups create loops back
        to Profile, Stories and DMs.
      </p>
    </section>
  );
}

/* ------------------------------ Helpers (UI) ------------------------------ */
function StepCard({ node }: { node: FlowNode }) {
  const toneBar: Record<Tone, string> = {
    slate: "bg-slate-200",
    indigo: "bg-indigo-200",
    emerald: "bg-emerald-200",
    amber: "bg-amber-200",
    rose: "bg-rose-200",
    violet: "bg-violet-200",
  };

  const ring: Record<Tone, string> = {
    slate: "ring-1 ring-slate-100",
    indigo: "ring-1 ring-indigo-100",
    emerald: "ring-1 ring-emerald-100",
    amber: "ring-1 ring-amber-100",
    rose: "ring-1 ring-rose-100",
    violet: "ring-1 ring-violet-100",
  };

  const t = (node.tone ?? "slate") as Tone;

  return (
    <div
      className={`w-[260px] flex-none bg-white border border-slate-200 rounded-2xl shadow-sm ${ring[t]}`}
    >
      {/* tone bar */}
      <div className={`h-1.5 rounded-t-2xl ${toneBar[t]}`} />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] font-semibold leading-5 text-slate-900">
            {node.title}
          </h3>
          <span className="text-[11px] leading-4 text-slate-500">
            {node.owner}
          </span>
        </div>
        <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
          {node.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center ml-1 mr-1">
      <svg
        className="h-6 w-10 text-slate-300 shrink-0"
        viewBox="0 0 40 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="0" y1="12" x2="32" y2="12" />
        <polyline points="32,6 38,12 32,18" fill="none" />
      </svg>
    </div>
  );
}

/* ------------------------------- Swimlanes ------------------------------- */
function Swimlanes() {
  const lanes: Lane[] = [
    {
      role: "Growth Specialist",
      tone: "indigo",
      items: [
        "Own Traffic Mechanism (#1 Video, #2 Carousel, #3 One‑Pager)",
        "Manage RT audiences & Story Ad spend",
        "Profile Ads → IG/FB/LI profile visits",
        "Measurement & iteration cadence",
      ],
    },
    {
      role: "Content Manager",
      tone: "emerald",
      items: [
        "Own Nurturing Mechanism (SF/LF calendar)",
        "Daily IG Story Sequence",
        "Lead Magnet offer alignment",
        "Curate Dynamic Assets; brief Editor",
      ],
    },
    {
      role: "Editor",
      tone: "emerald",
      items: [
        "Cut/caption SF, edit LF, carousels, one‑pagers",
        "Testimonial edits & proof reels",
        "Upload & library versioning",
      ],
    },
    {
      role: "Engager",
      tone: "amber",
      items: [
        "Reply to comments & DMs (Inbound)",
        "Warm Outbound to engagers/followers",
        "Micro‑qualify; trigger Follow‑up Sequence",
        "Hand‑off to Apt Setter",
      ],
    },
    {
      role: "Apt Setter",
      tone: "amber",
      items: [
        "DM re‑qual → booking link",
        "Reminders 24h / 4h / 1h",
        "Re‑book 2nd Call path",
      ],
    },
    {
      role: "Closer",
      tone: "rose",
      items: [
        "Sales Call: discovery → mapped offer",
        "Follow‑ups if not closed",
        "Close Client $3k–$15k Offer",
      ],
    },
    {
      role: "CSM",
      tone: "slate",
      items: ["Onboarding Call & access checklist", "Success plan & cadence"],
    },
    {
      role: "Fulfillment",
      tone: "slate",
      items: ["Deliverables, milestones, QA", "Signal wins for Testimonials"],
    },
    {
      role: "Partner",
      tone: "violet",
      items: ["Up‑Sell / Resell / Cross‑Sell", "MRR & Ascension programs"],
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold mb-3">Swimlanes — Roles & Ownership</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {lanes.map((lane, i) => (
          <Card key={i} tone={lane.tone}>
            <h3 className="font-semibold">{lane.role}</h3>
            <Bullets items={lane.items} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- Asset & System Inventory ---------------------- */
function Inventory() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Asset & System Inventory</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Profile Ads (Traffic)</h3>
          <Bullets
            items={[
              "#1 Video Ad",
              "#2 Carousel Ad",
              "#3 One‑Pager Ad",
              "Send to IG/FB/LI Profile",
            ]}
          />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">Nurture Stack (Profile)</h3>
          <Bullets
            items={[
              "SF Content",
              "LF Content",
              "IG Story Sequence (daily)",
              "Dynamic Asset library",
              "Lead Magnet",
            ]}
          />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Conversion Stack (DM → Call)</h3>
          <Bullets
            items={[
              "Story Ad System",
              "CTA (DM keyword / Book)",
              "Inbound & Warm Outbound",
              "Follow‑up Sequence",
              "Convo → Apt Setter → Sales Call",
              "Client $3k–$15k Offer",
            ]}
          />
        </Card>
        <Card tone="slate">
          <h3 className="font-semibold">Post‑Sale Stack</h3>
          <Bullets
            items={[
              "Onboarding Call",
              "CSM",
              "Fulfillment",
              "Testimonial Cadence",
              "Client Results → proof assets",
            ]}
          />
        </Card>
        <Card tone="violet" className="md:col-span-2">
          <h3 className="font-semibold">Monetization Expansion</h3>
          <Bullets
            items={[
              "Partner‑led Up‑Sell",
              "Resell",
              "Cross‑Sell",
              "MRR",
              "Ascension",
            ]}
          />
        </Card>
      </div>
    </section>
  );
}

/* --------------------------- Automations & Triggers ----------------------- */
function Automations() {
  const items = [
    "Ad Click → Profile Visit → pixel seeds RT audiences",
    "Profile Follow / Story Interaction → Engager starts Warm Outbound",
    "DM Keyword auto‑reply → Apt Setter with booking link + pre‑qual",
    "Booked → calendar invite + SMS reminders (24h/4h/1h)",
    "No‑show → Re‑book 2nd Call sequence + RT Ads with objection creatives",
    "Closed‑won → onboarding tasks + access + welcome",
    "Milestone hit → request testimonial → Editor packages proof → boost as RT Ad",
    "Churn risk → CSM save offers (downgrade, continuity perks)",
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Automations & Hand‑offs</h2>
      <Card>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ------------------------------ Messaging Map ---------------------------- */
function Messaging() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Messaging Sequences</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card tone="amber">
          <h3 className="font-semibold">DM Pre‑Booking</h3>
          <Bullets
            items={[
              "1h → asset nudge",
              "4h → value reminder",
              "24h → urgency",
              "48h → social proof",
              "72h → deadline",
            ]}
          />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Booked → Show</h3>
          <Bullets
            items={[
              "24h primer",
              "4h confirm",
              "1h checklist",
              "What to expect script",
            ]}
          />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Post‑Call (Not Closed)</h3>
          <Bullets
            items={[
              "Day 0 recap",
              "Day 2 micro‑win",
              "Day 4 deadline",
              "Day 7 last call",
            ]}
          />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Win‑Back / No‑Show</h3>
          <Bullets
            items={[
              "Objection‑led Dynamic Asset",
              "Limited slots / FOMO",
              "Re‑book 2nd Call",
            ]}
          />
        </Card>
      </div>
    </section>
  );
}

/* ------------------------------ Retargeting ------------------------------ */
function Retargeting() {
  const audiences = [
    "Profile visitors",
    "Story viewers",
    "Video viewers (25–95%)",
    "Post engagers",
    "Site visitors / Lead Magnet opt‑ins",
  ];
  const creatives = [
    "Story Ad System (proof → lesson → offer → CTA)",
    "Dynamic Assets by objection (price/time/risk/fit)",
    "One‑Pager Ad (re‑frame offer)",
    "Carousel with client results",
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Retargeting Loops (RT Ads)</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Audiences</h3>
          <Bullets items={audiences} />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Creative Sets</h3>
          <Bullets items={creatives} />
        </Card>
      </div>
    </section>
  );
}

/* ------------------------------ Outcomes & Paths ------------------------- */
function Outcomes() {
  const items = [
    "Inbound → Convo → Apt Setter → Sales Call → Closer → Client $3k–$15k Offer",
    "Warm Outbound → same path",
    "Lead Magnet → email/SMS nurture → DM CTA / Book → path continues",
    "No‑show → Re‑book 2nd Call",
    "Won → Onboarding Call → CSM → Fulfillment → Testimonial Cadence → Client Results → Partner (Up‑Sell / Resell / Cross‑Sell / MRR / Ascension)",
    "Lost → RT Ads + nurture until re‑activation",
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Outcomes & Paths</h2>
      <Card>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ----------------------------------- KPIs -------------------------------- */
function KPIs() {
  const rows = [
    {
      stage: "Traffic",
      metrics: ["CTR", "CPC", "Profile Visits", "View‑through %"],
    },
    {
      stage: "Profile/Nurture",
      metrics: [
        "Follower → Convo %",
        "Story reach",
        "Story reply rate",
        "LM CVR",
      ],
    },
    {
      stage: "DM/Setting",
      metrics: ["Qualified %", "Book %", "No‑show %", "Re‑book %"],
    },
    {
      stage: "Sales",
      metrics: ["Show %", "Close %", "ASP ($3k–$15k)", "Sales cycle (days)"],
    },
    {
      stage: "Post‑Sale",
      metrics: [
        "TTV",
        "NPS",
        "Testimonial rate",
        "Case‑worthy %",
        "Ascension %",
      ],
    },
    { stage: "Global", metrics: ["CAC", "LTV", "Payback", "ROAS"] },
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Minimum KPI Set</h2>
      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4">Stage</th>
              <th className="py-2">Metrics</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="py-2 pr-4 font-medium text-slate-800">
                  {r.stage}
                </td>
                <td className="py-2 text-slate-700">{r.metrics.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}

/* -------------------------------- Governance ------------------------------ */
function Governance() {
  const rhythm = [
    "Daily: Stories & DMs",
    "2–3 SF posts/day",
    "Weekly LF content",
    "Weekly ad iteration",
    "Weekly metric review",
  ];
  const libraries = [
    "Ad angles",
    "Story templates",
    "Dynamic Assets",
    "Objections bank",
  ];
  const checklists = [
    "Setter hand‑off",
    "Closer prep",
    "Onboarding access",
    "Testimonial capture",
  ];
  const versioning = ["Label every asset by stage", "Map objection handled"];
  const slas = [
    "Engager/Setter response time",
    "Closer proposal turnaround",
    "CSM onboarding within 48h",
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">
        Governance — Repeatability & Scale
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">Operating Rhythm</h3>
          <Bullets items={rhythm} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Libraries</h3>
          <Bullets items={libraries} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Checklists</h3>
          <Bullets items={checklists} />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">Versioning & SLAs</h3>
          <Bullets items={[...versioning, ...slas]} />
        </Card>
      </div>
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

function Tag({
  children,
  color = "slate" as Tone,
}: {
  children: React.ReactNode;
  color?: Tone;
}) {
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

function Bullets({ items = [] as string[] }: { items?: string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}



/* --------------------------------- Types --------------------------------- */
interface FlowNode {
  title: string;
  owner: string;
  bullets: string[];
  tone?: Tone;
}
interface Lane {
  role: string;
  items: string[];
  tone?: Tone;
}
