import React, { useMemo, useState } from "react";

/**
 * Hiring & Capacity OS — One‑Pager
 * React + TailwindCSS (TypeScript)
 *
 * Features
 * - KPI dashboard (time‑to‑fill, offer acceptance, 90‑day success, utilization, on‑time)
 * - Candidate pipeline with stages + quick advance
 * - Interviews with rubric scores
 * - Offers tracker
 * - Scorecards (30/60/90) + lightweight performance tracking
 * - 7‑day onboarding generator with status pills
 * - Weekly utilization grid with pod rollups
 * - Handover document generator + copy
 */

// -------------------- Tones & Primitives --------------------

type Tone = "slate" | "indigo" | "emerald" | "amber" | "rose";

const toneToClasses: Record<
  Tone,
  {
    text: string;
    border: string;
    pill: string;
    heading: string;
    accent: string;
  }
> = {
  slate: {
    text: "text-slate-900",
    border: "border-slate-200",
    pill: "bg-slate-100 text-slate-700",
    heading: "text-slate-900",
    accent: "text-slate-700",
  },
  indigo: {
    text: "text-indigo-900",
    border: "border-indigo-200",
    pill: "bg-indigo-50 text-indigo-700",
    heading: "text-indigo-900",
    accent: "text-indigo-700",
  },
  emerald: {
    text: "text-emerald-900",
    border: "border-emerald-200",
    pill: "bg-emerald-50 text-emerald-700",
    heading: "text-emerald-900",
    accent: "text-emerald-700",
  },
  amber: {
    text: "text-amber-900",
    border: "border-amber-200",
    pill: "bg-amber-50 text-amber-800",
    heading: "text-amber-900",
    accent: "text-amber-800",
  },
  rose: {
    text: "text-rose-900",
    border: "border-rose-200",
    pill: "bg-rose-50 text-rose-700",
    heading: "text-rose-900",
    accent: "text-rose-700",
  },
};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const Card: React.FC<{
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}> = ({ children, tone = "slate", className = "" }) => (
  <div
    className={[
      "rounded-2xl border bg-white/80 shadow-sm backdrop-blur",
      toneToClasses[tone].border,
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

const SectionHeading: React.FC<{
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
}> = ({ id, label, title, subtitle, tone = "slate" }) => (
  <div id={id} className="scroll-mt-24">
    <div className="mb-3 inline-flex items-center gap-2">
      <span
        className={[
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
          toneToClasses[tone].pill,
        ].join(" ")}
      >
        {label}
      </span>
    </div>
    <h2
      className={[
        "text-2xl sm:text-3xl font-semibold leading-tight",
        toneToClasses[tone].heading,
      ].join(" ")}
    >
      {title}
    </h2>
    {subtitle && <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>}
  </div>
);

const Pill: React.FC<{ children: React.ReactNode; tone?: Tone }> = ({
  children,
  tone = "slate",
}) => (
  <span
    className={[
      "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
      toneToClasses[tone].pill,
    ].join(" ")}
  >
    {children}
  </span>
);

const AnchorNav: React.FC<{
  items: { id: string; label: string; tone?: Tone }[];
}> = ({ items }) => (
  <div className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
    <Container>
      <div className="flex items-center justify-between py-3">
        <div className="font-semibold text-slate-800">Hiring & Capacity OS</div>
        <div className="-mx-2 flex w-full max-w-full justify-end overflow-x-auto pl-4 sm:pl-0">
          <div className="flex items-center gap-2 pr-2">
            {items.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition",
                  toneToClasses[i.tone ?? "slate"].pill,
                  "hover:opacity-80",
                ].join(" ")}
              >
                {i.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </div>
);

const StatCard: React.FC<{
  label: string;
  value: string;
  hint?: string;
  tone?: Tone;
}> = ({ label, value, hint, tone = "slate" }) => (
  <div
    className={[
      "rounded-xl border bg-white p-4 shadow-sm",
      toneToClasses[tone].border,
    ].join(" ")}
  >
    <div
      className={[
        "text-xs font-semibold uppercase tracking-wide",
        toneToClasses[tone].accent,
      ].join(" ")}
    >
      {label}
    </div>
    <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
    {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
  </div>
);

// -------------------- Domain Types --------------------

type Pod = { id: string; name: string };

type Role = {
  id: string;
  name: string;
  podId: string;
  level: "L1" | "L2" | "L3";
};

type Person = {
  id: string;
  name: string;
  roleId: string;
  startDate: string; // ISO
  probationStatus?: "in_progress" | "passed" | "failed";
};

type CandidateStage =
  | "applied"
  | "screen"
  | "skills"
  | "work_sample"
  | "values"
  | "references"
  | "offer"
  | "hired"
  | "rejected";

type Candidate = {
  id: string;
  name: string;
  email: string;
  roleId: string;
  source: string;
  stage: CandidateStage;
  createdAt: string; // req open
  stageDates: Partial<Record<CandidateStage, string>>; // ISO
};

type InterviewType = "screen" | "skills" | "values";

type Interview = {
  id: string;
  candidateId: string;
  type: InterviewType;
  date: string; // ISO
  panelist: string;
  scores: {
    technical: number;
    decision: number;
    velocity: number;
    communication: number;
    collaboration: number;
  };
  notes?: string;
};

type OfferStatus = "sent" | "accepted" | "declined" | "withdrawn";

type Offer = {
  id: string;
  candidateId: string;
  band: string;
  status: OfferStatus;
  dateSent: string;
  dateClosed?: string;
};

type OnboardingStatus = "todo" | "in_progress" | "done";

type OnboardingTask = {
  id: string;
  personId: string;
  task: string;
  owner: string;
  due: string; // ISO
  status: OnboardingStatus;
  completedAt?: string; // ISO
};

type Scorecard = {
  id: string;
  personId: string;
  period: "30" | "60" | "90";
  outcomes: string[];
  rubric: {
    technical: number;
    communication: number;
    ownership: number;
    speed: number;
  };
  comments?: string;
  status: "in_progress" | "reviewed";
};

type UtilRow = {
  id: string;
  personId: string;
  week: string;
  capacity: number;
  booked: number;
  billable?: number;
};

// -------------------- Sample Data --------------------

const pods: Pod[] = [
  { id: "p1", name: "Growth" },
  { id: "p2", name: "Creative" },
  { id: "p3", name: "Analytics" },
];

const roles: Role[] = [
  { id: "r1", name: "Growth Marketer", podId: "p1", level: "L2" },
  { id: "r2", name: "UGC Producer", podId: "p2", level: "L1" },
  { id: "r3", name: "Data Analyst", podId: "p3", level: "L2" },
];

const initialPeople: Person[] = [
  {
    id: "u1",
    name: "Ava Maseko",
    roleId: "r1",
    startDate: "2025-06-10",
    probationStatus: "passed",
  },
  {
    id: "u2",
    name: "Thabo Nkosi",
    roleId: "r2",
    startDate: "2025-08-01",
    probationStatus: "in_progress",
  },
  {
    id: "u3",
    name: "Naledi Dlamini",
    roleId: "r3",
    startDate: "2025-04-15",
    probationStatus: "passed",
  },
];

const initialCandidates: Candidate[] = [
  {
    id: "c1",
    name: "Lerato Khoza",
    email: "lerato@example.com",
    roleId: "r2",
    source: "Referral",
    stage: "work_sample",
    createdAt: "2025-08-20",
    stageDates: {
      applied: "2025-08-20",
      screen: "2025-08-22",
      skills: "2025-08-25",
      work_sample: "2025-08-27",
    },
  },
  {
    id: "c2",
    name: "Mandla Sithole",
    email: "mandla@example.com",
    roleId: "r1",
    source: "LinkedIn",
    stage: "offer",
    createdAt: "2025-07-30",
    stageDates: {
      applied: "2025-07-30",
      screen: "2025-08-01",
      skills: "2025-08-05",
      values: "2025-08-08",
      references: "2025-08-10",
      offer: "2025-08-12",
    },
  },
  {
    id: "c3",
    name: "Karin Jacobs",
    email: "karin@example.com",
    roleId: "r3",
    source: "Inbound",
    stage: "screen",
    createdAt: "2025-09-05",
    stageDates: { applied: "2025-09-05", screen: "2025-09-07" },
  },
];

const initialInterviews: Interview[] = [
  {
    id: "i1",
    candidateId: "c2",
    type: "skills",
    date: "2025-08-05",
    panelist: "Ava",
    scores: {
      technical: 4,
      decision: 4,
      velocity: 5,
      communication: 4,
      collaboration: 4,
    },
    notes: "Great paid media sense",
  },
  {
    id: "i2",
    candidateId: "c1",
    type: "skills",
    date: "2025-08-25",
    panelist: "Thabo",
    scores: {
      technical: 3,
      decision: 3,
      velocity: 4,
      communication: 4,
      collaboration: 4,
    },
  },
];

const initialOffers: Offer[] = [
  {
    id: "o1",
    candidateId: "c2",
    band: "L2",
    status: "sent",
    dateSent: "2025-08-12",
  },
];

const initialOnboarding: OnboardingTask[] = [
  {
    id: "t1",
    personId: "u2",
    task: "Accounts & tools access",
    owner: "Ops",
    due: "2025-08-02",
    status: "done",
    completedAt: "2025-08-02",
  },
  {
    id: "t2",
    personId: "u2",
    task: "Shadow 1 client call",
    owner: "Pod Lead",
    due: "2025-08-03",
    status: "in_progress",
  },
  {
    id: "t3",
    personId: "u2",
    task: "Ship hello‑world task",
    owner: "Pod Lead",
    due: "2025-08-04",
    status: "todo",
  },
];

const initialScorecards: Scorecard[] = [
  {
    id: "s1",
    personId: "u2",
    period: "30",
    outcomes: ["Ship 3 scoped tasks", "QA ≥ 90%"],
    rubric: { technical: 3, communication: 4, ownership: 3, speed: 3 },
    comments: "Good start",
    status: "in_progress",
  },
  {
    id: "s2",
    personId: "u1",
    period: "90",
    outcomes: ["Lead mini‑project", "Lower CPA by 10%"],
    rubric: { technical: 4, communication: 4, ownership: 5, speed: 4 },
    status: "reviewed",
  },
];

const initialUtil: UtilRow[] = [
  {
    id: "ut1",
    personId: "u1",
    week: "2025-09-15",
    capacity: 40,
    booked: 34,
    billable: 30,
  },
  {
    id: "ut2",
    personId: "u2",
    week: "2025-09-15",
    capacity: 40,
    booked: 36,
    billable: 28,
  },
  {
    id: "ut3",
    personId: "u3",
    week: "2025-09-15",
    capacity: 40,
    booked: 22,
    billable: 18,
  },
];

// -------------------- Utils --------------------

const gid = () => Math.random().toString(36).slice(2, 10);
const todayISO = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
const avg = (xs: number[]) =>
  xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0;
const pct = (n: number) => (isFinite(n) ? (n * 100).toFixed(0) + "%" : "0%");
const daysBetween = (a: string, b: string) =>
  Math.max(
    1,
    Math.round((+new Date(b) - +new Date(a)) / (1000 * 60 * 60 * 24))
  );
const copy = (t: string) => navigator.clipboard.writeText(t);

// -------------------- Templates --------------------

const TEMPLATE_OFFER_EMAIL = `Subject: Offer — {{role}} at {{company}}\n\nHi {{name}},\n\nWe enjoyed meeting you and would like to offer you the {{role}} role (level {{band}}).\nSummary:\n• Compensation: {{comp}}\n• Start date: {{start}}\n• Location: Remote\n• Probation: 90 days\n\nNext steps: please review the attached letter and let us know if you have any questions.\n\nBest,\n{{sender}}`;

const TEMPLATE_REFERENCE_QUESTIONS = `Reference Check — Quick Script\n1) Context & dates?\n2) Core strengths?\n3) Where did they struggle?\n4) Would you rehire?\n5) Anything we should know to set them up for success?`;

const TEMPLATE_PIP = `Performance Improvement Plan (4 weeks)\nGoals:\n1) ...\n2) ...\n3) ...\nCadence: weekly check-in, written updates before each meeting.\nResources: mentor + examples.\nExit criteria: all goals met and sustained for 2 consecutive weeks.`;

const TEMPLATE_HANDOVER = (name: string, successor: string, docLinks: string) =>
  `Handover — ${name}\n\nCurrent projects:\n- ... (status, deadlines, stakeholders)\n\nRecurring tasks:\n- ... (cadence, location)\n\nAccess & credentials location:\n- Use password manager / shared drive (never plain text).\n\nRisks & gotchas:\n- ...\n\nTop files/links:\n${docLinks}\n\nSuccessor: ${successor}\nFirst week plan:\n- ...`;

// -------------------- Main Component --------------------

export default function App() {
  // State
  const [people, setPeople] = useState<Person[]>(initialPeople);
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [interviews, setInterviews] = useState<Interview[]>(initialInterviews);
  const [offers, setOffers] = useState<Offer[]>(initialOffers);
  const [onboarding, setOnboarding] =
    useState<OnboardingTask[]>(initialOnboarding);
  const [scorecards, setScorecards] = useState<Scorecard[]>(initialScorecards);
  const [util, setUtil] = useState<UtilRow[]>(initialUtil);

  // Derived maps
  const roleById = useMemo(
    () => Object.fromEntries(roles.map((r) => [r.id, r])),
    []
  );
  const podById = useMemo(
    () => Object.fromEntries(pods.map((p) => [p.id, p])),
    []
  );

  // KPI calculations
  const kpis = useMemo(() => {
    const hired = candidates.filter((c) => c.stage === "hired");
    const timeToFillDays = hired.length
      ? Math.round(
          avg(
            hired.map((h) =>
              daysBetween(h.createdAt, h.stageDates.hired || todayISO())
            )
          )
        )
      : 0;

    const sentOffers = offers.filter(
      (o) =>
        o.status === "sent" ||
        o.status === "accepted" ||
        o.status === "declined"
    ).length;
    const accepted = offers.filter((o) => o.status === "accepted").length;
    const offerAcceptance = sentOffers ? accepted / sentOffers : 0;

    const ninety = people.filter((p) => p.probationStatus).length;
    const passed = people.filter((p) => p.probationStatus === "passed").length;
    const success90 = ninety ? passed / ninety : 0;

    const thisWeek = util.filter((u) => u.week === "2025-09-15");
    const utilPct = thisWeek.length
      ? avg(thisWeek.map((u) => u.booked / Math.max(1, u.capacity)))
      : 0;

    const tasks = onboarding;
    const completedOnTime = tasks.filter(
      (t) =>
        t.status === "done" &&
        t.completedAt &&
        new Date(t.completedAt) <= new Date(t.due)
    ).length;
    const done = tasks.filter((t) => t.status === "done").length;
    const onTime = done ? completedOnTime / done : 0;

    return {
      timeToFill: timeToFillDays ? `${timeToFillDays}d` : "—",
      offerAcceptance: pct(offerAcceptance),
      success90: pct(success90),
      utilization: pct(utilPct),
      onTimeDelivery: pct(onTime),
      headcount: String(people.length),
    };
  }, [candidates, offers, people, util, onboarding]);

  // Forms
  const [newCandidate, setNewCandidate] = useState<Partial<Candidate>>({
    stage: "applied",
    createdAt: todayISO(),
    stageDates: { applied: todayISO() },
  });
  const [newInterview, setNewInterview] = useState<Partial<Interview>>({
    type: "screen",
    date: todayISO(),
    scores: {
      technical: 3,
      decision: 3,
      velocity: 3,
      communication: 3,
      collaboration: 3,
    },
  });
  const [newOffer, setNewOffer] = useState<Partial<Offer>>({
    status: "sent",
    dateSent: todayISO(),
  });
  const [selectedPersonId, setSelectedPersonId] = useState<string>(
    people[0]?.id ?? ""
  );
  const selectedPerson =
    people.find((p) => p.id === selectedPersonId) ?? people[0];
  const [handoverLinks, setHandoverLinks] =
    useState<string>("- Link 1\n- Link 2");
  const [handoverSuccessor, setHandoverSuccessor] =
    useState<string>("Successor Name");

  // Helpers
  const stageOrder: CandidateStage[] = [
    "applied",
    "screen",
    "skills",
    "work_sample",
    "values",
    "references",
    "offer",
    "hired",
    "rejected",
  ];
  const nextStage = (c: Candidate) => {
    const idx = stageOrder.indexOf(c.stage);
    const next = stageOrder[Math.min(idx + 1, stageOrder.length - 1)];
    const updated: Candidate = {
      ...c,
      stage: next,
      stageDates: { ...c.stageDates, [next]: todayISO() },
    };
    setCandidates((prev) => prev.map((x) => (x.id === c.id ? updated : x)));
  };

  // Onboarding generator
  const generateOnboarding = (personId: string) => {
    const start = new Date();
    const plusDays = (d: number) =>
      new Date(start.getTime() + d * 86400000).toISOString().slice(0, 10);
    const base: OnboardingTask[] = [
      {
        id: gid(),
        personId,
        task: "Accounts & tools access",
        owner: "Ops",
        due: plusDays(1),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Read team readme & exemplars",
        owner: "Pod Lead",
        due: plusDays(2),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Shadow 1 client call",
        owner: "Pod Lead",
        due: plusDays(3),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Ship hello‑world task",
        owner: "Pod Lead",
        due: plusDays(4),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Redo work sample with real data",
        owner: "Pod Lead",
        due: plusDays(5),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Agree 30/60/90 outcomes",
        owner: "Manager",
        due: plusDays(6),
        status: "todo",
      },
      {
        id: gid(),
        personId,
        task: "Own scoped task end‑to‑end",
        owner: "Manager",
        due: plusDays(7),
        status: "todo",
      },
    ];
    setOnboarding((prev) => [...base, ...prev]);
  };

  const handoverDoc = TEMPLATE_HANDOVER(
    selectedPerson?.name ?? "",
    handoverSuccessor,
    handoverLinks
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <AnchorNav
        items={[
          { id: "hero", label: "Overview", tone: "slate" },
          { id: "kpis", label: "KPIs", tone: "emerald" },
          { id: "pipeline", label: "Pipeline", tone: "emerald" },
          { id: "interviews", label: "Interviews", tone: "indigo" },
          { id: "offers", label: "Offers", tone: "amber" },
          { id: "scorecards", label: "Scorecards", tone: "slate" },
          { id: "onboarding", label: "Onboarding", tone: "indigo" },
          { id: "utilization", label: "Utilization", tone: "amber" },
          { id: "handover", label: "Handover", tone: "rose" },
          { id: "templates", label: "Templates", tone: "slate" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-emerald-100/60 to-transparent" />
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Hiring & Capacity OS
              </h1>
              <p className="mt-3 text-slate-600">
                Scale delivery without fire drills. Standardize hiring, ramp,
                performance, handover, and capacity planning.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="emerald">Hiring</Pill>
                <Pill tone="indigo">Onboarding</Pill>
                <Pill tone="amber">Utilization</Pill>
                <Pill tone="rose">Handover</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="space-y-12 pb-20">
          {/* KPI Dashboard */}
          <section>
            <SectionHeading
              id="kpis"
              label="Dashboard"
              title="Core KPIs"
              subtitle="Targets: Time‑to‑fill 21–35 days, Offer acceptance ≥ 60%, 90‑day success ≥ 80%, Utilization 70–85%, On‑time delivery ≥ 90%."
              tone="emerald"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              <StatCard
                label="Headcount"
                value={kpis.headcount}
                hint="Active people"
              />
              <StatCard
                label="Time‑to‑fill"
                value={kpis.timeToFill}
                hint="Req open → hire"
                tone="emerald"
              />
              <StatCard
                label="Offer acceptance"
                value={kpis.offerAcceptance}
                hint="Accepted / Sent"
                tone="emerald"
              />
              <StatCard
                label="90‑day success"
                value={kpis.success90}
                hint="Passed probation"
                tone="indigo"
              />
              <StatCard
                label="Utilization"
                value={kpis.utilization}
                hint="Booked / Capacity (this week)"
                tone="amber"
              />
              <StatCard
                label="On‑time delivery"
                value={kpis.onTimeDelivery}
                hint="Completed by due"
                tone="indigo"
              />
            </div>
          </section>

          {/* Pipeline */}
          <section>
            <SectionHeading
              id="pipeline"
              label="Hiring"
              title="Candidate Pipeline"
              subtitle="Track candidates and advance stages with one click."
              tone="emerald"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="emerald" className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Applied</th>
                      <th className="py-2">Name</th>
                      <th className="py-2">Role</th>
                      <th className="py-2">Stage</th>
                      <th className="py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((c) => (
                      <tr key={c.id} className="border-b border-slate-100">
                        <td className="py-2 text-slate-700">{c.createdAt}</td>
                        <td className="py-2">{c.name}</td>
                        <td className="py-2">
                          {roles.find((r) => r.id === c.roleId)?.name}
                        </td>
                        <td className="py-2">
                          <Pill
                            tone={
                              c.stage === "hired"
                                ? "emerald"
                                : c.stage === "rejected"
                                ? "rose"
                                : c.stage === "offer"
                                ? "amber"
                                : "slate"
                            }
                          >
                            {c.stage}
                          </Pill>
                        </td>
                        <td className="py-2">
                          <button
                            onClick={() => nextStage(c)}
                            className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm hover:bg-emerald-50"
                          >
                            Next stage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card tone="emerald" className="p-6">
                <div className="text-sm font-semibold text-emerald-700">
                  Add Candidate
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newCandidate.name ?? ""}
                  onChange={(e) =>
                    setNewCandidate((s) => ({ ...s, name: e.target.value }))
                  }
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newCandidate.email ?? ""}
                  onChange={(e) =>
                    setNewCandidate((s) => ({ ...s, email: e.target.value }))
                  }
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Role
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newCandidate.roleId ?? roles[0].id}
                  onChange={(e) =>
                    setNewCandidate((s) => ({ ...s, roleId: e.target.value }))
                  }
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Source
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newCandidate.source ?? "Inbound"}
                  onChange={(e) =>
                    setNewCandidate((s) => ({ ...s, source: e.target.value }))
                  }
                />
                <button
                  onClick={() => {
                    const v = newCandidate as Candidate;
                    setCandidates((s) => [
                      {
                        ...v,
                        id: gid(),
                        stage: "applied",
                        createdAt: v.createdAt ?? todayISO(),
                        stageDates: { applied: todayISO() },
                        roleId: v.roleId ?? roles[0].id,
                      },
                      ...s,
                    ]);
                    setNewCandidate({
                      stage: "applied",
                      createdAt: todayISO(),
                      stageDates: { applied: todayISO() },
                    });
                  }}
                  className="mt-4 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-700 shadow-sm hover:bg-emerald-50"
                >
                  Add Candidate
                </button>
              </Card>
            </div>
          </section>

          {/* Interviews */}
          <section>
            <SectionHeading
              id="interviews"
              label="Hiring"
              title="Interviews & Rubrics"
              subtitle="Record panel, scores, and notes."
              tone="indigo"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Date</th>
                      <th className="py-2">Candidate</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Panelist</th>
                      <th className="py-2">Avg</th>
                      <th className="py-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interviews.map((iv) => {
                      const cand = candidates.find(
                        (c) => c.id === iv.candidateId
                      );
                      const avgScore = avg(Object.values(iv.scores));
                      return (
                        <tr key={iv.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">{iv.date}</td>
                          <td className="py-2">{cand?.name}</td>
                          <td className="py-2">{iv.type}</td>
                          <td className="py-2">{iv.panelist}</td>
                          <td className="py-2">{avgScore.toFixed(1)}</td>
                          <td className="py-2 max-w-[260px] truncate">
                            {iv.notes ?? ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <Card className="p-6">
                <div className="text-sm font-semibold text-indigo-700">
                  Add Interview
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Candidate
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newInterview.candidateId ?? candidates[0]?.id}
                  onChange={(e) =>
                    setNewInterview((s) => ({
                      ...s,
                      candidateId: e.target.value,
                    }))
                  }
                >
                  {candidates.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Type
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newInterview.type}
                  onChange={(e) =>
                    setNewInterview((s) => ({
                      ...s,
                      type: e.target.value as InterviewType,
                    }))
                  }
                >
                  <option value="screen">screen</option>
                  <option value="skills">skills</option>
                  <option value="values">values</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Panelist
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newInterview.panelist ?? ""}
                  onChange={(e) =>
                    setNewInterview((s) => ({ ...s, panelist: e.target.value }))
                  }
                />
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  {(
                    [
                      "technical",
                      "decision",
                      "velocity",
                      "communication",
                      "collaboration",
                    ] as const
                  ).map((k) => (
                    <div
                      key={k}
                      className="rounded-lg border border-slate-200 bg-white p-2"
                    >
                      <div className="font-semibold text-slate-700">{k}</div>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={(newInterview.scores as any)?.[k] ?? 3}
                        onChange={(e) =>
                          setNewInterview((s) => ({
                            ...s,
                            scores: {
                              ...(s.scores as any),
                              [k]: Number(e.target.value),
                            },
                          }))
                        }
                        className="mt-1 w-full rounded-md border border-slate-200 px-2 py-1"
                      />
                    </div>
                  ))}
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Notes
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newInterview.notes ?? ""}
                  onChange={(e) =>
                    setNewInterview((s) => ({ ...s, notes: e.target.value }))
                  }
                />
                <button
                  onClick={() => {
                    const v = newInterview as Interview;
                    setInterviews((s) => [
                      { ...v, id: gid(), date: v.date ?? todayISO() },
                      ...s,
                    ]);
                  }}
                  className="mt-4 w-full rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
                >
                  Add Interview
                </button>
              </Card>
            </div>
          </section>

          {/* Offers */}
          <section>
            <SectionHeading
              id="offers"
              label="Hiring"
              title="Offers"
              subtitle="Track sent, accepted, declined."
              tone="amber"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="amber" className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Sent</th>
                      <th className="py-2">Candidate</th>
                      <th className="py-2">Band</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Closed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offers.map((o) => {
                      const cand = candidates.find(
                        (c) => c.id === o.candidateId
                      );
                      return (
                        <tr key={o.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">{o.dateSent}</td>
                          <td className="py-2">{cand?.name}</td>
                          <td className="py-2">{o.band}</td>
                          <td className="py-2">
                            <Pill
                              tone={
                                o.status === "accepted"
                                  ? "emerald"
                                  : o.status === "declined"
                                  ? "rose"
                                  : "amber"
                              }
                            >
                              {o.status}
                            </Pill>
                          </td>
                          <td className="py-2">{o.dateClosed ?? "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <Card tone="amber" className="p-6">
                <div className="text-sm font-semibold text-amber-800">
                  Add Offer
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Candidate
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newOffer.candidateId ?? candidates[0]?.id}
                  onChange={(e) =>
                    setNewOffer((s) => ({ ...s, candidateId: e.target.value }))
                  }
                >
                  {candidates.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Band
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newOffer.band ?? "L2"}
                  onChange={(e) =>
                    setNewOffer((s) => ({ ...s, band: e.target.value }))
                  }
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Status
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newOffer.status}
                  onChange={(e) =>
                    setNewOffer((s) => ({
                      ...s,
                      status: e.target.value as OfferStatus,
                    }))
                  }
                >
                  <option value="sent">sent</option>
                  <option value="accepted">accepted</option>
                  <option value="declined">declined</option>
                  <option value="withdrawn">withdrawn</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Date Sent
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newOffer.dateSent ?? todayISO()}
                  onChange={(e) =>
                    setNewOffer((s) => ({ ...s, dateSent: e.target.value }))
                  }
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Date Closed
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={newOffer.dateClosed ?? ""}
                  onChange={(e) =>
                    setNewOffer((s) => ({ ...s, dateClosed: e.target.value }))
                  }
                />
                <button
                  onClick={() => {
                    const v = newOffer as Offer;
                    setOffers((s) => [{ ...v, id: gid() }, ...s]);
                    if (v.status === "accepted") {
                      setCandidates((cs) =>
                        cs.map((c) =>
                          c.id === v.candidateId
                            ? {
                                ...c,
                                stage: "hired",
                                stageDates: {
                                  ...c.stageDates,
                                  hired: v.dateClosed || todayISO(),
                                },
                              }
                            : c
                        )
                      );
                    }
                  }}
                  className="mt-4 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-800 shadow-sm hover:bg-amber-50"
                >
                  Add Offer
                </button>
              </Card>
            </div>
          </section>

          {/* Scorecards */}
          <section>
            <SectionHeading
              id="scorecards"
              label="Performance"
              title="Scorecards (30/60/90)"
              subtitle="Track outcomes and rubric per person."
              tone="slate"
            />
            <Card className="mt-5 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-slate-700">
                    Select Person
                  </div>
                  <select
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                    value={selectedPerson?.id}
                    onChange={(e) => setSelectedPersonId(e.target.value)}
                  >
                    {people.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <div className="mt-3 text-xs text-slate-600">
                    Role:{" "}
                    {roles.find((r) => r.id === selectedPerson?.roleId)?.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    Pod:{" "}
                    {
                      podById[
                        roles.find((r) => r.id === selectedPerson?.roleId)
                          ?.podId || "p1"
                      ].name
                    }
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs text-slate-500">
                        <th className="py-2">Period</th>
                        <th className="py-2">Outcomes</th>
                        <th className="py-2">Rubric avg</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scorecards
                        .filter((s) => s.personId === selectedPerson?.id)
                        .map((s) => {
                          const avgScore = avg(Object.values(s.rubric));
                          return (
                            <tr
                              key={s.id}
                              className="border-b border-slate-100"
                            >
                              <td className="py-2">{s.period}</td>
                              <td className="py-2 max-w-[320px] truncate">
                                {s.outcomes.join(", ")}
                              </td>
                              <td className="py-2">{avgScore.toFixed(1)}</td>
                              <td className="py-2">
                                <Pill
                                  tone={
                                    s.status === "reviewed"
                                      ? "emerald"
                                      : "slate"
                                  }
                                >
                                  {s.status}
                                </Pill>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </section>

          {/* Onboarding */}
          <section>
            <SectionHeading
              id="onboarding"
              label="Ramp"
              title="7‑Day Onboarding"
              subtitle="Generate the SOP tasks and track status."
              tone="indigo"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6">
                <div className="text-sm font-semibold text-indigo-700">
                  Generate Tasks
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Person
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                  value={selectedPerson?.id}
                  onChange={(e) => setSelectedPersonId(e.target.value)}
                >
                  {people.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => generateOnboarding(selectedPerson?.id)}
                  className="mt-4 w-full rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
                >
                  Generate 7‑day SOP
                </button>
              </Card>
              <Card className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Due</th>
                      <th className="py-2">Task</th>
                      <th className="py-2">Owner</th>
                      <th className="py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onboarding
                      .filter((t) => t.personId === selectedPerson?.id)
                      .map((t) => (
                        <tr key={t.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">{t.due}</td>
                          <td className="py-2">{t.task}</td>
                          <td className="py-2">{t.owner}</td>
                          <td className="py-2">
                            <select
                              value={t.status}
                              onChange={(e) =>
                                setOnboarding((s) =>
                                  s.map((x) =>
                                    x.id === t.id
                                      ? {
                                          ...x,
                                          status: e.target
                                            .value as OnboardingStatus,
                                          completedAt:
                                            e.target.value === "done"
                                              ? todayISO()
                                              : x.completedAt,
                                        }
                                      : x
                                  )
                                )
                              }
                              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs"
                            >
                              <option value="todo">todo</option>
                              <option value="in_progress">in_progress</option>
                              <option value="done">done</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </section>

          {/* Utilization */}
          <section>
            <SectionHeading
              id="utilization"
              label="Capacity"
              title="Weekly Utilization"
              subtitle="Booked vs capacity by pod and person."
              tone="amber"
            />
            <Card tone="amber" className="mt-5 p-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs text-slate-500">
                    <th className="py-2">Pod</th>
                    <th className="py-2">Person</th>
                    <th className="py-2">Capacity</th>
                    <th className="py-2">Booked</th>
                    <th className="py-2">Utilization</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((p) => {
                    const r = roles.find((rr) => rr.id === p.roleId)!;
                    const pod = pods.find((pp) => pp.id === r.podId)!;
                    const row = util.find((u) => u.personId === p.id);
                    const utilPct = row
                      ? row.booked / Math.max(1, row.capacity)
                      : 0;
                    const tone: Tone =
                      utilPct > 0.9
                        ? "rose"
                        : utilPct >= 0.7
                        ? "emerald"
                        : "slate";
                    return (
                      <tr key={p.id} className="border-b border-slate-100">
                        <td className="py-2">{pod.name}</td>
                        <td className="py-2">{p.name}</td>
                        <td className="py-2">{row?.capacity ?? 40}h</td>
                        <td className="py-2">{row?.booked ?? 0}h</td>
                        <td className="py-2">
                          <Pill tone={tone}>{pct(utilPct)}</Pill>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </section>

          {/* Handover */}
          <section>
            <SectionHeading
              id="handover"
              label="Continuity"
              title="Handover Generator"
              subtitle="No knowledge loss when roles change."
              tone="rose"
            />
            <Card tone="rose" className="mt-5 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-rose-700">
                    Person
                  </div>
                  <select
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                    value={selectedPerson?.id}
                    onChange={(e) => setSelectedPersonId(e.target.value)}
                  >
                    {people.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <label className="mt-3 block text-xs font-semibold text-slate-600">
                    Successor
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                    value={handoverSuccessor}
                    onChange={(e) => setHandoverSuccessor(e.target.value)}
                  />
                  <label className="mt-3 block text-xs font-semibold text-slate-600">
                    Top links/files (one per line)
                  </label>
                  <textarea
                    className="mt-1 h-28 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    value={handoverLinks}
                    onChange={(e) => setHandoverLinks(e.target.value)}
                  />
                  <button
                    onClick={() => copy(handoverDoc)}
                    className="mt-4 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm font-medium text-rose-700 shadow-sm hover:bg-rose-50"
                  >
                    Copy Handover
                  </button>
                </div>
                <div className="lg:col-span-2">
                  <div className="text-sm font-semibold text-rose-700">
                    Generated Doc
                  </div>
                  <textarea
                    className="mt-2 h-56 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    readOnly
                    value={handoverDoc}
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Templates */}
          <section>
            <SectionHeading
              id="templates"
              label="Toolbox"
              title="Hiring Templates"
              subtitle="Copy and paste into your emails and docs."
              tone="slate"
            />
            <Card className="mt-5 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-700">
                      Offer Email
                    </div>
                    <button
                      onClick={() => copy(TEMPLATE_OFFER_EMAIL)}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-48 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    readOnly
                    value={TEMPLATE_OFFER_EMAIL}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-700">
                      Reference Questions
                    </div>
                    <button
                      onClick={() => copy(TEMPLATE_REFERENCE_QUESTIONS)}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-48 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    readOnly
                    value={TEMPLATE_REFERENCE_QUESTIONS}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-700">
                      PIP Skeleton
                    </div>
                    <button
                      onClick={() => copy(TEMPLATE_PIP)}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-48 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    readOnly
                    value={TEMPLATE_PIP}
                  />
                </div>
              </div>
            </Card>
          </section>
        </div>
      </Container>
    </div>
  );
}
