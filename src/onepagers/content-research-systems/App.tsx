import React, { useEffect, useState } from "react";

/**
 * Content Research Systems — One‑Pager
 * React + TailwindCSS (TypeScript)
 *
 * Design goals
 * - Clean, high‑contrast typography on white canvas
 * - Soft cards (border, subtle shadow), 2xl radii
 * - Color used for meaning: indigo (research), emerald (action), amber (priority), rose (pain)
 * - Grid-first layout, comfortable spacing
 */

// -------------------- Small UI Primitives --------------------

type Tone = "slate" | "indigo" | "emerald" | "amber" | "rose";

const toneToClasses: Record<
  Tone,
  { ring: string; text: string; border: string; pill: string }
> = {
  slate: {
    ring: "ring-slate-200",
    text: "text-slate-900",
    border: "border-slate-200",
    pill: "bg-slate-100 text-slate-700",
  },
  indigo: {
    ring: "ring-indigo-200",
    text: "text-indigo-900",
    border: "border-indigo-200",
    pill: "bg-indigo-50 text-indigo-700",
  },
  emerald: {
    ring: "ring-emerald-200",
    text: "text-emerald-900",
    border: "border-emerald-200",
    pill: "bg-emerald-50 text-emerald-700",
  },
  amber: {
    ring: "ring-amber-200",
    text: "text-amber-900",
    border: "border-amber-200",
    pill: "bg-amber-50 text-amber-800",
  },
  rose: {
    ring: "ring-rose-200",
    text: "text-rose-900",
    border: "border-rose-200",
    pill: "bg-rose-50 text-rose-700",
  },
};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const Card: React.FC<{
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}> = ({ tone = "slate", className = "", children }) => (
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
  label: string;
  title: string;
  tone?: Tone;
  id?: string;
  subtitle?: string;
}> = ({ label, title, subtitle, tone = "slate", id }) => (
  <div id={id} className="scroll-mt-24">
    <div className="mb-3 inline-flex items-center gap-2">
      <span
        className={[
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
          toneToClasses[tone].pill,
        ].join(" ")}
      >
        {label}
      </span>
    </div>
    <h2
      className={[
        "text-2xl sm:text-3xl font-semibold leading-tight",
        toneToClasses[tone].text,
      ].join(" ")}
    >
      {title}
    </h2>
    {subtitle && <p className="mt-2 text-slate-600 max-w-3xl">{subtitle}</p>}
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

const StepList: React.FC<{ steps: string[]; tone?: Tone }> = ({
  steps,
  tone = "emerald",
}) => (
  <ol className="space-y-3">
    {steps.map((s, idx) => (
      <li key={idx} className="flex gap-3">
        <div
          className={[
            "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
            tone === "rose"
              ? "bg-rose-100 text-rose-700"
              : tone === "indigo"
              ? "bg-indigo-100 text-indigo-700"
              : tone === "amber"
              ? "bg-amber-100 text-amber-800"
              : tone === "emerald"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-700",
          ].join(" ")}
        >
          {idx + 1}
        </div>
        <p className="text-slate-800 leading-relaxed">{s}</p>
      </li>
    ))}
  </ol>
);

const ChipList: React.FC<{ items: string[]; tone?: Tone }> = ({
  items,
  tone = "indigo",
}) => (
  <div className="flex flex-wrap gap-2">
    {items.map((i, idx) => (
      <Pill key={idx} tone={tone}>
        {i}
      </Pill>
    ))}
  </div>
);

const AnchorNav: React.FC<{
  items: { id: string; label: string; tone?: Tone }[];
}> = ({ items }) => (
  <div className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
    <Container>
      <div className="flex items-center justify-between py-3">
        <div className="font-semibold text-slate-800">
          Content Research Systems
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

// -------------------- Page --------------------

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <AnchorNav
        items={[
          { id: "hero", label: "Overview", tone: "slate" },
          { id: "system-a", label: "Pain‑Point Mining", tone: "rose" },
          { id: "system-b", label: "Teardowns", tone: "indigo" },
          { id: "system-c", label: "Search‑Intent", tone: "amber" },
          { id: "system-d", label: "VOC", tone: "slate" },
          { id: "system-e", label: "Communities", tone: "indigo" },
          { id: "system-f", label: "Ad Angles", tone: "emerald" },
          { id: "system-g", label: "Trend Radar", tone: "amber" },
          { id: "ops", label: "Weekly Ops", tone: "emerald" },
          { id: "templates", label: "Templates", tone: "slate" },
          { id: "quality", label: "Quality Gates", tone: "rose" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-indigo-100/60 to-transparent" />
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Problem‑Aware Content Research Playbook
              </h1>
              <p className="mt-3 text-slate-600">
                A weekly, repeatable system that mines relatable pains, finds
                what works now, and converts insights into authentic hooks,
                angles, and formats.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="rose">Relatability</Pill>
                <Pill tone="indigo">Authenticity</Pill>
                <Pill tone="emerald">Repeatable Ops</Pill>
                <Pill tone="amber">Problem‑Aware Focus</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="space-y-12 pb-20">
          {/* System A */}
          <section>
            <SectionHeading
              id="system-a"
              label="System A"
              title="Pain‑Point Mining (social + search listening)"
              subtitle="Weekly pulse on what people say hurts—comments, threads, reviews, and search questions."
              tone="rose"
            />

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="rose" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-rose-700">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="rose"
                    steps={[
                      "Define the slice (who + topic): e.g., DTC skincare founders → shipping delays.",
                      "Collect raw pain (90m): 20–30 Reddit/Quora threads + 200–300 recent comments; pull search questions for 3–5 core keywords.",
                      "Code the pains: tag pain, trigger, consequence, workaround, desired outcome, objection.",
                      "Rank by frequency × intensity × practicality (can we help?).",
                      "Extract receipts: copy 10–20 verbatim quotes for proof (keep typos).",
                      "Output: ‘Top 10 Problem‑Aware Prompts’ (1 pain, 1 quote, 1 angle each).",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="rose" className="p-6">
                <h3 className="text-sm font-semibold text-rose-700">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="rose"
                    items={[
                      "Reddit",
                      "Quora",
                      "YouTube comments",
                      "TikTok/IG/X comments",
                      "Google Trends",
                      "People Also Ask",
                      "AnswerThePublic",
                      "AlsoAsked",
                      "G2/App/Amazon reviews",
                      "BuzzSumo (optional)",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System B */}
          <section>
            <SectionHeading
              id="system-b"
              label="System B"
              title="‘What’s Working Now’ Teardowns (creative patterns)"
              subtitle="Clone patterns (not content) from top creators and competitors."
              tone="indigo"
            />

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="indigo" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-indigo-700">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="indigo"
                    steps={[
                      "Pick 15–25 benchmarks (creators/brands).",
                      "Collect 50 winners (last 30–60 days): top ads/posts with strong engagement.",
                      "Tear down each: Hook, Angle, Format, CTA, Length.",
                      "Score retention signals (use your own YT ‘key moments’; infer from comments/reshares on others).",
                      "Cluster repeatable patterns (e.g., myth → reveal, duet reaction, before/after audit, 3 mistakes).",
                      "Create 10 copyable patterns as templates with fill‑in‑the‑blank hooks.",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="indigo" className="p-6">
                <h3 className="text-sm font-semibold text-indigo-700">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="indigo"
                    items={[
                      "TikTok Creative Center",
                      "Trending hashtags/songs",
                      "Meta Ad Library",
                      "YouTube Analytics (own)",
                      "Post performance dashboards",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System C */}
          <section>
            <SectionHeading
              id="system-c"
              label="System C"
              title="Search‑Intent Atlas (SEO for aware problems)"
              subtitle="Durable topics that mirror how people already search for pain."
              tone="amber"
            />

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="amber" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-amber-800">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="amber"
                    steps={[
                      "Seed 10 pain keywords (e.g., ‘UGC creators not replying’, ‘Shopify conversion low’).",
                      "Expand questions via AnswerThePublic / AlsoAsked; cluster by intent (fix, costs, vs, template, examples).",
                      "Map formats (BuzzSumo): checklists, templates, comparisons, etc.",
                      "Prioritize by monthly interest, business value, and competition.",
                      "Output: one pillar guide + 4–6 support posts (how‑to, checklist, examples, mistakes).",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="amber" className="p-6">
                <h3 className="text-sm font-semibold text-amber-800">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="amber"
                    items={[
                      "Google Trends",
                      "People Also Ask",
                      "AnswerThePublic",
                      "AlsoAsked",
                      "BuzzSumo",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System D */}
          <section>
            <SectionHeading
              id="system-d"
              label="System D"
              title="Voice‑of‑Customer (reviews, support, sales calls)"
              subtitle="Verbatim pains and outcomes that your audience already believes."
              tone="slate"
            />

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-slate-700">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="slate"
                    steps={[
                      "Pull 100–300 review snippets across 3–5 closest alternatives (or your own calls/tickets).",
                      "Highlight ‘I wish…’, ‘frustrated with…’, ‘ended up doing…’.",
                      "Tag pains vs desired outcomes vs objections.",
                      "Quantify: top 10 pains by count; include 3 representative quotes each.",
                      "Output: VOC board mapping Pain → Desired Outcome → Content Angle.",
                    ]}
                  />
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-semibold text-slate-700">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    items={[
                      "G2/Capterra/App Store",
                      "Amazon product reviews",
                      "CRM notes",
                      "Support tickets",
                      "Sales call transcripts",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System E */}
          <section>
            <SectionHeading
              id="system-e"
              label="System E"
              title="Community Intelligence (ICP hangouts)"
              subtitle="Real‑time nuance and objections from niche communities."
              tone="indigo"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="indigo" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-indigo-700">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="indigo"
                    steps={[
                      "List 5–10 communities (by ICP + topic).",
                      "Weekly pass: collect 20 threads with high comment velocity.",
                      "Summarize each thread in one line (pain/objection + who said it).",
                      "Extract objections to build content that pre‑answers resistance.",
                      "Output: ‘Top 10 This Week’ card with angles + sample comments.",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="indigo" className="p-6">
                <h3 className="text-sm font-semibold text-indigo-700">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="indigo"
                    items={[
                      "FB Groups",
                      "Discord/Slack",
                      "Niche subreddits",
                      "BuzzSumo Trending (optional)",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System F */}
          <section>
            <SectionHeading
              id="system-f"
              label="System F"
              title="Ad & Offer Angle Scanner (competitive positioning)"
              subtitle="See which angles and promises get paid distribution right now."
              tone="emerald"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="emerald" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-emerald-700">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="emerald"
                    steps={[
                      "Search 10–20 competitor/adjacent brands (by name & by generic keywords).",
                      "Screenshot 30–50 ads with engagement or repeated creatives.",
                      "Catalog: hook, value prop, proof, CTA, offer structure (trial/discount/guarantee).",
                      "Cluster angles (social proof, time‑saving, price‑anchoring, outcomes).",
                      "Output: 12 angle cards with example copy → turn each into 2–3 content ideas.",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="emerald" className="p-6">
                <h3 className="text-sm font-semibold text-emerald-700">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="emerald"
                    items={[
                      "Meta Ad Library",
                      "TikTok Creative Center",
                      "Spy dashboards (optional)",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* System G */}
          <section>
            <SectionHeading
              id="system-g"
              label="System G"
              title="Platform Trend Radar (format & culture)"
              subtitle="Adapt to platform‑native behaviors: music, editing, lengths, effects."
              tone="amber"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="amber" className="p-6 lg:col-span-2">
                <h3 className="text-sm font-semibold text-amber-800">
                  Simple Steps
                </h3>
                <div className="mt-3">
                  <StepList
                    tone="amber"
                    steps={[
                      "Open Trend Discovery in target region; list 10 rising hashtags/songs aligned to your niche.",
                      "Study 20 trending videos: note hook wording, first 3‑sec visual, caption pattern, structure.",
                      "Pick 3 formats to test (e.g., CapCut template + POV, greenscreen receipt, duet teardown).",
                      "Output: a 2‑week format test plan (3 formats × 2 variants each).",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="amber" className="p-6">
                <h3 className="text-sm font-semibold text-amber-800">
                  Data Sources & Tools
                </h3>
                <div className="mt-3">
                  <ChipList
                    tone="amber"
                    items={[
                      "TikTok Trend Discovery",
                      "Creative Insights",
                      "Reel/Shorts explorers",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* Turning research into content */}
          <section>
            <SectionHeading
              id="turning"
              label="Synthesis"
              title="Turn Insights → Hook + Angle + Proof"
              subtitle="Mirror the pain verbatim, add a counter‑intuitive ‘why’, and show a receipt within 5–8 seconds."
              tone="slate"
            />
            <Card className="mt-5 p-6">
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <h4 className="text-sm font-semibold text-rose-700">Hook</h4>
                  <p className="mt-2 text-sm text-slate-700">
                    State the pain in the audience’s own words (from
                    quotes/comments). Avoid solutions in the first line.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-indigo-700">
                    Angle
                  </h4>
                  <p className="mt-2 text-sm text-slate-700">
                    Explain why it happens or the counter‑intuition. Tie to a
                    simple mechanism or misbelief.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-700">
                    Proof
                  </h4>
                  <p className="mt-2 text-sm text-slate-700">
                    Drop a screenshot, metric, or on‑camera demo (“receipt”)
                    early. Authentic &gt; polished.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Weekly Ops */}
          <section>
            <SectionHeading
              id="ops"
              label="Operations"
              title="Weekly Operating Cadence"
              subtitle="Short, sustainable blocks → consistent output."
              tone="emerald"
            />
            <Card tone="emerald" className="mt-5 p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    day: "Mon (90m)",
                    task: "System A sweep → ‘Top 10 Problem‑Aware Prompts’.",
                  },
                  {
                    day: "Tue (60m)",
                    task: "System B teardowns → +10 patterns in swipe‑file.",
                  },
                  {
                    day: "Wed (45m)",
                    task: "System C update → 1 new cluster outline.",
                  },
                  {
                    day: "Thu (45m)",
                    task: "System F scanner → 12 angles; refresh angle board.",
                  },
                  {
                    day: "Fri (45m)",
                    task: "System G trend radar → 3 formats to test next week.",
                  },
                  {
                    day: "Ship",
                    task: "Turn top 10 prompts into 10 short‑form scripts + 2 long‑form outlines.",
                  },
                ].map((r, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {r.day}
                    </div>
                    <div className="mt-1 text-sm text-slate-800">{r.task}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Templates */}
          <section>
            <SectionHeading
              id="templates"
              label="Templates"
              title="Notion‑ready Cards"
              subtitle="Copy these into your workspace to systematize capture → synthesis."
              tone="slate"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6">
                <h4 className="text-sm font-semibold text-rose-700">
                  Pain Card
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Pain (verbatim)</li>
                  <li>Trigger / Context</li>
                  <li>Consequence</li>
                  <li>Desired Outcome</li>
                  <li>Objection</li>
                  <li>Related Search Questions</li>
                  <li>Sample Quote (receipt)</li>
                  <li>Hook Idea</li>
                  <li>Format to test</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="text-sm font-semibold text-indigo-700">
                  Creative Pattern Card
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Pattern name</li>
                  <li>Hook skeleton</li>
                  <li>Structure (0–10s / 10–30s / close)</li>
                  <li>Angle fits (list)</li>
                  <li>Example links (ads/posts)</li>
                  <li>Retention notes</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="text-sm font-semibold text-emerald-700">
                  Angle Card (Ad Scanner)
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Angle name</li>
                  <li>Value prop</li>
                  <li>Proof used (type)</li>
                  <li>CTA style</li>
                  <li>Where to adapt (YT/IG/TikTok/Email)</li>
                  <li>3 content ideas</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Quality gates */}
          <section>
            <SectionHeading
              id="quality"
              label="QA"
              title="Simple Quality Gates"
              subtitle="Ship fewer, better pieces by checking these three."
              tone="rose"
            />
            <Card tone="rose" className="mt-5 p-6">
              <ul className="list-disc space-y-2 pl-5 text-slate-800">
                <li>
                  <span className="font-medium">Relatability:</span> first line
                  mirrors a <em>verbatim</em> pain from your cards.
                </li>
                <li>
                  <span className="font-medium">Authenticity:</span> include a
                  receipt (quote/screenshot/metric) in the first 5–8 seconds or
                  top 2 lines.
                </li>
                <li>
                  <span className="font-medium">Problem‑aware:</span> name the
                  pain before your solution or product.
                </li>
              </ul>
            </Card>
          </section>
        </div>
      </Container>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:shadow md:bottom-8 md:right-8"
        >
          ↑ Back to top
        </button>
      )}
    </div>
  );
}
