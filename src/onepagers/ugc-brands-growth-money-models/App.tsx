import React from "react";

/*
  UGC Brands — Growth Money Models
  One‑pager React + Tailwind (Matrix theme style)
  - Soft cards, rounded corners, compact spacing, semantic color accents
  - MacBook Air friendly (1280–1440px)
  - Print / Save as PDF ready
*/

export default function UGCBusinessPlan() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <ExecutiveSummary />
        <Skill />
        <MarketOverview />
        <ProblemStatement />
        <Solution />
        <ServiceBreakdown />
        <ElevatorPitches />
        <Infrastructure />
        <SEOKeywords />
        <Positioning />
        <LeadGenMatrix />
        <LPFrameworks />
        <SEO Blogs />
        <NextSteps />
        <SummarySteps />
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
        UGC Brands — Growth Money Models
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        We scale brands with user‑generated content and AI‑managed affiliate
        engines. This one‑pager turns the full plan into an executable
        blueprint.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="indigo">Strategy</Tag>
        <Tag color="emerald">Automation</Tag>
        <Tag color="amber">Acquisition</Tag>
        <Tag color="rose">Proof</Tag>
        <Tag color="slate">Operations</Tag>
      </div>
    </header>
  );
}

/* --------------------------- Executive Summary --------------------------- */
function ExecutiveSummary() {
  return (
    <section className="mb-8">
      <Card tone="indigo">
        <h2 className="text-lg font-bold mb-3">📌 Executive Summary</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <KV label="Business Name" value="(Insert Your Brand Name)" />
            <KV
              label="Service Focus"
              value="AI‑Powered Zero‑Ad‑Spend Growth Systems (UGC Capture & AI‑Driven Affiliate Engines)"
            />
            <KV
              label="Target Clients"
              value="Digitally active SMEs in the USA, UK, Switzerland, Amsterdam, Singapore, and Australia"
            />
            <KV
              label="Primary Acquisition Channel"
              value="Cold Email Outreach → Sales Call → System Installation"
            />
          </div>
          <div className="text-sm leading-6">
            <p>
              We design and implement AI‑driven growth infrastructure that
              scales brands <strong>without paid advertising</strong>. Our
              flagship solutions include a UGC landing system that transforms
              happy customers into high‑impact content in exchange for rewards,
              plus an AI‑managed affiliate engine that discovers, recruits, and
              rewards brand advocates automatically.
            </p>
            <p className="mt-2">
              <strong>Result:</strong> compounding, cost‑free customer
              acquisition while your team focuses on strategy, creativity, and
              scale.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ---------------------------------- Skill -------------------------------- */
function Skill() {
  return (
    <section className="mb-8">
      <Card tone="emerald">
        <h2 className="text-lg font-bold mb-3">🎯 Skill</h2>
        <p className="text-sm">AI Automation for:</p>
        <Bullets items={["Marketing", "Sales", "Customer Acquisition"]} />
      </Card>
    </section>
  );
}

/* ---------------------------- Market Overview ---------------------------- */
function MarketOverview() {
  const locations = [
    "USA",
    "UK",
    "Switzerland",
    "Amsterdam",
    "Singapore",
    "Australia",
  ];
  const targets = [
    "Marketing Agencies (Creative, Performance, PR, Branding)",
    "E‑commerce Brands (6–7 figure revenue)",
    "Coaching/Education Brands (fitness, business, mindset)",
    "Boutique SaaS Startups",
    "Professional Services (law, consulting, finance)",
    "Real Estate Agencies",
    "Digital‑First Personal Brands",
  ];
  const icp = [
    "Role: Founder, MD, or Head of Growth/Marketing",
    "Business Size: 3–25 people",
    "Revenue: $300K–$5M/year",
    "Tools: Slack, Notion, HubSpot",
    "Needs: Automation, CRM, analytics, lean systems",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">🌍 Market Overview</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">📍 Locations</h3>
          <Tags items={locations} tone="indigo" />
        </Card>
        <Card>
          <h3 className="font-semibold">🏢 Target Market</h3>
          <Bullets items={targets} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">👤 ICP: “Sarah” or “James”</h3>
          <Bullets items={icp} />
        </Card>
      </div>
    </section>
  );
}

/* ---------------------------- Problem Statement -------------------------- */
function ProblemStatement() {
  const issues = [
    "Manual UGC requests get forgotten or ignored.",
    "Affiliate programs stall because recruiting, tracking, and paying partners is a spreadsheet nightmare.",
    "Marketing teams burn time stitching tools together while ad costs rise and ROI falls.",
  ];
  return (
    <section className="mb-8">
      <Card tone="rose">
        <h2 className="text-lg font-bold mb-3">🚨 Problem Statement</h2>
        <p className="text-sm leading-6">
          Most SMEs rely on paid ads, luck, or exhausting manual outreach to
          keep new customers coming in. Yet they’re sitting on the{" "}
          <em>cheapest growth asset they already own</em>—happy customers
          willing to share stories and refer friends.
        </p>
        <Bullets items={issues} />
        <p className="text-sm leading-6 mt-2 font-medium">
          Repetition and ad‑spend dependence kill scale. We exist to turn every
          satisfied customer into free, authentic marketing and to automate the
          affiliate engine—so growth compounds while your team focuses on
          strategy and product.
        </p>
      </Card>
    </section>
  );
}

/* -------------------------------- Solution ------------------------------- */
function Solution() {
  const items = [
    {
      title: "UGC Capture Portal",
      body: "AI‑driven landing pages request photo/video testimonials and social posts in exchange for instant discounts, credits, or gifts—collecting authentic content on autopilot.",
    },
    {
      title: "AI‑Managed Affiliate Engine",
      body: "Machine‑learning workflows search social platforms, recruit best‑fit advocates, issue personalized codes, track sales, and pay commissions automatically—no manual spreadsheets, ever.",
    },
    {
      title: "Amplification Automations",
      body: "Approved UGC flows straight into your email, social, and product pages, while affiliate links compound reach—delivering compounding, cost‑free acquisition.",
    },
  ];
  return (
    <section className="mb-8">
      <Card tone="emerald">
        <h2 className="text-lg font-bold mb-3">💡 Our Solution</h2>
        <p className="text-sm leading-6">
          We install a <strong>zero‑ad‑spend growth engine</strong> that turns
          every satisfied customer and fan into a scalable marketing channel.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          {items.map((it, i) => (
            <Card key={i}>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm leading-6 mt-1">{it.body}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm leading-6 mt-3 font-medium">
          <strong>Result:</strong> predictable growth powered by customers and
          partners—not paid ads—so your team can focus on strategy, creativity,
          and scale.
        </p>
      </Card>
    </section>
  );
}

/* ----------------------------- Service Breakdown ------------------------- */
function ServiceBreakdown() {
  const list1 = [
    "Smart landing page asks recent buyers for a quick photo/video + rating",
    "Instant reward (discount, store credit, freebie) auto‑delivered",
  ];
  const list2 = [
    "AI identifies high‑quality contributors, issues personal referral codes",
    "Automated onboarding email/SMS explains perks and payout structure",
  ];
  const list3 = [
    "Every referral sale is auto‑attributed via code or link",
    "Commissions or extra rewards are sent automatically—no spreadsheets",
  ];
  const list4 = [
    "Approved UGC flows straight into your email, social, and product pages",
    "High‑performing content is flagged for retargeting or ads (if desired)",
  ];
  return (
    <section className="mb-8">
      <Card tone="slate">
        <h2 className="text-lg font-bold mb-3">🧰 Service Breakdown</h2>
        <p className="text-sm">One integrated, AI‑powered system that:</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-3">
          <Card>
            <h3 className="font-semibold">1) Captures Authentic Content</h3>
            <Bullets items={list1} />
          </Card>
          <Card>
            <h3 className="font-semibold">2) Turns Creators into Advocates</h3>
            <Bullets items={list2} />
          </Card>
          <Card>
            <h3 className="font-semibold">3) Tracks & Rewards Results</h3>
            <Bullets items={list3} />
          </Card>
          <Card>
            <h3 className="font-semibold">4) Amplifies Across Channels</h3>
            <Bullets items={list4} />
          </Card>
        </div>
        <p className="text-sm leading-6 mt-3 font-medium">
          Outcome: A single, circular growth engine that continuously turns
          happy customers into content → content into advocates → advocates into
          new customers—without paid ads or manual chasing.
        </p>
      </Card>
    </section>
  );
}

/* ------------------------- Awareness Elevator Pitches --------------------- */
function ElevatorPitches() {
  const pitches = [
    {
      lvl: "Unaware",
      text: "Your happiest customers could be creating the next campaign for you—free. What if every purchase automatically turned into share‑worthy content and referrals, with zero extra work from your team?",
    },
    {
      lvl: "Problem‑Aware",
      text: "Tired of begging for reviews and watching ad costs climb? We replace that grind with an AI engine that captures user‑generated content and turns buyers into rewarded brand advocates—so social proof and new sales appear on autopilot.",
    },
    {
      lvl: "Product‑Aware",
      text: "We install a plug‑and‑play UGC‑to‑Affiliate Growth Loop: a smart landing page that collects authentic photos/videos in exchange for instant rewards, plus an AI recruiter that issues referral codes and tracks every sale—no spreadsheets, no ad spend.",
    },
    {
      lvl: "Most Aware",
      text: "Clients using our loop triple their monthly UGC, launch affiliate programs in a day, and drive 25–40% more revenue without spending a cent on ads. Ready to turn customers into your best marketers?",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        🗣️ Awareness‑Level Elevator Pitches
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {pitches.map((p, i) => (
          <Card key={i} tone={i % 2 ? "indigo" : "emerald"}>
            <h3 className="font-semibold">{p.lvl}</h3>
            <p className="text-sm leading-6 mt-1">“{p.text}”</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Business Infrastructure ---------------------- */
function Infrastructure() {
  const core = [
    "Conversion‑focused website (SEO, clear CTAs, services)",
    "Industry‑specific landing pages showcasing UGC examples",
    "Live UGC Gallery block for social proof",
    "Lead magnets: UGC Playbook PDF, ROI calculator, free audit",
  ];
  const sales = [
    "Cold‑email engine (Instantly / Smartlead) targeting ICP lists",
    "Prospecting & enrichment (Clay, Apollo)",
    "CRM pipeline (Airtable / Pipedrive) with UGC‑interest tagging",
    "Pitch deck + 2‑min demo video of the UGC‑to‑Affiliate Loop",
    "ROI calculator pre‑loaded with client’s average order value",
  ];
  const trust = [
    "LinkedIn content calendar (UGC wins, affiliate success stories)",
    "Blog strategy: SEO + zero‑ad‑spend growth topics",
    "Short‑form video: before/after UGC funnels, testimonial clips",
    "Guest podcasts / webinars on UGC & no‑ad acquisition",
    "Quarterly mini‑reports on UGC ROI benchmarks",
  ];
  const fulfill = [
    "Notion client portal with project Kanban + UGC asset library",
    "Pre‑built Zapier/Make templates: (1) UGC capture → review → rights; (2) Advocate scoring → code → payout",
    "Automation map & SOPs for the entire loop",
    "Optional retainer: monthly optimization + new reward campaigns",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">🔧 Business Infrastructure</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card tone="slate">
          <h3 className="font-semibold">I. Core Authority Layer</h3>
          <Bullets items={core} />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">II. Sales Infrastructure</h3>
          <Bullets items={sales} />
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">III. Trust & Thought Leadership</h3>
          <Bullets items={trust} />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">IV. Fulfillment System</h3>
          <Bullets items={fulfill} />
        </Card>
      </div>
    </section>
  );
}

/* ----------------------------- SEO & GEO Keywords ------------------------ */
function SEOKeywords() {
  const seo = [
    [
      "UGC automation platform",
      "High‑intent buyers seeking software to collect & deploy user‑generated content",
    ],
    [
      "AI affiliate recruitment",
      "Searches for hands‑off affiliate/partner sourcing tools",
    ],
    [
      "UGC landing page software",
      "Direct solution search for UGC capture portals",
    ],
    [
      "Zero‑ad‑spend growth engine",
      "Outcome‑focused, differentiates from paid‑ads agencies",
    ],
    [
      "AI‑powered referral program",
      "Buyers looking to automate referral / advocate loops",
    ],
    [
      "UGC distribution software",
      "Need to amplify UGC across email, PDPs, socials",
    ],
    ["AI marketing automation agency", "Broader B2B category term"],
    ["Front‑end sales automation", "Service‑level catch‑all"],
    ["No‑code AI tools for SMEs", "Tech‑simplicity angle"],
    ["AI for marketing agencies", "Niche‑targeting term"],
  ];
  const geo = [
    "UGC Automation Platform Singapore",
    "AI Affiliate Recruitment Switzerland",
    "Zero‑Ad‑Spend Growth USA",
    "UGC Landing Page Software UK",
    "E‑commerce UGC Automation Australia",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">🔑 SEO & GEO Keywords</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4">SEO Keyword</th>
              <th className="py-2">Intent</th>
            </tr>
          </thead>
          <tbody>
            {seo.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="py-2 pr-4 font-medium text-slate-800">{r[0]}</td>
                <td className="py-2 text-slate-700">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card className="mt-3" tone="indigo">
        <h3 className="font-semibold">Geo‑Pairs</h3>
        <Tags items={geo} tone="indigo" />
      </Card>
    </section>
  );
}

/* ----------------------------- Positioning ------------------------------- */
function Positioning() {
  const lines = [
    "Turn every happy customer into your next marketing campaign—powered by AI, not ad dollars.",
    "We don’t just automate tasks—we install a self‑feeding UGC & affiliate engine that scales with every sale.",
    "Growth isn’t about spending more; it’s about unlocking the proof and advocacy you already own.",
    "Protect your team’s creative energy—let automation handle the outreach, tracking, and payouts.",
    "We transform post‑purchase chaos into a single loop that captures content, recruits advocates, and drives new revenue.",
    "You set the vision; our AI layer turns it into an endlessly compounding growth system.",
    "Think of us as the invisible partner orchestrating UGC, referrals, and repeat sales behind the scenes.",
    "Manual chasing is the enemy of momentum. We eliminate it—so word of mouth spreads at machine speed.",
    "When systems run themselves, your people can innovate. That’s how modern leaders win.",
    "The future belongs to brands that grow organically and automatically. We build that future—today.",
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">🧭 Positioning Statements</h2>
      <Card tone="slate">
        <Bullets items={lines} />
      </Card>
    </section>
  );
}

/* ------------------------- Lead Generation Summary Matrix ----------------- */
function LeadGenMatrix() {
  const rows = [
    [
      "Marketing Agencies",
      "USA",
      "Small marketing agencies offering branding, digital marketing, or performance services, with 3–25 employees and active social presence.",
    ],
    [
      "Marketing Agencies",
      "UK",
      "Independent creative or digital marketing studios with in‑house teams and visible portfolio work.",
    ],
    [
      "Marketing Agencies",
      "Switzerland",
      "Boutique marketing agencies targeting luxury or B2B clients, based in Zurich or Geneva, with multilingual websites.",
    ],
    [
      "Marketing Agencies",
      "Amsterdam",
      "Agile digital marketing firms serving startups and SaaS companies, typically 5–15 staff.",
    ],
    [
      "Marketing Agencies",
      "Singapore",
      "Performance marketing or content agencies serving tech or ecommerce brands across Asia.",
    ],
    [
      "Marketing Agencies",
      "Australia",
      "Independent marketing or ad agencies based in Sydney or Melbourne working with local SMEs or ecommerce brands.",
    ],
    [
      "E‑commerce Brands",
      "USA",
      "Shopify or WooCommerce brands doing $300K–$5M/year, with active paid ads and influencer presence.",
    ],
    [
      "E‑commerce Brands",
      "UK",
      "DTC product brands with professional websites, Instagram shops, and 10K+ followers.",
    ],
    [
      "E‑commerce Brands",
      "Switzerland",
      "Swiss‑based online stores selling lifestyle, wellness, or consumer goods with multilingual websites.",
    ],
    [
      "E‑commerce Brands",
      "Amsterdam",
      "Fashion, wellness, or fitness brands running an online store, active on TikTok or IG.",
    ],
    [
      "E‑commerce Brands",
      "Singapore",
      "High‑growth DTC ecommerce brands in skincare, tech gadgets, or lifestyle goods with SEA‑wide distribution.",
    ],
    [
      "E‑commerce Brands",
      "Australia",
      "Local or national brands selling homeware, apparel, or supplements online with recent ad activity.",
    ],
    [
      "Coaching/Education Brands",
      "USA",
      "Online coaches or info product creators with active Instagram/YouTube and at least one funnel or course.",
    ],
    [
      "Coaching/Education Brands",
      "UK",
      "Business, fitness, or life coaches offering group programs or digital products online.",
    ],
    [
      "Coaching/Education Brands",
      "Switzerland",
      "Executive coaches or niche education brands selling premium coaching packages to corporate clients.",
    ],
    [
      "Coaching/Education Brands",
      "Amsterdam",
      "Startup, fitness, or creative coaches with a personal brand and consistent video content.",
    ],
    [
      "Coaching/Education Brands",
      "Singapore",
      "Business or skill‑based coaching brands with online courses or live bootcamps.",
    ],
    [
      "Coaching/Education Brands",
      "Australia",
      "Mindset, fitness, or business coaches selling memberships or digital products via socials.",
    ],
    [
      "Boutique SaaS Startups",
      "USA",
      "Early‑stage SaaS tools serving marketers or small businesses, with clear UI and under 25 employees.",
    ],
    [
      "Boutique SaaS Startups",
      "UK",
      "Niche SaaS tools with active product updates and founder‑led social media presence.",
    ],
    [
      "Boutique SaaS Startups",
      "Switzerland",
      "Swiss‑based B2B SaaS platforms with localized websites and 3–15 team members.",
    ],
    [
      "Boutique SaaS Startups",
      "Amsterdam",
      "Tech‑forward SaaS startups targeting ecommerce, agencies, or HR tools with 1–3 pricing tiers.",
    ],
    [
      "Boutique SaaS Startups",
      "Singapore",
      "Productivity or fintech SaaS startups serving SEA or global SMEs, with clean landing pages.",
    ],
    [
      "Boutique SaaS Startups",
      "Australia",
      "SaaS platforms focused on marketing, operations, or CRM for small Australian businesses.",
    ],
    [
      "Professional Services",
      "USA",
      "Independent legal, consulting, or accounting firms with active websites and basic lead gen forms.",
    ],
    [
      "Professional Services",
      "UK",
      "Boutique consulting or law firms with 3–10 staff, strong client focus, and visible expertise.",
    ],
    [
      "Professional Services",
      "Switzerland",
      "Private legal, financial, or advisory services with upscale branding and client intake forms.",
    ],
    [
      "Professional Services",
      "Amsterdam",
      "Niche service providers like tax consultants or legal advisors with lean teams and digital booking.",
    ],
    [
      "Professional Services",
      "Singapore",
      "Private consultancies or boutique law firms with SME clients and digital presence.",
    ],
    [
      "Professional Services",
      "Australia",
      "Independent advisors, consultants, or legal practitioners with active websites and forms.",
    ],
    [
      "Real Estate Agencies",
      "USA",
      "Independent brokerages or property agencies using IDX sites and social media lead magnets.",
    ],
    [
      "Real Estate Agencies",
      "UK",
      "Boutique estate agencies with custom listings and lead forms, primarily in cities.",
    ],
    [
      "Real Estate Agencies",
      "Switzerland",
      "Property agencies selling or renting high‑end homes or condos, operating in bilingual regions.",
    ],
    [
      "Real Estate Agencies",
      "Amsterdam",
      "Small urban real estate teams managing rental, sales, or commercial listings with digital platforms.",
    ],
    [
      "Real Estate Agencies",
      "Singapore",
      "Boutique realtors with IG‑based lead gen or property highlight reels.",
    ],
    [
      "Real Estate Agencies",
      "Australia",
      "Lifestyle‑focused real estate agencies posting listings and video tours via Facebook/IG.",
    ],
    [
      "Personal Brands / Influencers",
      "USA",
      "Creators or influencers with digital offers (courses, coaching, services) and IG/YouTube audience.",
    ],
    [
      "Personal Brands / Influencers",
      "UK",
      "Public figures or creators selling products, coaching, or workshops through their personal site.",
    ],
    [
      "Personal Brands / Influencers",
      "Switzerland",
      "Digital‑first entrepreneurs building a brand presence around a niche (wellness, finance, tech).",
    ],
    [
      "Personal Brands / Influencers",
      "Amsterdam",
      "Solo brands using content to monetize an offer (newsletter, course, coaching).",
    ],
    [
      "Personal Brands / Influencers",
      "Singapore",
      "Influencers selling services, fitness plans, or business programs to SEA audiences.",
    ],
    [
      "Personal Brands / Influencers",
      "Australia",
      "Creators or coaches selling digital products via Linktree, Gumroad, or a hosted course platform.",
    ],
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        🧲 Lead Generation Summary Matrix
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4">Target Market</th>
              <th className="py-2 pr-4">Location</th>
              <th className="py-2">What to Look For</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100 align-top">
                <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">
                  {r[0]}
                </td>
                <td className="py-2 pr-4 whitespace-nowrap">{r[1]}</td>
                <td className="py-2 text-slate-700">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------------------- Landing-Page Frameworks (7 ICPs) ----------------- */
function LPFrameworks() {
  const blocks = [
    {
      name: "Marketing Agencies",
      awareness: "Most Aware / Product Aware",
      h1: "Launch Client UGC Campaigns in Days—No Extra Team Needed.",
      s1: "Automate capture, curation, and affiliate tracking so you deliver more social proof and revenue for every client.",
      h2: "Turn Every Client’s Customers into Their Top Creators.",
      s2: "Our AI loop gathers testimonials, recruits advocates, and reports ROI—white‑labeled for your agency.",
      autos: [
        "White‑label UGC capture portal",
        "Auto‑reward codes for customer submitters",
        "AI scout & recruit brand‑fit affiliates",
        "Link / code generation + payout tracking",
        "Live UGC & affiliate ROI dashboard",
        "One‑click export to client reports & decks",
      ],
    },
    {
      name: "E‑commerce Brands",
      awareness: "Product / Solution Aware",
      h1: "Scale Sales 30% with Customer Photos, Videos & Referrals—No Ads Required.",
      s1: "Collect authentic content, issue reward codes, and watch AI‑recruited affiliates bring in new buyers.",
      h2: "Your Shoppers Are Your Newest Creators—Let AI Activate Them.",
      s2: "One portal captures UGC, onboards advocates, and tracks every code‑driven sale.",
      autos: [
        "Checkout→UGC upload page with instant discount",
        "Auto‑approval & PDP/IG push of best content",
        "Affiliate code creation + tiered rewards",
        "Referral attribution in Shopify / Woo",
        "Payout automation via Stripe/PayPal",
        "Performance dashboard (UGC vs sales lift)",
      ],
    },
    {
      name: "Coaching / Education Brands",
      awareness: "Solution / Problem Aware",
      h1: "Turn Student Wins into Viral Proof & Paid Referrals—Automatically.",
      s1: "Graduates drop testimonials, get reward links, and send new students—while AI handles everything.",
      h2: "Let Success Stories Fill Your Next Cohort.",
      s2: "Our loop captures video reviews, publishes them, and tracks advocate commissions.",
      autos: [
        "Post‑program UGC request + reward voucher",
        "Video testimonial auto‑caption & publish",
        "Advocate link generation & LMS tagging",
        "Referral sale tracking + commission emails",
        "Leaderboard to gamify student referrals",
        "ROI dashboard: cost‑free acquisition rate",
      ],
    },
    {
      name: "Boutique SaaS Startups",
      awareness: "Product Aware",
      h1: "Crowd‑source Content & Pipeline from Your Own Users.",
      s1: "AI captures use‑case videos, recruits power users as affiliates, and attributes every referred demo.",
      h2: "User‑Generated Proof Meets Self‑Growing Partner Program.",
      s2: "One system fuels testimonials, case studies, and code‑based sign‑ups without draining dev cycles.",
      autos: [
        "In‑app prompt → UGC upload → credit deposit",
        "AI snippet creation for social / site embeds",
        "Power‑user scoring & affiliate invite",
        "Unique referral URLs with MRR tracking",
        "Automated payouts once threshold met",
        "Dashboard: UGC views → trials → paid plans",
      ],
    },
    {
      name: "Professional Services",
      awareness: "Problem Aware",
      h1: "Let Clients Tell Your Story—and Bring the Next Ones with Them.",
      s1: "Collect video testimonials, issue referral links, and track new engagements while you bill hours.",
      h2: "From Case Study to Client Pipeline in One Click.",
      s2: "Our AI portal secures approvals, publishes proof, and rewards referrals—hands‑free.",
      autos: [
        "Testimonial request + consent form",
        "Auto‑branded case‑study thumbnails",
        "Referral code / link delivery to happy clients",
        "Lead→consult call tracking in CRM",
        "Gift‑card / fee‑credit payout automation",
        "Impact dashboard for trust & ROI metrics",
      ],
    },
    {
      name: "Real‑Estate Agencies",
      awareness: "Problem / Solution Aware",
      h1: "Turn Every Closing Photo into Your Next Listing Lead.",
      s1: "Sellers & buyers upload snapshots, get referral codes, and send hot prospects—AI tracks it all.",
      h2: "Happy Homeowners, Endless Referrals—On Autopilot.",
      s2: "A single portal captures move‑in moments, recruits advocates, and feeds your CRM.",
      autos: [
        "Closing‑day UGC capture link + gift card",
        "Auto‑publish to social + listing pages",
        "Advocate link/code for friend referrals",
        "Lead qualification bot → agent calendar",
        "Commission calculation & payout reminders",
        "Weekly dashboard: UGC reach & referral deals",
      ],
    },
    {
      name: "Personal Brands / Influencers",
      awareness: "Unaware / Problem Aware",
      h1: "Let Fans Create Content—and Earn with You—While You Sleep.",
      s1: "AI portal gathers fan videos, drops reward links, and tracks every sale so you stay focused on creation.",
      h2: "Your Community Is Your Marketing Team—Activate Them.",
      s2: "One system captures UGC, spins affiliate codes, and reports revenue—all without extra staff.",
      autos: [
        "Bio‑link UGC upload → instant shout‑out coupon",
        "Auto‑resize & repost fan clips to TikTok/Shorts",
        "Advocate link generation & tiered perks",
        "Sales attribution via Shopify/Gumroad APIs",
        "Auto‑payouts or merch drops to top advocates",
        "Dashboard: content reach → revenue lift",
      ],
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">
        🚀 Landing‑Page Frameworks Per Target Market
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
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
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">{b.name}</h3>
              <span className="text-[11px] text-slate-500">{b.awareness}</span>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">{b.h1}</p>
              <p className="text-sm text-slate-700">{b.s1}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">{b.h2}</p>
              <p className="text-sm text-slate-700">{b.s2}</p>
            </div>
            <h4 className="mt-3 font-medium text-slate-800">Key Automations</h4>
            <Bullets items={b.autos} />
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ SEO Blog List ----------------------------- */
function SEO() {
  return null;
}

function Blogs() {
  return null;
}

function SEO_BlogFrameworks() {
  const posts = [
    [
      "The Zero‑Ad‑Spend Growth Loop: How UGC & Affiliates Replace Paid Traffic",
      "Discover the AI workflows turning customers into content‑driven sales channels—no ad budget required.",
    ],
    [
      "UGC Landing Pages 101: Capture Photos & Videos That Convert at 161% Higher",
      "Step‑by‑step guide to building reward‑driven portals that pump out authentic content.",
    ],
    [
      "AI Affiliate Recruitment: Find, Vet, and Reward Brand Advocates on Autopilot",
      "See how machine learning replaces manual scouting and spreadsheet payouts.",
    ],
    [
      "From Unboxing to Checkout: 7 UGC Touch‑Points That Lift E‑commerce Revenue",
      "Map the customer journey and drop UGC in the moments that matter.",
    ],
    [
      "Case Study: Scaling an E‑com Brand to 40% New Revenue With $0 Ad Spend",
      "Exact automations we installed—capture, recruit, amplify.",
    ],
    [
      "Why SMEs in [City] Are Dumping Ads for UGC‑Powered Growth (GEO‑Optimised)",
      "Local success stories proving organic loops beat rising CAC.",
    ],
    [
      "No‑Code Stacks for UGC Automation: Zapier vs Make vs N8N",
      "Tool comparison for founders who need results fast.",
    ],
    [
      "The Psychology Behind Reward‑Driven Content Creation",
      "Why discounts, points, and recognition unlock a flood of testimonials.",
    ],
    [
      "Building a Creator‑First Affiliate Program: Tiered Rewards & AI Payouts",
      "Design structures that keep advocates posting month after month.",
    ],
    [
      "Measuring Success: Dashboards that Track UGC Reach, Sales, and ROI",
      "KPIs every growth team should watch—and how to automate reporting.",
    ],
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">✍️ SEO Blog Frameworks</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{p[0]}</h3>
            <p className="text-sm text-slate-700 mt-1">{p[1]}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Next Steps ------------------------------ */
function NextSteps() {
  const steps = [
    {
      title: "1. Brand Identity & Core Assets",
      goal: "Establish your brand presence for authority, coherence, and positioning",
      tasks: [
        "Finalize brand name & secure domain",
        "Create logo, color palette, fonts",
        "Build company bio, tagline, positioning statement",
      ],
      tools: "Canva / Looka / Figma / Namecheap",
    },
    {
      title: "2. Website Launch (Authority Hub + SEO Engine)",
      goal: "Create a simple, clear, high‑conversion website with SEO and GEO structure",
      tasks: [
        "Build homepage (hero, service stack, CTA)",
        "Create 1 landing page per ICP niche (7 total)",
        "Add SEO + GEO blog structure (12‑post framework)",
        "Integrate Calendly + booking automation",
        "Add proof layer (pilot results or simulated dashboards)",
      ],
      tools: "Webflow / Framer / Wordpress / Calendly",
    },
    {
      title: "3. Prospecting Engine & Outreach System",
      goal: "Turn ICP clarity into daily booked calls via cold email",
      tasks: [
        "Build lead scraping SOP using Upwork/Clay/Apollo",
        "Create 6 segment‑based cold email scripts",
        "Set up domain warming + outreach (Instantly / Smartlead)",
        "Integrate CRM (Airtable or Pipedrive) with lead tagging",
        "Build email‑to‑call funnel (email → LP → book)",
        "Assign inbox & reply SOPs to VA",
      ],
      tools: "Instantly, Clay, Calendly, Airtable",
    },
    {
      title: "4. Automation Demo Stack (Client‑Facing Use Cases)",
      goal: "Show vs. tell—use automation to demonstrate",
      tasks: [
        "Content repurposing engine",
        "CRM‑integrated booking flow",
        "Lead magnet → nurture → call",
        "Record 2 Loom walkthroughs and embed",
      ],
      tools: "Zapier / Make / Notion / Airtable",
    },
    {
      title: "5. Client Onboarding & Delivery System",
      goal: "Prepare backend to deliver once leads convert",
      tasks: [
        "Create onboarding form (Notion / Tally)",
        "Client project dashboard template (Notion)",
        "Internal SOPs for delivery tasks",
        "Connect workflows to Slack or CRM for alerts",
      ],
      tools: "Notion, Airtable, Tally",
    },
    {
      title: "6. Content & Thought Leadership Launch",
      goal: "Build omnipresence and authority in AI automation",
      tasks: [
        "Finalize 4 core content pillars",
        "Batch 10–15 posts for LinkedIn & IG",
        "Launch blog content engine (repurpose → carousels → shorts)",
        "Post 3x/week minimum",
      ],
      tools: "Notion, Canva, CapCut, LinkedIn Scheduler",
    },
    {
      title: "7. Delegation & Systemizing",
      goal: "Prepare for scale by assigning repeatable tasks",
      tasks: [
        "Hire VA (email follow‑up, scraping, scheduling)",
        "Record SOPs with Loom + Notion",
        "Assign recurring tasks: inbox, CRM updates, outreach tracking",
        "Create weekly performance dashboard",
      ],
      tools: "Notion, Loom, Upwork",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">NEXT STEPS</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Card
            key={i}
            tone={
              (i % 4 === 0 && "indigo") ||
              (i % 4 === 1 && "emerald") ||
              (i % 4 === 2 && "amber") ||
              "rose"
            }
          >
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-700 mt-1">
              <strong>Goal:</strong> {s.goal}
            </p>
            <h4 className="mt-2 font-medium">Tasks</h4>
            <Bullets items={s.tasks} />
            <p className="text-xs text-slate-500 mt-2">
              <strong>Tools:</strong> {s.tools}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- Summary of Steps ---------------------------- */
function SummarySteps() {
  const rows = [
    ["1. Brand Identity Setup", "Foundation & authority visuals", "2–3 days"],
    [
      "2. Website Launch (SEO + GEO)",
      "Convert traffic + rank + explain offer",
      "1–2 weeks",
    ],
    [
      "3. Outreach & Prospecting Engine",
      "Daily client acquisition system",
      "7 days",
    ],
    [
      "4. Automation Demo Stack",
      "Build trust + clarity in the solution",
      "1 week",
    ],
    [
      "5. Onboarding & Delivery System",
      "Be ready to fulfill with structure",
      "3–5 days",
    ],
    [
      "6. Content Engine Launch",
      "Visibility + credibility for the brand",
      "1 week to start",
    ],
    ["7. Delegation & SOPs", "Time leverage + scalability", "1–2 weeks"],
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">✅ Summary of Updated Steps</h2>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="py-2 pr-4">Step</th>
                <th className="py-2 pr-4">Goal</th>
                <th className="py-2">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">
                    {r[0]}
                  </td>
                  <td className="py-2 pr-4">{r[1]}</td>
                  <td className="py-2">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

function Bullets({ items = [] as string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Tags({
  items = [] as string[],
  tone = "slate" as Tone,
}: {
  items?: string[];
  tone?: Tone;
}) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
  };
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span key={i} className={`px-2 py-1 rounded-full border ${map[tone]}`}>
          {t}
        </span>
      ))}
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="text-sm font-medium text-slate-800">{value}</div>
    </div>
  );
}
