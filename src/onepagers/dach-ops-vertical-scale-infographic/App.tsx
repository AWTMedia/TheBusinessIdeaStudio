import {
  Check,
  ArrowRight,
  Shield,
  Settings,
  Users,
  TrendingUp,
  Sparkles,
  Workflow,
  FileText,
  Rocket,
  GaugeCircle,
  Building2,
  ChartBar,
  ClipboardCheck,
  Timer,
  Link as LinkIcon,
} from "lucide-react";

/**
 * DACH Ops Management + Vertical Scale System — Infographic (Single‑File)
 * TailwindCSS required. Default export renders a full landing/infographic page.
 *
 * Sections:
 * 1) Hero (H1 headline for landing page) + Elevator Pitch
 * 2) Offer / ICP + Pricing (Accelerator / Scale) + Guarantees
 * 3) Funnel / CTA (Lead Gen → Nurture → Conversion → Delivery)
 * 4) Cred (Trust, Compliance, Market reality)
 * 5) Demographics / Psychographics
 * 6) Collaboration Angle (Embedded Pod)
 * 7) Marketing Angle (Positioning & Differentiators)
 * 8) Media Ecosystem (Content & Channels)
 * 9) Team of 4 (Roles, Responsibilities, SLAs)
 * 10) Scoreboard (KPI Examples) + Final CTA
 */

const headline =
  "Scale without Hiring Headaches — DACH Ops Management + Vertical Scale System";

const subhead =
  "We embed a 4‑person fractional ops pod into German‑speaking solopreneurs (1–3 FTE) to deliver predictable acquisition, clean delivery, and measurable profit lift in 90 days—without full‑time hires.";

const elevatorPitch =
  "30‑Day Install → 90‑Day Scale. KPI board, compliant acquisition, SOP automation, and 2 role placements (fractional first). If we miss 2 measurable ops wins in 30 days, we work free until hit.";

const awareness = [
  {
    stage: "Most Aware",
    pitch:
      "Ready to deploy: book the 20‑min Ops Potential Check. We map your KPI ladder and start your 30‑Day Install.",
  },
  {
    stage: "Product Aware",
    pitch:
      "A 4‑person fractional pod (Ops, Acquisition, Systems, Content/CRM) that installs your acquisition + delivery system without hiring.",
  },
  {
    stage: "Solution Aware",
    pitch:
      "You need reliable leadflow and on‑time delivery. We standardize both with KPI boards + SOPs.",
  },
  {
    stage: "Problem Aware",
    pitch:
      "Hiring in DE is slow and risky. Deals slip, delivery breaks, and margin suffers. You need capacity now, not a 4‑month recruit.",
  },
  {
    stage: "Unaware",
    pitch:
      "Most solo founders scale revenue faster than operations. We fix the gap so growth doesn’t break your business.",
  },
];

const offerBullets = [
  "Ops Manager (8–12 h/wk) leading a KPI cadence: Leads → SQL → Sales → Delivery SLAs",
  "Acquisition Layer: DE profile‑funnel + compliant outbound (LinkedIn/Email/WhatsApp opt‑in)",
  "Systems/Automation: n8n/Make, CRM (HubSpot/Pipedrive), Notion/ClickUp SOPs (DE), billing (SEPA, lexoffice/SevDesk/DATEV hooks)",
  "Hiring Pipeline: light ATS, scorecards, interview kits, 2 fractional role placements",
  "Guarantee: 2 measurable ops wins in 30 days (e.g., +25% reply→book, −30% cycle time) or we work free until hit",
];

const pricing = [
  {
    name: "Accelerator",
    price: "€4,000 setup + €2,500/mo",
    details: [
      "2 hires (fractional/contract)",
      "Ops Manager 8 h/wk",
      "10 SOPs + KPI board",
      "CRM + basic automations",
      "Monthly ops report",
    ],
  },
  {
    name: "Scale",
    price: "€6,000 setup + €4,000/mo",
    details: [
      "3 hires (fractional/contract)",
      "Ops Manager 12 h/wk",
      "15 SOPs + comp plans",
      "Quarterly planning",
      "Advanced automations + QA",
    ],
  },
];

const funnel = [
  {
    heading: "Lead Gen (DE‑first)",
    items: [
      "LinkedIn carousels & reels with case metrics",
      "Targeted cold email/LI with proof snippets + case loom",
      "Meta/YouTube paid → DSGVO‑compliant lead form (Impressum)",
      "Lead magnets: DACH Hiring Playbook • Ops‑Checkliste (DE)",
    ],
  },
  {
    heading: "Primary CTA",
    items: [
      "Kostenloser 20‑min Ops Potential Check (Calendly, Datenschutz, Impressum)",
    ],
  },
  {
    heading: "Nurture / Conversion",
    items: [
      "5‑email DE sequence: case → KPI loom → ROI calc → objections → pilot",
      "WhatsApp double opt‑in",
      "€97 Systems Sprint (90 min) credited to setup",
      "Milestone‑based risk reversal",
    ],
  },
  {
    heading: "Delivery",
    items: [
      "Weekly DE standup + shared OKR board",
      "Monthly BWA‑style ops report",
      "Hire‑to‑own option for any pod role",
    ],
  },
];

const cred = [
  {
    title: "Market Reality",
    icon: <Building2 className="h-5 w-5" />,
    points: [
      "Germany’s persistent Fachkräftemangel → hiring bottlenecks",
      "Fractional + automation outpaces slow FTE recruiting",
    ],
  },
  {
    title: "Compliance & Trust",
    icon: <Shield className="h-5 w-5" />,
    points: [
      "DSGVO/AVV, Impressum, AGB, SEPA",
      "DE‑language docs, metrics, before/after dashboards",
    ],
  },
  {
    title: "Proof Mechanics",
    icon: <ClipboardCheck className="h-5 w-5" />,
    points: [
      "Case tiles by role & metric",
      "Public KPI snapshots (pipeline & delivery)",
    ],
  },
];

const demoPsycho = [
  "DACH solopreneurs (1–3 FTE), €10k–€40k/mo",
  "Risk‑aware, bureaucracy‑sensitive, prefers checklists over hype",
  "Time‑poor, wants predictable leadflow + on‑time delivery",
  "Values Ordnung, Präzision, compliance, and measurable ROI",
];

const collabAngle = [
  "Embedded 90‑day pod with documented SOP transfer",
  "Option to convert a pod member to in‑house (hire‑to‑own)",
  "Co‑branded Ops Sprint with DACH creators/communities (rev‑share)",
  "Simple pricing: setup + flat monthly + optional profit‑share",
];

const marketingAngle = [
  "Trust‑first positioning: compliance, German UI copy, no hype",
  "Proof‑led creative: KPI ladders, before/after ops maps",
  "Category design: ‘Scale ohne Einstellung’ (scale without hiring)",
  "Offer architecture: Day‑1 value via Systems Sprint + fast wins",
];

const mediaEcosystem = [
  {
    channel: "LinkedIn (DE)",
    content: [
      "Case carousels (metric ladders)",
      "Ops deconstructions (1 chart, 3 bullets)",
      "Founder Letter (monthly)",
    ],
  },
  {
    channel: "YouTube Shorts / Reels",
    content: [
      "Whiteboard KPIs (60s)",
      "Automation walkthroughs",
      "Client mini‑docs (2–3 min)",
    ],
  },
  {
    channel: "Email (DE)",
    content: [
      "Weekly Ops Memo (1 chart)",
      "SOP of the Week",
      "Case Study Saturday",
    ],
  },
];

const team = [
  {
    role: "Ops Manager",
    icon: <Workflow className="h-5 w-5" />,
    bullets: [
      "Owns KPI cadence & delivery SLAs",
      "Runs weekly standup + OKRs",
      "Approves SOPs & QA",
    ],
    sla: "8–12 h/wk",
  },
  {
    role: "Acquisition Lead",
    icon: <Rocket className="h-5 w-5" />,
    bullets: [
      "Profile funnel + outbound",
      "Reply→book uplift & calendar fill",
      "Owns creative angles",
    ],
    sla: "+25% reply→book in 30 days",
  },
  {
    role: "Systems / Automation",
    icon: <Settings className="h-5 w-5" />,
    bullets: [
      "n8n/Make flows, CRM, billing",
      "ClickUp/Notion SOPs",
      "Data hygiene & alerts",
    ],
    sla: "<24h lead‑to‑CRM sync",
  },
  {
    role: "Content / CRM",
    icon: <Sparkles className="h-5 w-5" />,
    bullets: [
      "Case assets & carousels",
      "Looms, emails, WhatsApp",
      "Community responses",
    ],
    sla: "48h asset turnaround",
  },
];

const kpis = [
  {
    label: "Reply → Book",
    value: "+25%",
    icon: <ArrowRight className="h-4 w-4" />,
  },
  { label: "Cycle Time", value: "−30%", icon: <Timer className="h-4 w-4" /> },
  { label: "Show‑Up Rate", value: "+15%", icon: <Users className="h-4 w-4" /> },
  {
    label: "On‑Time Delivery",
    value: "95%",
    icon: <GaugeCircle className="h-4 w-4" />,
  },
  {
    label: "Gross Margin",
    value: "+8–12%",
    icon: <ChartBar className="h-4 w-4" />,
  },
];

const CTAButton = ({ children }) => (
  <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg hover:shadow-xl active:scale-[0.99]">
    {children} <ArrowRight className="h-4 w-4" />
  </button>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const Section = ({ title, children, icon }) => (
  <section className="mx-auto max-w-6xl px-4 py-10">
    <div className="mb-6 flex items-center gap-3">
      {icon}
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
    <Check className="h-3 w-3" /> {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-700">
            {subhead}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Tag>30‑Day Install → 90‑Day Scale</Tag>
            <Tag>DSGVO & Impressum‑ready</Tag>
            <Tag>Hire‑to‑own option</Tag>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton>Free 20‑min Ops Potential Check</CTAButton>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm hover:shadow">
              Download DE One‑Pager <FileText className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Elevator Pitch: {elevatorPitch}
          </p>
        </div>
      </header>

      {/* Levels of Awareness */}
      <Section
        title="Levels of Awareness Pitches"
        icon={<Sparkles className="h-5 w-5 text-indigo-600" />}
      >
        <div className="grid gap-4 md:grid-cols-5">
          {awareness.map((a) => (
            <Card key={a.stage}>
              <div className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                {a.stage}
              </div>
              <p className="mt-2 text-sm text-slate-700">{a.pitch}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Offer / ICP + Pricing */}
      <Section
        title="Offer / ICP (DACH Edition)"
        icon={<TrendingUp className="h-5 w-5 text-emerald-600" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h3 className="text-lg font-semibold">What you get</h3>
            <ul className="mt-4 grid gap-3">
              {offerBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-emerald-600" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Solopreneurs 1–3 FTE</Tag>
              <Tag>€10k–€40k/mo</Tag>
              <Tag>German‑language delivery</Tag>
            </div>
          </Card>
          <div className="grid gap-4">
            {pricing.map((p) => (
              <Card key={p.name}>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">{p.name}</h4>
                  <span className="text-sm font-medium text-slate-600">
                    {p.price}
                  </span>
                </div>
                <ul className="mt-3 grid gap-2">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" />{" "}
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Funnel / CTA */}
      <Section
        title="Funnel / CTA"
        icon={<Rocket className="h-5 w-5 text-amber-600" />}
      >
        <div className="grid gap-6 md:grid-cols-4">
          {funnel.map((f) => (
            <Card key={f.heading}>
              <h4 className="text-base font-semibold">{f.heading}</h4>
              <ul className="mt-3 grid gap-2">
                {f.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-slate-500" />{" "}
                    {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Cred */}
      <Section
        title="Cred (Trust & Proof)"
        icon={<Shield className="h-5 w-5 text-slate-800" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {cred.map((c) => (
            <Card key={c.title}>
              <div className="flex items-center gap-2">
                {c.icon}
                <h4 className="text-base font-semibold">{c.title}</h4>
              </div>
              <ul className="mt-3 grid gap-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" />{" "}
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Demographics / Psychographics */}
      <Section
        title="Likely Demographics / Psychographics"
        icon={<Users className="h-5 w-5 text-slate-700" />}
      >
        <Card>
          <ul className="grid gap-2 md:grid-cols-2">
            {demoPsycho.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" /> {d}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Collaboration Angle */}
      <Section title="Collab Angle" icon={<HandshakeIcon />}>
        <Card>
          <ul className="grid gap-2 md:grid-cols-2">
            {collabAngle.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" /> {c}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Marketing Angle */}
      <Section
        title="Marketing Angle"
        icon={<ChartBar className="h-5 w-5 text-indigo-600" />}
      >
        <Card>
          <ul className="grid gap-2 md:grid-cols-2">
            {marketingAngle.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" /> {m}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Media Ecosystem */}
      <Section
        title="Media Ecosystem"
        icon={<FileText className="h-5 w-5 text-rose-600" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {mediaEcosystem.map((m) => (
            <Card key={m.channel}>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold">{m.channel}</h4>
                <LinkIcon className="h-4 w-4 text-slate-400" />
              </div>
              <ul className="mt-3 grid gap-2">
                {m.content.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-slate-500" />{" "}
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team of 4 */}
      <Section
        title="The 4‑Person Pod"
        icon={<Users className="h-5 w-5 text-emerald-600" />}
      >
        <div className="grid gap-6 md:grid-cols-4">
          {team.map((t) => (
            <Card key={t.role}>
              <div className="flex items-center gap-2">
                {t.icon}
                <h4 className="text-base font-semibold">{t.role}</h4>
              </div>
              <ul className="mt-3 grid gap-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600" />{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-slate-500">SLA: {t.sla}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* KPI Scoreboard + Final CTA */}
      <Section
        title="KPI Scoreboard (Examples)"
        icon={<ChartBar className="h-5 w-5 text-slate-900" />}
      >
        <Card>
          <div className="grid gap-3 md:grid-cols-5">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-2 text-sm">
                  {k.icon}
                  <span className="font-medium">{k.label}</span>
                </div>
                <span className="text-sm font-semibold text-emerald-700">
                  {k.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CTAButton>Book Your 20‑min Ops Potential Check</CTAButton>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm hover:shadow">
              See DE Compliance Pack <Shield className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Includes DSGVO template AVV, Impressum patterns, AGB guidance, and
            SEPA billing setup notes.
          </p>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} DACH Ops System. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a className="hover:text-slate-700" href="#">
              Impressum
            </a>
            <a className="hover:text-slate-700" href="#">
              Datenschutz (DSGVO)
            </a>
            <a className="hover:text-slate-700" href="#">
              AGB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple inline icon for handshake to avoid extra lib imports
function HandshakeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-emerald-600"
      {...props}
    >
      <path
        d="M8 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8l-5-2-4 4-4-4-5 2v6l5 2 4-4 4 4 5-2V8z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
