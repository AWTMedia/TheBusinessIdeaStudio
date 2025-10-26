import { useEffect, useMemo, useState } from "react";

export default function App() {
  const rows = [
    {
      freq: "30 minutes per day",
      process: "1 page journalling & visualisation",
      output: "Strong Mental Clarity and Mindset",
    },
    {
      freq: "45 minutes per day",
      process: "Intentional exercise",
      output: "Fit, High Energy & Strong Physique",
    },
    {
      freq: "45 minutes per day",
      process: "Work towards future opportunities",
      output: "Create Future Opportunity",
    },
    {
      freq: "45 minutes per day",
      process:
        "Skill set, or business function work (marketing, conversion, delivery)",
      output: "Create Wealth",
    },
    {
      freq: "45 minutes per day",
      process: "Financial research, active investing or education",
      output: "Multiply Wealth",
    },
    {
      freq: "6 shifts per week",
      process: "Waitering shifts",
      output: "Stable Financial Income",
    },
    {
      freq: "Twice per week",
      process: "Collaborative games & experiences",
      output: "Experience-Driven Mila Relationship",
    },
    {
      freq: "Once per week",
      process: "Collaborative games & experiences",
      output: "Strong Family Relationships",
    },
    {
      freq: "Once per week",
      process: "Personal financial analysis and projections",
      output: "Preserve Wealth",
    },
    {
      freq: "Once per week",
      process: "Collaborative games & experiences",
      output: "Experience-Driven Friendship Relations",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl xl:max-w-6xl px-6 md:px-10 pb-16">
        {/* Header */}
        <header className="pt-10 pb-6 md:pt-14 md:pb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            {/* Left: Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                The Daily Grind
              </h1>
              <p className="text-sm text-slate-500 mt-1">My Operating System</p>
            </div>

            {/* Right: Quote (top-right) */}
            <div className="md:max-w-md">
              <QuoteCard
                source="Isaac Newton"
                text="For every action, there is an equal and opposite reaction."
                align="right"
                compact
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Infographic Table */}
          <section className="lg:col-span-8">
            {/* Column headers */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-4 mb-4 md:mb-6">
              <Header label="INPUT" tone="slate" />
              <Spacer />
              <Header label="PROCESS" tone="indigo" />
              <Spacer />
              <Header label="GOAL" tone="emerald" />
            </div>

            {/* Rows */}
            <div className="space-y-4 md:space-y-5">
              {rows.map((r, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 items-stretch"
                >
                  <Box tone="slate">{r.freq}</Box>
                  <Arrow />
                  <Box tone="indigo">{r.process}</Box>
                  <Arrow />
                  <Box tone="emerald">{r.output}</Box>
                </div>
              ))}
            </div>

            {/* Tracker table */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <TrackerTable />
            </div>

            {/* Quote card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <QuoteCard
                source="Galatians 6:7–9 (NIV/KJV)"
                text="Do not be deceived: God cannot be mocked. A man reaps what he sows."
              />
            </div>
          </section>

          {/* Right column */}
          <aside className="lg:col-span-4">
            {/* Daily Core / Weekly Anchors */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm p-6 md:p-7">
              <h2 className="text-lg font-semibold mb-4">
                Daily Core (non-negotiables)
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  <span className="font-medium">Journaling (1 page)</span> —{" "}
                  <em>Strong mental clarity & mindset</em>
                </li>
                <li>
                  <span className="font-medium">Exercise (45 min)</span> —{" "}
                  <em>Fit, high energy & strong physique</em>
                </li>
                <li>
                  <span className="font-medium">
                    Skill/business work (45 min)
                  </span>{" "}
                  — <em>Create wealth</em>
                </li>
                <li>
                  <span className="font-medium">
                    Financial learning/investing (45 min)
                  </span>{" "}
                  — <em>Multiply wealth</em>
                </li>
                <li>
                  <span className="font-medium">
                    Future opportunity work (45 min)
                  </span>{" "}
                  — <em>Create future opportunity</em>
                </li>
              </ul>
              <p className="text-sm text-slate-500 mt-3">
                ~3 hours/day of intentional work (doable across Lunch/Dinner/Off
                templates).
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">
                Weekly Anchors
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  <span className="font-medium">6x Waitering shifts</span> —{" "}
                  <em>Stable financial income</em>
                </li>
                <li>
                  <span className="font-medium">2x Mila experiences</span> —{" "}
                  <em>Experience-driven relationship</em>
                </li>
                <li>
                  <span className="font-medium">1x Friendship experience</span>{" "}
                  — <em>Experience-driven friendships</em>
                </li>
                <li>
                  <span className="font-medium">1x Family experience</span> —{" "}
                  <em>Strong family relationships</em>
                </li>
                <li>
                  <span className="font-medium">
                    1x Financial analysis/projections
                  </span>{" "}
                  — <em>Preserve wealth</em>
                </li>
              </ul>
              <p className="text-sm text-slate-500 mt-4">
                Anchors = relationship + family + finances → schedule them like
                appointments.
              </p>
            </div>

            {/* Ikigai card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm p-6">
              <IkigaiCard reminder="I'm building wealth to own my time, location, and financial freedom." />
            </div>

            {/* Milestones card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm p-6">
              <MilestoneCard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* UI building blocks */
function Header({
  label,
  tone,
}: {
  label: string;
  tone: "slate" | "indigo" | "emerald";
}) {
  const tones: Record<string, string> = {
    slate: "border-slate-300 bg-slate-50 text-slate-700",
    indigo: "border-indigo-300 bg-indigo-50 text-indigo-700",
    emerald: "border-emerald-300 bg-emerald-50 text-emerald-700",
  };
  return (
    <div className={`rounded-2xl border shadow-sm px-4 py-3 ${tones[tone]}`}>
      <p className="text-[11px] font-semibold tracking-wider uppercase">
        {label}
      </p>
    </div>
  );
}

function Box({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "slate" | "indigo" | "emerald";
}) {
  const tones: Record<string, string> = {
    slate: "border-slate-200 bg-white",
    indigo: "border-indigo-100 bg-white",
    emerald: "border-emerald-100 bg-white",
  };
  const accent: Record<string, string> = {
    slate: "before:bg-slate-200",
    indigo: "before:bg-indigo-200",
    emerald: "before:bg-emerald-200",
  };
  return (
    <div
      className={`rounded-2xl border shadow-sm px-4 py-5 flex items-center min-h-[72px] relative ${tones[tone]} ${accent[tone]} before:absolute before:-top-0.5 before:left-4 before:h-1 before:w-10 before:rounded-full`}
    >
      <p className="text-sm leading-snug">{children}</p>
    </div>
  );
}

function Spacer() {
  return <div className="hidden md:flex items-center justify-center" />;
}

function Arrow() {
  return (
    <div className="flex items-center justify-center w-6 md:w-8">
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M1 8h24"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 3l5 5-5 5"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* Tracker (with weekly localStorage persistence) */
function TrackerTable() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const items = [
    { label: "1 pg journaling", freq: "Daily" },
    { label: "45m exercise", freq: "Daily" },
    { label: "Skill/business work (45m)", freq: "Daily" },
    { label: "Financial learning/investing (45m)", freq: "Daily" },
    { label: "Future opportunity (45m)", freq: "Daily" },
    { label: "Waitering shifts", freq: "6/wk" },
    { label: "Mila experience", freq: "2/wk" },
    { label: "Friendship experience", freq: "1/wk" },
    { label: "Family experience", freq: "1/wk" },
    { label: "Financial analysis/projections", freq: "1/wk" },
  ];

  // ISO week key so each week gets its own saved grid
  const weekKey = useMemo(() => {
    const key = getISOWeekKey(new Date());
    return `tracker:v1:${key}`;
  }, []);

  const empty = useMemo(() => items.map(() => days.map(() => false)), []); // rows x days
  const [checked, setChecked] = useState<boolean[][]>(empty);

  // Load saved state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(weekKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      const valid =
        Array.isArray(parsed) &&
        parsed.length === items.length &&
        parsed.every(
          (row: any) => Array.isArray(row) && row.length === days.length
        );
      if (valid) setChecked(parsed);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekKey]);

  // Save on change
  useEffect(() => {
    try {
      localStorage.setItem(weekKey, JSON.stringify(checked));
    } catch {}
  }, [checked, weekKey]);

  const toggle = (r: number, c: number) =>
    setChecked((prev) => {
      const copy = prev.map((row) => row.slice());
      copy[r][c] = !copy[r][c];
      return copy;
    });

  const resetWeek = () => setChecked(empty);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">Weekly Tracker</h3>
          <p className="text-sm text-slate-500">Track your progress.</p>
        </div>
        <button
          onClick={resetWeek}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          Reset week
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4 font-semibold">Process</th>
              <th className="py-2 pr-4 font-semibold">Freq</th>
              {days.map((d) => (
                <th key={d} className="py-2 px-2 font-semibold text-center">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((it, r) => (
              <tr key={it.label} className="border-t border-slate-200">
                <td className="py-3 pr-4">
                  <span className="text-slate-900">{it.label}</span>
                </td>
                <td className="py-3 pr-4 text-slate-500">{it.freq}</td>
                {days.map((_, c) => (
                  <td key={c} className="py-3 px-2 text-center">
                    <label className="inline-flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                        checked={checked[r][c]}
                        onChange={() => toggle(r, c)}
                      />
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Returns e.g. '2025-W39' for the current ISO week */
function getISOWeekKey(date: Date) {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  // Thursday in current week decides the year.
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const week =
    1 +
    Math.round(
      ((d.getTime() - firstThursday.getTime()) / 86400000 -
        3 +
        ((firstThursday.getUTCDay() + 6) % 7)) /
        7
    );
  const year = d.getUTCFullYear();
  return `${year}-W${String(week).padStart(2, "0")}`;
}

/* Ikigai */
function IkigaiCard({ reminder }: { reminder?: string }) {
  const cIndigo = "#E0E7FF"; // indigo-100
  const cEmerald = "#D1FAE5"; // emerald-100
  const cSky = "#E0F2FE"; // sky-100
  const cAmber = "#FEF3C7"; // amber-100

  return (
    <div>
      <h3 className="text-base font-semibold mb-2">Ikigai</h3>
      {reminder ? (
        <p className="text-sm text-slate-600 mb-4">{reminder}</p>
      ) : null}

      <div className="w-full">
        <svg
          viewBox="0 0 300 240"
          className="w-full h-auto"
          aria-hidden
          role="img"
        >
          {/* 4 circles */}
          <circle cx="120" cy="90" r="70" fill={cIndigo} fillOpacity="0.85" />
          <circle cx="180" cy="90" r="70" fill={cEmerald} fillOpacity="0.85" />
          <circle cx="120" cy="150" r="70" fill={cSky} fillOpacity="0.85" />
          <circle cx="180" cy="150" r="70" fill={cAmber} fillOpacity="0.85" />
          {/* Center highlight */}
          <circle
            cx="150"
            cy="120"
            r="36"
            fill="#ffffff"
            fillOpacity="0.9"
            stroke="#e2e8f0"
          />
          {/* Labels */}
          <text
            x="70"
            y="32"
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            Passion
          </text>
          <text
            x="230"
            y="32"
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            Skills
          </text>
          <text
            x="70"
            y="210"
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            Environment
          </text>
          <text
            x="230"
            y="210"
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            Demand
          </text>
          {/* Center title */}
          <text
            x="150"
            y="124"
            textAnchor="middle"
            className="fill-slate-700"
            style={{ fontSize: 14, fontWeight: 700 }}
          >
            Purpose
          </text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <LegendPill color={cIndigo} label="Love" />
        <LegendPill color={cEmerald} label="Skills" />
        <LegendPill color={cSky} label="Environment" />
        <LegendPill color={cAmber} label="Demand" />
      </div>
    </div>
  );
}

function LegendPill({ color, label }: { color: string; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-2.5 py-1"
      style={{ backgroundColor: "#ffffff" }}
    >
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-slate-600">{label}</span>
    </span>
  );
}

/* Milestones */
function MilestoneCard() {
  const milestones = [
    "I have paid off 50% of my debt and have 50k in assets",
    "I have a strong relationship with Mila, my family and 3 solid friends",
    "I have a structured routine with a consistent diet and exercise schedule",
    "I have cut out all energy drains from my life consistently for 1 month",
    "I have documented my business knowledge in two formats",
  ];

  const storageKey = "milestones:v1";
  const [done, setDone] = useState<boolean[]>(milestones.map(() => false));

  // load / save
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === milestones.length) {
          setDone(parsed);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(done));
    } catch {}
  }, [done]);

  const toggle = (idx: number) =>
    setDone((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold">Milestone Tracker</h3>
        <p className="text-sm text-slate-500">
          Wins that will define my season.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-3">
        {milestones.map((m, i) => (
          <li
            key={i}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-sm hover:shadow transition"
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                checked={done[i]}
                onChange={() => toggle(i)}
              />
              <span className="text-sm leading-relaxed text-slate-800">
                {m}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Quotes */
function QuoteCard({
  source,
  text,
  align = "left",
  compact = false,
}: {
  source: string;
  text: string;
  align?: "left" | "right";
  compact?: boolean;
}) {
  const alignCls =
    align === "right" ? "items-end text-right" : "items-start text-left";
  const textSize = compact ? "text-[13px] md:text-sm" : "text-sm";
  const sourceSize = compact ? "text-[11px]" : "text-xs";

  return (
    <div className={`flex flex-col space-y-2 ${alignCls}`}>
      <p className={`${textSize} italic text-slate-700 leading-relaxed`}>
        “{text}”
      </p>
      <span className={`${sourceSize} font-medium text-slate-500`}>
        — {source}
      </span>
    </div>
  );
}
