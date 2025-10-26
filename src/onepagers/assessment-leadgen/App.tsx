import React, { useMemo, useState } from "react";

/**
 * Online Assessment Lead Gen — One-Pager
 * Single-file React + Tailwind app that walks a user through:
 * 1) Intro
 * 2) Landing Page planner (hooks, value prop, credibility, CTA)
 * 3) Questionnaire (contact info + 10 best-practices + 5 qualifying)
 * 4) Dynamic Results (big reveal, 3 insights, next steps)
 *
 * Tailwind: Ensure your project has Tailwind set up (postcss + tailwind.config).
 */

type BestPractice = {
  id: string;
  label: string;
  weight?: number; // default 1
};

type QualifyingAnswers = {
  situation: string;
  outcome90: string;
  obstacle: string;
  solution: string;
  notes: string;
};

type Contact = {
  name: string;
  email: string;
  phone?: string;
  // location is "auto-detected by IP" in real life; here we allow manual entry.
  location?: string;
};

const bestPractices: BestPractice[] = [
  { id: "bp1", label: "Go to bed at the same time each night" },
  { id: "bp2", label: "Avoid screens 60 minutes before bed" },
  { id: "bp3", label: "Track daily habits relevant to goal" },
  { id: "bp4", label: "Plan workouts or work blocks 3–4×/week" },
  { id: "bp5", label: "Calorie or KPI tracking (diet/fitness/business)" },
  { id: "bp6", label: "Environment supports the goal (quiet, tidy, tools)" },
  { id: "bp7", label: "Consistent routine (wind-down / prep / planning)" },
  { id: "bp8", label: "Nutrition supports the goal (or inputs quality)" },
  { id: "bp9", label: "Weekly review & adjust (iterate fast)" },
  { id: "bp10", label: "Clear target & timeframe (SMART-ish)" },
];

const situations = [
  "Student / Early Career (0–5 yrs)",
  "Manager / Mid Career",
  "Senior Leader",
  "Executive / Founder",
  "New to the field (first-timer)",
  "Experienced / Seasoned",
];

const outcomes90 = [
  "Lose weight / improve fitness",
  "Achieve 7+ hours of quality deep sleep",
  "Run first marathon / complete major milestone",
  "Protect business from cybersecurity threats",
  "Scale marketing and lead generation",
  "Other specific goal",
];

const obstacles = [
  "Lack of time / consistency",
  "Not sure what to do / overwhelm",
  "Tried plans that didn’t stick",
  "Environment / habits get in the way",
];

const solutions = [
  "Education & training / self-paced",
  "1:1 coaching or advisory",
  "Software / scorecard tool",
  "Done-for-you implementation",
];

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="mt-4 text-slate-700 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6">
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

const Hero = () => (
  <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2">
          <Pill>Lead Gen System</Pill>
          <Pill>Online Assessment</Pill>
          <Pill>Scorecard</Pill>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Everything is downstream from lead generation.
        </h1>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Over 20+ years and multiple scaled companies, one pattern held true:
          if you can generate leads, you can solve the rest. This one-page app
          shows you how to set up a high-performing online assessment that
          reliably generates qualified demand—complete with landing page
          structure, a 15-question scorecard, and dynamic next steps.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#landing"
            className="rounded-xl px-4 py-2 bg-black text-white text-sm font-semibold"
          >
            Plan Landing Page
          </a>
          <a
            href="#quiz"
            className="rounded-xl px-4 py-2 border border-black text-sm font-semibold"
          >
            Build Questionnaire
          </a>
          <a
            href="#results"
            className="rounded-xl px-4 py-2 border border-slate-300 text-sm font-semibold"
          >
            Preview Results
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  // Landing page planner state
  const [frustration, setFrustration] = useState<string>("");
  const [readiness, setReadiness] = useState<string>("");
  const [subheading, setSubheading] = useState<string>(
    "Answer 15 questions to find out why you’re experiencing this frustration and what to do about it."
  );
  const [vpArea1, setVpArea1] = useState("Sleep / Environment");
  const [vpArea2, setVpArea2] = useState("Routine / Process");
  const [vpArea3, setVpArea3] = useState("Nutrition / Inputs");
  const [credWho, setCredWho] = useState("Who created this (you + bio)");
  const [credDone, setCredDone] = useState(
    "What you’ve done in the past (relevant wins)"
  );
  const [credResearch, setCredResearch] = useState(
    "What research informs this (stats, studies)"
  );
  const [ctaCopy, setCtaCopy] = useState(
    "Start the quiz — it only takes 3 minutes, it’s free, and you’ll get immediate recommendations."
  );

  // Contact & quiz
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [bp, setBp] = useState<Record<string, boolean>>(
    bestPractices.reduce((acc, b) => ({ ...acc, [b.id]: false }), {})
  );
  const [qa, setQa] = useState<QualifyingAnswers>({
    situation: "",
    outcome90: "",
    obstacle: "",
    solution: "",
    notes: "",
  });

  const totalBp = bestPractices.length;
  const bpScore = useMemo(() => {
    let score = 0;
    bestPractices.forEach((b) => {
      if (bp[b.id]) score += b.weight ?? 1;
    });
    // normalize to 100
    return Math.round((score / totalBp) * 100);
  }, [bp]);

  // “Budget intent” signal from solution choice (for demo only)
  const impliedBudget = useMemo(() => {
    switch (qa.solution) {
      case "Education & training / self-paced":
        return "$10–$200";
      case "1:1 coaching or advisory":
        return "$1,000–$5,000";
      case "Software / scorecard tool":
        return "$20–$300/mo";
      case "Done-for-you implementation":
        return "$10,000–$20,000+";
      default:
        return "Unknown";
    }
  }, [qa.solution]);

  const heat = useMemo<"Cold" | "Warm" | "Hot">(() => {
    if (bpScore >= 75) return "Hot";
    if (bpScore >= 45) return "Warm";
    return "Cold";
  }, [bpScore]);

  const insights = useMemo(() => {
    const out: string[] = [];
    if (bpScore < 45) {
      out.push(
        "Foundations are weak—start with routine, environment, and one keystone habit."
      );
      out.push("Reduce complexity; adopt a simple plan you can repeat daily.");
    } else if (bpScore < 75) {
      out.push("Good foundations—tighten consistency and weekly review loops.");
      out.push(
        "Upgrade one bottleneck (sleep, tracking, or planning cadence)."
      );
    } else {
      out.push("Strong execution—optimize for marginal gains and scale.");
      out.push(
        "Consider advanced levers: tooling, coaching, or DFY to accelerate."
      );
    }
    // Tailored nudge based on solution preference
    if (qa.solution)
      out.push(
        `You’re leaning toward: ${qa.solution} (implied budget: ${impliedBudget}).`
      );
    return out.slice(0, 3);
  }, [bpScore, qa.solution, impliedBudget]);

  const nextSteps = useMemo(() => {
    if (bpScore >= 75) {
      return [
        "Book a 1:1 strategy session to design a fast track (calendar link).",
        "Start a pilot or DFY engagement with clear 90-day targets.",
        "Add software/automation to compress cycle time.",
      ];
    }
    if (bpScore >= 45) {
      return [
        "Join a live group workshop / webinar to lock in the fundamentals.",
        "Adopt a weekly review template and iterate on one habit.",
        "Use a simple tracker (sheet/app) to build momentum.",
      ];
    }
    return [
      "Start with free resources: video walkthroughs + starter checklist.",
      "Pick ONE habit to do daily for 7 days; review on day 8.",
      "Revisit environment: remove friction, prep tools the night before.",
    ];
  }, [bpScore]);

  const validContact =
    contact.name.trim() && /\S+@\S+\.\S+/.test(contact.email);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      {/* Intro */}
      <Section id="intro" title="Intro">
        <Card>
          <p>
            If there is one thing that I’ve learned over the last 20 years of
            scaling multiple companies, it’s this:
            <span className="font-semibold">
              {" "}
              everything is downstream from lead generation.
            </span>{" "}
            If you can generate leads, you can solve all the other problems
            after that. But if you cannot generate leads, you are{" "}
            <span className="italic">dead in the water</span>. This one-pager
            shows the multi-million-dollar lead gen system used across agencies,
            software, education & training, coaching, consulting, and
            more—centered on{" "}
            <span className="font-semibold">online assessments</span> that
            consistently produce qualified demand.
          </p>
        </Card>
      </Section>

      <Divider />

      {/* Landing Page Planner */}
      <Section id="landing" title="Landing Page — Plan & Copy">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Hooks</h3>
            <p className="mt-2 text-sm text-slate-600">
              Use either a{" "}
              <span className="font-semibold">Frustration Hook</span> or a{" "}
              <span className="font-semibold">Results (Readiness) Hook</span>.
            </p>

            <div className="mt-4 space-y-3">
              <label className="block">
                <span className="text-sm font-medium">Frustration Hook</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  placeholder={`“Feeling frustrated that you’re not getting [result] even though you [effort]?”`}
                  value={frustration}
                  onChange={(e) => setFrustration(e.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  Results / Readiness Hook
                </span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  placeholder={`“Are you ready to [result]?”`}
                  value={readiness}
                  onChange={(e) => setReadiness(e.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  Subheading (directive)
                </span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={subheading}
                  onChange={(e) => setSubheading(e.target.value)}
                />
              </label>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">
              Value Proposition (Measure & Improve 3 Areas)
            </h3>
            <div className="mt-4 grid gap-3">
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={vpArea1}
                onChange={(e) => setVpArea1(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={vpArea2}
                onChange={(e) => setVpArea2(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={vpArea3}
                onChange={(e) => setVpArea3(e.target.value)}
              />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Example: “Answer 15 questions so we can measure & improve your{" "}
              <span className="font-medium">{vpArea1}</span>,{" "}
              <span className="font-medium">{vpArea2}</span>, and{" "}
              <span className="font-medium">{vpArea3}</span>.”
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Credibility</h3>
            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={credWho}
                onChange={(e) => setCredWho(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={credDone}
                onChange={(e) => setCredDone(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
                value={credResearch}
                onChange={(e) => setCredResearch(e.target.value)}
              />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Include stats/studies (e.g. “85% struggle with X” / “15% achieve
              Y; room to improve”).
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Call To Action (CTA)</h3>
            <textarea
              className="mt-4 w-full rounded-xl border border-slate-300 px-3 py-2"
              rows={4}
              value={ctaCopy}
              onChange={(e) => setCtaCopy(e.target.value)}
            />
            <ul className="mt-3 text-sm list-disc pl-5 text-slate-600">
              <li>Invite to start the quiz</li>
              <li>
                Set expectations: ~3 minutes, free, instant recommendations
              </li>
              <li>Target 20–40% landing page → quiz start rate</li>
            </ul>
          </Card>
        </div>

        <Card>
          <h3 className="text-lg font-semibold mt-6">
            Preview: Above-the-Fold
          </h3>
          <div className="mt-4 rounded-xl border border-slate-200 p-4">
            <p className="text-lg font-semibold">Hook</p>
            <p className="mt-1">
              {frustration || readiness || "Your compelling hook appears here."}
            </p>
            <p className="mt-3 text-slate-700">{subheading}</p>
            <p className="mt-3">
              We’ll measure & improve:{" "}
              <span className="font-medium">{vpArea1}</span>,{" "}
              <span className="font-medium">{vpArea2}</span>,{" "}
              <span className="font-medium">{vpArea3}</span>.
            </p>
            <div className="mt-3 text-sm text-slate-600">
              <div>Credibility: {credWho}</div>
              <div>{credDone}</div>
              <div>{credResearch}</div>
            </div>
            <div className="mt-4 inline-flex items-center gap-3">
              <a
                href="#quiz"
                className="rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold"
              >
                Start the Quiz
              </a>
              <span className="text-sm text-slate-600">{ctaCopy}</span>
            </div>
          </div>
        </Card>
      </Section>

      <Divider />

      {/* Questionnaire */}
      <Section id="quiz" title="Questionnaire — 15 Questions">
        <div className="grid gap-6">
          <Card>
            <h3 className="text-lg font-semibold">
              Part 1 — Contact (required: name + email)
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Name *</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={contact.name}
                  onChange={(e) =>
                    setContact({ ...contact, name: e.target.value })
                  }
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email *</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone (optional)</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact({ ...contact, phone: e.target.value })
                  }
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">
                  Location (auto in prod; manual here)
                </span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={contact.location}
                  onChange={(e) =>
                    setContact({ ...contact, location: e.target.value })
                  }
                />
              </label>
            </div>
            {!validContact && (
              <p className="mt-3 text-sm text-amber-700">
                Please provide a valid name and email to begin.
              </p>
            )}
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">
              Part 2 — 10 Best Practices
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Check each best practice you already do consistently.
            </p>
            <div className="mt-4 grid gap-2">
              {bestPractices.map((b) => (
                <label key={b.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                    checked={bp[b.id]}
                    onChange={(e) =>
                      setBp((prev) => ({ ...prev, [b.id]: e.target.checked }))
                    }
                    disabled={!validContact}
                  />
                  <span>{b.label}</span>
                </label>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Progress:{" "}
                <span className="font-medium">
                  {Math.round(Object.values(bp).filter(Boolean).length)}/
                  {totalBp}
                </span>
              </div>
              <div className="text-sm">
                Score (auto): <span className="font-semibold">{bpScore}</span>
                /100
              </div>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                className={`h-2 rounded-full ${
                  bpScore >= 75
                    ? "bg-emerald-500"
                    : bpScore >= 45
                    ? "bg-amber-500"
                    : "bg-rose-500"
                }`}
                style={{ width: `${bpScore}%` }}
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">
              Part 3 — 5 Qualifying Questions
            </h3>
            <div className="mt-4 grid gap-4">
              <label className="block">
                <span className="text-sm font-medium">
                  1) Which best describes your current situation?
                </span>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={qa.situation}
                  onChange={(e) => setQa({ ...qa, situation: e.target.value })}
                  disabled={!validContact}
                >
                  <option value="">Select…</option>
                  {situations.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  2) Desired outcome in the next 90 days?
                </span>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={qa.outcome90}
                  onChange={(e) => setQa({ ...qa, outcome90: e.target.value })}
                  disabled={!validContact}
                >
                  <option value="">Select…</option>
                  {outcomes90.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  3) Biggest obstacle / what hasn’t worked?
                </span>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={qa.obstacle}
                  onChange={(e) => setQa({ ...qa, obstacle: e.target.value })}
                  disabled={!validContact}
                >
                  <option value="">Select…</option>
                  {obstacles.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  4) Preferred solution?
                </span>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={qa.solution}
                  onChange={(e) => setQa({ ...qa, solution: e.target.value })}
                  disabled={!validContact}
                >
                  <option value="">Select…</option>
                  {solutions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {qa.solution && (
                  <p className="mt-2 text-sm text-slate-600">
                    Implied budget signal:{" "}
                    <span className="font-medium">{impliedBudget}</span>
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  5) Anything else we should know?
                </span>
                <textarea
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  rows={4}
                  placeholder="Open text—buying signals often show up here."
                  value={qa.notes}
                  onChange={(e) => setQa({ ...qa, notes: e.target.value })}
                  disabled={!validContact}
                />
              </label>
            </div>
          </Card>
        </div>
      </Section>

      <Divider />

      {/* Dynamic Results */}
      <Section
        id="results"
        title="Dynamic Results — Big Reveal, Insights, Next Steps"
      >
        <Card>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold">Big Reveal</h3>
              <div className="mt-3 rounded-xl border border-slate-200 p-4">
                <div className="text-sm text-slate-600">Overall Score</div>
                <div className="mt-1 text-3xl font-extrabold">
                  {bpScore}/100
                </div>
                <div className="mt-2 text-sm">
                  Heat:{" "}
                  <span
                    className={`font-semibold ${
                      heat === "Hot"
                        ? "text-emerald-600"
                        : heat === "Warm"
                        ? "text-amber-600"
                        : "text-rose-600"
                    }`}
                  >
                    {heat}
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full ${
                      bpScore >= 75
                        ? "bg-emerald-500"
                        : bpScore >= 45
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                    style={{ width: `${bpScore}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-600 space-y-1">
                <div>
                  <span className="font-medium">Situation:</span>{" "}
                  {qa.situation || "—"}
                </div>
                <div>
                  <span className="font-medium">90-day Outcome:</span>{" "}
                  {qa.outcome90 || "—"}
                </div>
                <div>
                  <span className="font-medium">Obstacle:</span>{" "}
                  {qa.obstacle || "—"}
                </div>
                <div>
                  <span className="font-medium">Solution Pref:</span>{" "}
                  {qa.solution || "—"}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold">Three Insights</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                {insights.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold">Next Steps (Tailored)</h3>
              <ol className="mt-3 list-decimal pl-5 space-y-2">
                {nextSteps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
              <div className="mt-4 text-sm text-slate-600">
                Add your contact info & social links below so visitors can
                explore further.
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Contact & Social</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <input
              className="rounded-xl border border-slate-300 px-3 py-2"
              placeholder="Website URL"
            />
            <input
              className="rounded-xl border border-slate-300 px-3 py-2"
              placeholder="Email / Support"
            />
            <input
              className="rounded-xl border border-slate-300 px-3 py-2"
              placeholder="Instagram / LinkedIn / X"
            />
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Tip: Keep this results page openable in a new tab so users can
            explore without losing the report.
          </p>
        </Card>
      </Section>

      <Divider />

      {/* Automation note */}
      <Section id="automation" title="Get an Automated System">
        <Card>
          <p>
            This entire system can be fully automated with a scorecard platform
            (e.g., templates, courses, support). Typical setup times are
            minutes, and once live, the assessment becomes a consistent source
            of qualified leads. Drive traffic (paid/organic) to your landing
            page, iterate based on completion and conversion metrics, and scale.
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700">
            <li>150+ templates aligned to this strategy</li>
            <li>Downloadable book and walkthroughs</li>
            <li>Customer success support for setup</li>
          </ul>
        </Card>
      </Section>

      <footer className="mt-12 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Online Assessment Lead Gen</div>
            <div className="flex items-center gap-4">
              <a href="#landing" className="hover:underline">
                Landing Plan
              </a>
              <a href="#quiz" className="hover:underline">
                Questionnaire
              </a>
              <a href="#results" className="hover:underline">
                Results
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
