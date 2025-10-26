export default function ClientPipelineOnePager() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Client Pipeline Systems — One Pager
          </h1>
          <p className="text-slate-600 mt-2">
            Nurture-first, four-system pipeline with priorities: Outbound →{" "}
            <span className="font-semibold">LinkedIn &gt; Email</span>. Paid →{" "}
            <span className="font-semibold">
              Meta &gt; YouTube &gt; LinkedIn
            </span>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">Nurture-first</Tag>
            <Tag color="indigo">Avatar-led</Tag>
            <Tag color="amber">Measurement-driven</Tag>
            <Tag color="rose">Built for ROAS</Tag>
          </div>
        </header>

        {/* Channel & Stack Summary */}
        <section className="grid md:grid-cols-2 gap-5 mb-8">
          <Card
            title="Channel Priorities"
            tone="emerald"
            items={[
              "Outbound: LinkedIn (primary) → Email (secondary)",
              "Paid: Meta → YouTube → LinkedIn",
              "Organic: Profile funnel on all active platforms",
            ]}
          />
          <Card
            title="Tool Stack (Default)"
            tone="slate"
            items={[
              "HubSpot (CRM, scoring, pipelines)",
              "GA4 + GTM (analytics), Meta/LI/Google pixels",
              "Klaviyo (email), Calendly (booking)",
              "n8n (ETL + alerts), Wistia (VSL)",
              "Webflow/Framer (LPs), Sales Navigator",
              "Clay + Hunter (lists), Instantly (email)",
            ]}
          />
        </section>

        {/* KPI Snapshot (provided numbers) */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">KPI Snapshot</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Metric label="Ad Spend" value="$12,182" />
            <Metric label="Profile Visits" value="52,965" />
            <Metric label="Follower CVR" value="14.33%" />
            <Metric label="Followers" value="7,595" />
            <Metric label="Qualified % of Followers" value="35.41%" />
            <Metric label="Qualified Followers" value="2,689" />
            <Metric label="Follower→Convo Rate" value="42.72%" />
            <Metric label="Conversations" value="1,750" />
            <Metric label="Qualified Conversations" value="1,148" />
            <Metric label="Appt Booking Rate" value="12.73%" />
            <Metric label="Appointments" value="146" />
            <Metric label="$/Booked Appt" value="$83.56" />
            <Metric label="Qualified Appointments" value="123" />
            <Metric label="$/Qualified Booked" value="$99.19" />
            <Metric label="Show-ups (Qualified)" value="101 (82.11%)" />
            <Metric label="$/Shown Qualified" value="$120.61" />
            <Metric label="ROAS" value="12.4x" />
            <Metric label="Profit Margin" value=">85%" />
          </div>
        </section>

        {/* Phase Systems */}
        <section className="grid lg:grid-cols-2 gap-6">
          <SystemCard
            color="slate"
            phase="Phase 1 — Foundations"
            system="Market‑Match & Measurement System"
            objective="Lock avatar–offer fit, wire measurement, and prep the container for scale."
            processes={[
              "Avatar Identification: segment signals → select ONE priority avatar → Jobs/Signals/Objections/Triggers sheet",
              "Offer Map: outcome, constraints, price anchors, risk‑reversal",
              "Proof Library: case studies, screenshots, before/after",
              "Messaging Kit: one‑liner, 3‑pillar mechanism, FAQ/objections",
              "Profile Funnel: bio promise, banner, pinned proof, SINGLE CTA",
              "KPI Tracking: GTM/GA4 + pixels, Calendly/HubSpot events, UTM schema",
              "Data Contracts: naming for campaigns, audiences, offers",
              "Baseline Snapshot: traffic, leads, CVRs, revenue per channel",
            ]}
            infrastructure={[
              "HubSpot",
              "GA4+GTM",
              "Meta/LI/Google pixels",
              "Calendly",
              "n8n",
              "Sheets/Supabase",
              "Drive proofs",
            ]}
            acceptance={[
              "Events firing + UTMs resolved",
              "Profile CTA live",
              "≥10 proof items",
              "Baseline logged",
            ]}
          />

          <SystemCard
            color="indigo"
            phase="Phase 2 — Nurture & Qualification"
            system="Content Ecosystem & Lead‑Scoring System"
            objective="Educate, build belief, and filter for fit BEFORE sales."
            processes={[
              "Weekly Pillar Recording (30–60m): frameworks, wins, objections, case studies",
              "Repurpose: 1 YouTube (5–12m) → 5–10 Shorts → 2 carousels → 2 text posts → 1 email/blog",
              "Publishing Cadence: each asset → one low‑friction CTA (guide/community/DM)",
              "Email Drip (5–7): Welcome → Proof → Objection → Framework → CTA → Case study → Nudge",
              "DM/Chat Flows: keyword opt‑ins → ask size/timeline/goal → tag & score",
              "Lead Scoring: opens/clicks/watch%/DM answers → MQL/SQL thresholds",
              "Pre‑Call Survey: budget, team, stack, urgency + auto‑reject rules",
              "Community Layer (opt): weekly frameworks, polls, wins",
              "Remarketing Audiences: video views, site engagers, email engagers",
            ]}
            infrastructure={[
              "Klaviyo",
              "HubSpot scoring",
              "Manychat/GoHighLevel DMs",
              "Descript/CapCut",
              "Later/Metricool",
              "Ads audiences",
            ]}
            acceptance={[
              "Email open ≥30%",
              "Click ≥5%",
              "YT avg watch ≥25%",
              "Visible lead‑score transitions",
              "MQL rate established",
            ]}
          />

          <SystemCard
            color="emerald"
            phase="Phase 3 — Lead Generation"
            system="Attention & Acquisition Engine"
            objective="Drive consistent qualified traffic into the nurture container."
            processes={[
              "Organic Profile Funnel: daily hooks + proof → CTA (guide/DM); UTM links on profiles",
              "Outbound (LinkedIn > Email): 4‑step DM + email bump, personalization tokens, list 200–500",
              "Paid Magnets (Meta > YouTube > LinkedIn): hooks → magnet/audit LP; CBO budgets; creative matrix",
              "Retargeting: viewers/engagers → case study/VSL → book call",
              "Routing: all opt‑ins to ESP/CRM; DM triage; tag source/offer",
            ]}
            infrastructure={[
              "Sales Navigator",
              "Clay + Hunter",
              "Instantly",
              "Meta/Google/LinkedIn Ads",
              "Webflow/Framer LPs",
              "Calendly",
              "n8n routing",
            ]}
            acceptance={[
              "CPL within target",
              "≥5% cold reply OR ≥10% LI accept→reply",
              "Profile→CTA CTR up",
              "Traffic → nurture CTA % up",
            ]}
          />

          <SystemCard
            color="amber"
            phase="Phase 4 — Conversion"
            system="Closing & Revenue Engine"
            objective="Turn qualified demand into revenue with minimal friction."
            processes={[
              "VSL + LP: Big Idea → Mechanism → Proof → CTA; mobile‑first",
              "Story Ad Sequence (5): Credibility → Problem → Solution → Proof → Urgency (IG/email/community)",
              "Webinar/Workshop (opt): monthly diagnostic + Q&A",
              "AI SDR Follow‑ups: email/SMS/DM; no‑show recovery; deadline nudges",
              "Sales Calls (CLOSER): discovery → prescription → objections → risk‑reversal → close",
              "Proposal/Payment: one‑pager, e‑sign, Stripe; immediate onboarding",
              "Post‑Sale Handoff: kickoff checklist, success metrics, comms cadence",
            ]}
            infrastructure={[
              "Wistia",
              "Webflow/Framer LP",
              "HubSpot/GoHighLevel",
              "Aircall/Zoom",
              "PandaDoc",
              "Stripe",
              "n8n alerts",
            ]}
            acceptance={[
              "Show ≥70%",
              "Close ≥25–40% (qualified)",
              "CAC < target",
              "Payback period in range",
              "Low refund rate",
            ]}
          />
        </section>

        {/* Optimization Playbook */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            Optimization Playbook (Issue → Action)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <OpCard
              issue="High profile visit cost"
              actions={[
                "Improve copy & creative hooks",
                "Narrow audience targeting",
                "Add retargeting loops",
              ]}
            />
            <OpCard
              issue="High cost per follower"
              actions={[
                "Prioritize action‑driven ads",
                "Optimize profile content & proof",
                "Increase trust signals (testimonials)",
              ]}
            />
            <OpCard
              issue="Low follower → conversation"
              actions={[
                "Automated follow‑up DMs",
                "Increase interactive stories (polls, Qs)",
                "Clear CTA on posts",
              ]}
            />
            <OpCard
              issue="High cost per booked appointment"
              actions={[
                "Pre‑frame in DMs with value ",
                "Deliver free micro‑wins",
                "Use FOMO/limited spots messaging",
              ]}
            />
            <OpCard
              issue="Low show‑up rate"
              actions={[
                "Reminders: 24h/4h/1h",
                "Calendar invites + SMS confirm",
                "Pre‑call primer (what to expect)",
              ]}
            />
          </div>
        </section>

        {/* KPI Loop */}
        <section className="mt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-lg font-bold">KPI Loop</h2>
            <p className="text-sm text-slate-600 mt-1">
              Collect data → Define KPIs → Analyze → Refine → Moderate Results →
              Repeat.
            </p>
            <div className="grid md:grid-cols-6 gap-3 mt-4">
              <LoopStep
                n={1}
                label="Collect"
                desc="Events, UTMs, costs, outcomes"
              />
              <LoopStep
                n={2}
                label="Define"
                desc="Targets per stage (CPL, MQL%, Show%, Close%)"
              />
              <LoopStep
                n={3}
                label="Analyze"
                desc="Channel & creative deltas; bottlenecks"
              />
              <LoopStep
                n={4}
                label="Refine"
                desc="Audience, creative, offers, cadences"
              />
              <LoopStep
                n={5}
                label="Moderate"
                desc="Stabilize spend & frequency"
              />
              <LoopStep
                n={6}
                label="Repeat"
                desc="Iterate weekly with alerts"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Tip: Use A4 landscape for best fit.
          </span>
        </footer>
      </div>
    </div>
  );
}

/* ——— UI PRIMITIVES ——— */
function Tag({ children, color = "slate" }) {
  const map = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}
    >
      {children}
    </span>
  );
}

function Card({ title, items = [], tone = "slate" }) {
  const map = {
    slate: "border-slate-200",
    emerald: "border-emerald-200",
    indigo: "border-indigo-200",
    amber: "border-amber-200",
  };
  return (
    <div className={`bg-white border ${map[tone]} rounded-2xl p-5 shadow-sm`}>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 text-sm text-slate-800 space-y-1 list-disc list-inside">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

function SystemCard({
  color = "slate",
  phase,
  system,
  objective,
  processes = [],
  infrastructure = [],
  acceptance = [],
}) {
  const border = {
    slate: "border-slate-200",
    indigo: "border-indigo-200",
    emerald: "border-emerald-200",
    amber: "border-amber-200",
  }[color];
  return (
    <div className={`bg-white border ${border} rounded-2xl p-5 shadow-sm`}>
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold text-slate-900">{phase}</h3>
        <span className="text-xs text-slate-500">{system}</span>
      </div>
      <p className="text-sm text-slate-600 mt-1">{objective}</p>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Block title="Process String" items={processes} />
        <Block title="Infrastructure" items={infrastructure} />
        <Block title="Acceptance / KPIs" items={acceptance} />
      </div>
    </div>
  );
}

function Block({ title, items = [] }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <h4 className="font-medium text-slate-800">{title}</h4>
      <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
        {items.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function OpCard({ issue, actions = [] }) {
  return (
    <div className="rounded-2xl border border-amber-200 p-4 bg-amber-50">
      <h4 className="font-semibold text-amber-900">{issue}</h4>
      <ul className="mt-2 text-sm text-amber-900/90 space-y-1 list-disc list-inside">
        {actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

function LoopStep({ n, label, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mt-0.5">
          {n}
        </div>
        <div>
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-slate-600 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}
