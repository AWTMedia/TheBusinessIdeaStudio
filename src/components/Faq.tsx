import React, { useMemo, useState } from "react";
import CTA from "./CTA";

const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

type QA = { q: string; a: React.ReactNode; tag?: string };

const SECTIONS: Array<{ id: string; t: string; items: QA[] }> = [
  {
    id: "start",
    t: "Getting Started",
    items: [
      {
        q: "What is The Business Idea Studio in one sentence?",
        a: (
          <>
            A living <strong>knowledge graph</strong> of 60+ mental models that turn{" "}
            <em>Founder Psychology → Business Mechanics</em> into visual, executable one-pagers.
          </>
        ),
        tag: "about",
      },
      {
        q: "How do I start if I have 30 minutes?",
        a: (
          <>
            Open the <a href="#/repo" style={{ color: C.blue }}><strong>Repository</strong></a>, pick a stage (Self-Mastery → Proof), run one one-pager end-to-end for 48–72 hours. Log metrics. Repeat weekly.
          </>
        ),
        tag: "start",
      },
      {
        q: "Is this free?",
        a: (
          <>
            Yes. Execute freely. Keep attribution if you share visuals/snippets.
          </>
        ),
        tag: "pricing",
      },
    ],
  },
  {
    id: "repo",
    t: "Using the Repository",
    items: [
      {
        q: "How is the repository structured?",
        a: (
          <>
            By <strong>psychological stages</strong> (Self-Mastery → Proof) and by <strong>systems domains</strong> (Demand, Offer, Ops). Use either lens to navigate. Search matches questions + hooks.
          </>
        ),
        tag: "structure",
      },
      {
        q: "What does a one-pager include?",
        a: (
          <>
            Problem math, a concise <em>What You’ll Do</em> sequence, KPIs/tools (when relevant), and a short video where available.
          </>
        ),
        tag: "content",
      },
      {
        q: "Where do I find legacy documents?",
        a: (
          <>
            They open inside the same viewer. Videos load above legacy content. You’ll see <em>One-Pager (Legacy)</em> on top.
          </>
        ),
        tag: "legacy",
      },
    ],
  },
  {
    id: "engage",
    t: "Strategy & Engagement",
    items: [
      {
        q: "What happens on the Strategy Call?",
        a: (
          <>
            We diagnose your dominant constraint in Market → Lead Gen → Nurture → Conversion, select the lowest-lift, highest-signal play, and define the next 48–72 hours.{" "}
            <a href="#/book-a-call" style={{ color: C.blue }}><strong>Book here</strong></a>.
          </>
        ),
        tag: "call",
      },
      {
        q: "Do you take requests?",
        a: <>Yes. DM “start” with niche + problem. We prioritize pains with strong signal and fast time-to-validation.</>,
        tag: "requests",
      },
      {
        q: "Will this work in my niche?",
        a: (
          <>
            We don’t guess. We map your niche to a known channel/offer archetype and sequence the order of operations before scale.
          </>
        ),
        tag: "fit",
      },
    ],
  },
  {
    id: "policy",
    t: "Standards, Proof & Privacy",
    items: [
      { q: "Editorial standards?", a: <>Visual over verbose. Evidence over claims. Public postmortems. Ethical positioning.</>, tag: "standards" },
      { q: "Proof & results?", a: <>We prefer <em>proof artifacts</em> (screens, metrics, live assets) over case-study prose. Referrals/reviews are engineered in-flow.</>, tag: "proof" },
      { q: "Privacy & compliance?", a: <>POPIA/GDPR aware. Client consent before publication. Data minimized, anonymized where needed. Security reviews on tools/flows.</>, tag: "privacy" },
    ],
  },
];

function Section({ id, t, items, query }: { id: string; t: string; items: QA[]; query: string }) {
  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.q.toLowerCase().includes(q) || String(i.a).toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div id={id}>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-xl font-bold">{t}</h3>
        <span className="text-xs opacity-60">{filtered.length} items</span>
      </div>
      <div className="rounded-2xl bg-white/90 p-5 border" style={{ borderColor: C.gray }}>
        {filtered.length === 0 ? (
          <div className="text-sm opacity-60">No matches here.</div>
        ) : (
          filtered.map((f, i) => (
            <details key={i} className="group py-3 border-b last:border-b-0" style={{ borderColor: C.gray }}>
              <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
              <div className="mt-2 text-sm leading-6 opacity-90">{f.a}</div>
            </details>
          ))
        )}
      </div>
    </div>
  );
}

export default function Faq() {
  const [query, setQuery] = useState("");

  const total = useMemo(
    () => SECTIONS.reduce((s, sec) => s + sec.items.length, 0),
    []
  );

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Head */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-black" style={{ color: C.ink }}>
            FAQ
          </h2>
          <p className="text-sm opacity-70">Clear answers. No fluff. {total} questions.</p>
        </div>
        <div className="w-full sm:w-80">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the FAQ…"
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            style={{ borderColor: C.gray }}
          />
        </div>
      </div>

      {/* Quick nav */}
      <div className="mb-6 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#/faq#${s.id}`}
            className="px-3 py-1.5 rounded-full text-sm border bg-white hover:bg-gray-50"
            style={{ borderColor: C.gray, color: C.ink }}
          >
            {s.t}
          </a>
        ))}
        <CTA variant="ghost" href="#/repo">Open Repository</CTA>
        <CTA href="#/book-a-call">Book a Call</CTA>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {SECTIONS.map((s) => (
          <Section key={s.id} id={s.id} t={s.t} items={s.items} query={query} />
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-10 rounded-2xl p-5 border"
        style={{ borderColor: C.gray, background: C.ink, color: "#fff" }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm md:text-base">
            Ready to move from answers to action? Pick a one-pager and ship it in 48–72 hours.
          </div>
          <div className="flex items-center gap-2">
            <CTA variant="ghostLight" href="#/repo">Open Repository</CTA>
            <CTA variant="lime" href="#/book-a-call">Book a Strategy Call</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}