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
const SIGNUP_URL = "https://yourapp.com/early-access";
const DEMO_URL = "https://yourapp.com/demo";
const DOCS_URL = "https://yourapp.com/docs";
const INTEGRATIONS_URL = "https://yourapp.com/integrations";

// YouTube for the hero
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

export default function Software() {
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
          {/* Left: copy */}
          <div className="md:col-span-7">
            <Kicker>Product</Kicker>
            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              The Business Idea Studio — Software
            </h1>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              You don’t need another dashboard — you need a system that turns{" "}
              <strong>founder psychology into business mechanics</strong>. The
              workspace gives you the <strong>tools</strong> to execute and the{" "}
              <strong>connections</strong> to move faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTA href={SIGNUP_URL}>Get Early Access</CTA>
              <CTA href={DEMO_URL} variant="ghost">
                Book a Demo
              </CTA>
            </div>
            {/* chips */}
            <div className="mt-5 flex flex-wrap gap-2 opacity-95">
              <Tag>Tools + Connections</Tag>
              <Tag>Evidence-led</Tag>
              <Tag>Weekly ship cadence</Tag>
            </div>
          </div>

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
                  Watch: How the Software Works
                </div>
                <p className="mt-1 text-xs opacity-80">
                  2–3 minutes. Offer Lab, Demand Engine, Ops OS, and Proof &
                  Partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Value props */}
        <div className="mt-2 grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Clarity
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Operate with the right math
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Replace opinion with operating math: lead goals, offer economics,
              capacity &amp; pricing, and viability scorecards.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Speed
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Ship more, think less
            </h3>
            <p className="mt-2 text-sm opacity-90">
              SOP builders, weekly action generators, and one-click templates
              reduce cognitive load and decision fatigue.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Leverage
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              People &amp; proof on tap
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Operator network, referral engine, and playbook sharing turn
              individual progress into compounding outcomes.
            </p>
          </div>
        </div>

        {/* Product modules */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            Product Modules
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-[11px] uppercase tracking-widest opacity-60">
                Module
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Offer Lab
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Price &amp; package with confidence. Model CAC, ASP,
                floor/target/anchor, and validate in 7 days.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Pricing calc</Tag>
                <Tag>Validation flows</Tag>
                <Tag>Anchoring</Tag>
              </div>
              <div className="mt-4">
                <CTA variant="ghost" href={DOCS_URL + "#offer-lab"}>
                  Open docs →
                </CTA>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text:[11px] uppercase tracking-widest opacity-60">
                Module
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Demand Engine
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Run a full Market → Lead Gen → Nurture → Conversion pipeline
                with bottleneck diagnostics.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Funnel map</Tag>
                <Tag>Lead targets</Tag>
                <Tag>Creative planner</Tag>
              </div>
              <div className="mt-4">
                <CTA variant="ghost" href={DOCS_URL + "#demand-engine"}>
                  Open docs →
                </CTA>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-[11px] uppercase tracking-widest opacity-60">
                Module
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Ops OS
              </h3>
              <p className="mt-2 text-sm opacity-90">
                SOP builder, client onboarding, weekly operating review, and KPI
                snapshots — without the bloat.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>SOP builder</Tag>
                <Tag>Onboarding</Tag>
                <Tag>Scorecards</Tag>
              </div>
              <div className="mt-4">
                <CTA variant="ghost" href={DOCS_URL + "#ops-os"}>
                  Open docs →
                </CTA>
              </div>
            </div>

            <div
              className="rounded-xl border p-5 bg-white/90"
              style={{ borderColor: C.gray }}
            >
              <div className="text-[11px] uppercase tracking-widest opacity-60">
                Module
              </div>
              <h3 className="mt-1 font-semibold" style={{ color: C.ink }}>
                Proof &amp; Partners
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Capture reviews, engineer referrals, and access a vetted partner
                network for performance-based growth.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Tag>Referrals</Tag>
                <Tag>Reviews</Tag>
                <Tag>Partner finder</Tag>
              </div>
              <div className="mt-4">
                <CTA variant="ghost" href={DOCS_URL + "#proof-partners"}>
                  Open docs →
                </CTA>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            Integrations
          </h2>
          <p className="mt-2 text-sm opacity-90">
            Connect the stack you already use. No migration drama — just data
            where it matters.
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
          <div className="mt-4">
            <CTA variant="ghost" href={INTEGRATIONS_URL}>
              Browse integrations →
            </CTA>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Connect your stack",
              d: "Authorize tools, pull the minimum viable data, and auto-generate your operating baseline.",
            },
            {
              t: "Pick your stage",
              d: "We map you to the right mental models and modules — self, identity, empathy, offer, systems, scale, proof.",
            },
            {
              t: "Run weekly actions",
              d: "Ship one outcome per week. Measure, learn, and compound with operator feedback.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/90 p-6 border"
              style={{ borderColor: C.gray }}
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Step {i + 1}
              </div>
              <h3
                className="mt-1 text-lg font-semibold"
                style={{ color: C.ink }}
              >
                {s.t}
              </h3>
              <p className="mt-2 text-sm opacity-90">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Pricing teaser */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Founder
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Solo Operator
            </h3>
            <ul className="mt-2 text-sm leading-6 opacity-90">
              <li>• Offer Lab + Demand Engine</li>
              <li>• Ops OS + weekly actions</li>
              <li>• Basic integrations</li>
            </ul>
            <div className="mt-4">
              <CTA href={SIGNUP_URL}>Get Early Access</CTA>
            </div>
          </div>
          <div
            className="rounded-2xl bg-white/90 p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Team
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Growing Company
            </h3>
            <ul className="mt-2 text-sm leading-6 opacity-90">
              <li>• All modules + partner network</li>
              <li>• Advanced integrations &amp; roles</li>
              <li>• Priority support</li>
            </ul>
            <div className="mt-4">
              <CTA href={DEMO_URL} variant="ghost">
                Book a Demo
              </CTA>
            </div>
          </div>
        </div>

        {/* Final CTA bar */}
        <div
          className="mt-10 rounded-2xl bg-white/90 p-6 border flex items-center justify-between flex-wrap gap-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-[15px] leading-relaxed opacity-90">
            Build with <strong>tools</strong> that remove friction and{" "}
            <strong>connections</strong> that create leverage.
          </div>
          <div className="flex gap-2">
            <CTA href={SIGNUP_URL}>Get Early Access</CTA>
            <CTA href={DEMO_URL} variant="ghost">
              See a Demo
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
