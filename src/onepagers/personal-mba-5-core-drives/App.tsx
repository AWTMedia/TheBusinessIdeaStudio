import React, { useEffect, useState } from "react";

/**
 * Personal MBA — 5 Core Human Drives
 * One‑pager built with React + TailwindCSS (TypeScript)
 *
 * UX goals
 * - Sticky chip navigation for quick jump between drives
 * - Spacious rhythm, clear hierarchy, soft cards with 2xl radii
 * - Meaningful color coding per drive
 * - Mobile first, grid at lg
 */

// -------------------- Tones & Primitives --------------------

type Tone = "slate" | "indigo" | "emerald" | "amber" | "rose";

const toneToClasses: Record<
  Tone,
  { ring: string; text: string; border: string; pill: string; heading: string }
> = {
  slate: {
    ring: "ring-slate-200",
    text: "text-slate-900",
    border: "border-slate-200",
    pill: "bg-slate-100 text-slate-700",
    heading: "text-slate-900",
  },
  indigo: {
    ring: "ring-indigo-200",
    text: "text-indigo-900",
    border: "border-indigo-200",
    pill: "bg-indigo-50 text-indigo-700",
    heading: "text-indigo-900",
  },
  emerald: {
    ring: "ring-emerald-200",
    text: "text-emerald-900",
    border: "border-emerald-200",
    pill: "bg-emerald-50 text-emerald-700",
    heading: "text-emerald-900",
  },
  amber: {
    ring: "ring-amber-200",
    text: "text-amber-900",
    border: "border-amber-200",
    pill: "bg-amber-50 text-amber-800",
    heading: "text-amber-900",
  },
  rose: {
    ring: "ring-rose-200",
    text: "text-rose-900",
    border: "border-rose-200",
    pill: "bg-rose-50 text-rose-700",
    heading: "text-rose-900",
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
  subtitle?: string;
  tone?: Tone;
  id?: string;
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

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc space-y-2 pl-5 text-slate-800">
    {items.map((i, idx) => (
      <li key={idx}>{i}</li>
    ))}
  </ul>
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
  tone = "slate",
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
        <div className="font-semibold text-slate-800">Personal MBA Drives</div>
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
          { id: "acquire", label: "Acquire", tone: "emerald" },
          { id: "bond", label: "Bond", tone: "indigo" },
          { id: "learn", label: "Learn", tone: "slate" },
          { id: "defend", label: "Defend", tone: "rose" },
          { id: "feel", label: "Feel", tone: "amber" },
          { id: "apply", label: "Apply", tone: "emerald" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-indigo-100/60 to-transparent" />
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The 5 Core Human Drives
              </h1>
              <p className="mt-3 text-slate-600">
                A quick reference to design offers and content that people
                actually want. Align your product and messaging with how humans
                are wired: Acquire, Bond, Learn, Defend, and Feel.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="emerald">Acquire</Pill>
                <Pill tone="indigo">Bond</Pill>
                <Pill tone="slate">Learn</Pill>
                <Pill tone="rose">Defend</Pill>
                <Pill tone="amber">Feel</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="space-y-12 pb-20">
          {/* Acquire */}
          <section>
            <SectionHeading
              id="acquire"
              label="Drive 1"
              title="Acquire"
              subtitle="Desire to gain resources, status, wealth, time, and advantage."
              tone="emerald"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="emerald" className="p-6 lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-700">
                      Products that win
                    </h3>
                    <BulletList
                      items={[
                        "Finance, investment, and side‑income tools",
                        "Time savers and automations",
                        "Status goods and premium service tiers",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-700">
                      Marketing levers
                    </h3>
                    <BulletList
                      items={[
                        "Outcome promises with numbers",
                        "Exclusivity and speed",
                        "Clear ROI and social proof",
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-emerald-700">
                    Content angles
                  </h3>
                  <BulletList
                    items={[
                      "Case studies with metrics",
                      "Playbook and teardown formats",
                      "Before and after outcomes",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="emerald" className="p-6">
                <h3 className="text-sm font-semibold text-emerald-700">
                  Simple steps
                </h3>
                <StepList
                  tone="emerald"
                  steps={[
                    "Define a measurable outcome that matters to your audience.",
                    "Show the mechanism that creates the gain.",
                    "Add risk reversal and testimonials.",
                    "Give a fast start plan that lands a quick win.",
                  ]}
                />
              </Card>
            </div>
          </section>

          {/* Bond */}
          <section>
            <SectionHeading
              id="bond"
              label="Drive 2"
              title="Bond"
              subtitle="Desire for belonging, recognition, and community."
              tone="indigo"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="indigo" className="p-6 lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-indigo-700">
                      Products that win
                    </h3>
                    <BulletList
                      items={[
                        "Communities and cohorts",
                        "Collaboration tools and events",
                        "Loyalty programs and memberships",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-indigo-700">
                      Marketing levers
                    </h3>
                    <BulletList
                      items={[
                        "Identity and shared values",
                        "Member stories and UGC",
                        "Recognition and exclusives",
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-indigo-700">
                    Content angles
                  </h3>
                  <BulletList
                    items={[
                      "Behind the scenes culture",
                      "Member wins and spotlights",
                      "Meetup recaps and rituals",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="indigo" className="p-6">
                <h3 className="text-sm font-semibold text-indigo-700">
                  Simple steps
                </h3>
                <StepList
                  tone="indigo"
                  steps={[
                    "Name the tribe and its values.",
                    "Highlight real people and their progress.",
                    "Create low‑friction ways to participate.",
                    "Reward contributions in public.",
                  ]}
                />
              </Card>
            </div>
          </section>

          {/* Learn */}
          <section>
            <SectionHeading
              id="learn"
              label="Drive 3"
              title="Learn"
              subtitle="Desire to understand, master skills, and explore."
              tone="slate"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700">
                      Products that win
                    </h3>
                    <BulletList
                      items={[
                        "Courses and playbooks",
                        "Analytics and insight tools",
                        "Education as a service",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700">
                      Marketing levers
                    </h3>
                    <BulletList
                      items={[
                        "Clarity and demystification",
                        "Step by step guidance",
                        "Checklists and templates",
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-700">
                    Content angles
                  </h3>
                  <BulletList
                    items={[
                      "Deconstructions and teardowns",
                      "How to with examples",
                      "Common mistakes and fixes",
                    ]}
                  />
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-semibold text-slate-700">
                  Simple steps
                </h3>
                <StepList
                  steps={[
                    "Start from a concrete problem your audience already names.",
                    "Explain the underlying mechanism in plain language.",
                    "Provide a small exercise or template.",
                    "Show a result created with the method.",
                  ]}
                />
              </Card>
            </div>
          </section>

          {/* Defend */}
          <section>
            <SectionHeading
              id="defend"
              label="Drive 4"
              title="Defend"
              subtitle="Desire to protect self, loved ones, reputation, and hard‑won progress."
              tone="rose"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="rose" className="p-6 lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-rose-700">
                      Products that win
                    </h3>
                    <BulletList
                      items={[
                        "Security, backup, and compliance",
                        "Insurance and warranties",
                        "Monitoring and alerting",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-rose-700">
                      Marketing levers
                    </h3>
                    <BulletList
                      items={[
                        "Risk reversal and guarantees",
                        "Reliability and uptime",
                        "Prevention and checklists",
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-rose-700">
                    Content angles
                  </h3>
                  <BulletList
                    items={[
                      "Incident reviews and lessons",
                      "Avoid these mistakes",
                      "Protect your margin and reputation",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="rose" className="p-6">
                <h3 className="text-sm font-semibold text-rose-700">
                  Simple steps
                </h3>
                <StepList
                  tone="rose"
                  steps={[
                    "Define the risk and its cost in plain terms.",
                    "Show the failure case and the safeguard.",
                    "Offer a safety net such as a guarantee.",
                    "Provide a pre‑flight checklist.",
                  ]}
                />
              </Card>
            </div>
          </section>

          {/* Feel */}
          <section>
            <SectionHeading
              id="feel"
              label="Drive 5"
              title="Feel"
              subtitle="Desire for sensory and emotional experiences such as novelty, excitement, and anticipation."
              tone="amber"
            />
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <Card tone="amber" className="p-6 lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-amber-800">
                      Products that win
                    </h3>
                    <BulletList
                      items={[
                        "Entertainment and games",
                        "Travel and experiences",
                        "Lifestyle and food",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-amber-800">
                      Marketing levers
                    </h3>
                    <BulletList
                      items={[
                        "Vivid storytelling and visuals",
                        "Novelty and limited drops",
                        "Pacing and anticipation",
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-amber-800">
                    Content angles
                  </h3>
                  <BulletList
                    items={[
                      "Point of view experiences",
                      "Unboxings and reveals",
                      "Come with me vlog formats",
                    ]}
                  />
                </div>
              </Card>
              <Card tone="amber" className="p-6">
                <h3 className="text-sm font-semibold text-amber-800">
                  Simple steps
                </h3>
                <StepList
                  tone="amber"
                  steps={[
                    "Choose one feeling to evoke such as awe or relief.",
                    "Design a first three seconds moment that telegraphs the feeling.",
                    "Use sensory details and sound where relevant.",
                    "End with a moment that rewards the viewer.",
                  ]}
                />
              </Card>
            </div>
          </section>

          {/* Apply section */}
          <section>
            <SectionHeading
              id="apply"
              label="Apply"
              title="Fast ways to use the drives"
              subtitle="Map your offer and content to one primary drive and one or two secondary drives."
              tone="emerald"
            />
            <Card tone="emerald" className="mt-5 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-emerald-700">
                    Offer design
                  </h3>
                  <BulletList
                    items={[
                      "Choose the primary drive your promise speaks to.",
                      "Layer social proof for Bond and a guarantee for Defend.",
                      "Make the first win achievable in one session.",
                    ]}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-emerald-700">
                    Hooks
                  </h3>
                  <BulletList
                    items={[
                      "Acquire: Stuck at a revenue plateau? Try this three step method.",
                      "Bond: Building alone is exhausting. Join a room that gets it.",
                      "Learn: Confused by attribution? Use this five minute model.",
                    ]}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-emerald-700">
                    Landing page layout
                  </h3>
                  <BulletList
                    items={[
                      "Above the fold matches the primary drive.",
                      "Sections below add proof, safety, and community.",
                      "Close with a risk reversed call to action.",
                    ]}
                  />
                </div>
              </div>
            </Card>
          </section>
        </div>
      </Container>

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
