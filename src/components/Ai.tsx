import React from "react";
import CTA from "./CTA";

// Brand palette (match site)
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

/** Replace with real URLs */
const REQUEST_URL = "https://yourapp.com/request-ai";
const PARTNER_URL = "https://yourapp.com/partners";
const DEMO_URL = "https://yourapp.com/private-demo";
const DOCS_URL = "https://yourapp.com/ai-architecture";

/** Hero video (same one you use site-wide) */
const HERO_VIDEO_URL = "https://youtu.be/XwzU4RikbGs";
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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase"
      style={{
        border: `1px solid ${C.blue}`,
        color: C.blue,
        background: "#fff",
      }}
    >
      {children}
    </span>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="rounded-2xl bg-white/90 p-4 border"
      style={{ borderColor: C.gray }}
    >
      <div className="text-[11px] uppercase tracking-widest opacity-60">
        {k}
      </div>
      <div className="mt-1 text-base font-semibold" style={{ color: C.ink }}>
        {v}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-xs bg-white/90"
      style={{ borderColor: C.gray }}
    >
      {children}
    </span>
  );
}

function StepBubble({ n }: { n: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full w-7 h-7 text-xs font-bold"
      style={{ background: C.blue, color: "#fff" }}
    >
      {n}
    </span>
  );
}

export default function Ai() {
  const embed = toEmbed(HERO_VIDEO_URL);

  return (
    <>
      {/* HERO — match App.tsx spacing and layout */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
          {/* Left copy */}
          <div className="md:col-span-7">
            <Kicker>Private Beta • Invite Only</Kicker>
            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              The Business Idea Studio — AI Operator
            </h1>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              Not a chatbot. A <strong>founder’s operating system</strong> with
              agents that execute SOPs, coordinate collaborators, and surface
              the <strong>operating math</strong> that moves revenue.
              Human-in-the-loop by design. No public access.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA href={REQUEST_URL}>Request Private Access</CTA>
              <CTA href={DEMO_URL} variant="ghost">
                Book a Private Demo
              </CTA>
            </div>

            {/* quick trust strip */}
            <div className="mt-5 flex flex-wrap gap-2 opacity-95">
              <Tag>Agents + Copilot</Tag>
              <Tag>Approvals &amp; Scopes</Tag>
              <Tag>Audit Trail</Tag>
              <Tag>Proof Artifacts</Tag>
            </div>
          </div>

          {/* Right: centered YouTube + mini stats */}
          {/* Right: Video Card — centered within the right column */}
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
                      title="The Business Idea Studio — Network"
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
                  Watch: AI operator Overview
                </div>
                <p className="mt-1 text-xs opacity-80">
                  2–3 minutes. Agents + Copilot, approvals, logs, and proof
                  artifacts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* PRIMARY PILLARS */}
        <div className="mt-2 grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Operate
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Weekly cycles, zero drift
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Agents run your operating rhythm: pipeline checks, lead math,
              offer reviews, content plans, and post-mortems—always tied to
              proof.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Collaborate
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Humans &amp; agents in sync
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Structured hand-offs, role-based tasks, and partner invites.
              Agents keep context so nothing slips.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Control
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Approvals, scopes, audit trail
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Human approvals, least-privilege scopes, full logs and diffs,
              reversible changes.
            </p>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            Capabilities
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Copilot
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Operator Copilot
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Daily briefings, decision support, and next best action—turns
                noise into prioritized moves.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Decision logs</Tag>
                <Tag>Operating math</Tag>
                <Tag>Focus prompts</Tag>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Automation
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Playbook → Agent
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Convert one-pagers/SOPs into agentic workflows with approvals.
                Measure outcomes, not tasks.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>SOP builder</Tag>
                <Tag>Checkpoints</Tag>
                <Tag>Rollbacks</Tag>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Evidence
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Proof Engine
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Auto-collects metrics, artifacts, and snapshots; packages
                reviews/referrals to compound trust.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Reviews</Tag>
                <Tag>Referrals</Tag>
                <Tag>Snapshots</Tag>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Collab
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Partner Handoffs
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Invite operators for specific scopes. Agents translate context
                across teams and tools.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Scoped invites</Tag>
                <Tag>Role routing</Tag>
                <Tag>Context sync</Tag>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <CTA variant="ghost" href={DOCS_URL}>
              See the architecture →
            </CTA>
          </div>
        </div>

        {/* INTEGRATIONS */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            Integrations
          </h2>
          <p className="mt-2 text-sm opacity-90">
            Read-first, write-on-approval. Bring your stack; agents respect
            scopes and boundaries.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Notion",
              "Google Drive",
              "Calendly",
              "Stripe",
              "Meta Ads",
              "GA4",
              "Slack",
              "Airtable",
              "Zapier",
            ].map((x) => (
              <Tag key={x}>{x}</Tag>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS — simple, legible */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            How it works
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <StepBubble n={1} />
              <h3
                className="mt-3 text-lg font-semibold"
                style={{ color: C.ink }}
              >
                Connect &amp; scope
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Authorize tools with least-privilege scopes. Import SOPs or
                select one-pagers to start.
              </p>
            </div>
            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <StepBubble n={2} />
              <h3
                className="mt-3 text-lg font-semibold"
                style={{ color: C.ink }}
              >
                Approve the plan
              </h3>
              <p className="mt-2 text-sm opacity-90">
                AI proposes an operating plan tied to metrics and checkpoints.
                You approve each step.
              </p>
            </div>
            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <StepBubble n={3} />
              <h3
                className="mt-3 text-lg font-semibold"
                style={{ color: C.ink }}
              >
                Run, measure, prove
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Agents execute. You get logs, diffs, and proof artifacts—ready
                for team or client review.
              </p>
            </div>
          </div>
        </div>

        {/* ACCESS & SECURITY */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <h3 className="text-lg font-semibold" style={{ color: C.ink }}>
              Access Policy
            </h3>
            <ul className="mt-2 text-sm leading-6 opacity-90">
              <li>• Private beta; limited invites</li>
              <li>• Prioritize operators with active pipelines</li>
              <li>• Partner slots for agencies &amp; builders</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <CTA href={REQUEST_URL}>Request Private Access</CTA>
              <CTA href={PARTNER_URL} variant="ghost">
                Partner with us
              </CTA>
            </div>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <h3 className="text-lg font-semibold" style={{ color: C.ink }}>
              Safety &amp; Controls
            </h3>
            <ul className="mt-2 text-sm leading-6 opacity-90">
              <li>• Human-in-the-loop approvals</li>
              <li>• Scoped permissions per tool &amp; room</li>
              <li>• Full logs, diffs, and reversions</li>
              <li>• Data minimization; export &amp; delete on request</li>
            </ul>
            <div className="mt-4">
              <CTA variant="ghost" href="#/governance">
                Read our standards →
              </CTA>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border flex items-center justify-between flex-wrap gap-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-[15px] leading-relaxed opacity-90">
            Operate with agents. Collaborate without chaos. Keep control.
          </div>
          <div className="flex gap-2">
            <CTA href={REQUEST_URL}>Request Access</CTA>
            <CTA href={DEMO_URL} variant="ghost">
              Private Demo
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
