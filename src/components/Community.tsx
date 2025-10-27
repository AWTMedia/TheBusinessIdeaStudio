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

/** Replace with your real URLs (add UTMs if you like) */
const SKOOL_GROUP_URL =
  "https://www.skool.com/your-group?ref=bis_site&utm_source=bis&utm_medium=site&utm_campaign=community";
const APPLY_URL = "https://tally.so/r/your-form-id";

/** YouTube (same helper pattern as the landing hero) */
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
      className="rounded-full border px-3 py-1 text-xs bg-white"
      style={{ borderColor: C.gray }}
    >
      {children}
    </span>
  );
}

export default function Community() {
  const embed = toEmbed(HERO_VIDEO_URL);

  return (
    <>
      {/* HERO — same rhythm as landing page hero (transparent bg, YT on right, centered) */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10 items-start">
          {/* Left: Message */}
          <div className="md:col-span-7">
            <Kicker>Private Network</Kicker>
            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl sm:leading-tight font-black"
              style={{ color: C.ink }}
            >
              The Business Idea Studio — Network on Skool
            </h1>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              Not a course — an <strong>operator-led network</strong> for
              founders who execute. We match by stage and skill, run pods and
              AMAs, and compound results through shared systems and proof.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA href={SKOOL_GROUP_URL}>Join on Skool</CTA>
              <CTA href={APPLY_URL} variant="ghost">
                Apply for Access
              </CTA>
            </div>

            {/* quick trust strip (pills) */}
            <div className="mt-5 flex flex-wrap gap-2 opacity-95">
              <Tag>Pods</Tag>
              <Tag>AMAs</Tag>
              <Tag>Build-in-public</Tag>
              <Tag>Proof artifacts</Tag>
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
                  Watch: How the Network Works
                </div>
                <p className="mt-1 text-xs opacity-80">
                  2–3 minutes. Pods, weekly actions, and proof-driven
                  compounding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP — Why the network */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl bg-white p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Why Network
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Action &gt; Consumption
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Courses teach in sequence. Networks compound through{" "}
              <strong>peer accountability</strong>,{" "}
              <strong>live feedback</strong>, and <strong>proof</strong>.
              Execute playbooks with operators who have receipts.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Matching
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Pods by Stage &amp; Skill
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Get slotted into <strong>pods</strong> by revenue stage, channel
              expertise, and operating focus (offer, demand, ops). Less noise,
              more signal.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white p-6 border"
            style={{ borderColor: C.gray }}
          >
            <div className="text-xs uppercase tracking-widest opacity-60">
              Outcomes
            </div>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: C.ink }}>
              Systems + Proof
            </h3>
            <p className="mt-2 text-sm opacity-90">
              We measure moves, not vibes. Ship one meaningful action weekly,
              stack case-worthy proof, and share playbooks back to the
              community.
            </p>
          </div>
        </div>

        {/* What you get */}
        <div
          className="mt-10 rounded-2xl bg-white p-6 border"
          style={{ borderColor: C.gray }}
        >
          <h2 className="text-xl font-bold" style={{ color: C.ink }}>
            What You Get
          </h2>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm leading-6 opacity-90">
            <li>• Private Skool space with role-based channels</li>
            <li>• Weekly action threads + leaderboard</li>
            <li>• Pod matching by stage, niche, or channel</li>
            <li>• Monthly AMAs and teardown sessions</li>
            <li>• Resource vault: one-pagers &amp; templates</li>
            <li>• Deal flow &amp; collab requests channel</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <CTA href={SKOOL_GROUP_URL}>Join on Skool</CTA>
            <CTA href={APPLY_URL} variant="ghost">
              Apply for Access
            </CTA>
          </div>
        </div>

        {/* Operating Rules */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl bg-white p-6 border"
            style={{ borderColor: C.gray }}
          >
            <h3 className="text-lg font-semibold" style={{ color: C.ink }}>
              Operating Principles
            </h3>
            <ul className="mt-2 text-sm leading-6 opacity-90">
              <li>• Build, don’t posture</li>
              <li>• Evidence over opinion</li>
              <li>• Help first, promote with proof</li>
              <li>• Respect privacy; anonymize client data</li>
              <li>• Give back: post a teardown or template quarterly</li>
            </ul>
          </div>
          <div
            className="rounded-2xl bg-white p-6 border"
            style={{ borderColor: C.gray }}
          >
            <h3 className="text-lg font-semibold" style={{ color: C.ink }}>
              Joining &amp; Onboarding
            </h3>
            <ol className="mt-2 text-sm leading-6 opacity-90 list-decimal pl-5">
              <li>Apply (2–3 mins) for stage/skill matching</li>
              <li>Accept invite and set your intro &amp; goals</li>
              <li>Get placed into a pod and pick a weekly action</li>
              <li>Show proof, request help, share systems</li>
            </ol>
            <div className="mt-4">
              <CTA href={APPLY_URL} variant="lime">
                Start application →
              </CTA>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="mt-10 rounded-2xl bg-white p-6 border flex items-center justify-between flex-wrap gap-4"
          style={{ borderColor: C.gray }}
        >
          <div className="text-[15px] leading-relaxed opacity-90">
            Ready to plug into an operator-led network? Join the Skool community
            and compound results with peers.
          </div>
          <div className="flex gap-2">
            <CTA href={SKOOL_GROUP_URL}>Join on Skool</CTA>
            <CTA href={APPLY_URL} variant="ghost">
              Apply first
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
