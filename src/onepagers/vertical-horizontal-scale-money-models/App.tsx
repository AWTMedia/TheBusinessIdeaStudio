// src/App.tsx
// Vertical, Horizontal Scale & Money Models
// UI aligned to Matrix Theme one-pagers (Container, Card, Block, Tag)

import React from "react";
import Container from "@layout/Container";
import Tag from "@ui/Tag";
import { Card } from "@ui/Card";
import { Block } from "@ui/Block";

/* ----------------------- Micro-primitives (UI only) ----------------------- */
function Arrow() {
  return <span className="mx-2 select-none text-slate-400">→</span>;
}

function Step({ label, hint }: { label: string; hint?: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-card text-sm">
      <span className="font-medium text-slate-800">{label}</span>
      {hint ? <span className="text-[11px] text-slate-500">{hint}</span> : null}
    </span>
  );
}

function Flow({ steps }: { steps: { label: string; hint?: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <Step label={s.label} hint={s.hint} />
          {i < steps.length - 1 ? <Arrow /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="h-8 w-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[11px] font-medium text-slate-700 shadow-card">
    {children}
  </div>
);

function HorizontalDiagram() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Box>A</Box>
      <Box>A</Box>
      <Box>A</Box>
      <Box>A</Box>
    </div>
  );
}

function VerticalDiagram() {
  return (
    <div className="flex flex-col gap-2">
      <Box>A</Box>
      <Box>B</Box>
      <Box>C</Box>
      <Box>D</Box>
    </div>
  );
}

/* ----------------------------- Content (data) ----------------------------- */
const stepsNoBrand = [
  { label: "Content", hint: "The service or product packaging" },
  { label: "Attraction Offer" },
  { label: "ICP" },
  { label: "Advertising", hint: "profile funnel to content" },
  { label: "Sales", hint: "PIF story ad setter closer sequences" },
  { label: "Service Delivery", hint: "Delivering product or service to ICP" },
];

const stepsBrand = [
  {
    label: "Unique Angle / Differentiator",
    hint: "Why should people give you their attention?",
  },
  { label: "ICP", hint: "Who are those people?" },
  { label: "Content Production", hint: "How do you 'market' to these people" },
];

const saleEasyStrings: string[] = [
  "Brand (High perceived value)",
  "Strong CLOSER Skills",
  "Pull Marketing (Omnipresent Brand) & Push Marketing (Cold email, call, advertising, etc.)",
];

const buildBrandBullets: React.ReactNode[] = [
  <>
    <strong>Consistency:</strong> You need to continuously show up on ICP users'
    feed, in an optimised way that has the highest attraction and retention.
    i.e. to be top of mind all the time, you can be shown in ads, organic,
    reels, posts, etc — every time they are on ANY channel.
  </>,
  <>
    <strong>Omnipresence:</strong> You need to show up on multiple different
    channels in multiple different formats, to be with the ICP whenever they
    want whichever type of content. i.e. you have a business brand. If sometimes
    someone wants to read a book about business, you have one, and an audiobook.
    And if they just want to doom scroll but still learn, you're on their
    TikTok. And if they need more formal education, you're on YouTube. The same
    person in different states of mind wanting the same thing in different
    formats.
  </>,
  <>
    In order to achieve these you need a <em>content production system</em>. A
    set system of processes to ideate, produce, repurpose, distribute, track and
    iterate content.
    <ol className="list-decimal pl-5 mt-2 space-y-1">
      <li>
        <strong>Ideate:</strong> A system to map your ideas and convert them
        into short form and long form content — Generative AI is very advanced
        at this process.
      </li>
      <li>
        <strong>Produce:</strong> A system to record short and long form content
        — This is manual and requires creative expertise.
      </li>
      <li>
        <strong>Repurpose:</strong> A system to edit produced content into
        testing variables and convert content formats — This includes all
        post-production processes.
      </li>
      <li>
        <strong>Distribute:</strong> A system to continuously and strategically
        distribute your content everywhere — This is generally easy to automate
        with API integrations.
      </li>
      <li>
        <strong>Track:</strong> A system to track and analyse previous content —
        This is generally easy to automate with API integrations.
      </li>
      <li>
        <strong>Iterate:</strong> A system to identify winning content, expand
        what worked and cut what didn't — This is a game of iteration cycles and
        strategic positioning.
      </li>
    </ol>
  </>,
];

const twoTypesScale: React.ReactNode[] = [
  <>
    <strong>Horizontal:</strong> Duplicate a proven system to serve more of the
    same ICP. e.g. instead of one ad account capped at $550/day, duplicate
    accounts to double volume — without impairing process.
  </>,
  <>
    <strong>Vertical:</strong> Optimise an existing system for CAC, LTV, or
    money-model sequencing (attraction → upsell → downsell → continuity).
    Extract more value per qualified prospect.
  </>,
];

const journeySteps = [
  { label: "Proven Product Market Fit" },
  { label: "Proven Offer" },
  { label: "More of what's working", hint: "Horizontal Scale" },
  { label: "Optimise what's working", hint: "Vertical Scale" },
];

const nikParagraphs: string[] = [
  `Nik Setting   What Nik has been able to achieve a niche Audience (37k followers) with a High percentage of ICP clients. The majority of the prospects within his ecosystem are qualified prospects. According to him, 25% of new followers are qualified (attracted through profile ads). He then provides the audience with consistent, authentic, omnipresent content that is full of proof and has a high level of conviction. This empowers the story ad system, which uses psychological triggers to drive a specific action: send a message. When message is received, a setter converses with the already qualified prospect and A) achieves a PIF (because of trust and brand) or B) sets a meeting where the sale can be closed.`,
  `Nik's ICP are individuals with a strong social media presence. He helps them implement the profile ad system (to attract qualified prospects) and the story ad system (to convert qualified prospects into paying clients). This model is ideal because he A) Has clients who already have an online presence (hence a proven skill/service or product), B) understands basic systems and business processes, and C) have the funds to invest.`,
  `In simple terms, anyone who has a strong social presence (even without an offer), can use his system to monetise that audience. This positions him as a money making system.`,
  `The next steps   At this point the creator has a following (proven content system), an attraction system (profile ads), and a conversion system (story ads) - they are ready for horizontal scale. They can duplicate their ad spend to get more qualified prospects into the pipeline and to convert more individuals.  But the creator has not yet optimised for vertical scale.`,
  `There is a maximum to horizontal scale - duplicating what already works - but you can still optimise the money model to create more scale. Implementing a step by step offering (money model) allows the creator to maximise revenue, and is what takes companies from 6 figures to 7 figures.`,
  `ie. A creator has a following across all social medias of over 1m users. They have implemented the profile funnel and the story ads funnel to attract and convert their ICP with PIF's. Their offer is to join their community (whop) for $499 per month. People are converting. But this is not optimized.`,
  `Initially, they can adjust the attraction offer. Current the play is on emotional and psychological triggers, but implementing a proper attraction offer can boost the attraction of ICP clients (profile ads) or conversion (story ads). Instead of the offer to join the community for $499, they can implement an attraction continuity offer: Continuity discount offer. i.e. instead of just paying $499 monthly, if you sign up for 3 months today, I will give you the 4th month free, forever. The attraction offer can be played in the profile ad or the story ad.`,
  `After they have optimised the attraction offer, they can work on upsell offers. For this example, the course of $499 per month, we can offer them a classic upsell offer to solve the problem they will face once they have completed the course.`,
  `If the prospect says no to the upsell offer, you can offer them a downsell offer dependant on their concerns — payment plan downsell if it's too expensive upfront, trial with penalty if they are unsure about the move, feature downsell if they think the product is too expensive overall.`,
  `Finally, implementing a continuity offer will increase LTV and decrease churn, if optimised for time. i.e. if we offer the customer a discount at the time of highest churn (maybe month 4 when people normally finish the course) they will be more willing to stay. If you combine the continuity offer with the upsell offer you could upsell a client into continuity.`,
  `Implementing this vertical scale allows you to achieve the highest return per interested and qualified prospect, and can increase LTV, decrease CAC, churn and other important metrics.`,
];

const validateScaleParagraphs: string[] = [
  `Initially, it's important to validate demand and product market fit for your initial offering. This is done by successfully collecting payment and positive reviews. Note: 'collecting payment' is less important than 'positive reviews' as you can validate product market fit and demand for non-monetary offerings such as a personal brand or online following.`,
  `Once product market fit and demand have been established, the first step is to achieve horizontal scale by doing more of what's working. In the case of profile ads and story ads (attraction & conversion) — it's running more ad spend to fill the pipeline more (or duplicate ad accounts if daily spend < $550).`,
  `At this stage we are making very good money, but we still have not optimised for vertical scale — which is the final phase. This is where we focus on the specific money model within the offer to maximise potential revenue earnings. This is done with attraction offers, upsells, discounts, and continuity offers.`,
];

const moneyModels = {
  Attraction: [
    "Win Your Money Back — You set a goal for the customer and tell them how to reach it. If they reach it, they qualify to get their money back or get it back as store credit.",
    "Giveaway — You advertise a chance to win a big prize in exchange for contact information and anything else you want.",
    "Decoy — You advertise a free or discounted offer. When the lead asks to learn more, you also present a more valuable premium offer.",
    "Buy X Get Y Free — You offer customers free stuff in exchange for buying other stuff for money.",
    "Pay less now or more later — You give people a chance to pay in full price later or pay a discounted price now and get additional bonuses.",
  ],
  Upsell: [
    "Classic Upsell — Offer solution to customer's next problem the moment they become aware of it.",
    "Menu Upsell — You tell customers which options they don't need, then tell them which they do, and how to get their value from it.",
    "Anchor Upsells — You offer your most expensive thing first. If the customer balks, you offer a much cheaper and still acceptable alternative.",
    "Rollover Upsells — You credit all of the customer's previous purchase towards your next offer.",
  ],
  Downsell: [
    "Payment Plan Downsells — Same product/service, but they pay some now and the rest over time.",
    "Trial with Penalty — Let customers try your product or service for free, so long as they meet your terms.",
    "Feature Downsells — Lower prices by changing what the customer gets: quantity, quality, price alternatives or optional components.",
  ],
  Continuity: [
    "Continuity Bonus Offer — Give the customer an awesome thing if they sign up today.",
    "Continuity Discount Offers — Give customers free time now or later if they sign up today.",
    "Waived Fee Offers — Ask the customer to pay a start-up fee as part of joining a month-to-month program; discount the entire fee if they commit to a longer term. If they cancel inside the term, they pay the fee.",
  ],
};

/* --------------------------------- Page ---------------------------------- */
export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Container>
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Vertical, Horizontal Scale & Money Models
          </h1>
          <p className="text-slate-600 mt-2">
            Minimal, high-contrast matrix styled with soft cards, 12-col grid,
            and semantic tones.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <Tag color="emerald">Lead Gen</Tag>
            <Tag color="indigo">Nurture</Tag>
            <Tag color="amber">Conversion</Tag>
            <Tag color="rose">Accent</Tag>
          </div>
        </header>

        {/* Pipelines */}
        <section className="grid lg:grid-cols-2 gap-5">
          <Card tone="slate">
            <div className="p-5">
              <h2 className="text-lg font-bold mb-3">
                Building a business without a brand
              </h2>
              <Flow steps={stepsNoBrand} />
              <div className="grid sm:grid-cols-3 gap-3 mt-5">
                <div className="sm:col-span-2">
                  <Block
                    title="The Sale is easy if:"
                    bullets={saleEasyStrings}
                    tone="amber"
                  />
                </div>
                <div className="card-muted p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-medium text-slate-800">Notes</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
                    <li>PIF = Pay in Full</li>
                    <li>Setter → Closer sequences</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card tone="slate">
            <div className="p-5">
              <h2 className="text-lg font-bold mb-3">Building a brand</h2>
              <Flow steps={stepsBrand} />
              <div className="mt-5 grid gap-3">
                {buildBrandBullets.map((b, i) => (
                  <div
                    key={i}
                    className="card-muted p-4 rounded-xl border border-slate-200 bg-slate-50 text-sm leading-6"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Types of Scale */}
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">The two types of scale</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card tone="emerald">
              <div className="p-5">
                <div className="mb-3">
                  <HorizontalDiagram />
                </div>
                <p className="text-sm leading-6">{twoTypesScale[0]}</p>
              </div>
            </Card>
            <Card tone="amber">
              <div className="p-5">
                <div className="mb-3">
                  <VerticalDiagram />
                </div>
                <p className="text-sm leading-6">{twoTypesScale[1]}</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Journey */}
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">From PMF to Scale</h2>
          <Card tone="slate">
            <div className="p-5">
              <Flow steps={journeySteps} />
              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                <div className="card-muted p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-medium text-slate-800">
                    Attraction & Conversion Systems
                  </h4>
                  <p className="text-sm leading-6 mt-1">
                    Profile Ads (Attract more ICP) & Story Messager Ads (Convert
                    ICP).
                  </p>
                </div>
                <div className="card-muted p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-medium text-slate-800">Content Engine</h4>
                  <p className="text-sm leading-6 mt-1">
                    Existing content system fuels both profile and story ads.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Nik Setting */}
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">Nik Setting</h2>
          <div className="grid grid-cols-1 gap-4">
            {nikParagraphs.map((p, i) => (
              <Card key={i} tone="slate">
                <div className="p-5 text-sm leading-6 whitespace-pre-wrap">
                  {p}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Validation → Scale */}
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">
            Initially, validate; then scale
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {validateScaleParagraphs.map((p, i) => (
              <Card key={i} tone="slate">
                <div className="p-5 text-sm leading-6 whitespace-pre-wrap">
                  {p}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Money Models */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Money Models Vertical Scale</h2>
            <div className="hidden md:flex gap-2 text-xs">
              <Tag color="emerald">Attraction</Tag>
              <Tag color="amber">Upsell</Tag>
              <Tag color="rose">Downsell</Tag>
              <Tag color="indigo">Continuity</Tag>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card tone="emerald">
              <div className="p-5">
                <Block
                  title="Attraction Offer:"
                  bullets={moneyModels.Attraction}
                  tone="emerald"
                />
              </div>
            </Card>
            <Card tone="amber">
              <div className="p-5">
                <Block
                  title="Upsell Offers:"
                  bullets={moneyModels.Upsell}
                  tone="amber"
                />
              </div>
            </Card>
            <Card tone="rose">
              <div className="p-5">
                <Block
                  title="Downsell Offer:"
                  bullets={moneyModels.Downsell}
                  tone="rose"
                />
              </div>
            </Card>
            <Card tone="indigo">
              <div className="p-5">
                <Block
                  title="Continuity Offer:"
                  bullets={moneyModels.Continuity}
                  tone="indigo"
                />
              </div>
            </Card>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-slate-500">
          Built on the Matrix UI theme.
        </footer>
      </Container>
    </main>
  );
}
