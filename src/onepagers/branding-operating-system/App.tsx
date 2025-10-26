import React from "react";

/*
  Branding Operating System (BOS)
  React + Tailwind — Matrix UI style (soft cards, semantic tones, compact whitespace)
  - MacBook Air friendly (1280–1440px)
  - Print / Save as PDF ready
  - Self‑contained one‑pager rendering Step 1 content
*/

export default function BrandingOS() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <Doctrine />
        <BehaviorLadder />
        <PairingStrategy />
        <MoneyLink />
        <CoreMetrics />
        <ExperimentDesign />
        <RecoveryProtocol />
        <BuildSequence />
        <CreativeBrief />
        <PlatformPlays />
        <PricingPowerChecklist />
        <RolesCadence />
        <MeasurementPlan />
        <ExamplePairingMap />
        <Artifacts />
        <Footer />
      </div>
    </main>
  );
}

/* --------------------------------- Header -------------------------------- */
function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Branding Operating System (BOS)
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Learning = same condition → new behavior. Branding exists to{" "}
        <strong>change customer behavior</strong> by deliberately pairing your
        business with outcomes your ideal customers already like.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Brand</Tag>
        <Tag color="amber">Pricing Power</Tag>
        <Tag color="rose">Recovery</Tag>
      </div>
    </header>
  );
}

/* ----------------------------- Doctrine & Defs --------------------------- */
function Doctrine() {
  const defs = [
    "Advertising = letting people know about your stuff.",
    "Branding = the result (association) that occurs after an action.",
    "Pairing = placing your brand next to outcomes your ICP already likes so that, next time they want that outcome, they choose you.",
    "Good Branding = deliberate pairing → net‑positive behavior change (toward you) for most ideal customers (target ≥ 75% positive among ICP).",
    "State Machine: No Brand → Weak Brand → Strong Brand → Pricing Power (premium, loyalty, CTR/conv lift).",
  ];
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Doctrine & Definitions</h2>
        <Bullets items={defs} />
      </Card>
    </section>
  );
}

/* --------------------------- Behavior-Change Ladder ---------------------- */
function BehaviorLadder() {
  const steps = [
    { label: "Notice", hint: "Scroll stop, view, search" },
    { label: "Prefer", hint: "Choose us; click/book/add" },
    { label: "Pay More", hint: "Higher WTP; elasticity ↓" },
    { label: "Repeat & Refer", hint: "Buy again, promote" },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Behavior‑Change Ladder (what must change?)
      </h2>
      <Card>
        <div className="flex flex-wrap items-center gap-3">
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <Step label={s.label} hint={s.hint} />
              {i < steps.length - 1 ? <Arrow /> : null}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          If no behavior changes at a rung, branding didn’t happen.
        </p>
      </Card>
    </section>
  );
}

/* ------------------------------ Pairing Strategy ------------------------- */
function PairingStrategy() {
  const likes = {
    Outcomes: [
      "winning",
      "mastery",
      "ease",
      "belonging",
      "status",
      "joy",
      "health",
      "security",
      "speed",
    ],
    Values: [
      "excellence",
      "fairness",
      "transparency",
      "grit",
      "craft",
      "playfulness",
    ],
    People_Symbols: ["credible figures", "communities", "teams", "events"],
    Experiences: [
      "unboxing",
      "access",
      "live moments",
      "challenges",
      "behind‑the‑scenes",
    ],
    Contexts: ["places", "times", "rituals (morning coffee, Friday wins)"],
  };
  const avoid = [
    "spammy hype",
    "low craft",
    "delays",
    "inconsistent promises",
    "politicized distractions (if off‑brand)",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Pairing Strategy (what to pair / avoid)
      </h2>
      <Card tone="emerald">
        <p className="text-sm">
          Goal: <strong>Your thing + relevant stuff your audience likes</strong>{" "}
          → audience likes your thing <strong>more</strong>. Manage risk: every
          pairing loses some people — choose pairings with <em>net‑positive</em>{" "}
          value for ICP.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div>
            <h3 className="font-semibold">Pairing Library (choose 3–5)</h3>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {Object.entries(likes).map(([k, arr]) => (
                <Card key={k}>
                  <h4 className="text-sm font-medium">
                    {k.replace("_", " & ")}
                  </h4>
                  <Tags items={arr} tone="emerald" />
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Anti‑Pairings (remove / avoid)</h3>
            <Card tone="rose" className="mt-2">
              <Bullets items={avoid} />
            </Card>
            <Quote
              text="One bad pairing can hurt a brand — recover by overwhelming with what your ICP likes until the negative shrinks into irrelevance."
              source="BOS"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}

/* -------------------------------- Money Link ----------------------------- */
function MoneyLink() {
  const bullets = [
    "Pricing Power: raise price without losing share (Buffett test).",
    "Conversion Lift: CTR ↑, CVR ↑, CPA ↓ when brand cues appear.",
    "Retention & LTV: identity lock‑in — buyers ‘become’ what the brand signals.",
    "Advertising Efficiency: better paid + organic performance due to trust/recognition.",
  ];
  return (
    <section className="mb-8">
      <Card tone="amber">
        <h2 className="text-lg font-bold mb-2">
          Why Good Branding Makes Money
        </h2>
        <Bullets items={bullets} />
        <Quote
          text="The single most important decision in evaluating a business is pricing power."
          source="Warren Buffett"
        />
      </Card>
    </section>
  );
}

/* ------------------------------- Core Metrics ---------------------------- */
function CoreMetrics() {
  const influence = [
    "Brand‑lift survey deltas",
    "Branded CTR vs non‑branded",
    "Share of search",
    "Price elasticity tests",
    "Add‑to‑cart rate with vs without brand asset",
  ];
  const direction = [
    "Preference split in A/B choice tests",
    "Win‑rate vs closest competitor",
    "Discount dependency ↓",
    "‘Choose us again’ rate",
  ];
  const reach = [
    "Unique exposures to brand assets",
    "Branded search volume",
    "% of sessions with brand‑engaged users",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Core Metrics (Influence · Direction · Reach)
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="indigo">
          <h3 className="font-semibold">Influence</h3>
          <Bullets items={influence} />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">Direction</h3>
          <Bullets items={direction} />
        </Card>
        <Card tone="slate">
          <h3 className="font-semibold">Reach</h3>
          <Bullets items={reach} />
        </Card>
      </div>
      <Card className="mt-3">
        <h3 className="font-semibold">Composite</h3>
        <p className="text-sm mt-1">
          Brand Momentum Index (BMI) = normalized{" "}
          <strong>Influence × Direction × Reach</strong> (0–100). Track weekly.
        </p>
      </Card>
    </section>
  );
}

/* ---------------------------- Experiment Design -------------------------- */
function ExperimentDesign() {
  const design = [
    "Seed one clear pairing (e.g., ‘winning’ via athlete collab)",
    "Saturate channels (ads, profile, stories, packaging, email, PDP badge)",
    "Measure the specific ladder rung (notice / prefer / pay more / repeat)",
    "Decide: keep, iterate, or kill based on net‑positive calculus",
  ];
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-2">
          Brand Experiment Design (7–14 day sprint)
        </h2>
        <p className="text-sm">
          <strong>Hypothesis:</strong> Pairing X with our brand will increase
          behavior Y among ICP Z because reason R.
        </p>
        <Bullets items={design} />
        <Card className="mt-3">
          <h4 className="text-sm font-medium">Quick EV Check</h4>
          <p className="text-sm text-slate-700 mt-1">
            Net Pairing EV = (p⁺ × Δbehavior⁺) − (p⁻ × Δbehavior⁻) among ICP →
            keep if EV &gt; 0 and compounding.
          </p>
        </Card>
      </Card>
    </section>
  );
}

/* ---------------------------- Recovery Protocol -------------------------- */
function RecoveryProtocol() {
  const steps = [
    "Isolate the negative pairing (asset/channel/message)",
    "Overwhelm with high‑frequency positive pairings",
    "Ship product micro‑wins fast (speed > talk)",
    "Clarify publicly (brief, factual, on‑brand)",
    "Track Direction weekly until delta closes",
  ];
  return (
    <section className="mb-8">
      <Card tone="rose">
        <h2 className="text-lg font-bold mb-2">
          Brand Recovery Protocol (bad pairing)
        </h2>
        <Bullets items={steps} />
      </Card>
    </section>
  );
}

/* ------------------------------ Build Sequence --------------------------- */
function BuildSequence() {
  const A = [
    "Pick 1–2 outcomes your ICP already loves (e.g., mastery, speed)",
    "Create iconic cue(s): phrase, color, shape, sound, ritual",
    "Deploy consistent pairings in profile, bio, hero line/image, guarantee",
  ];
  const B = [
    "Proof saturation: UGC, testimonials, before/after, expert social proof",
    "Story Ads / Profile Funnel: emotional triggers → DM; set metrics",
  ];
  const C = [
    "Introduce money model to monetize association: premium tier, continuity, win‑your‑money‑back, anchor/decoy",
    "Test WTP and elasticity with 5–15% price step‑ups",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Build Sequence (from zero → premium)
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">Phase A — From Nothing to Something</h3>
          <Bullets items={A} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">Phase B — Proof Saturation</h3>
          <Bullets items={B} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Phase C — Premium Ascent</h3>
          <Bullets items={C} />
        </Card>
      </div>
    </section>
  );
}

/* ----------------------------- Creative Brief ---------------------------- */
function CreativeBrief() {
  const items = [
    "ICP: who + what they like / hate",
    "Behavior to change (ladder rung): e.g., Prefer → book demo",
    "Desired Association (pairing): e.g., winning, excellence",
    "Outcome Cue: line/icon/visual that signals the outcome",
    "Proof Signals: testimonial, numbers, recognizable context",
    "CTA & Timing: clarity + placement (66% & 99% marks for video)",
    "Channel Fit: pacing & cadence rules per platform",
    "Guardrails: banned words/images (anti‑pairings)",
  ];
  return (
    <section className="mb-8">
      <Card>
        <h2 className="text-lg font-bold mb-2">
          Creative Brief Template (per asset)
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ----------------------------- Platform Plays ---------------------------- */
function PlatformPlays() {
  const items = [
    "YouTube: confirm thumbnail promise in first 5s; long‑form proof & narrative",
    "Reels/TT/Shorts: ultra‑fast curiosity + recognizable pairing cue; proof overlay",
    "LinkedIn: B2B outcomes (career wins, case studies); slower cadence, stronger copy",
    "Stories & DMs: behavior bridge → quick actions (poll/DM keyword); pre‑frame for premium",
    "PDP/Checkout: brand badges (association cue), guarantees, micro‑wins, UGC blocks",
  ];
  return (
    <section className="mb-8">
      <Card>
        <h2 className="text-lg font-bold mb-2">
          Platform Plays (fast mapping)
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ------------------------ Pricing Power Checklist ------------------------ */
function PricingPowerChecklist() {
  const items = [
    "Clear, repeated pairing with outcomes ICP values",
    "Proof density (3+ forms): UGC, numbers, authority signals",
    "Distinctive brand assets (1–2 iconic cues)",
    "Product ‘good enough’ or better (avoid promise conflict)",
    "Positive Direction trend for 4+ weeks",
    "Elasticity test: small price lift with stable or better conversion",
  ];
  return (
    <section className="mb-8">
      <Card tone="amber">
        <h2 className="text-lg font-bold mb-2">
          Pricing Power Checklist (premium readiness)
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* ------------------------------ Roles & Cadence -------------------------- */
function RolesCadence() {
  const roles = [
    "Founder/Face: selects pairings, approves iconic cues, hosts flagship proof content",
    "Creative Director: turns pairings into assets; owns brand system & library",
    "Ops/CRM: ensures product/ops moments reinforce pairing (onboarding, packaging, reminders)",
    "Setter/Closer: uses pairing language in DM/script (pre‑frame → value → premium)",
    "Analytics: BMI dashboard; brand‑lift & WTP tests",
  ];
  const rhythm = [
    "Weekly: 1 pairing experiment live, BMI update, asset QA",
    "Monthly: price/offer test, anti‑pairing audit, recovery drill",
    "Quarterly: distinctive asset refresh, category POV piece",
  ];
  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="slate">
          <h2 className="text-lg font-bold mb-2">Roles</h2>
          <Bullets items={roles} />
        </Card>
        <Card tone="indigo">
          <h2 className="text-lg font-bold mb-2">Operating Rhythm</h2>
          <Bullets items={rhythm} />
        </Card>
      </div>
    </section>
  );
}

/* ----------------------------- Measurement Plan -------------------------- */
function MeasurementPlan() {
  const blocks = [
    {
      title: "Notice",
      list: [
        "Thumb‑stop rate",
        "Branded search volume",
        "First 5s video retention",
      ],
    },
    {
      title: "Prefer",
      list: [
        "CTR vs competitor",
        "Split‑choice preference %",
        "Demo/book rate",
      ],
    },
    {
      title: "Pay More",
      list: ["Avg selling price", "Discount rate ↓", "Gross margin ↑"],
    },
    {
      title: "Repeat/Refer",
      list: ["90‑day repeat rate", "Referral %", "NPS / OSAT"],
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Measurement Plan (practical KPIs)
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {blocks.map((b) => (
          <Card
            key={b.title}
            tone={
              b.title === "Pay More"
                ? "amber"
                : b.title === "Notice"
                ? "indigo"
                : b.title === "Repeat/Refer"
                ? "emerald"
                : "slate"
            }
          >
            <h3 className="font-semibold">{b.title}</h3>
            <Bullets items={b.list} />
          </Card>
        ))}
      </div>
      <Card className="mt-3">
        <p className="text-sm">
          Set baselines, define targets (e.g., +20% CTR, +10% WTP), review
          weekly.
        </p>
      </Card>
    </section>
  );
}

/* ---------------------------- Example Pairing Map ------------------------ */
function ExamplePairingMap() {
  const items = [
    "ICP: competitive entrepreneurs who value winning & excellence",
    "Desired outcomes: winning, mastery, speed",
    "Iconic cues: black‑on‑neon accent, ‘Win the week’ line, checkered stripe motif",
    "Proof: client leaderboards, before/after dashboards, athlete collab",
    "Anti‑pairings: spammy income claims, sloppy design, slow support",
    "Behavior target: Prefer → book call (outbound + profile funnel)",
    "Offer link: premium ‘Pro’ tier + win‑your‑money‑back mechanic",
  ];
  return (
    <section className="mb-8">
      <Card tone="emerald">
        <h2 className="text-lg font-bold mb-2">
          Example Pairing Map (filled sample)
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* -------------------------------- Artifacts ------------------------------ */
function Artifacts() {
  const items = [
    "Pairing Library (likes/hates)",
    "Iconic Asset Kit (logo, color, phrase, motion sting)",
    "Proof Vault (UGC, case studies, dashboards)",
    "Recovery Protocol (SOP)",
    "BMI Dashboard (Influence/Direction/Reach)",
    "7–14 Day Experiment Template (hypothesis → assets → metrics → decision)",
  ];
  return (
    <section className="mb-8">
      <Card>
        <h2 className="text-lg font-bold mb-2">
          Brand Playbook Artifacts (deliverables)
        </h2>
        <Bullets items={items} />
      </Card>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="mt-10 flex flex-wrap items-center gap-3">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
      >
        Print / Save as PDF
      </button>
      <span className="text-xs text-slate-500">
        Optimised for 1280–1440px (MacBook Air). A4 landscape recommended.
      </span>
    </footer>
  );
}

/* --------------------------- UI micro‑primitives ------------------------- */
function Arrow() {
  return <span className="mx-2 select-none text-slate-400">→</span>;
}
function Step({ label, hint }: { label: string; hint?: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">
      <span className="font-medium text-slate-800">{label}</span>
      {hint ? <span className="text-[11px] text-slate-500">{hint}</span> : null}
    </span>
  );
}

/* ------------------------------- UI primitives --------------------------- */
function Card({
  children,
  className = "",
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}) {
  const ring: Record<Tone, string> = {
    slate: "ring-1 ring-slate-100",
    emerald: "ring-1 ring-emerald-100",
    amber: "ring-1 ring-amber-100",
    rose: "ring-1 ring-rose-100",
    indigo: "ring-1 ring-indigo-100",
    violet: "ring-1 ring-violet-100",
  } as const;
  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-sm ${
        tone ? ring[tone] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

function Tag({ children, color = "slate" as Tone }) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}
    >
      {children}
    </span>
  );
}

function Quote({
  text,
  source,
  title,
}: {
  text: string;
  source: string;
  title?: string;
}) {
  return (
    <figure className="mt-4 border border-slate-200 rounded-xl p-3 bg-slate-50">
      <blockquote className="text-sm italic text-slate-700">
        “{text}”
      </blockquote>
      <figcaption className="mt-1 text-xs text-slate-500">
        — <span className="font-medium">{source}</span>
        {title ? `, ${title}` : ""}
      </figcaption>
    </figure>
  );
}

function Bullets({ items = [] as string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Tags({ items = [] as string[], tone = "slate" as Tone }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((t, i) => (
        <span
          key={i}
          className={`px-2 py-1 rounded-full text-xs border ${
            tone === "emerald"
              ? "bg-emerald-50 border-emerald-100 text-emerald-700"
              : tone === "indigo"
              ? "bg-indigo-50 border-indigo-100 text-indigo-700"
              : tone === "amber"
              ? "bg-amber-50 border-amber-100 text-amber-700"
              : "bg-slate-100 border-slate-200 text-slate-700"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
