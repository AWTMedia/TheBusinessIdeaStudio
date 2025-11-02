import React from "react";

const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

// ===== Utilities =====

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

const HERO_VIDEO_URL = "https://youtu.be/XwzU4RikbGs";

// Card wrapper for subsections
function SectionCard({
  id,
  badge,
  title,
  meta,
  children,
}: {
  id?: string;
  badge?: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl bg-white/90 border shadow-sm"
      style={{ borderColor: C.gray }}
    >
      <header
        className="border-b px-4 py-3 md:px-6 md:py-4"
        style={{ borderColor: C.gray }}
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
          <div className="flex flex-col">
            {badge && (
              <div className="text-[11px] uppercase tracking-widest font-medium opacity-60">
                {badge}
              </div>
            )}
            <h2
              className="text-base md:text-lg font-semibold leading-snug"
              style={{ color: C.ink }}
            >
              {title}
            </h2>
          </div>
          {meta ? (
            <div className="text-[11px] uppercase tracking-widest opacity-60">
              {meta}
            </div>
          ) : null}
        </div>
      </header>
      <div className="px-4 py-4 md:px-6 md:py-5 text-sm leading-relaxed opacity-90">
        {children}
      </div>
    </section>
  );
}

// ===== Page =====

export default function OfferInstall() {
  const embed = toEmbed(HERO_VIDEO_URL);

  return (
    <main
      className="min-h-screen"
      style={{ background: C.cream, color: C.text }}
    >
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b"
        style={{
          background: C.cream,
          borderColor: C.gray,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
          {/* Left copy */}
          <div className="md:col-span-7">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase"
              style={{
                border: `1px solid ${C.blue}`,
                color: C.blue,
                background: "#fff",
              }}
            >
              Offer Install / Acquisition &amp; Delivery Sprint
            </span>

            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              We install your acquisition and delivery machine
            </h1>

            <p className="mt-4 text-lg max-w-prose opacity-90">
              We work with established businesses that can already deliver real
              results — but don’t yet have a reliable system to attract,
              convert, and onboard new clients online. We come in, build the
              core revenue engine, and hand it to you. You keep it. You run it.
              You stop guessing.
            </p>

            <ul className="mt-5 space-y-2 text-sm opacity-90">
              <li>
                • Offer, positioning, messaging, and content angles (you still
                record the content, we design the system)
              </li>
              <li>
                • Profile funnel, proof, landing, booking pipeline, close
                script
              </li>
              <li>
                • Onboarding + proof capture so every new win turns into more
                demand
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href="#/book-a-call"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 border"
                style={{
                  background: C.blue,
                  color: "#fff",
                  borderColor: C.blue,
                }}
              >
                Book Strategy Call →
              </a>

              <a
                href="#/repo"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 border"
                style={{
                  background: "#fff",
                  color: C.ink,
                  borderColor: C.gray,
                }}
              >
                Browse Playbooks
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 opacity-95 text-[11px] tracking-widest uppercase">
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray, color: C.ink }}
              >
                Install &gt; Inspire
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray, color: C.ink }}
              >
                Proof &gt; Promises
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray, color: C.ink }}
              >
                Fast Implementation
              </span>
            </div>
          </div>

          {/* Right video card */}
          <div className="md:col-span-5 self-center justify-self-center w-full">
            <div
              className="rounded-3xl p-3 shadow-xl bg-white/90 border mx-auto md:max-w-[560px] w-full"
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
                      title="Offer Install — How the sprint works"
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
                <div
                  className="text-sm font-semibold"
                  style={{ color: C.ink }}
                >
                  Watch: How we install the revenue machine
                </div>
                <p className="mt-1 text-xs opacity-80">
                  We walk through avatar, offer, positioning, funnel, booking,
                  close, onboarding — end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE BODY */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Who we serve */}
        <SectionCard
          id="who-we-serve"
          badge="1"
          title="Who we serve"
          meta="Who this is for"
        >
          <p className="leading-relaxed">
            We work with business owners who can actually deliver a result,
            already have revenue, and are now serious about scaling their
            acquisition online.
          </p>

          <p className="mt-4 leading-relaxed">You’re typically:</p>
          <ul className="mt-2 space-y-2">
            <li>
              • You’re already making money (often $20k+/mo), or you’re a mature
              offline service with obvious demand.
            </li>
            <li>
              • You know you can help clients — that’s not the problem. The
              problem is getting enough of the right ones, consistently.
            </li>
            <li>
              • You don’t yet have a reliable online acquisition system that
              turns attention into booked qualified calls.
            </li>
            <li>
              • You’re willing to show up and record content, but you don’t want
              to “figure out the funnel” from scratch.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            You’re not asking for “make my brand pretty.”
            <br />
            You’re asking for a clear, controlled pipeline you can run every
            week.
          </p>

          <p
            className="mt-4 leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            That’s who we build for.
          </p>
        </SectionCard>

        {/* Outcome we promise */}
        <SectionCard
          id="outcome"
          badge="2"
          title="The outcome we promise"
          meta="What you leave with"
        >
          <p className="leading-relaxed">
            We install a working client acquisition and delivery system in your
            business so you can consistently book qualified calls, close paying
            clients, and onboard cleanly — without chaos.
          </p>

          <p className="mt-4 leading-relaxed">
            Said simply: we build and operationalize your avatar, offer,
            positioning, content angles, profile funnel, proof, one-page
            landing, booking pipeline, close script, onboarding, and proof
            capture rhythm.
          </p>

          <p
            className="mt-4 leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            We’re not selling “motivation.”
            <br />
            We’re not selling “vibes.”
            <br />
            We’re installing infrastructure.
          </p>
        </SectionCard>

        {/* Mechanism / 7-stage pathway */}
        <SectionCard
          id="mechanism"
          badge="3"
          title="How we actually create that result"
          meta="The 7-stage install"
        >
          {/* Stage 1: Avatar */}
          <div className="mt-0 space-y-6">
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                1. Avatar
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: choose exactly who we’re solving a painful problem for.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                pick one specific customer segment, define urgent pain +
                desired outcome + buying trigger, map budget/timeline/decision
                style.
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                an ICP Snapshot / Avatar Card: who they are, what they’re trying
                to fix right now, the language they use, and where to reach
                them.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                If the avatar isn’t specific, all messaging is generic. When
                it’s specific, hooks sharpen, proof lands, pricing makes sense,
                and calls convert faster.
              </div>
            </div>

            {/* Stage 2: Offer */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                2. Offer
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: package the outcome into something urgent and obvious to
                buy.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                define the promise (“we help [avatar] go from A → B in [time
                frame]”), set scope/boundaries, build price ladder (floor /
                target / anchor), and craft a defensible guarantee.
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                a full Offer Doc: promise, transformation, timeline, method,
                pricing ladder, guarantee.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                If the offer is muddy, no funnel can save it. Once it’s crisp,
                everything else is distribution and throughput.
              </div>
            </div>

            {/* Stage 3: Positioning & Content System */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                3. Positioning &amp; Content System
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: script what you say publicly so high-intent buyers see you
                as the obvious solution.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                extract your angles, wins, credibility; map 3 pillars (pain,
                proof, offer/CTA); generate 30 days of hooks and talking
                points.
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                a Messaging Spine (the narratives we repeat everywhere) and a
                Content System (hook bank, proof formats, weekly rhythm).
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                Content here is not “posting for vibes.” It’s controlled
                positioning that warms demand before the call.
              </div>
            </div>

            {/* Stage 4: Profile Funnel */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                4. Profile Funnel
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: turn your public profile into a working intake surface,
                not a CV.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                rewrite bios to speak directly to the avatar/outcome, build
                pinned proof/cred reels, add a direct CTA (“DM me ‘AUDIT’ for
                the plan”).
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                fully reworked IG / LinkedIn / X profile(s), CTA language,
                pinned proof, reusable positioning blurb.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                Now every profile visit becomes a lead-touch and feeds the
                pipeline.
              </div>
            </div>

            {/* Stage 5: Leads Funnel */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                5. Leads Funnel
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: capture interest and route it into booked calls.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                build a one-page landing (Problem → Promise → Proof → CTA),
                then install the booking stack (calendar link, intake form,
                auto-confirm, reminders, show-up optimization).
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                a conversion landing page and a booking flow that qualifies,
                reminds, and puts people directly on your calendar.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                This creates a predictable path: profile/post → DM/click →
                landing → booking. No more 47-message back-and-forth.
              </div>
            </div>

            {/* Stage 6: Conversion System */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                6. Conversion System
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: turn booked calls into paying clients.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                install a one-call close (Diagnose → Fit → Plan → Price → Next
                Step), map objection handling (price, time, trust, partner),
                define next-step logic (pay now, deposit, proposal window).
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                a call script, objection tree, and proposal/terms bundle so you
                can close in minutes, not weeks.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                No more rambling. No more “so uh what do you think?”
              </div>
            </div>

            {/* Stage 7: Proof Capture System */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                7. Proof Capture System
              </div>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Goal: turn delivery into reusable proof so the machine
                compounds.
              </p>

              <div className="mt-3 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  What we do with you:
                </span>{" "}
                install onboarding + kickoff (expectations, success metric in
                14 days), weekly reporting (wins / metrics / next 7-day plan),
                and a “capture proof here” workflow for screenshots,
                before/afters, testimonials, KPI deltas.
              </div>

              <div className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: C.ink }}>
                  You walk away with:
                </span>{" "}
                onboarding checklist, kickoff agenda, weekly report template,
                and a proof capture pipeline that keeps feeding marketing.
              </div>

              <div className="mt-2 text-sm leading-relaxed opacity-90">
                This reduces churn and continuously generates fresh proof that
                drives more demand, higher pricing, and easier closes.
              </div>
            </div>

            <p
              className="mt-6 text-sm leading-relaxed font-semibold"
              style={{ color: C.ink }}
            >
              That’s the machine.
              <br />
              It’s not “branding,” it’s not “post more,” it’s not coaching
              vibes.
              <br />
              It’s an install.
            </p>
          </div>
        </SectionCard>

        {/* Delivery model + Pricing */}
        <SectionCard
          id="delivery-and-pricing"
          badge="4"
          title="How we deliver and how we charge"
          meta="Engagement model"
        >
          <div>
            <div className="text-sm font-semibold" style={{ color: C.ink }}>
              Our delivery model
            </div>

            <p className="mt-2 text-sm leading-relaxed opacity-90">
              We take you through seven upgrades, in order:
            </p>

            <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-4">
              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  1. Avatar
                </div>
                <div className="opacity-90">
                  We pick exactly who you’re solving for.
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  2. Offer
                </div>
                <div className="opacity-90">
                  We package the outcome in a way they’ll pay for.
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  3. Positioning &amp; Content System
                </div>
                <div className="opacity-90">
                  We script what you say publicly so demand sees you as the
                  answer.
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  4. Profile Funnel
                </div>
                <div className="opacity-90">
                  We turn your profile into a working intake funnel.
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  5. Leads Funnel
                </div>
                <div className="opacity-90">
                  We build the booking pipeline (landing + calendar + intake).
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  6. Conversion System
                </div>
                <div className="opacity-90">
                  We give you the script and structure to close on one call.
                </div>
              </li>

              <li>
                <div className="font-semibold" style={{ color: C.ink }}>
                  7. Proof Capture System
                </div>
                <div className="opacity-90">
                  We install onboarding and weekly reporting so every new win
                  becomes new proof, which feeds back into step 3.
                </div>
              </li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Our whole brand is built around one idea: move fast, ship real
              assets, eliminate chaos.
            </p>
          </div>

          {/* Pricing options */}
          <div className="mt-8">
            <div className="text-sm font-semibold" style={{ color: C.ink }}>
              Our pricing model
            </div>

            {/* Option A */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                Option A. Implementation Sprint (most common)
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                Flat fee (typically in the ~$2K–$5K USD range depending on
                scope). We build and install the entire system above.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                You leave with: avatar, offer, positioning system, profile
                funnel, proof, landing, booking flow, call script, onboarding,
                proof capture.
              </p>
              <p
                className="mt-2 text-sm leading-relaxed font-semibold"
                style={{ color: C.ink }}
              >
                No fluff. You own the machine.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                This is for the founder who says:
                <br />
                “I don’t need motivation. I need a pipeline I can run this
                week.”
              </p>
            </div>

            {/* Option B */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                Option B. Sprint + 30-Day Support
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                After the install, you stay on with us ~30 days. We review your
                sales calls, sharpen objections, tune hooks, and keep you in the
                rhythm while momentum is fragile.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                That’s a light retainer (for example, around ~$1K/mo).
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                Goal: protect close rate and stop you from drifting back into
                guesswork.
              </p>
            </div>

            {/* Option C */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                Option C. Performance / Revshare (selective)
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                For the right operator, we’ll tie part of our compensation to
                revenue or booked calls. This is only for people already in
                motion who need force, not rescuing.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                This becomes our “portfolio,” not the default engagement.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Positioning / CTA */}
        <SectionCard
          id="positioning"
          badge="5"
          title="Our positioning in one line"
          meta="Why this exists"
        >
          <p className="text-sm leading-relaxed opacity-90">
            We install your acquisition and delivery infrastructure — avatar,
            offer, positioning, content system, profile funnel, proof, landing,
            booking flow, one-call close script, onboarding, and proof capture —
            so you can consistently book and close qualified clients online
            without hiring a full agency.
          </p>

          <p className="mt-4 text-sm leading-relaxed opacity-90">
            That’s what we do.
          </p>

          <p className="mt-6 text-sm leading-relaxed opacity-90">
            It matches everything in The Business Idea Studio:
          </p>

          <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
            <li>
              • Founder psychology side: we fix the operator (focus,
              conviction, rhythm).
            </li>
            <li>
              • Business systems side: we build the machine (offer, funnel,
              pipeline, delivery, proof loop).
            </li>
          </ul>

          <p
            className="mt-6 text-sm leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            We turn founder psychology into a working revenue system.
            <br />
            You keep it. You run it. We make sure it works.
          </p>

          {/* CTA row */}
          <div className="mt-8 grid sm:flex gap-3 text-sm font-semibold">
            <a
              href="#/book-a-call"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 border"
              style={{
                background: C.blue,
                color: "#fff",
                borderColor: C.blue,
              }}
            >
              Book Strategy Call →
            </a>

            <a
              href="#/repo"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 border"
              style={{
                background: "#fff",
                color: C.ink,
                borderColor: C.gray,
              }}
            >
              Browse Playbooks
            </a>
          </div>

          <div className="mt-4 text-[11px] uppercase tracking-widest opacity-60">
            We build infrastructure. You keep it.
          </div>
        </SectionCard>

        <div className="text-center text-[11px] uppercase tracking-widest opacity-60">
          Founder Psychology → Offer Install → Operating Rhythm
        </div>
      </div>
    </main>
  );
}
