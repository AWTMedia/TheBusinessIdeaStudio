import React, { useState, useEffect, lazy, Suspense } from "react";
import { onePagers, allDocItems } from "./onepagers/index.ts";
import type { OnePager } from "@/types/OnePager";
import CTA from "./components/CTA.tsx";
import Header from "./components/Header.tsx";
import OnePagerView from "./components/OnePagerView";
import BookACall from "./components/BookACall";
import UtilityStrip from "./components/UtilityStrip";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// Lazy pages
const Repository = lazy(() => import("./components/Repository"));
const Faq = lazy(() => import("./components/Faq"));
const Governance = lazy(() => import("./components/Governance"));
const Community = lazy(() => import("./components/Community"));
const Ai = lazy(() => import("./components/Ai"));
const Systems = lazy(() => import("./components/Software"));
const KnowledgeGraph = lazy(() => import("./components/KnowledgeGraph"));
const FounderMastery = lazy(() => import("./components/FounderMastery"));
const BusinessSystems = lazy(() => import("./components/BusinessSystems"));
const OfferInstall = lazy(() => import("./components/OfferInstall"));

const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

const HERO_VIDEO_URL = "https://youtu.be/XwzU4RikbGs";

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
  | { page: "graph" }
  | { page: "founder" }
  | { page: "bizsystems" }
  | { page: "offer" };

const useHashRouter = () => {
  const parseHash = (): Route => {
    let h = window.location.hash || "#/";
    h = h.replace(/^#/, "");
    if (!h.startsWith("/")) h = "/" + h;
    const path = h.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

    // alias / mappings
    const normalized =
      path === "/compliance"
        ? "/governance"
        : path === "/skool"
        ? "/community"
        : /^\/(software|tools|stack|apps)$/i.test(path)
        ? "/systems"
        : /^\/(knowledge|knowledge-graph|kg)$/i.test(path)
        ? "/graph"
        : path;

    if (normalized.startsWith("/repo")) return { page: "repo" };
    if (normalized.startsWith("/book-a-call")) return { page: "bookacall" };
    if (normalized.startsWith("/faq")) return { page: "faq" };
    if (normalized.startsWith("/governance")) return { page: "governance" };
    if (normalized.startsWith("/community")) return { page: "community" };
    if (normalized.startsWith("/ai")) return { page: "ai" };
    if (normalized.startsWith("/systems")) return { page: "systems" };
    if (normalized.startsWith("/graph")) return { page: "graph" };
    if (normalized.startsWith("/founder-mastery")) return { page: "founder" };
    if (normalized.startsWith("/business-systems"))
      return { page: "bizsystems" };
    if (normalized.startsWith("/offer-install")) return { page: "offer" };

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
    if (r.page === "home") window.location.hash = "/";
    else if (r.page === "repo") window.location.hash = "/repo";
    else if (r.page === "bookacall") window.location.hash = "/book-a-call";
    else if (r.page === "faq") window.location.hash = "/faq";
    else if (r.page === "governance") window.location.hash = "/governance";
    else if (r.page === "community") window.location.hash = "/community";
    else if (r.page === "ai") window.location.hash = "/ai";
    else if (r.page === "systems") window.location.hash = "/systems";
    else if (r.page === "graph") window.location.hash = "/graph";
    else if (r.page === "founder")
      window.location.hash = "/founder-mastery";
    else if (r.page === "bizsystems")
      window.location.hash = "/business-systems";
    else if (r.page === "offer")
      window.location.hash = "/offer-install";
    else window.location.hash = `/p/${(r as any).slug}`;
  };

  return { route, nav };
};

const STAGES = [
  {
    k: "self",
    t: "Self-Mastery",
    d: "Attention, emotion, and energy management for founders.",
  },
  {
    k: "identity",
    t: "Identity & Brand Perception",
    d: "How you’re perceived — authority, trust, and narrative.",
  },
  {
    k: "empathy",
    t: "Audience Empathy",
    d: "Motivations, pains, and behaviors that drive demand.",
  },
  {
    k: "offer",
    t: "Offer Psychology",
    d: "Value perception, pricing, and risk framing.",
  },
  {
    k: "systems",
    t: "Systems Thinking",
    d: "Cognitive economy via processes, SOPs, and automation.",
  },
  {
    k: "scale",
    t: "Behavioral Scaling",
    d: "Referrals, incentives, delegation, and leverage.",
  },
  {
    k: "proof",
    t: "Proof & Legitimacy",
    d: "Authority signals, legal scaffolding, and real-world evidence.",
  },
] as const;

function toEmbed(url: string) {
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
    if (!id && u.searchParams.get("v")) id = u.searchParams.get("v") || "";
    if (!id && u.pathname.startsWith("/shorts/"))
      id = u.pathname.split("/")[2] || "";
    if (!id && u.pathname.startsWith("/embed/"))
      id = u.pathname.split("/")[2] || "";
    if (!id) return null;
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  } catch {
    return null;
  }
}

function Home({
  onNavRepo,
  onOpenPager,
  onNavBook,
  onNavGovernance,
  onNavGraph,
  // optional
  onNavCommunity,
  onNavSystems,
  onNavAi,
}: {
  onNavRepo: () => void;
  onOpenPager: (k: string) => void;
  onNavBook: () => void;
  onNavGovernance: () => void;
  onNavGraph: () => void;
  onNavCommunity?: () => void;
  onNavSystems?: () => void;
  onNavAi?: () => void;
  onNavFaq?: () => void;
}) {
  const embed = toEmbed(HERO_VIDEO_URL);

  return (
    <>
      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: C.cream }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
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
              <strong>psychological unlock</strong> in the founder’s journey.
            </p>
            <ul className="mt-5 space-y-2 text-sm opacity-90">
              <li>
                • Self-mastery → perception → empathy → offer → systems → scale
                → proof
              </li>
              <li>• Visual one-pagers — no meetings required</li>
              <li>• Updated weekly, evidence-led, free</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTA
                href="#/repo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavRepo();
                }}
              >
                Explore the Library
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
          <div className="md:col-span-5 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px]"
              style={{ borderColor: C.gray }}
            >
              <div className="rounded-2xl overflow-hidden">
                {embed ? (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
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
                  <div className="p-6 text-sm opacity-80">
                    Add a valid YouTube URL to HERO_VIDEO_URL.
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold" style={{ color: C.ink }}>
                  Watch: How the Founder Psychology Graph Works
                </div>
                <p className="mt-1 text-xs opacity-80">
                  2–3 minutes. See how mental models map to systems you can
                  implement today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification bar */}
      <section
        className="border-t border-b"
        style={{ borderColor: C.gray, background: "#FFF" }}
      >
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

      {/* 1) Psychological Stages */}
      <section
        id="stages"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl font-black" style={{ color: C.ink }}>
          Psychological Stages of Building a Business
        </h2>
        <p className="mt-2 text-sm leading-6 opacity-90">
          Each stage bundles one-pagers that solve specific cognitive
          bottlenecks on the founder path.
        </p>

        <div className="mt-6 grid gap-4">
          {STAGES.map((s, i) => (
            <div
              key={s.k}
              className="rounded-2xl bg-white/90 p-6 border"
              style={{ borderColor: C.gray }}
            >
              <div className="grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8">
                  <div className="flex flex-col text-left">
                    <div className="text-xs uppercase tracking-widest opacity-60">
                      Stage {i + 1}
                    </div>
                    <h3
                      className="mt-1 text-lg font-semibold"
                      style={{ color: C.ink }}
                    >
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm opacity-90">{s.d}</p>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="h-full w-full flex items-center justify-center">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trio intro heading */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-2 pb-4">
        <h2 className="text-3xl font-black" style={{ color: C.ink }}>
          Community, Software & AI
        </h2>
        <p className="mt-2 text-sm leading-6 opacity-90">
          Three pillars that power your operating system: people for
          accountability, tools for execution, and agents for leverage.
        </p>
      </section>

      {/* 2) Community */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px] w-full"
              style={{ borderColor: C.gray }}
            >
              <div className="rounded-2xl overflow-hidden">
                {toEmbed(HERO_VIDEO_URL) ? (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={toEmbed(HERO_VIDEO_URL)!}
                      title="Community overview"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm opacity-80">
                    Add a valid YouTube URL to HERO_VIDEO_URL.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-6 self-center">
            <div className="md:text-center md:max-w-[560px] md:mx-auto">
              <h3 className="text-2xl font-bold" style={{ color: C.ink }}>
                The Business Idea Studio — Community
              </h3>
              <p className="mt-3 text-sm leading-6 opacity-90 md:max-w-none md:mx-auto">
                Operator-led pods, AMAs, and a weekly action cadence. Proof over
                posture. Compound results with peers in a private Skool network.
              </p>
              <div className="mt-4">
                <CTA
                  href="#/community"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavCommunity?.();
                  }}
                >
                  Explore Community
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Software */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 self-center">
            <div className="md:text-center md:max-w-[560px] md:mx-auto">
              <h3 className="text-2xl font-bold" style={{ color: C.ink }}>
                The Business Idea Studio — Software
              </h3>
              <p className="mt-3 text-sm leading-6 opacity-90 md:max-w-none md:mx-auto">
                Tools + connections that reduce cognitive load and turn
                psychology into operating mechanics. Ship weekly with playbooks
                and integrated workflows.
              </p>
              <div className="mt-4">
                <CTA
                  href="#/systems"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavSystems?.();
                  }}
                >
                  Explore Software
                </CTA>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px] w-full"
              style={{ borderColor: C.gray }}
            >
              <div className="rounded-2xl overflow-hidden">
                {toEmbed(HERO_VIDEO_URL) ? (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={toEmbed(HERO_VIDEO_URL)!}
                      title="Software overview"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm opacity-80">
                    Add a valid YouTube URL to HERO_VIDEO_URL.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) AI */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px] w-full"
              style={{ borderColor: C.gray }}
            >
              <div className="rounded-2xl overflow-hidden">
                {toEmbed(HERO_VIDEO_URL) ? (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={toEmbed(HERO_VIDEO_URL)!}
                      title="AI Operator overview"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm opacity-80">
                    Add a valid YouTube URL to HERO_VIDEO_URL.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-6 self-center">
            <div className="md:text-center md:max-w-[560px] md:mx-auto">
              <h3 className="text-2xl font-bold" style={{ color: C.ink }}>
                The Business Idea Studio — AI Operator
              </h3>
              <p className="mt-3 text-sm leading-6 opacity-90 md:max-w-none md:mx-auto">
                Agents + copilot that execute SOPs with human approval, scopes,
                and an audit trail. Private beta; invite-only access.
              </p>
              <div className="mt-4">
                <CTA
                  href="#/ai"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavAi?.();
                  }}
                >
                  Explore AI
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Open Library */}
      <section
        id="library"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid md:grid-cols-12 items-center gap-4">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-black" style={{ color: C.ink }}>
              Open Library
            </h2>
            <p className="mt-2 text-sm leading-6 opacity-90">
              Structured one-pagers to execute without meetings.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="w-full h-full flex items-center justify-center">
              <CTA
                variant="ghost"
                href="#/repo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavRepo();
                }}
              >
                Explore the full library
              </CTA>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(allDocItems ?? []).slice(0, 9).map((it) => (
            <div
              key={it.k}
              className="rounded-2xl bg-white/90 p-6 border"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                One-pager
              </div>
              <h3
                className="mt-1 text-lg font-semibold"
                style={{ color: C.ink }}
              >
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
      </section>

      {/* Book a Call CTA (hero style) */}
      <section
        className="relative overflow-hidden"
        style={{ background: C.cream }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase"
              style={{
                border: `1px solid ${C.blue}`,
                color: C.blue,
                background: "#fff",
              }}
            >
              Strategy Call
            </span>
            <h2
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              Ready to turn insight into operating moves?
            </h2>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              We diagnose constraints, pick the lowest-lift play, and leave you
              with a 48–72 hour plan you can run this week.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA
                href="#/book-a-call"
                onClick={(e) => {
                  e.preventDefault();
                  onNavBook();
                }}
              >
                Book a Call
              </CTA>
              <CTA variant="ghost" href="#/repo">
                Browse Playbooks
              </CTA>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 opacity-95 text-xs">
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray }}
              >
                Evidence-led
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray }}
              >
                No fluff
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray }}
              >
                Action in 48–72h
              </span>
            </div>
          </div>

          <div className="md:col-span-5 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px]"
              style={{ borderColor: C.gray }}
            >
              <div className="rounded-2xl overflow-hidden">
                {toEmbed(HERO_VIDEO_URL) ? (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={toEmbed(HERO_VIDEO_URL)!}
                      title="What happens on the Strategy Call"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm opacity-80">
                    Add a valid YouTube URL to HERO_VIDEO_URL.
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold" style={{ color: C.ink }}>
                  Watch: What happens on the call
                </div>
                <p className="mt-1 text-xs opacity-80">
                  15–25 minutes. We map your bottleneck, pick a play, and
                  outline next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  useEffect(() => {
    const h = window.location.hash;
    if (/#\/?compliance$/i.test(h)) window.location.hash = "/governance";
    if (/#\/?skool$/i.test(h)) window.location.hash = "/community";
    if (/#\/?(software|tools|stack|apps)$/i.test(h))
      window.location.hash = "/systems";
    if (/#\/?(knowledge|knowledge-graph|kg)$/i.test(h))
      window.location.hash = "/graph";
  }, [route.page]);

  const onNavHome = () => nav({ page: "home" });
  const onNavRepo = () => nav({ page: "repo" });
  const onNavBook = () => nav({ page: "bookacall" });
  const onNavFaq = () => nav({ page: "faq" });
  const onNavGovernance = () => nav({ page: "governance" });
  const onNavCommunity = () => nav({ page: "community" });
  const onNavAi = () => nav({ page: "ai" });
  const onNavSystems = () => nav({ page: "systems" });
  const onNavGraph = () => nav({ page: "graph" });

  // NEW
  const onNavFounder = () => nav({ page: "founder" });
  const onNavBizSystems = () => nav({ page: "bizsystems" });
  const onNavOffer = () => nav({ page: "offer" });

  const onOpenPager = (k: string) => nav({ page: "onepager", slug: k });

  const currentPager: OnePager | undefined =
    route.page === "onepager"
      ? onePagers[(route as any).slug] || onePagers["not-found"]
      : undefined;

  // ====== SEO per route ======
  const OG_IMAGE = "/og-default.png"; // matches your /public file
  const isClient = typeof window !== "undefined";
  const origin = isClient ? window.location.origin : "";
  const currentPagerTitle =
    (currentPager as any)?.title ??
    (currentPager as any)?.name ??
    (route.page === "onepager"
      ? (route as any).slug?.replace(/-/g, " ")
      : undefined) ??
    "One-Pager";

  const seoFor = (r: Route) => {
    switch (r.page) {
      case "home":
        return {
          title:
            "The Business Idea Studio — Founder Psychology → Business Mechanics",
          description:
            "A living knowledge graph of 60+ mental models mapped to one-pagers, systems, and proofs you can run today.",
          canonicalPath: "/",
          ogImage: OG_IMAGE,
          jsonLd: [
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Business Idea Studio",
              url: origin + "/#/",
              logo: origin + "/logo.png",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Business Idea Studio",
              url: origin + "/#/",
              potentialAction: {
                "@type": "SearchAction",
                target: origin + "/#/repo?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ],
        };
      case "graph":
        return {
          title:
            "Knowledge Graph — Psychological Stages of Building a Business",
          description:
            "Explore the seven psychological stages—self-mastery to proof—and the one-pagers that unlock each.",
          canonicalPath: "/graph",
          ogImage: OG_IMAGE,
        };
      case "community":
        return {
          title: "Community — Operator Pods & Weekly Execution",
          description:
            "Accountability pods, AMAs, and a weekly cadence. Proof over posture.",
          canonicalPath: "/community",
          ogImage: OG_IMAGE,
        };
      case "systems":
        return {
          title: "Software — Tools that Turn Psychology into Mechanics",
          description:
            "Workflow and tooling that reduce cognitive load and help you ship weekly.",
          canonicalPath: "/systems",
          ogImage: OG_IMAGE,
        };
      case "ai":
        return {
          title: "AI Operator — Agents & Copilot (Private Beta)",
          description:
            "Approve, scope, and audit AI agents that execute SOPs with a human-in-the-loop.",
          canonicalPath: "/ai",
          ogImage: OG_IMAGE,
        };
      case "repo":
        return {
          title: "Open Library — One-Pagers Repository",
          description:
            "Structured, evidence-led one-pagers. No meetings required.",
          canonicalPath: "/repo",
          ogImage: OG_IMAGE,
        };
      case "faq":
        return {
          title: "FAQ — The Business Idea Studio",
          description:
            "Answers about our playbooks, standards, and how to use the graph.",
          canonicalPath: "/faq",
          ogImage: OG_IMAGE,
        };
      case "governance":
        return {
          title: "Governance — Editorial, Evidence & Safety Standards",
          description:
            "How we protect signal, maintain editorial integrity, and keep the graph commercially reliable.",
          canonicalPath: "/governance",
          ogImage: OG_IMAGE,
        };
      case "bookacall":
        return {
          title: "Book a Strategy Call — Diagnose & Ship in 48–72h",
          description:
            "We map the bottleneck, pick the lowest-lift play, and leave you with a 48–72h action plan.",
          canonicalPath: "/book-a-call",
          ogImage: OG_IMAGE,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Strategy Call",
            provider: {
              "@type": "Organization",
              name: "The Business Idea Studio",
            },
            areaServed: "Global",
            url: origin + "/#/book-a-call",
          },
        };
      case "founder":
        return {
          title: "Founder Mastery — The 7 Stages of Becoming a Business Typhoon",
          description:
            "The psychological progression: control → conviction → resonance → persuasion → rhythm → leverage → embodied authority.",
          canonicalPath: "/founder-mastery",
          ogImage: OG_IMAGE,
        };
      case "bizsystems":
        return {
          title: "Business Systems — Weekly Operating Rhythm",
          description:
            "Your execution engine: scorecards, cadence, operating loops. This is where psychology becomes logistics.",
          canonicalPath: "/business-systems",
          ogImage: OG_IMAGE,
        };
      case "offer":
        return {
          title:
            "Offer Install Sprint — We Build Your Acquisition & Delivery Machine",
          description:
            "We install your ICP, offer, proof, funnel, booking stack, close script, outbound rhythm, and onboarding in 30–45 days.",
          canonicalPath: "/offer-install",
          ogImage: OG_IMAGE,
        };
      case "onepager":
        return {
          title: `${currentPagerTitle} — One-Pager`,
          description:
            "Visual, evidence-led one-pager you can run without meetings.",
          canonicalPath: `/p/${(route as any).slug}`,
          ogImage: OG_IMAGE,
        };
      default:
        return {
          title: "The Business Idea Studio",
          description:
            "A living knowledge graph of founder psychology → business mechanics.",
          canonicalPath: "/",
          ogImage: OG_IMAGE,
        };
    }
  };
  // ====== /SEO per route ======

  const showStrip = route.page !== "onepager";
  const stripActive =
    route.page === "faq"
      ? "faq"
      : route.page === "governance"
      ? "governance"
      : route.page === "community"
      ? "community"
      : route.page === "systems"
      ? "systems"
      : route.page === "ai"
      ? "ai"
      : route.page === "graph"
      ? "graph"
      : route.page === "repo"
      ? "repo"
      : route.page === "founder"
      ? "home"
      : route.page === "bizsystems"
      ? "home"
      : route.page === "offer"
      ? "home"
      : "home";

  return (
    <main
      className="min-h-screen"
      style={{ background: C.cream, color: C.text }}
    >
      {/* Only run SEO on the client */}
      {isClient && <SEO {...seoFor(route)} />}

      <Header onNavHome={onNavHome} onNavRepo={onNavRepo} />

      {showStrip && (
        <UtilityStrip
          active={stripActive}
          onNavFaq={onNavFaq}
          onNavGovernance={onNavGovernance}
          onNavCommunity={onNavCommunity}
          onNavSystems={onNavSystems}
          onNavAi={onNavAi}
          onNavGraph={onNavGraph}
        />
      )}

      {route.page === "home" && (
        <Home
          onNavRepo={onNavRepo}
          onOpenPager={onOpenPager}
          onNavBook={onNavBook}
          onNavGovernance={onNavGovernance}
          onNavGraph={onNavGraph}
          onNavCommunity={onNavCommunity}
          onNavSystems={onNavSystems}
          onNavAi={onNavAi}
          onNavFaq={onNavFaq}
        />
      )}

      {route.page === "repo" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading repository…
            </section>
          }
        >
          <Repository onOpenPager={onOpenPager} />
        </Suspense>
      )}

      {route.page === "faq" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading FAQ…
            </section>
          }
        >
          <Faq />
        </Suspense>
      )}

      {route.page === "governance" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Governance…
            </section>
          }
        >
          <Governance />
        </Suspense>
      )}

      {route.page === "community" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Community…
            </section>
          }
        >
          <Community />
        </Suspense>
      )}

      {route.page === "systems" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Systems…
            </section>
          }
        >
          <Systems />
        </Suspense>
      )}

      {route.page === "ai" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading AI…
            </section>
          }
        >
          <Ai />
        </Suspense>
      )}

      {route.page === "graph" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Knowledge Graph…
            </section>
          }
        >
          <KnowledgeGraph />
        </Suspense>
      )}

      {route.page === "founder" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Founder Mastery…
            </section>
          }
        >
          <FounderMastery />
        </Suspense>
      )}

      {route.page === "bizsystems" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Business Systems…
            </section>
          }
        >
          <BusinessSystems />
        </Suspense>
      )}

      {route.page === "offer" && (
        <Suspense
          fallback={
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              Loading Offer Install…
            </section>
          }
        >
          <OfferInstall />
        </Suspense>
      )}

      {route.page === "bookacall" && <BookACall />}

      {route.page === "onepager" && currentPager && (
        <OnePagerView pager={currentPager} onBack={onNavRepo} />
      )}

      {route.page === "onepager" && !currentPager && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="rounded-2xl border bg-white/90 p-8"
            style={{ borderColor: C.gray }}
          >
            <h2 className="text-2xl font-bold" style={{ color: C.ink }}>
              Coming soon
            </h2>
            <p className="mt-2 text-sm opacity-90">
              This one-pager isn’t live yet. Check the Documents Repository for
              available pages.
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

      {showStrip && <Footer />}
    </main>
  );
}
