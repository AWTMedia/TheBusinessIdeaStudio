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

// Small bordered block for each asset
function AssetBlock({
  n,
  title,
  desc,
  deliverable,
  why,
}: {
  n: string;
  title: string;
  desc: string;
  deliverable: React.ReactNode;
  why: React.ReactNode;
}) {
  return (
    <div
      className="mt-6 rounded-xl border p-4"
      style={{ borderColor: C.gray }}
    >
      <div className="text-sm font-semibold" style={{ color: C.ink }}>
        {n}. {title}
      </div>
      <p className="mt-2 text-sm opacity-90 leading-relaxed">{desc}</p>

      <div className="mt-3 text-sm leading-relaxed">
        <span className="font-semibold" style={{ color: C.ink }}>
          What you get:
        </span>{" "}
        {deliverable}
      </div>

      <div className="mt-2 text-sm leading-relaxed">
        <span className="font-semibold" style={{ color: C.ink }}>
          Why this matters:
        </span>{" "}
        {why}
      </div>
    </div>
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
              Offer Install / Acquisition & Delivery Sprint
            </span>

            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              We install your acquisition and delivery machine in 30–45 days
            </h1>

            <p className="mt-4 text-lg max-w-prose opacity-90">
              We work with founders who can deliver real value — but don’t yet
              have a clean, reliable way to generate clients and keep them.
              We come in, build the core revenue system, and hand it to you.
              You keep it. You run it. You stop guessing.
            </p>

            <ul className="mt-5 space-y-2 text-sm opacity-90">
              <li>• Offer, proof, funnel, booking flow, close script</li>
              <li>• Outbound rhythm and content cadence that creates demand</li>
              <li>• Onboarding and delivery rhythm that keeps clients</li>
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
                Install > Inspire
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray, color: C.ink }}
              >
                Proof > Promises
              </span>
              <span
                className="rounded-full border px-3 py-1 bg-white"
                style={{ borderColor: C.gray, color: C.ink }}
              >
                30–45 Day Build
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
                  8–12 minutes. We walk through ICP, proof, funnel, booking,
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
            We work with founders who can deliver real value — but don’t yet
            have a clean, reliable way to generate clients.
          </p>

          <p className="mt-4 leading-relaxed">You’re usually:</p>
          <ul className="mt-2 space-y-2">
            <li>• A solo operator or a tiny team (0–3 people).</li>
            <li>
              • You already have a skill, a service, or the ability to get
              someone a result.
            </li>
            <li>
              • You’ve made some money (or you know you can), but you don’t have
              a consistent pipeline.
            </li>
            <li>
              • You’re stuck doing everything manually: outreach, sales,
              delivery.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            You’re not asking for “branding.” You’re asking for a working
            acquisition and delivery machine so you can actually breathe.
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
          meta="30–45 day result"
        >
          <p className="leading-relaxed">
            We install a working client acquisition and delivery system in your
            business so you consistently book qualified calls, close paying
            clients, and deliver without chaos — in 30–45 days.
          </p>

          <p className="mt-4 leading-relaxed">Said another way:</p>

          <p className="mt-2 leading-relaxed">
            We build and operationalize your offer, proof, funnel, booking
            pipeline, close script, onboarding, and delivery rhythm — so you can
            sell and fulfill like a real company, not like a freelancer trying
            to hold everything in your head.
          </p>

          <p
            className="mt-4 leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            We’re not selling “motivation.”<br />
            We’re not selling “vibes.”<br />
            We’re installing infrastructure.
          </p>
        </SectionCard>

        {/* Mechanism / assets */}
        <SectionCard
          id="mechanism"
          badge="3"
          title="What we actually do (the mechanism)"
          meta="How we create the result"
        >
          <p className="leading-relaxed">
            Our service is not “content agency” and it’s not “coaching in a
            Google Meet.”
          </p>
          <p className="mt-3 leading-relaxed">
            What we do is simple: we come in, build the core revenue machine,
            and hand it to you.
          </p>

          <p
            className="mt-4 leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            We deliver 6 core assets that make you money:
          </p>

          {/* Asset 1 */}
          <AssetBlock
            n="1"
            title="ICP & Offer Lock"
            desc="We choose one niche and one painful, urgent problem you solve. Then we package it into a Minimum Viable Offer you can confidently sell."
            deliverable={
              <>
                An Offer Doc with the promise, scope, timeline, pricing ladder,
                and guarantee.
              </>
            }
            why={
              <>
                If your positioning is vague, nothing else works. This step is
                the foundation.
              </>
            }
          />

          {/* Asset 2 */}
          <AssetBlock
            n="2"
            title="Proof Asset"
            desc="We create or extract one strong proof asset — a mini case study, teardown, before/after, or demo — even if you’ve never had a ‘perfect’ client."
            deliverable={<>A proof asset you can use in sales immediately.</>}
            why={
              <>
                Proof beats confidence issues. Proof beats long explanations.
                Proof is what moves buyers from “maybe” to “oh, this is real.”
              </>
            }
          />

          {/* Asset 3 */}
          <AssetBlock
            n="3"
            title="Profile Funnel + One-Page Landing"
            desc="We rebuild your outward face: bio, pinned post(s), CTA (“DM me ‘X’”), and a one-page landing that goes Problem → Promise → Proof → CTA (book a call)."
            deliverable={
              <>
                A working profile funnel and a lean landing page that directs
                people to book, not wander.
              </>
            }
            why={
              <>
                Your social presence stops being a resume and starts acting like
                a live funnel.
              </>
            }
          />

          {/* Asset 4 */}
          <div
            className="mt-6 rounded-xl border p-4"
            style={{ borderColor: C.gray }}
          >
            <div
              className="text-sm font-semibold"
              style={{ color: C.ink }}
            >
              4. Booking Stack + Call Script
            </div>
            <p className="mt-2 text-sm opacity-90 leading-relaxed">
              We build the booking infrastructure and hand you the close
              process.
            </p>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                What you get:
              </span>
            </div>
            <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
              <li>• Your calendar link</li>
              <li>• Intake form</li>
              <li>• Auto-confirm + show-up reminders</li>
              <li>
                • A 1-call close script (diagnose → fit → plan → price → next
                step)
              </li>
            </ul>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                Why this matters:
              </span>{" "}
              No more improvising or “explaining for 45 minutes.” You’ll have a
              repeatable path from stranger → booked call → paid.
            </div>
          </div>

          {/* Asset 5 */}
          <div
            className="mt-6 rounded-xl border p-4"
            style={{ borderColor: C.gray }}
          >
            <div
              className="text-sm font-semibold"
              style={{ color: C.ink }}
            >
              5. Outbound & Content Rhythm
            </div>
            <p className="mt-2 text-sm opacity-90 leading-relaxed">
              We install the first consistent traffic engine.
            </p>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                What you get:
              </span>
            </div>
            <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
              <li>• A 30-day content plan (authority / proof / offer)</li>
              <li>
                • Daily outbound/DM/email scripts (what to send, to who, how
                often)
              </li>
            </ul>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                Why this matters:
              </span>{" "}
              You wake up knowing exactly how to create conversations and where
              your next bookings are coming from.
            </div>
          </div>

          {/* Asset 6 */}
          <div
            className="mt-6 rounded-xl border p-4"
            style={{ borderColor: C.gray }}
          >
            <div
              className="text-sm font-semibold"
              style={{ color: C.ink }}
            >
              6. Onboarding & Delivery Rhythm
            </div>
            <p className="mt-2 text-sm opacity-90 leading-relaxed">
              We formalize how you onboard and keep clients happy.
            </p>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                What you get:
              </span>
            </div>
            <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
              <li>• Onboarding checklist</li>
              <li>• Kickoff call agenda</li>
              <li>• Weekly reporting template</li>
              <li>• 90-day roadmap structure</li>
            </ul>

            <div className="mt-3 text-sm leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: C.ink }}
              >
                Why this matters:
              </span>{" "}
              This stops churn, protects your reputation, and turns delivery
              into repeatable proof for future sales.
            </div>
          </div>

          <p
            className="mt-8 text-sm leading-relaxed font-semibold"
            style={{ color: C.ink }}
          >
            That’s the core product:
            <br />
            We build the system you’ll run every single week to acquire and keep
            clients.
          </p>
        </SectionCard>

        {/* Delivery model + Pricing */}
        <SectionCard
          id="delivery-and-pricing"
          badge="4"
          title="How we deliver and how we charge"
          meta="Sprint structure & pricing"
        >
          <div>
            <div
              className="text-sm font-semibold"
              style={{ color: C.ink }}
            >
              Our delivery model
            </div>

            <p className="mt-2 text-sm leading-relaxed opacity-90">
              We work in a focused 30–45 day implementation sprint.
            </p>

            <p className="mt-3 text-sm leading-relaxed">
              It looks like this:
            </p>

            <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
              <li>• Week 1: Positioning, ICP, Offer Lock</li>
              <li>• Week 2: Proof Asset + Landing + Profile Funnel</li>
              <li>• Week 3: Booking Stack + Sales Script + Outbound Block</li>
              <li>• Week 4: Delivery Rhythm + Handover + KPIs</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed opacity-90">
              This is not an endless “coaching container.” This is not “we’ll
              post for you forever.” We are here to install the core revenue
              infrastructure so you can run it without us.
            </p>

            <p className="mt-3 text-sm leading-relaxed opacity-90">
              Our whole brand is built around: move fast, ship real assets,
              eliminate chaos.
            </p>
          </div>

          {/* Pricing options */}
          <div className="mt-8">
            <div
              className="text-sm font-semibold"
              style={{ color: C.ink }}
            >
              Our pricing model
            </div>

            {/* Option A */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: C.ink }}
              >
                Option A. Implementation Sprint (most common)
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                You pay a flat fee (think in the ~$2K–$5K USD range depending on
                scope). We build and install the entire system above.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                You leave with: offer, proof, funnel, booking, sales script,
                outbound rhythm, onboarding.
              </p>
              <p
                className="mt-2 text-sm leading-relaxed font-semibold"
                style={{ color: C.ink }}
              >
                No fluff. You own the machine.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                This is perfect for the founder who says:
                <br />
                “I don’t need motivation. I need a pipeline I can execute
                tomorrow without guessing.”
              </p>
            </div>

            {/* Option B */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: C.ink }}
              >
                Option B. Sprint + 30-Day Support
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                After the build, you stay on with us for ~30 days of refinement.
                We review your calls, sharpen objections, tweak your content
                hooks, and keep you inside the rhythm.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                That becomes a light retainer (for example, ~$1K/mo).
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                This keeps you accountable to the system we just installed and
                protects conversion rate while you’re getting momentum.
              </p>
            </div>

            {/* Option C */}
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: C.gray }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: C.ink }}
              >
                Option C. Performance / Revshare (selective, later-stage)
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                For the right founders, we’ll stay involved and tie
                compensation to revenue or booked calls. We only do this with
                people who are clearly in motion and just need force applied,
                not rescuing.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-90">
                This becomes our “portfolio,” but that’s not the default offer.
                It’s earned.
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
            We install your acquisition and delivery infrastructure — offer,
            proof, funnel, booking flow, close script, and onboarding — so you
            can consistently book and close qualified clients in under 45 days
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
              • The founder psychology side (we fix the operator: focus,
              self-trust, rhythm)
            </li>
            <li>
              • The business systems side (we build the machine: offer, proof,
              funnel, pipeline, delivery)
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
