import { useMemo, useState } from "react";

export default function TargetMarketTemplate() {
  const [model, setModel] = useState(() => ({
    projectName: "Organic Media Systems — Persona",
    businessType:
      "Info-product / ecommerce business leveraging personal brand via organic media production systems",
    avatarTitle: "Ideal Customer Avatar",
    painPoints: [
      "Struggle to leverage content production systems on their own",
    ],
    demographics: "n/a",
    psychometrics: [
      "Business owner / entrepreneur with scaling & growth mindset",
      "Online coaches",
      "Digital course creators",
      "Shopify store owners",
      "YouTube channel creators",
      "Skool community owners",
    ],
    nicheTags: [
      "Advanced",
      "Scalable systems needed",
      "High-spend lookalike audience from CRM",
    ],
    experiencePlatforms: [
      "Teachable",
      "Skool",
      "Kajabi",
      "ClickFunnels",
      "Shopify",
      "Alex Hormozi",
      "Iman Gadzhi",
      "Russell Brunson",
      "Gary Vee",
      "Grant Cardone",
    ],
    interests: [],
    jobTitles: [
      "Founder",
      "CEO",
      "Coach",
      "Consultant",
      "Online Business Owner",
    ],
    behavioral: [
      "Action Takers",
      "Systems Seekers",
      "Authority Builders",
      "DWY Buyers",
      "Leverage-Orientated Entrepreneurs",
      "Perfectionists Turned Burnt Out",
    ],
    buyingBehavior: ["DFY Active Shoppers", "DWY Active Shoppers"],
  }));

  // —— helpers to update fields ——
  const setField = (k, v) => setModel((m) => ({ ...m, [k]: v }));

  // —— derived outputs ——
  const clarityScore = useMemo(() => {
    let score = 0;
    if (model.painPoints.length) score += 20;
    if (model.psychometrics.length >= 3) score += 20;
    if (model.nicheTags.length >= 2) score += 15;
    if (model.experiencePlatforms.length >= 3) score += 15;
    if (model.jobTitles.length >= 3) score += 10;
    if (model.behavioral.length >= 3) score += 10;
    if (model.buyingBehavior.length) score += 10;
    return score; // out of 100
  }, [model]);

  const metaInterests = useMemo(
    () =>
      uniq([
        ...model.experiencePlatforms,
        ...model.psychometrics,
        ...model.interests,
      ]).join(", "),
    [model]
  );

  const linkedinTitles = useMemo(
    () => uniq(model.jobTitles).join(", "),
    [model]
  );

  const googleKeywords = useMemo(() => {
    const base = [
      "organic media system",
      "content production SOP",
      "personal brand content",
      "short-form video system",
      "YouTube content system",
      "ecommerce content ads",
      "info-product funnel content",
    ];
    return uniq([...base, ...model.painPoints]).join(", ");
  }, [model.painPoints]);

  const audienceStatement = useMemo(
    () =>
      `We serve ${model.businessType}. They are ${
        model.psychometrics[0] || "growth-minded operators"
      } who need ${model.painPoints[0] || "repeatable content systems"}.`,
    [model.businessType, model.psychometrics, model.painPoints]
  );

  const hashtags = useMemo(
    () =>
      uniq([
        "#content",
        "#system",
        "#organic",
        "#personalbrand",
        "#ecommerce",
        "#infoproduct",
        "#shortform",
        "#automation",
      ]).join(" "),
    []
  );

  const targetingRecipes = useMemo(() => {
    return {
      meta: `Interests: ${metaInterests}\nBehaviors: ${model.behavioral.join(
        ", "
      )}\nJob Titles (stack for testing): ${model.jobTitles.join(", ")}`,
      linkedin: `Titles: ${linkedinTitles}\nGroups/Interests: ${metaInterests}\nCompany attributes: Creator-led, DTC, Education info-product`,
      youtube: `Keywords: ${googleKeywords}\nPlacements: ${model.experiencePlatforms.join(
        ", "
      )}`,
      crm: `Seed LAL: High LTV customers, ${
        model.nicheTags.includes("High-spend lookalike audience from CRM")
          ? "Qualified high-spend lookalike enabled"
          : "Upload CSV & build 1–5% lookalikes"
      }`,
    };
  }, [
    metaInterests,
    linkedinTitles,
    googleKeywords,
    model.behavioral,
    model.jobTitles,
    model.experiencePlatforms,
    model.nicheTags,
  ]);

  const messagingAngles = useMemo(() => {
    const pp = model.painPoints[0] || "manual content grind";
    return [
      `System over hustle: replace ${pp} with a 90‑minute weekly recording ritual`,
      `Authority engine: turn 1 long‑form into 20 shorts + emails in ≤ 72h`,
      `DWY support: expert editor + SOPs so you never stall`,
      `Proof‑first: show retention lifts & booked calls from content`,
    ];
  }, [model.painPoints]);

  const contentPillars = useMemo(
    () => [
      "Mechanism (how the system works)",
      "Proof (before/after, case studies)",
      "Founder POV (beliefs, objections)",
      "Behind‑the‑scenes (ops & tools)",
      "Micro‑wins (templates, checklists)",
    ],
    []
  );

  // —— export ——
  const jsonBlob = useMemo(() => JSON.stringify(model, null, 2), [model]);
  const outputsBlob = useMemo(
    () =>
      JSON.stringify(
        {
          audienceStatement,
          metaInterests,
          linkedinTitles,
          googleKeywords,
          targetingRecipes,
          messagingAngles,
          contentPillars,
          hashtags,
        },
        null,
        2
      ),
    [
      audienceStatement,
      metaInterests,
      linkedinTitles,
      googleKeywords,
      targetingRecipes,
      messagingAngles,
      contentPillars,
      hashtags,
    ]
  );

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Target Market Identification — Template
          </h1>
          <p className="text-slate-600 mt-2">
            A reusable, editable blueprint for defining your market, avatar, and
            ad platform targeting strings. Built for MacBook Air and printing.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Tag color="emerald">Editable</Tag>
            <Tag color="indigo">Exportable</Tag>
            <Tag color="amber">Cross‑platform</Tag>
          </div>
        </header>

        {/* Overview */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Project / Persona Name"
              value={model.projectName}
              onChange={(v) => setField("projectName", v)}
            />
            <Field
              label="Business Type"
              value={model.businessType}
              onChange={(v) => setField("businessType", v)}
            />
          </div>
        </section>

        {/* Avatar & Pain */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Avatar">
            <Field
              label="Title"
              value={model.avatarTitle}
              onChange={(v) => setField("avatarTitle", v)}
            />
            <TextArea
              label="Demographics"
              value={model.demographics}
              onChange={(v) => setField("demographics", v)}
              rows={3}
            />
            <Block title="Psychometrics" items={model.psychometrics} />
            <ChipInput
              label="Add psychometric"
              onAdd={(v) =>
                v &&
                setField("psychometrics", uniq([...model.psychometrics, v]))
              }
            />
          </Card>
          <Card title="Pain Points">
            <Block title="Current" items={model.painPoints} />
            <ChipInput
              label="Add pain point"
              onAdd={(v) =>
                v && setField("painPoints", uniq([...model.painPoints, v]))
              }
            />
          </Card>
          <Card title="Niche & Experience Tags">
            <Block title="Niche Tags" items={model.nicheTags} />
            <ChipInput
              label="Add niche tag"
              onAdd={(v) =>
                v && setField("nicheTags", uniq([...model.nicheTags, v]))
              }
            />
            <div className="mt-3" />
            <Block
              title="Experience / Platforms"
              items={model.experiencePlatforms}
            />
            <ChipInput
              label="Add platform/brand"
              onAdd={(v) =>
                v &&
                setField(
                  "experiencePlatforms",
                  uniq([...model.experiencePlatforms, v])
                )
              }
            />
          </Card>
        </section>

        {/* Interests, Titles, Behavior */}
        <section className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card title="Interests">
            <Block title="Current" items={model.interests} />
            <ChipInput
              label="Add interest"
              onAdd={(v) =>
                v && setField("interests", uniq([...model.interests, v]))
              }
            />
          </Card>
          <Card title="Job Titles">
            <Block title="Current" items={model.jobTitles} />
            <ChipInput
              label="Add job title"
              onAdd={(v) =>
                v && setField("jobTitles", uniq([...model.jobTitles, v]))
              }
            />
          </Card>
          <Card title="Behavioural & Buying">
            <Block title="Behavioural" items={model.behavioral} />
            <ChipInput
              label="Add behavioural tag"
              onAdd={(v) =>
                v && setField("behavioral", uniq([...model.behavioral, v]))
              }
            />
            <div className="mt-3" />
            <Block title="Buying Behaviour" items={model.buyingBehavior} />
            <ChipInput
              label="Add buying behaviour"
              onAdd={(v) =>
                v &&
                setField("buyingBehavior", uniq([...model.buyingBehavior, v]))
              }
            />
          </Card>
        </section>

        {/* Outputs */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Targeting Recipes (copy‑paste)">
            <KeyValue label="Audience Statement" value={audienceStatement} />
            <KeyValue label="Meta Interests" value={metaInterests} />
            <KeyValue label="LinkedIn Titles" value={linkedinTitles} />
            <KeyValue label="YouTube/Google Keywords" value={googleKeywords} />
            <KeyValue label="Hashtags" value={hashtags} />
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <TextArea
                label="Meta Recipe"
                value={targetingRecipes.meta}
                readOnly
                rows={6}
              />
              <TextArea
                label="LinkedIn Recipe"
                value={targetingRecipes.linkedin}
                readOnly
                rows={6}
              />
              <TextArea
                label="YouTube Recipe"
                value={targetingRecipes.youtube}
                readOnly
                rows={6}
              />
              <TextArea
                label="CRM Recipe"
                value={targetingRecipes.crm}
                readOnly
                rows={6}
              />
            </div>
          </Card>
          <Card title="Messaging & Content">
            <Block title="Messaging Angles" items={messagingAngles} />
            <Block title="Content Pillars" items={contentPillars} />
            <div className="mt-3 rounded-xl border border-slate-200 p-3 bg-white">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Market Clarity Score
              </p>
              <div className="flex items-center gap-3 mt-1">
                <div className="text-3xl font-extrabold">{clarityScore}</div>
                <div className="text-sm text-slate-600">
                  / 100 — {clarityGrade(clarityScore)}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Export / Import */}
        <section className="mt-6 grid lg:grid-cols-2 gap-5">
          <Card title="Export JSON">
            <TextArea label="Model JSON" value={jsonBlob} readOnly rows={12} />
            <div className="mt-2 flex items-center gap-2">
              <button
                className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
                onClick={() => copy(jsonBlob)}
              >
                Copy
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm"
                onClick={() => download("target-market.json", jsonBlob)}
              >
                Download
              </button>
            </div>
          </Card>
          <Card title="Export Outputs">
            <TextArea
              label="Outputs JSON"
              value={outputsBlob}
              readOnly
              rows={12}
            />
            <div className="mt-2 flex items-center gap-2">
              <button
                className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
                onClick={() => copy(outputsBlob)}
              >
                Copy
              </button>
            </div>
          </Card>
        </section>

        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 shadow"
          >
            Print / Save as PDF
          </button>
          <span className="text-xs text-slate-500">
            Optimized for 1280–1440px (MacBook Air). A4 landscape for printing.
          </span>
        </footer>
      </div>
    </div>
  );
}

/* ——— UI PRIMITIVES ——— */
function Tag({ children, color = "slate" }) {
  const map = {
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

function Card({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange, rows = 5, readOnly = false }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-600">{label}</span>
      <textarea
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        rows={rows}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        readOnly={readOnly}
      />
    </label>
  );
}

function Block({ title, items = [] }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <h4 className="font-medium text-slate-800">{title}</h4>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-slate-500">No items yet.</p>
      ) : (
        <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
          {items.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChipInput({ label, onAdd }) {
  const [val, setVal] = useState("");
  return (
    <div className="mt-2">
      <label className="text-xs text-slate-600">{label}</label>
      <div className="mt-1 flex gap-1">
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && val.trim()) {
              onAdd(val.trim());
              setVal("");
            }
          }}
          placeholder="Type and press Enter"
        />
        <button
          className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
          onClick={() => {
            if (val.trim()) {
              onAdd(val.trim());
              setVal("");
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function KeyValue({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3 bg-white mt-2">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-sm text-slate-800 mt-0.5 break-words">{value}</p>
      <div className="mt-2">
        <button
          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
          onClick={() => copy(value)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

/* ——— Utils ——— */
function uniq(arr) {
  return Array.from(new Set(arr.filter(Boolean).map((s) => String(s).trim())));
}
function clarityGrade(score) {
  if (score >= 90) return "Crystal Clear";
  if (score >= 75) return "Strong";
  if (score >= 60) return "Workable";
  return "Needs Focus";
}
function copy(text) {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    alert("Copied to clipboard");
  }
}
function download(filename, text) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
