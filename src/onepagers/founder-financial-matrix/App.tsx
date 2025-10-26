import { useMemo, useState } from "react";

export default function FounderFinancialMatrix() {
  // --- Assumptions (editable) ---
  const [adSpend, setAdSpend] = useState(12182);
  const [showsQualified, setShowsQualified] = useState(101);
  const [closeRate, setCloseRate] = useState(0.3); // 30%
  const [asp, setAsp] = useState(5000); // Avg selling price
  const [perShownCost, setPerShownCost] = useState(120.61);
  const [overheadPerDeal, setOverheadPerDeal] = useState(800); // people+tools allocation per deal
  const [mediaContingency, setMediaContingency] = useState(0.15);
  const [mode, setMode] = useState("lean"); // lean | pro

  // People/Tools monthly targets (approx from Step 1)
  const peopleTools = useMemo(() => {
    return mode === "lean"
      ? { min: 17000, max: 19500, tooling: 1500 }
      : { min: 20000, max: 25000, tooling: 2000 };
  }, [mode]);

  // --- Derived metrics ---
  const deals = useMemo(
    () => showsQualified * closeRate,
    [showsQualified, closeRate]
  );
  const revenue = useMemo(() => deals * asp, [deals, asp]);
  const roas = useMemo(
    () => (adSpend > 0 ? revenue / adSpend : 0),
    [revenue, adSpend]
  );
  const adCACPerDeal_MethodA = useMemo(
    () => (closeRate > 0 ? perShownCost / closeRate : 0),
    [perShownCost, closeRate]
  );
  const adCACPerDeal_MethodB = useMemo(
    () => (deals > 0 ? adSpend / deals : 0),
    [adSpend, deals]
  );
  const allInCAC = useMemo(
    () => adCACPerDeal_MethodB + overheadPerDeal,
    [adCACPerDeal_MethodB, overheadPerDeal]
  );

  // Scenarios
  const scenarios = useMemo(() => {
    const cons = calcScenario({
      shows: showsQualified * 0.8,
      close: 0.25,
      asp: 4500,
      spend: adSpend,
    });
    const base = calcScenario({
      shows: showsQualified,
      close: 0.3,
      asp: 5000,
      spend: adSpend,
    });
    const aggr = calcScenario({
      shows: showsQualified * 1.2,
      close: 0.35,
      asp: 6000,
      spend: adSpend,
    });
    return { cons, base, aggr };
  }, [showsQualified, adSpend]);

  // Phase budgets (monthly targets)
  const phaseBudgets = useMemo(
    () => ({
      foundations: { range: [2000, 4000], note: "Ops/CRM + setup" },
      nurture: { range: [7500, 15000], note: "CD + Editors + ESP + repurpose" },
      leadgen: { range: [12000, 35000], note: "Dominated by ads + data" },
      conversion: { range: [1500, 6000], note: "Closer/CRM + tools" },
    }),
    []
  );

  const totalLeanBase = 31700; // from Step 1 plan

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-6 sticky top-0 z-10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
          <div className="py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Founder Financial Analysis Matrix
              </h1>
              <div className="flex items-center gap-2 text-xs">
                <Tag color="emerald">LinkedIn &gt; Email (Outbound)</Tag>
                <Tag color="indigo">Meta &gt; YouTube &gt; LinkedIn (Paid)</Tag>
                <Tag color="amber">Nurture‑first</Tag>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-1">
              Budgeting, risk projection, and opportunity modeling for the 4
              systems. All numbers editable.
            </p>
          </div>
        </header>

        {/* Controls */}
        <section className="mt-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold">Assumptions</h2>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-600">Mode</span>
                <button
                  onClick={() => setMode("lean")}
                  className={`px-2 py-1 rounded ${
                    mode === "lean"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  Lean
                </button>
                <button
                  onClick={() => setMode("pro")}
                  className={`px-2 py-1 rounded ${
                    mode === "pro"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  Pro
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              <Slider
                label="Ad Spend"
                min={5000}
                max={50000}
                step={100}
                value={adSpend}
                onChange={setAdSpend}
                fmt={fmtUSD}
              />
              <Slider
                label="Shown (Qualified) per month"
                min={50}
                max={200}
                step={1}
                value={showsQualified}
                onChange={setShowsQualified}
              />
              <Slider
                label="Close Rate"
                min={0.15}
                max={0.5}
                step={0.01}
                value={closeRate}
                onChange={setCloseRate}
                fmt={fmtPct}
              />
              <Slider
                label="Avg Selling Price (ASP)"
                min={3000}
                max={10000}
                step={100}
                value={asp}
                onChange={setAsp}
                fmt={fmtUSD}
              />
              <Slider
                label="Per Shown Qualified Cost"
                min={60}
                max={250}
                step={1}
                value={perShownCost}
                onChange={setPerShownCost}
                fmt={fmtUSD}
              />
              <Slider
                label="Overhead per Deal (People+Tools alloc)"
                min={300}
                max={1500}
                step={25}
                value={overheadPerDeal}
                onChange={setOverheadPerDeal}
                fmt={fmtUSD}
              />
            </div>
          </div>
        </section>

        {/* Snapshot + Derived */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Snapshot → Derived (Base)" tone="white">
            <div className="grid grid-cols-2 gap-3">
              <Metric label="Deals / mo" value={fmtNum(deals)} />
              <Metric label="Revenue / mo" value={fmtUSD(revenue)} />
              <Metric label="ROAS" value={`${fmtNum(roas, 1)}x`} />
              <Metric
                label="Ad CAC / deal (A)"
                value={fmtUSD(adCACPerDeal_MethodA)}
                sub="Per‑shown ÷ close"
              />
              <Metric
                label="Ad CAC / deal (B)"
                value={fmtUSD(adCACPerDeal_MethodB)}
                sub="Spend ÷ deals"
              />
              <Metric
                label="All‑in CAC / deal"
                value={fmtUSD(allInCAC)}
                sub="Ad CAC (B) + overhead"
              />
            </div>
          </Card>
          <Card title="People & Tools Bundle" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                Mode:{" "}
                <strong className="font-semibold">
                  {mode === "lean" ? "Lean" : "Pro"}
                </strong>
              </li>
              <li>
                People/Tools monthly target:{" "}
                <strong>
                  {fmtUSD(peopleTools.min)} – {fmtUSD(peopleTools.max)}
                </strong>
              </li>
              <li>
                Tooling baseline (stack):{" "}
                <strong>{fmtUSD(peopleTools.tooling)}/mo</strong>
              </li>
              <li>
                Media contingency: <strong>{fmtPct(mediaContingency)}</strong>
              </li>
            </ul>
          </Card>
          <Card title="Breakeven & Sanity" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                Breakeven (1 deal covers ≈ {fmtUSD(adCACPerDeal_MethodB)} ad CAC
                at current mix)
              </li>
              <li>
                At ASP {fmtUSD(asp)} & close {fmtPct(closeRate)}, unit econ are{" "}
                <strong>healthy</strong>
              </li>
              <li>
                Total Lean baseline (from plan):{" "}
                <strong>{fmtUSD(totalLeanBase)}/mo</strong>
              </li>
            </ul>
          </Card>
        </section>

        {/* Scenarios */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Scenarios (Risk & Opportunity)
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ScenarioCard label="Conservative (C‑20)" data={scenarios.cons} />
            <ScenarioCard label="Base (B)" data={scenarios.base} highlight />
            <ScenarioCard label="Aggressive (A+20)" data={scenarios.aggr} />
          </div>
        </section>

        {/* Budgets by Phase */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Budget by Phase (Monthly Targets)
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <BudgetCard
              phase="P1 Foundations"
              note={phaseBudgets.foundations.note}
              range={phaseBudgets.foundations.range}
            />
            <BudgetCard
              phase="P2 Nurture & Qualify"
              note={phaseBudgets.nurture.note}
              range={phaseBudgets.nurture.range}
            />
            <BudgetCard
              phase="P3 Lead Gen"
              note={phaseBudgets.leadgen.note}
              range={phaseBudgets.leadgen.range}
            />
            <BudgetCard
              phase="P4 Conversion"
              note={phaseBudgets.conversion.note}
              range={phaseBudgets.conversion.range}
            />
          </div>
        </section>

        {/* Cost Taxonomy */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Cost Taxonomy — People & Semi‑Variable" tone="white">
            <div className="grid md:grid-cols-2 gap-4">
              <Block
                title="Fixed (mo)"
                items={[
                  "Setter $1.5k–$4.0k",
                  "Ops Manager $3.0k–$5.0k",
                  "Creative Director $5.0k–$8.0k",
                  "Closer base $0–$4.0k (+comm)",
                  "CRM $2.0k–$4.0k",
                  "Editor(s) $2.0k–$5.0k",
                  "Founder shadow $0–$5.0k (optional)",
                ]}
              />
              <Block
                title="Semi‑Variable"
                items={[
                  "Editing/captions $75–$200 / asset",
                  "Copy/design $100–$300 / asset",
                  "Data enrichment $200–$600 / 1–2k leads",
                  "Call transcription/AI $100–$300",
                ]}
              />
            </div>
          </Card>
          <Card title="Cost Taxonomy — Media & Tools" tone="white">
            <div className="grid md:grid-cols-2 gap-4">
              <Block
                title="Variable (media & outbound)"
                items={[
                  "Paid media baseline $12,182/mo (scale $10k–$30k)",
                  "Sales Navigator + InMail $100–$200",
                  "Email send/domains $100–$300",
                  "SMS/WhatsApp $50–$150",
                ]}
              />
              <Block
                title="Software Stack"
                items={[
                  "HubSpot $100–$900",
                  "Klaviyo $150–$600",
                  "Calendly $12–$24/seat",
                  "n8n $20–$70",
                  "Wistia $99–$399",
                  "Webflow/Framer $25–$75",
                  "PandaDoc $29–$59/seat",
                  "Stripe 2.9%+¢",
                ]}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Target monthly tooling bundle: $1.2k–$2.5k
            </p>
          </Card>
        </section>

        {/* Role-level Costing & Output */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Role Costing & Output Expectations
          </h2>
          <div className="overflow-auto border border-slate-200 rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <Th>Role</Th>
                  <Th>Target Cost</Th>
                  <Th>Output / SLA</Th>
                  <Th>Risk if Under‑resourced</Th>
                </tr>
              </thead>
              <tbody>
                <Tr
                  role="Founder"
                  cost="$0–$5k"
                  output="30m daily review; 1 weekly pillar"
                  risk="Strategy drift; slow approvals"
                />
                <Tr
                  role="Setter"
                  cost="$1.5–$4k"
                  output="50 new / 50 old / 50 follow‑ups / day; PR→CLS"
                  risk="Low Follower→Convo; high $/Booked"
                />
                <Tr
                  role="Ops Manager"
                  cost="$3–$5k"
                  output="On‑time ≥90%; data completeness ≥95%"
                  risk="Slippage; broken attribution"
                />
                <Tr
                  role="Creative Director"
                  cost="$5–$8k"
                  output="≥2 creative tests/week; CTR↑; CPC↓"
                  risk="High profile visit cost; weak hooks"
                />
                <Tr
                  role="Editor"
                  cost="$2–$5k"
                  output="5–10 shorts/wk + 1 pillar; low error rate"
                  risk="Bottlenecks; poor retention"
                />
                <Tr
                  role="Closer (base)"
                  cost="$0–$4k (+comm)"
                  output="Show ≥75–85%; Close 25–40%"
                  risk="No‑show, low win‑rate"
                />
                <Tr
                  role="CRM"
                  cost="$2–$4k"
                  output="Hygiene ≥95%; leakage <24h"
                  risk="Bad forecasts; lost deals"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Opportunity Levers & Risks */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Opportunity Levers (Δ$ impact)" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                Lower profile visit CPC (creative/targeting): −20% CPM/CPC →
                +15–25% visits → +8–15% bookings
              </li>
              <li>
                Automated DM follow‑ups + polls: +10–20% Follower→Convo at same
                spend
              </li>
              <li>
                Pre‑frame & micro‑wins in DMs: −15–25% $/Booked; better Show%
              </li>
              <li>
                Reminder stack (24h/4h/1h + WA/SMS): Show% +8–12pp → +3–5 deals
                @30–35% close
              </li>
              <li>
                Proof‑heavy Stories + VSL re‑cuts: +10–20% VSL completion and
                Booked
              </li>
            </ul>
          </Card>
          <Card title="Risk Bands & Contingency" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>
                Media volatility: CPM ±25% → keep {fmtPct(mediaContingency)}{" "}
                contingency
              </li>
              <li>
                Platform policy changes: diversify (Meta + YT + LI); 2–3 live
                creatives/angle
              </li>
              <li>Ops risk: data leakage → weekly audits; n8n alerts</li>
              <li>
                People risk: backup editor; closer bench (commission‑only)
              </li>
              <li>Cash flow: keep 6–8 weeks OPEX runway</li>
            </ul>
          </Card>
        </section>

        {/* Inputs to Finalize */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            To Finalize Accurate Projections
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Block
              title="Commercial Inputs"
              items={[
                "ASP/AOV by tier; delivery COGS",
                "Close rate by source (30/60d)",
                "Calendar capacity & fulfillment bandwidth",
              ]}
            />
            <Block
              title="Ops Inputs"
              items={[
                "ESP list size (tiering)",
                "Spend caps per ad account",
                "Team comp structure (retainer/FT/commission)",
              ]}
            />
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Executive Budget (Lean, Base Media $12.2k)" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>People/Tools: $17–$19.5k</li>
              <li>Media/Variable: $12.2–$13.5k</li>
              <li>
                <strong>Total: $29–$33k / month</strong>
              </li>
              <li>Expected Revenue (Base): ~${fmtNum(151000)} → ROAS 12.4x</li>
            </ul>
          </Card>
          <Card title="Executive Budget (Scale, Media $20k)" tone="white">
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>People/Tools: $20–$25k</li>
              <li>Media/Variable: $20–$22k</li>
              <li>
                <strong>Total: $40–$47k / month</strong>
              </li>
              <li>Revenue potential: $200k–$250k+ (ROAS ≥ 10x)</li>
            </ul>
          </Card>
        </section>

        {/* Print */}
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

/* ——— Helpers & Components ——— */
function calcScenario({ shows, close, asp, spend }) {
  const deals = shows * close;
  const revenue = deals * asp;
  return {
    shows,
    close,
    asp,
    spend,
    deals,
    revenue,
    roas: spend > 0 ? revenue / spend : 0,
  };
}

function fmtUSD(n) {
  const num = Number(n);
  if (!isFinite(num)) return "$0";
  return num.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
function fmtPct(n) {
  return `${(n * 100).toFixed(0)}%`;
}
function fmtNum(n, d = 0) {
  const num = Number(n);
  if (!isFinite(num)) return "0";
  return num.toLocaleString(undefined, { maximumFractionDigits: d });
}

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

function Slider({ label, min, max, step, value, onChange, fmt }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3 bg-white">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-slate-800">{label}</span>
        <span className="text-sm text-slate-600">
          {fmt ? fmt(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full mt-2"
      />
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>{fmt ? fmt(min) : min}</span>
        <span>{fmt ? fmt(max) : max}</span>
      </div>
    </div>
  );
}

function Card({ title, children, tone = "white" }) {
  const border = tone === "white" ? "border-slate-200" : "border-indigo-200";
  return (
    <div className={`bg-white border ${border} rounded-2xl p-4 shadow-sm`}>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      {children}
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

function Metric({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3 bg-white">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-xl font-bold mt-0.5">{value}</p>
      {sub && <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>}
    </div>
  );
}

function ScenarioCard({ label, data, highlight }) {
  return (
    <div
      className={`rounded-2xl border ${
        highlight ? "border-emerald-300" : "border-slate-200"
      } p-4 bg-white`}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-slate-900">{label}</h4>
        {highlight && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Current
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <Metric label="Shows" value={fmtNum(data.shows)} />
        <Metric label="Close Rate" value={fmtPct(data.close)} />
        <Metric label="Deals" value={fmtNum(data.deals)} />
        <Metric label="Revenue" value={fmtUSD(data.revenue)} />
        <Metric label="ROAS" value={`${fmtNum(data.roas, 1)}x`} />
        <Metric label="Spend" value={fmtUSD(data.spend)} />
      </div>
    </div>
  );
}

function BudgetCard({ phase, note, range }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-white">
      <h4 className="font-semibold text-slate-900">{phase}</h4>
      <p className="text-xs text-slate-500 mt-0.5">{note}</p>
      <p className="text-lg font-bold mt-1">
        {fmtUSD(range[0])} – {fmtUSD(range[1])}
      </p>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="text-left px-3 py-2 text-slate-600 font-semibold text-xs uppercase tracking-wide">
      {children}
    </th>
  );
}
function Tr({ role, cost, output, risk }) {
  return (
    <tr className="border-t border-slate-100">
      <td className="px-3 py-2 font-medium text-slate-800">{role}</td>
      <td className="px-3 py-2 text-slate-700 whitespace-nowrap">{cost}</td>
      <td className="px-3 py-2 text-slate-700">{output}</td>
      <td className="px-3 py-2 text-slate-700">{risk}</td>
    </tr>
  );
}
