import React, { useMemo, useState } from "react";

/*
  Modern Business Blueprint — Contents (No Embeds)
  React + Tailwind (Matrix theme aesthetic)
  - Logical “book” flow of all your one-pagers
  - Left TOC with anchors; right side shows cards that open in new tabs
  - Search across titles, blurbs and tags
  - MacBook Air friendly (1280–1440px) & print-ready
*/

/* ============================== DATA (Book Flow) ============================== */

type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

type Entry = {
  id: string;
  title: string;
  url: string;
  blurb: string;
  tags?: string[];
  tone?: Tone;
};

type Section = {
  id: string;
  title: string;
  purpose: string;
  tone?: Tone;
  entries: Entry[];
};

const SECTIONS: Section[] = [
  {
    id: "foundations",
    title: "Foundations & Operating System",
    purpose: "How the business thinks, grows, and positions before systems.",
    tone: "slate",
    entries: [
      {
        id: "bos",
        title: "Branding Operating System (BOS)",
        url: "https://3fs48k-5173.csb.app/",
        blurb: "Brand pairing theory, metrics, and practical operating rules.",
        tags: ["Brand", "Strategy", "Positioning"],
        tone: "indigo",
      },
      {
        id: "leverage",
        title: "The 4 Types of Leverage",
        url: "https://ycg64q-5173.csb.app/",
        blurb: "Code, Media, Capital, People — stackable levers to scale.",
        tags: ["Ops", "Scale"],
        tone: "emerald",
      },
      {
        id: "lead-flow-models",
        title: "The 4 Types of Lead Flow Models",
        url: "https://k9mx6n-5173.csb.app/",
        blurb:
          "Inbound, Outbound, Referral, Paid — the core acquisition modes.",
        tags: ["Acquisition", "Design"],
        tone: "amber",
      },
    ],
  },
  {
    id: "market-offer",
    title: "Market, ICP & Offers",
    purpose: "Define who you serve and the economics behind the promise.",
    tone: "indigo",
    entries: [
      {
        id: "target-market",
        title: "Target Market Identification — Template",
        url: "https://522ts6-5173.csb.app/",
        blurb: "ICP worksheet for niches, psychographics and buying triggers.",
        tags: ["ICP", "Research"],
        tone: "indigo",
      },
      {
        id: "productize",
        title: "Productizing a Skill into a Scalable Service",
        url: "https://lhv3rs-5173.csb.app/",
        blurb: "Package expertise into repeatable, SOP-driven services.",
        tags: ["Offer", "SOPs"],
        tone: "emerald",
      },
      {
        id: "pricing",
        title: "Offer & Pricing Economics Calculator",
        url: "https://d2399d-5173.csb.app/",
        blurb: "Price floors/targets, margin and guarantee rules from COGS.",
        tags: ["Finance", "Offer"],
        tone: "amber",
      },
      {
        id: "ugc-money-models",
        title: "UGC Brands — Growth Money Models",
        url: "https://wf4w78-5173.csb.app/",
        blurb: "Zero-ad-spend growth with UGC capture + AI affiliate engine.",
        tags: ["UGC", "Loops"],
        tone: "rose",
      },
    ],
  },
  {
    id: "content-scale",
    title: "Content Engine & Business Scale",
    purpose: "Build omnipresence, create proof, and prepare for scale.",
    tone: "emerald",
    entries: [
      {
        id: "platform-understanding",
        title: "Content Production System — Platform Understanding",
        url: "https://hkvknk-5173.csb.app/",
        blurb: "Formats, pacing, and mindset per platform; Hook → Body → CTA.",
        tags: ["Content", "Platforms"],
        tone: "emerald",
      },
      {
        id: "content-scale",
        title: "Content Production & Vertical Business Scale",
        url: "https://jcml3k-5173.csb.app/",
        blurb: "Systemize ideate → produce → repurpose → distribute → iterate.",
        tags: ["Ops", "Scale"],
        tone: "indigo",
      },
      {
        id: "scale-money",
        title: "Vertical, Horizontal Scale & Money Models",
        url: "https://77jrqx-5173.csb.app/",
        blurb: "Duplicate systems (horizontal) vs optimize offers (vertical).",
        tags: ["Scale", "Money Models"],
        tone: "amber",
      },
      {
        id: "asset-testing",
        title: "Content Asset & Testing Matrix",
        url: "https://h8sptd-5173.csb.app/",
        blurb: "Paid + organic creative grid, variables, iteration cadence.",
        tags: ["Creative", "Testing"],
        tone: "rose",
      },
    ],
  },
  {
    id: "pipeline",
    title: "Pipeline & Funnel Systems",
    purpose: "Move qualified attention to conversation to booked calls.",
    tone: "rose",
    entries: [
      {
        id: "profile-funnel",
        title: "Profile Funnel — End-to-End System",
        url: "https://cyj9wf-5173.csb.app/",
        blurb:
          "Traffic → Profile entry → Nurture → Story Ads → Appointment → Sales → Proof.",
        tags: ["Funnel", "Organic+Paid"],
        tone: "rose",
      },
      {
        id: "client-pipeline",
        title: "Client Pipeline Systems — One Pager",
        url: "https://xt8425-5173.csb.app/",
        blurb: "Lead gen, nurture, and conversion cadences in one glance.",
        tags: ["Pipeline", "Ops"],
        tone: "slate",
      },
      {
        id: "full-pipeline-matrix",
        title: "Full Pipeline Matrix",
        url: "https://qc9qrs-5173.csb.app/",
        blurb: "Macro view of stages, assets, and ownership.",
        tags: ["Architecture"],
        tone: "indigo",
      },
    ],
  },
  {
    id: "sales",
    title: "Sales, Objections & Conversion",
    purpose: "Handle objections cleanly and close with integrity.",
    tone: "amber",
    entries: [
      {
        id: "sales-objections",
        title: "Sales, Objections, Handling & Conversion",
        url: "https://w3slj8-5173.csb.app/",
        blurb:
          "Top objections with talk-tracks, trial closes, urgency & follow-ups.",
        tags: ["Sales", "Playbook"],
        tone: "amber",
      },
      {
        id: "optimization-playbook",
        title: "Optimization Playbook — Issue → Action",
        url: "https://6dmvw5-5173.csb.app/",
        blurb: "If X underperforms, do Y — diagnostics and iteration.",
        tags: ["Diagnostics", "Iteration"],
        tone: "emerald",
      },
    ],
  },
  {
    id: "ops",
    title: "Operations, Roles & Handoffs",
    purpose: "Who does what, when — and how clients move to value & proof.",
    tone: "slate",
    entries: [
      {
        id: "role-playbooks",
        title: "Company Role Playbooks — One Pager",
        url: "https://fpn3nn-5173.csb.app/",
        blurb:
          "Clear ownership by function: Founder, Setter, Closer, Ops, etc.",
        tags: ["People", "Playbooks"],
        tone: "slate",
      },
      {
        id: "onboarding-kit",
        title: "Client Onboarding & Handoff Kit — Matrix Blueprint",
        url: "https://4ntfsm-5173.csb.app/",
        blurb:
          "Won deal → payment → onboarding → micro-win → testimonial loop.",
        tags: ["Handoffs", "SOPs"],
        tone: "indigo",
      },
    ],
  },
  {
    id: "execution",
    title: "Execution Sprints",
    purpose: "Build in W-3..W-1. Sell in W1..W3. Ship daily.",
    tone: "indigo",
    entries: [
      {
        id: "ninety-day",
        title: "90-Day Client Implementation Matrix",
        url: "https://6x8d2n-5173.csb.app/",
        blurb: "Quarterly pacing for infra, content, pipeline and proof.",
        tags: ["Plan", "Quarter"],
        tone: "indigo",
      },
      {
        id: "ten-k",
        title: "$10,000 in 6 Weeks — Challenge Blueprint",
        url: "https://fcrdnn-5173.csb.app/",
        blurb: "Three weeks to build; three weeks to sell. Guardrails + Gantt.",
        tags: ["Sprint", "Revenue"],
        tone: "emerald",
      },
    ],
  },
  {
    id: "finance",
    title: "Founder Finance & Economics",
    purpose: "Cost, risk, margin and capacity so scaling is sane.",
    tone: "violet",
    entries: [
      {
        id: "founder-finance",
        title: "Founder Financial Analysis Matrix",
        url: "https://664lw3-5173.csb.app/",
        blurb: "Budgeting, projections and target costing across processes.",
        tags: ["Finance", "Risk"],
        tone: "violet",
      },
    ],
  },
];

/* ============================== APP ============================== */

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return SECTIONS;
    const q = query.toLowerCase();
    return SECTIONS.map((s) => ({
      ...s,
      entries: s.entries.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.blurb.toLowerCase().includes(q) ||
          (e.tags || []).some((t) => t.toLowerCase().includes(q))
      ),
    })).filter((s) => s.entries.length > 0);
  }, [query]);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6">
          {/* TOC */}
          <aside className="lg:sticky lg:top-6 h-max">
            <Card tone="slate" className="mb-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles, blurbs, tags…"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <p className="text-[11px] text-slate-500 mt-2">
                Tip: try “offer”, “UGC”, “sales”, “SOP”, “pricing”, “timeline”.
              </p>
            </Card>

            <nav className="space-y-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50"
                >
                  {s.title}
                </a>
              ))}
            </nav>

            <div className="mt-4">
              <button
                onClick={() => window.print()}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 text-sm"
              >
                Print / Save as PDF
              </button>
            </div>
          </aside>

          {/* CONTENT LIST */}
          <section className="space-y-8">
            {filtered.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
            {filtered.length === 0 && (
              <Card tone="amber">
                <p className="text-sm">
                  No matches. Try a different search term.
                </p>
              </Card>
            )}
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}

/* ============================== SECTIONS ============================== */

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="text-xl font-bold">{section.title}</h2>
      <p className="text-sm text-slate-600 mt-1">{section.purpose}</p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
        {section.entries.map((e) => (
          <EntryCard key={e.id} entry={e} />
        ))}
      </div>
    </section>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <Card tone={entry.tone ?? "slate"}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-6">{entry.title}</h3>
        <a
          href={entry.url}
          target="_blank"
          rel="noreferrer"
          title="Open in new tab"
          className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900 text-white text-xs hover:bg-slate-700"
        >
          Open ↗
        </a>
      </div>
      <p className="text-sm text-slate-700 mt-1">{entry.blurb}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {(entry.tags || []).slice(0, 4).map((t, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-black/5"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}

/* ============================== UI PRIMITIVES ============================== */

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Modern Business Blueprint — Contents
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        A logical, print-ready index of your one-pagers. Browse sections, then
        open any page in a new tab. No embeds, same Matrix aesthetic.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Systems</Tag>
        <Tag color="amber">Revenue</Tag>
        <Tag color="rose">Proof</Tag>
        <Tag color="slate">Operations</Tag>
        <Tag color="violet">Finance</Tag>
      </div>
    </header>
  );
}

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

/* ============================== FOOTER ============================== */

function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap items-center gap-3">
      <span className="text-xs text-slate-500">
        Matrix theme • Optimised for 1280–1440px (MacBook Air). A4 landscape
        recommended for printing.
      </span>
    </footer>
  );
}
