export default function PipelineMatrix() {
    return (
      <div className="min-h-screen w-full bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Full Pipeline Matrix</h1>
            <p className="text-slate-600 mt-2">Market → Lead Generation → Nurture & Qualification → Conversion. A single-page operating diagram you can run in any niche.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">Repeatable</span>
              <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Avatar-led</span>
              <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700">System-first</span>
            </div>
          </header>
  
          {/* Pre-Stage: Market & Value Selection */}
          <section className="mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h2 className="font-bold text-lg mb-3">Stage 1 — Market & Value Selection</h2>
                <div className="grid md:grid-cols-4 gap-3 text-sm">
                  <Card label="1. What marketplace?" items={["e.g., Luxury services, Mid-market SaaS, Scaled creators"]} />
                  <Card label="2. Is the marketplace wealthy?" items={["Ticket size, budgets, CAC tolerance, speed to pay"]} />
                  <Card label="3. What value do they need most?" items={["Demand gen, conversion, retention, automation, ops leverage"]} />
                  <Card label="4. Is the value high?" items={["1 win pays for the system? ΔROI vs status quo"]} />
                </div>
              </div>
            </div>
          </section>
  
          {/* Main Flow */}
          <section className="relative">
            {/* Flow arrows (decorative) */}
            <div className="hidden md:flex items-center justify-between mb-3 text-slate-400">
              <span className="text-xs">Market Fit ✓</span>
              <span>➡️</span>
              <span className="text-xs">Lead Gen</span>
              <span>➡️</span>
              <span className="text-xs">Nurture & Qualify</span>
              <span>➡️</span>
              <span className="text-xs">Conversion</span>
              <span>➡️</span>
              <span className="text-xs">Revenue</span>
            </div>
  
            <div className="grid lg:grid-cols-4 gap-5">
              {/* Column A: Lead Gen Systems */}
              <Stage title="Stage 2A — Lead Generation Systems" subtitle="Fill the top of the funnel with qualified attention.">
                <Block title="Profile Funnel (Organic)" bullets={["Profile positioning: problem → promise → CTA","Pinned proof posts (case study, framework)","Every post → one low-friction CTA (guide, DM keyword)","AI DM triage to auto-qualify"]} />
                <Block title="Outbound" bullets={["Cold email to narrow ICP (vertical + signals)","LinkedIn connect → value drop → CTA","Partner/Affiliate loops (SaaS, brokers, communities)"]} />
                <Block title="Paid Inbound" bullets={["Magnet ads to free asset / audit","Mini-VSL direct offer ads","Retargeting (views → case study/VSL)"]} />
              </Stage>
  
              {/* Column B: Nurture & Qualification */}
              <Stage title="Stage 2B — Nurture & Qualification (Content Ecosystem)" subtitle="Build belief, filter for fit, and pre-sell before the call.">
                <Block title="Authority & Proof" bullets={["Case studies, ROI screenshots, testimonials","Before/After transformations"]} />
                <Block title="Value Education" bullets={["Framework breakdowns, models, numbered steps","Short ‘wins’ to build reciprocity"]} />
                <Block title="Qualification" bullets={["Who we serve / who we don’t","Pricing anchors, expectations, timelines"]} />
                <Block title="Trust & Relationship" bullets={["Founder stories, philosophy, BTS ops","Objection replies in public"]} />
                <Block title="Conversion Assist" bullets={["CTA posts, comparison one-pagers","FAQ/objection carousels, decision guides"]} />
                <Divider />
                <Block title="Primary Formats" bullets={["YouTube breakdowns (5–12 min)","Shorts/Reels/TikTok (30–60s)","Carousels & text posts (LinkedIn/X)","Email drips (5–7 emails)","Community posts (Skool/Discord)"]} />
              </Stage>
  
              {/* Column C: Conversion Systems */}
              <Stage title="Stage 2C — Conversion Systems" subtitle="Turn warm, qualified demand into predictable revenue.">
                <Block title="Story Ad Sequence" bullets={["Credibility → Problem → Solution → Proof → Urgency","Run via IG Story ads, email drips, community"]} />
                <Block title="Core Conversion Assets" bullets={["VSL (10–20 min) with big idea + proof","Webinar / Live training","One-pagers (our system vs DIY/others)","Calendly with qualifying questions"]} />
                <Block title="Sales Process Layer" bullets={["AI SDR follow-ups until booked","CLOSER call framework","Risk-reversal guarantee"]} />
              </Stage>
  
              {/* Column D: Avatar Filter (applies everywhere) */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-rose-800">Avatar Filter — 7 Questions</h3>
                <p className="text-sm text-rose-700 mt-1">Run EVERY idea/asset through this filter.</p>
                <ol className="text-sm mt-3 space-y-2 list-decimal list-inside text-rose-900">
                  <li>Who is the avatar?</li>
                  <li>What is their main problem?</li>
                  <li>What outcome do they want?</li>
                  <li>How do they want to receive info?</li>
                  <li>What belief must shift?</li>
                  <li>What story/proof/framework makes it stick?</li>
                  <li>What’s the next step (CTA)?</li>
                </ol>
                <div className="mt-4 text-xs text-rose-800/80">
                  <p>Rule: One avatar → one problem → one belief shift → one CTA.</p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Production Timeline */}
          <section className="mt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-lg mb-3">Stage 3 — Production & Distribution Method</h2>
              <div className="grid md:grid-cols-6 gap-3 text-sm">
                <Step num={1} label="Record 30–60m weekly" desc="Talking-head, whiteboard, Loom case study." />
                <Step num={2} label="Clip to 5–10 shorts" desc="Pattern-interrupt hooks; CTA to asset." />
                <Step num={3} label="Repurpose to text" desc="Carousels, LinkedIn, X; key quotes." />
                <Step num={4} label="Transcribe → long-form" desc="Blogs, newsletters, downloadable guides." />
                <Step num={5} label="Auto-schedule" desc="Notion → AI → scheduler (Metricool/Later)." />
                <Step num={6} label="Insert into flows" desc="Email drips, DM automations, retargeting." />
              </div>
            </div>
          </section>
  
          {/* KPIs & Feedback */}
          <section className="mt-8">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-emerald-800">Lead Gen KPIs</h3>
                <ul className="mt-2 text-sm text-emerald-900 space-y-1 list-disc list-inside">
                  <li>Profile → CTA click-through rate</li>
                  <li>Cold outbound reply rate</li>
                  <li>Magnet cost per lead & quality score</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-indigo-800">Nurture KPIs</h3>
                <ul className="mt-2 text-sm text-indigo-900 space-y-1 list-disc list-inside">
                  <li>Email open & click, YouTube avg. watch time</li>
                  <li>Lead score progression (cold → warm → hot)</li>
                  <li>Time-to-first-call from first touch</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-amber-800">Conversion KPIs</h3>
                <ul className="mt-2 text-sm text-amber-900 space-y-1 list-disc list-inside">
                  <li>Booked-call → close rate</li>
                  <li>VSL/Webinar completion & CTA clicks</li>
                  <li>Payback period & ΔROI vs baseline</li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Utility bar */}
          <footer className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow">Print / Save as PDF</button>
            <span className="text-xs text-slate-500">Tip: Use A4 landscape for best fit.</span>
          </footer>
        </div>
      </div>
    );
  }
  
  function Stage({ title, subtitle, children }) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
        <div className="mt-4 space-y-4">{children}</div>
      </div>
    );
  }
  
  function Block({ title, bullets }) {
    return (
      <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
        <h4 className="font-medium text-slate-800">{title}</h4>
        <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Divider() {
    return <div className="h-px bg-slate-200 my-2" />;
  }
  
  function Card({ label, items }) {
    return (
      <div className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
        <p className="text-sm font-medium text-slate-900">{label}</p>
        <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Step({ num, label, desc }) {
    return (
      <div className="rounded-xl border border-slate-200 p-4 bg-white">
        <div className="flex items-start gap-3">
          <div className="h-7 w-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mt-0.5">{num}</div>
          <div>
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-xs text-slate-600 mt-1">{desc}</p>
          </div>
        </div>
      </div>
    );
  }