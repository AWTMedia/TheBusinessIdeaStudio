export default function OptimizationPlaybook() {
    const items = [
      {
        issue: "High profile visit cost",
        kpis: ["CPM/CPV", "Profile visit CPC", "CTR"],
        actions: [
          "Improve copy & creative hooks",
          "Narrow audience targeting",
          "Add retargeting loops",
        ],
      },
      {
        issue: "High cost per follower",
        kpis: ["$/Follower", "Follow CVR", "Trust score (social proof)"] ,
        actions: [
          "Prioritize action‑driven ads",
          "Optimize profile content & proof",
          "Increase trust signals (testimonials)",
        ],
      },
      {
        issue: "Low follower → conversation",
        kpis: ["Follower→DM %", "Story interaction %", "DM response time"],
        actions: [
          "Automated follow‑up DMs",
          "Increase interactive stories (polls, Qs)",
          "Clear CTA on posts",
        ],
      },
      {
        issue: "High cost per booked appointment",
        kpis: ["$/Booked Appt", "DM→Booked %", "Value touchpoints / lead"],
        actions: [
          "Pre‑frame in DMs with value",
          "Deliver free micro‑wins",
          "Use FOMO/limited spots messaging",
        ],
      },
      {
        issue: "Low show‑up rate",
        kpis: ["Show %", "No‑show %", "Reminder delivery %"],
        actions: [
          "Reminders: 24h/4h/1h",
          "Calendar invites + SMS confirm",
          "Pre‑call primer (what to expect)",
        ],
      },
    ];
  
    return (
      <div className="min-h-screen w-full bg-white text-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Optimization Playbook — Issue → Action</h1>
            <p className="text-slate-600 mt-2">A one‑pager of the core fixes across the pipeline. Use this to triage bottlenecks fast and deploy the right action set.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <Tag>Lead Gen</Tag>
              <Tag color="indigo">Nurture</Tag>
              <Tag color="amber">Conversion</Tag>
              <Tag color="emerald">Ops</Tag>
            </div>
          </header>
  
          {/* Grid of Issue → Action Cards */}
          <section className="grid md:grid-cols-2 gap-5">
            {items.map((x, i) => (
              <IssueCard key={i} issue={x.issue} kpis={x.kpis} actions={x.actions} />
            ))}
          </section>
  
          {/* Experiment Template */}
          <section className="mt-10">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h2 className="text-lg font-bold">Quick Experiment Template</h2>
              <p className="text-sm text-slate-600 mt-1">Use this to turn an action into a 7–14 day test. Print and fill or copy to your workspace.</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <Field label="Hypothesis" placeholder="If we [change X], then [metric] will improve because [reason]." />
                <Field label="Primary KPI" placeholder="e.g., $/Booked Appt, Follower→DM %, Show %" />
                <Field label="Secondary KPI" placeholder="e.g., CTR, CPM, email click %" />
                <Field label="Audience/Segment" placeholder="e.g., Warm retargeting (30d viewers)" />
                <Field label="Creative/Offer" placeholder="Hook angle, proof, FOMO, micro‑win" />
                <Field label="Duration & Budget" placeholder="e.g., 10 days, $1,500 CBO" />
                <Field label="Owner" placeholder="Who ships this?" />
                <Field label="Start Date" placeholder="YYYY‑MM‑DD" />
                <Field label="Success Threshold" placeholder="e.g., Show % ≥ 75% or $/Booked ≤ $90" />
              </div>
            </div>
          </section>
  
          {/* Footer */}
          <footer className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow">Print / Save as PDF</button>
            <span className="text-xs text-slate-500">Tip: Use A4 landscape for best fit.</span>
          </footer>
        </div>
      </div>
    );
  }
  
  /* ——— UI PRIMITIVES ——— */
  function Tag({ children, color = "slate" }) {
    const map = {
      slate: "bg-slate-100 text-slate-700",
      indigo: "bg-indigo-50 text-indigo-700",
      amber: "bg-amber-50 text-amber-700",
      emerald: "bg-emerald-50 text-emerald-700",
    };
    return <span className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}>{children}</span>;
  }
  
  function IssueCard({ issue, kpis = [], actions = [] }) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-baseline justify-between">
          <h3 className="font-semibold text-slate-900">{issue}</h3>
          <span className="text-xs text-slate-500">Issue</span>
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          <Block title="KPIs to Watch" items={kpis} tone="slate" />
          <Block title="Core Actions" items={actions} tone="emerald" />
          <Checklist />
        </div>
      </div>
    );
  }
  
  function Block({ title, items = [], tone = "slate" }) {
    const map = {
      slate: "border-slate-200 bg-slate-50",
      emerald: "border-emerald-200 bg-emerald-50",
    };
    return (
      <div className={`rounded-xl border ${map[tone].split(' ')[0]} p-4 ${map[tone].split(' ')[1]}`}> 
        <h4 className="font-medium text-slate-800">{title}</h4>
        <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
          {items.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    );
  }
  
  function Checklist() {
    const rows = ["Brief created", "Audience ready", "Creative built", "QA passed", "Launched", "Results logged"];
    return (
      <div className="rounded-xl border border-amber-200 p-4 bg-amber-50">
        <h4 className="font-medium text-amber-900">Deployment Checklist</h4>
        <ul className="mt-2 text-sm text-amber-900/90 space-y-1">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-amber-300" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Field({ label, placeholder }) {
    return (
      <label className="block">
        <span className="text-xs text-slate-600">{label}</span>
        <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder={placeholder} />
      </label>
    );
  }