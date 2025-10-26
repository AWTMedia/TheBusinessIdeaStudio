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

// Optional: Add your Calendly URL and an optional video
const CALENDLY_URL = "https://calendly.com/your-handle/diagnostic";
const VIDEO_URL = "https://youtu.be/XwzU4RikbGs"

// Simple helper to embed YouTube
function toEmbed(url: string) {
  if (!url) return null;
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

function Card({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-7 shadow-sm ${dark ? "" : "bg-white/90 backdrop-blur"} ${className}`}
      style={{ borderColor: C.gray }}
    >
      {children}
    </div>
  );
}

export default function BookACall() {
  const embed = toEmbed(VIDEO_URL);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Top: Authority headline */}
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full border px-3 py-1"
            style={{ borderColor: C.blue, color: C.blue }}>
            The System • Strategy Call
          </div>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black" style={{ color: C.ink }}>
            Book a Strategy Call
          </h1>
          <p className="mt-3 text-lg opacity-90">
            We don’t “hop on calls.” We diagnose constraints and prescribe the next moves.{" "}
            <strong>Founder Psychology → Business Mechanics.</strong> If you want a predictable acquisition pipeline
            without burning out, you’re in the right room.
          </p>

          {/* Proof bar */}
          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{ borderColor: C.gray, color: C.ink }}>
              ✓ Evidence-led
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{ borderColor: C.gray, color: C.ink }}>
              ✓ No fluff, playbooks only
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{ borderColor: C.gray, color: C.ink }}>
              ✓ Action in 48–72 hours
            </span>
          </div>
        </div>

        {/* Right: Optional video */}
        <div className="md:col-span-5">
          <div className="rounded-3xl p-3 shadow-xl bg-white/90 border" style={{ borderColor: C.gray }}>
            <div className="rounded-2xl overflow-hidden">
              {embed ? (
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={embed}
                    title="What happens on the Strategy Call"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="p-6 text-sm opacity-80">Add a YouTube URL to VIDEO_URL to show a short call explainer.</div>
              )}
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                What happens on the call
              </div>
              <p className="mt-1 text-xs opacity-80">
                15–25 minutes. We map your bottleneck to a proven play, then outline next steps and metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion strip */}
      <div className="mt-8 rounded-2xl p-5 border bg-white/90 flex flex-wrap items-center justify-between gap-3"
        style={{ borderColor: C.gray }}>
        <div className="text-sm opacity-90">
          Ready to deploy a pipeline you can trust? <span className="font-semibold" style={{ color: C.ink }}>
            Book your diagnostic.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CTA href={CALENDLY_URL}>Book now</CTA>
          <CTA variant="ghost" href="#/repo">Browse the playbooks</CTA>
        </div>
      </div>

      {/* What we’ll do / Who it’s for / Outcomes */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-xs uppercase tracking-widest opacity-60">On the call</div>
          <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>We diagnose, not “discuss”</h3>
          <ul className="mt-3 text-sm leading-6 opacity-90 space-y-2">
            <li>• Identify the <strong>dominant constraint</strong> in your Market → Lead Gen → Nurture → Conversion chain.</li>
            <li>• Select the <strong>lowest-lift play</strong> with the highest probability of signal in 7–14 days.</li>
            <li>• Define KPIs, proof artifacts, and a 48–72 hour action plan.</li>
          </ul>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-widest opacity-60">Who it’s for</div>
          <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>Operators who want signal</h3>
          <ul className="mt-3 text-sm leading-6 opacity-90 space-y-2">
            <li>• Solo founders or small teams shipping weekly.</li>
            <li>• Willing to implement proven systems, not chase hacks.</li>
            <li>• Aim: predictable lead flow and clean sales math.</li>
          </ul>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-widest opacity-60">Expected outcomes</div>
          <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>Clarity and next steps</h3>
          <ul className="mt-3 text-sm leading-6 opacity-90 space-y-2">
            <li>• A concrete play: offer, channel, or pipeline step to run.</li>
            <li>• Metrics: CAC, ASP, close rate, and referral levers defined.</li>
            <li>• A cadence you can stick to without burning out.</li>
          </ul>
        </Card>
      </div>

      {/* Scheduler block */}
      <div className="mt-10 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7">
          <Card className="p-0 overflow-hidden">
            <div className="p-6 pb-0">
              <div className="text-xs uppercase tracking-widest opacity-60">Schedule</div>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
                Pick a time that suits you
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Choose a 20–25 minute slot. You’ll receive a short pre-call form so we can prepare a tailored plan.
              </p>
            </div>
            <div className="mt-4">
              {/* Calendly Inline Embed */}
              <div className="w-full" style={{ minHeight: 680 }}>
                <iframe
                  title="Schedule with us"
                  src={CALENDLY_URL}
                  className="w-full"
                  style={{ height: 680, border: "0" }}
                />
              </div>
            </div>
            <div className="p-6 border-t" style={{ borderColor: C.gray }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm opacity-80">
                  Prefer a direct link?{" "}
                  <a href={CALENDLY_URL} className="underline" style={{ color: C.blue }}>
                    Open Calendly
                  </a>
                </span>
                <CTA href={CALENDLY_URL}>Book now</CTA>
              </div>
            </div>
          </Card>
        </div>

        {/* Social proof & de-risking */}
        <div className="md:col-span-5 space-y-6">
          <Card>
            <div className="text-xs uppercase tracking-widest opacity-60">Why founders choose us</div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              We turn psychology into mechanics
            </h3>
            <ul className="mt-3 text-sm leading-6 opacity-90 space-y-2">
              <li>• 60+ mental models mapped to concrete plays.</li>
              <li>• Repeatable proof: referrals, reviews, and pipeline lift.</li>
              <li>• Editorial standards: evidence, not claims.</li>
            </ul>
          </Card>

          <Card>
            <div className="text-xs uppercase tracking-widest opacity-60">No-pressure policy</div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              No pitch. Clear next steps.
            </h3>
            <p className="mt-3 text-sm opacity-90">
              If we’re a fit, we’ll show you the implementation path. If not, you’ll still leave with a
              workable plan. Either way, you win.
            </p>
          </Card>

          <Card>
            <div className="text-xs uppercase tracking-widest opacity-60">Common objections</div>
            <ul className="mt-3 text-sm leading-6 opacity-90 space-y-3">
              <li>
                <strong style={{ color: C.ink }}>“I’m too busy right now.”</strong>
                <br />
                Then you need a lighter play. We prioritize <em>lowest lift → fastest signal</em>.
              </li>
              <li>
                <strong style={{ color: C.ink }}>“I’ve tried ‘systems’ before.”</strong>
                <br />
                Most fail from poor sequencing. We fix order of operations first, then scale.
              </li>
              <li>
                <strong style={{ color: C.ink }}>“Will this work in my niche?”</strong>
                <br />
                We choose a channel/offer combo proven in your market type, not a generic template.
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Final CTA strip */}
      <div className="mt-10 rounded-2xl p-5 border"
        style={{ borderColor: C.gray, background: C.ink, color: "#fff" }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm md:text-base">
            <span className="font-semibold">Own your pipeline.</span> Book the diagnostic and ship the next play this week.
          </div>
          <div className="flex items-center gap-2">
            <CTA variant="ghostLight" href={CALENDLY_URL}>Book now</CTA>
            <CTA variant="lime" href="#/repo">Preview the playbooks</CTA>
          </div>
        </div>
      </div>

      {/* Trust footer */}
      <div className="mt-6 text-center text-xs opacity-70">
        Privacy-first • Evidence-led • No spam • Cancel anytime
      </div>
    </section>
  );
}