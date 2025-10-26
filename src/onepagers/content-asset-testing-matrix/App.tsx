import { useMemo, useState } from "react";

/*
  Content Asset & Testing Matrix
  - Covers Paid Ads, Organic Short Form, Organic Long Form
  - Encodes testing variables (Hook 0-3s, Format, Copy, CTA, Angle, Placement, Length)
  - Includes One-Pager builders, Story Sequences, Analytics & Iteration, and Platform views
  - Optimized for MacBook Air (1280–1440px) and print (A4 landscape)
*/

export default function ContentAssetTestingMatrix() {
  const [filters, setFilters] = useState({
    channel: new Set(["Paid", "Organic Short", "Organic Long"]),
    platforms: new Set([
      "Instagram",
      "TikTok",
      "YouTube",
      "Facebook",
      "LinkedIn",
    ]),
    stages: new Set(["TOF", "MOF", "BOF", "Broad"]),
    offerTypes: new Set(["Agency", "Coaching"]),
    query: "",
  });

  const [rows, setRows] = useState<AssetRow[]>(seedRows);
  const [showBuilders, setShowBuilders] = useState(true);

  const visibleRows = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return rows.filter(
      (r) =>
        filters.channel.has(r.channel) &&
        (r.platform.some((p) => filters.platforms.has(p)) ||
          r.platform.length === 0) &&
        (filters.stages.has(r.funnel) || r.funnel === "") &&
        (r.offerType ? filters.offerTypes.has(r.offerType) : true) &&
        (!q || JSON.stringify(r).toLowerCase().includes(q))
    );
  }, [rows, filters]);

  const addVariant = (id: string, variant: Partial<AssetRow>) => {
    setRows((prev) => {
      const src = prev.find((r) => r.id === id);
      if (!src) return prev;
      const copy = { ...src, ...variant, id: uid() };
      return [copy, ...prev];
    });
  };

  const updateCell = (id: string, key: keyof AssetRow, value: any) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: value } : r))
    );
  };

  const exportJSON = () =>
    download("content-asset-matrix.json", JSON.stringify(rows, null, 2));
  const exportCSV = () => download("content-asset-matrix.csv", toCSV(rows));

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Content Asset & Testing Matrix
          </h1>
          <p className="text-slate-600 mt-2">
            One place to plan, test, and iterate Paid Ads, Organic Short Form,
            and Organic Long Form assets — with hooks, formats, CTAs,
            placements, analytics, and iteration notes.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">Testing Variables</Tag>
            <Tag color="indigo">One-Pager Builders</Tag>
            <Tag color="amber">Story Sequences</Tag>
            <Tag color="rose">Analytics & Iteration</Tag>
          </div>
        </header>

        {/* Filters */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-3">
            <MultiToggle
              label="Channel"
              options={["Paid", "Organic Short", "Organic Long"]}
              value={filters.channel}
              onChange={(v) => setFilters((f) => ({ ...f, channel: v }))}
            />
            <MultiToggle
              label="Platforms"
              options={[
                "Instagram",
                "TikTok",
                "YouTube",
                "Facebook",
                "LinkedIn",
              ]}
              value={filters.platforms}
              onChange={(v) => setFilters((f) => ({ ...f, platforms: v }))}
            />
            <MultiToggle
              label="Funnel Stage"
              options={["Broad", "TOF", "MOF", "BOF"]}
              value={filters.stages}
              onChange={(v) => setFilters((f) => ({ ...f, stages: v }))}
            />
            <MultiToggle
              label="Offer Type"
              options={["Agency", "Coaching"]}
              value={filters.offerTypes}
              onChange={(v) => setFilters((f) => ({ ...f, offerTypes: v }))}
            />
          </div>
          <div className="mt-3 grid md:grid-cols-3 gap-4">
            <Field
              label="Search"
              value={filters.query}
              onChange={(v) => setFilters((f) => ({ ...f, query: v }))}
              placeholder="hook, CTA, placement, platform…"
            />
            <div className="flex items-end gap-2">
              <button
                className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
                onClick={exportJSON}
              >
                Export JSON
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm"
                onClick={exportCSV}
              >
                Export CSV
              </button>
            </div>
            <div className="flex items-end justify-end">
              <button
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm"
                onClick={() => window.print()}
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </section>

        {/* Builders */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              One-Pager Builders & Sequences
            </h2>
            <button
              className="text-xs px-2 py-1 rounded bg-white border border-slate-200"
              onClick={() => setShowBuilders((s) => !s)}
            >
              {showBuilders ? "Hide" : "Show"}
            </button>
          </div>
          {showBuilders && (
            <div className="grid lg:grid-cols-3 gap-4 mt-3">
              <Card title="Paid Ads — One Pager (Video Ad)">
                <Builder template={VIDEO_ONEPAGER_TEMPLATE} />
              </Card>
              <Card title="Paid Ads — Carousel Ad">
                <Builder template={CAROUSEL_TEMPLATE} />
              </Card>
              <Card title="Story Sequences (Daily → Ads Manager)">
                <Checklist
                  items={[
                    "Daily Story Sequences",
                    "Push Through Ads Manager",
                    "Social Proof",
                    "Lead Magnet Promotion",
                    "Paradigm Shift",
                    "Free Value & Demand Test",
                  ]}
                />
              </Card>
            </div>
          )}
        </section>

        {/* Matrix Table */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">Assets & Tests</h2>
          <div className="overflow-auto border border-slate-200 rounded-xl">
            <table className="min-w-[1100px] text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <Th>Channel</Th>
                  <Th>Asset</Th>
                  <Th>Subtype / Angle</Th>
                  <Th>Funnel</Th>
                  <Th>Platform</Th>
                  <Th>Placement</Th>
                  <Th>Format</Th>
                  <Th>Hook (0–3s)</Th>
                  <Th>Structure</Th>
                  <Th>Copy Type</Th>
                  <Th>CTA</Th>
                  <Th>Length</Th>
                  <Th>Offer Type</Th>
                  <Th>Status</Th>
                  <Th>Analytics</Th>
                  <Th>Iteration</Th>
                  <Th></Th>
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((r) => (
                  <tr
                    key={r.id}
                    className="border-t border-slate-100 align-top"
                  >
                    <Td>{r.channel}</Td>
                    <Td>{r.asset}</Td>
                    <Td>{r.subType || joinTags(r.typeTags)}</Td>
                    <Td>{r.funnel}</Td>
                    <Td>{r.platform.join(", ")}</Td>
                    <Td>
                      <EditText
                        value={r.placement?.join(", ") || ""}
                        onChange={(v) =>
                          updateCell(r.id, "placement", splitCSV(v))
                        }
                        placeholder="Feed, Reels, Stories, Shorts"
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.format}
                        onChange={(v) => updateCell(r.id, "format", v)}
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.hook}
                        onChange={(v) => updateCell(r.id, "hook", v)}
                        placeholder="pattern-interrupt in 0–3s"
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.structure}
                        onChange={(v) => updateCell(r.id, "structure", v)}
                        placeholder="Problem-Solution / Action-Driven / Credibility"
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.copy}
                        onChange={(v) => updateCell(r.id, "copy", v)}
                        placeholder="Framework vs Tips / Hard Data vs Numbers"
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.cta}
                        onChange={(v) => updateCell(r.id, "cta", v)}
                        placeholder="Book call / DM keyword / Download"
                      />
                    </Td>
                    <Td>
                      <EditText
                        value={r.length || ""}
                        onChange={(v) => updateCell(r.id, "length", v)}
                        placeholder="15s / 30s / 60-90s / 8-12min"
                      />
                    </Td>
                    <Td>{r.offerType || ""}</Td>
                    <Td>
                      <select
                        className="border border-slate-200 rounded px-2 py-1"
                        value={r.status || "Testing"}
                        onChange={(e) =>
                          updateCell(r.id, "status", e.target.value as any)
                        }
                      >
                        <option>Testing</option>
                        <option>Live</option>
                        <option>Iterate</option>
                        <option>Retire</option>
                      </select>
                    </Td>
                    <Td>
                      <AnalyticsEditor
                        data={r.analytics}
                        onChange={(a) => updateCell(r.id, "analytics", a)}
                      />
                    </Td>
                    <Td>
                      <EditText
                        area
                        value={r.testingNotes || ""}
                        onChange={(v) => updateCell(r.id, "testingNotes", v)}
                        placeholder="Observations, next test, proof signals"
                      />
                    </Td>
                    <Td>
                      <button
                        className="text-xs px-2 py-1 rounded bg-white border border-slate-200"
                        onClick={() =>
                          addVariant(r.id, {
                            hook: "NEW HOOK VARIANT",
                            status: "Testing",
                          })
                        }
                      >
                        + Variant
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Platforms View */}
        <section className="mt-6 grid lg:grid-cols-5 gap-4">
          <Card title="Instagram">
            <Bullets
              items={[
                "Reels",
                "Story Sequences",
                "Carousel",
                "DFY Templates",
                "On-Camera Delivery",
                "Visual Design Quality",
                "Opening Framework",
              ]}
            />
          </Card>
          <Card title="TikTok">
            <Bullets
              items={[
                "Reels/Shorts",
                "On-Camera Delivery",
                "Framework vs Tips",
                "Tool Stack Showcase",
              ]}
            />
          </Card>
          <Card title="YouTube">
            <Bullets
              items={[
                "Shorts",
                "Organic Long Form (TOF/MOF/BOF)",
                "Ad Creatives Breakdown",
                "Client Interviews",
                "Success Breakdowns",
                "Vlogs",
                "Full Course",
                "Storytelling",
              ]}
            />
          </Card>
          <Card title="Facebook">
            <Bullets
              items={[
                "One Pager",
                "Story Boost",
                "Proof Signals",
                "Carousel Ads",
              ]}
            />
          </Card>
          <Card title="LinkedIn">
            <Bullets
              items={[
                "One Pager",
                "Social Proof Leverage",
                "Credibility & Quality",
              ]}
            />
          </Card>
        </section>

        {/* Organic Long Form Map */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Organic Long Form — Funnel Map
          </h2>
          <div className="grid lg:grid-cols-3 gap-4">
            <Block
              title="Top Of Funnel (Awareness)"
              items={["Broad topics", "Vlogs", "Full Course", "Storytelling"]}
            />
            <Block
              title="Middle Of Funnel (Nurture)"
              items={["Client Interviews", "Client Success Breakdowns"]}
            />
            <Block
              title="Bottom Of Funnel (Conversion)"
              items={["Solve 1 Specific Pain Point", "Belief Shifting"]}
            />
          </div>
        </section>

        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Tip: use filters and CSV export for weekly testing meetings.
          </span>
        </footer>
      </div>
    </div>
  );
}

/* ——— Types ——— */
export type AssetRow = {
  id: string;
  channel: "Paid" | "Organic Short" | "Organic Long";
  asset: string;
  subType?: string;
  funnel: "TOF" | "MOF" | "BOF" | "Broad" | "";
  platform: string[];
  format: string;
  objective?: string;
  placement?: string[];
  hook: string;
  structure: string;
  copy: string;
  cta: string;
  length?: string;
  typeTags?: string[];
  persona?: string;
  offerType?: "Agency" | "Coaching";
  testingNotes?: string;
  analytics?: Analytics;
  status?: "Testing" | "Live" | "Iterate" | "Retire";
};

export type Analytics = {
  hookHold?: number; // % of viewers held to 3s
  ctr?: number; // link click-through rate
  cpm?: number; // cost per 1k impressions (if paid)
  cpr?: number; // cost per result (booked, lead)
  watchTime?: number; // avg seconds
  saves?: number;
  shares?: number;
  comments?: number;
  convRate?: number; // landing/convo → booked
};

/* ——— Seeds (all user-provided concepts represented) ——— */
const seedRows: AssetRow[] = [
  // PAID — Video Ads (angles)
  row({
    channel: "Paid",
    asset: "Video Ad",
    subType: "Action Driven Ad",
    funnel: "MOF",
    platform: ["Instagram", "Facebook", "TikTok"],
    format: "Vertical Video",
    placement: ["Reels", "Stories", "Feed"],
    hook: "Do THIS before posting another video",
    structure: "Action-Driven",
    copy: "Direct action + checklist CTA",
    cta: 'DM "PLAN" / Book Call',
    length: "20–30s",
    offerType: "Agency",
    typeTags: ["Action Driven"],
  }),
  row({
    channel: "Paid",
    asset: "Video Ad",
    subType: "Problem-Solution Ad",
    funnel: "TOF",
    platform: ["Instagram", "TikTok", "YouTube"],
    format: "Vertical Video",
    placement: ["Reels", "Shorts"],
    hook: "Stuck in content chaos?",
    structure: "Problem-Solution",
    copy: "Pain→Mechanism→Micro-win",
    cta: "Download DFY Template",
    length: "25–35s",
    offerType: "Coaching",
    typeTags: ["Problem Solution"],
  }),
  row({
    channel: "Paid",
    asset: "Video Ad",
    subType: "Credibility-Driven Ad",
    funnel: "MOF",
    platform: ["Facebook", "Instagram", "LinkedIn"],
    format: "Vertical Video",
    placement: ["Feed", "Reels", "Stories"],
    hook: "How we cut $/Booked to $83.56",
    structure: "Credibility-Driven",
    copy: "Numbers, proof signals, client logo mosaic",
    cta: "See full breakdown",
    length: "30–45s",
    offerType: "Agency",
    typeTags: ["Credibility Driven"],
  }),
  // PAID — Carousel
  row({
    channel: "Paid",
    asset: "Carousel Ad",
    subType: "Framework Explainer",
    funnel: "MOF",
    platform: ["Instagram", "Facebook", "LinkedIn"],
    format: "Carousel",
    placement: ["Feed"],
    hook: "The 7-step Content Engine",
    structure: "Framework",
    copy: "Slides: Hook→Mechanism→Proof→CTA",
    cta: 'Save & DM "ENGINE"',
    length: "10 cards",
    offerType: "Coaching",
  }),
  // PAID — Story Boost
  row({
    channel: "Paid",
    asset: "Story Boost",
    subType: "Daily Story Sequences",
    funnel: "MOF",
    platform: ["Instagram", "Facebook"],
    format: "Stories",
    placement: ["Stories"],
    hook: "Today’s client win → 3 slides",
    structure: "Story Sequence",
    copy: "Win→Lesson→CTA",
    cta: "Swipe up / DM keyword",
    length: "3–5 frames",
    offerType: "Agency",
  }),

  // ORGANIC SHORT — Reels/Shorts/TikTok
  row({
    channel: "Organic Short",
    asset: "Reels",
    subType: "Framework vs Tips",
    funnel: "TOF",
    platform: ["Instagram"],
    format: "Vertical Video",
    placement: ["Reels"],
    hook: "3 hooks that win in 3s",
    structure: "Framework",
    copy: "Framework vs tips",
    cta: "Follow for daily frameworks",
    length: "20–30s",
    typeTags: ["Framework"],
  }),
  row({
    channel: "Organic Short",
    asset: "Shorts",
    subType: "Hard Data vs Numbers",
    funnel: "MOF",
    platform: ["YouTube"],
    format: "Shorts",
    placement: ["Shorts"],
    hook: "$120.61 per shown qualified — here’s how",
    structure: "Numbers-First",
    copy: "Hard data + quick takeaway",
    cta: "Watch full breakdown",
    length: "30–45s",
    typeTags: ["Hard Data", "Numbers"],
  }),
  row({
    channel: "Organic Short",
    asset: "TikTok",
    subType: "Tool Stack Showcase",
    funnel: "TOF",
    platform: ["TikTok"],
    format: "Vertical Video",
    placement: ["Feed"],
    hook: "Our exact editor stack",
    structure: "Showcase",
    copy: "Tool stack + how we use it",
    cta: "Grab DFY templates",
    length: "25–35s",
    typeTags: ["Technical Value"],
  }),
  row({
    channel: "Organic Short",
    asset: "Instagram",
    subType: "DFY Templates",
    funnel: "MOF",
    platform: ["Instagram"],
    format: "Carousel",
    placement: ["Feed"],
    hook: "Plug-and-play scripts",
    structure: "Template",
    copy: "Download link in bio",
    cta: "Download",
    length: "8–10 cards",
    typeTags: ["DFY"],
  }),
  row({
    channel: "Organic Short",
    asset: "Story Sequences",
    subType: "Proof Signals",
    funnel: "MOF",
    platform: ["Instagram", "Facebook"],
    format: "Stories",
    placement: ["Stories"],
    hook: "Client DMs + screenshots",
    structure: "Proof Stack",
    copy: "Social proof leverage",
    cta: 'Reply with "READY"',
    length: "3–5 frames",
    typeTags: ["Credibility", "Quality"],
  }),

  // ORGANIC LONG — YouTube & long content
  row({
    channel: "Organic Long",
    asset: "YouTube",
    subType: "Top Of Funnel",
    funnel: "TOF",
    platform: ["YouTube"],
    format: "Long Form",
    placement: ["Feed"],
    hook: "Build a content engine from zero",
    structure: "Educational Deep Dive",
    copy: "Broad topics",
    cta: "Subscribe + free course",
    length: "8–12 min",
  }),
  row({
    channel: "Organic Long",
    asset: "YouTube",
    subType: "Middle Of Funnel",
    funnel: "MOF",
    platform: ["YouTube"],
    format: "Long Form",
    placement: ["Feed"],
    hook: "Client interview: 12.4x ROAS case",
    structure: "Interview",
    copy: "Client interviews",
    cta: "Watch the setup tutorial",
    length: "10–14 min",
  }),
  row({
    channel: "Organic Long",
    asset: "YouTube",
    subType: "Bottom Of Funnel",
    funnel: "BOF",
    platform: ["YouTube"],
    format: "Long Form",
    placement: ["Feed"],
    hook: "Fix low show-up rate step-by-step",
    structure: "Belief Shift + How-To",
    copy: "Solve 1 specific pain",
    cta: "Book a strategy call",
    length: "10–15 min",
  }),
  row({
    channel: "Organic Long",
    asset: "Full Course",
    subType: "Storytelling",
    funnel: "Broad",
    platform: ["YouTube"],
    format: "Series",
    placement: ["Playlist"],
    hook: "From chaos to system in 30 days",
    structure: "Story-driven Course",
    copy: "Chapters + templates",
    cta: "Enroll free / lead magnet",
    length: "Multi-episode",
  }),
  row({
    channel: "Organic Long",
    asset: "Vlogs",
    subType: "Behind-the-scenes",
    funnel: "TOF",
    platform: ["YouTube"],
    format: "Long Form",
    placement: ["Feed"],
    hook: "A day building 10 ads",
    structure: "Vlog",
    copy: "BTS & culture",
    cta: "Subscribe",
    length: "6–10 min",
  }),

  // Platform one-pagers
  row({
    channel: "Paid",
    asset: "One Pager",
    subType: "Facebook",
    funnel: "MOF",
    platform: ["Facebook"],
    format: "One Pager",
    placement: ["Feed"],
    hook: "Our meta method in 1 page",
    structure: "One Pager",
    copy: "Credibility + CTA",
    cta: 'DM "META"',
    length: "1 page",
  }),
  row({
    channel: "Paid",
    asset: "One Pager",
    subType: "LinkedIn",
    funnel: "MOF",
    platform: ["LinkedIn"],
    format: "One Pager",
    placement: ["Feed"],
    hook: "Authority in 1 page",
    structure: "One Pager",
    copy: "Wins + CTA",
    cta: 'DM "AUTH"',
    length: "1 page",
  }),
  row({
    channel: "Paid",
    asset: "One Pager",
    subType: "Instagram",
    funnel: "MOF",
    platform: ["Instagram"],
    format: "One Pager",
    placement: ["Feed"],
    hook: "IG proof stack",
    structure: "One Pager",
    copy: "Screens + testimonials",
    cta: 'DM "IG"',
    length: "1 page",
  }),
];

function row(partial: Partial<AssetRow>): AssetRow {
  return {
    id: uid(),
    channel: "Paid",
    asset: "",
    subType: "",
    funnel: "",
    platform: [],
    format: "",
    placement: [],
    hook: "",
    structure: "",
    copy: "",
    cta: "",
    length: "",
    typeTags: [],
    analytics: {},
    status: "Testing",
    ...partial,
  } as AssetRow;
}

/* ——— Builders ——— */
const VIDEO_ONEPAGER_TEMPLATE: OnePagerTemplate = {
  sections: [
    {
      label: "Hook (0–3s)",
      placeholder: "Pattern interrupt + desired outcome",
    },
    { label: "Problem", placeholder: "Pain in their words" },
    { label: "Mechanism", placeholder: "How your system uniquely solves it" },
    {
      label: "Proof",
      placeholder: "Numbers, screenshots, names (with permission)",
    },
    { label: "Offer", placeholder: "DFY / DWY what’s included" },
    { label: "CTA", placeholder: "DM keyword / Book link" },
  ],
};
const CAROUSEL_TEMPLATE: OnePagerTemplate = {
  sections: [
    { label: "Slide 1 — Big Promise", placeholder: "Outcome in bold" },
    {
      label: "Slides 2–3 — Problem → Cost",
      placeholder: "What it costs them now",
    },
    {
      label: "Slides 4–6 — Mechanism",
      placeholder: "Your framework in 3 steps",
    },
    { label: "Slides 7–8 — Proof", placeholder: "Before/after, metrics" },
    { label: "Slide 9 — Offer", placeholder: "What they get" },
    { label: "Slide 10 — CTA", placeholder: "How to act now" },
  ],
};

function Builder({ template }: { template: OnePagerTemplate }) {
  const [data, setData] = useState(
    template.sections.map((s) => ({ ...s, value: "" }))
  );
  return (
    <div className="rounded-xl border border-slate-200 p-3 bg-white">
      <div className="space-y-2">
        {data.map((s, i) => (
          <label key={i} className="block">
            <span className="text-xs text-slate-600">{s.label}</span>
            <textarea
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              rows={3}
              value={s.value}
              onChange={(e) => {
                const v = e.target.value;
                setData((prev) =>
                  prev.map((x, idx) => (idx === i ? { ...x, value: v } : x))
                );
              }}
              placeholder={s.placeholder}
            />
          </label>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button
          className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
          onClick={() => copy(JSON.stringify(data, null, 2))}
        >
          Copy JSON
        </button>
        <button
          className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm"
          onClick={() =>
            download("onepager.json", JSON.stringify(data, null, 2))
          }
        >
          Download
        </button>
      </div>
    </div>
  );
}

type OnePagerTemplate = { sections: { label: string; placeholder?: string }[] };

/* ——— Analytics Editor ——— */
function AnalyticsEditor({
  data = {},
  onChange,
}: {
  data?: Analytics;
  onChange: (a: Analytics) => void;
}) {
  const d = { ...data };
  return (
    <div className="grid grid-cols-2 gap-1 min-w-[200px]">
      <MiniField
        label="Hook Hold %"
        value={numBlank(d.hookHold)}
        onChange={(v) => onChange({ ...d, hookHold: num(v) })}
        suffix="%"
      />
      <MiniField
        label="CTR %"
        value={numBlank(d.ctr)}
        onChange={(v) => onChange({ ...d, ctr: num(v) })}
        suffix="%"
      />
      <MiniField
        label="CPM"
        value={numBlank(d.cpm)}
        onChange={(v) => onChange({ ...d, cpm: num(v) })}
        prefix="$"
      />
      <MiniField
        label="CP Result"
        value={numBlank(d.cpr)}
        onChange={(v) => onChange({ ...d, cpr: num(v) })}
        prefix="$"
      />
      <MiniField
        label="Watch (s)"
        value={numBlank(d.watchTime)}
        onChange={(v) => onChange({ ...d, watchTime: num(v) })}
      />
      <MiniField
        label="Saves"
        value={numBlank(d.saves)}
        onChange={(v) => onChange({ ...d, saves: num(v) })}
      />
      <MiniField
        label="Shares"
        value={numBlank(d.shares)}
        onChange={(v) => onChange({ ...d, shares: num(v) })}
      />
      <MiniField
        label="Comments"
        value={numBlank(d.comments)}
        onChange={(v) => onChange({ ...d, comments: num(v) })}
      />
      <MiniField
        label="Conv %"
        value={numBlank(d.convRate)}
        onChange={(v) => onChange({ ...d, convRate: num(v) })}
        suffix="%"
      />
    </div>
  );
}

function MiniField({ label, value, onChange, prefix, suffix }: any) {
  return (
    <label className="block">
      <span className="text-[10px] text-slate-500">{label}</span>
      <div className="flex items-center gap-1 border border-slate-200 rounded px-1 py-1 mt-0.5">
        {prefix && <span className="text-slate-400 text-xs">{prefix}</span>}
        <input
          className="w-full text-xs outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {suffix && <span className="text-slate-400 text-xs">{suffix}</span>}
      </div>
    </label>
  );
}

/* ——— UI Primitives ——— */
function Tag({ children, color = "slate" }: any) {
  const map: any = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}
    >
      {children}
    </span>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Block({ title, items = [] }: any) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <h4 className="font-medium text-slate-800">{title}</h4>
      <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
        {items.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Bullets({ items = [] }: any) {
  return (
    <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
      {items.map((b: string, i: number) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Th({ children }: any) {
  return (
    <th className="text-left px-3 py-2 text-slate-600 font-semibold text-xs uppercase tracking-wide">
      {children}
    </th>
  );
}
function Td({ children }: any) {
  return <td className="px-3 py-2 text-slate-800 align-top">{children}</td>;
}

function Field({ label, value, onChange, placeholder }: any) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function EditText({ value, onChange, placeholder, area = false }: any) {
  if (area) {
    return (
      <textarea
        className="w-[220px] h-[80px] rounded-lg border border-slate-200 px-2 py-1 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      className="w-[220px] rounded-lg border border-slate-200 px-2 py-1 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function MultiToggle({ label, options, value, onChange }: any) {
  const toggle = (opt: string) => {
    const next = new Set(value as Set<string>);
    next.has(opt) ? next.delete(opt) : next.add(opt);
    onChange(next);
  };
  return (
    <div>
      <div className="text-xs text-slate-600 mb-1">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`px-2 py-1 rounded border text-xs ${
              value.has(opt)
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white border-slate-200 text-slate-700"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ——— Utils ——— */
function uid() {
  return Math.random().toString(36).slice(2, 9);
}
function joinTags(arr?: string[]) {
  return (arr || []).join(", ");
}
function splitCSV(v: string) {
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
function copy(text: string) {
  if ((navigator as any)?.clipboard?.writeText) {
    (navigator as any).clipboard.writeText(text);
    alert("Copied to clipboard");
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  alert("Copied to clipboard");
}
function toCSV(rows: AssetRow[]) {
  const cols = [
    "id",
    "channel",
    "asset",
    "subType",
    "funnel",
    "platform",
    "placement",
    "format",
    "hook",
    "structure",
    "copy",
    "cta",
    "length",
    "offerType",
    "status",
  ];
  const esc = (s: any) => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const header = cols.join(",");
  const lines = rows.map((r) =>
    cols
      .map((c) => {
        const v = (r as any)[c];
        if (Array.isArray(v)) return esc(v.join("|"));
        return esc(v);
      })
      .join(",")
  );
  return [header, ...lines].join("\n");
}
function download(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
function num(v: any) {
  const n = parseFloat(String(v).replace(/[^0-9.-]/g, ""));
  return isFinite(n) ? n : 0;
}
function numBlank(v: any) {
  return v == null ? "" : String(v);
}

/* ——— Tiny checklist component used in builders ——— */
function Checklist({ items = [] as string[] }) {
  return (
    <ul className="text-sm text-slate-800 space-y-1">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
