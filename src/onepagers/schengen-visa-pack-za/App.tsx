import React, { useEffect, useMemo, useState } from "react";

/**
 * Schengen Visa Pack (ZA) — Customer Delivery App (Single-file)
 *
 * Pure React + TailwindCSS. Paste into App.tsx of a React + Tailwind template.
 *
 * Features
 * - Sticky header with quick actions (Print / Expand / Collapse)
 * - Left ToC (auto-generated from H2 headings)
 * - Content renderer for a Markdown-lite source (headings, lists, quotes, code, tables)
 * - Client-side search with match highlighting
 * - Collapsible sections (per H2)
 * - Copy-to-clipboard for code blocks
 * - Interactive task lists ("- [ ] item") with per-section persistence
 */

// ——————————————————————————————————————————————————————————
// 1) Delivery Document Content (Markdown-lite)
// ——————————————————————————————————————————————————————————
const RAW = `# Schengen Visa Pack (ZA) — Customer Delivery Document

**Version:** 1.0 (Updates included for 6 months) • **Owner:** Schengen Visa Pack (ZA) • **Support:** help@schengenvisapack.za

---

## 0) Executive Summary
This document is your complete, **embassy-style application system** for a South African Schengen **tourist** visa. Follow the step-by-step workflow, copy the provided templates, and assemble your file **in under 60 minutes**.
**Important:** This is an **information product** (not legal advice) and **no pack can guarantee visa approval**. You are responsible for confirming the latest embassy requirements.

**You’ll achieve:**
- Professional **cover/sponsor/employer/student/freelance letters** that read the way clerks expect.
- Correct **file order** and a **submission-day checklist**.
- Clear **bank/funds phrasing** and **itinerary/booking** guidance.
- **Country phrasing variants** (NL/DE/FR/IT) and a **rejection-reasons cheat sheet**.

---

## 1) Who This Pack Is For (and Not For)
**For:**
- First-time or infrequent **South African** Schengen applicants.
- DIY travelers who want clarity without hiring a consultant.
- Applicants confused by conflicting online advice.

**Not For:**
- Asylum cases, appeals, long-stay/residence/work visas, or complex legal matters.
- Situations requiring legal counsel (this is not legal advice).

---

## 2) How to Use This Pack (60-Minute Quick Start)
**Prereqs:** Your valid passport, recent photos, confirmed appointment, and the latest document list from your **specific** embassy/consulate/VFS.

**00:00–00:10 — Choose Scenario**
Pick the scenario(s) that fit: **solo**, **sponsored**, **employed**, **freelance**, **student**.

**00:10–00:25 — Generate Letters**
Use the **Letter Generator Suite** (or copy templates) to produce:
- **Cover Letter** (always)
- **Sponsor/Invitation Letter** (if sponsored/hosted)
- **Employment Verification / Leave Approval** (if employed)
- **Freelance/Business Proof** (if self-employed)
- **Student Letter** (if enrolled)

**00:25–00:35 — Funds & Bank Statements**
Use the **phrasing patterns** and examples to describe your funds clearly and consistently.

**00:35–00:45 — Itinerary & Bookings**
Build a credible itinerary; align **flight** and **accommodation** dates; use **refund-friendly** options where appropriate.

**00:45–01:00 — Assemble Submission-Day Pack**
Print letters; order documents per the **File Order Blueprint**; tick off the **Checklist**. Add **Country Variant** phrasing if your embassy is NL/DE/FR/IT.

---

## 3) Deliverables (What You Get)
- **Letter Generator Suite** (Cover, Sponsor/Invitation, Employer, Freelance, Student) — Output: **DOCX/PDF**
- **Funds & Bank Statements Guide** (phrasing patterns, examples, formatting tips)
- **Itinerary & Booking Strategy** (templates + refund-friendly guidance)
- **Submission-Day Pack** (complete **Checklist** + **File Order Blueprint** + photo specs + appointment prep)
- **Country Variants & Rejection Fixes** (NL/DE/FR/IT phrasing notes; common rejection reasons + fixes)
- **Proof-of-Ties Gallery** (what to include and how to reference it)
- **Updates**: Quarterly wording/checklist refreshes for **6 months**

---

## 4) Core Templates (Embassy-Style Letters)
> Replace tokens in **[ALL CAPS IN BRACKETS]**.

### 4.1 Cover Letter (Tourist — Solo/Self-Funded)
**Subject:** **Schengen Short-Stay (Tourist) Visa Application — [FULL NAME], Passport [NUMBER]**
**To:** Visa Officer, [EMBASSY/CONSULATE NAME], [CITY]
**Date:** [DD MON YYYY]

Dear Visa Officer,

I am applying for a **short-stay (tourist) Schengen visa** to visit **[COUNTRIES]** from **[ENTRY DATE]** to **[EXIT DATE]** (total **[N] days**). I reside in **South Africa** and hold passport **[NUMBER]**.

**Purpose & Itinerary**
I plan to visit **[CITIES]** for tourism and cultural activities. A day-by-day outline is enclosed (**Itinerary**). Accommodation and provisional flights are attached.

**Employment/Study & Leave**
I am currently **[EMPLOYED AT / STUDYING AT / SELF-EMPLOYED VIA] [ENTITY NAME]**. **Leave** has been approved from **[DATE]** to **[DATE]** (letter attached).

**Funding**
I will cover all expenses (flights, accommodation, daily costs) from my personal funds. My **bank statements** and **balance letter** are attached.

**Return & Ties**
I will return to South Africa on **[RETURN DATE]** to resume **[work/studies]**. Evidence of my ties is enclosed (employment/enrollment letter, **[property/vehicle/family commitments]**).

Thank you for considering my application.

Sincerely,
**[FULL NAME]**
[PHONE] • [EMAIL] • [RESIDENTIAL ADDRESS]

---

### 4.2 Sponsor/Invitation Letter (If Applicable)
**Subject:** **Sponsorship/Invitation — [APPLICANT FULL NAME], Passport [NUMBER]**
I, **[SPONSOR FULL NAME]**, **[RELATIONSHIP]**, residing at **[ADDRESS, COUNTRY]**, will **sponsor** [APPLICANT] during **[DATES]** in **[CITY/COUNTRY]**. I will provide **[accommodation/financial support]** and ensure their timely return to South Africa.
Attached: **ID/Passport**, **proof of address**, **proof of funds**, and **relationship evidence**.

**Signature & Date**

---

### 4.3 Employment Verification / Leave Approval (Employer)
On **[LETTERHEAD]**, confirm:
- **Role**, **start date**, **employment status** (permanent/fixed-term).
- **Approved leave dates** covering the trip.
- **Return to work date**.
- **HR contact** for verification.

---

### 4.4 Freelance/Self-Employed Proof
- Business letter or affidavit describing **nature of work**, **clients**, **income consistency**.
- Attach **CIPC/Tax** proofs where relevant.
- Bank statements from a **business** or **primary** account.

---

### 4.5 Student Letter
- **Enrollment confirmation**, **program**, **term dates**.
- **Leave/academic break** covering travel.
- Return to studies on **[DATE]**.

---

## 5) Funds & Bank Statements — Phrasing & Formatting
**Purpose:** Make your financial position **clear, consistent, and professional**.

**Recommended phrasing (examples):**
- "I maintain a current balance of **ZAR [AMOUNT]** in account **[BANK, LAST 4 DIGITS]**, with average monthly inflows of **ZAR [AMOUNT]**. I will fund **all** trip costs personally."
- "As sponsor, I will cover **accommodation, transport, and daily expenses**. My balance of **[CURRENCY AMOUNT]** and recent statements are attached."

**Formatting tips:**
- Provide **last 3–6 months** of statements as requested by your embassy/VFS.
- Ensure **name, account number, balances** are visible; avoid redactions.
- Include a **bank balance letter** if available (dated within **7–14 days** of submission).
- **Consistency check**: Letter totals, itinerary estimates, and balances should make sense together.

**Supporting documents (as applicable):**
- Payslips/invoices (3 months)
- Proof of accommodation & flights (provisional/booking confirmations)
- Travel insurance certificate (coverage & dates aligned)

---

## 6) Itinerary & Booking Strategy
**Principles:** credible timing, consistent costs, and alignment of dates across **flights, hotels, insurance**.

**Itinerary template (example rows):**
| Date | City/Country | Accommodation | Activities/Notes |
|---|---|---|---|
| 02 Jan | Amsterdam, NL | Booking.com – [Hotel/Hostel] | Arrival, check-in |
| 03 Jan | Amsterdam, NL | Same | Museum visit, canal walk |

**Refund-friendly tips:**
- Use **free-cancellation** accommodation where possible.
- Use **provisional/onward reservations** that match your itinerary dates.
- Keep **names** and **dates** consistent across all documents.

---

## 7) Submission-Day Pack
**Photo specs & appointment prep:**
- Confirm **current photo requirements** on your embassy/VFS site (size, background, age of photo).
- Bring **appointment confirmation**, **passport**, **copies** as required.
- Dress neatly; arrive early; keep pack tidy.

**File Order Blueprint (adapt to your embassy’s exact order):**
1) Application form + appointment confirmation
2) Passport + copies + photos
3) **Cover Letter**
4) Flights (reservation/itinerary)
5) Accommodation (confirmations)
6) Travel insurance (policy & dates)
7) **Proof of funds** (statements, balance letter, payslips/invoices)
8) **Employment/Student/Self-employed** letters
9) **Sponsor/Invitation** letters + sponsor proofs (if applicable)
10) **Proof of ties** (employment, enrollment, property, family commitments)
11) Any **additional embassy-specific** documents

**Checklist (tick all before you leave home):**
- [ ] Names and dates match across **all** documents
- [ ] Letters signed/dated; on **letterhead** where required
- [ ] Statements within the **required date window**
- [ ] All printouts **legible** and in **requested order**
- [ ] Copies/ originals as specified by your embassy/VFS

---

## 8) Country Phrasing Variants (NL / DE / FR / IT)
> Use these **tone/structure cues** within your letters. Always follow the **local embassy list** first.

- **Netherlands (NL):** Clear, modest tone; emphasize **purpose**, **dates**, **return to SA**, and **complete documentation**.
- **Germany (DE):** Precise structure; highlight **financial sufficiency**, **health insurance**, **employment/return** ties.
- **France (FR):** Polite formality; ensure **accommodation proof** and **itinerary detail** are explicit.
- **Italy (IT):** Straightforward purpose + dates; align **bookings** and **funds narrative** tightly.

---

## 9) Common Rejection Reasons & Fixes (Cheat Sheet)
| Reason | What it looks like | How to fix |
|---|---|---|
| Insufficient funds | Low balances; inconsistent inflows | Provide stronger statements, sponsor letter, or reduce trip length |
| Inconsistent itinerary | Dates don’t match across docs | Align flights/hotels/insurance; regenerate letters |
| Weak ties to SA | No job/enrollment proof | Add employment/student proof, property/family commitments |
| Missing/unclear letters | Informal or incomplete letters | Use our templates; print on letterhead; sign/date |
| Insurance gaps | Wrong dates/coverage | Re-issue policy to cover full trip + buffer |
| Document age | Old bank letters/photos | Reprint with current dates; follow embassy recency rules |

---

## 10) Proof-of-Ties Gallery (What to Include)
- **Employment:** letter on letterhead; contract; recent payslips.
- **Study:** enrollment letter; timetable; fee receipt.
- **Property/Assets:** deeds, lease agreements, vehicle registration.
- **Family:** marriage/birth certificates where relevant to ties.
- **Return commitments:** event invites, bookings, or obligations post-trip.

---

## 11) FAQs (Condensed)
- **Does this guarantee approval?** No. It guarantees **professional, complete documents**, not outcomes.
- **Is this legal advice?** No. **Information product** only.
- **Updates?** Yes—**6 months** of wording/checklist updates.
- **Refunds?** See **Guarantee** below.
- **Support?** Email support for template issues; optional **document review** add-on may be available.
- **Other visa types?** Parts may help, but this pack is **optimized for Schengen tourist**.

---

## 12) Guarantee — 14-Day Fit-for-Purpose
**We promise** your letters and checklist will be **professional** and **submission-ready** when you follow this document.
If an embassy clerk flags your letters as **unprofessional** and you followed our checklist:
- Email **evidence** (redaction allowed) within **14 days** of purchase;
- We’ll **fix** your templates **or refund you**.

*This guarantee covers document quality, not visa decisions.*

---

## 13) Compliance, Ethics & Privacy
- **You** are responsible for truthful information and lawful use.
- Do not fabricate employment/funds or alter bank documents.
- Handle personal data carefully; store or shred documents as appropriate.
- Always verify the **latest** requirements on your specific embassy/VFS site.

---

## 14) Versioning & Updates (6 Months Included)
- **Quarterly** template/wording refresh based on customer feedback and observed patterns.
- You will receive updated files for **6 months** from purchase.
- Major regulatory changes may require a new edition outside the free update window.

---

## 15) Appendix — Worked Examples

### A) Funds Phrasing Example (Solo, Employed)
> "I will cover all travel expenses personally. My current account (**ABSA • …5532**) holds **ZAR 86,400**, with average monthly net inflows of **ZAR 28,000**. Three months’ statements and a balance letter (dated **7 days** before submission) are attached."

### B) Sponsor Letter Snippet (Parent Sponsor)
> "I, **[PARENT NAME]**, parent of **[APPLICANT]**, will fund **accommodation, transport, and daily costs** during **[DATES]** in **[COUNTRY]**. Enclosed: proof of funds, ID/passport, and proof of address."

### C) Employment Verification Snippet
> "This letter confirms **[APPLICANT]** is a **full-time [ROLE]** with **[COMPANY]** since **[DATE]**. Paid leave is approved from **[DATE]** to **[DATE]**. **[APPLICANT]** will resume duties on **[DATE]**."

### D) Itinerary Row Example
> **05 May — Paris, FR** • Stay: **[Hotel/Hostel]** (free cancellation) • Activities: Louvre, Seine walk • Notes: Train from Amsterdam (ticket attached)

### E) Submission-Day Mini-Checklist (Take to Appointment)
- [ ] Passport + copies + photos
- [ ] Application/appointment printouts
- [ ] Cover letter + scenario letters (sponsor/employer/student/freelance)
- [ ] Flights + accommodation proofs
- [ ] Insurance certificate (full coverage over trip)
- [ ] Bank statements + balance letter
- [ ] Proof of ties (employment/enrollment/property/family)
- [ ] Country variant phrasing checked

---

## 16) Support & Contact
- **Email:** help@schengenvisapack.za
- **Hours:** Mon–Fri 09:00–17:00 SAST
- **Response time target:** within 1 business day

---

## 17) License & Use
- **Single-user license** for the purchaser.
- Templates may not be redistributed, resold, or published.
`;

// ——————————————————————————————————————————————————————————
// 2) Markdown-lite parser → Node tree
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
  | "blockquote"
  | "table";

interface NodeItem {
  type: NodeType;
  text?: string; // for p/h1/h2/h3/blockquote
  items?: string[]; // for ul/ol
  code?: string; // for code
  // table
  headers?: string[];
  rows?: string[][];
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

  // helper for tables
  const isTableDivider = (s: string) => {
    const t = s.trim();
    if (!t.startsWith("|")) return false;
    // only pipes, dashes, colons, spaces
    for (let ch of t) {
      if (ch !== "|" && ch !== "-" && ch !== ":" && ch !== " ") return false;
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

    // TABLES — header row followed by divider row
    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      isTableDivider(lines[i + 1])
    ) {
      flushList();
      const headers = splitCells(line);
      const rows: string[][] = [];
      let j = i + 2; // start after divider
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        rows.push(splitCells(lines[j]));
        j++;
      }
      nodes.push({ type: "table", headers, rows });
      i = j - 1; // advance
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
              SV
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">
                Schengen Visa Pack (ZA) — Customer Delivery Guide
              </h1>
              <p className="text-xs text-slate-500">
                Embassy-style letters • File order blueprint • 60-minute quick
                start
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
                    <SectionRenderer
                      nodes={localNodes}
                      query={query}
                      sectionKey={sec.id}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 pb-10 pt-2 text-center text-xs text-slate-500">
        © 2025 Schengen Visa Pack (ZA). This guide is an information product and
        not legal advice.
      </footer>
    </div>
  );
}

// ——————————————————————————————————————————————————————————
// 6) Section & Node renderers
// ——————————————————————————————————————————————————————————

const SectionRenderer: React.FC<{
  nodes: NodeItem[];
  query: string;
  sectionKey: string;
}> = ({ nodes, query, sectionKey }) => {
  // Skip the first h2 (already displayed as the accordion header)
  const body = nodes.slice(1);
  const chunks: React.ReactNode[] = [];

  // Interactive checklist state (persists per section)
  const storageKey = `tasks:${sectionKey}`;
  const [tasks, setTasks] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    } catch {}
  }, [tasks, storageKey]);

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
          {(n.items || []).map((it, idx) => {
            // Detect markdown task items: [ ] Task or [x] Task
            const taskMatch = it.match(
              /^$begin:math:display$( |x|X)$end:math:display$\s+(.*)$/
            );
            if (taskMatch) {
              const [, mark, label] = taskMatch;
              const id = `${sectionKey}:${i}:${slugify(label).slice(
                0,
                40
              )}:${idx}`;
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
            // Fallback: normal bullet
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
                    className="text-left font-semibold px-3 py-2 border-b border-slate-2
00"
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
