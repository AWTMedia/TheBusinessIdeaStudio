import React from "react";

/*
  The 4 Types of Lead Flow Models — One‑Pager
  React + Tailwind (Matrix theme style)
  - MacBook Air friendly (1280–1440px)
  - Soft cards, semantic tones, compact spacing
  - Print / Save as PDF ready
*/

export default function LeadFlowOnePager() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <Overview />
        <Models />
        <Chooser />
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
        The 4 Types of Lead Flow Models
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Understand how leads are generated, nurtured, and converted so you can
        align the right model to your market and build a predictable, scalable
        pipeline.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Acquisition</Tag>
        <Tag color="amber">Nurture</Tag>
        <Tag color="rose">Conversion</Tag>
      </div>
    </header>
  );
}

/* ------------------------------- Overview -------------------------------- */
function Overview() {
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">Overview</h2>
        <p className="text-sm leading-6">
          In any business, generating leads is the cornerstone of sustainable
          growth. To consistently attract and convert prospects, it’s essential
          to understand the different lead flow models available. Each model
          defines how leads are generated, nurtured, and ultimately converted
          into paying customers.
        </p>
        <p className="text-sm leading-6 mt-2">
          Lead flow models determine the flow of potential clients into your
          sales system. By aligning your business with the right model, you can
          optimize client acquisition, streamline outreach, and improve
          conversion rates.
        </p>
        <Quote
          text="Lead flow models are the blueprint of your sales process. A strong lead flow is the backbone of every successful business, providing the necessary foundation for predictable revenue."
          source="HubSpot"
          title="How to Build an Effective Lead Flow Strategy"
        />
      </Card>
    </section>
  );
}

/* ------------------------------ Lead Models ------------------------------ */
function Models() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        The 4 Types of Lead Flow Models
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <ModelCard
          tone="emerald"
          tag="Inbound"
          title="Inbound Lead Flow (Content‑Driven)"
          intro="Attract leads through content marketing, social, SEO, and organic plays. Create value that draws prospects to you and nurtures trust over time."
          features={[
            "Content Creation (blogs, podcasts, videos, case studies)",
            "SEO & Search Traffic (rank for intent)",
            "Lead Magnets (guides, templates, webinars)",
            "Email Nurturing (automated sequences)",
          ]}
          exampleTitle="Example"
          exampleBody="A fitness coach publishes free workout plans and nutrition advice. Visitors download a free guide and enter a nurture sequence, eventually purchasing personalized training."
          quote={{
            text: "The power of inbound lies in its ability to attract people who are already searching for the solution you provide. It’s the difference between chasing leads and having them come to you.",
            source: "Neil Patel",
            title: "How Inbound Marketing Helps You Attract Leads",
          }}
        />
        <ModelCard
          tone="indigo"
          tag="Outbound"
          title="Outbound Lead Flow (Direct Outreach)"
          intro="Proactively reach ideal prospects via cold emails, calls, and social outreach. Target decision‑makers and accelerate pipeline creation."
          features={[
            "Cold Email Campaigns (personalized outreach)",
            "Cold Calling (direct pitching)",
            "Social Selling (LinkedIn conversations)",
            "Follow‑Up Sequences (multi‑touch persistence)",
          ]}
          exampleTitle="Example"
          exampleBody="A SaaS company researches ideal buyers on LinkedIn and sends tailored emails offering a free trial. Follow‑ups add testimonials and address pains until a demo is booked."
          quote={{
            text: "Outbound is about getting your message in front of the right people at the right time. When done well, it’s a powerful tool for accelerating lead generation and sales conversion.",
            source: "Salesforce",
            title: "Outbound Sales Best Practices",
          }}
        />
        <ModelCard
          tone="amber"
          tag="Referral"
          title="Referral‑Based Lead Flow (Word of Mouth)"
          intro="Leverage satisfied clients, partners, and communities to generate warm, high‑trust leads."
          features={[
            "Referral Programs (incentivized)",
            "Testimonials & Reviews (social proof)",
            "Partnerships (co‑marketing, influencers)",
            "Word‑of‑Mouth (organic recommendations)",
          ]}
          exampleTitle="Example"
          exampleBody="A graphic designer implements a referral program that rewards clients for introductions, creating a steady stream of new projects with built‑in trust."
          quote={{
            text: "Referrals are a powerful lead flow model because they come with a built‑in level of trust. A happy customer is often the best salesperson you’ll ever have.",
            source: "Harvard Business Review",
            title: "How to Create a Referral System That Works",
          }}
        />
        <ModelCard
          tone="rose"
          tag="Paid"
          title="Paid Lead Flow (Paid Advertising)"
          intro="Generate leads via paid media for immediate volume and precise targeting. Place offers in front of ideal audiences and drive traffic on demand."
          features={[
            "Paid Search Ads (Google, intent‑driven)",
            "Social Media Ads (Meta, LinkedIn, TikTok)",
            "Display Ads (audience + placement targeting)",
            "Retargeting (re‑engage non‑converters)",
          ]}
          exampleTitle="Example"
          exampleBody="A real‑estate agent runs Facebook ads to homeowners in a geo, sending traffic to a free property‑valuation page and retargeting non‑converters to book calls."
          quote={{
            text: "Paid advertising allows you to target your ideal customer more directly. It’s a great way to generate leads quickly, especially when organic methods take longer to show results.",
            source: "AdEspresso",
            title: "The Beginner’s Guide to Paid Lead Generation",
          }}
        />
      </div>
    </section>
  );
}

function ModelCard({
  tone,
  tag,
  title,
  intro,
  features,
  exampleTitle,
  exampleBody,
  quote,
}: {
  tone: Tone;
  tag: string;
  title: string;
  intro: string;
  features: string[];
  exampleTitle: string;
  exampleBody: string;
  quote: { text: string; source: string; title?: string };
}) {
  return (
    <Card tone={tone}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold">{title}</h3>
        <Tag color={tone}>{tag}</Tag>
      </div>
      <p className="text-sm text-slate-700 mt-1">{intro}</p>
      <Sub title="Key Features">
        <Bullets items={features} />
      </Sub>
      <Sub title={exampleTitle}>
        <p className="text-sm text-slate-700">{exampleBody}</p>
      </Sub>
      <Quote text={quote.text} source={quote.source} title={quote.title} />
    </Card>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-3">
      <h4 className="text-sm font-medium text-slate-800">{title}</h4>
      <div className="mt-1">{children}</div>
    </div>
  );
}

/* ----------------------- Choosing the Right Model ------------------------ */
function Chooser() {
  const items = [
    {
      title: "Business Type",
      body: "High‑ticket B2B often wins with Outbound or Referral; consumer brands typically thrive with Inbound or Paid.",
    },
    {
      title: "Sales Cycle",
      body: "Long cycles benefit from Inbound and Referral (relationship building); short cycles can leverage Outbound or Paid for faster responses.",
    },
    {
      title: "Budget",
      body: "Paid requires upfront spend; Inbound and Referral are lower‑cost but compounding plays. Outbound needs tools + people time.",
    },
    {
      title: "Target Audience",
      body: "Outbound excels for precise professional targets; Inbound suits broader consumer intent; Paid hits lookalikes and demand capture at scale.",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        Choosing the Right Lead Flow Model
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
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
          Selecting and integrating the right model into a cohesive strategy is
          key to consistent acquisition and growth. Each model has strengths
          across goals, budgets, and cycles—combine them thoughtfully to
          attract, nurture, and convert prospects into loyal clients.
        </p>
        <Quote
          text="Lead flow is not just about generating leads—it’s about creating the right lead flow that aligns with your business’s goals and resources, allowing for consistent growth and sales."
          source="Gary Vaynerchuk"
          title="How to Create a Lead Generation System That Works"
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
