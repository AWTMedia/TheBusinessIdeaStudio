import React, { useState, useEffect, lazy, Suspense } from "react";
import { onePagers, allDocItems } from "./onepagers/index.ts";
import type { OnePager } from "@/types/OnePager";
import CTA from "./components/CTA.tsx";
import Header from "./components/Header.tsx";
import OnePagerView from "./components/OnePagerView";
import BookACall from "./components/BookACall";

// ✅ Lazy-load heavy pages
const Repository = lazy(() => import("./components/Repository"));
const Faq = lazy(() => import("./components/Faq"));
const Governance = lazy(() => import("./components/Governance"));
const Community = lazy(() => import("./components/Community"));
const Ai = lazy(() => import("./components/Ai"));            // 👈 matches Ai.tsx
const Systems = lazy(() => import("./components/Software")); // 👈 loads Software.tsx
const KnowledgeGraph = lazy(() => import("./components/KnowledgeGraph")); // 👈 NEW

/**
 * The Business Idea Studio — Knowledge Graph + One-Pagers + Docs Repository
 * Positioning: 60+ mental models → Founder Psychology → Business Mechanics
 * Brand: blue #2F5DE8, cream #F2EDDF, ink #0B0F19, text #1C2431, accent #C9F93E, gray #E8E6DE
 */

// ------------------------------------------------------------------
// Brand palette
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

// Replace with your actual YouTube video
const HERO_VIDEO_URL = "https://youtu.be/XwzU4RikbGs";

// ------------------------------------------------------------------
// Icons
function Knight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M18 56h28v-5H18v5zm31-7H15V41c0-4.4 3.6-8 8-8h5l-4-5 9-15 7 5 6-4 5 6-8 7 5 6-8 8h-8c-2.2 0-4 1.8-4 4v6h21v5z"
        fill="currentColor"
      />
    </svg>
  );
}
function Eye({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M32 14C18 14 7 28 7 32s11 18 25 18 25-14 25-18S46 14 32 14zm0 28c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
        fill="currentColor"
      />
    </svg>
  );
}
function Check({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M20.285 6.708l-11 11a1 1 0 01-1.414 0l-4-4 1.414-1.414L8.5 15.586l10.293-10.293z"
        fill="currentColor"
      />
    </svg>
  );
}
function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M10 17l5-5-5-5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ------------------------------------------------------------------
// Primitives
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide"
      style={{ borderColor: C.blue, color: C.blue }}
    >
      <Eye /> {children}
    </span>
  );
}

// ------------------------------------------------------------------
// Mini Router (hash-based so refreshing keeps page)
type Route =
  | { page: "home" }
  | { page: "repo" }
  | { page: "onepager"; slug: string }
  | { page: "bookacall" }
  | { page: "faq" }
  | { page: "governance" }
  | { page: "community" }
  | { page: "ai" }
  | { page: "systems" }
  | { page: "graph" }; // 👈 NEW

const useHashRouter = () => {
  const parseHash = (): Route => {
    // Normalize the hash so we can support both "#/path" and "#path"
    let h = window.location.hash || "#/";
    h = h.replace(/^#/, ""); // remove '#'
    if (!h.startsWith("/")) h = "/" + h; // enforce leading '/'

    // strip query/hash fragments and trailing slashes
    const path = h.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

    // 🔁 Aliases:
    //   /compliance -> /governance (legacy)
    //   /skool      -> /community (friendly short-link)
    //   /software|/tools|/stack|/apps -> /systems
    //   /knowledge|/knowledge-graph|/kg -> /graph
    const normalized =
      path === "/compliance" ? "/governance" :
      path === "/skool" ? "/community" :
      /^\/(software|tools|stack|apps)$/i.test(path) ? "/systems" :
      /^\/(knowledge|knowledge-graph|kg)$/i.test(path) ? "/graph" :
      path;

    if (normalized.startsWith("/repo")) return { page: "repo" };
    if (normalized.startsWith("/book-a-call")) return { page: "bookacall" };
    if (normalized.startsWith("/faq")) return { page: "faq" };
    if (normalized.startsWith("/governance")) return { page: "governance" };
    if (normalized.startsWith("/community")) return { page: "community" };
    if (normalized.startsWith("/ai")) return { page: "ai" };
    if (normalized.startsWith("/systems")) return { page: "systems" };
    if (normalized.startsWith("/graph")) return { page: "graph" }; // 👈 NEW
    if (normalized.startsWith("/p/")) {
      const slug = normalized.slice(3);
      return { page: "onepager", slug };
    }
    return { page: "home" };
  };

  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const nav = (r: Route) => {
    if (r.page === "home") {
      window.location.hash = "/";
    } else if (r.page === "repo") {
      window.location.hash = "/repo";
    } else if (r.page === "bookacall") {
      window.location.hash = "/book-a-call";
    } else if (r.page === "faq") {
      window.location.hash = "/faq";
    } else if (r.page === "governance") {
      window.location.hash = "/governance";
    } else if (r.page === "community") {
      window.location.hash = "/community";
    } else if (r.page === "ai") {
      window.location.hash = "/ai";
    } else if (r.page === "systems") {
      window.location.hash = "/systems";
    } else if (r.page === "graph") {
      window.location.hash = "/graph";
    } else {
      window.location.hash = `/p/${(r as any).slug}`;
    }
  };

  return { route, nav };
};

// ------------------------------------------------------------------
// Psychological Stages (for landing page narrative)
const STAGES = [
  { k: "self", t: "Self-Mastery", d: "Attention, emotion, and energy management for founders." },
  { k: "identity", t: "Identity & Brand Perception", d: "How you’re perceived — authority, trust, and narrative." },
  { k: "empathy", t: "Audience Empathy", d: "Motivations, pains, and behaviors that drive demand." },
  { k: "offer", t: "Offer Psychology", d: "Value perception, pricing, and risk framing." },
  { k: "systems", t: "Systems Thinking", d: "Cognitive economy via processes, SOPs, and automation." },
  { k: "scale", t: "Behavioral Scaling", d: "Referrals, incentives, delegation, and leverage." },
  { k: "proof", t: "Proof & Legitimacy", d: "Authority signals, legal scaffolding, and real-world evidence." },
] as const;

// ------------------------------------------------------------------
// Small helper: YouTube -> embed URL
function toEmbed(url: string) {
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
    if (!id && u.searchParams.get("v")) id = u.searchParams.get("v") || "";
    if (!id && u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2] || "";
    if (!id && u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2] || "";
    if (!id) return null;
    const params = new URLSearchParams({ rel: "0", modestbranding: "1", playsinline: "1" });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------
function Home({
  onNavRepo,
  onOpenPager,
  onNavBook,
  onNavFaq,
  onNavGovernance,
  onNavCommunity,
  onNavAi,
  onNavSystems,
  onNavGraph, // 👈 NEW
}: {
  onNavRepo: () => void;
  onOpenPager: (k: string) => void;
  onNavBook: () => void;
  onNavFaq: () => void;
  onNavGovernance: () => void;
  onNavCommunity: () => void;
  onNavAi: () => void;
  onNavSystems: () => void;
  onNavGraph: () => void;
}) {
  const embed = toEmbed(HERO_VIDEO_URL);

  return (
    <>
      {/* Utility bar */}
      <div className="border-b bg-white/80" style={{ borderColor: C.gray }}>
        <div className="mx-auto max-w-6xl h-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 opacity-80">
            <a
              href="#/graph"
              className="inline-flex items-center gap-1 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavGraph();
              }}
            >
              <Eye /> Knowledge Graph
            </a>
            <span>• 60+ Mental Models</span>
            <span>• Evidence-led</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#/faq"
              className="hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavFaq();
              }}
            >
              FAQ
            </a>
            <a
              href="#/governance"
              className="hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavGovernance();
              }}
            >
              Governance
            </a>
            <a
              href="#/community"
              className="hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavCommunity();
              }}
            >
              Community
            </a>
            <a
              href="#/systems"
              className="hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavSystems();
              }}
            >
              Systems
            </a>
            <a
              href="#/ai"
              className="hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavAi();
              }}
            >
              AI (Private)
            </a>
          </div>
        </div>
      </div>

      {/* HERO — Founder Psychology → Business Mechanics (UNCHANGED) */}
      <section id="top" className="relative overflow-hidden" style={{ background: C.cream }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
          {/* Left: Message */}
          <div className="md:col-span-7">
            <Badge>Curriculum for the Entrepreneurial Brain</Badge>
            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              Founder Psychology → Business Mechanics.
            </h1>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              You’re not looking at random resources — you’ve captured{" "}
              <strong>60+ discrete mental models</strong>, each representing a{" "}
              <strong>behavioral bottleneck</strong> or{" "}
              <strong>psychological unlock</strong> in the founder’s journey. It’s a living{" "}
              <strong>knowledge graph</strong> you can execute.
            </p>

            <ul className="mt-5 space-y-2 text-sm opacity-90">
              <li>• Self-mastery → perception → empathy → offer → systems → scale → proof</li>
              <li>• Visual one-pagers — no meetings required</li>
              <li>• Updated weekly, evidence-led, free</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA
                href="#/graph"
                onClick={(e) => {
                  e.preventDefault();
                  onNavRepo();
                }}
              >
                Explore the Knowledge Graph
              </CTA>
              <CTA
                href="#/book-a-call"
                variant="ghost"
                onClick={(e) => {
                  e.preventDefault();
                  onNavBook();
                }}
              >
                Book a Strategy Call
              </CTA>
            </div>
          </div>

          {/* Right: Video Card */}
          <div className="md:col-span-5">
            <div className="rounded-3xl p-3 shadow-xl bg-white/90 border" style={{ borderColor: C.gray }}>
              <div className="rounded-2xl overflow-hidden">
                {embed ? (
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={embed}
                      title="The Business Idea Studio — Overview"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm opacity-80">Add a valid YouTube URL to HERO_VIDEO_URL.</div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold" style={{ color: C.ink }}>
                  Watch: How the Founder Psychology Graph Works
                </div>
                <p className="mt-1 text-xs opacity-80">
                  2–3 minutes. See how mental models map to systems you can implement today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification bar */}
      <section className="border-t border-b" style={{ borderColor: C.gray, background: "#FFF" }}>
        <div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center gap-4 text-xs sm:text-sm"
          style={{ color: C.ink }}
        >
          <span className="inline-flex items-center gap-2 font-medium">
            <Check className="w-4 h-4" /> Verified Free Resource
          </span>
          <span className="opacity-60">Updated weekly</span>
          <span className="opacity-60">Evidence-led</span>
          <span className="opacity-60">No paywall</span>
          <a
            href="#/governance"
            className="underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              onNavGovernance();
            }}
            style={{ color: C.blue }}
          >
            Standards
          </a>
        </div>
      </section>

      {/* Psychological Stages (overview cards) */}
      <section id="stages" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-black" style={{ color: C.ink }}>
          Psychological Stages of Building a Business
        </h2>
        <p className="mt-2 text-sm leading-6 opacity-90">
          Each stage bundles one-pagers that solve specific cognitive bottlenecks on the founder path.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {STAGES.map((s) => (
            <div key={s.k} className="rounded-2xl bg-white/90 p-6 border" style={{ borderColor: C.gray }}>
              <div className="text-xs uppercase tracking-widest opacity-60">Stage</div>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
                {s.t}
              </h3>
              <p className="mt-2 text-sm opacity-90">{s.d}</p>
              <div className="mt-4">
                <CTA
                  variant="ghost"
                  href="#/repo"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavRepo();
                  }}
                >
                  View related one-pagers →
                </CTA>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Library (spotlight a few) */}
      <section id="library" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-black" style={{ color: C.ink }}>
          Open Library
        </h2>
        <p className="mt-2 text-sm leading-6 opacity-90">Structured one-pagers to execute without meetings.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {allDocItems.slice(0, 9).map((it) => (
            <div key={it.k} className="rounded-2xl bg-white/90 p-6 border" style={{ borderColor: C.gray }}>
              <div className="text-xs uppercase tracking-widest opacity-60">One-pager</div>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
                {it.title}
              </h3>
              <div className="mt-4">
                <CTA
                  href={`#/p/${it.k}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPager(it.k);
                  }}
                >
                  Open →
                </CTA>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <CTA
            variant="ghost"
            href="#/repo"
            onClick={(e) => {
              e.preventDefault();
              onNavRepo();
            }}
          >
            Explore the full repository
          </CTA>
        </div>
      </section>

      {/* Governance & Quality teaser (kept for home page continuity) */}
      <section id="compliance" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl p-8" style={{ background: C.ink, color: "#fff" }}>
          <h2 className="text-3xl font-bold">Governance & Quality</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-sm font-semibold">Definition of Done</div>
              <ul className="mt-2 text-sm leading-6 opacity-95">
                <li>• Clear problem math</li>
                <li>• At least one proof artifact</li>
                <li>• Actionable steps only</li>
                <li>• Legible at mobile sizes</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-sm font-semibold">Editorial Standards</div>
              <ul className="mt-2 text-sm leading-6 opacity-95">
                <li>• Visual &gt; verbose</li>
                <li>• Evidence, not claims</li>
                <li>• Public postmortems</li>
                <li>• Ethical positioning</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-sm font-semibold">Privacy & Compliance</div>
              <ul className="mt-2 text-sm leading-6 opacity-95">
                <li>• POPIA/GDPR aware</li>
                <li>• Client consent before publication</li>
                <li>• Data minimized, anonymized when needed</li>
                <li>• Security reviews on tools/flows</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <CTA
              variant="ghostLight"
              href="#/governance"
              onClick={(e) => {
                e.preventDefault();
                onNavGovernance();
              }}
            >
              Read our Standards →
            </CTA>
          </div>
        </div>
      </section>

      {/* FAQ teaser kept on home for convenience */}
      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-black" style={{ color: C.ink }}>
          FAQ
        </h2>
        <div className="mt-4 rounded-2xl bg-white/90 p-5 border" style={{ borderColor: C.gray }}>
          {[
            { q: "Is everything free?", a: "Yes. We unify the method and give the steps away. Save the posts, run the plays, share the wins." },
            { q: "How often do you publish?", a: "Weekly drops: at least one idea deck and one systems card." },
            { q: "What’s the fastest way to begin?", a: "Open the repository, pick a psychological stage, run one one-pager for 48–72 hours." },
            { q: "Who is this for?", a: "Solo founders and small teams who prefer clear, visual systems over theory." },
            { q: "Commercial use?", a: "Yes. Implement freely. Keep proper attribution when sharing visuals/snippets." },
            { q: "Idea requests?", a: "DM 'start' with your niche + problem. We prioritize pains with strong signal and fast time-to-validation." },
            { q: "How do you pick ideas?", a: "By pain severity, distribution clarity, time-to-signal, and repeatability using our viability rubric." },
            { q: "Tools you use?", a: "Notion, Figma, Meta Ads, GA4, Calendly, a light CRM stack." },
            { q: "Where do updates go?", a: "Instagram for drops, this page for structure, and a living Notion for archives." },
            { q: "How to get featured?", a: "DM screenshots or metrics; we feature wins weekly (anonymized if preferred)." },
          ].map((f, i) => (
            <details key={i} className="group py-3 border-b last:border-b-0" style={{ borderColor: C.gray }}>
              <summary className="cursor-pointer text-base font-medium">{f.q}</summary>
              <p className="mt-1 text-sm leading-6 opacity-90">{f.a}</p>
            </details>
          ))}
          <div className="mt-4">
            <CTA
              variant="ghost"
              href="#/faq"
              onClick={(e) => {
                e.preventDefault();
                onNavFaq();
              }}
            >
              Open full FAQ →
            </CTA>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: C.gray, background: C.cream }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl text-white" style={{ background: C.blue }}>
              <Knight />
            </span>
            <span className="text-sm font-semibold" style={{ color: C.ink }}>
              THE BUSINESS IDEA STUDIO
            </span>
          </div>
          <nav className="text-xs justify-self-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                onNavRepo();
              }}
              href="#/repo"
              className="mx-3 hover:opacity-80"
            >
              Repository
            </a>
            <a href="#stages" className="mx-3 hover:opacity-80">
              Stages
            </a>
            <a href="#library" className="mx-3 hover:opacity-80">
              Library
            </a>
            <a
              href="#/governance"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavGovernance();
              }}
            >
              Governance
            </a>
            <a
              href="#/faq"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavFaq();
              }}
            >
              FAQ
            </a>
            <a
              href="#/community"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavCommunity();
              }}
            >
              Community
            </a>
            <a
              href="#/systems"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavSystems();
              }}
            >
              Systems
            </a>
            <a
              href="#/ai"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavAi();
              }}
            >
              AI
            </a>
            <a
              href="#/graph"
              className="mx-3 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                onNavGraph();
              }}
            >
              Knowledge Graph
            </a>
          </nav>
          <div className="text-right text-xs opacity-70">
            © {new Date().getFullYear()} The Business Idea Studio — Founder Psychology → Business Mechanics.
          </div>
        </div>
      </footer>
    </>
  );
}

// ------------------------------------------------------------------
// App Root
export default function App() {
  const { route, nav } = useHashRouter();

  useEffect(() => {
    if (!window.location.hash) nav({ page: "home" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page]);

  // 🔃 Redirect helpers for legacy/friendly hashes
  useEffect(() => {
    const h = window.location.hash;
    if (/#\/?compliance$/i.test(h)) window.location.hash = "/governance";
    if (/#\/?skool$/i.test(h)) window.location.hash = "/community";
    if (/#\/?(software|tools|stack|apps)$/i.test(h)) window.location.hash = "/systems";
    if (/#\/?(knowledge|knowledge-graph|kg)$/i.test(h)) window.location.hash = "/graph";
  }, [route.page]);

  const onNavHome = () => nav({ page: "home" });
  const onNavRepo = () => nav({ page: "repo" });
  const onNavBook = () => nav({ page: "bookacall" });
  const onNavFaq = () => nav({ page: "faq" });
  const onNavGovernance = () => nav({ page: "governance" });
  const onNavCommunity = () => nav({ page: "community" });
  const onNavAi = () => nav({ page: "ai" });
  const onNavSystems = () => nav({ page: "systems" });
  const onNavGraph = () => nav({ page: "graph" }); // 👈 NEW
  const onOpenPager = (k: string) => nav({ page: "onepager", slug: k });

  const currentPager: OnePager | undefined =
    route.page === "onepager" ? onePagers[route.slug] || onePagers["not-found"] : undefined;

  return (
    <main className="min-h-screen" style={{ background: C.cream, color: C.text }}>
      <Header onNavHome={onNavHome} onNavRepo={onNavRepo} />
      {route.page === "home" && (
        <Home
          onNavRepo={onNavRepo}
          onOpenPager={onOpenPager}
          onNavBook={onNavBook}
          onNavFaq={onNavFaq}
          onNavGovernance={onNavGovernance}
          onNavCommunity={onNavCommunity}
          onNavAi={onNavAi}
          onNavSystems={onNavSystems}
          onNavGraph={onNavGraph}
        />
      )}

      {route.page === "repo" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading repository…</section>}
        >
          <Repository onOpenPager={onOpenPager} />
        </Suspense>
      )}

      {route.page === "faq" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading FAQ…</section>}
        >
          <Faq />
        </Suspense>
      )}

      {route.page === "governance" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading Governance…</section>}
        >
          <Governance />
        </Suspense>
      )}

      {route.page === "community" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading Community…</section>}
        >
          <Community />
        </Suspense>
      )}

      {route.page === "systems" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading Systems…</section>}
        >
          <Systems />
        </Suspense>
      )}

      {route.page === "ai" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading AI…</section>}
        >
          <Ai />
        </Suspense>
      )}

      {route.page === "graph" && (
        <Suspense
          fallback={<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">Loading Knowledge Graph…</section>}
        >
          <KnowledgeGraph />
        </Suspense>
      )}

      {route.page === "bookacall" && <BookACall />}

      {route.page === "onepager" && currentPager && <OnePagerView pager={currentPager} onBack={onNavRepo} />}

      {route.page === "onepager" && !currentPager && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border bg-white/90 p-8" style={{ borderColor: C.gray }}>
            <h2 className="text-2xl font-bold" style={{ color: C.ink }}>
              Coming soon
            </h2>
            <p className="mt-2 text-sm opacity-90">
              This one-pager isn’t live yet. Check the Documents Repository for available pages.
            </p>
            <div className="mt-4">
              <CTA
                href="#/repo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavRepo();
                }}
              >
                Back to Documents
              </CTA>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}