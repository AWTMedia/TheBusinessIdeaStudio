import React from "react";

const C = {
  bg: "#0B0F19", // ink
  text: "#F2EDDF", // cream
  accent: "#C9F93E",
  border: "rgba(255,255,255,0.08)",
  card: "rgba(15,20,32,0.6)",
};

export default function OfferLanding() {
  return (
    <main
      className="min-h-screen w-full text-white"
      style={{ backgroundColor: C.bg, color: C.text }}
    >
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-medium tracking-widest uppercase"
            style={{
              borderColor: C.accent,
              color: C.accent,
              backgroundColor: "rgba(201,249,62,0.07)",
            }}
          >
            Acquisition & Delivery Install
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-[-0.03em]"
            style={{ color: C.text }}
          >
            We install a working client acquisition and delivery system
            in your business — in 30–45 days.
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
            A full revenue machine: avatar, offer, positioning, proof,
            profile funnel, booking pipeline, one-call close script,
            onboarding rhythm, and proof capture loop.
            <br className="hidden sm:block" />
            You keep it. You run it. We make sure it works.
          </p>

          {/* Hero CTA block */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {/* Primary CTA */}
            <a
              href="#/book-a-call"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide uppercase"
              style={{
                backgroundColor: C.accent,
                color: "#0B0F19",
              }}
            >
              Book Strategy Call →
            </a>

            {/* Secondary CTA */}
            <a
              href="#/repo"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide uppercase border"
              style={{
                backgroundColor: "transparent",
                borderColor: C.border,
                color: C.text,
              }}
            >
              Browse Playbooks
            </a>
          </div>

          {/* Social proof row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium tracking-widest uppercase text-white/40">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.accent }} />
              Strategy, not “content agency”
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.accent }} />
              30–45 Day Sprint
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.accent }} />
              Proof > Hype
            </span>
          </div>

          {/* Video frame */}
          <div className="mt-12 relative max-w-3xl mx-auto rounded-2xl overflow-hidden border shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
            style={{ borderColor: C.border, backgroundColor: C.card }}
          >
            {/* Replace src with your explainer video embed */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/XwzU4RikbGs?rel=0&modestbranding=1&playsinline=1"
                title="How the Install Works"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-4 sm:p-5 border-t text-left"
              style={{ borderColor: C.border }}
            >
              <div className="text-xs font-semibold text-white/80">
                Watch: How we build your acquisition machine
              </div>
              <div className="mt-1 text-[11px] leading-relaxed text-white/50">
                Exactly what gets installed in the sprint, how the pipeline works,
                and what you’ll be running after handover.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Pain / Who we serve */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10">
          {/* Left text */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
              1. Who we serve
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]"
              style={{ color: C.text }}
            >
              We work with business owners who can already deliver real results —
              but don’t yet have a reliable way to scale acquisition online.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/70">
              You’re already generating meaningful revenue (often $20k+/month),
              OR you’re an established offline service with obvious demand.
              Getting clients isn’t the problem. Getting a predictable,
              channel-driven pipeline without referrals is.
            </p>

            <ul className="mt-6 space-y-2 text-base leading-relaxed text-white/70">
              <li className="flex gap-2">
                <span className="text-[10px] font-bold" style={{ color: C.accent }}>●</span>
                You know you can help clients. That part is proven.
              </li>
              <li className="flex gap-2">
                <span className="text-[10px] font-bold" style={{ color: C.accent }}>●</span>
                The constraint is consistent, qualified demand — without you
                being the full-time salesperson.
              </li>
              <li className="flex gap-2">
                <span className="text-[10px] font-bold" style={{ color: C.accent }}>●</span>
                You’re willing to show up, record content, be the face. You’re
                not willing to guess the strategy.
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-white/80 font-semibold">
              You’re not asking for “make me look good on social.”
              You’re asking for an installed pipeline that repeatedly attracts,
              books, and closes the right buyers.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white font-semibold"
              style={{ color: C.text }}
            >
              That’s who we build for.
            </p>
          </div>

          {/* Right callout card */}
          <div className="lg:col-span-5 lg:self-start">
            <div className="rounded-2xl border p-6 shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[11px] font-semibold tracking-widest uppercase text-white/60">
                Core pain
              </div>
              <div className="mt-3 text-lg font-semibold leading-snug text-white"
                style={{ color: C.text }}
              >
                “We get clients — but it’s random, founder-led, and not scalable online.”
              </div>
              <div className="mt-4 text-sm leading-relaxed text-white/60">
                That specific problem is what we solve. We build you an
                acquisition + delivery machine you can run every week.
              </div>

              <a
                href="#/book-a-call"
                className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-wide uppercase w-full text-center"
                style={{
                  backgroundColor: C.accent,
                  color: "#0B0F19",
                }}
              >
                Speak With Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Outcome */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
            2. The Outcome
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]"
            style={{ color: C.text }}
          >
            The install leaves you with a full client acquisition
            and delivery system you actually run.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 max-w-3xl">
            After the sprint, you’ll be able to consistently:
          </p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-base leading-relaxed text-white/80">
            <li className="rounded-xl border p-4"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: C.accent }}
              >
                Demand
              </div>
              <div className="mt-2 font-semibold text-white">
                Attract the right buyers with controlled positioning,
                not random posting.
              </div>
            </li>

            <li className="rounded-xl border p-4"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: C.accent }}
              >
                Pipeline
              </div>
              <div className="mt-2 font-semibold text-white">
                Book qualified calls through a profile funnel + landing +
                booking stack.
              </div>
            </li>

            <li className="rounded-xl border p-4"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: C.accent }}
              >
                Close
              </div>
              <div className="mt-2 font-semibold text-white">
                Close in one structured conversation using a 1-call script and
                objection system.
              </div>
            </li>

            <li className="rounded-xl border p-4"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: C.accent }}
              >
                Proof Loop
              </div>
              <div className="mt-2 font-semibold text-white">
                Onboard cleanly, deliver, capture wins, and turn those wins
                into more demand.
              </div>
            </li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-white/80 font-semibold">
            We’re not selling motivation. We’re not selling hype.
            We’re installing infrastructure.
          </p>
        </div>
      </section>

      {/* SECTION: The 7 Stages */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
            3. The Install (Step-by-step)
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]"
            style={{ color: C.text }}
          >
            We take you through 7 stages, in order.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 max-w-3xl">
            This is the pipeline we build with you and hand over.
            No fluff. No “implementation debt.” You leave with assets,
            language, scripts, and rhythm.
          </p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {[
              {
                step: "1. Avatar",
                goal: "Choose exactly who you’re solving a painful problem for.",
                bullets: [
                  "Pick one high-pain segment.",
                  "Define urgent pain, desired outcome, buying trigger.",
                  "Document where they live digitally.",
                ],
                deliver: "ICP Snapshot / Avatar Card (who they are, pain now, how they talk, where to reach them).",
              },
              {
                step: "2. Offer",
                goal: "Package the outcome into something they’ll pay for immediately.",
                bullets: [
                  "Promise, scope, boundaries.",
                  "Pricing ladder: floor / target / anchor.",
                  "Risk reducer / guarantee without killing margin.",
                ],
                deliver: "Full Offer Doc: promise, timeline, method, pricing, guarantee.",
              },
              {
                step: "3. Positioning & Content System",
                goal: "Decide what you say in public so buyers see you as the answer.",
                bullets: [
                  "3 core pillars: pain, proof, CTA.",
                  "30 days of hooks / talking points.",
                  "Messaging spine we repeat everywhere.",
                ],
                deliver: "Content System + Hook Bank + Daily/Weekly rhythm.",
              },
              {
                step: "4. Profile Funnel",
                goal: "Turn your profile into a live intake surface — not a CV.",
                bullets: [
                  "Rewrite bio for avatar + outcome.",
                  "Pinned proof / highlight reels.",
                  "Install CTA: “DM me ‘AUDIT’…”",
                ],
                deliver: "Rebuilt IG / LinkedIn / X profile + proof asset + CTA language.",
              },
              {
                step: "5. Leads Funnel",
                goal: "Capture attention and route it into booked calls.",
                bullets: [
                  "One-page landing (Problem → Promise → Proof → CTA).",
                  "Calendar link + intake form.",
                  "Auto-confirm + reminders + show-up optimization.",
                ],
                deliver: "Conversion landing + booking flow that qualifies and drops calls on your calendar.",
              },
              {
                step: "6. Conversion System",
                goal: "Turn booked calls into paying clients.",
                bullets: [
                  "1-call close structure (diagnose → plan → price → next step).",
                  "Objection tree (price / time / trust / partner).",
                  "Clear next-step logic: pay now, proposal, follow-up window.",
                ],
                deliver: "Sales Call Script + Objection Map + Proposal/Agreement bundle.",
              },
              {
                step: "7. Proof Capture System",
                goal: "Turn delivery into new proof so the machine compounds.",
                bullets: [
                  "Onboarding checklist + kickoff call agenda.",
                  "Weekly reporting rhythm (wins, metrics, next 7 days).",
                  "Proof capture workflow (screenshots, before/after, testimonials).",
                ],
                deliver: "Onboarding pack + reporting template + capture pipeline for social proof.",
              },
            ].map((block, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: C.card,
                  borderColor: C.border,
                }}
              >
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
                  {block.step}
                </div>

                <div className="mt-2 text-lg font-semibold leading-snug"
                  style={{ color: C.text }}
                >
                  {block.goal}
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
                  {block.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span
                        className="text-[9px] font-bold leading-5"
                        style={{ color: C.accent }}
                      >
                        ●
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl border p-4 text-sm leading-relaxed"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderColor: C.border,
                    color: C.text,
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">
                    You walk away with:
                  </div>
                  <div className="mt-2 font-semibold text-white"
                    style={{ color: C.text }}
                  >
                    {block.deliver}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* credibility tagline */}
          <div className="text-center mt-12 text-[11px] tracking-widest uppercase text-white/50">
            No theory. No filler. Only installable leverage.
          </div>
        </div>
      </section>

      {/* SECTION: Pricing & Model */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
            4. Delivery & Pricing
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.03em]"
            style={{ color: C.text }}
          >
            We run an implementation sprint — then you either run it solo, or
            keep us on for refinement.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 max-w-3xl">
            The sprint covers all seven stages above. We move fast, build assets
            that actually get used, and hand you a machine — not homework.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Option A */}
            <div
              className="rounded-2xl border p-6 flex flex-col justify-between"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">
                Option A
              </div>
              <div className="mt-2 text-lg font-semibold leading-snug"
                style={{ color: C.text }}
              >
                Implementation Sprint
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Flat fee (typically ~$2K–$5K USD depending on scope).
                We install the entire system.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80 font-semibold">
                You leave with the pipeline:
                avatar, offer, messaging, content system, profile funnel,
                proof asset, landing, booking stack, close script,
                onboarding rhythm, proof capture loop.
              </p>
              <div className="mt-6 text-[11px] font-semibold tracking-widest uppercase text-white/50">
                You own the machine.
              </div>
            </div>

            {/* Option B */}
            <div
              className="rounded-2xl border p-6 flex flex-col justify-between"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">
                Option B
              </div>
              <div className="mt-2 text-lg font-semibold leading-snug"
                style={{ color: C.text }}
              >
                Sprint + 30-Day Support
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Light retainer (~$1K/mo range). We stay on for ~30 days while
                you start running the system.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80 font-semibold">
                We review your calls, sharpen objections, tune hooks, and keep
                you in rhythm so close-rate holds and momentum doesn’t die.
              </p>
              <div className="mt-6 text-[11px] font-semibold tracking-widest uppercase text-white/50">
                We ride shotgun while you scale.
              </div>
            </div>

            {/* Option C */}
            <div
              className="rounded-2xl border p-6 flex flex-col justify-between"
              style={{ backgroundColor: C.card, borderColor: C.border }}
            >
              <div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">
                Option C
              </div>
              <div className="mt-2 text-lg font-semibold leading-snug"
                style={{ color: C.text }}
              >
                Performance / Revshare
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                For the right operators, we tie part of our compensation to
                revenue or booked calls.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80 font-semibold">
                We only do this when you’re already in motion and just need
                controlled pressure — not rescue.
              </p>
              <div className="mt-6 text-[11px] font-semibold tracking-widest uppercase text-white/50">
                Portfolio track. Invite only.
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="#/book-a-call"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide uppercase"
              style={{
                backgroundColor: C.accent,
                color: "#0B0F19",
              }}
            >
              Book the Install Call →
            </a>

            <div className="mt-4 text-[11px] tracking-widest uppercase text-white/40">
              We are not an agency. We are not a course. We are an install.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 text-center text-[11px] tracking-widest uppercase text-white/40">
        <div>The Business Idea Studio</div>
        <div className="mt-2 text-white/30">
          Founder Psychology → Acquisition Machine → Proof Loop
        </div>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            className="hover:text-white/70"
            style={{ color: C.text }}
            href="#/book-a-call"
          >
            Book a Call
          </a>
          <a
            className="hover:text-white/70"
            style={{ color: C.text }}
            href="#/repo"
          >
            Library
          </a>
          <a
            className="hover:text-white/70"
            style={{ color: C.text }}
            href="#/governance"
          >
            Standards
          </a>
        </div>
        <div className="mt-6 text-white/30">
          © {new Date().getFullYear()} The Business Idea Studio.
        </div>
      </footer>
    </main>
  );
}
