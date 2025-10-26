import React, { useMemo, useState } from "react";

/**
 * Referral & Reviews OS — One‑Pager
 * React + TailwindCSS (TypeScript)
 *
 * Notes
 * - Self-contained UI primitives (Container, Card, Pill, etc.)
 * - KPI dashboard with live calculations from sample data
 * - CRUD-lite adders for Events, Referrals, Reviews (in-memory)
 * - Script templates with placeholder merge + copy-to-clipboard
 * - Color system by tone (emerald=referrals, indigo=reviews, rose=risks, amber=ops, slate=neutral)
 */

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
        <div className="font-semibold text-slate-800">
          Referral & Reviews OS
        </div>
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

type Client = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  advocateScore: number; // 0-100
  startDate: string; // ISO
};

type EventType = "onboarding_win" | "first_roi" | "qbr" | "support_save";

type EventRow = {
  id: string;
  clientId: string;
  type: EventType;
  date: string; // ISO
  note?: string;
  proofLink?: string;
};

type ReferralStatus = "intro_sent" | "qualified" | "won" | "lost";

type Referral = {
  id: string;
  referrerId: string; // client id
  refereeName: string;
  refereeEmail: string;
  status: ReferralStatus;
  rewardAmount?: number; // in ZAR
  createdAt: string; // ISO
};

type ReviewStatus = "requested" | "posted" | "declined";

type Review = {
  id: string;
  clientId: string;
  platform: string; // Google, Clutch, G2, Trustpilot
  status: ReviewStatus;
  link?: string;
  requestedAt: string; // ISO
  postedAt?: string; // ISO
};

// -------------------- Sample Data --------------------

const initialClients: Client[] = [
  {
    id: "c1",
    name: "Kite Labs",
    email: "ops@kitelabs.io",
    active: true,
    advocateScore: 86,
    startDate: "2025-05-12",
  },
  {
    id: "c2",
    name: "Dune Coffee Co.",
    email: "ceo@dunecoffee.com",
    active: true,
    advocateScore: 72,
    startDate: "2025-03-02",
  },
  {
    id: "c3",
    name: "Nova Supplements",
    email: "team@novasupps.com",
    active: true,
    advocateScore: 58,
    startDate: "2025-07-01",
  },
  {
    id: "c4",
    name: "Atlas Fitness App",
    email: "hello@atlasfit.app",
    active: false,
    advocateScore: 40,
    startDate: "2024-11-18",
  },
];

const initialEvents: EventRow[] = [
  {
    id: "e1",
    clientId: "c1",
    type: "onboarding_win",
    date: "2025-09-02",
    note: "Launched UGC ad set",
    proofLink: "https://example.com/proof1",
  },
  {
    id: "e2",
    clientId: "c2",
    type: "first_roi",
    date: "2025-08-22",
    note: "CPA down 28%",
    proofLink: "https://example.com/proof2",
  },
  {
    id: "e3",
    clientId: "c3",
    type: "qbr",
    date: "2025-09-10",
    note: "AOV up R42",
  },
];

const initialReferrals: Referral[] = [
  {
    id: "r1",
    referrerId: "c1",
    refereeName: "Blue Pine Studio",
    refereeEmail: "hello@bluepine.studio",
    status: "qualified",
    rewardAmount: 2500,
    createdAt: "2025-08-18",
  },
  {
    id: "r2",
    referrerId: "c2",
    refereeName: "Oak & Ocean",
    refereeEmail: "founder@oak-ocean.com",
    status: "won",
    rewardAmount: 3000,
    createdAt: "2025-08-05",
  },
];

const initialReviews: Review[] = [
  {
    id: "rv1",
    clientId: "c2",
    platform: "Google",
    status: "posted",
    link: "https://goo.gl/review/xyz",
    requestedAt: "2025-08-01",
    postedAt: "2025-08-03",
  },
  {
    id: "rv2",
    clientId: "c1",
    platform: "Clutch",
    status: "requested",
    requestedAt: "2025-09-12",
  },
];

// -------------------- Utils --------------------

function pct(n: number) {
  if (!isFinite(n)) return "0%";
  return (n * 100).toFixed(0) + "%";
}

function daysBetween(a: Date, b: Date) {
  return Math.max(1, Math.round((+b - +a) / (1000 * 60 * 60 * 24)));
}

function copy(text: string) {
  navigator.clipboard.writeText(text);
}

function formatDateISO(d = new Date()) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

// Placeholder merge: {{firstName}}, {{company}}, {{outcome}}, {{platform}}, {{review_link}}, {{your_name}}
function mergeTemplate(template: string, vars: Record<string, string>) {
  return template.replace(/{{(.*?)}}/g, (_, k) => vars[k.trim()] ?? "");
}

// -------------------- Script Templates --------------------

const SCRIPT_REVIEW_ASK = `Subject: Quick favor? Your feedback helps us a ton\n\nHey {{firstName}} — stoked we just hit {{outcome}}.\nWould you mind dropping a 30–60s review on {{platform}}? It helps other founders know what to expect.\nLink: {{review_link}}\n\nPrompts if useful:\n1) What problem were you solving?\n2) What changed after working with us?\n3) Who would you recommend this to?\n\nIf you’d rather a quick call, reply "call" and we’ll record a 2-minute testimonial together.\n\nAppreciate you,\n{{your_name}}`;

const SCRIPT_REVIEW_BUMP = `Subject: Bumping this — your note really helps\n\nHey {{firstName}},\nJust bumping this. Your review helps us keep prices sane and win good clients.\nReview link: {{review_link}}\n\nThank you!\n{{your_name}}`;

const SCRIPT_REFERRAL_ASK = `Subject: Know 1 founder who’d value {{outcome}}?\n\nWe just hit {{outcome}} with you (🎉). If you know one founder/operator who’d benefit, intro us and we’ll:\n• Give them {{referee_perk}}\n• Send you {{referrer_reward}} if they join\n\nIntro you can paste:\n"Hey {{friend_name}}, we worked with {{company}} to {{outcome}}. Worth a chat?"\n\nThanks for being in our corner,\n{{your_name}}`;

// -------------------- Main Page --------------------

export default function App() {
  // Data state
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [events, setEvents] = useState<EventRow[]>(initialEvents);
  const [referrals, setReferrals] = useState<Referral[]>(initialReferrals);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  // Selection for scripts
  const [selectedClientId, setSelectedClientId] = useState<string>(
    clients[0]?.id ?? ""
  );
  const selClient =
    clients.find((c) => c.id === selectedClientId) ?? clients[0];

  // KPI calculations
  const kpis = useMemo(() => {
    const activeClients = clients.filter((c) => c.active).length || 1;
    const referredLeads = referrals.length;
    const referredWins = referrals.filter((r) => r.status === "won").length;

    const now = new Date();
    const last30 = new Date(+now - 1000 * 60 * 60 * 24 * 30);
    const newReviews = reviews.filter(
      (r) => r.postedAt && new Date(r.postedAt!) >= last30
    ).length;
    const weeks = Math.max(1, daysBetween(last30, now) / 7);

    // Time-to-review (avg days from requested to posted for posted reviews)
    const posted = reviews.filter((r) => r.status === "posted" && r.postedAt);
    const ttrDays = posted.length
      ? Math.round(
          posted.reduce((acc, r) => {
            const a = new Date(r.requestedAt);
            const b = new Date(r.postedAt!);
            return acc + daysBetween(a, b);
          }, 0) / posted.length
        )
      : 0;

    const rewardsPaid = referrals.reduce(
      (s, r) => s + (r.status === "won" ? r.rewardAmount ?? 0 : 0),
      0
    );

    return {
      referralRate: pct(referredLeads / activeClients),
      referralCVR: pct(referredWins / Math.max(1, referredLeads)),
      reviewVelocity: `${(newReviews / weeks).toFixed(1)}/wk`,
      avgTimeToReview: ttrDays ? `${ttrDays}d` : "—",
      referredWins,
      rewardsPaid: `R${rewardsPaid.toLocaleString()}`,
      activeClients,
    };
  }, [clients, referrals, reviews]);

  // Adders
  const [newEvent, setNewEvent] = useState<Partial<EventRow>>({
    type: "onboarding_win",
    date: formatDateISO(),
  });
  const [newReferral, setNewReferral] = useState<Partial<Referral>>({
    status: "intro_sent",
    createdAt: formatDateISO(),
  });
  const [newReview, setNewReview] = useState<Partial<Review>>({
    platform: "Google",
    status: "requested",
    requestedAt: formatDateISO(),
  });

  // Helper to generate IDs
  const gid = () => Math.random().toString(36).slice(2, 10);

  const selectedVars = {
    firstName: selClient?.name.split(" ")[0] ?? "Friend",
    company: selClient?.name ?? "Our Client",
    outcome: "cut CPA by 28% and lifted AOV",
    platform: "Google",
    review_link: "https://your-review-link.example",
    your_name: "Alexander",
    referee_perk: "10% off month 1",
    referrer_reward: "R2,500 credit",
    friend_name: "Your friend",
  };

  const mergedReviewAsk = mergeTemplate(SCRIPT_REVIEW_ASK, selectedVars);
  const mergedReviewBump = mergeTemplate(SCRIPT_REVIEW_BUMP, selectedVars);
  const mergedReferralAsk = mergeTemplate(SCRIPT_REFERRAL_ASK, selectedVars);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <AnchorNav
        items={[
          { id: "hero", label: "Overview", tone: "slate" },
          { id: "kpis", label: "KPIs", tone: "emerald" },
          { id: "scripts", label: "Scripts", tone: "indigo" },
          { id: "events", label: "Events", tone: "amber" },
          { id: "referrals", label: "Referrals", tone: "emerald" },
          { id: "reviews", label: "Reviews", tone: "indigo" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-emerald-100/60 to-transparent" />
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Referral & Reviews OS
              </h1>
              <p className="mt-3 text-slate-600">
                Lower CAC with trust loops. Ask at peak moments, automate
                follow-ups, publish proof, and reward advocates responsibly.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="emerald">Referrals</Pill>
                <Pill tone="indigo">Reviews</Pill>
                <Pill tone="amber">Automation</Pill>
                <Pill tone="rose">Compliance</Pill>
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
              subtitle="Live calculations from your entries. Targets: Referral rate 10–20%, CVR ≥ 25%, 3–5 new reviews/month, time-to-review < 7 days."
              tone="emerald"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              <StatCard
                label="Active Clients"
                value={String(kpis.activeClients)}
                hint="Current active accounts"
              />
              <StatCard
                label="Referral Rate"
                value={kpis.referralRate}
                hint="Referred leads / Active clients"
                tone="emerald"
              />
              <StatCard
                label="Referral CVR"
                value={kpis.referralCVR}
                hint="Wins / Referred leads"
                tone="emerald"
              />
              <StatCard
                label="Review Velocity"
                value={kpis.reviewVelocity}
                hint="Avg per week (last 30d)"
                tone="indigo"
              />
              <StatCard
                label="Avg Time to Review"
                value={kpis.avgTimeToReview}
                hint="Requested → Posted"
                tone="indigo"
              />
              <StatCard
                label="Rewards Paid"
                value={kpis.rewardsPaid}
                hint="For won referrals"
                tone="amber"
              />
            </div>
          </section>

          {/* Scripts */}
          <section>
            <SectionHeading
              id="scripts"
              label="Templates"
              title="Scripts & Copy"
              subtitle="Merge placeholders then copy to clipboard."
              tone="indigo"
            />
            <Card tone="indigo" className="mt-5 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <div className="text-sm font-semibold text-indigo-700">
                    Placeholders
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    Select a client to auto-fill variables. You can paste then
                    tweak before sending.
                  </div>
                  <label className="mt-4 block text-xs font-semibold text-slate-600">
                    Client
                  </label>
                  <select
                    value={selClient?.id}
                    onChange={(e) => setSelectedClientId(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none"
                  >
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg border border-slate-200 bg-white p-2">
                      <div className="font-semibold text-slate-700">
                        First Name
                      </div>
                      <div>{selectedVars.firstName}</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-2">
                      <div className="font-semibold text-slate-700">
                        Company
                      </div>
                      <div>{selectedVars.company}</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-2">
                      <div className="font-semibold text-slate-700">
                        Outcome
                      </div>
                      <div>{selectedVars.outcome}</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-2">
                      <div className="font-semibold text-slate-700">
                        Review Link
                      </div>
                      <div className="truncate">{selectedVars.review_link}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-indigo-700">
                      Review Ask
                    </div>
                    <button
                      onClick={() => copy(mergedReviewAsk)}
                      className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-56 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    value={mergedReviewAsk}
                    readOnly
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-indigo-700">
                      Review Bump
                    </div>
                    <button
                      onClick={() => copy(mergedReviewBump)}
                      className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-40 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    value={mergedReviewBump}
                    readOnly
                  />
                </div>
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-emerald-700">
                      Referral Ask
                    </div>
                    <button
                      onClick={() => copy(mergedReferralAsk)}
                      className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm hover:bg-emerald-50"
                    >
                      Copy
                    </button>
                  </div>
                  <textarea
                    className="mt-2 h-72 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed shadow-sm"
                    value={mergedReferralAsk}
                    readOnly
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Events */}
          <section>
            <SectionHeading
              id="events"
              label="Moments"
              title="Peak Events (when to ask)"
              subtitle="Log onboarding wins, first ROI, QBRs, and support saves."
              tone="amber"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Date</th>
                      <th className="py-2">Client</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((e) => {
                      const c = clients.find((x) => x.id === e.clientId);
                      return (
                        <tr key={e.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">{e.date}</td>
                          <td className="py-2">{c?.name}</td>
                          <td className="py-2">
                            <Pill tone="amber">{e.type.replace("_", " ")}</Pill>
                          </td>
                          <td className="py-2 text-slate-700">{e.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <Card className="p-6">
                <div className="text-sm font-semibold text-amber-800">
                  Add Event
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Client
                </label>
                <select
                  value={newEvent.clientId ?? clients[0].id}
                  onChange={(e) =>
                    setNewEvent((s) => ({ ...s, clientId: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Type
                </label>
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent((s) => ({
                      ...s,
                      type: e.target.value as EventType,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  <option value="onboarding_win">onboarding_win</option>
                  <option value="first_roi">first_roi</option>
                  <option value="qbr">qbr</option>
                  <option value="support_save">support_save</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Date
                </label>
                <input
                  type="date"
                  value={newEvent.date ?? formatDateISO()}
                  onChange={(e) =>
                    setNewEvent((s) => ({ ...s, date: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Note
                </label>
                <input
                  type="text"
                  value={newEvent.note ?? ""}
                  onChange={(e) =>
                    setNewEvent((s) => ({ ...s, note: e.target.value }))
                  }
                  placeholder="e.g., CPA down 25%"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <button
                  onClick={() => {
                    const v = newEvent as EventRow;
                    setEvents((s) => [
                      {
                        ...v,
                        id: gid(),
                        clientId: v.clientId ?? clients[0].id,
                        date: v.date ?? formatDateISO(),
                      },
                      ...s,
                    ]);
                  }}
                  className="mt-4 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-800 shadow-sm hover:bg-amber-50"
                >
                  Add Event
                </button>
              </Card>
            </div>
          </section>

          {/* Referrals */}
          <section>
            <SectionHeading
              id="referrals"
              label="Growth"
              title="Referrals"
              subtitle="Track intros, wins, and rewards."
              tone="emerald"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="emerald" className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Date</th>
                      <th className="py-2">Referrer</th>
                      <th className="py-2">Referee</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referrals.map((r) => {
                      const referrer = clients.find(
                        (c) => c.id === r.referrerId
                      );
                      return (
                        <tr key={r.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">{r.createdAt}</td>
                          <td className="py-2">{referrer?.name}</td>
                          <td className="py-2">{r.refereeName}</td>
                          <td className="py-2">
                            <Pill
                              tone={
                                r.status === "won"
                                  ? "emerald"
                                  : r.status === "qualified"
                                  ? "amber"
                                  : r.status === "lost"
                                  ? "rose"
                                  : "slate"
                              }
                            >
                              {r.status}
                            </Pill>
                          </td>
                          <td className="py-2">
                            {r.rewardAmount
                              ? `R${r.rewardAmount.toLocaleString()}`
                              : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <Card tone="emerald" className="p-6">
                <div className="text-sm font-semibold text-emerald-700">
                  Add Referral
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Referrer
                </label>
                <select
                  value={newReferral.referrerId ?? clients[0].id}
                  onChange={(e) =>
                    setNewReferral((s) => ({
                      ...s,
                      referrerId: e.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Referee Name
                </label>
                <input
                  type="text"
                  value={newReferral.refereeName ?? ""}
                  onChange={(e) =>
                    setNewReferral((s) => ({
                      ...s,
                      refereeName: e.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Referee Email
                </label>
                <input
                  type="email"
                  value={newReferral.refereeEmail ?? ""}
                  onChange={(e) =>
                    setNewReferral((s) => ({
                      ...s,
                      refereeEmail: e.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Status
                </label>
                <select
                  value={newReferral.status}
                  onChange={(e) =>
                    setNewReferral((s) => ({
                      ...s,
                      status: e.target.value as ReferralStatus,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  <option value="intro_sent">intro_sent</option>
                  <option value="qualified">qualified</option>
                  <option value="won">won</option>
                  <option value="lost">lost</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Reward (ZAR)
                </label>
                <input
                  type="number"
                  value={newReferral.rewardAmount ?? 0}
                  onChange={(e) =>
                    setNewReferral((s) => ({
                      ...s,
                      rewardAmount: Number(e.target.value),
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <button
                  onClick={() => {
                    const v = newReferral as Referral;
                    setReferrals((s) => [
                      {
                        ...v,
                        id: gid(),
                        createdAt: v.createdAt ?? formatDateISO(),
                      },
                      ...s,
                    ]);
                  }}
                  className="mt-4 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-700 shadow-sm hover:bg-emerald-50"
                >
                  Add Referral
                </button>
              </Card>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <SectionHeading
              id="reviews"
              label="Proof"
              title="Reviews & Testimonials"
              subtitle="Track requests and posted reviews across platforms."
              tone="indigo"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="indigo" className="p-6 lg:col-span-2">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-2">Requested</th>
                      <th className="py-2">Client</th>
                      <th className="py-2">Platform</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((r) => {
                      const c = clients.find((x) => x.id === r.clientId);
                      return (
                        <tr key={r.id} className="border-b border-slate-100">
                          <td className="py-2 text-slate-700">
                            {r.requestedAt}
                          </td>
                          <td className="py-2">{c?.name}</td>
                          <td className="py-2">{r.platform}</td>
                          <td className="py-2">
                            <Pill
                              tone={
                                r.status === "posted"
                                  ? "emerald"
                                  : r.status === "declined"
                                  ? "rose"
                                  : "indigo"
                              }
                            >
                              {r.status}
                            </Pill>
                          </td>
                          <td className="py-2 max-w-[220px] truncate text-slate-700">
                            {r.link ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <Card tone="indigo" className="p-6">
                <div className="text-sm font-semibold text-indigo-700">
                  Add Review
                </div>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Client
                </label>
                <select
                  value={newReview.clientId ?? clients[0].id}
                  onChange={(e) =>
                    setNewReview((s) => ({ ...s, clientId: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Platform
                </label>
                <select
                  value={newReview.platform}
                  onChange={(e) =>
                    setNewReview((s) => ({ ...s, platform: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  <option>Google</option>
                  <option>Clutch</option>
                  <option>G2</option>
                  <option>Trustpilot</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Status
                </label>
                <select
                  value={newReview.status}
                  onChange={(e) =>
                    setNewReview((s) => ({
                      ...s,
                      status: e.target.value as ReviewStatus,
                    }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                >
                  <option value="requested">requested</option>
                  <option value="posted">posted</option>
                  <option value="declined">declined</option>
                </select>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Link (if posted)
                </label>
                <input
                  type="url"
                  value={newReview.link ?? ""}
                  onChange={(e) =>
                    setNewReview((s) => ({ ...s, link: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Requested At
                </label>
                <input
                  type="date"
                  value={newReview.requestedAt ?? formatDateISO()}
                  onChange={(e) =>
                    setNewReview((s) => ({ ...s, requestedAt: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  Posted At
                </label>
                <input
                  type="date"
                  value={newReview.postedAt ?? ""}
                  onChange={(e) =>
                    setNewReview((s) => ({ ...s, postedAt: e.target.value }))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                />
                <button
                  onClick={() => {
                    const v = newReview as Review;
                    setReviews((s) => [
                      {
                        ...v,
                        id: gid(),
                        requestedAt: v.requestedAt ?? formatDateISO(),
                      },
                      ...s,
                    ]);
                  }}
                  className="mt-4 w-full rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
                >
                  Add Review
                </button>
              </Card>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
