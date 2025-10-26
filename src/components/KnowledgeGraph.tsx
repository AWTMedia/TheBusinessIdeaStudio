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
};

const STAGES: StageRow[] = [
  {
    k: "self",
    title: "Self-Mastery",
    desc: "Attention, emotion, and energy management for founders.",
    start: 1,
  },
  {
    k: "identity",
    title: "Identity & Brand Perception",
    desc: "How you’re perceived — authority, trust, and narrative.",
    start: 3,
  },
  {
    k: "empathy",
    title: "Audience Empathy",
    desc: "Motivations, pains, and behaviors that drive demand.",
    start: 5,
  },
  {
    k: "offer",
    title: "Offer Psychology",
    desc: "Value perception, pricing, and risk framing.",
    start: 7,
  },
  {
    k: "systems",
    title: "Systems Thinking",
    desc: "Cognitive economy via processes, SOPs, and automation.",
    start: 9,
  },
  {
    k: "scale",
    title: "Behavioral Scaling",
    desc: "Referrals, incentives, delegation, and leverage.",
    start: 10,
  },
  {
    k: "proof",
    title: "Proof & Legitimacy",
    desc: "Authority signals, legal scaffolding, and real-world evidence.",
    start: 11,
  },
];

export default function KnowledgeGraph() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
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
              Each stage bundles one-pagers that solve specific cognitive
              bottlenecks on the founder path.
            </p>
          </div>

          {/* Card: Gantt hero */}
          <div
            className="relative rounded-3xl border p-5 sm:p-6 md:p-7 overflow-hidden"
            style={{
              borderColor: C.gray,
              background:
                "radial-gradient(800px 300px at 15% -10%, rgba(47,93,232,.08), transparent 50%)," +
                "radial-gradient(800px 300px at 120% 20%, rgba(201,249,62,.10), transparent 50%)," +
                "#FFF7E8",
            }}
          >
            {/* Axis header */}
            <div className="relative mb-4 flex items-end justify-between">
              <div className="text-xs uppercase tracking-widest opacity-60">
                Stages
              </div>
              <div className="text-[11px] opacity-60">← earlier | later →</div>
            </div>

            {/* Rows */}
            <div className="relative grid grid-cols-12 gap-x-2">
              {STAGES.map((s, idx) => (
                <div key={s.k} className="col-span-12 mb-4 last:mb-0">
                  <div className="grid grid-cols-12 items-start">
                    {/* left label column (title + desc) */}
                    <div className="col-span-12 md:col-span-4 pr-3">
                      <div className="text-[11px] uppercase tracking-widest opacity-60">
                        Stage {idx + 1}
                      </div>
                      <div
                        className="text-[15px] sm:text-base font-semibold"
                        style={{ color: C.ink }}
                      >
                        {s.title}
                      </div>
                      <div className="text-xs sm:text-sm opacity-80">
                        {s.desc}
                      </div>
                    </div>

                    {/* gantt lane (pill auto-sizes to its text and never overflows the card) */}
                    <div className="col-span-12 md:col-span-8 relative mt-2 md:mt-0">
                      <div className="relative grid grid-cols-12 gap-x-2">
                        {/* Wrapper spans from the start column to the end of the grid to give pill room */}
                        <div
                          className="col-span-12"
                          style={{ gridColumn: `${s.start} / 13` }}
                        >
                          <div
                            className="inline-flex flex-wrap items-center max-w-full px-3 py-2 rounded-xl shadow-lg"
                            style={{
                              background: `linear-gradient(90deg, ${C.blue} 0%, #5F82F0 100%)`,
                              color: "#fff",
                              boxShadow: "0 8px 22px rgba(47,93,232,.25)",
                            }}
                          >
                            <span className="text-xs sm:text-[13px] font-medium leading-tight">
                              {idx + 1}. {s.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip inside the hero card */}
            <div className="relative mt-6 flex flex-wrap items-center gap-3">
              <CTA href="#/repo">Explore the Knowledge Graph</CTA>
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
