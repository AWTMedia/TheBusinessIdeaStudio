import React, { useState } from "react";

/**
 * Meta Ads Information One‑Pager (React + Tailwind, single file)
 *
 * Purpose: A clean, print‑ready info page that distills the transcript into a
 * concrete, easy‑to‑ship playbook. Not an OS. No data entry. Minimal interactivity
 * (copy buttons only) for hooks/CTAs.
 */

// ——— UI Primitives ———
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const Pill: React.FC<{
  children: React.ReactNode;
  tone?: "emerald" | "indigo" | "amber" | "rose" | "slate";
}> = ({ children, tone = "slate" }) => {
  const map = {
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-800",
    rose: "bg-rose-50 text-rose-700",
    slate: "bg-slate-100 text-slate-700",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${map[tone]}`}
    >
      {children}
    </span>
  );
};

const Section: React.FC<{
  id: string;
  label: string;
  title: string;
  tone?: "emerald" | "indigo" | "amber" | "rose" | "slate";
  subtitle?: string;
  children: React.ReactNode;
}> = ({ id, label, title, subtitle, children, tone = "slate" }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mb-3">
      <Pill tone={tone}>{label}</Pill>
    </div>
    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
      {title}
    </h2>
    {subtitle && <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>}
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
      {children}
    </div>
  </section>
);

const CodeNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-4 text-[13px] leading-relaxed text-slate-800">
    {children}
  </pre>
);

const CopyBlock: React.FC<{ label: string; text: string }> = ({
  label,
  text,
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-700">{label}</div>
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <textarea
        readOnly
        value={text}
        className="mt-2 h-28 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-3 text-[13px] leading-relaxed text-slate-800"
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="font-semibold text-slate-800">
              Meta Ads — Information One‑Pager
            </div>
            <nav className="-mx-2 hidden gap-2 md:flex">
              {[
                ["numbers", "Numbers"],
                ["arch", "Architecture"],
                ["aud", "Audiences"],
                ["crt", "Creatives"],
                ["bud", "Budget & Scale"],
                ["obj", "Objectives & Placements"],
                ["launch", "Launch"],
                ["metrics", "Weekly Metrics"],
                ["setter", "Setter Ops"],
                ["fix", "Troubleshooting"],
                ["copy", "Hooks & CTAs"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-emerald-100/60 to-transparent" />
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Meta Ads — Profile & Story System
              </h1>
              <p className="mt-3 text-slate-600">
                A concise field guide to launch, test, and scale profile‑visit
                and story ads with retargeting, grounded in the transcript’s
                proven numbers.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="emerald">TOF: Profile/Story</Pill>
                <Pill tone="indigo">MOF: Engagement</Pill>
                <Pill tone="amber">BOF: Retargeting</Pill>
                <Pill tone="rose">Setter Integration</Pill>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <Container>
        <div className="space-y-12 pb-20">
          <Section
            id="numbers"
            label="Benchmarks"
            title="Numbers to Hit"
            tone="emerald"
            subtitle="Use these as weekly decision thresholds (scale/iterate/kill)."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CodeNote>{`CPV (Cost per Profile Visit) ≤ ~$0.20
Qualified follower ratio ≥ 30% (if < 20% → fix creative/targeting)
CPQF (Cost per Qualified Follower) ≤ $13–$14
New convos started (setter) ≥ 80% of qualified followers
Cost per qualified booked call: $80–$100
Show‑up rate ≥ 75%
ROAS 8–15× realistic (10× solid)
Scaling note: Profile ads flatten > $200–$300/day → add Story + Retargeting (horizontal scale).`}</CodeNote>
              <CodeNote>{`Creative testing volume
• Campaign → 3–5 ad sets total
• 10–15 creatives distributed across ad sets
• When 1 creative wins → isolate it in its own ad set and feed budget.`}</CodeNote>
              <CodeNote>{`Quality gate for ad creative
• If qualified rate < 20% → wrong crowd; sharpen hook, interest, or broaden away from niche titles.
• Retargeting CPV will be higher but quality stronger (expected).`}</CodeNote>
            </div>
          </Section>

          <Section
            id="arch"
            label="Structure"
            title="Campaign Architecture (3 Lanes)"
            tone="indigo"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  A) Profile Visit / Reel Engagement (TOF)
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>
                    Objective: <strong>Engagement</strong> (reels/posts).
                  </li>
                  <li>
                    Ad sets: <strong>Broad Cold</strong>,{" "}
                    <strong>Entrepreneurship Interest</strong>.
                  </li>
                  <li>
                    Exclude: <code>IG_Engagers_180</code>.
                  </li>
                  <li>Geo: UK + US; Age 20–50; All genders.</li>
                  <li>
                    Placements: IG <strong>Stories</strong> +{" "}
                    <strong>Reels</strong> only.
                  </li>
                  <li>Budget: $30–$100/ad set/day (can start lower).</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  B) Story Ads (TOF + MOF)
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>
                    Objective: <strong>Engagement</strong>.
                  </li>
                  <li>
                    Ad sets: Broad (exclude), Entrepreneurship (exclude),{" "}
                    <strong>IG Retargeting</strong> (include only).
                  </li>
                  <li>Placements: IG Stories + Reels only.</li>
                  <li>Budget: $30–$150/ad set/day based on comfort.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  C) Retargeting (BOF)
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>
                    Objective: <strong>Engagement</strong> (or{" "}
                    <strong>Messages</strong> for DM keyword flows).
                  </li>
                  <li>
                    Audience: <code>IG_Engagers_180</code> only.
                  </li>
                  <li>Placements: IG Stories + Reels only.</li>
                  <li>Budget: $20–$100/day.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="aud"
            label="Audiences"
            title="Audience Setup"
            tone="amber"
          >
            <ol className="space-y-3 text-sm text-slate-800">
              <li>
                <strong>Build Custom Audience:</strong> Ads Manager → Audiences
                → <em>Create</em> → Custom Audience → Instagram Account.
              </li>
              <li>
                <strong>Window:</strong> 180 days.{" "}
                <span className="text-slate-500">(365 gets too stale.)</span>
              </li>
              <li>
                <strong>Event:</strong> <em>Everyone who engaged</em> (includes
                profile visits, likes, comments, saves, taps, shares).
              </li>
              <li>
                <strong>Name:</strong> <code>IG_Engagers_180</code>.
              </li>
              <li>
                <strong>Use:</strong> Exclude from <em>Broad/Interest</em>;
                Include as the only audience for <em>Retargeting</em>.
              </li>
            </ol>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
              Tip: Keep interest stacks broad (millions). Avoid job
              titles/employers/schools for TOF; use clean interests like
              Entrepreneurship, Coaching, Lead Generation, Social Media
              Marketing, Content Marketing, High Achievers.
            </div>
          </Section>

          <Section
            id="crt"
            label="Creative"
            title="Creative System"
            tone="rose"
            subtitle="Hook creates curiosity; body converts; CTA captures. Use two CTAs (≈65% and 100%)."
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 text-sm text-slate-800">
                <div className="font-semibold">Formats to include</div>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Pattern‑interrupt face‑to‑camera reels/stories (profile
                    ads).
                  </li>
                  <li>Carousel stories (credibility & DM intent).</li>
                  <li>
                    One‑pager static (bold claim → mechanism → proof → CTA).
                  </li>
                  <li>Action‑driven ("DM keyword").</li>
                  <li>Problem → Solution value teach.</li>
                  <li>Credibility (client quoting results).</li>
                </ul>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-[13px]">
                    <strong>Hook rule:</strong> Use oddly‑specific numbers
                    (e.g., <em>11k</em> not 10k) to make viewers think → they
                    stay for the body.
                  </div>
                  <div className="mt-2 text-[13px]">
                    Add a footer like <em>“Follow to learn more”</em> to story
                    creatives you re‑upload from your archive.
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <CopyBlock
                  label="Story Sequence Skeleton"
                  text={`1) Curiosity/Pain\n2) Mechanism (why it works)\n3) Data (numbers, levers)\n4) Niche solution (your model)\n5) CTA (Follow / DM keyword)\n6) Proof (client result, receipt)`}
                />
                <CopyBlock
                  label="Naming"
                  text={`C_[lane]  / AS_[aud]_[geo]  / AD_[hook|angle]_v1`}
                />
              </div>
            </div>
          </Section>

          <Section
            id="bud"
            label="Budget"
            title="Budgets & Scaling"
            tone="emerald"
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-800">
              <li>
                Start $30–$100/ad set/day (up to $150 where comfy). Cut losers,
                feed winners.
              </li>
              <li>
                Above ~$200–$300/day on one profile‑ad ad set, returns flatten.
                Scale <em>horizontally</em>: add new creatives, clone into new
                ad sets/markets, and layer Story + Retargeting.
              </li>
              <li>
                When one creative clearly wins (CPQF, cost/call, show‑ups) →
                isolate into its own ad set and raise +20–30% every 48–72h.
              </li>
            </ul>
          </Section>

          <Section
            id="obj"
            label="Setup"
            title="Objectives & Placements"
            tone="indigo"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  Objectives
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800">
                  <li>
                    Default: <strong>Engagement</strong> (profile/story).
                  </li>
                  <li>
                    Use <strong>Messages</strong> when running “DM keyword”
                    flows (with ManyChat).
                  </li>
                  <li>
                    Avoid <strong>Leads</strong> for this profile‑centric flow.
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  Placements
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800">
                  <li>
                    <strong>Manual</strong> only → Instagram{" "}
                    <strong>Stories</strong> + <strong>Reels</strong>.
                  </li>
                  <li>
                    Turn <em>off</em> Feeds, Explore, Search, Audience Network,
                    Facebook.
                  </li>
                  <li>
                    “Multi‑advertiser ads” <strong>Off</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="launch"
            label="Execution"
            title="Launch Checklist"
            tone="amber"
          >
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-800">
              <li>
                Create <code>IG_Engagers_180</code> (Everyone who engaged,
                180d).
              </li>
              <li>
                Campaign A (Profile/Engagement): Ad sets = Broad,
                Entrepreneurship (both exclude <code>IG_Engagers_180</code>).
              </li>
              <li>
                Campaign B (Story Ads): Broad (exclude), Entrepreneurship
                (exclude), IG Retargeting (include only).
              </li>
              <li>
                Placements: IG Stories + Reels only. Advantage placements off.
                Multi‑advertiser off.
              </li>
              <li>
                Upload 10–15 creatives (mix formats). Add “Follow to learn more”
                footer to Stories.
              </li>
              <li>
                Budgets: $30–$100/ad set/day (or $150 if comfy). Name cleanly.
              </li>
              <li>
                Go live. After 3–5 days: cut bottom 50% creatives on
                CPQF/quality; isolate top winner into its own ad set and raise.
              </li>
            </ol>
          </Section>

          <Section
            id="metrics"
            label="Analytics"
            title="Weekly Metrics to Track"
            tone="slate"
            subtitle="Check weekly (not daily) to avoid whipsaw decisions."
          >
            <CodeNote>{`Date | Spend | New Followers | Qualified Followers | % Qualified | CPV | CPQF | New Convos Started | % Contacted | Booked Calls (Qualified) | $/Call | Shows | Show‑up % | Closed | Cash | Revenue | ROAS | Creative | Ad Set | Notes`}</CodeNote>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              Attribution tip: In Ads Manager, open each ad’s{" "}
              <em>Instagram post with comments</em> to see which specific
              creative is earning qualified follows/DMs; cross‑check with IG
              notifications.
            </div>
          </Section>

          <Section
            id="setter"
            label="Conversion"
            title="Setter Ops (so ads actually pay)"
            tone="rose"
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-800">
              <li>
                Daily: review new followers → tag{" "}
                <strong>Qualified/Unqualified</strong>.
              </li>
              <li>
                Outreach to <strong>100%</strong> of Qualified within 24h;
                target <strong>≥ 80%</strong> new‑convo start rate.
              </li>
              <li>
                Use ManyChat for DM‑keyword automations; setter jumps in on
                intent.
              </li>
              <li>
                Book only <strong>qualified</strong> calls; protect $80–$100
                cost/qualified call and ≥75% show‑ups.
              </li>
            </ul>
          </Section>

          <Section
            id="fix"
            label="Triage"
            title="Troubleshooting (Kill / Fix / Scale)"
            tone="indigo"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-800">
              <div className="rounded-lg border border-slate-200 p-3">
                <div className="font-semibold">Low Qualified % (&lt; 20%)</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    Sharpen hook (odd numbers, pain‑first). Avoid niche job
                    titles.
                  </li>
                  <li>Swap to Entrepreneurship interest or broaden stack.</li>
                  <li>Refresh proof/receipts in creatives.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <div className="font-semibold">CPQF &gt; $14</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Enforce placements (Stories + Reels only).</li>
                  <li>Test carousel & one‑pager variants; isolate winners.</li>
                  <li>Try Messages objective for DM keyword flows.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <div className="font-semibold">
                  $/Call &gt; $100 or Show‑ups &lt; 75%
                </div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Qualify harder in DMs; confirm fit before booking.</li>
                  <li>Send reminders, prep notes, timezone confirmation.</li>
                  <li>
                    Run proof‑heavy retargeting (client quotes, receipts).
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="copy"
            label="Swipe"
            title="Hooks & CTAs (Ready to Copy)"
            tone="amber"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <CopyBlock
                label="Action‑Driven (DM Keyword)"
                text={`If you manage listings and you're stuck around **11** bookings a month, DM **AIR** and I'll send the 7‑slide funnel we use to turn dead nights into cash.`}
              />
              <CopyBlock
                label="Problem → Solution"
                text={`Occupancy dipped after new fees? Here are the **3 levers** we used to recover **28%** in 14 days. Follow for the SOP — or DM **MAP** for the checklist.`}
              />
              <CopyBlock
                label="Credibility (Client Quote)"
                text={`\"We went from **3.5k → 20k/mo** in 60 days. Two changes: pricing bands + retention offers.\" — A., STR operator`}
              />
              <CopyBlock
                label="One‑Pager Structure"
                text={`Headline (specific)\n• Pain: what's failing now\n• Mechanism: why your model works\n• Proof: screenshot/clip/quote\n• CTA: Follow for breakdown / DM 'AIR'`}
              />
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              Remind yourself: Authentic &gt; polished. Two CTAs per video/story
              (≈65% and end) to capture both skimmers and completers.
            </div>
          </Section>
        </div>
      </Container>
    </div>
  );
}
