import React from "react";

/*
  Productizing a Skill into a Scalable Service — One‑Pager
  React + Tailwind (Matrix theme style)
  - MacBook Air friendly (1280–1440px)
  - Soft cards, semantic tones, compact spacing
  - Print / Save as PDF ready
*/

export default function ProductizeOnePager() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <Overview />
        <WhyProductize />
        <Steps />
        <Examples />
        <Conclusion />
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
        Productizing a Skill into a Scalable Service
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Turn personal expertise into a standardized, repeatable offer that
        delivers consistent results and scales without adding 1:1 effort for
        every client.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Systems</Tag>
        <Tag color="amber">Scale</Tag>
        <Tag color="rose">Operations</Tag>
      </div>
    </header>
  );
}

/* -------------------------------- Overview ------------------------------- */
function Overview() {
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Overview</h2>
        <p className="text-sm leading-6">
          Productizing a skill is the process of transforming your expertise
          into a standardized, scalable offering that can be replicated and sold
          repeatedly without significant additional effort for each sale.
          Instead of bespoke delivery, you create a systemized service that
          delivers consistent results efficiently.
        </p>
        <p className="text-sm leading-6 mt-2">
          Productization moves you beyond time‑for‑money, enabling predictable
          income and sustainable growth across coaching, consulting, marketing,
          design, and more.
        </p>
        <Quote
          text="Productizing a service means turning your personal expertise into a solution that can be repeatedly delivered, creating a more sustainable and scalable business model."
          source="Entrepreneur"
          title="How to Productize Your Service for Growth"
        />
      </Card>
    </section>
  );
}

/* ------------------------------ Why Productize --------------------------- */
function WhyProductize() {
  const items = [
    {
      title: "Scalability",
      body: "Remove the dependency on time. Sell the same productized offer to many clients with minimal marginal work, so capacity scales without burnout.",
    },
    {
      title: "Predictable Income",
      body: "Standardized packages with set prices and deliverables make revenue more forecastable and planning easier.",
    },
    {
      title: "Increased Efficiency",
      body: "Operate with repeatable systems so each client gets the same quality without reinventing delivery every time.",
    },
    {
      title: "Broader Audience",
      body: "Clear packaging and outcomes attract more buyers at accessible price points while communicating value instantly.",
    },
    {
      title: "Less 1:1 Dependency",
      body: "Reduce reliance on your calendar and shift your energy to improving the asset instead of re‑doing the work.",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Why Productize Your Skill?</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((x, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <h3 className="font-semibold">{x.title}</h3>
            <p className="text-sm text-slate-700 mt-1">{x.body}</p>
          </Card>
        ))}
      </div>
      <Quote
        text="Productizing your skill is not about simplifying your expertise; it’s about systematizing it in a way that creates consistent results while opening the door for scalability."
        source="Dan Martell"
        title="Productize Your Service for Success"
      />
    </section>
  );
}

/* ---------------------------------- Steps -------------------------------- */
function Steps() {
  const blocks = [
    {
      n: "1",
      title: "Identify Your Core Offer",
      body: "Pick the proven, repeatable service with clear results you can standardize.",
      example:
        "Example: A business consultant offers a 6‑week strategy development package to identify key growth opportunities.",
    },
    {
      n: "2",
      title: "Define the Deliverables",
      body: "Specify exactly what the client receives and how—make it consistent and replicable.",
      example:
        "Example: Strategy session, detailed report, 30‑day action plan, and a follow‑up meeting.",
    },
    {
      n: "3",
      title: "Create Systems & Processes",
      body: "Document onboarding, delivery, communication, and measurement so the service runs like an assembly line.",
      example:
        "Example: Standardized onboarding questionnaire, session setup SOPs, and a project board for deliverables.",
    },
    {
      n: "4",
      title: "Package the Service",
      body: "Brand and present the offer so buyers instantly understand outcomes, timeline, and how to buy.",
      example:
        "Example: Position as a 'Growth Accelerator Program' with clear pricing and streamlined sign‑up.",
    },
    {
      n: "5",
      title: "Set Pricing & Structure",
      body: "Price for value and efficiency. Consider one‑time fees, plans, retainers, or subscriptions.",
      example:
        "Example: $5,000 for the full program with optional monthly payment plan.",
    },
    {
      n: "6",
      title: "Automate & Delegate",
      body: "Automate emails, tracking, and status; delegate admin and repetitive tasks to free up focus.",
      example:
        "Example: Use email automations to nurture leads, a client tracker for progress, and a VA for admin.",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Steps to Productize Your Skill</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {blocks.map((b, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                {b.n}
              </span>
              <h3 className="font-semibold">{b.title}</h3>
            </div>
            <p className="text-sm text-slate-700 mt-1">{b.body}</p>
            <p className="text-xs text-slate-500 mt-2">
              <strong>Example:</strong> {b.example}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- Examples of Skills ------------------------- */
function Examples() {
  const items = [
    {
      title: "Coaching Packages",
      body: "Tiered, fixed‑scope coaching (e.g., set sessions, exercises, resources) at a fixed price.",
    },
    {
      title: "Consulting Services",
      body: "Fixed‑service packages like a one‑month audit, six‑week planning, or 12‑week implementation guide.",
    },
    {
      title: "Online Courses or Programs",
      body: "A structured course that scales to unlimited buyers without custom work per student.",
    },
    {
      title: "Content Creation Services",
      body: "Monthly bundles (e.g., blog posts, video edits, or design templates) with standard deliverables.",
    },
    {
      title: "Marketing Automation Services",
      body: "Pre‑packaged campaigns: ad launch kits, email automation setups, or lead gen systems with defined outputs.",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">Examples of Productized Skills</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((x, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <h3 className="font-semibold">{x.title}</h3>
            <p className="text-sm text-slate-700 mt-1">{x.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Conclusion ----------------------------- */
function Conclusion() {
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Conclusion</h2>
        <p className="text-sm leading-6">
          Productizing your skill is an effective path to scale, efficiency, and
          predictable revenue. With systemized delivery, clear deliverables, and
          defined processes, you can serve more clients without compromising
          quality—unlocking growth and profitability.
        </p>
        <Quote
          text="The key to successful productization is creating a system that works without you needing to be involved in every detail. Automation and delegation are your best friends in this process."
          source="Gina Bianchini"
          title="How to Scale Your Business Through Productization"
        />
        <Quote
          text="Productizing your skill isn’t about taking away the personal touch—it’s about creating a system that allows you to deliver that personal touch more efficiently and consistently."
          source="Marie Forleo"
          title="How to Scale Your Business by Productizing Your Expertise"
        />
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
