import React, { useMemo, Suspense } from "react";
import type { OnePager as LegacyOnePager } from "@/types/OnePager";
import CTA from "./CTA";
import { VIDEO_MAP } from "@/onepagers/videos";

// If you created DocViewer.tsx earlier, keep this import.
// If not, we inline a minimal PDF/MDX viewer below and use that.
import DocViewer from "./DocViewer";

// Local brand colors (match your palette)
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

// Reusable Card primitive
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/90 backdrop-blur p-6 md:p-7 shadow-sm ${className}`}
      style={{ borderColor: C.gray }}
    >
      {children}
    </div>
  );
}

/**
 * Parse a step description string like:
 * "Principle: ... Core Idea — ... Levers: ... Takeaway — ..."
 *
 * Supports delimiters ":", "-", "–", "—" (colon, hyphen, en dash, em dash)
 * and is case-insensitive. Accepts "Key Levers" or "Levers".
 */
function parseLabeledText(src: string): Array<{ label: string; text: string }> {
  const out: Array<{ label: string; text: string }> = [];
  if (!src) return out;

  const s = src.replace(/\s+/g, " ").trim();
  const re =
    /\b(Principle|Core\s*Idea|Key\s*Levers?|Levers?|Takeaway)\b\s*(?:[:\-–—])\s*/gi;

  const matches: { label: string; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    matches.push({
      label: m[1],
      start: m.index,
      end: re.lastIndex,
    });
  }

  if (matches.length === 0) {
    out.push({ label: "Principle", text: s });
    return out;
  }

  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const next = matches[i + 1];
    const raw = s.slice(cur.end, next ? next.start : s.length).trim();
    if (!raw) continue;

    const norm = cur.label.toLowerCase();
    let label = "Principle";
    if (norm.startsWith("core")) label = "Core Idea";
    else if (norm.startsWith("takeaway")) label = "Takeaway";
    else if (norm.indexOf("lever") !== -1) label = "Levers";

    out.push({ label, text: raw });
  }

  return out;
}

/* ---------------------- YOUTUBE EMBED HELPERS ---------------------- */

function parseYouTubeEmbed(url: string, start?: number) {
  if (!url) return null;
  try {
    const u = new URL(url);
    let id = "";

    if (u.hostname.includes("youtu.be")) {
      id = u.pathname.replace("/", "");
    }
    if (!id && u.searchParams.get("v")) {
      id = u.searchParams.get("v") || "";
    }
    if (!id && u.pathname.startsWith("/shorts/")) {
      id = u.pathname.split("/")[2] || "";
    }
    if (!id && u.pathname.startsWith("/embed/")) {
      id = u.pathname.split("/")[2] || "";
    }
    if (!id) return null;

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    const s =
      start ??
      Number(u.searchParams.get("t") || u.searchParams.get("start") || 0);
    if (!Number.isNaN(s) && s > 0) params.set("start", String(s));

    return {
      src: `https://www.youtube.com/embed/${id}?${params.toString()}`,
      id,
    };
  } catch {
    return null;
  }
}

function YouTubeEmbed({
  url,
  title = "Video",
  start,
}: {
  url: string;
  title?: string;
  start?: number;
}) {
  const embed = useMemo(() => parseYouTubeEmbed(url, start), [url, start]);
  if (!embed) return null;

  return (
    <div className="mt-6">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl border"
          src={embed.src}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

/* ---------------------- TYPES FOR AUTO-DOCS ---------------------- */

type Stage =
  | "self"
  | "identity"
  | "empathy"
  | "offer"
  | "systems"
  | "scale"
  | "proof";

type AutoDoc = {
  key: string;
  title: string;
  stage: Stage;
  type: "mdx" | "pdf";
  Component?: React.ComponentType<any>;
  url?: string;
  question?: string;
  hook?: string;
};

type ViewerPager = LegacyOnePager | AutoDoc;

/* ---------------------- MAIN VIEW ---------------------- */

export default function OnePagerView({
  pager,
  onBack,
}: {
  pager: ViewerPager;
  onBack: () => void;
}) {
  // Prefer inline pager.video; otherwise check centralized VIDEO_MAP (legacy)
  const videoCfg =
    (pager as any).video ?? (VIDEO_MAP as any)[(pager as any).key];

  // ── NEW: auto-indexed MDX/PDF path
  if ((pager as any).type === "mdx" || (pager as any).type === "pdf") {
    const title = (pager as any).title || (pager as any).key;

    return (
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: C.blue }}
          >
            ← Back to Documents
          </button>
          <div className="text-xs opacity-70">One-Pager</div>
        </div>

        <div
          className="mt-4 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
            color: "#fff",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h1>
          <div
            className="mt-6 h-px w-full"
            style={{ background: "rgba(255,255,255,.15)" }}
          />
          <div className="mt-6 text-xs opacity-75">
            Updated weekly • Evidence-led
          </div>
        </div>

        {/* Optional video helper if you want it for auto-docs too */}
        {videoCfg && (
          <YouTubeEmbed
            url={videoCfg.url}
            title={videoCfg.title}
            start={videoCfg.start}
          />
        )}

        <div className="mt-8">
          {/* MDX → prose; PDF → <object> viewer */}
          <Suspense fallback={<div className="py-16">Loading…</div>}>
            <DocViewer pager={pager as any} />
          </Suspense>
        </div>

        <Card className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-[15px] leading-relaxed opacity-90">
            Need help applying this play? Get a 48–72h action plan.
          </div>
          <div className="flex items-center gap-2">
            <CTA
              variant="ghost"
              href="#/repo"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              ← Documents
            </CTA>
            <CTA variant="lime" href="#/book-a-call">
              Book a Call
            </CTA>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold border no-print"
              style={{ borderColor: C.gray, color: C.text }}
            >
              Print PDF
            </button>
          </div>
        </Card>
      </section>
    );
  }

  // ── LEGACY PATH (structured TS one-pagers) ────────────────────────
  const kpis = (pager as any).kpis ?? [];
  const tools = (pager as any).tools ?? [];

  if ((pager as any).render) {
    return (
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: C.blue }}
          >
            ← Back to Documents
          </button>
          <div className="text-xs opacity-70">One-Pager (Legacy)</div>
        </div>

        {videoCfg && (
          <YouTubeEmbed
            url={videoCfg.url}
            title={videoCfg.title}
            start={videoCfg.start}
          />
        )}

        <div
          className="mt-6 rounded-2xl border bg-white shadow-sm"
          style={{ borderColor: C.gray }}
        >
          {(pager as any).render()}
        </div>
      </section>
    );
  }

  // Non-legacy structured (question/summary/steps) path
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: C.blue }}
        >
          ← Back to Documents
        </button>
        <div className="text-xs opacity-70">One-Pager</div>
      </div>

      {/* Hero */}
      <div
        className="mt-4 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
          color: "#fff",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-80">
              Question
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
              {(pager as any).question}
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-95">
              {(pager as any).hook}
            </p>
          </div>
          <span
            className="hidden md:inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background: "rgba(255,255,255,.08)",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          >
            One-Pager
          </span>
        </div>
        <div
          className="mt-6 h-px w-full"
          style={{ background: "rgba(255,255,255,.15)" }}
        />
        <div className="mt-6 text-xs opacity-75">
          Updated weekly • Evidence-led
        </div>
      </div>

      {/* ▶️ Video BELOW the main question */}
      {videoCfg && (
        <YouTubeEmbed
          url={videoCfg.url}
          title={videoCfg.title}
          start={videoCfg.start}
        />
      )}

      {/* Content stack */}
      <div className="mt-8 space-y-8">
        {/* Summary */}
        <Card>
          <h3
            className="text-xl font-bold"
            style={{ color: C.ink }}
            id="summary"
          >
            Summary
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed opacity-90">
            {(pager as any).summary}
          </p>
          <ul className="mt-4 space-y-2">
            {(pager as any).bullets?.map((b: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="mt-2 inline-block h-2 w-2 rounded-full"
                  style={{ background: C.blue }}
                />
                <span className="text-[15px] leading-relaxed opacity-90">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Steps */}
        <Card>
          <h3 className="text-xl font-bold" style={{ color: C.ink }} id="steps">
            What You’ll Do
          </h3>
          <ol className="mt-5 grid gap-4">
            {(pager as any).steps?.map((s: any, i: number) => {
              const labeled = parseLabeledText(s.d);
              return (
                <li
                  key={i}
                  className="group rounded-xl border p-5 bg-white hover:shadow-md transition"
                  style={{ borderColor: C.gray }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-sm text-white"
                      style={{ background: C.blue }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: C.ink }}
                    >
                      {s.t}
                    </div>
                  </div>

                  <div className="mt-3">
                    {labeled.map((blk, idx) => (
                      <p
                        key={idx}
                        className={`${
                          idx === 0 ? "mt-0" : "mt-4"
                        } text-[15px] leading-relaxed opacity-90`}
                      >
                        <span className="font-semibold">{blk.label}:</span>{" "}
                        {blk.text}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </Card>

        {/* KPIs + Tools */}
        {!!(kpis?.length || (pager as any).tools?.length) && (
          <div className="grid gap-4 md:grid-cols-2">
            {kpis?.length ? (
              <Card>
                <h3
                  className="text-xl font-bold"
                  style={{ color: C.ink }}
                  id="kpis"
                >
                  KPIs
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {kpis.map((k: string, i: number) => (
                    <span
                      key={i}
                      className="rounded-full border px-3 py-1 text-xs bg-white"
                      style={{ borderColor: C.gray }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </Card>
            ) : null}

            {(pager as any).tools?.length ? (
              <Card>
                <h3
                  className="text-xl font-bold"
                  style={{ color: C.ink }}
                  id="tools"
                >
                  Tools
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(pager as any).tools.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="rounded-full border px-3 py-1 text-xs bg-white"
                      style={{ borderColor: C.gray }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ) : null}
          </div>
        )}

        {/* CTA Panel */}
        <Card className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-[15px] leading-relaxed opacity-90">
            {(pager as any).cta}
          </div>
          <div className="flex items-center gap-2">
            <CTA
              variant="ghost"
              href="#/repo"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              ← Documents
            </CTA>
            <CTA variant="lime" href="#/book-a-call">
              Book a Call
            </CTA>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold border no-print"
              style={{ borderColor: C.gray, color: C.text }}
            >
              Print PDF
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
