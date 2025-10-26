import React from "react";
import CTA from "./CTA";

// Brand palette (kept in-file for portability; mirrors App.tsx)
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
      style={{ borderColor: "#fff", color: "#fff" }}
    >
      {children}
    </span>
  );
}

export default function Governance() {
  // Smooth-scroll within the Governance page without breaking the hash router
  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Keep route as /governance while reflecting the subsection in the URL
        history.replaceState(null, "", `#/governance#${id}`);
      }
    };

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <a
          href="#/Governance"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: C.blue }}
        >
          ← Back to Home
        </a>
        <div className="text-xs opacity-70">Standards & Governance</div>
      </div>

      {/* Header */}
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
              Operating Standards
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
              Governance, Quality & Safety at The Business Idea Studio
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-95 max-w-3xl">
              This is how we protect signal, maintain editorial integrity, and
              keep the knowledge graph safe, useful, and commercially reliable.
              If it ships here, it meets these standards.
            </p>
          </div>
          <Pill>Policy v1.0</Pill>
        </div>
        <div
          className="mt-6 h-px w-full"
          style={{ background: "rgba(255,255,255,.15)" }}
        />
        <div className="mt-6 text-xs opacity-75">
          Updated weekly • Evidence-led • Human-in-the-loop
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Left rail: quick nav */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <div className="text-sm font-semibold" style={{ color: C.ink }}>
              Quick Navigation
            </div>
            <nav className="mt-4 space-y-2 text-sm">
              {[
                ["purpose", "Purpose & Scope"],
                ["dod", "Definition of Done"],
                ["editorial", "Editorial Standards"],
                ["evidence", "Evidence & Citations"],
                ["privacy", "Data Ethics, GDPR/POPIA"],
                ["ai", "AI Assistance Policy"],
                ["security", "Security & Access"],
                ["accessibility", "Accessibility"],
                ["versioning", "Versioning & Change Log"],
                ["disclosures", "Disclosures & Contact"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#/governance#${id}`}
                  onClick={scrollToSection(id)}
                  className="block rounded-lg px-3 py-2 hover:bg-white"
                  style={{ borderColor: C.gray }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <CTA href="#/repo" variant="ghost">
                Open Repository →
              </CTA>
            </div>
          </Card>
        </div>

        {/* Main body */}
        <div className="lg:col-span-2 space-y-6">
          {/* Purpose */}
          <Card>
            <h2
              id="purpose"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Purpose & Scope
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              We operate a public knowledge graph that turns{" "}
              <strong>founder psychology</strong> into{" "}
              <strong>business mechanics</strong> you can run today. Governance
              keeps the work actionable, safe, and auditable across one-pagers,
              playbooks, and proof artifacts.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] opacity-90">
              <li>• Clarity over cleverness</li>
              <li>• Evidence over opinion</li>
              <li>• Systems over slogans</li>
              <li>• Privacy by default</li>
            </ul>
          </Card>

          {/* Definition of Done */}
          <Card>
            <h2 id="dod" className="text-xl font-bold" style={{ color: C.ink }}>
              Definition of Done (DoD)
            </h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div
                className="rounded-xl border p-4 bg-white"
                style={{ borderColor: C.gray }}
              >
                <div className="text-sm font-semibold">Minimum Criteria</div>
                <ul className="mt-2 text-sm leading-6 opacity-90">
                  <li>• Clear problem statement and desired outcome</li>
                  <li>
                    • Step-by-step actions that can be executed in 72 hours
                  </li>
                  <li>
                    • One proof artifact (metric, screenshot, or third-party
                    source)
                  </li>
                  <li>• Risks & constraints called out explicitly</li>
                </ul>
              </div>
              <div
                className="rounded-xl border p-4 bg-white"
                style={{ borderColor: C.gray }}
              >
                <div className="text-sm font-semibold">Quality Gates</div>
                <ul className="mt-2 text-sm leading-6 opacity-90">
                  <li>• Mobile-first legibility and print/PDF friendly</li>
                  <li>• Plain language (Grade 8–10), no jargon</li>
                  <li>• KPI suggestions + tooling where relevant</li>
                  <li>• Maintainer review + date stamp</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Editorial Standards */}
          <Card>
            <h2
              id="editorial"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Editorial Standards
            </h2>
            <ul className="mt-3 space-y-2 text-[15px] opacity-90">
              <li>
                • <strong>Visual &gt; verbose:</strong> cards, lists, diagrams,
                and checklists beat long prose.
              </li>
              <li>
                • <strong>Human performance first:</strong> reduce decision
                fatigue, remove ambiguity, name trade-offs.
              </li>
              <li>
                • <strong>Repeatability:</strong> prefer moves that compound and
                can be taught or delegated.
              </li>
              <li>
                • <strong>No hype:</strong> claims require either data, a
                repeatable mechanism, or a referenced source.
              </li>
            </ul>
          </Card>

          {/* Evidence */}
          <Card>
            <h2
              id="evidence"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Evidence & Citations
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              We annotate playbooks with metrics, screenshots, or links to
              primary sources. Where a result is directional or early, we label
              it as <em>exploratory</em> and describe limitations.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] opacity-90">
              <li>• Prefer primary sources, replicate where feasible</li>
              <li>• Timestamp all numbers; context over vanity</li>
              <li>• Separate correlation from mechanism</li>
            </ul>
          </Card>

          {/* Privacy */}
          <Card>
            <h2
              id="privacy"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Data Ethics, Privacy & Compliance (GDPR/POPIA)
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              We practice <strong>data minimization</strong>, anonymize client
              identifiers, and obtain explicit consent for any case material. We
              do not sell or broker personal data. Aggregated insights may be
              published only after k-anonymity checks.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] opacity-90">
              <li>• Lawful basis documented for any personal data</li>
              <li>• Access limited by role; least privilege enforced</li>
              <li>• Right to erasure & export honored within 30 days</li>
            </ul>
          </Card>

          {/* AI Policy */}
          <Card>
            <h2 id="ai" className="text-xl font-bold" style={{ color: C.ink }}>
              AI Assistance Policy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              We use AI to draft, summarize, and stress-test ideas. Humans are
              accountable for all outputs. Sensitive content and proprietary
              client data are excluded from third-party training.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] opacity-90">
              <li>
                • Human review before publish; AI is a copilot, not the pilot
              </li>
              <li>• No confidential inputs to public models</li>
              <li>• Hallucination checks: source or remove</li>
            </ul>
          </Card>

          {/* Security */}
          <Card>
            <h2
              id="security"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Security & Access
            </h2>
            <ul className="mt-3 space-y-2 text-[15px] opacity-90">
              <li>• SSO + MFA where available</li>
              <li>• Role-based access; quarterly permission reviews</li>
              <li>• Vendor risk reviews for any new tool in the stack</li>
              <li>
                • Incident response: classify, contain, notify, postmortem
              </li>
            </ul>
          </Card>

          {/* Accessibility */}
          <Card>
            <h2
              id="accessibility"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Accessibility
            </h2>
            <ul className="mt-3 space-y-2 text-[15px] opacity-90">
              <li>• Color contrast targets WCAG AA where possible</li>
              <li>• Keyboard focusable links and buttons</li>
              <li>• Alt text for key visuals; print/PDF friendly layouts</li>
            </ul>
          </Card>

          {/* Versioning */}
          <Card>
            <h2
              id="versioning"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Versioning & Change Log
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              Policies and one-pagers are versioned. Breaking changes get a new
              major version; incremental updates bump the minor version with a
              date stamp.
            </p>
            <div
              className="mt-4 rounded-xl border p-4 bg-white"
              style={{ borderColor: C.gray }}
            >
              <div className="text-sm font-semibold">Recent Changes</div>
              <ul className="mt-2 text-sm leading-6 opacity-90">
                <li>• 2025-10-26: Initial public Governance v1.0</li>
              </ul>
            </div>
          </Card>

          {/* Disclosures */}
          <Card>
            <h2
              id="disclosures"
              className="text-xl font-bold"
              style={{ color: C.ink }}
            >
              Disclosures & Contact
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-90">
              Where a recommendation could benefit us financially, we’ll say so
              upfront. Most tools we mention are used daily; some links may be
              affiliate at no extra cost to you.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <CTA href="#/repo" variant="ghost">
                View Repository
              </CTA>
              <CTA href="#/book-a-call">Book a Strategy Call</CTA>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
