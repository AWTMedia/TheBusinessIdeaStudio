import { useMemo, useState, PropsWithChildren } from "react";

/* ===========================
   Minimal UI primitives
=========================== */

function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_6px_24px_rgba(2,8,23,0.06)]">
      {children}
    </div>
  );
}
function CardBody({ children }: PropsWithChildren) {
  return <div className="p-5 sm:p-6">{children}</div>;
}
function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-slate-200 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${
        checked
          ? "border-sky-500 bg-sky-100 text-slate-900"
          : "border-slate-200 bg-white text-slate-600"
      }`}
      aria-pressed={checked}
      type="button"
    >
      <span
        className={`inline-block h-3 w-3 rounded-full ${
          checked ? "bg-sky-600" : "bg-slate-200"
        }`}
      />
      {label}
    </button>
  );
}

/* ===========================
   Tiny SVG chart helpers
=========================== */

type Pt = { x: number; y: number };

function LineChart({
  data,
  width = 720,
  height = 260,
  yLabel,
  xLabel,
  formatY = (y) => String(y),
  strokeWidth = 2,
}: {
  data: Pt[];
  width?: number;
  height?: number;
  yLabel?: string;
  xLabel?: string;
  formatY?: (y: number) => string;
  strokeWidth?: number;
}) {
  const pad = { t: 10, r: 16, b: 28, l: 56 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const xs = data.map((d) => d.x);
  const ys = data.map((d) => d.y);
  const xMin = Math.min(...xs),
    xMax = Math.max(...xs);
  const yMin = Math.min(...ys),
    yMax = Math.max(...ys);

  const xScale = (x: number) =>
    pad.l + ((x - xMin) / (xMax - xMin || 1)) * innerW;
  const yScale = (y: number) =>
    pad.t + innerH - ((y - yMin) / (yMax - yMin || 1)) * innerH;

  const path = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(d.x)} ${yScale(d.y)}`)
    .join(" ");

  const yTicks = 4;
  const grid = Array.from({ length: yTicks + 1 }, (_, i) => {
    const t = i / yTicks;
    const v = yMin + t * (yMax - yMin);
    return { y: yScale(v), label: formatY(v) };
  });

  return (
    <svg width={width} height={height} className="w-full">
      {grid.map((g, i) => (
        <g key={i}>
          <line
            x1={pad.l}
            x2={width - pad.r}
            y1={g.y}
            y2={g.y}
            stroke="#e2e8f0"
          />
          <text
            x={pad.l - 8}
            y={g.y}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize="11"
            fill="#475569"
          >
            {g.label}
          </text>
        </g>
      ))}
      {yLabel && (
        <text x={12} y={pad.t} fontSize="12" fill="#475569">
          {yLabel}
        </text>
      )}
      {xLabel && (
        <text
          x={width / 2}
          y={height - 6}
          fontSize="12"
          fill="#475569"
          textAnchor="middle"
        >
          {xLabel}
        </text>
      )}
      <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={strokeWidth} />
      {data.map((d, i) => (
        <circle
          key={i}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={2.5}
          fill="#0ea5e9"
        />
      ))}
    </svg>
  );
}

function AreaChart({
  seriesA,
  seriesB,
  width = 720,
  height = 260,
  labels = ["Traditional", "Tokenized"],
}: {
  seriesA: Pt[];
  seriesB: Pt[];
  width?: number;
  height?: number;
  labels?: [string, string] | string[];
}) {
  const pad = { t: 10, r: 16, b: 28, l: 56 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;

  const xs = [...seriesA, ...seriesB].map((d) => d.x);
  const ys = [...seriesA, ...seriesB].map((d) => d.y);
  const xMin = Math.min(...xs),
    xMax = Math.max(...xs);
  const yMin = Math.min(...ys),
    yMax = Math.max(...ys);

  const xScale = (x: number) =>
    pad.l + ((x - xMin) / (xMax - xMin || 1)) * innerW;
  const yScale = (y: number) =>
    pad.t + innerH - ((y - yMin) / (yMax - yMin || 1)) * innerH;

  const toPath = (d: Pt[]) =>
    d
      .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.x)} ${yScale(p.y)}`)
      .join(" ");
  const pA = toPath(seriesA);
  const pB = toPath(seriesB);

  const yTicks = 4;
  const grid = Array.from({ length: yTicks + 1 }, (_, i) => {
    const t = i / yTicks;
    const v = yMin + t * (yMax - yMin);
    return { y: yScale(v), label: v.toFixed(0) };
  });

  return (
    <svg width={width} height={height} className="w-full">
      {grid.map((g, i) => (
        <g key={i}>
          <line
            x1={pad.l}
            x2={width - pad.r}
            y1={g.y}
            y2={g.y}
            stroke="#e2e8f0"
          />
          <text
            x={pad.l - 8}
            y={g.y}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize="11"
            fill="#475569"
          >
            {g.label}
          </text>
        </g>
      ))}
      <path
        d={`${pA} L ${xScale(seriesA[seriesA.length - 1].x)} ${yScale(
          yMin
        )} L ${xScale(seriesA[0].x)} ${yScale(yMin)} Z`}
        fill="#e0f2fe"
        stroke="#0ea5e9"
      />
      <path
        d={`${pB} L ${xScale(seriesB[seriesB.length - 1].x)} ${yScale(
          yMin
        )} L ${xScale(seriesB[0].x)} ${yScale(yMin)} Z`}
        fill="#dcfce7"
        stroke="#22c55e"
      />
      <g>
        <rect
          x={width - 180}
          y={12}
          width="8"
          height="8"
          fill="#e0f2fe"
          stroke="#0ea5e9"
        />
        <text x={width - 166} y={20} fontSize="12" fill="#475569">
          {labels[0]}
        </text>
        <rect
          x={width - 180}
          y={32}
          width="8"
          height="8"
          fill="#dcfce7"
          stroke="#22c55e"
        />
        <text x={width - 166} y={40} fontSize="12" fill="#475569">
          {labels[1]}
        </text>
      </g>
    </svg>
  );
}

/* ===========================
   Domain: simulation + helpers
=========================== */

type SimParams = {
  months: number;
  initialCustomers: number;
  avgSpend: number; // baseline price without bundle
  tokenBundlePremium: number; // e.g. 0 or 0.2 for +20%
  spendLiftWithTokens: number; // 0..0.4
  tradGrowthPerMonth: number;
  tokenGrowthPerMonth: number;
  redemptionRate: number; // 0..1
  loyaltyCostTraditional: number; // e.g. 0.10 = 10%
};
type Row = {
  month: number;
  traditionalCustomers: number;
  tokenizedCustomers: number;
  traditionalSales: number;
  tokenizedSales: number;
  traditionalCost: number; // % of sales
  tokenizedEffectiveCost: number; // % of sales
};

function runSim(p: SimParams): Row[] {
  let trad = p.initialCustomers;
  let tok = p.initialCustomers;
  const out: Row[] = [];
  for (let m = 1; m <= p.months; m++) {
    const tradSales = trad * p.avgSpend;
    const tokenUnitPrice = p.avgSpend * (1 + p.tokenBundlePremium);
    const tokenAvgSpend = tokenUnitPrice * (1 + p.spendLiftWithTokens);
    const tokSales = tok * tokenAvgSpend;

    const tradCostPct = p.loyaltyCostTraditional;
    const tokenEffCost = p.loyaltyCostTraditional * p.redemptionRate;

    out.push({
      month: m,
      traditionalCustomers: trad,
      tokenizedCustomers: tok,
      traditionalSales: tradSales,
      tokenizedSales: tokSales,
      traditionalCost: tradCostPct,
      tokenizedEffectiveCost: tokenEffCost,
    });

    trad += p.tradGrowthPerMonth;
    tok += p.tokenGrowthPerMonth;
  }
  return out;
}

function toCurrency(n: number, currency = "ZAR") {
  return new Intl.NumberFormat("en-ZA", { style: "currency", currency }).format(
    n
  );
}

/* ===========================
   Domain: content blocks
=========================== */

function TokenFlow() {
  const steps = [
    "Buy Product",
    "Token Minted",
    "Hold / Tier Perks / P2P",
    "Redeem as Credit",
    "Burn on Redemption",
    "Scarcity → Value Pressure ↑",
  ];
  return (
    <div className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {steps.map((s, i) => (
        <div key={s} className="rounded-xl border border-slate-200 p-4">
          <div className="text-sm font-semibold text-slate-900">{s}</div>
          <div className="mt-1 text-xs text-slate-600">
            {i === 0 &&
              "Customer buys (Phase 1: normal price; Phase 2: optional bundle premium)."}
            {i === 1 && "1 token per unit (configurable issuance)."}
            {i === 2 &&
              "Holding + tiers boost engagement; internal P2P optional."}
            {i === 3 && "Redeem any time as store credit (utility floor)."}
            {i === 4 && "Redeemed tokens burn, reducing supply."}
            {i === 5 && "More buyers + fewer redeemers push value pressure up."}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===========================
   App (single file)
=========================== */

export default function App() {
  // Controls
  const [bundlePremium, setBundlePremium] = useState(false);
  const [redemptionRate, setRedemptionRate] = useState(0.3);
  const [spendLift, setSpendLift] = useState(0.2);
  const [tokenGrowth, setTokenGrowth] = useState(50);
  const [tradGrowth] = useState(5);

  const params = useMemo(
    () => ({
      months: 12,
      initialCustomers: 200,
      avgSpend: 100,
      tokenBundlePremium: bundlePremium ? 0.2 : 0,
      spendLiftWithTokens: spendLift,
      tradGrowthPerMonth: tradGrowth,
      tokenGrowthPerMonth: tokenGrowth,
      redemptionRate,
      loyaltyCostTraditional: 0.1,
    }),
    [bundlePremium, redemptionRate, spendLift, tokenGrowth, tradGrowth]
  );

  const rows = useMemo(() => runSim(params), [params]);

  const salesTrad = rows.map((r) => ({
    x: r.month,
    y: Math.round(r.traditionalSales),
  }));
  const salesTok = rows.map((r) => ({
    x: r.month,
    y: Math.round(r.tokenizedSales),
  }));

  const costCurve = Array.from({ length: 21 }, (_, i) => i / 20).map((rr) => ({
    x: Math.round(rr * 100),
    trad: params.loyaltyCostTraditional * 100,
    tok: params.loyaltyCostTraditional * rr * 100,
  }));

  const totalTrad = rows.reduce((a, r) => a + r.traditionalSales, 0);
  const totalTok = rows.reduce((a, r) => a + r.tokenizedSales, 0);

  const avgTradCostPct = rows[0].traditionalCost * 100;
  const avgTokCostPct = rows[0].tokenizedEffectiveCost * 100;

  return (
    <div className="pb-16">
      {/* Hero */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white">
        <Container>
          <div className="py-10 sm:py-14">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Tokenized Loyalty for Local Brands
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Turn every purchase into a customer-owned digital asset. The more
              people buy, the more valuable tokens become. Redeem anytime as
              store credit.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat label="Baseline Price" value={toCurrency(100)} />
              <Stat
                label="Bundle Premium (toggle below)"
                value={bundlePremium ? "+20%" : "Off"}
              />
              <Stat
                label="Redemption Rate"
                value={`${Math.round(redemptionRate * 100)}%`}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Toggle
            label="Enable Product + Token Bundle (+20%)"
            checked={bundlePremium}
            onChange={setBundlePremium}
          />
          <div className="rounded-xl border border-slate-200 px-3 py-2">
            <label className="mr-2 text-sm text-slate-600">Redemption</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={redemptionRate}
              onChange={(e) => setRedemptionRate(parseFloat(e.target.value))}
            />
            <span className="ml-2 text-sm text-slate-900">
              {Math.round(redemptionRate * 100)}%
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 px-3 py-2">
            <label className="mr-2 text-sm text-slate-600">Spend Lift</label>
            <input
              type="range"
              min={0}
              max={0.4}
              step={0.05}
              value={spendLift}
              onChange={(e) => setSpendLift(parseFloat(e.target.value))}
            />
            <span className="ml-2 text-sm text-slate-900">
              {Math.round(spendLift * 100)}%
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 px-3 py-2">
            <label className="mr-2 text-sm text-slate-600">
              Token Growth / mo
            </label>
            <input
              type="range"
              min={0}
              max={120}
              step={10}
              value={tokenGrowth}
              onChange={(e) => setTokenGrowth(parseInt(e.target.value))}
            />
            <span className="ml-2 text-sm text-slate-900">{tokenGrowth}</span>
          </div>
        </div>

        {/* How it works + flow */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader
              title="How It Works"
              subtitle="Closed-loop, brand-backed economy"
            />
            <CardBody>
              <ul className="list-disc pl-5 text-sm text-slate-900">
                <li>
                  <span className="font-medium">Every purchase</span> issues a
                  token (configurable; e.g., 1 unit = 1 token).
                </li>
                <li>
                  Tokens are{" "}
                  <span className="font-medium">
                    redeemable as store credit
                  </span>{" "}
                  (utility floor), and{" "}
                  <span className="font-medium">burn on redemption</span>.
                </li>
                <li>
                  As more customers buy and fewer redeem,{" "}
                  <span className="font-medium">scarcity pushes value up</span>
                  —early holders benefit.
                </li>
                <li>
                  Phase 2 adds optional{" "}
                  <span className="font-medium">Product+Token bundle</span>{" "}
                  (+20%) once trust is established.
                </li>
                <li>Later: cross-brand swaps and optional DEX liquidity.</li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader
              title="Token Flow"
              subtitle="Buy → Mint → Hold → Redeem → Burn → Scarcity"
            />
            <CardBody>
              <TokenFlow />
            </CardBody>
          </Card>
        </div>

        {/* Financials */}
        <div className="mt-8">
          <Card>
            <CardHeader
              title="Financial Simulation (12 months)"
              subtitle="Traditional vs Tokenized (interactive sliders above)"
            />
            <CardBody>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <div className="text-xl font-semibold text-slate-900">
                    Monthly Sales
                  </div>
                  <p className="mb-2 text-sm text-slate-600">
                    Includes spend lift, growth, and optional bundle premium.
                  </p>
                  <AreaChart
                    seriesA={salesTrad}
                    seriesB={salesTok}
                    labels={["Traditional Sales", "Tokenized Sales"]}
                  />
                </div>
                <div className="grid gap-3 md:grid-rows-3">
                  <div className="row-span-1 grid grid-cols-2 gap-3">
                    <Stat
                      label="Total Traditional"
                      value={toCurrency(totalTrad)}
                    />
                    <Stat
                      label="Total Tokenized"
                      value={toCurrency(totalTok)}
                    />
                  </div>
                  <div className="row-span-2">
                    <div className="text-xl font-semibold text-slate-900">
                      Effective Cost vs Redemption
                    </div>
                    <p className="mb-2 text-sm text-slate-600">
                      Traditional cost fixed at 10%. Tokenized cost scales with
                      redemption.
                    </p>
                    <LineChart
                      data={costCurve.map((d) => ({ x: d.x, y: d.trad }))}
                      yLabel="% of Sales"
                      xLabel="Redemption Rate (%)"
                      formatY={(y) => `${y.toFixed(0)}%`}
                    />
                    <LineChart
                      data={costCurve.map((d) => ({ x: d.x, y: d.tok }))}
                      yLabel="% of Sales"
                      xLabel="Redemption Rate (%)"
                      formatY={(y) => `${y.toFixed(0)}%`}
                    />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-sky-50 text-slate-900">
                      {[
                        "Month",
                        "Trad. Customers",
                        "Trad. Sales",
                        "Tokenized Customers",
                        "Tokenized Sales",
                      ].map((h) => (
                        <th
                          key={h}
                          className="border border-slate-200 px-3 py-2 text-left"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.month} className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">
                          {r.month}
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          {r.traditionalCustomers.toLocaleString()}
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          {toCurrency(r.traditionalSales)}
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          {r.tokenizedCustomers.toLocaleString()}
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          {toCurrency(r.tokenizedSales)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Value + Risks */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader title="Why It Outperforms Points" />
            <CardBody>
              <ul className="list-disc pl-5 text-sm text-slate-900">
                <li>
                  <span className="font-medium">Variable, not fixed</span>: cost
                  falls when fewer redeem.
                </li>
                <li>
                  <span className="font-medium">Upside incentives</span>:
                  holders seek tiers & appreciation.
                </li>
                <li>
                  <span className="font-medium">Network effect</span>: more
                  buyers → stronger value pressure.
                </li>
                <li>
                  <span className="font-medium">Cash-flow friendly</span>:
                  liability paid in-kind on redemption.
                </li>
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Stat
                  label="Avg Trad. Cost"
                  value={`${avgTradCostPct.toFixed(0)}%`}
                />
                <Stat
                  label="Avg Tokenized Cost*"
                  value={`${avgTokCostPct.toFixed(0)}%`}
                />
              </div>
              <p className="mt-2 text-sm text-slate-600">
                *At current redemption slider value.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Risks & Mitigations" />
            <CardBody>
              <ul className="list-disc pl-5 text-sm text-slate-900">
                <li>
                  <span className="font-medium">100% redemption</span> → behaves
                  like classic points (net-zero). Mitigate with tier perks &
                  holding rewards.
                </li>
                <li>
                  <span className="font-medium">Customer confusion</span> →
                  abstract crypto UX; present as “points with upside.”
                </li>
                <li>
                  <span className="font-medium">Over-speculation</span> → cap
                  redemption bands; Phase 1 closed-loop.
                </li>
                <li>
                  <span className="font-medium">Regulatory</span> → loyalty
                  credit first; optional trading later.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* GTM */}
        <div className="mt-8">
          <Card>
            <CardHeader title="GTM Plan & Roadmap" />
            <CardBody>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-xl font-semibold text-slate-900">
                    Go-to-Market (90 days)
                  </div>
                  <ol className="mt-2 list-decimal pl-5 text-sm text-slate-900">
                    <li>
                      Launch on a single hero SKU (coffee). Tokens as bonus; no
                      price change.
                    </li>
                    <li>
                      Staff 10-sec script; in-store signage. Holder
                      leaderboards.
                    </li>
                    <li>
                      PR + micro-influencers: “Coffee with crypto in [City].”.
                    </li>
                    <li>
                      Measure: CAC, redemption%, CLV lift, new customers/mo.
                    </li>
                  </ol>
                </div>
                <div>
                  <div className="text-xl font-semibold text-slate-900">
                    Roadmap
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-900">
                    <li>
                      <span className="font-medium">Phase 1</span>: Closed-loop
                      loyalty, burn on redemption.
                    </li>
                    <li>
                      <span className="font-medium">Phase 2</span>: Optional
                      bundle pricing (+20%), tiers & staking.
                    </li>
                    <li>
                      <span className="font-medium">Phase 3</span>: Cross-brand
                      swaps (local marketplace).
                    </li>
                    <li>
                      <span className="font-medium">Phase 4</span>: Optional DEX
                      liquidity (if/when ready).
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Tokenized Loyalty Demo — Single-file
          React + Tailwind (SVG charts)
        </div>
      </Container>
    </div>
  );
}
