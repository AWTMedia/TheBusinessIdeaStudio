import React, { useEffect, useMemo, useState } from "react";

/**
 * ClearTap CPT — Customer Guide (Single-File React + Tailwind App)
 * - Sticky header, ToC, search, collapsible sections
 * - Markdown-lite renderer (headings, lists, quotes, code, tables, links)
 * - Interactive task lists ("- [ ] item") within the session
 * - Strips inline <a id="..."></a> artifacts from headings
 */

//
// 1) eBook Content (Markdown-lite)
//
const RAW = `# ClearTap CPT — The Cape Town Home Water Upgrade Guide

**Edition:** v1.0  •  **Date:** 07 Oct 2025  •  **Region:** Cape Town (City Bowl • Atlantic Seaboard • Southern Suburbs)  
**Company:** ClearTap CPT  •  **Support:** hello@cleartapcpt.co.za  
**License:** This ebook is free for personal use. Do not redistribute or resell.

---

## How to use this guide
This is a practical, no-jargon manual for upgrading the **taste** and **flow feel** of municipal tap water at home — without invasive plumbing. It explains the problems you can actually feel (chlorine taste/odour, fine sediment, clogged aerators), how our solutions work (tap-mount and under-sink carbon filtration, plus flow optimisation), and how to choose, install, and maintain a setup that fits your rooms and lifestyle.

> **Important**  
> - Designed for **municipal potable water**. Basic carbon filtration targets **aesthetic effects** (taste/odour, fine particulates).  
> - For **boreholes/unknown sources/pathogen removal**, testing and advanced treatment (sediment + carbon + UV/RO) may be required.  
> - Some under-sink works can require a **PIRB** (plumbing industry) registered installer and **CoC**. We’ll advise where relevant.

---

## Table of contents
[Water you can taste: problems & principles](#chapter-1)  
[Pick your plan: room-by-room selection](#chapter-2)  
[Kitchen upgrade: from tea test to tidy install](#chapter-3)  
[Bathrooms & bar sinks: flow feel + quick filters](#chapter-4)  
[Maintenance & refills: set-and-forget](#chapter-5)  
[Special cases: renters, BNBs, cafés, and moving home](#chapter-6)  
[Costs, ROI & readiness: make it pay for itself](#chapter-7)  

**Extras**  
[Quick-start (60 minutes)](#quick-start)  
[Worksheets & checklists](#worksheets)  
[FAQs](#faqs)  
[Guarantee](#guarantee)  
[Next steps](#next-steps)

---

## <a id="chapter-1"></a>Chapter 1 — Water you can taste: problems & principles
**Goal:** Understand what you can (and can’t) fix at the tap.

### Common problems you can feel
- **Chlorine taste/odour** in tea, coffee, and cooking water.  
- **Fine sediment/particulates** that dull flavour and leave **kettle scale**.  
- **Clogged or wrong aerators** reducing flow feel at the tap even when building pressure is fine.

### Principles that keep you safe & honest
- **Taste vs safety:** Cape Town municipal water is treated and monitored to be **potable**. Our base solutions improve **aesthetics**, not pathogen removal.  
- **Right tool, right job:**
  - **Carbon (NSF/ANSI 42-class)** ⇒ taste/odour + fine particulate.  
  - **Sediment prefilter** ⇒ protects carbon, keeps cups clearer.  
  - **UV/RO** ⇒ pathogen/TDs control (not covered in standard home packages).  
- **Flow is mostly an aerator issue:** The fastest win is often **cleaning or swapping** the aerator and clearing spout debris.

### Mini checklist
- [ ] Confirm you’re on **municipal water** (not borehole).  
- [ ] List rooms where people **drink/make hot drinks**.  
- [ ] Note any **weak-feeling taps** or **scale** in kettle.

**Key metric to track:** **Taste Satisfaction Score** (1–10) for household members **before** and **after** the upgrade.

---

## <a id="chapter-2"></a>Chapter 2 — Pick your plan: room-by-room selection
**Goal:** Select the right package per room with a simple rubric.

### The four building blocks
1) **Tap-Mount Quick Filter** — screw-on diverter, renter-friendly.  
2) **Under-Sink Single Stage** — 10″ carbon block; mini-tap or 3-way mixer.  
3) **Under-Sink Dual Stage** — sediment + carbon; maximum clarity for tea/coffee.  
4) **Pressure & Flow Optimiser** — aerator swap/clean-out; better feel.

### Selection rubric (use this for each room)
| Room | Drink prep? | Space under sink? | Drilling OK? | Priority | Pick |
|---|---|---|---|---|---|
| Kitchen | Yes/No | Yes/No | Yes/No | Taste / Flow / Both | Tap-Mount / Single / Dual / Optimiser |
| Main Bathroom | Yes/No | Yes/No | N/A | Flow | Optimiser |
| Ensuite | Yes/No | Yes/No | N/A | Flow | Optimiser |
| Guest Bathroom | Yes/No | Yes/No | N/A | Quick win | Tap-Mount / Optimiser |
| Bar/Scullery | Yes/No | Yes/No | N/A | Taste | Tap-Mount |

**Examples**  
- **Apartment kitchen (renter):** Tap-Mount + Optimiser (no drilling).  
- **Family kitchen (coffee lovers):** Dual Stage + Optimiser.  
- **Guest bathroom:** Tap-Mount or Optimiser.  
- **Bar/Scullery:** Tap-Mount (quick win).

### Mini checklist
- [ ] Confirm which rooms need **drinking-quality taste**.  
- [ ] Decide **no-drill** vs **mini-tap** vs **3-way mixer**.  
- [ ] Add **Optimiser** wherever taps feel weak.

**Key metric to track:** **Cart minimum** achieved (≥ R1,200) to keep visit profitable (you get a multi-room discount too).

---

## <a id="chapter-3"></a>Chapter 3 — Kitchen upgrade: from tea test to tidy install
**Goal:** Deliver a confident kitchen result in one visit.

### Step-by-step (what our techs do, and you can expect)
1. **Inspect & taste test** (tap water plain + quick tea brew).  
2. **Flow check** (1-litre fill time) and **aerator clean-out**.  
3. **Fit chosen system:**  
   - **Tap-Mount:** choose correct thread adaptor; mount diverter; check for leaks.  
   - **Single Stage:** mount 10″ housing; connect via angle-stop; mini-tap or 3-way mixer; flush 5 minutes.  
   - **Dual Stage:** add sediment prefilter before carbon; flush until clear.  
4. **Taste again** (side-by-side).  
5. **Label cartridge month** + set **WhatsApp reminder**.  
6. **Leave tidy**: quick wipe, fittings secured, brief usage demo.

### Examples
- **Espresso household:** Dual Stage markedly reduces fines that otherwise show up in cups; pair with kettle descale.  
- **Minimalist kitchen:** Single Stage with 3-way mixer (no separate mini-tap) keeps counters clear.

### Mini checklist
- [ ] Bring angle-stop kit & thread adaptors.  
- [ ] Flush 5 minutes; check for micro-leaks.  
- [ ] Label next change; set reminder.

**Key metric to track:** **1-litre fill time** improvement (seconds) + **Taste Satisfaction Score**.

---

## <a id="chapter-4"></a>Chapter 4 — Bathrooms & bar sinks: flow feel + quick filters
**Goal:** Fix everyday annoyances fast, without invasive work.

### Bathrooms (main & ensuite)
- Lead with **Pressure & Flow Optimiser**: new room-appropriate aerator (L/min), scale removal at spout, line checks.  
- If family fills bottles in bathroom: consider **Tap-Mount** for taste.

### Bar/Scullery
- **Tap-Mount** is usually best: fast, neat, and easy to service.

### Mini checklist
- [ ] Measure before/after flow with 1-litre test.  
- [ ] Keep spare aerators (kitchen vs basin profiles).  
- [ ] Confirm user understands diverter lever positions.

**Key metric to track:** **Flow feel delta** (1–10 scale) reported by user immediately after service.

---

## <a id="chapter-5"></a>Chapter 5 — Maintenance & refills: set-and-forget
**Goal:** Keep performance consistent with zero guesswork.

### Cartridge cadence
- **Tap-Mount**: every **3–4 months** (usage dependent).  
- **Under-Sink**: every **~6 months**.  
- **Dual Stage**: replace **both** stages at ~6 months.

### Your automation options
- **WhatsApp reminders** (we schedule at install).  
- **Refill subscription** (R89–R169/mo depending on system).  
- **Extra cartridge pack** on hand for faster service.

### Mini checklist
- [ ] Record install date + cartridge type.  
- [ ] Set next reminder now (90/180 days).  
- [ ] Keep one spare cartridge set at home.

**Key metric to track:** **On-time change rate** (% of cartridges changed within ±2 weeks of due date).

---

## <a id="chapter-6"></a>Chapter 6 — Special cases: renters, BNBs, cafés, moving
**Goal:** Maximise flexibility and uptime.

### Renters
- Choose **Tap-Mount** or **Single Stage** with **no drilling** and retainers.  
- Keep the **Move-With-You Reinstall** voucher handy.

### BNBs & guesthouses
- Standardise **Dual Stage** in kitchen + **Optimiser** in bathrooms.  
- Stock extra cartridge sets; schedule bulk service days.

### Small cafés/coffee bars
- Dual Stage at prep sink; add anti-scale routines; train staff to flush after cartridge changes.

### Mini checklist
- [ ] Confirm landlord consent if drilling a mini-tap.  
- [ ] Add spare cartridges to housekeeping closet.  
- [ ] Keep last service log accessible.

**Key metric to track:** **Uptime** (% of days system is in expected performance state).

---

## <a id="chapter-7"></a>Chapter 7 — Costs, ROI & readiness: make it pay for itself
**Goal:** See how taste upgrades beat bottled-water habits and wasted time.

### Cost snapshot (indicative)
- **Tap-Mount from R749** • **Single Stage from R1,499** • **Dual Stage from R2,199** • **Optimiser from R499**  
- **Refills:** R89–R169/mo equivalents (quarterly/semi-annual cycles).

### Where the savings hide
- **Fewer bottled-water purchases** (primary).  
- **Less kettle scale** (appliance longevity, less descaling product).  
- **Time saved** (no DIY trips/returns, no plan-B coffee runs).

### Mini checklist
- [ ] Log current bottled-water spend (monthly).  
- [ ] Compare against refill plan.  
- [ ] Estimate **payback months**.

**Key metric to track:** **Cost per litre** vs bottled baseline; **Payback period** (months).

---

## <a id="quick-start"></a>Quick-start (60 minutes)
**00:00–00:10** — Choose rooms + packages with the rubric.  
**00:10–00:25** — Book a **same-week slot** via WhatsApp (include postcode + room picks).  
**00:25–00:55** — Install window (per room 15–75 min).  
**00:55–01:00** — Taste test + set first reminder.

---

## <a id="worksheets"></a>Worksheets & checklists

### A) Room planner (printable)
| Room | Package | Qty | Add Optimiser? | Notes |
|---|---|---|---|---|
| Kitchen |  |  |  |  |
| Main Bathroom |  |  |  |  |
| Ensuite |  |  |  |  |
| Guest Bathroom |  |  |  |  |
| Bar/Scullery |  |  |  |  |

### B) Install day checklist
- [ ] Access under sinks cleared  
- [ ] Landlord consent if drilling  
- [ ] Angle-stop reachable  
- [ ] Kettle descaled (if needed)  
- [ ] WhatsApp reminders set

### C) Cartridge & service log
| Date | Room | System | Cartridge Code | Next Due | Notes |
|---|---|---|---|---|---|

### D) Flow check sheet (1-litre test)
| Date | Room | Before (sec) | After (sec) | Notes |
|---|---|---|---|---|

---

## <a id="faqs"></a>FAQs
**Will this make borehole water safe?**  
No. These packages target **municipal potable** water for taste/odour and fine particulates. For boreholes/unknown, we recommend water testing and a tailored setup (sediment + carbon + UV; RO as needed).

**Do you drill my countertop?**  
Only if you opt for a **mini-tap** and give consent. We can also install a **3-way mixer** (no extra hole) or use a **tap-mount** diverter.

**Can you increase water pressure?**  
We improve **flow feel** at the tap by cleaning/replacing aerators and clearing debris. **Building/municipal pressure** is external.

**How often are cartridges changed?**  
Tap-mount: ~3–4 months. Under-sink: ~6 months. Dual stage: both at ~6 months. We set WhatsApp reminders at install.

**Do you cover the CBD/West Coast/Deep South?**  
Core zones are City Bowl, Atlantic Seaboard, Southern Suburbs (free travel). Other areas by quote.

**What about certifications and compliance?**  
We use **NSF/ANSI 42-class** carbon blocks for taste/odour. Where a **PIRB** installer and **CoC** are required for under-sink works, we supervise/issue accordingly.

---

## <a id="guarantee"></a>Guarantee — 30-Day Love-It
If you don’t notice **improved taste/odour** or **better flow feel** at serviced taps within 30 days, we’ll adjust or uninstall and refund our **labour**.

**Covers:** workmanship, fittings, and the taste/flow outcomes described.  
**Doesn’t cover:** building pressure problems, mis-use, or non-municipal water issues. Drilled/mixer add-ons are non-returnable once fitted. Used hardware may be refunded or restocked at our discretion.

---

## <a id="next-steps"></a>Next steps
1) Fill the **Room Planner** table.  
2) WhatsApp us with **postcode + rooms + picks**.  
3) We confirm your slot and bring everything needed.  
4) Taste upgrade in under an hour.

**Primary CTA:** **Book on WhatsApp**  
**Secondary CTA:** **Get a same-week slot**

---

### About ClearTap CPT
Hyper-local, done-for-you water taste upgrades for Cape Town homes.  
**Email:** hello@cleartapcpt.co.za  
**Hours:** Mon–Fri 09:00–17:00  
**© 2025 ClearTap CPT** — Municipal potable water focus. Basic carbon filters do not claim pathogen removal.
`;

//
// 2) Markdown-lite parser → Node tree (tables, links, task lists)
//
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
  | "blockquote"
  | "table";

interface NodeItem {
  type: NodeType;
  text?: string;
  items?: string[];
  code?: string;
  headers?: string[];
  rows?: string[][];
}

// Replace your current stripInlineHtml with this:
function stripInlineHtml(t: string) {
  // remove inline anchor tags like <a id="chapter-1"></a> and any other inline tags
  return t.replace(/<a[^>]*>\s*<\/a>/gi, "").replace(/<[^>]+>/g, "");
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

  const isTableDivider = (s: string) => {
    const t = s.trim();
    if (!t.startsWith("|")) return false;
    for (const ch of t) {
      if (!"|:- ".includes(ch)) return false;
    }
    return t.includes("-");
  };

  const splitCells = (s: string) =>
    s
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\t/g, "    ");

    // code block fences
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

    // hr
    if (/^\s*---+\s*$/.test(line)) {
      flushList();
      nodes.push({ type: "hr" });
      continue;
    }

    // headings
    if (line.startsWith("# ")) {
      flushList();
      nodes.push({ type: "h1", text: stripInlineHtml(line.slice(2).trim()) });
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      nodes.push({ type: "h2", text: stripInlineHtml(line.slice(3).trim()) });
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      nodes.push({ type: "h3", text: stripInlineHtml(line.slice(4).trim()) });
      continue;
    }

    // tables
    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      isTableDivider(lines[i + 1])
    ) {
      flushList();
      const headers = splitCells(line);
      const rows: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        rows.push(splitCells(lines[j]));
        j++;
      }
      nodes.push({ type: "table", headers, rows });
      i = j - 1;
      continue;
    }

    // lists
    if (/^\s*-\s+/.test(line)) {
      const item = line.replace(/^\s*-\s+/, "");
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

    // blank line
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

//
// 3) Utilities — highlighting & sections
//
interface Section {
  id: string;
  title: string;
  start: number;
  end: number;
}

function useGuide(nodes: NodeItem[]) {
  const sections = useMemo<Section[]>(() => {
    const s: Section[] = [];
    let current: Section | null = null;
    nodes.forEach((n, idx) => {
      if (n.type === "h2" && n.text) {
        if (current) current.end = idx;
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

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

//
// 4) Inline renderer (bold + links + highlight), safe for anchors
//
function safeHref(href: string) {
  return /^javascript:/i.test(href) ? "#" : href;
}
function renderInline(text: string, q: string) {
  if (!text) return null;

  // Split into markdown links and plain text segments
  const parts: Array<{ kind: "text" | "link"; text: string; href?: string }> =
    [];
  const linkRe =
    /$begin:math:display$([^$end:math:display$]+)\]$begin:math:text$([^)]+)$end:math:text$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(text))) {
    if (m.index > last)
      parts.push({ kind: "text", text: text.slice(last, m.index) });
    parts.push({ kind: "link", text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ kind: "text", text: text.slice(last) });

  const renderBold = (t: string) => {
    const segs = t.split(/(\*\*.+?\*\*)/g);
    return (
      <>
        {segs.map((seg, i) => {
          const isBold = seg.startsWith("**") && seg.endsWith("**");
          const inner = isBold ? seg.slice(2, -2) : seg;
          const hl = highlight(inner, q);
          return isBold ? (
            <strong key={i} className="font-semibold">
              {hl}
            </strong>
          ) : (
            <React.Fragment key={i}>{hl}</React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <>
      {parts.map((p, i) =>
        p.kind === "link" ? (
          <a
            key={i}
            href={safeHref(p.href || "#")}
            target={p.href && p.href.startsWith("#") ? undefined : "_blank"}
            rel={p.href && p.href.startsWith("#") ? undefined : "noreferrer"}
            className="text-sky-700 hover:underline"
          >
            {renderBold(p.text)}
          </a>
        ) : (
          <React.Fragment key={i}>{renderBold(p.text)}</React.Fragment>
        )
      )}
    </>
  );
}

//
// 5) UI bits
//
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

//
// 6) Main App
//
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <div className="h-8 w-8 rounded-xl bg-sky-600 text-white grid place-items-center font-bold">
              CT
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">
                ClearTap CPT — Customer Guide
              </h1>
              <p className="text-xs text-slate-500">
                Taste upgrade • Flow optimisation • Renter-friendly installs
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
            <a
              href="https://wa.me/27820000000?text=Hi%20ClearTap%2C%20my%20postcode%20is%20____.%20Rooms%3A%20Kitchen%20-%20[Tap-Mount%7CSingle%7CDual]%2C%20Bathrooms%20-%20[Optimiser]%2C%20Bar%2FScullery%20-%20[Tap-Mount]."
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-sm rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Book on WhatsApp
            </a>
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
        © 2025 ClearTap CPT. Designed for municipal potable water. Basic carbon
        filters do not claim pathogen removal.
      </footer>
    </div>
  );
}

//
// 7) Section & Node renderers (tables + interactive task lists)
//
const SectionRenderer: React.FC<{ nodes: NodeItem[]; query: string }> = ({
  nodes,
  query,
}) => {
  // Skip the first h2 (already displayed as the accordion header)
  const body = nodes.slice(1);
  const chunks: React.ReactNode[] = [];
  const [tasks, setTasks] = useState<Record<string, boolean>>({});

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
      chunks.push(
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
          {(n.items || []).map((it, idx) => {
            // Detect markdown tasks like "[ ] Task" or "[x] Done"
            const taskMatch = it.match(
              /^$begin:math:display$( |x|X)$end:math:display$\s+(.*)$/
            );
            if (taskMatch) {
              const [, mark, label] = taskMatch;
              const id = `${i}:${idx}:${label.toLowerCase().slice(0, 60)}`;
              const checked = tasks[id] ?? mark.toLowerCase() === "x";
              return (
                <li key={idx} className="list-none">
                  <label className="inline-flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300"
                      checked={!!checked}
                      onChange={() =>
                        setTasks((prev) => ({ ...prev, [id]: !checked }))
                      }
                    />
                    <span>{renderInline(label, query)}</span>
                  </label>
                </li>
              );
            }
            return (
              <li
                key={idx}
                className={n.type === "ol" ? "list-decimal" : "list-disc"}
              >
                {renderInline(it, query)}
              </li>
            );
          })}
        </Tag>
      );
      i++;
      continue;
    }

    if (n.type === "table") {
      chunks.push(
        <div key={i} className="my-3 overflow-auto">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                {(n.headers || []).map((h, idx) => (
                  <th
                    key={idx}
                    className="text-left font-semibold px-3 py-2 border-b border-slate-200"
                  >
                    {renderInline(h, query)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(n.rows || []).map((row, rIdx) => (
                <tr key={rIdx} className="odd:bg-white even:bg-slate-50/40">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-3 py-2 border-b border-slate-100 align-top"
                    >
                      {renderInline(cell, query)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
