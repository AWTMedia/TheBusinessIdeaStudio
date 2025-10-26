import React, { useMemo, useState } from "react";

/*
  Modern Business Blueprint — Navigator
  React + Tailwind (Matrix theme aesthetic)
  - Left TOC with sections in a logical "book" flow
  - Search across all entries
  - Right viewer embeds the selected one-pager (iframe) with open-in-new-tab, print-friendly
  - MacBook Air friendly (1280–1440px)
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
    id: "0-foundations",
    title: "Foundations & Operating System",
    purpose:
      "Set how the business thinks, grows, and positions itself before building systems.",
    tone: "slate",
    entries: [
      {
        id: "bos",
        title: "Branding Operating System (BOS)",
        url: "https://3fs48k-5173.csb.app/",
        blurb:
          "Brand fundamentals, pairing theory, and practical metrics to grow brand equity.",
        tags: ["Brand", "Strategy", "Positioning"],
        tone: "indigo",
      },
      {
        id: "leverage",
        title: "The 4 Types of Leverage",
        url: "https://ycg64q-5173.csb.app/",
        blurb:
          "Code, Media, Capital, People — stackable levers to do more with less.",
        tags: ["Ops", "Scale"],
        tone: "emerald",
      },
      {
        id: "lead-flow-models",
        title: "The 4 Types of Lead Flow Models",
        url: "https://k9mx6n-5173.csb.app/",
        blurb:
          "Inbound, Outbound, Referral, Paid — choose your core acquisition engine.",
        tags: ["Acquisition", "Design"],
        tone: "amber",
      },
    ],
  },
  {
    id: "1-market-offer",
    title: "Market, ICP & Offers",
    purpose:
      "Define the people you serve and the economic engine behind your promise.",
    tone: "indigo",
    entries: [
      {
        id: "target-market",
        title: "Target Market Identification — Template",
        url: "https://522ts6-5173.csb.app/",
        blurb:
          "Editable template for ICP, psychographics, behaviors, and niche tags.",
        tags: ["ICP", "Research"],
        tone: "indigo",
      },
      {
        id: "productize",
        title: "Productizing a Skill into a Scalable Service",
        url: "https://lhv3rs-5173.csb.app/",
        blurb:
          "Turn expertise into a repeatable service with packages, SOPs and pricing.",
        tags: ["Offer", "SOPs"],
        tone: "emerald",
      },
      {
        id: "pricing",
        title: "Offer & Pricing Economics Calculator",
        url: "https://d2399d-5173.csb.app/",
        blurb:
          "Set price floors/targets, margin and guarantee rules from COGS & capacity.",
        tags: ["Finance", "Offer"],
        tone: "amber",
      },
      {
        id: "ugc-money-models",
        title: "UGC Brands — Growth Money Models",
        url: "https://wf4w78-5173.csb.app/",
        blurb:
          "Zero-ad-spend growth with UGC capture + AI affiliate engine (case playbook).",
        tags: ["UGC", "Case"],
        tone: "rose",
      },
    ],
  },
  {
    id: "2-content-brand",
    title: "Content Engine & Business Scale",
    purpose:
      "Build omnipresence, create proof, and prepare both vertical & horizontal scale.",
    tone: "emerald",
    entries: [
      {
        id: "platform-understanding",
        title: "Content Production System — Platform Understanding",
        url: "https://hkvknk-5173.csb.app/",
        blurb: "Formats, pacing, mindset per platform; Hook → Body → CTA.",
        tags: ["Content", "Platforms"],
        tone: "emerald",
      },
      {
        id: "content-scale",
        title: "Content Production & Vertical Business Scale",
        url: "https://jcml3k-5173.csb.app/",
        blurb:
          "Systemize ideate → produce → repurpose → distribute → track → iterate.",
        tags: ["Ops", "Scale"],
        tone: "indigo",
      },
      {
        id: "scale-money",
        title: "Vertical, Horizontal Scale & Money Models",
        url: "https://77jrqx-5173.csb.app/",
        blurb:
          "When to duplicate systems (horizontal) vs. optimize the money model (vertical).",
        tags: ["Scale", "Money Models"],
        tone: "amber",
      },
      {
        id: "asset-testing",
        title: "Content Asset & Testing Matrix",
        url: "https://h8sptd-5173.csb.app/",
        blurb:
          "Paid + organic creative grid, testing variables, and iteration cadence.",
        tags: ["Creative", "Testing"],
        tone: "rose",
      },
    ],
  },
  {
    id: "3-pipeline-funnel",
    title: "Pipeline & Funnel Systems",
    purpose:
      "Attract qualified attention, move it to conversation, then to booked calls.",
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
        blurb: "Macro view of system stages, assets, and ownership.",
        tags: ["Architecture"],
        tone: "indigo",
      },
    ],
  },
  {
    id: "4-sales-conversion",
    title: "Sales, Objections & Conversion",
    purpose:
      "Structure high-leverage conversations, handle objections, and close cleanly.",
    tone: "amber",
    entries: [
      {
        id: "sales-objections",
        title: "Sales, Objections, Handling & Conversion",
        url: "https://w3slj8-5173.csb.app/",
        blurb:
          "Top objections with talk-tracks, trial closes, urgency, and follow-ups.",
        tags: ["Sales", "Playbook"],
        tone: "amber",
      },
      {
        id: "optimization-playbook",
        title: "Optimization Playbook — Issue → Action",
        url: "https://6dmvw5-5173.csb.app/",
        blurb:
          "If X underperforms, do Y. A/B testing, content pivots, pipeline fixes.",
        tags: ["Diagnostics", "Iteration"],
        tone: "emerald",
      },
    ],
  },
  {
    id: "5-ops-roles-onboarding",
    title: "Operations, Roles & Handoffs",
    purpose:
      "Who does what, when — and how clients move from sale to value to proof.",
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
          "From won deal → payment → onboarding → micro-win → testimonial loop.",
        tags: ["Handoffs", "SOPs"],
        tone: "indigo",
      },
    ],
  },
  {
    id: "6-execution-timelines",
    title: "Execution Sprints",
    purpose:
      "Lay out the work. Build in weeks −3 to −1. Sell in weeks 1 to 3. Ship daily.",
    tone: "indigo",
    entries: [
      {
        id: "ninety-day",
        title: "90-Day Client Implementation Matrix",
        url: "https://6x8d2n-5173.csb.app/",
        blurb:
          "Quarterly view to pace infrastructure, content, pipeline and proof.",
        tags: ["Plan", "Quarter"],
        tone: "indigo",
      },
      {
        id: "ten-k",
        title: "$10,000 in 6 Weeks — Challenge Blueprint",
        url: "https://fcrdnn-5173.csb.app/",
        blurb:
          "Three weeks to build; three weeks to sell. Guardrails and Gantt timeline.",
        tags: ["Sprint", "Revenue"],
        tone: "emerald",
      },
    ],
  },
  {
    id: "7-finance",
    title: "Founder Finance & Economics",
    purpose:
      "Understand cost, risk, margin and capacity so pricing and scaling are sane.",
    tone: "violet",
    entries: [
      {
        id: "founder-finance",
        title: "Founder Financial Analysis Matrix",
        url: "https://664lw3-5173.csb.app/",
        blurb:
          "Budgeting, risk projections, and target costing across processes.",
        tags: ["Finance", "Risk"],
        tone: "violet",
      },
    ],
  },
];

/* ============================== APP ============================== */

export default function App() {
  const [query, setQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id);
  const [selected, setSelected] = useState<Entry | null>(
    SECTIONS[0].entries[0]
  );

  const activeSection = useMemo(
    () => SECTIONS.find((s) => s.id === activeSectionId)!,
    [activeSectionId]
  );

  const filteredSections = useMemo(() => {
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
        <div className="grid grid-cols-1 lg:grid-cols-[330px,1fr] gap-6">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 h-max">
            <Card tone="slate" className="mb-4">
              <div className="flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search titles, tags, blurbs…"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Tip: try “offer”, “UGC”, “sales”, “SOP”, “pricing”, “timeline”.
              </p>
            </Card>

            <nav className="space-y-3">
              {filteredSections.map((section) => (
                <SectionNav
                  key={section.id}
                  section={section}
                  active={section.id === activeSectionId}
                  onPick={(entry) => {
                    setActiveSectionId(section.id);
                    setSelected(entry);
                  }}
                />
              ))}
            </nav>
          </aside>

          {/* Viewer */}
          <section>
            {!selected ? <Welcome /> : <Viewer entry={selected} />}
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}

/* ============================== UI PRIMITIVES ============================== */

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Modern Business Blueprint — Navigator
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        A curated “book” of your one-pagers in a logical build → launch → scale
        flow. Browse, embed, and open any page in a single place.
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

/* ============================== SIDEBAR COMPONENTS ============================== */

function SectionNav({
  section,
  active,
  onPick,
}: {
  section: Section;
  active: boolean;
  onPick: (entry: Entry) => void;
}) {
  return (
    <Card tone={section.tone ?? "slate"}>
      <h3 className="font-semibold">{section.title}</h3>
      <p className="text-xs text-slate-600 mt-1">{section.purpose}</p>
      <ul className="mt-3 space-y-2">
        {section.entries.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => onPick(e)}
              className={`w-full text-left rounded-xl px-3 py-2 border transition ${
                active
                  ? "border-slate-300 hover:bg-slate-50"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
              title={e.blurb}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{e.title}</span>
                {e.tone ? <Dot tone={e.tone} /> : null}
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {(e.tags || []).slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-black/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Dot({ tone = "slate" as Tone }) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-400",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
  };
  return <span className={`h-2 w-2 rounded-full ${map[tone]}`} />;
}

/* ============================== VIEWER ============================== */

function Viewer({ entry }: { entry: Entry }) {
  const [failed, setFailed] = useState(false);

  return (
    <Card tone="slate">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">{entry.title}</h2>
          <p className="text-sm text-slate-600">{entry.blurb}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={entry.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 text-sm"
          >
            Open in new tab →
          </a>
          <button
            onClick={() => window.print()}
            className="px-3 py-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 text-sm"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="mt-4">
        {!failed ? (
          <iframe
            title={entry.title}
            src={entry.url}
            className="w-full h-[70vh] min-h-[520px] rounded-xl border border-slate-200"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-900">
              This page can’t be embedded by the browser. Use “Open in new tab”
              above to view it directly.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

function Welcome() {
  return (
    <Card tone="slate">
      <h2 className="text-lg font-bold">Welcome</h2>
      <p className="text-sm text-slate-700 mt-1">
        Pick a section on the left to start. Recommended path:
      </p>
      <ol className="list-decimal pl-5 mt-2 text-sm space-y-1">
        <li>Foundations & Operating System</li>
        <li>Market, ICP & Offers</li>
        <li>Content Engine & Business Scale</li>
        <li>Pipeline & Funnel Systems</li>
        <li>Sales, Objections & Conversion</li>
        <li>Operations, Roles & Handoffs</li>
        <li>Execution Sprints</li>
        <li>Founder Finance & Economics</li>
      </ol>
    </Card>
  );
}

/* ============================== FOOTER ============================== */

function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap items-center gap-3">
      <span className="text-xs text-slate-500">
        Matrix theme • Optimised for 1280–1440px (MacBook Air). A4 landscape
        recommended when printing.
      </span>
    </footer>
  );
}
