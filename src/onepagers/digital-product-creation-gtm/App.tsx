import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Digital Product Creation & GTM — All‑In‑One Guide (Single‑file App)
 *
 * No external UI libs required. Pure React + TailwindCSS.
 * Copy this into App.tsx of a "React + Tailwind" template (e.g., CodeSandbox/Vite).
 *
 * Features
 * - Sticky header with quick actions (Print / Expand / Collapse)
 * - Left ToC (auto‑generated from H2 headings)
 * - Content renderer for a Markdown‑lite source (headings, lists, quotes, code)
 * - Client‑side search with match highlighting
 * - Collapsible sections (per H2)
 * - Copy‑to‑clipboard for code blocks
 */

// ——————————————————————————————————————————————————————————
// 1) Paste the full guide content here (Markdown‑lite)
//    This is the "Digital Product Creation & GTM — Step‑By‑Step SOP" with ALL information.
// ——————————————————————————————————————————————————————————
const RAW =
  `# Digital Product Creation & GTM — Step‑by‑Step SOP (All‑In‑One Guide)

> A complete, practical, and sequential operating guide to ideate, validate, build, launch, and scale digital products—leaving nothing out.

---

## 0) Read This First — Operating Mindset

- **Prime Directive:** Ship → Measure → Learn → Iterate. The only failure is **not spinning**.
- **Bias to Action:** Imperfect and live beats perfect and never shipped.
- **Data over Ego:** Every result is a datapoint; decisions follow evidence.
- **Tool Leverage:** Use AI to compress research, drafting, creative, and analysis cycles.

**Guardrails**
- Time‑box experiments (7–14 days per test loop).
- Define success/fail thresholds pre‑launch (no moving goalposts).
- Document all tests (inputs, changes, outcomes, learnings).

---

## 1) Prerequisites & Tooling

**Accounts & Infrastructure**
- Payments: Stripe and/or PayPal (live + test modes).
- Storefront: Digital‑product platform (e.g., Gumroad/Etsy/your preferred DP platform) **or** your own site/cart.
- Tracking: Google Tag Manager + GA4, Meta Pixel, Google Ads conversion tag.
- Ad Platforms: Meta Ads Manager, Google Ads.
- Email: ESP (e.g., ConvertKit, Beehiiv, Klaviyo). DMARC/SPF/DKIM configured.
- File design & packaging: Canva (templates), Google Docs, PDF export.
- Analytics workspace: Notion/Sheets for dashboards and SOPs.
- Link tracking: UTM builder spreadsheet + shortener (e.g., Bitly).

**Folder & Naming Conventions**
- \`/ProductName/01_Research\`, \`/02_Validation\`, \`/03_Assets\`, \`/04_Store\`, \`/05_Ads\`, \`/06_Influencers\`, \`/07_Content\`, \`/08_Analytics\`, \`/09_Legal\`.
- Files: \`YYYYMMDD_context_vX.ext\` (e.g., \`20251006_offer_v1.docx\`).

---

## 2) Roles & RACI (Single‑Founder? You own all.)

- **Product Lead (P)**: Topic, outline, MVP, QA.
- **Growth Lead (G)**: Influencers, ads, content.
- **Design (D)**: Covers, thumbnails, mockups, layout.
- **Ops (O)**: Payments, delivery automation, support, analytics.

**Cadence**: Weekly stand‑up (30 min): KPIs ↔ next tests ↔ blockers.

---

## 3) Phase A — Topic Discovery (2–3 days)

### A1) Skill‑Led Path
1. Brain‑dump 10–20 topics from skills, hobbies, and work wins.
2. Map **Audience → Problem → Outcome** for each topic.
3. Draft a *Unique Value Zone (UVZ)* per idea (Market → Niche → **UVZ**).
   - Example: Digital planners → Wedding planners → **Destination wedding budget tracker**.

### A2) AI‑Led Path
Use AI to scan markets and propose topics with evidence.

**Prompt — Topic Radar**
\`\`\`
You are a market analyst. Propose 20 digital‑product topics that show proven buyer demand now. For each: (a) audience, (b) specific problem, (c) tangible outcome, (d) top 3 competing product angles, (e) where demand is visible (marketplaces/ad types), (f) initial price tier, (g) 3 UVZ angles.
Return as a table.
\`\`\`

### A3) Scoring Matrix (choose 1–3 to validate)
- Demand Evidence (0–5)
- Skill Advantage (0–5)
- UVZ Strength (0–5)
- Monetization Ladder Potential (0–5)
- Build Speed (0–5)

**Score = 0.35*Demand + 0.2*UVZ + 0.2*Monetization + 0.15*Build + 0.1*Skill**

---

## 4) Phase B — Validation (2–4 days)

### B1) Manual Triangulation
1. **ClickBank**: Filter your category → sort by **Gravity**. Note offers with Gravity > ~20 as signals. Capture pitch, hook, price, funnel.
2. **Meta Ads Library**: Search your keywords; log: advertiser count, **ad age** (≥30–90 days = stronger), creative variety, angles.
3. **Marketplaces** (Etsy/Gumroad/etc.): Sort by top sellers/“bestseller”. Grab pricing, bundles, reviews (pain/feature gaps).
4. **Review Mining**: Export 50–200 reviews; tag pain points, requested features, objections.

**Validation Sheet Columns**: Source, URL, Offer, Price, Hook, Proof used, Bonus stack, Gravity/Signals, Notes, Your UVZ improvement.

### B2) AI‑Assisted Validation
- Feed the manual findings to AI; ask for viability verdict, opportunity gaps, and 3 UVZ angles that avoid red‑ocean parity.

**Gate 1 — Proceed if:**
- ≥3 external signals (CB gravity, ad longevity, marketplace bestsellers).
- Clear UVZ that fixes ≥2 competitor complaints.
- Price tolerance validated by comps.

---

## 5) Phase C — Store Page Before Build (1–2 days)

### C1) Offer Architecture
- **Promise**: One‑sentence transformation.
- **Avatar**: Who it’s for (role, stage, context).
- **Mechanism**: Your method/UVZ.
- **Deliverables**: What they get (bulleted).
- **Bonuses**: Fast‑start assets; implementation aids.
- **Guarantee**: Clear terms (time‑boxed, conditions).
- **FAQ**: Objections (time, complexity, results, support, refunds, license).

### C2) Page Wireframe
1. **Hero**: H1 outcome + subhead + CTA.
2. **Credibility/Proof**: Demos, screenshots, testimonials (as available).
3. **Inside the Product**: Modules/chapters/templates.
4. **Benefits**: Before/after, use cases, who it’s for/not for.
5. **Offer Stack**: Core + bonuses + value anchors.
6. **Guarantee**
7. **FAQs**
8. **Final CTA** (with urgency/scarcity when relevant).

**Prompt — Landing Copy**
\`\`\`
Write a high‑converting landing page for [PRODUCT] for [AVATAR] who want [OUTCOME] without [UNDESIRED THING]. Include: hero, subhead, bullets, “what’s inside”, benefits, objections with answers, guarantee (clear terms), and 3 CTA variants.
Tone: concise, outcome‑driven, plain English.
\`\`\`

### C3) Tech Setup
- Connect payment provider; test $1 sandbox product.
- Add conversion tracking (GTM/Pixel/GA4 events for Purchase/InitiateCheckout/ViewContent).
- Configure order delivery email + download link + license terms.
- Create UTM templates for channels: \`utm_source=instagram&utm_medium=influencer&utm_campaign=launch_v1&utm_content=story1\`.

**Gate 2 — Proceed if:** You would personally buy it from the page; 2–3 peers confirm clarity and desire.

---

## 6) Phase D — MVP Creation (1–3 days)

### D1) Choose MVP Type
- **Ebook (Gateway)**: fastest, lowest friction. Target 7 chapters / 7,000–15,000 words.
- Add **templates/worksheets/checklists** to increase utility.

### D2) Draft with AI
**Prompt — Ebook Draft**
\`\`\`
You are a subject‑matter analyst and instructional designer. Create an ebook outline and full draft for [TOPIC] targeting [AVATAR] to achieve [OUTCOME].
Include 7 chapters, each with: goal, step‑by‑step instructions, examples, a mini checklist, and a key metric to track. End with FAQs, quick‑start guide, and “next steps”.
Return as structured markdown.
\`\`\`

### D3) Design & Packaging
- Import draft into Canva A4 ebook template; add cover, chapter dividers, icons.
- Insert screenshots/demos; compress images for <15MB PDF.
- Add **License & Usage** page; include support email.
- Export \`PDF (standard)\` and \`PDF (print)\`.

### D4) QA
- Spell/grammar check; fact spot‑check; remove jargon; add page numbers.
- Test download, device rendering (desktop/mobile), and accessibility (alt text where relevant).

**Gate 3 — Ready** when MVP is exportable, legible, and page matches promise.

---

## 7) Phase E — Launch Traffic (Days 1–14 post‑MVP)

### E1) Influencer Arbitrage (Start Here)

**Prospect List Build (Daily 60–90 min)**
- Instagram: search keywords/hashtags; open a suitable micro‑influencer (20–50k followers) → use **Suggested** to find peers.
- Log in sheet: handle, followers, avg story views, reel views, niche fit, contact path.

**Qualification Targets**
- ≥3% engagement; ≥10k views on recent reels; consistent posting; positive growth; audience age 17+; geo fit.

**Viability Calculator (example)**
- \`Potential Clickers = StoryViews × EngagementRate\`
- \`Potential Buyers = Potential Clickers × ConvRate\` (use 2–4% to be conservative)
- \`Revenue = Potential Buyers × Price\`

**Outreach Scripts**
- **DM #1:** “Hey [Name], quick partnership idea for your audience—commission‑only, no upfront. Open to details?”
- **Follow‑ups:** “Bumping this 👍 can I send a one‑pager?” → “Last nudge—happy to circle back later.”

**Data Request (on positive reply)**
- Avg story views (7d), audience age/location, link clicks (30d).

**Deal Structure**
- Commission 30–60% per sale; unique affiliate link + coupon; weekly or biweekly payout.
- Simple agreement: scope, disclosure (#ad), tracking, payout terms, refund adjustments.

**Promo Kit (you provide)**
- 3‑story sequence with copy, stickers, swipe‑ups; 2 reels; 5 stills; CTA overlays; tracking links.

**3‑Story Structure**
1) Poll/Warm‑up (“Want me to show you how to [Outcome]?”)
2) Method + proof (screens, concise)
3) CTA (“Early access for my followers—link here”) + urgency

**Compliance**: Ask for #ad or “paid partnership” tags.

**Daily Motion**: 150 outreaches/day; follow up 2–3× daily for max 3 days; move on.

### E2) Paid Ads (After 1–3 sales/proof)

**Before You Spend**
- Pixel/Tags firing; Purchase event verified.
- Conversion action in Google Ads set to Primary.

**Google Search — Setup**
1) Campaign: Search → Website traffic → Manual CPC (enhanced) or Max Conversions (if events stable).
2) Ad groups: 3–5 themes ("notion planner", "content planner template", etc.).
3) Keywords: exact + phrase; start with 10–30; negatives list (free, pirated, unrelated terms).
4) Ads: 3 RSAs/ad group; 10–12 headlines (benefit + UVZ + price + CTA), 4 descriptions.
5) Budget: ≈ product price/day to start; schedule all day; locations where buyers are.
6) Extensions: Sitelinks (Bonuses, What’s Inside, Guarantee), Callouts (Lifetime access, Instant download).

**Meta (FB/IG) — Setup**
1) Objective: Sales; Conversion location = Website; Pixel = verified.
2) Structure: ABO to start; 3–5 ad sets (broad interests + lookalike if traffic exists).
3) Creatives: 5 images + 5 videos. Use **AIDA** & **PAS** copy formulas; keep to 3 angles.
4) Budget: ≈ product price/ad set/day; run 7 days; kill bottom 30–40% by CPA; duplicate winners.
5) Placements: Advantage+ placements initially; later trim.
6) Landing page: <2.5s load; above‑fold CTA; social proof.

**KPI Benchmarks (initial)**
- Click‑thru (Search) ≥ 4–6%; (Meta) ≥ 0.8–1.5%
- LP CVR 2–5% (cold); 6–12% (warm)
- CAC ≤ 30–50% of price at MVP stage; ROAS ≥ 1.5x target in tests.

### E3) Organic Content (Compounding)

**Faceless Funnel**
- 3–5 shorts/week; each: Hook → Micro‑lesson/demo → CTA.
- Align topics directly to product outcomes.

**Hook Formulas**
- “I wasted 6 months doing X—do this instead.”
- “3 Notion tweaks that doubled my output.”
- “Steal my [template] that saves 4 hrs/week.”

**CTA**: “Get the exact template (link in bio).”

---

## 8) Phase F — Pricing, Offers, Monetization Ladder

**Ladder**
- **Gateway** $9–$49 (ebook/checklists)
- **Core** $29–$149 (templates/toolkits/mini‑course)
- **Advanced** $149–$999+ (full system/automation/white‑label)
- **Continuity** $9–$49/mo (updates/community/automation credits)

**Launch Levers**
- Fast‑action bonus; limited‑time price; money‑back guarantee (e.g., 14 days if unopened/unused templates criteria).

**Price Tests**: 3 price points × 2 bonus stacks; measure CVR and profit per visitor.

---

## 9) Phase G — Post‑Purchase, Retention & LTV

**Delivery & Onboarding**
- Thank‑you page with download + quick‑start video (3–5 min).
- Email #1 (Instant): Receipt + download + license.
- Email #2 (Day 1): Setup checklist.
- Email #3 (Day 3): Use‑case demo + success story.
- Email #4 (Day 7): Troubleshooting + “reply if stuck”.
- Email #5 (Day 10): Upsell/cross‑sell (course/templates bundle).
- Email #6 (Day 14): Review request + affiliate invite.

**Support SOP**
- SLA: <24h response on business days.
- Macro replies: delivery issues, refund policy, how‑to resources.

**Refund Policy**
- Plain‑English terms; specify eligibility window and conditions.

---

## 10) Phase H — Analytics, Dashboards & Cadence

**Core Metrics**
- Visitors, CTR, CPC/CPV, LP CVR, ATC rate, Purchase CVR, AOV, CAC, ROAS, Refund%.
- Influencer: Clicks, Sales, Revenue, Commission %, ROAS by partner.

**Formulas**
- \`CAC = Spend / New Customers\`
- \`ROAS = Revenue / Spend\`
- \`Profit/Visitor = (Revenue – Spend – Commissions) / Sessions\`

**Weekly Review Template**
- Top 3 wins; Top 3 issues; Hypotheses; Next 3 tests (owner, due date, success metric).

---

## 11) Governance, Risks & Controls

**Common Pitfalls**
- Building big before validating.
- Over‑targeted niches with no buyers.
- Weak offer stack / unclear outcome.

**Controls**
- Gate reviews after Phases B/C/D.
- 7‑day experiment windows; lock criteria.
- Central change log.

---

## 12) Legal & Compliance (Non‑exhaustive)

- **License Terms**: Personal vs. commercial use; no redistribution/resale without permission; number of seats.
- **White‑Label**: Branding rights, support responsibilities, pricing floor, updates cadence, rev‑share, termination.
- **Ads**: Platform policies; no misleading claims; required disclosures.
- **Privacy**: Collect only necessary data; secure storage; comply with applicable laws.
- **Influencers**: #ad disclosures; clear payout timing; clawbacks on refunds.

---

## 13) 30‑60‑90 Plan (Sample)

**Days 0–30**
- Pick 1–3 topics → validate → pick winner.
- Build store page → connect payments/tracking.
- Draft & design MVP → export.
- Outreach 1: build 1,000‑lead influencer list; 150 DMs/day; onboard 3–5 partners.

**Days 31–60**
- Scale to 10–20 active partners; iterate 3‑story kits.
- Start Google Search + low‑budget Meta tests.
- Launch faceless channel: 3–5 posts/week.
- Add template bonus pack; test price.

**Days 61–90**
- Promote top SKU; add course/toolkit upsell.
- Formalize dashboards; SOPs for outreach/ads/content.
- Explore continuity (updates/community) if retention signals exist.

---

## 14) Appendices — Ready‑to‑Use Templates

### A) UTM Builder
` +
  "`" +
  `https://yourstore.com/product?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]&utm_content=[creative]` +
  "`" +
  `

### B) Influencer One‑Pager (paste into doc)
- What: [Product] for [Avatar] to achieve [Outcome].
- Why it works: 3 bullets (proof/benefits).
- Commission: __% of each sale; weekly payouts.
- How to promote: 3‑story sequence + link.
- Tracking: Unique affiliate link + coupon.
- Disclosure: Use #ad or paid partnership tag.

### C) Mini Affiliate Agreement (extract)
- Scope: Promote [Product] via social posts/stories.
- Tracking: Sales via unique link/coupon only.
- Commission & Payouts: __% net, paid weekly; refunds deducted.
- Content: Must follow platform policies; no misleading claims.
- Termination: Either party can terminate with 3‑day notice.

### D) VSL Script Outline (3–4 min)
1. Problem & stakes (30s)
2. Mechanism/UVZ (45s)
3. Demo/What’s inside (60s)
4. Proof & objections (45s)
5. Offer, bonuses, guarantee, CTA (30s)

### E) Ad Copy Starters
- **PAS:** Problem → Agitation → Solution (+ CTA)
- **AIDA:** Attention → Interest → Desire → Action

### F) QA Launch Checklist
- Payments live; test purchase OK.
- Pixel/Tags fire; conversions recorded.
- Download link works; email delivery sent.
- Page loads <2.5s; mobile optimized.
- All UTMs verified; 404s resolved.

### G) Spreadsheet Schemas
**Leads (Influencers)**: handle | followers | story views | ER% | geo | vertical | contact_status | last_touch | deal_terms | clicks | sales | revenue | commission

**Ads**: date | platform | campaign | adset | creative | spend | clicks | ctr | cpc | cvr | purchases | cac | roas | notes

**Sales**: date | sku | price | discount | source | medium | campaign | content | units | refunds | net | notes

---

## 15) Close — The Only Lever That Never Runs Out

The market rewards speed of learning. Ship the MVP, gather signal, and **spin again**. One sale proves possibility; ten sales prove repeatability; one hundred justify scale. Go.
`;

// ——————————————————————————————————————————————————————————
// 2) Markdown‑lite parser → Node tree
// ——————————————————————————————————————————————————————————

type NodeType =
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "ul"
  | "ol"
  | "li"
  | "code"
  | "hr"
  | "blockquote";
interface NodeItem {
  type: NodeType;
  text?: string; // for p/h1/h2/h3/blockquote
  items?: string[]; // for ul/ol
  code?: string; // for code
}

function renderInline(text: string, q: string) {
  if (!text) return null;
  // Split on **bold** segments and keep the delimiters
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const isBold = part.startsWith("**") && part.endsWith("**");
        const inner = isBold ? part.slice(2, -2) : part;
        // Re-use your highlight() so search still works inside bold text
        const content = highlight(inner, q);
        return isBold ? (
          <strong key={i} className="font-semibold">
            {content}
          </strong>
        ) : (
          <React.Fragment key={i}>{content}</React.Fragment>
        );
      })}
    </>
  );
}

function parseMarkdownLite(src: string): NodeItem[] {
  const lines = src.split(/\r?\n/);
  const nodes: NodeItem[] = [];
  let inCode = false;
  let codeBuffer: string[] = [];
  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (listType && listBuffer.length) {
      nodes.push({ type: listType, items: [...listBuffer] });
      listBuffer = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\t/g, "    ");

    // code fences
    if (line.trim().startsWith("```")) {
      if (!inCode) {
        inCode = true;
        codeBuffer = [];
        flushList();
      } else {
        inCode = false;
        nodes.push({ type: "code", code: codeBuffer.join("\n") });
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(raw);
      continue;
    }

    // horizontal rule
    if (/^\s*---+\s*$/.test(line)) {
      flushList();
      nodes.push({ type: "hr" });
      continue;
    }

    // headings
    if (line.startsWith("# ")) {
      flushList();
      nodes.push({ type: "h1", text: line.slice(2).trim() });
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      nodes.push({ type: "h2", text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      nodes.push({ type: "h3", text: line.slice(4).trim() });
      continue;
    }

    // lists
    if (/^\s*\-\s+/.test(line)) {
      const item = line.replace(/^\s*\-\s+/, "");
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      listBuffer.push(item);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const item = line.replace(/^\s*\d+\.\s+/, "");
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      listBuffer.push(item);
      continue;
    }

    // blockquote
    if (/^>\s?/.test(line)) {
      flushList();
      nodes.push({
        type: "blockquote",
        text: line.replace(/^>\s?/, "").trim(),
      });
      continue;
    }

    // blank → paragraph break
    if (!line.trim()) {
      flushList();
      continue;
    }

    // paragraph
    flushList();
    nodes.push({ type: "p", text: line });
  }
  flushList();
  return nodes;
}

// ——————————————————————————————————————————————————————————
// 3) Utilities — highlight matches; build sections from H2 anchors
// ——————————————————————————————————————————————————————————

interface Section {
  id: string;
  title: string;
  start: number; // index in nodes
  end: number; // exclusive
}

function useGuide(nodes: NodeItem[]) {
  const sections = useMemo<Section[]>(() => {
    const s: Section[] = [];
    let current: Section | null = null;
    nodes.forEach((n, idx) => {
      if (n.type === "h2" && n.text) {
        if (current) current.end = idx; // close previous
        const id = slugify(n.text);
        current = { id, title: n.text, start: idx, end: nodes.length };
        s.push(current);
      }
    });
    return s;
  }, [nodes]);
  return { sections };
}

function slugify(t: string) {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function highlight(text: string, q: string) {
  if (!q) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "ig"));
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === q.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 rounded px-0.5">
            {p}
          </mark>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </>
  );
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ——————————————————————————————————————————————————————————
// 4) UI Primitives (no external deps)
// ——————————————————————————————————————————————————————————

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={
      "h-4 w-4 transition-transform " + (open ? "rotate-90" : "rotate-0")
    }
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M7 5l6 5-6 5V5z" />
  </svg>
);

const CopyBtn: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100 active:scale-[.98]"
      aria-label="Copy to clipboard"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

// ——————————————————————————————————————————————————————————
// 5) Main App
// ——————————————————————————————————————————————————————————

export default function App() {
  const nodes = useMemo(() => parseMarkdownLite(RAW), []);
  const { sections } = useGuide(nodes);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const o: Record<string, boolean> = {};
    sections.forEach((s) => (o[s.id] = true));
    return o;
  });

  useEffect(() => {
    // ensure open state is initialized after sections available
    setOpen((prev) => {
      const next: Record<string, boolean> = { ...prev };
      sections.forEach((s) => {
        if (next[s.id] === undefined) next[s.id] = true;
      });
      return next;
    });
  }, [sections.length]);

  const filteredSections = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections.filter((sec) => {
      const slice = nodes.slice(sec.start, sec.end);
      return slice.some((n) => {
        const hay = (
          n.text || (n.items ? n.items.join("\n") : n.code || "")
        ).toLowerCase();
        return hay.includes(q);
      });
    });
  }, [query, sections, nodes]);

  const scrollTo = (id: string) => {
    const el = document.getElementById("sec-" + id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleAll = (v: boolean) => {
    const next: Record<string, boolean> = {};
    sections.forEach((s) => (next[s.id] = v));
    setOpen(next);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">
              DP
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">
                Digital Product Creation & GTM — All‑In‑One Guide
              </h1>
              <p className="text-xs text-slate-500">
                Step‑by‑step SOP • Copy‑ready prompts • Checklists • Formulas
              </p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search this guide…"
              className="px-3 py-1.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-sm rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Print
            </button>
            <button
              onClick={() => toggleAll(true)}
              className="px-3 py-1.5 text-sm rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Expand all
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="px-3 py-1.5 text-sm rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Collapse all
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* ToC */}
        <aside className="hidden lg:block sticky top-[64px] h-[calc(100vh-80px)] overflow-auto pr-2">
          <div className="p-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
              Sections
            </p>
            <nav className="space-y-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className="block w-full text-left text-sm px-2 py-1 rounded-lg hover:bg-slate-100"
                >
                  {sec.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <section className="space-y-4">
          {filteredSections.length === 0 && (
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm text-sm text-slate-600">
              No matches. Try a different search query.
            </div>
          )}

          {filteredSections.map((sec) => {
            const localNodes = nodes.slice(sec.start, sec.end);
            const isOpen = open[sec.id] ?? true;
            return (
              <article
                key={sec.id}
                id={"sec-" + sec.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <header
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() =>
                    setOpen((prev) => ({ ...prev, [sec.id]: !isOpen }))
                  }
                >
                  <h2 className="font-semibold text-slate-900 text-base lg:text-lg flex items-center gap-2">
                    <Chevron open={isOpen} />
                    {sec.title}
                  </h2>
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    {isOpen ? "Collapse" : "Expand"}
                  </button>
                </header>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <SectionRenderer nodes={localNodes} query={query} />
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 pb-10 pt-2 text-center text-xs text-slate-500">
        Built for copy‑paste into a React + Tailwind project. No external
        libraries required.
      </footer>
    </div>
  );
}

// ——————————————————————————————————————————————————————————
// 6) Section & Node renderers
// ——————————————————————————————————————————————————————————

const SectionRenderer: React.FC<{ nodes: NodeItem[]; query: string }> = ({
  nodes,
  query,
}) => {
  // Skip the first h2 (already displayed as the accordion header)
  const body = nodes.slice(1);
  const chunks: React.ReactNode[] = [];
  let i = 0;
  while (i < body.length) {
    const n = body[i];
    if (!n) {
      i++;
      continue;
    }
    if (["h1", "h2"].includes(n.type)) {
      i++;
      continue;
    }

    if (n.type === "h3") {
      chunks.push(
        <h3
          key={i}
          className="text-sm lg:text-base font-semibold text-slate-900 mt-4 mb-2"
        >
          {renderInline(n.text || "", query)}
        </h3>
      );
      i++;
      continue;
    }
    if (n.type === "p" || n.type === "blockquote") {
      const base = (
        <p
          key={i}
          className={
            "text-sm leading-6 text-slate-700 " +
            (n.type === "blockquote"
              ? "border-l-4 border-slate-300 pl-3 italic text-slate-600"
              : "")
          }
        >
          {renderInline(n.text || "", query)}
        </p>
      );
      chunks.push(base);
      i++;
      continue;
    }
    if (n.type === "ul" || n.type === "ol") {
      const Tag: any = n.type === "ul" ? "ul" : "ol";
      chunks.push(
        <Tag
          key={i}
          className="list-inside pl-5 my-2 text-sm text-slate-700 space-y-1"
        >
          {(n.items || []).map((it, idx) => (
            <li
              key={idx}
              className={n.type === "ol" ? "list-decimal" : "list-disc"}
            >
              {renderInline(it, query)}
            </li>
          ))}
        </Tag>
      );
      i++;
      continue;
    }
    if (n.type === "code") {
      chunks.push(
        <div key={i} className="relative my-3">
          <div className="absolute right-2 top-2">
            <CopyBtn text={n.code || ""} />
          </div>
          <pre className="overflow-auto rounded-xl border border-slate-300 bg-slate-50 p-3 text-xs leading-5">
            <code>{n.code}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }
    if (n.type === "hr") {
      chunks.push(<hr key={i} className="my-5 border-slate-200" />);
      i++;
      continue;
    }
    i++;
  }
  return <div className="space-y-2">{chunks}</div>;
};
