import React from "react";

const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

function SectionCard({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-2xl bg-white/90 border shadow-sm"
      style={{ borderColor: C.gray }}
    >
      <header
        className="border-b px-4 py-3 md:px-6 md:py-4"
        style={{ borderColor: C.gray }}
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
          <h2
            className="text-base md:text-lg font-semibold leading-snug"
            style={{ color: C.ink }}
          >
            {title}
          </h2>
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

export default function OfferInstall() {
  return (
    <main
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8"
      style={{ color: C.text }}
    >
      {/* HERO / TOP CARD */}
      <div
        className="rounded-2xl shadow-xl relative overflow-hidden border"
        style={{
          background: `linear-gradient(180deg, ${C.ink} 0%, #121827 100%)`,
          borderColor: C.gray,
          color: "#fff",
        }}
      >
        <div className="px-6 py-6 md:px-8 md:py-8">
          <div className="text-[11px] uppercase tracking-widest font-medium opacity-70">
            Offer Install / Acquisition & Delivery Sprint
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight text-white">
            We install your acquisition and delivery machine in 30–45 days
          </h1>

          <p className="mt-4 text-sm md:text-base opacity-90 max-w-3xl">
            We work with founders who can deliver real value — but don’t yet
            have a clean, reliable way to generate clients and keep them.
            <br />
            We come in, build the core revenue system, and hand it to you. You
            keep it, you run it, and you stop guessing.
          </p>

          <div className="mt-4 text-[11px] uppercase tracking-widest opacity-70">
            Positioning • Proof • Funnel • Booking • Close • Onboarding
          </div>
        </div>
      </div>

      {/* 1. WHO WE SERVE */}
      <SectionCard
        title="1. Who we serve"
        meta="Who this is for"
      >
        <p className="leading-relaxed">
          We work with founders who can deliver real value — but don’t yet have
          a clean, reliable way to generate clients.
        </p>

        <p className="mt-4 leading-relaxed">
          You’re usually:
        </p>

        <ul className="mt-2 space-y-2">
          <li>• A solo operator or a tiny team (0–3 people).</li>
          <li>
            • You already have a skill, a service, or the ability to get someone
            a result.
          </li>
          <li>
            • You’ve made some money (or you know you can), but you don’t have a
            consistent pipeline.
          </li>
          <li>
            • You’re stuck doing everything manually: outreach, sales,
            delivery.
          </li>
        </ul>

        <p className="mt-4 leading-relaxed">
          You’re not asking for “branding.”
          <br />
          You’re asking for a working acquisition and delivery machine so you
          can actually breathe.
        </p>

        <p className="mt-4 leading-relaxed font-semibold" style={{ color: C.ink }}>
          That’s who we build for.
        </p>
      </SectionCard>

      {/* 2. THE OUTCOME WE PROMISE */}
      <SectionCard
        title="2. The outcome we promise"
        meta="What you can expect in 30–45 days"
      >
        <p className="leading-relaxed">
          We install a working client acquisition and delivery system in your
          business so you consistently book qualified calls, close paying
          clients, and deliver without chaos — in 30–45 days.
        </p>

        <p className="mt-4 leading-relaxed">
          Said another way:
        </p>

        <p className="mt-2 leading-relaxed">
          We build and operationalize your offer, proof, funnel, booking
          pipeline, close script, onboarding, and delivery rhythm — so you can
          sell and fulfill like a real company, not like a freelancer trying to
          hold everything together in your head.
        </p>

        <p className="mt-4 leading-relaxed font-semibold" style={{ color: C.ink }}>
          We’re not selling “motivation.”
          <br />
          We’re not selling “vibes.”
          <br />
          We’re installing infrastructure.
        </p>
      </SectionCard>

      {/* 3. THE MECHANISM */}
      <SectionCard
        title="3. What we actually do (the mechanism)"
        meta="How we create the result"
      >
        <p className="leading-relaxed">
          Our service is not “content agency” and it’s not “coaching in a Google
          Meet.”
        </p>

        <p className="mt-3 leading-relaxed">
          What we do is simple: we come in, build the core revenue machine, and
          hand it to you.
        </p>

        <p className="mt-4 leading-relaxed font-semibold" style={{ color: C.ink }}>
          We deliver 6 core assets that make you money:
        </p>

        {/* ASSET 1 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            1. ICP & Offer Lock
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We sit down and choose one niche and one painful, urgent problem you
            solve. Then we turn it into a Minimum Viable Offer you can
            confidently sell.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>{" "}
            An Offer Doc that includes the promise, scope, timeline, pricing
            ladder, and guarantee.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            If your positioning is vague, nothing else works. This step is the
            foundation.
          </p>
        </div>

        {/* ASSET 2 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            2. Proof Asset
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We create or extract one strong proof asset — a mini case study, a
            teardown, a before/after, a demo — even if you’ve never had a
            “perfect” client.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>{" "}
            A proof asset you can show/send/use in sales immediately.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            Proof beats confidence issues. Proof beats long explanations. Proof
            is what moves buyers from “maybe” to “oh, this is real.”
          </p>
        </div>

        {/* ASSET 3 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            3. Profile Funnel + One-Page Landing
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We rebuild your outward face: bio, pinned post(s), CTA (“DM me
            ‘X’”), and a one-page landing that goes Problem → Promise → Proof →
            CTA (book a call).
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>{" "}
            A working profile funnel and a lean landing page that directs people
            to a call instead of letting them wander.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            Your social presence stops being a resume and starts acting like a
            live funnel.
          </p>
        </div>

        {/* ASSET 4 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            4. Booking Stack + Call Script
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We build the booking infrastructure and hand you the close process.
          </p>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>
          </p>
          <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
            <li>• Your calendar link</li>
            <li>• Intake form</li>
            <li>• Auto-confirm + show-up reminders</li>
            <li>
              • A 1-call close script (diagnose → fit → plan → price → next
              step)
            </li>
          </ul>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            No more improvising or “explaining for 45 minutes.” You’ll have a
            repeatable path from stranger → booked call → paid.
          </p>
        </div>

        {/* ASSET 5 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            5. Outbound & Content Rhythm
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We install the first consistent traffic engine.
          </p>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>
          </p>
          <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
            <li>• A 30-day content plan (authority / proof / offer)</li>
            <li>
              • Daily outbound/DM/email scripts (what to send, to who, how
              often)
            </li>
          </ul>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            You wake up knowing exactly how to create conversations and where
            your next bookings are coming from.
          </p>
        </div>

        {/* ASSET 6 */}
        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-sm font-semibold" style={{ color: C.ink }}>
            6. Onboarding & Delivery Rhythm
          </div>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            We formalize how you onboard and keep clients happy.
          </p>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              What you get:
            </span>
          </p>
          <ul className="mt-2 text-sm leading-relaxed opacity-90 space-y-1">
            <li>• Onboarding checklist</li>
            <li>• Kickoff call agenda</li>
            <li>• Weekly reporting template</li>
            <li>• 90-day roadmap structure</li>
          </ul>

          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: C.ink }}>
              Why this matters:
            </span>{" "}
            This stops churn, protects your reputation, and turns delivery into
            repeatable proof for future sales.
          </p>
        </div>

        <p className="mt-8 text-sm leading-relaxed font-semibold" style={{ color: C.ink }}>
          That’s the core product:<br />
          We build the system you’ll run every single week to acquire and keep
          clients.
        </p>
      </SectionCard>

      {/* 4. HOW WE DELIVER / HOW WE CHARGE */}
      <SectionCard
        title="4. How we deliver and how we charge"
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
            This is not an endless “coaching container.”
            <br />
            This is not “we’ll post for you forever.”
            <br />
            We are here to install the core revenue infrastructure so you can
            run it without us.
          </p>

          <p className="mt-3 text-sm leading-relaxed opacity-90">
            Our whole brand is built around: move fast, ship real assets,
            eliminate chaos.
          </p>
        </div>

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
            <p className="mt-2 text-sm leading-relaxed font-semibold" style={{ color: C.ink }}>
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
              For the right founders, we’ll stay involved and tie compensation
              to revenue or booked calls. We only do this with people who are
              clearly in motion and just need force applied, not rescuing.
            </p>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              This becomes our “portfolio,” but that’s not the default offer.
              It’s earned.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* POSITIONING SUMMARY / CTA */}
      <SectionCard
        title="Our positioning in one line"
        meta="Why this offer exists"
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

        <p className="mt-6 text-sm leading-relaxed font-semibold" style={{ color: C.ink }}>
          We turn founder psychology into a working revenue system.
          <br />
          You keep it. You run it. We make sure it works.
        </p>

        {/* CTA row */}
        <div className="mt-8 grid sm:flex gap-3 text-sm">
          <a
            href="#/book-a-call"
            className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 border"
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
            className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 border"
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
    </main>
  );
}
