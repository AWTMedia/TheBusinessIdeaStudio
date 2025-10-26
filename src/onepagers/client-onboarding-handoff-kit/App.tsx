import { useState } from "react";

export default function ClientOnboardingHandoffKit() {
  const [businessName, setBusinessName] = useState("Your Company");
  const [offerType, setOfferType] = useState("Service / Program");

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Client Onboarding & Handoff Kit — Matrix Blueprint
          </h1>
          <p className="text-slate-600 mt-2">
            Repeatable, scalable, and duplicable across businesses. Use this kit
            to move from{" "}
            <span className="font-semibold">
              Closed/Won → Kickoff → Time‑to‑Value
            </span>{" "}
            with predictability.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">Repeatable</Tag>
            <Tag color="indigo">Scalable</Tag>
            <Tag color="amber">Cross‑Industry</Tag>
            <Tag color="rose">RACI + SLAs</Tag>
          </div>
        </header>

        {/* Duplication Controls */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <h2 className="text-lg font-bold">Quick Duplicate Controls</h2>
          <p className="text-sm text-slate-600">
            Set your labels once; print or reuse for each client.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            <Field
              label="Business / Brand"
              value={businessName}
              onChange={setBusinessName}
              placeholder="Acme Co."
            />
            <Field
              label="Primary Offer Type"
              value={offerType}
              onChange={setOfferType}
              placeholder="Agency service, Coaching program, SaaS plan"
            />
            <Field label="Client Name" placeholder="Client, Inc." />
          </div>
        </section>

        {/* Pillars */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Purpose & Success Criteria">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                <strong>Purpose:</strong> compress Time‑to‑Value (TTV) and
                de‑risk delivery with clear access, plans, and SLAs.
              </li>
              <li>
                <strong>Primary KPIs:</strong> TTV (days), Onboarding completion
                %, Kickoff scheduled ≤ 3 business days, First value delivered by
                Day 7, NPS at Day 30.
              </li>
              <li>
                <strong>Cadence:</strong> 0‑Day Handoff → Kickoff (≤3 days) →
                Day 7 micro‑win → Day 30 review → Day 60/90 expansion.
              </li>
            </ul>
          </Card>
          <Card title="RACI — Roles & Ownership">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                <strong>Sales/Closer (R):</strong> Handoff pack complete,
                expectations set, intro email.
              </li>
              <li>
                <strong>Ops Manager (A):</strong> orchestrates onboarding, SLA
                watchdog, risk register.
              </li>
              <li>
                <strong>CRM Admin (C):</strong> stages/fields, pipeline
                auto‑moves, data hygiene.
              </li>
              <li>
                <strong>CSM/Account Manager (R):</strong> success plan, weekly
                comms, QBRs.
              </li>
              <li>
                <strong>Creative/Delivery Lead (R):</strong> scope translation →
                sprint plan.
              </li>
              <li>
                <strong>Finance (C):</strong> billing, contracts, collections.
              </li>
              <li>
                <strong>Founder (I):</strong> unblockers, escalations.
              </li>
            </ul>
          </Card>
          <Card title="SLAs — Time & Quality">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                <strong>Kickoff scheduled:</strong> within 3 business days of
                Closed/Won.
              </li>
              <li>
                <strong>Access completion:</strong> within 48h of kickoff
                invite.
              </li>
              <li>
                <strong>Success Plan draft:</strong> delivered by Day 3
                post‑kickoff.
              </li>
              <li>
                <strong>First value (micro‑win):</strong> delivered by Day 7.
              </li>
              <li>
                <strong>Weekly update:</strong> every Fri by 16:00 (client TZ).
              </li>
            </ul>
          </Card>
        </section>

        {/* Step String */}
        <section className="mt-6">
          <Card title="Process String (Closed/Won → Value)">
            <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>Sales→Ops Handoff Pack</strong> (auto‑generated):
                contract, scope, expectations, pricing, timeline, risks, comms
                prefs, client decision log.
              </li>
              <li>
                <strong>Welcome & Intake</strong>: welcome email, onboarding
                portal, intake form, brand assets request, calendar link.
              </li>
              <li>
                <strong>Access & Systems</strong>: permissions, pixels/tags,
                analytics, ad accounts, CRM access, website/CMS, storage,
                payment.
              </li>
              <li>
                <strong>Kickoff Call</strong>: agenda, roles, outcomes, KPIs,
                constraints; confirm success plan template.
              </li>
              <li>
                <strong>Success Plan (30/60/90)</strong>: goals, milestones,
                deliverables, owners, risks, reporting cadence.
              </li>
              <li>
                <strong>Delivery Sprint 1</strong>: setup, proofs of concept,
                micro‑win by Day 7; QA gate + client sign‑off.
              </li>
              <li>
                <strong>Weekly Comms</strong>: progress, blockers, decisions;
                update dashboard; adjust plan.
              </li>
              <li>
                <strong>Day 30 Review</strong>: NPS pulse, outcome review, scope
                confirm; plan 60/90; upsell hooks if applicable.
              </li>
              <li>
                <strong>QBR / Expansion</strong>: performance, experiments, new
                scope or scale plan.
              </li>
              <li>
                <strong>Offboarding (if ending)</strong>: assets, credentials,
                training, case study & testimonial.
              </li>
            </ol>
          </Card>
        </section>

        {/* Checklists */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <ChecklistCard
            title="Access Checklist"
            items={[
              "Primary contact details & comms channel",
              "Brand kit (logo, fonts, colors)",
              "Domains, DNS registrar access (if needed)",
              "Analytics (GA4) + Tag Manager + Pixels",
              "Ad accounts (Meta/Google/LinkedIn/YouTube)",
              "CRM access & fields map",
              "Site/CMS + landing builder access",
              "Calendar/Booking tool (e.g., Calendly)",
              "Payment processor + product/plan setup",
              "Data room (Drive/Dropbox/Notion)",
            ]}
          />
          <ChecklistCard
            title="Kickoff Agenda"
            items={[
              "Intros, roles, RACI confirmation",
              `Offer & ICP recap for ${businessName}`,
              `Success metrics for ${offerType} (leading & lagging)`,
              "Constraints & risks (time, budget, compliance)",
              "30/60/90 draft—milestones & owners",
              "Communication cadence & tools",
              "Next 7 days micro‑win & sign‑offs",
            ]}
          />
        </section>

        {/* Timeline */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Onboarding Timeline (0 → 90 days)
          </h2>
          <Timeline>
            <TimelineRow label="Handoff Pack" color="slate" days={[0, 1]} />
            <TimelineRow
              label="Welcome & Intake"
              color="emerald"
              days={[0, 1, 2]}
            />
            <TimelineRow
              label="Access & Systems"
              color="indigo"
              days={[1, 2, 3, 4]}
            />
            <TimelineRow label="Kickoff" color="amber" days={[3]} />
            <TimelineRow label="Success Plan" color="rose" days={[3, 4, 5]} />
            <TimelineRow
              label="Sprint 1 (Micro‑win)"
              color="emerald"
              days={[4, 5, 6, 7]}
            />
            <TimelineRow
              label="Weekly Updates"
              color="slate"
              days={[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]}
            />
            <TimelineRow label="Day 30 Review" color="indigo" days={[30]} />
            <TimelineRow label="Day 60 Review" color="amber" days={[60]} />
            <TimelineRow label="Day 90/QBR" color="rose" days={[90]} />
          </Timeline>
        </section>

        {/* Success Plan */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="30/60/90 Success Plan (Template)">
            <div className="grid md:grid-cols-3 gap-3">
              <Block
                title="30 Days"
                items={[
                  "Access complete",
                  "Baseline & KPI targets locked",
                  "Micro‑win delivered",
                  "Backlog groomed",
                  "First experiments launched",
                ]}
              />
              <Block
                title="60 Days"
                items={[
                  "Scale winners",
                  "Stabilize ops & SLAs",
                  "Expand creatives/audiences",
                  "Process QA & automation",
                ]}
              />
              <Block
                title="90 Days"
                items={[
                  "QBR & expansion plan",
                  "New offer tests",
                  "Benchmark vs baseline",
                  "Case study outline",
                ]}
              />
            </div>
          </Card>
          <Card title="Reporting & KPIs">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                <strong>TTV (Days)</strong> — Closed/Won → First value
                delivered.
              </li>
              <li>
                <strong>Onboarding Complete %</strong> — all checklist items
                done in SLA.
              </li>
              <li>
                <strong>Kickoff Lag</strong> — days from Closed/Won to kickoff.
              </li>
              <li>
                <strong>NPS @ D30</strong> and CSAT on touchpoints.
              </li>
              <li>
                <strong>Delivery KPIs</strong> — per offer (e.g., leads, CPA,
                ROAS, retention curves).
              </li>
            </ul>
          </Card>
        </section>

        {/* Automations */}
        <section className="mt-6">
          <Card title="Automation Map (example tooling: HubSpot + n8n + Slack + Calendly + Drive)">
            <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>Deal = Closed/Won →</strong> create client folder,
                templated success plan, Slack channel, kickoff invite draft.
              </li>
              <li>
                <strong>Welcome sent →</strong> log timestamp; if no intake in
                48h, send reminder + assign task to Ops.
              </li>
              <li>
                <strong>Access items checked →</strong> move CRM stage; trigger
                pixel/analytics QA checklist.
              </li>
              <li>
                <strong>Kickoff completed →</strong> generate 30/60/90 doc;
                create sprint 1 tasks; set weekly update cadence event.
              </li>
              <li>
                <strong>Day 7 micro‑win →</strong> request testimonial snippet;
                update dashboard; alert CSM.
              </li>
              <li>
                <strong>D30 review booked →</strong> send NPS form; pre‑read of
                KPIs and decisions.
              </li>
            </ol>
          </Card>
        </section>

        {/* Templates */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Templates — Comms">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Welcome email + onboarding portal link</li>
              <li>Access request bundle (one link)</li>
              <li>Kickoff invite + agenda</li>
              <li>Weekly update format (Wins/Work/Risks/Asks)</li>
              <li>Change request form</li>
              <li>Offboarding + case study consent</li>
            </ul>
          </Card>
          <Card title="Templates — Docs">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Handoff pack (from Sales)</li>
              <li>30/60/90 Success Plan</li>
              <li>Risk register & decision log</li>
              <li>QA checklists per deliverable</li>
              <li>SLA & RACI sheet</li>
            </ul>
          </Card>
          <Card title="Templates — Data">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Event dictionary + UTM schema</li>
              <li>Dashboard (baseline vs target vs actual)</li>
              <li>NPS/CSAT forms</li>
              <li>Access inventory sheet</li>
            </ul>
          </Card>
        </section>

        {/* Risks */}
        <section className="mt-6">
          <Card title="Risk & Escalation">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                <strong>Access delays</strong> → 48h reminder + escalate to exec
                sponsor.
              </li>
              <li>
                <strong>Scope ambiguity</strong> → freeze sprint until scope
                confirmed; record decision.
              </li>
              <li>
                <strong>Data/attribution gaps</strong> → trigger QA workflow;
                block launch until green.
              </li>
              <li>
                <strong>Comms slippage</strong> → auto‑remind; roll‑up in
                weekly; owner accountable.
              </li>
              <li>
                <strong>Cash/billing issues</strong> → Finance ping; pause
                policy per contract.
              </li>
            </ul>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Optimized for 1280–1440px (MacBook Air). Use A4 landscape when
            printing.
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

function Card({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  const controlProps = onChange
    ? { value: value ?? "", onChange: (e) => onChange(e.target.value) }
    : { defaultValue: value ?? "" };
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        {...controlProps}
        placeholder={placeholder}
      />
    </label>
  );
}

function ChecklistCard({ title, items = [] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 text-sm text-slate-800 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ——— Timeline ——— */
function Timeline({ children }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[180px_repeat(12,minmax(0,1fr))] text-xs bg-slate-50 border-b border-slate-200">
        <div className="px-3 py-2 font-semibold text-slate-700">Workstream</div>
        {[0, 7, 14, 21, 30, 45, 60, 75, 90, 105, 120, 135].map((d, i) => (
          <div key={i} className="px-3 py-2 text-slate-500">
            D{d}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

function TimelineRow({ label, days = [], color = "slate" }) {
  const active = new Set(days);
  return (
    <div className="grid grid-cols-[180px_repeat(12,minmax(0,1fr))] border-b border-slate-100 last:border-0">
      <div className="px-3 py-3 text-sm font-medium text-slate-800 bg-white flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded ${colorBg(color)}`} />
        {label}
      </div>
      {[0, 7, 14, 21, 30, 45, 60, 75, 90, 105, 120, 135].map((d, i) => (
        <div key={i} className="px-2 py-3">
          <div
            className={`h-3 rounded ${
              active.has(d) ? colorBg(color) : "bg-slate-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function colorBg(color) {
  return {
    slate: "bg-slate-300",
    indigo: "bg-indigo-300",
    emerald: "bg-emerald-300",
    amber: "bg-amber-300",
    rose: "bg-rose-300",
  }[color];
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
