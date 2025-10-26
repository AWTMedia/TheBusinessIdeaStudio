import React from "react";
import Container from "@/layout/Container"; // default export
import { Card } from "@/ui/Card"; // named export
import Tag from "@/ui/Tag"; // default export

/* --------------------------------------------------------------------------
   App.tsx — Personal Brand Affiliate Model
   - Spacing: unified vertical rhythm via `space-y-12 md:space-y-16`
   - Color: subtle gradient accent in hero + per-section color bars (tone)
   - No extra libraries; uses your existing UI primitives
---------------------------------------------------------------------------*/

// Section with optional color tone
type Tone = "slate" | "indigo" | "emerald" | "amber" | "rose";

const toneBorder: Record<Tone, string> = {
  slate: "border-slate-200",
  indigo: "border-indigo-200",
  emerald: "border-emerald-200",
  amber: "border-amber-200",
  rose: "border-rose-200",
};

const toneText: Record<Tone, string> = {
  slate: "text-slate-900",
  indigo: "text-indigo-900",
  emerald: "text-emerald-900",
  amber: "text-amber-900",
  rose: "text-rose-900",
};

const Section: React.FC<
  React.PropsWithChildren<{
    id: string;
    title: string;
    meta?: string[];
    tone?: Tone;
  }>
> = ({ id, title, meta, tone = "slate", children }) => (
  <section id={id} className="scroll-mt-28">
    <div className={`mb-6 border-t-4 ${toneBorder[tone]} pt-6`}>
      <div className="flex items-start justify-between gap-4">
        <h2
          className={`text-2xl font-semibold tracking-tight ${toneText[tone]}`}
        >
          {title}
        </h2>
        {meta && (
          <div className="flex flex-wrap gap-2">
            {meta.map((m) => (
              <Tag key={m} color="slate">
                {m}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
    {children}
  </section>
);

const Pill: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm">
    <span className="leading-none">{children}</span>
  </div>
);

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Card className="p-4">
    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
    <p className="text-xl font-semibold">{value}</p>
  </Card>
);

export default function App() {
  const nav = [
    { href: "#overview", label: "Overview" },
    { href: "#sectors", label: "Sectors" },
    { href: "#funnel", label: "Funnel" },
    { href: "#upgrade", label: "Why Upgrade" },
    { href: "#parallels", label: "Parallels" },
    { href: "#playbook", label: "Playbook" },
    { href: "#example", label: "Example Flow" },
    { href: "#future", label: "Future" },
    { href: "#summary", label: "Summary" },
  ];

  const pillars = [
    "AI × Marketing × Business",
    "Pain-led content & CTAs",
    "Trust-first demand channel",
  ];

  const awareness = [
    "Short-form videos, carousels, threads across IG/TikTok/LinkedIn/YouTube.",
    'CTAs: ‘DM "Growth" for playbook’, ‘Download Brand Growth Matrix’.',
    "Cadence: daily micro-lessons + weekly case studies.",
  ];

  const nurture = [
    "DM/email automation delivers resource, builds authority.",
    "2–3 qualify questions: budget, urgency, fit.",
    "Quiz/scorecard or mini-audit to segment leads.",
  ];

  const conversion = [
    "Warm handoff → partner pipeline (Calendly, intro email, or tracked link).",
    "Transparent: ‘I partner with XYZ’ or white-labeled as ‘my team’.",
    "Attribution tracked at deal-level (closed-won).",
  ];

  const revenue = [
    "Commission 10–20% per closed deal (services/retainers).",
    "Performance: fee per qualified meeting + % of closed revenue.",
    "Hybrid: small monthly base + rev-share bonus.",
  ];

  const parallels = [
    "Performance Partnerships (next-gen affiliate, outcome-based)",
    "Creator-led Affiliate (SaaS/B2B recurring rev-share)",
    "Referral/Finder’s Fees (5–15% on warm intros)",
    "Outsourced SDR (pay-per-meeting + success bonus)",
  ];

  const playbook = [
    {
      title: "Brand Foundation",
      points: [
        "Narrative: AI + Marketing + Business.",
        "Content pillars & weekly calendar.",
        "Curator + practitioner positioning.",
      ],
    },
    {
      title: "Lead Magnet",
      points: [
        "Free playbook/quiz/scorecard.",
        "CTA baked into content.",
        "DM autoresponder + email sequence.",
      ],
    },
    {
      title: "Qualification",
      points: [
        "Score by Budget / Need / Fit.",
        "Route ‘ready now’ vs ‘nurture’.",
        "Light-touch audit to confirm value.",
      ],
    },
    {
      title: "Conversion Handoff",
      points: [
        "Intro email template + Calendly routing.",
        "Affiliate/referral tracking for attribution.",
        "Partner pipeline SLAs.",
      ],
    },
    {
      title: "Partner Agreements",
      points: [
        "% per deal (10–20%) or recurring (SaaS).",
        "Hybrid structures available.",
        "Clear attribution, payout, term & termination.",
      ],
    },
  ];

  const exampleFlow = [
    "Post: ‘3 AI automations that doubled leads’.",
    "DM ‘Growth’ → playbook delivered.",
    "Email includes quiz → lead qualified.",
    "Qualified → warm intro to Partner Agency.",
    "Agency closes $5k retainer → 15% to you ($750/mo).",
  ];

  const future = [
    "Info-product: Creator-to-Closer™ (teach funnel + handoff).",
    "Community: Personal Brand Affiliate Network (offers + playbooks).",
    "Verticals: SaaS, coaching, pro services, AI tools, agencies.",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        {/* HEADER / HERO */}
        <header className="pt-10">
          <Card className="relative overflow-hidden p-8">
            {/* subtle gradient accent bar */}
            <div className="absolute inset-x-6 top-6 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-emerald-400 to-amber-400/90" />
            <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex flex-wrap gap-2">
                  <Tag color="indigo">Playbook</Tag>
                  <Tag color="emerald">High-Ticket</Tag>
                  <Tag color="amber">Repeatable</Tag>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-indigo-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent">
                    Personal Brand Affiliate Model
                  </span>
                </h1>
                <p className="mt-3 text-slate-600">
                  A creator-led, trust-driven growth system: you generate,
                  nurture, and qualify demand with your personal brand, hand off
                  to a partner who fulfills, and earn on outcomes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillars.map((p, i) => (
                    <Pill key={i}>{p}</Pill>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#funnel"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 font-medium hover:shadow-sm"
                  >
                    View Funnel →
                  </a>
                  <a
                    href="#playbook"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:opacity-95"
                  >
                    Implement
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
                <Stat label="Role" value="Growth Partner" />
                <Stat label="Payout" value="10–20% deals" />
                <Stat label="Engine" value="Brand → Funnel" />
                <Stat label="Mode" value="Qualified Handoff" />
              </div>
            </div>

            {/* Nav pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm hover:bg-slate-50"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </Card>
        </header>

        {/* CONTENT SECTIONS — unified vertical spacing */}
        <div className="py-10 space-y-12 md:space-y-16">
          {/* Overview */}
          <Section
            id="overview"
            title="Concept Overview"
            tone="slate"
            meta={["Affiliate + Referral + Sales Partner"]}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card className="p-5 lg:col-span-2">
                <h3 className="mb-2 text-lg font-semibold">What it is</h3>
                <p className="text-slate-600">
                  An upgraded affiliate model where your personal brand is the
                  demand engine. You own content, capture interest, nurture,
                  qualify, and route the right buyers to a partner who delivers.
                  You earn on outcomes without doing delivery.
                </p>
              </Card>
              <Card className="p-5">
                <h3 className="mb-2 text-lg font-semibold">Why it wins</h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  <li>Trust beats clicks → higher close rates</li>
                  <li>Deal-level attribution (not last-click)</li>
                  <li>High-ticket, repeatable pipeline assets</li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* Sectors */}
          <Section
            id="sectors"
            title="Sectors & Fit"
            tone="indigo"
            meta={["AI", "Marketing", "Business"]}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card className="p-5">
                <h4 className="mb-1 font-semibold">AI / Tech</h4>
                <p className="text-slate-600">
                  Information + computer systems design; massive upside,
                  constant demand for interpreters and integrators.
                </p>
              </Card>
              <Card className="p-5">
                <h4 className="mb-1 font-semibold">Marketing</h4>
                <p className="text-slate-600">
                  Demand amplifier for every vertical; ROI storytelling +
                  performance makes you indispensable.
                </p>
              </Card>
              <Card className="p-5">
                <h4 className="mb-1 font-semibold">Business / Consulting</h4>
                <p className="text-slate-600">
                  High-margin problems (strategy, systems, ops) and partner
                  ecosystems ready for rev-share.
                </p>
              </Card>
            </div>
          </Section>

          {/* Funnel */}
          <Section
            id="funnel"
            title="Funnel Framework"
            tone="emerald"
            meta={["Awareness", "Nurture", "Conversion", "Revenue"]}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Card className="p-5">
                <div className="mb-2 font-semibold">Awareness</div>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {awareness.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5">
                <div className="mb-2 font-semibold">Nurture & Qualify</div>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {nurture.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5">
                <div className="mb-2 font-semibold">Conversion Mechanism</div>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {conversion.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5">
                <div className="mb-2 font-semibold">Revenue Model</div>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {revenue.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          {/* Why Upgrade */}
          <Section id="upgrade" title="Why This is an Upgrade" tone="amber">
            <Card className="overflow-hidden p-0">
              <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
                <div className="p-5">
                  <h4 className="mb-2 font-semibold">Traditional Affiliate</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-600">
                    <li>Clicks + cookies, low differentiation</li>
                    <li>Lower % on low-ticket products</li>
                    <li>Little control over buyer journey</li>
                  </ul>
                </div>
                <div className="bg-amber-50/60 p-5">
                  <h4 className="mb-2 font-semibold">
                    Personal Brand Affiliate
                  </h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-700">
                    <li>Trust-led demand → higher close rate</li>
                    <li>High-ticket, rev-share, recurring</li>
                    <li>You own content, nurture, qualification</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Section>

          {/* Parallels */}
          <Section
            id="parallels"
            title="Closest Existing Models"
            tone="slate"
            meta={["Framing & Benchmarks"]}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {parallels.map((p) => (
                <Card key={p} className="p-5">
                  <p className="font-medium">{p}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Playbook */}
          <Section
            id="playbook"
            title="Implementation Playbook"
            tone="indigo"
            meta={["SOPs", "Assets", "Attribution"]}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {playbook.map((step) => (
                <Card key={step.title} className="p-5">
                  <div className="mb-2 font-semibold">{step.title}</div>
                  <ul className="list-disc space-y-1 pl-5 text-slate-600">
                    {step.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          {/* Example Flow */}
          <Section
            id="example"
            title="Example Flow (High-Ticket Services)"
            tone="emerald"
            meta={["Warm Handoff"]}
          >
            <Card className="p-5">
              <ol className="list-decimal space-y-1 pl-5 text-slate-700">
                {exampleFlow.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </Card>
          </Section>

          {/* Future */}
          <Section
            id="future"
            title="Future Opportunities"
            tone="rose"
            meta={["Community", "Info-Product", "Verticals"]}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {future.map((f) => (
                <Card key={f} className="p-5">
                  <p className="text-slate-700">{f}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Summary */}
          <Section id="summary" title="Summary & Next Step" tone="slate">
            <Card className="p-5">
              <p className="text-slate-700">
                The Personal Brand Affiliate Model = Personal Brand + Lead Gen
                Matrix + Qualified Handoff. You own attention and pipeline; the
                partner fulfills; you earn on outcomes. It’s the creator-led
                evolution of affiliate and referral partnerships.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#playbook"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:opacity-95"
                >
                  Open Playbook
                </a>
                <a
                  href="#funnel"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 font-medium hover:shadow-sm"
                >
                  See Funnel
                </a>
              </div>
            </Card>
          </Section>
        </div>

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Personal Brand Affiliate Model
        </footer>
      </Container>
    </div>
  );
}
