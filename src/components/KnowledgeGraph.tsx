import React from "react";
import CTA from "./CTA";

// Brand palette
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

type StageRow = {
  k: string;
  title: string;
  desc: string;
  start: number; // 1..12 (grid col start)
  end: number;   // 2..13 (grid col end)
};

const STAGES: StageRow[] = [
  { k: "self",     title: "Self-Mastery",               desc: "Attention, emotion, and energy management for founders.",                 start: 1,  end: 3 },
  { k: "identity", title: "Identity & Brand Perception",desc: "How you’re perceived — authority, trust, and narrative.",               start: 3,  end: 5 },
  { k: "empathy",  title: "Audience Empathy",           desc: "Motivations, pains, and behaviors that drive demand.",                  start: 5,  end: 7 },
  { k: "offer",    title: "Offer Psychology",           desc: "Value perception, pricing, and risk framing.",                          start: 7,  end: 9 },
  { k: "systems",  title: "Systems Thinking",           desc: "Cognitive economy via processes, SOPs, and automation.",                start: 9,  end: 10 },
  { k: "scale",    title: "Behavioral Scaling",         desc: "Referrals, incentives, delegation, and leverage.",                      start: 10, end: 11 },
  { k: "proof",    title: "Proof & Legitimacy",         desc: "Authority signals, legal scaffolding, and real-world evidence.",        start: 11, end: 13 },
];

function TickGrid() {
  // 12-lane, subtle vertical ticks
  return (
    <div className="absolute inset-0 pointer-events-none grid grid-cols-12">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="border-l"
          style={{ borderColor: "rgba(12, 19, 31, 0.08)" }}
        />
      ))}
    </div>
  );
}

export default function KnowledgeGraph() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ background: C.cream, color: C.text }}
    >
      {/* center wrapper */}
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-full max-w-6xl">
          {/* Heading block */}
          <div className="mb-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] tracking-widest uppercase"
              style={{ borderColor: C.blue, color: C.blue, background: "#fff" }}
            >
              Knowledge Graph
            </div>
            <h1
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
              style={{ color: C.ink }}
            >
              Psychological Stages of Building a Business
            </h1>
            <p className="mt-2 text-sm sm:text-base opacity-90 max-w-2xl">
              Each stage bundles one-pagers that solve specific cognitive bottlenecks on the founder path.
            </p>
          </div>

          {/* Card: Gantt hero */}
          <div
            className="relative rounded-3xl border p-5 sm:p-6 md:p-7"
            style={{
              borderColor: C.gray,
              background:
                "radial-gradient(800px 300px at 15% -10%, rgba(47,93,232,.08), transparent 50%)," +
                "radial-gradient(800px 300px at 120% 20%, rgba(201,249,62,.10), transparent 50%)," +
                "#FFF7E8",
            }}
          >
            {/* subtle grid */}
            <TickGrid />

            {/* Axis header */}
            <div className="relative mb-4 flex items-end justify-between">
              <div className="text-xs uppercase tracking-widest opacity-60">Stages</div>
              <div className="text-[11px] opacity-60">← earlier | later →</div>
            </div>

            {/* Rows */}
            <div className="relative grid grid-cols-12 gap-x-2">
              {STAGES.map((s, idx) => (
                <div
                  key={s.k}
                  className="col-span-12 mb-4 last:mb-0"
                >
                  {/* row height box */}
                  <div className="grid grid-cols-12 items-center">
                    {/* left label column (title + desc) */}
                    <div className="col-span-12 md:col-span-4 pr-3">
                      <div className="text-[11px] uppercase tracking-widest opacity-60">Stage</div>
                      <div className="text-[15px] sm:text-base font-semibold" style={{ color: C.ink }}>
                        {s.title}
                      </div>
                      <div className="text-xs sm:text-sm opacity-80">{s.desc}</div>
                    </div>

                    {/* gantt lane */}
                    <div className="col-span-12 md:col-span-8 relative mt-2 md:mt-0">
                      <div className="relative grid grid-cols-12 gap-x-2 h-12">
                        {/* bar */}
                        <div
                          className="rounded-xl relative flex items-center justify-between px-3"
                          style={{
                            gridColumn: `${s.start} / ${s.end}`,
                            background: `linear-gradient(90deg, ${C.blue} 0%, #5F82F0 100%)`,
                            color: "#fff",
                            boxShadow: "0 8px 22px rgba(47,93,232,.25)",
                          }}
                        >
                          <span className="text-xs sm:text-[13px] font-medium">
                            {idx + 1}. {s.title}
                          </span>
                          <a
                            href={`#/repo`}
                            className="text-[12px] underline decoration-2 underline-offset-4 opacity-95 hover:opacity-100"
                            aria-label={`View related one-pagers for ${s.title}`}
                          >
                            View related one-pagers →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip inside the hero card */}
            <div className="relative mt-6 flex flex-wrap items-center gap-3">
              <CTA
                href="#/repo"
                onClick={(e) => {
                  // allow normal hash-nav
                }}
              >
                Explore the Knowledge Graph
              </CTA>
              <a
                href="#/book-a-call"
                className="text-sm underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100"
                style={{ color: C.ink }}
              >
                Book a Strategy Call
              </a>
              <span className="ml-auto text-[12px] opacity-70">
                Evidence-led • Updated weekly • No paywall
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* soft vignette edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 200px at 50% 0%, rgba(11,15,25,.08), transparent 60%)",
        }}
      />
    </section>
  );
}