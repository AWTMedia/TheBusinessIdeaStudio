import React from "react";

/*
  Content Production System — Platform Understanding
  One‑pager built with React + Tailwind. Matches the "Matrix" style of your other pages:
  - Soft cards, rounded corners, subtle borders, compact spacing
  - MacBook Air friendly (1280–1440px)
  - Print / Save as PDF ready
*/

export default function CPSPlatformUnderstanding() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <LoopSection />
        <PlatformFormatsSection />
        <ContentStructureSection />
        <PacingSection />
        <MindsetSection />
        <Footer />
      </div>
    </main>
  );
}

/* --------------------------------- Header -------------------------------- */
function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Content Production System — Platform Understanding
      </h1>
      <p className="text-slate-600 mt-2 max-w-3xl">
        A practical map of formats, structures, pacing, and platform mindsets to
        operationalise your ideate → produce → repurpose → distribute → track →
        iterate loop.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Tag color="emerald">Ideate</Tag>
        <Tag color="indigo">Produce</Tag>
        <Tag color="amber">Repurpose</Tag>
        <Tag color="rose">Distribute</Tag>
        <Tag color="slate">Track</Tag>
        <Tag color="violet">Iterate</Tag>
      </div>
    </header>
  );
}

/* ------------------------------ Loop Section ----------------------------- */
function LoopSection() {
  const steps = [
    { label: "Ideate", hint: "Map ideas → outlines & hooks" },
    { label: "Produce", hint: "Record / write core assets" },
    { label: "Repurpose", hint: "Cut, caption, reformat" },
    { label: "Distribute", hint: "Multi‑platform scheduling" },
    { label: "Track", hint: "Analytics & tagging" },
    { label: "Iterate", hint: "Double down / retire" },
  ];
  return (
    <section className="mb-8">
      <Card>
        <h2 className="text-lg font-bold mb-3">Production Loop</h2>
        <Flow steps={steps} />
      </Card>
    </section>
  );
}

/* -------------------------- Platform Formats Grid ------------------------- */
function PlatformFormatsSection() {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold mb-3">Platform Formats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card tone="emerald">
          <h3 className="font-semibold">📱 TikTok</h3>
          <Bullets
            items={[
              "Short‑Form Video (15s–10 min, vertical, algorithm‑first)",
              "TikTok Stories (24h disappearing content)",
              "LIVE (real‑time streaming, monetizable with gifts)",
              "Photo Posts (carousel‑style stills with music)",
              "TikTok Series (paywalled premium collections)",
              "Duets / Stitches (collab split‑screen or cut‑in)",
              "Comment Video Replies (answer via video in thread)",
            ]}
          />
        </Card>
        <Card tone="slate">
          <h3 className="font-semibold">🐦 Twitter / X</h3>
          <Bullets
            items={[
              "Text Tweets (Posts) — now longer posts allowed",
              "Images / Carousels",
              "GIFs & Memes",
              "Video Posts (short → mid)",
              "Spaces (live audio rooms)",
              "Communities (interest groups)",
              "Articles / Long Posts (premium)",
              "Polls",
              "Fleets (stories‑style, discontinued)",
            ]}
          />
        </Card>
        <Card tone="rose">
          <h3 className="font-semibold">📸 Instagram</h3>
          <Bullets
            items={[
              "Feed Posts (single image / video)",
              "Carousels (multi‑image/video swipes)",
              "Reels (short‑form vertical)",
              "Stories (24h, stickers, polls, Q&As, links)",
              "LIVE (real‑time, collaborative)",
              "Guides (curated lists)",
              "Broadcast Channels (one‑to‑many messaging)",
              "Shopping / Product Tags",
              "Highlights (saved stories)",
              "Notes (short text statuses in inbox)",
            ]}
          />
        </Card>
        <Card tone="indigo">
          <h3 className="font-semibold">💼 LinkedIn</h3>
          <Bullets
            items={[
              "Feed Posts (text, image, video)",
              "Articles / Long‑form publishing",
              "Carousels (PDF swipe posts)",
              "Video Posts / Live events",
              "Newsletters (recurring long‑form)",
              "LinkedIn LIVE (webinars, events)",
              "Polls",
              "Events (virtual/in‑person)",
              "Stories (discontinued 2021)",
            ]}
          />
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">▶️ YouTube</h3>
          <Bullets
            items={[
              "Long‑Form Video (5–120+ min)",
              "YouTube Shorts (vertical < 60s)",
              "LIVE (streaming with chat)",
              "Community Tab (text, polls, images, GIFs)",
              "Stories (10k+ subs)",
              "Playlists (curated collections)",
              "Premieres (scheduled releases + chat)",
              "Podcasts (designated playlists)",
              "YouTube Music Uploads (for musicians)",
            ]}
          />
        </Card>
      </div>

      <h3 className="text-sm font-semibold mt-6 mb-2 text-slate-700">
        Platform Formats (Extended)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">
            🎙️ Podcasts (Spotify, Apple, YouTube)
          </h3>
          <Bullets
            items={[
              "Audio Episodes (varied lengths)",
              "Video Podcasts (Spotify/YouTube)",
              "Clips / Highlights (repurpose for socials)",
              "Live Podcasts / Spaces (some shut down yet still relevant format)",
              "Newsletters / Episode Notes",
              "Podcasts (designated playlists on YouTube)",
            ]}
          />
        </Card>
        <Card>
          <h3 className="font-semibold">✍️ Blogs / Medium / Substack</h3>
          <Bullets
            items={[
              "Articles / Posts (long‑form)",
              "Newsletters (email + web)",
              "Embedded Media (images, audio, video)",
              "Comments & Discussions",
              "(Substack) Paid subscriptions, podcast integration",
            ]}
          />
        </Card>
        <Card>
          <h3 className="font-semibold">📌 Pinterest</h3>
          <Bullets
            items={[
              "Static Pins (images)",
              "Idea Pins (multi‑page, video‑first)",
              "Video Pins (short/mid‑form)",
              "Shopping Pins (product‑linked)",
              "Carousels (multi‑image)",
              "Boards (curated collections)",
            ]}
          />
        </Card>
        <Card>
          <h3 className="font-semibold">📘 Facebook</h3>
          <Bullets
            items={[
              "Feed Posts (Text, Image, Video)",
              "Carousels / Albums",
              "Stories",
              "Reels (short‑form, cross‑platform with IG)",
              "LIVE (Stars monetization)",
              "Events (public/private, RSVP)",
              "Groups Content (posts, polls, Lives)",
              "Watch Tab Shows (episodic)",
              "Marketplace Listings",
              "Rooms (video chat)",
            ]}
          />
        </Card>
      </div>
    </section>
  );
}

/* --------------------------- Content Structure --------------------------- */
function ContentStructureSection() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Content Structure</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="rose">
          <h3 className="font-semibold">Hook</h3>
          <p className="text-sm leading-6 mt-1">
            Two most effective: <strong>controversy</strong> or a{" "}
            <strong>curiosity gap</strong>. Controversy is decaying; curiosity
            increasingly wins. Viral hooks often reuse proven formats—
            <em>use what works</em> and localise to your ICP.
          </p>
        </Card>
        <Card tone="amber">
          <h3 className="font-semibold">Body</h3>
          <p className="text-sm leading-6 mt-1">
            Deliver value via <strong>education</strong>,{" "}
            <strong>entertainment</strong>, or
            <strong> edutainment</strong>. Align style with ICP and your unique
            angle.
          </p>
        </Card>
        <Card tone="emerald">
          <h3 className="font-semibold">CTA</h3>
          <p className="text-sm leading-6 mt-1">
            Nudge the next step. Statistically most effective around the{" "}
            <strong>66%</strong>
            and <strong>99%</strong> marks of a video. Tailor CTA to funnel
            stage.
          </p>
        </Card>
      </div>
      <Card className="mt-4">
        <h4 className="font-medium">Platform‑specific play — YouTube</h4>
        <p className="text-sm leading-6 mt-1">
          Confirm the <strong>thumbnail promise in the first 5 seconds</strong>.
          Viewers clicked for that promise; explicitly validate they will get it
          to reinforce interest & retention.
        </p>
      </Card>
    </section>
  );
}

/* --------------------------- Pacing & Cadence ---------------------------- */
function PacingSection() {
  const rows = [
    {
      label: "TikTok",
      pace: "Ultra‑fast",
      note: "Jump cuts, bold captions, trend sounds",
    },
    {
      label: "Instagram Reels",
      pace: "Ultra‑fast",
      note: "Jump cuts, bold captions, trend sounds",
    },
    {
      label: "YouTube Shorts",
      pace: "Ultra‑fast",
      note: "Jump cuts, bold captions, trend sounds",
    },
    {
      label: "Threads/X (short video & threads)",
      pace: "Quick",
      note: "Punchy, meme‑style edits or text",
    },
    {
      label: "Instagram Feed (carousels & memes)",
      pace: "Fast",
      note: "Swipe‑driven; split‑second engage",
    },
    {
      label: "LinkedIn (clips, carousels, posts)",
      pace: "Moderate",
      note: "Fast hooks, more caption reading",
    },
    {
      label: "YouTube (5–15 min)",
      pace: "Slower",
      note: "Storytelling, explanations, breathing edits",
    },
    {
      label: "Facebook",
      pace: "Mixed",
      note: "1–5 min mid‑length tolerated; older demos",
    },
    {
      label: "Pinterest",
      pace: "Mixed",
      note: "1–5 min visuals; older demos tolerate slower",
    },
    {
      label: "Blogs / Medium / Substack",
      pace: "Long‑form",
      note: "Deliberate, thoughtful reading",
    },
    {
      label: "Podcasts (audio & video)",
      pace: "Slowest",
      note: "20–120 min deep dives; conversational",
    },
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Pacing & Cadence</h2>
      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4">Platform</th>
              <th className="py-2 pr-4">Pace</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="py-2 pr-4 text-slate-800">{r.label}</td>
                <td className="py-2 pr-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-xs">
                    {r.pace}
                  </span>
                </td>
                <td className="py-2 text-slate-700">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}

/* ----------------------------- Platform Mindset --------------------------- */
function MindsetSection() {
  const items = [
    {
      title: "TikTok / IG Reels / YT Shorts",
      body: "“Entertain me now.” Fast dopamine hits, trends, comedy, relatability. ~80% entertainment / 20% micro‑education.",
    },
    {
      title: "Threads / X",
      body: "“What’s happening right now?” News, hot takes, debates, memes. 50/50 entertainment vs insights/threads.",
    },
    {
      title: "Instagram Feed (carousels & memes)",
      body: "“Aspirational, aesthetic, personal.” Value carousels & lifestyle. ~60% entertainment / 40% education.",
    },
    {
      title: "LinkedIn",
      body: "“Level up professionally / expand network.” Case studies, industry insights. ~80% educational / 20% entertainment.",
    },
    {
      title: "YouTube (standard videos)",
      body: "“Learn or be immersed.” Tutorials, storytelling, series. ~60% educational / 40% entertainment (niche dependent).",
    },
    {
      title: "Facebook",
      body: "“Keep me connected.” Friends/family, groups, local. ~70% entertainment / 30% education (groups can skew edu).",
    },
    {
      title: "Pinterest",
      body: "“Inspiration & planning.” Intent‑based search (DIY, guides). ~70% educational / 30% entertainment.",
    },
    {
      title: "Blogs / Medium / Substack",
      body: "“Deep dive.” Thought leadership & how‑to’s. ~90% educational / 10% entertainment.",
    },
    {
      title: "Podcasts (audio & video)",
      body: "“Companion learning while multitasking.” Deliberate, expert‑driven. ~65% educational / 35% entertainment.",
    },
  ];
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-3">Platform Mindset</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm leading-6 mt-1">{it.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="mt-10 flex flex-wrap items-center gap-3">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
      >
        Print / Save as PDF
      </button>
      <span className="text-xs text-slate-500">
        Optimised for 1280–1440px (MacBook Air). A4 landscape recommended.
      </span>
    </footer>
  );
}

/* ------------------------------- UI primitives --------------------------- */
function Card({
  children,
  className = "",
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}) {
  const ring: Record<Tone, string> = {
    slate: "",
    emerald: "ring-1 ring-emerald-100",
    amber: "ring-1 ring-amber-100",
    rose: "ring-1 ring-rose-100",
    indigo: "ring-1 ring-indigo-100",
    violet: "ring-1 ring-violet-100",
  } as const;
  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-sm ${
        tone ? ring[tone] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

function Tag({ children, color = "slate" as Tone }) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}
    >
      {children}
    </span>
  );
}

function Bullets({ items = [] as string[] }) {
  return (
    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Flow({ steps }: { steps: { label: string; hint?: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-3">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <Step label={s.label} hint={s.hint} />
          {i < steps.length - 1 ? (
            <span className="mx-2 select-none text-slate-400">→</span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function Step({ label, hint }: { label: string; hint?: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-card text-sm">
      <span className="font-medium text-slate-800">{label}</span>
      {hint ? <span className="text-[11px] text-slate-500">{hint}</span> : null}
    </span>
  );
}
