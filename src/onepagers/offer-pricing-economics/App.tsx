import { useMemo, useState } from "react";

export default function OfferPricingEconomics() {
  // ====== INPUTS (editable) ======
  const [cogs, setCogs] = useState(1200); // monthly delivery cost per client
  const [fixedOverhead, setFixedOverhead] = useState(20000); // monthly team/tools
  const [capacityClients, setCapacityClients] = useState(25); // max clients supported
  const [utilization, setUtilization] = useState(0.7); // target utilisation of capacity
  const [targetMargin, setTargetMargin] = useState(0.3); // desired operating margin % of price
  const [reservePct, setReservePct] = useState(0.05); // guarantee reserve as % of price
  const [cac, setCAC] = useState(1000); // acquisition cost per client
  const [paybackMonths, setPaybackMonths] = useState(1); // months to recoup CAC
  const [successFeePct, setSuccessFeePct] = useState(0.0); // share of revenue paid as success fee (variable)
  const [premiumPct, setPremiumPct] = useState(0.2); // strategic premium above floor
  const [anchorX, setAnchorX] = useState(1.5); // premium anchor multiplier
  const [ltvMonths, setLtvMonths] = useState(12); // expected retention
  const [refundProb, setRefundProb] = useState(0.07); // probability a client triggers guarantee
  const [guaranteeType, setGuaranteeType] = useState("refund"); // refund | credit | extra
  const [guaranteePct, setGuaranteePct] = useState(0.25); // portion of price at risk
  const [activeClients, setActiveClients] = useState(20);
  const [attrRevenue, setAttrRevenue] = useState(40000); // attributable revenue per month (for success fee models)

  // Payment plan & incentives
  const [prepayDiscount, setPrepayDiscount] = useState(0.1); // 3‑month prepay discount
  const [hybridBasePct, setHybridBasePct] = useState(0.7); // hybrid base as % of target price
  const [hybridSuccessPct, setHybridSuccessPct] = useState(0.1); // success fee % of attributable revenue
  const [perfBasePct, setPerfBasePct] = useState(0.4);
  const [perfSuccessPct, setPerfSuccessPct] = useState(0.2);
  const [successCapPct, setSuccessCapPct] = useState(0.25); // cap as % of attributable revenue

  // Irresistible offer score sliders (0–10)
  const [offerSliders, setOfferSliders] = useState({
    outcome: 8,
    proof: 8,
    speed: 7,
    risk: 8,
    scarcity: 6,
    ease: 7,
    bonuses: 7,
  });

  // ====== DERIVED ======
  const overheadAlloc = useMemo(() => {
    const denom = capacityClients * Math.max(utilization, 0.01);
    return denom > 0 ? fixedOverhead / denom : 0;
  }, [fixedOverhead, capacityClients, utilization]);

  const cacAlloc = useMemo(
    () => (paybackMonths > 0 ? cac / paybackMonths : cac),
    [cac, paybackMonths]
  );

  const denom = useMemo(
    () => 1 - targetMargin - reservePct - successFeePct,
    [targetMargin, reservePct, successFeePct]
  );

  const floorPrice = useMemo(() => {
    if (denom <= 0) return NaN;
    return (cogs + overheadAlloc + cacAlloc) / denom;
  }, [cogs, overheadAlloc, cacAlloc, denom]);

  const targetPrice = useMemo(
    () => (isFinite(floorPrice) ? floorPrice * (1 + premiumPct) : NaN),
    [floorPrice, premiumPct]
  );
  const anchorPrice = useMemo(
    () => (isFinite(targetPrice) ? targetPrice * anchorX : NaN),
    [targetPrice, anchorX]
  );

  const contributionAtTarget = useMemo(() => {
    if (!isFinite(targetPrice)) return NaN;
    const variableDrains = reservePct + successFeePct; // as % of price
    const grossProfit =
      targetPrice * (1 - variableDrains) - (cogs + overheadAlloc + cacAlloc);
    return grossProfit; // should equal targetMargin * targetPrice if algebra is aligned
  }, [targetPrice, reservePct, successFeePct, cogs, overheadAlloc, cacAlloc]);

  const ltvRevenue = useMemo(
    () => (isFinite(targetPrice) ? targetPrice * ltvMonths : NaN),
    [targetPrice, ltvMonths]
  );
  const ltvToCAC = useMemo(
    () => (cac > 0 && isFinite(ltvRevenue) ? ltvRevenue / cac : NaN),
    [ltvRevenue, cac]
  );

  const guaranteeWalletRec = useMemo(() => {
    // portfolio worst‑case expected liability ≈ price * guaranteePct * refundProb * activeClients
    if (!isFinite(targetPrice)) return NaN;
    return targetPrice * guaranteePct * refundProb * activeClients;
  }, [targetPrice, guaranteePct, refundProb, activeClients]);

  const reservePctMin = useMemo(
    () => guaranteePct * refundProb,
    [guaranteePct, refundProb]
  );

  // Money model packages (expected)
  const pkgSafeRetainer = useMemo(() => {
    const price = targetPrice;
    const mrr = price;
    const prepay3 = 3 * price * (1 - prepayDiscount);
    return { price, mrr, prepay3 };
  }, [targetPrice, prepayDiscount]);

  const pkgHybrid = useMemo(() => {
    const base = isFinite(targetPrice) ? targetPrice * hybridBasePct : NaN;
    const fee = Math.min(
      attrRevenue * hybridSuccessPct,
      attrRevenue * successCapPct
    );
    const expected = base + fee;
    return { base, fee, expected };
  }, [
    targetPrice,
    hybridBasePct,
    hybridSuccessPct,
    successCapPct,
    attrRevenue,
  ]);

  const pkgPerformance = useMemo(() => {
    const base = isFinite(targetPrice) ? targetPrice * perfBasePct : NaN;
    const fee = Math.min(
      attrRevenue * perfSuccessPct,
      attrRevenue * successCapPct
    );
    const expected = base + fee;
    return { base, fee, expected };
  }, [targetPrice, perfBasePct, perfSuccessPct, successCapPct, attrRevenue]);

  // Offer score (0–100)
  const offerScore = useMemo(() => {
    const vals = Object.values(offerSliders);
    const sum = vals.reduce((a, b) => a + b, 0);
    return Math.round((sum / (10 * vals.length)) * 100);
  }, [offerSliders]);

  const scenario = useMemo(() => {
    // quick scenarios using price target as baseline
    const cons = {
      price: targetPrice,
      margin: targetMargin - 0.05,
      reserve: reservePct + 0.02,
      success: successFeePct,
    };
    const base = {
      price: targetPrice,
      margin: targetMargin,
      reserve: reservePct,
      success: successFeePct,
    };
    const aggr = {
      price: isFinite(targetPrice) ? targetPrice * 1.15 : NaN,
      margin: targetMargin + 0.05,
      reserve: Math.max(0, reservePct - 0.02),
      success: successFeePct,
    };
    return { cons, base, aggr };
  }, [targetPrice, targetMargin, reservePct, successFeePct]);

  // ====== RENDER ======
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Offer & Pricing Economics Calculator
          </h1>
          <p className="text-slate-600 mt-2">
            Set <strong>price floors/targets</strong>, margin, and{" "}
            <strong>guarantee rules</strong> from COGS & capacity. Includes{" "}
            <em>money model</em> packages and an{" "}
            <strong>Irresistible Offer Score</strong>.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">Capacity‑aware</Tag>
            <Tag color="indigo">Money Models</Tag>
            <Tag color="amber">Guarantee‑safe</Tag>
            <Tag color="rose">Value‑based</Tag>
          </div>
        </header>

        {/* Assumptions */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <h2 className="text-lg font-bold">Assumptions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            <Field
              label="COGS per client / mo"
              value={cogs}
              onChange={(v) => setCogs(num(v))}
              prefix="$"
            />
            <Field
              label="Fixed overhead / mo"
              value={fixedOverhead}
              onChange={(v) => setFixedOverhead(num(v))}
              prefix="$"
            />
            <Field
              label="Capacity (clients)"
              value={capacityClients}
              onChange={(v) => setCapacityClients(num(v))}
            />
            <Slider
              label="Utilisation"
              min={0.3}
              max={0.95}
              step={0.01}
              value={utilization}
              onChange={setUtilization}
              fmt={fmtPct}
            />
            <Slider
              label="Target Margin"
              min={0.1}
              max={0.6}
              step={0.01}
              value={targetMargin}
              onChange={setTargetMargin}
              fmt={fmtPct}
            />
            <Slider
              label="Reserve % (Guarantee Wallet)"
              min={0}
              max={0.15}
              step={0.005}
              value={reservePct}
              onChange={setReservePct}
              fmt={fmtPct}
            />
            <Field
              label="CAC per client"
              value={cac}
              onChange={(v) => setCAC(num(v))}
              prefix="$"
            />
            <Field
              label="Payback months (CAC)"
              value={paybackMonths}
              onChange={(v) => setPaybackMonths(num(v))}
            />
            <Slider
              label="Success fee % of revenue"
              min={0}
              max={0.3}
              step={0.01}
              value={successFeePct}
              onChange={setSuccessFeePct}
              fmt={fmtPct}
            />
            <Slider
              label="Premium above floor"
              min={0}
              max={0.5}
              step={0.01}
              value={premiumPct}
              onChange={setPremiumPct}
              fmt={fmtPct}
            />
            <Slider
              label="Anchor multiplier"
              min={1.1}
              max={2}
              step={0.05}
              value={anchorX}
              onChange={setAnchorX}
            />
            <Field
              label="Retention (LTV months)"
              value={ltvMonths}
              onChange={(v) => setLtvMonths(num(v))}
            />
          </div>
        </section>

        {/* Price Ladder */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Capacity & Cost Allocation">
            <div className="grid grid-cols-2 gap-3">
              <Metric
                label="Overhead alloc / client"
                value={fmtUSD(overheadAlloc)}
              />
              <Metric label="CAC alloc / month" value={fmtUSD(cacAlloc)} />
              <Metric
                label="Utilised capacity"
                value={`${fmtNum(capacityClients * utilization)} clients`}
              />
              <Metric
                label="Reserve min suggestion"
                value={`${fmtPct(reservePctMin)} (≈ p*${(
                  reservePctMin * 100
                ).toFixed(1)}%)`}
                sub="GuaranteePct × RefundProb"
              />
            </div>
          </Card>
          <Card title="Price Ladder (per month)">
            <div className="grid grid-cols-2 gap-3">
              <Metric
                label="Floor"
                value={safeFmtUSD(floorPrice)}
                sub="(COGS + alloc + CAC) / (1 − margin − reserve − success)"
              />
              <Metric
                label="Target"
                value={safeFmtUSD(targetPrice)}
                sub="Floor × (1 + premium)"
              />
              <Metric
                label="Premium Anchor"
                value={safeFmtUSD(anchorPrice)}
                sub="Target × anchor multiplier"
              />
              <Metric
                label="Contribution @ Target"
                value={fmtUSD(contributionAtTarget)}
              />
            </div>
          </Card>
          <Card title="LTV & Economics">
            <div className="grid grid-cols-2 gap-3">
              <Metric label="LTV (rev)" value={safeFmtUSD(ltvRevenue)} />
              <Metric
                label="LTV : CAC"
                value={isFinite(ltvToCAC) ? `${fmtNum(ltvToCAC, 1)}x` : "—"}
              />
              <Metric
                label="Guarantee wallet (portfolio)"
                value={safeFmtUSD(guaranteeWalletRec)}
                sub={`${activeClients} clients × p × ${fmtPct(
                  guaranteePct
                )} × ${fmtPct(refundProb)}`}
              />
              <Metric
                label="Denominator check"
                value={denom > 0 ? `${(denom * 100).toFixed(1)}%` : "Invalid"}
                sub="1 − margin − reserve − success"
              />
            </div>
          </Card>
        </section>

        {/* Guarantee & Risk */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Guarantee Rules">
            <div className="grid md:grid-cols-2 gap-3">
              <Select
                label="Type"
                value={guaranteeType}
                onChange={setGuaranteeType}
                options={[
                  { label: "Refund", value: "refund" },
                  { label: "Credit", value: "credit" },
                  { label: "Extra Service", value: "extra" },
                ]}
              />
              <Slider
                label="Guarantee magnitude (% of price)"
                min={0}
                max={0.6}
                step={0.01}
                value={guaranteePct}
                onChange={setGuaranteePct}
                fmt={fmtPct}
              />
              <Slider
                label="Refund probability (portfolio)"
                min={0}
                max={0.3}
                step={0.005}
                value={refundProb}
                onChange={setRefundProb}
                fmt={fmtPct}
              />
              <Field
                label="Active clients"
                value={activeClients}
                onChange={(v) => setActiveClients(num(v))}
              />
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Tip: set <strong>Reserve %</strong> ≥{" "}
              <strong>Guarantee% × RefundProb</strong> to keep worst‑case
              covered without eroding target margin.
            </p>
          </Card>
          <Card title="Irresistible Offer Score">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(offerSliders).map(([k, v]) => (
                <Slider
                  key={k}
                  label={pretty(k)}
                  min={0}
                  max={10}
                  step={1}
                  value={v}
                  onChange={(val) =>
                    setOfferSliders((o) => ({ ...o, [k]: val }))
                  }
                />
              ))}
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-extrabold">{offerScore}</div>
                <div className="text-sm text-slate-600">
                  / 100 — {grade(offerScore)}
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Score blend: Outcome clarity, Proof, Speed, Risk reversal,
                Scarcity/Urgency, Ease of adoption, Bonus stack.
              </p>
            </div>
          </Card>
        </section>

        {/* Money Models */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Money Model Packages (choose one or offer as tiers)
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="A) Safe Retainer (Target)">
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>
                  Monthly Retainer:{" "}
                  <strong>{safeFmtUSD(pkgSafeRetainer.price)}</strong>
                </li>
                <li>
                  3‑Month Prepay (−{fmtPct(prepayDiscount)}):{" "}
                  <strong>{safeFmtUSD(pkgSafeRetainer.prepay3)}</strong>
                </li>
                <li>Best for: stable scope, strong capacity utilisation.</li>
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Slider
                  label="Prepay discount"
                  min={0}
                  max={0.25}
                  step={0.01}
                  value={prepayDiscount}
                  onChange={setPrepayDiscount}
                  fmt={fmtPct}
                />
              </div>
            </Card>
            <Card title="B) Hybrid (Base + Success Fee)">
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>
                  Base Retainer: <strong>{safeFmtUSD(pkgHybrid.base)}</strong>{" "}
                  (≈ {fmtPct(hybridBasePct)} of Target)
                </li>
                <li>
                  Success Fee: <strong>{fmtPct(hybridSuccessPct)}</strong> of
                  attributable revenue (cap {fmtPct(successCapPct)})
                </li>
                <li>
                  Expected Monthly:{" "}
                  <strong>{safeFmtUSD(pkgHybrid.expected)}</strong> (given
                  current attributable revenue)
                </li>
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Slider
                  label="Base as % of Target"
                  min={0.4}
                  max={1}
                  step={0.05}
                  value={hybridBasePct}
                  onChange={setHybridBasePct}
                  fmt={fmtPct}
                />
                <Slider
                  label="Success fee %"
                  min={0.05}
                  max={0.3}
                  step={0.01}
                  value={hybridSuccessPct}
                  onChange={setHybridSuccessPct}
                  fmt={fmtPct}
                />
                <Slider
                  label="Cap % of attrib. rev"
                  min={0.1}
                  max={0.5}
                  step={0.01}
                  value={successCapPct}
                  onChange={setSuccessCapPct}
                  fmt={fmtPct}
                />
                <Field
                  label="Attributable revenue / mo"
                  value={attrRevenue}
                  onChange={(v) => setAttrRevenue(num(v))}
                  prefix="$"
                />
              </div>
            </Card>
            <Card title="C) Performance‑Heavy (Low Base + Higher Success)">
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>
                  Base Retainer:{" "}
                  <strong>{safeFmtUSD(pkgPerformance.base)}</strong> (≈{" "}
                  {fmtPct(perfBasePct)} of Target)
                </li>
                <li>
                  Success Fee: <strong>{fmtPct(perfSuccessPct)}</strong> of
                  attributable revenue (cap {fmtPct(successCapPct)})
                </li>
                <li>
                  Expected Monthly:{" "}
                  <strong>{safeFmtUSD(pkgPerformance.expected)}</strong>
                </li>
                <li>
                  Best for: high confidence in results; strong proof;
                  competitive wedge.
                </li>
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Slider
                  label="Base as % of Target"
                  min={0.2}
                  max={0.7}
                  step={0.05}
                  value={perfBasePct}
                  onChange={setPerfBasePct}
                  fmt={fmtPct}
                />
                <Slider
                  label="Success fee %"
                  min={0.1}
                  max={0.5}
                  step={0.01}
                  value={perfSuccessPct}
                  onChange={setPerfSuccessPct}
                  fmt={fmtPct}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Scenarios */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">Sensitivity Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ScenarioCard label="Conservative" data={scenario.cons} />
            <ScenarioCard label="Base" data={scenario.base} highlight />
            <ScenarioCard label="Aggressive" data={scenario.aggr} />
          </div>
        </section>

        {/* Warnings */}
        {denom <= 0 && (
          <div className="mt-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-900">
            <strong>Warning:</strong> 1 − margin − reserve − success ≤ 0. Reduce
            margin/reserve/success or increase price inputs.
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Optimized for MacBook Air (1280–1440px). A4 landscape for printing.
          </span>
        </footer>
      </div>
    </div>
  );
}

// ====== UI PRIMITIVES ======
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

function Metric({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3 bg-white">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-xl font-bold mt-0.5">{value}</p>
      {sub && <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>}
    </div>
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

function Field({ label, value, onChange, prefix }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <div className="mt-1 flex items-center rounded-lg border border-slate-200 px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-slate-400">
        {prefix && <span className="mr-1 text-slate-400">{prefix}</span>}
        <input
          className="w-full outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputMode="decimal"
        />
      </div>
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
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
        <Metric label="Price" value={safeFmtUSD(data.price)} />
        <Metric label="Margin" value={fmtPct(data.margin)} />
        <Metric label="Reserve" value={fmtPct(data.reserve)} />
        <Metric label="Success fee" value={fmtPct(data.success)} />
      </div>
    </div>
  );
}

// ====== HELPERS ======
function num(v) {
  const n = parseFloat(String(v).replace(/[^0-9.-]/g, ""));
  return isFinite(n) ? n : 0;
}
function fmtUSD(n) {
  const x = Number(n);
  if (!isFinite(x)) return "$0";
  return x.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
function safeFmtUSD(n) {
  return isFinite(n) ? fmtUSD(n) : "—";
}
function fmtPct(n) {
  return `${(Number(n) * 100).toFixed(0)}%`;
}
function fmtNum(n, d = 0) {
  const x = Number(n);
  if (!isFinite(x)) return "—";
  return x.toLocaleString(undefined, { maximumFractionDigits: d });
}
function pretty(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, " ");
}
function grade(score) {
  if (score >= 90) return "Irresistible";
  if (score >= 75) return "Strong";
  if (score >= 60) return "Workable";
  return "Needs Reinforcement";
}
