// 90-Day Client Implementation Matrix — React + Tailwind
// One-file component (uses Tailwind). Drop into your /components or /app as needed.

export default function ImplementationMatrix() {
    return (
      <div className="min-h-screen w-full bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              90-Day Client Implementation Matrix
            </h1>
            <p className="text-slate-600 mt-2">
              Sequenced rollout of Nurture-first pipeline: Foundations → Nurture & Qualification → Lead Generation → Conversion. Built for predictability and ROI.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <Tag color="emerald">Nurture-first</Tag>
              <Tag color="indigo">Avatar-led</Tag>
              <Tag color="amber">System-first</Tag>
              <Tag color="rose">Revenue-backed</Tag>
            </div>
          </header>
  
          {/* Phase Cards */}
          <section className="grid lg:grid-cols-4 gap-5">
            <PhaseCard
              phase="Phase 1 — Foundations"
              weeks="Weeks 1–2"
              desc="Establish clarity, positioning, tracking, and profile funnel basics."
              items={[
                { t: "Avatar & Offer Mapping", d: "ICP, problems, outcomes, triggers, pricing, guarantee." },
                { t: "Profile Funnel Setup", d: "Bios, banner promise, pinned proof post, single CTA (free asset/DM)." },
                { t: "Baseline Tracking", d: "GTM, pixels, CRM (HubSpot/GoHighLevel), Calendly + events, KPI sheet." }
              ]}
              tone="slate"
            />
  
            <PhaseCard
              phase="Phase 2 — Nurture & Qualification"
              weeks="Weeks 3–5"
              desc="Build the container that educates, filters, and pre-sells incoming traffic."
              items={[
                { t: "Content Ecosystem", d: "Record 30–60m weekly → 5–10 shorts, 1 YT breakdown, 2 carousels, 2 text posts, blog/email." },
                { t: "Email Drip (5–7)", d: "Welcome + proof + objections + framework + CTA to book call." },
                { t: "Community Layer (opt)", d: "Skool/Discord hub; weekly frameworks, polls, wins." },
                { t: "Qualification", d: "Lead scoring (opens/clicks/DMs), pre-call survey (budget/timeline/need)." }
              ]}
              tone="indigo"
            />
  
            <PhaseCard
              phase="Phase 3 — Lead Generation"
              weeks="Weeks 6–8"
              desc="Open traffic streams now that nurture is live."
              items={[
                { t: "Organic Profile Funnel", d: "Authority + proof posts; all roads → free asset/DM automation." },
                { t: "Outbound Engine", d: "Cold email to narrow ICP; LinkedIn connect → value → CTA; partner/affiliate loops." },
                { t: "Paid Ads Engine", d: "Magnet ads → free asset/audit; retarget with case studies + YT clips." }
              ]}
              tone="emerald"
            />
  
            <PhaseCard
              phase="Phase 4 — Conversion Systems"
              weeks="Weeks 9–12"
              desc="Turn nurtured, qualified leads into predictable revenue."
              items={[
                { t: "Story Ad Sequence", d: "Credibility → Problem → Solution → Proof → Urgency (IG Stories, email, community)." },
                { t: "Conversion Assets", d: "VSL (10–20m), Webinar/Workshop, One-pager (our system vs DIY/others)." },
                { t: "Sales Process", d: "Calendly with qual form, AI SDR follow-ups (DM/email/SMS), CLOSER framework, risk reversal." }
              ]}
              tone="amber"
            />
          </section>
  
          {/* Timeline Grid */}
          <section className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Gantt-style Timeline (12 Weeks)</h2>
              <Legend />
            </div>
            <Timeline>
              <TimelineRow label="Foundations" color="slate" weeks={[1, 2]} />
              <TimelineRow label="Nurture & Qualification" color="indigo" weeks={[3, 4, 5]} />
              <TimelineRow label="Lead Generation" color="emerald" weeks={[6, 7, 8]} />
              <TimelineRow label="Conversion Systems" color="amber" weeks={[9, 10, 11, 12]} />
            </Timeline>
          </section>
  
          {/* System Details by Row */}
          <section className="mt-8 grid lg:grid-cols-3 gap-5">
            <SystemBlock
              title="Lead Gen Systems"
              tone="emerald"
              bullets={[
                "Profile Funnel: bio promise, pinned proof, single CTA to asset/DM",
                "Outbound: curated ICP list, cold email + LinkedIn flows",
                "Paid Inbound: magnet ads, mini-VSL tests, retargeting to case studies"
              ]}
            />
            <SystemBlock
              title="Nurture & Qualification"
              tone="indigo"
              bullets={[
                "YouTube breakdowns (5–12m), Shorts (30–60s), carousels & text posts",
                "Email drips (5–7): welcome, proof, objections, framework, CTA",
                "Lead scoring + pre-call survey; community hub for trust"
              ]}
            />
            <SystemBlock
              title="Conversion Systems"
              tone="amber"
              bullets={[
                "Story Ad Sequence across IG/email/community",
                "VSL/Webinar + one-pagers",
                "AI SDR follow-ups → CLOSER call → guarantee close"
              ]}
            />
          </section>
  
          {/* KPI Bar */}
          <section className="mt-8 grid md:grid-cols-3 gap-5">
            <KpiCard title="Lead Gen KPIs" tone="emerald" items={["Profile → CTA CTR", "Cold reply rate", "CPL & quality score"]} />
            <KpiCard title="Nurture KPIs" tone="indigo" items={["YT watch time, email open/click", "Lead score (cold→warm→hot)", "Time-to-first-call"]} />
            <KpiCard title="Conversion KPIs" tone="amber" items={["Call→close rate", "VSL/Webinar completion", "Payback period & ΔROI"]} />
          </section>
  
          {/* Footer */}
          <footer className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow">
              Print / Save as PDF
            </button>
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
      emerald: "bg-emerald-50 text-emerald-700",
      indigo: "bg-indigo-50 text-indigo-700",
      amber: "bg-amber-50 text-amber-700",
      rose: "bg-rose-50 text-rose-700",
    };
    return <span className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}>{children}</span>;
  }
  
  function PhaseCard({ phase, weeks, desc, items, tone = "slate" }) {
    const toneMap = {
      slate: "border-slate-200",
      indigo: "border-indigo-200",
      emerald: "border-emerald-200",
      amber: "border-amber-200",
    };
    return (
      <div className={`bg-white border ${toneMap[tone]} rounded-2xl p-5 shadow-sm`}>
        <div className="flex items-baseline justify-between">
          <h3 className="font-semibold text-slate-900">{phase}</h3>
          <span className="text-xs text-slate-500">{weeks}</span>
        </div>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        <ul className="mt-4 text-sm text-slate-800 space-y-2 list-disc list-inside">
          {items.map((x, i) => (
            <li key={i}>
              <span className="font-medium">{x.t}:</span> {x.d}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Legend() {
    const entries = [
      { c: "slate", l: "Foundations" },
      { c: "indigo", l: "Nurture & Qualification" },
      { c: "emerald", l: "Lead Generation" },
      { c: "amber", l: "Conversion" },
    ];
    return (
      <div className="flex items-center gap-3 text-xs">
        {entries.map((e, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`h-3 w-3 rounded ${colorBg(e.c)}`} />
            <span className="text-slate-600">{e.l}</span>
          </div>
        ))}
      </div>
    );
  }
  
  function Timeline({ children }) {
    return (
      <div className="border border-slate-200 rounded-2xl overflow-hidden">
        {/* FIXED GRID: use arbitrary template so weeks render horizontally */}
        <div className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] text-xs bg-slate-50 border-b border-slate-200">
          <div className="px-3 py-2 font-semibold text-slate-700">System</div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="px-3 py-2 text-slate-500">
              W{i + 1}
            </div>
          ))}
        </div>
        <div>{children}</div>
      </div>
    );
  }
  
  function TimelineRow({ label, weeks = [], color = "slate" }) {
    const active = new Set(weeks);
    return (
      // FIXED GRID: same template as header row
      <div className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] border-b border-slate-100 last:border-0">
        <div className="px-3 py-3 text-sm font-medium text-slate-800 bg-white flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded ${colorBg(color)}`} />
          {label}
        </div>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="px-2 py-3">
            <div className={`h-3 rounded ${active.has(i + 1) ? colorBg(color) : "bg-slate-100"}`} />
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
  
  function SystemBlock({ title, bullets, tone = "slate" }) {
    const map = {
      slate: "border-slate-200",
      indigo: "border-indigo-200",
      emerald: "border-emerald-200",
      amber: "border-amber-200",
    };
    return (
      <div className={`bg-white border ${map[tone]} rounded-2xl p-5 shadow-sm`}>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <ul className="mt-2 text-sm text-slate-800 space-y-1 list-disc list-inside">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function KpiCard({ title, items, tone = "slate" }) {
    const map = {
      slate: "border-slate-200",
      indigo: "border-indigo-200",
      emerald: "border-emerald-200",
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