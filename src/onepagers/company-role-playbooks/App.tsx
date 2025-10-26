import { useState } from "react";

export default function CompanyRolePlaybooks() {
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "founder", label: "Founder (Alex)" },
    { key: "setter", label: "Setter" },
    { key: "ops", label: "Ops Manager" },
    { key: "creative", label: "Creative Director" },
    { key: "closer", label: "Closer" },
    { key: "crm", label: "CRM" },
    { key: "editor", label: "Editor" },
    { key: "sops", label: "Operational SOPs" },
  ];
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Company Role Playbooks — One Pager
          </h1>
          <p className="text-slate-600 mt-2">
            Nurture-first operating model for employees, clients and partners.
            Built for a MacBook Air viewport (compact, scannable, printable).
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">LinkedIn &gt; Email (Outbound)</Tag>
            <Tag color="indigo">Meta &gt; YouTube &gt; LinkedIn (Paid)</Tag>
            <Tag color="amber">Measurement-Driven</Tag>
            <Tag color="rose">AI Reports → Alex Review</Tag>
          </div>
        </header>

        {/* Tabs */}
        <nav className="mb-5 overflow-x-auto">
          <div className="inline-flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 py-1.5 rounded-full border text-sm whitespace-nowrap ${
                  tab === t.key
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        {tab === "overview" && <Overview />}
        {tab === "founder" && <Founder />}
        {tab === "setter" && <Setter />}
        {tab === "ops" && <OpsManager />}
        {tab === "creative" && <CreativeDirector />}
        {tab === "closer" && <Closer />}
        {tab === "crm" && <CRM />}
        {tab === "editor" && <Editor />}
        {tab === "sops" && <SOPs />}

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Tip: Best viewed at 1280–1440px width.
          </span>
        </footer>
      </div>
    </div>
  );
}

/* ——— Sections ——— */
function Overview() {
  return (
    <div className="space-y-6">
      {/* KPI Snapshot */}
      <section>
        <h2 className="text-xl font-bold mb-2">KPI Snapshot</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

      {/* Shared SOP Backbone */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold">Shared Data & SOP Backbone</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Block
            title="Core Events"
            items={[
              "profile_visit, follow, follow_qualified, dm_start, dm_positive, dm_cls_sent",
              "booked, qualified_booked, show, no_show, offer_made, won, lost, revenue, refund",
              "content_posted, video_25/50/75, email_open, email_click",
            ]}
          />
          <Block
            title="UTM & Pipelines"
            items={[
              "UTM: source/medium/campaign/content",
              "Pipeline: inb/outb → convos → PR → CLS → booked → qualified → show",
            ]}
          />
          <Block
            title="Awareness & Client Tracking"
            items={[
              "Followers → Qualified Followers → Origin",
              "Pattern (emotional), Situational (stage), Call recording (tech analysis)",
            ]}
          />
        </div>
      </section>

      {/* KPI Loop */}
      <section className="bg-white border border-slate-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold">KPI Loop</h2>
        <p className="text-sm text-slate-600">
          Collect → Define → Analyze → Refine → Moderate Results → Repeat.
        </p>
        <div className="grid md:grid-cols-6 gap-3 mt-3">
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
          <LoopStep n={5} label="Moderate" desc="Stabilize spend & frequency" />
          <LoopStep n={6} label="Repeat" desc="Iterate weekly with alerts" />
        </div>
      </section>

      {/* AI Reporting */}
      <section className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold text-rose-900">
          AI Reporting Engine (Gemini) → Alex Review
        </h2>
        <ul className="mt-2 text-sm text-rose-900/90 space-y-1 list-disc list-inside">
          <li>Daily: lead flow deltas, cost per step, hot issues (alerts)</li>
          <li>
            Weekly: attribution, creative winners/losers, experiment outcomes
          </li>
          <li>Monthly: ROAS, margin, scaling/pare-back plan</li>
          <li>Delivery: Slack + PDF; scheduled **Alex Review** slot</li>
        </ul>
      </section>
    </div>
  );
}

function Founder() {
  return (
    <RoleSection
      color="slate"
      title="Founder — Direction & Review System (Alex)"
      cadence="Daily 30m; Weekly 60–90m; Monthly re-optimisation"
      objectives={["Strategy, approvals, KPI oversight, unblockers"]}
      process={[
        "Daily (30m): review dashboard, approve creatives, micro‑loom to clarify beliefs/objections",
        "Weekly: pipeline review, approve experiments, organise gameplan, prioritise delegation (content)",
        "Monthly: re-optimisation session; review revenue, cash, expenses, ROAS + 100",
      ]}
      artifacts={[
        "Strategy board",
        "Experiment approvals",
        "Miro ideation",
        "Loom briefs",
      ]}
      kpis={[
        "ROAS",
        ">85% margin",
        "Approval lead time <24h",
        "Experiment hit‑rate ≥30%",
      ]}
      extras={{
        delegation: ["Ideas for delegation (content)", "Simple revision"],
        time: "time allocation: 30min/day",
      }}
    />
  );
}

function Setter() {
  return (
    <RoleSection
      color="emerald"
      title="Setter — Conversation & Booking Engine"
      cadence="Target: 50 new, 50 old, 50 follow‑ups per day"
      objectives={[
        "Maximise Follower→Convo, Convo→PR, PR→CLS, CLS→Booked, Booked→Qualified",
      ]}
      process={[
        "Monitor inbound; trigger DM flows; qualify; pre‑frame; send CLS; complete pre‑call checklist; log outcomes",
        "Use automated follow‑ups; run story polls & questions; clear CTAs on posts",
      ]}
      artifacts={["DM scripts", "Pre‑call checklist", "CLS templates"]}
      kpis={[
        "Follower→Convo %",
        "PR rate",
        "CLS sent rate",
        "Booking rate (12.73%)",
        "$ / Booked ($83.56)",
        "Show %",
      ]}
      pipeline={[
        "inb, outb → convo's → P.R → CLS → calls booked → q. calls booked → show up",
      ]}
    />
  );
}

function OpsManager() {
  return (
    <RoleSection
      color="indigo"
      title="Ops Manager — Orchestration & SOP Compliance"
      cadence="Daily standup; 5 hours/day on content ops + process"
      objectives={["On-time delivery", "Data hygiene", "Team SLAs"]}
      process={[
        "Organise gameplans; maintain SOPs; assign work; manage editors; revisions; QA; risk logs",
        "Ensure Fathom/Grain recording tracker feeds sheet; dashboard accuracy checks",
      ]}
      artifacts={["SOPs", "Risk log", "Production calendar", "QA checklist"]}
      kpis={[
        "On-time rate ≥90%",
        "Data completeness ≥95%",
        "Experiment cycle ≤14 days",
      ]}
    />
  );
}

function CreativeDirector() {
  return (
    <RoleSection
      color="amber"
      title="Creative Director — Creative Strategy & Production"
      cadence="Time allocation: 5 hours/day"
      objectives={["High-performing hooks/angles", "Brand & mechanism clarity"]}
      process={[
        "Create ideation (Miro) + Loom brief; write creative tests; manage editors; revisions; approve final; publish calendar",
      ]}
      artifacts={[
        "Miro boards",
        "Loom briefs",
        "Creative test matrix",
        "Content calendar",
      ]}
      kpis={[
        "CTR ↑",
        "Profile visit CPC ↓",
        "$ / Follower ↓",
        "≥2 creative tests/week",
      ]}
    />
  );
}

function Closer() {
  return (
    <RoleSection
      color="rose"
      title="Closer — Sales Call & Deal Flow"
      cadence="Daily calls; weekly channel report"
      objectives={["Show%", "Offer→Close%", "Revenue", "Feedback to marketing"]}
      process={[
        "Pre-call message (WhatsApp); Calendly Q's walkthrough; reminders 24h/4h/1h; calendar + SMS confirm; pre-call primer",
        "Run CLOSER; log objections; update CRM; onboarding & access; channel report",
        "Track: shoup (show %) → offers made → closing rate → CRM updates",
        "Capture: amount of Q's per client + type of Q's per client (pp for marketing)",
      ]}
      artifacts={[
        "Call script",
        "Objection log",
        "Proposal template",
        "Channel report",
      ]}
      kpis={[
        "Show% (82.11% baseline)",
        "Offer→Close%",
        "Deal cycle time",
        "Revenue",
      ]}
    />
  );
}

function CRM() {
  return (
    <RoleSection
      color="slate"
      title="CRM — Data Hygiene & Pipeline Integrity"
      cadence="Daily hygiene; weekly audits"
      objectives={["Accurate stages", "Dedupe", "Provisioning", "Insights"]}
      process={[
        "Define fields; enforce stage transitions; dedupe; leakage alerts",
        "Recording tracker: Add Fathom to sheet; attach links to deals",
        "Client Onboarding form (tracking) captured; provision access",
        "Refresh dashboards; weekly accuracy audit",
      ]}
      artifacts={[
        "Field dictionary",
        "Stage map",
        "Onboarding form",
        "Dashboards",
      ]}
      kpis={[
        "Data completeness ≥95%",
        "Stage aging thresholds",
        "Leakage resolution <24h",
      ]}
    />
  );
}

function Editor() {
  return (
    <RoleSection
      color="emerald"
      title="Editor — Post‑Production & Publish Readiness"
      cadence="Time allocation: 5–8 hours"
      objectives={["On‑time edits", "Quality control", "Retention curves"]}
      process={[
        "Draft Editing → revision; Detail editing → revision; Final touch points → send to C.D.",
        "Add captions/metadata/CTAs; render & upload; QC",
      ]}
      artifacts={["Project files", "Version log", "QC checklist"]}
      kpis={["Turnaround time", "Error rate", "Shorts retention @3s/25/50/75%"]}
    />
  );
}

function SOPs() {
  return (
    <div className="space-y-6">
      <section className="bg-white border border-slate-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold">Operational Data Tracking SOPs</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <Block
            title="Content — Front (public)"
            items={[
              "asset ID, platform, hook, angle, CTA, UTM, publish date/time",
              "reach/CTR/engagement, click‑thru, remarketing audience IDs",
            ]}
          />
          <Block
            title="Content — Back (ops)"
            items={[
              "brief link (Loom/Miro), editor, version, QC check, approval stamp",
              "reuse tags, audience mapping",
            ]}
          />
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold">Client Gameplans & Tracking</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Block
            title="Client Gameplans"
            items={[
              "Personalised call Nik (6m gameplan)",
              "Milestones, offers, content pillars, experiment slots",
            ]}
          />
          <Block
            title="Client Tracking"
            items={[
              "Pattern behaviour (emotional state)",
              "Situational behaviour (process stage)",
              "Call recording (technical analysis)",
            ]}
          />
          <Block
            title="Client Progress"
            items={[
              "Monthly reoptimisation sessions (notes, decisions, new targets)",
            ]}
          />
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold">Business & Awareness Tracking</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Block
            title="Business"
            items={["revenue, cash, expenses, ROAS + 100, payback, margin"]}
          />
          <Block
            title="Awareness"
            items={["Followers → Qualified Followers → Origin (platform)"]}
          />
          <Block
            title="Setting Pipeline"
            items={[
              "inb, outb → convo's → P.R → CLS → calls booked → q. calls booked → show up",
            ]}
          />
        </div>
      </section>

      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <h2 className="text-lg font-bold text-amber-900">
          Quick Experiment Template
        </h2>
        <p className="text-sm text-amber-900/90">
          Use this to turn an action into a 7–14 day test. Print and fill or
          copy to your workspace.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Field
            label="Hypothesis"
            placeholder="If we [change X], then [metric] will improve because [reason]."
          />
          <Field
            label="Primary KPI"
            placeholder="e.g., $/Booked Appt, Follower→DM %, Show %"
          />
          <Field
            label="Secondary KPI"
            placeholder="e.g., CTR, CPM, email click %"
          />
          <Field
            label="Audience/Segment"
            placeholder="e.g., Warm retargeting (30d viewers)"
          />
          <Field
            label="Creative/Offer"
            placeholder="Hook angle, proof, FOMO, micro‑win"
          />
          <Field
            label="Duration & Budget"
            placeholder="e.g., 10 days, $1,500 CBO"
          />
          <Field label="Owner" placeholder="Who ships this?" />
          <Field label="Start Date" placeholder="YYYY‑MM‑DD" />
          <Field
            label="Success Threshold"
            placeholder="e.g., Show % ≥ 75% or $/Booked ≤ $90"
          />
        </div>
      </section>
    </div>
  );
}

/* ——— Role Section Template ——— */
function RoleSection({
  color = "slate",
  title,
  cadence,
  objectives = [],
  process = [],
  artifacts = [],
  kpis = [],
  pipeline = [],
  extras,
}) {
  return (
    <div className="space-y-6">
      <div
        className={`bg-white border ${borderColor(
          color
        )} rounded-2xl p-5 shadow-sm`}
      >
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <span className="text-xs text-slate-500">{cadence}</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Block title="Objectives" items={objectives} />
          <Block title="Process String" items={process} />
          <Block title="KPIs / Acceptance" items={kpis} />
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Block title="Artifacts" items={artifacts} />
          {pipeline.length > 0 && (
            <Block title="Pipeline Mapping" items={pipeline} />
          )}
          {extras && (
            <Block
              title="Notes"
              items={[
                ...(extras.delegation || []),
                extras.time ? extras.time : null,
              ].filter(Boolean)}
            />
          )}
        </div>
        {/* Quick Experiment Template inline */}
        <details className="mt-3">
          <summary className="text-sm font-semibold text-slate-700 cursor-pointer">
            Open Quick Experiment Template
          </summary>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            <Field
              label="Hypothesis"
              placeholder="If we [change X], then [metric] will improve because [reason]."
            />
            <Field
              label="Primary KPI"
              placeholder="e.g., $/Booked Appt, Follower→DM %, Show %"
            />
            <Field
              label="Secondary KPI"
              placeholder="e.g., CTR, CPM, email click %"
            />
            <Field
              label="Audience/Segment"
              placeholder="e.g., Warm retargeting (30d viewers)"
            />
            <Field
              label="Creative/Offer"
              placeholder="Hook angle, proof, FOMO, micro‑win"
            />
            <Field
              label="Duration & Budget"
              placeholder="e.g., 10 days, $1,500 CBO"
            />
            <Field label="Owner" placeholder="Who ships this?" />
            <Field label="Start Date" placeholder="YYYY‑MM‑DD" />
            <Field
              label="Success Threshold"
              placeholder="e.g., Show % ≥ 75% or $/Booked ≤ $90"
            />
          </div>
        </details>
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

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-3 bg-white shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
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

function Field({ label, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        placeholder={placeholder}
      />
    </label>
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

function borderColor(color) {
  return {
    slate: "border-slate-200",
    indigo: "border-indigo-200",
    emerald: "border-emerald-200",
    amber: "border-amber-200",
    rose: "border-rose-200",
  }[color];
}
