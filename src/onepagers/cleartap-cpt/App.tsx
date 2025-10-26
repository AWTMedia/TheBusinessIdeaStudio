import React, { useMemo, useState } from "react";

/**
 * ClearTap CPT — Premium Whole-Home Filtration (Single-file React + Tailwind)
 * Primary: Whole-Home (point-of-entry) engineered installs (Signature / Premier / Essential)
 * Optional: Room/tap “polishers” (Under-Sink Dual/Single, Tap-Mount) + extras
 *
 * How to use:
 * 1) Drop this file in a React + Tailwind template as src/App.tsx (Vite/CRA/CodeSandbox).
 * 2) Ensure Tailwind is set up (@tailwind base; @tailwind components; @tailwind utilities; in index.css).
 * 3) Replace WHATSAPP_NUMBER with your business number (no + in wa.me path).
 */

// >>> Replace with your WhatsApp number (no +, spaces or dashes) e.g. "27821234567"
const WHATSAPP_NUMBER = "27821234567"; // TODO: set your number

// ---- Types
type RoomKey =
  | "Kitchen"
  | "Main Bathroom"
  | "Ensuite"
  | "Guest Bathroom"
  | "Bar/Scullery";
type Frequency = "Quarterly" | "Semi-Annual" | "Annual";

// ---- Whole-Home (Primary Offers: Signature / Premier / Essential)
const WHOLE_HOUSE = [
  {
    id: "signature",
    name: "Signature — POE + UV + Smart Leak Shutoff",
    tag: "Flagship: measured, documented, and protected",
    fromPrice: 18999,
    installHours: "4–6 hrs",
    flow: "Matched to UV rating; high-flow housings",
    cartridgeLife: "Sediment 3–6 mo • Carbon 9–12 mo • UV lamp ~12 mo",
    includes: [
      "Bypass manifold + isolation valves",
      "Dual IN/OUT pressure gauges + sample taps",
      "20″×4.5″ high-flow housings (sediment + CTO)",
      "UV steriliser & flow matching",
      "Smart leak sensor + auto shutoff",
      "QR code: report, SKUs, service dates",
    ],
  },
  {
    id: "premier",
    name: "Premier — POE + Scale Inhibitor",
    tag: "High-flow comfort with scale control",
    fromPrice: 12999,
    installHours: "3–5 hrs",
    flow: "High-flow 20–30 L/min* (housing dependent)",
    cartridgeLife: "Sediment 3–6 mo • Carbon 9–12 mo • Inhibitor 6–12 mo",
    includes: [
      "Bypass manifold + isolation valves",
      "Dual pressure gauges + sample tap",
      "20″×4.5″ housings (sediment + CTO + scale inhibitor)",
      "QR code: report, SKUs, service dates",
    ],
  },
  {
    id: "essential",
    name: "Essential — POE Dual Stage",
    tag: "Engineered baseline for municipal water",
    fromPrice: 8999,
    installHours: "2–4 hrs",
    flow: "High-flow 20–30 L/min* (housing dependent)",
    cartridgeLife: "Sediment 3–6 mo • Carbon 9–12 mo",
    includes: [
      "Bypass manifold + isolation valves",
      "Single gauge set (ΔP check) + sample tap",
      "20″×4.5″ housings (sediment + CTO)",
      "QR code: report, SKUs, service dates",
    ],
  },
] as const;
type HouseId = (typeof WHOLE_HOUSE)[number]["id"];

// Annual service plan pricing by tier (optional toggle)
const SERVICE_PLAN_PRICE: Record<HouseId, number> = {
  signature: 2499,
  premier: 1799,
  essential: 1299,
};

// ---- Room/Tap Add-ons (Downsells / Polishers)
const PRODUCTS = [
  {
    id: "under-dual",
    name: "Under-Sink Dual Stage — Barista Polisher",
    tag: "Maximum taste • cleaner cups",
    fromPrice: 2199,
    installMins: "60–75 min",
    flow: "High flow via mini-tap/3-way mixer",
    cartridgeLife: "~6 months (both stages)",
    subscription: { priceMonthly: 169, freq: "Semi-Annual" as Frequency },
    includes: [
      "Sediment prefilter + CTO carbon block",
      "Better particulate control (clearer tea/kettle)",
      "Protects appliances from fine debris",
    ],
    bestFor: ["Kitchen", "Main Bathroom", "Ensuite"],
  },
  {
    id: "under-single",
    name: "Under-Sink Single Stage",
    tag: "Neat install • great everyday taste",
    fromPrice: 1499,
    installMins: "45–60 min",
    flow: "High flow via mini-tap/3-way mixer",
    cartridgeLife: "~6 months",
    subscription: { priceMonthly: 109, freq: "Semi-Annual" as Frequency },
    includes: [
      "10″ housing + carbon block",
      "Dedicated faucet or 3-way mixer option",
      "Taste/odour + fine sediment",
    ],
    bestFor: ["Kitchen", "Bar/Scullery"],
  },
  {
    id: "tap-mount",
    name: "Tap-Mount Quick Filter",
    tag: "Non-invasive • renter-friendly",
    fromPrice: 749,
    installMins: "15–25 min",
    flow: "Up to 6–7 L/min via diverter",
    cartridgeLife: "3–4 months",
    subscription: { priceMonthly: 89, freq: "Quarterly" as Frequency },
    includes: [
      "Screw-on diverter + compact carbon block",
      "No drilling or permanent changes",
      "Chlorine taste/odour reduction",
    ],
    bestFor: ["Kitchen", "Guest Bathroom", "Bar/Scullery"],
  },
  {
    id: "pressure-kit",
    name: "Pressure & Flow Optimiser",
    tag: "Improve feel at the tap",
    fromPrice: 499,
    installMins: "15–30 min",
    flow: "Optimised aerator + supply checks",
    cartridgeLife: "N/A",
    subscription: null as null | { priceMonthly: number; freq: Frequency },
    includes: [
      "High-efficiency aerator swap",
      "Isolation valve & line check (where accessible)",
      "Scale/debris clean-out at spout",
    ],
    bestFor: ["Main Bathroom", "Ensuite", "Guest Bathroom", "Kitchen"],
  },
] as const;
type ProductId = (typeof PRODUCTS)[number]["id"];

// ---- Extras / Instrumentation
const UPSELLS = [
  { id: "gauge-set", name: "Extra Gauge Set (additional zones)", price: 499 },
  { id: "spare-house", name: "Spare Whole-Home Cartridge Set", price: 799 },
  { id: "leak-sensors", name: "Extra Leak Sensors (pair)", price: 599 },
  {
    id: "move-service",
    name: "Move-With-You Reinstall (within CPT)",
    price: 299,
  },
] as const;

// ---- Helpers
function currency(n: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(n);
}
function clsx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

// ---- UI primitives
const Section = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={clsx("py-16", className)}>
    <div className="mx-auto max-w-7xl px-6">{children}</div>
  </section>
);
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={clsx(
      "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
      className
    )}
  >
    {children}
  </div>
);
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
    {children}
  </span>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
    {children}
  </span>
);
const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
      variant === "primary" && "bg-emerald-600 text-white hover:bg-emerald-700",
      variant === "ghost" &&
        "border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50",
      className
    )}
  >
    {children}
  </button>
);

// ---- Main App
export default function App() {
  // Whole-home selection (default: Signature)
  const [housePlan, setHousePlan] = useState<HouseId>("signature");

  // Optional Annual Service Plan toggle
  const [servicePlan, setServicePlan] = useState<boolean>(true);

  // Room/tap add-ons default to None
  const initialRooms: Record<
    RoomKey,
    { productId: ProductId | "None"; qty: number }
  > = {
    Kitchen: { productId: "None", qty: 0 },
    "Main Bathroom": { productId: "None", qty: 0 },
    Ensuite: { productId: "None", qty: 0 },
    "Guest Bathroom": { productId: "None", qty: 0 },
    "Bar/Scullery": { productId: "None", qty: 0 },
  };

  const [rooms, setRooms] = useState(initialRooms);
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [postcode, setPostcode] = useState(8001);
  const [name, setName] = useState("");

  const totals = useMemo(() => {
    let items: { label: string; price: number }[] = [];

    // Whole-home always included (qty 1)
    const house = WHOLE_HOUSE.find((h) => h.id === housePlan)!;
    items.push({ label: `Whole-Home — ${house.name}`, price: house.fromPrice });

    // Annual service plan (optional)
    if (servicePlan) {
      const sp = SERVICE_PLAN_PRICE[housePlan];
      items.push({
        label: `Annual Service Plan (${house.name})`,
        price: sp,
      });
    }

    // Room/tap add-ons
    (Object.keys(rooms) as RoomKey[]).forEach((rk) => {
      const { productId, qty } = rooms[rk];
      if (productId === "None" || qty <= 0) return;
      const product = PRODUCTS.find((p) => p.id === productId)!;
      items.push({
        label: `${rk} — ${product.name} × ${qty}`,
        price: product.fromPrice * qty,
      });
    });

    // Extras
    selectedUpsells.forEach((u) => {
      const up = UPSELLS.find((x) => x.id === u)!;
      items.push({ label: up.name, price: up.price });
    });

    const subtotal = items.reduce((a, b) => a + b.price, 0);
    const callout = withinFreeRadius(postcode) ? 0 : estimateTravel(postcode);
    const total = subtotal + callout;

    return {
      items,
      subtotal,
      callout,
      total,
      houseName: house.name,
      housePrice: house.fromPrice,
    };
  }, [rooms, selectedUpsells, postcode, housePlan, servicePlan]);

  function withinFreeRadius(post: number) {
    const free = [8000, 8001, 8005, 8006, 8008, 7700, 7708, 7701, 7925];
    return free.includes(post);
  }
  function estimateTravel(post: number) {
    const buckets: Record<string, number[]> = {
      near: [8000, 8001, 8005, 8006, 8008, 7700, 7701, 7708, 7925],
      south: [7945, 7975, 7979, 7947, 7806],
      north: [7441, 7442, 7550, 7560],
      east: [7130, 7140, 7600, 7601],
    };
    if (buckets.near.includes(post)) return 0;
    if (buckets.south.includes(post)) return 150;
    if (buckets.north.includes(post)) return 150;
    if (buckets.east.includes(post)) return 200;
    return 250;
  }
  function updateRoom(
    rk: RoomKey,
    patch: Partial<{ productId: ProductId | "None"; qty: number }>
  ) {
    setRooms((prev) => ({ ...prev, [rk]: { ...prev[rk], ...patch } }));
  }
  function toggleUpsell(id: string) {
    setSelectedUpsells((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function makeWhatsAppLink() {
    const lines: string[] = [];
    lines.push(`Hi, I’d like a ClearTap Whole-Home install.`);
    if (name) lines.push(`Name: ${name}`);
    lines.push(`Postcode/Suburb code: ${postcode}`);
    lines.push("");

    const house = WHOLE_HOUSE.find((h) => h.id === housePlan)!;
    lines.push(`Whole-Home Plan: ${house.name} (${currency(house.fromPrice)})`);
    if (servicePlan) {
      lines.push(
        `• Add Annual Service Plan (${currency(SERVICE_PLAN_PRICE[housePlan])})`
      );
    }

    const roomLines: string[] = [];
    (Object.keys(rooms) as RoomKey[]).forEach((rk) => {
      const { productId, qty } = rooms[rk];
      if (productId === "None" || qty <= 0) return;
      const p = PRODUCTS.find((x) => x.id === productId)!;
      roomLines.push(
        `• ${rk}: ${p.name} × ${qty} (${currency(p.fromPrice)} each)`
      );
    });
    if (roomLines.length) {
      lines.push("");
      lines.push("Add-ons (rooms):");
      lines.push(...roomLines);
    }

    if (selectedUpsells.length) {
      lines.push("");
      lines.push("Extras:");
      selectedUpsells.forEach((u) => {
        const up = UPSELLS.find((x) => x.id === u)!;
        lines.push(`• ${up.name} (${currency(up.price)})`);
      });
    }

    lines.push("");
    lines.push(
      `Estimated total today: ${currency(totals.total)} (incl. travel est.)`
    );
    lines.push("Please share the next available audit/installation slots.");
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-teal-100/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
              💧
            </div>
            <div className="text-sm font-semibold">ClearTap CPT</div>
            <div className="hidden items-center gap-2 pl-4 text-xs text-emerald-700 md:flex">
              <Badge>Whole-Home • Instrumented • Documented</Badge>
            </div>
          </div>
          <nav className="hidden gap-3 md:flex">
            <a
              href="#wholehome"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-700"
            >
              Plans
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-700"
            >
              Why Us
            </a>
            <a
              href="#addons"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-700"
            >
              Add-ons
            </a>
            <a
              href="#planner"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-700"
            >
              Planner
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-700"
            >
              FAQ
            </a>
          </nav>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="hidden md:inline-flex"
              onClick={() => window.location.assign("#planner")}
            >
              Get Quote
            </Button>
            <Button onClick={() => window.open(makeWhatsAppLink(), "_blank")}>
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section className="pb-8 pt-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Cape Town • Whole-Home mains filtration • PRB-supervised
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Signature whole-home filtration —{" "}
              <span className="text-emerald-600">
                engineered, measured, guaranteed
              </span>
              .
            </h1>
            <p className="mt-4 max-w-prose text-zinc-700">
              We install a mains-connected filtration system at your home’s
              entry point so every outlet benefits. Instrumented manifolds,
              on-site water profiling, a digital handover report, and a 30-day
              taste & flow tune-up set a new standard.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pill>Bypass + dual gauges + sample taps</Pill>
              <Pill>Digital report & QR service</Pill>
              <Pill>30-day tune-up</Pill>
            </div>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => window.location.assign("#wholehome")}>
                See plans
              </Button>
              <Button
                variant="ghost"
                onClick={() => window.location.assign("#why")}
              >
                Why we’re different
              </Button>
            </div>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-100 blur-2xl" />
            <h3 className="text-lg font-semibold">What “premium” means here</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>
                Instrumented installs: bypass, gauges, sample taps, neat
                bracketry.
              </li>
              <li>
                On-site tests: free chlorine (DPD1), turbidity, pH, baseline
                flow & pressure.
              </li>
              <li>
                QuietFlow™ routing for low ΔP; tidy labeling and a spotless
                cleanup.
              </li>
            </ul>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 p-4 text-center">
                <div className="text-3xl">📈</div>
                <div className="mt-2 text-sm font-semibold">Measured</div>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4 text-center">
                <div className="text-3xl">🧰</div>
                <div className="mt-2 text-sm font-semibold">Engineered</div>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4 text-center">
                <div className="text-3xl">✅</div>
                <div className="mt-2 text-sm font-semibold">Guaranteed</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Whole-Home Plans */}
      <Section id="wholehome" className="pt-0">
        <h2 className="text-2xl font-bold">Whole-Home plans</h2>
        <p className="mt-2 max-w-prose text-sm text-zinc-700">
          Designed for municipal potable water. For boreholes/unknown sources
          we’ll recommend testing and add UV/RO where appropriate.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHOLE_HOUSE.map((h) => {
            const active = housePlan === h.id;
            return (
              <Card
                key={h.id}
                className={clsx(
                  "transition",
                  active
                    ? "ring-2 ring-emerald-400"
                    : "hover:border-emerald-200"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{h.name}</h3>
                    <p className="mt-1 text-sm text-emerald-700">{h.tag}</p>
                  </div>
                  <Badge>from {currency(h.fromPrice)}</Badge>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {h.includes.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-zinc-50 p-2">
                    Install: {h.installHours}
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-2">
                    Flow: {h.flow}
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-2">
                    Cartridge: {h.cartridgeLife}
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-2">
                    Service: Annual plan available
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant={active ? "primary" : "ghost"}
                    onClick={() => setHousePlan(h.id)}
                    className="w-full"
                  >
                    {active ? "Selected" : "Select this plan"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Why Us — Differentiators */}
      <Section id="why" className="pt-0">
        <h2 className="text-2xl font-bold">Why choose ClearTap</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <div className="text-lg font-semibold">Instrumented Installs</div>
            <p className="mt-2 text-sm text-zinc-700">
              Bypass + dual gauges + sample taps on every system. Visible
              performance, simple service.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold">
              On-Site Profiling & Report
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              We record chlorine, turbidity, pH, and flow/pressure before &
              after. You get a digital handover report and a QR code at the
              unit.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold">30-Day Tune-Up</div>
            <p className="mt-2 text-sm text-zinc-700">
              If taste or flow isn’t perfect, we tweak micron ratings, aerators,
              or routing—free within 30 days.
            </p>
          </Card>
        </div>
      </Section>

      {/* Add-ons (Rooms) */}
      <Section id="addons" className="pt-0">
        <h2 className="text-2xl font-bold">Room/tap add-ons (optional)</h2>
        <p className="mt-2 max-w-prose text-sm text-zinc-700">
          Whole-home covers every outlet. Add kitchen “polishers” for premium
          drinking taste, or improve feel with our pressure & flow kit.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Card key={p.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-emerald-700">{p.tag}</p>
                </div>
                <Badge>from {currency(p.fromPrice)}</Badge>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                {p.includes.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-zinc-50 p-2">
                  Install: {p.installMins}
                </div>
                <div className="rounded-lg bg-zinc-50 p-2">Flow: {p.flow}</div>
                <div className="rounded-lg bg-zinc-50 p-2">
                  Cartridge: {p.cartridgeLife}
                </div>
                <div className="rounded-lg bg-zinc-50 p-2">
                  Best for: {p.bestFor.join(", ")}
                </div>
              </div>
              {p.subscription && (
                <div className="mt-4 text-xs text-zinc-600">
                  Subscription refills from{" "}
                  {currency(p.subscription.priceMonthly)}/mo (
                  {p.subscription.freq})
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Planner / Cart */}
      <Section id="planner" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Planner</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Your Whole-Home plan is selected above. Add optional room/tap
              packages, choose extras, and toggle the annual service plan.
            </p>

            {/* Service plan toggle */}
            <Card className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Annual Service Plan</div>
                <div className="mt-1 text-xs text-zinc-600">
                  Cartridge changes, UV lamp (where applicable), health check,
                  priority support.
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold">
                  {currency(SERVICE_PLAN_PRICE[housePlan])}/yr
                </div>
                <button
                  onClick={() => setServicePlan(!servicePlan)}
                  className={clsx(
                    "relative h-6 w-11 rounded-full transition",
                    servicePlan ? "bg-emerald-600" : "bg-zinc-300"
                  )}
                  aria-label="Toggle service plan"
                >
                  <span
                    className={clsx(
                      "absolute top-0.5 h-5 w-5 rounded-full bg-white transition",
                      servicePlan ? "right-0.5" : "left-0.5"
                    )}
                  />
                </button>
              </div>
            </Card>

            {/* Room table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Room</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Add-on Package
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Qty</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Line total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(Object.keys(rooms) as RoomKey[]).map((rk) => {
                    const { productId, qty } = rooms[rk];
                    const product =
                      productId === "None"
                        ? undefined
                        : PRODUCTS.find((p) => p.id === productId);
                    const lineTotal = product ? product.fromPrice * qty : 0;
                    return (
                      <tr key={rk} className="border-t">
                        <td className="px-4 py-3">{rk}</td>
                        <td className="px-4 py-3">
                          <select
                            value={productId}
                            onChange={(e) =>
                              updateRoom(rk, {
                                productId: e.target.value as ProductId,
                              })
                            }
                            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2"
                          >
                            <option value="None">None</option>
                            {PRODUCTS.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <div className="inline-flex items-center rounded-lg border border-zinc-300">
                            <button
                              className="h-9 w-9 text-lg"
                              onClick={() =>
                                updateRoom(rk, { qty: Math.max(0, qty - 1) })
                              }
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={qty}
                              min={0}
                              className="h-9 w-14 border-x border-zinc-300 text-center"
                              onChange={(e) =>
                                updateRoom(rk, {
                                  qty: Math.max(0, Number(e.target.value)),
                                })
                              }
                            />
                            <button
                              className="h-9 w-9 text-lg"
                              onClick={() => updateRoom(rk, { qty: qty + 1 })}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {lineTotal ? currency(lineTotal) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Extras */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Add extras (optional)</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {UPSELLS.map((u) => {
                  const active = selectedUpsells.includes(u.id);
                  return (
                    <button
                      key={u.id}
                      onClick={() => toggleUpsell(u.id)}
                      className={clsx(
                        "rounded-xl border p-4 text-left transition",
                        active
                          ? "border-emerald-400 bg-emerald-50"
                          : "border-zinc-200 hover:bg-zinc-50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{u.name}</div>
                          <div className="text-xs text-zinc-600">
                            Instrumentation & convenience
                          </div>
                        </div>
                        <div className="text-sm font-semibold">
                          {currency(u.price)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cart */}
          <div>
            <Card>
              <h3 className="text-lg font-bold">Your estimate</h3>
              <div className="mt-2 text-xs text-emerald-700">
                Whole-Home:{" "}
                <span className="font-semibold">{totals.houseName}</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {totals.items.map((it, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="text-zinc-700">{it.label}</div>
                    <div className="font-medium">{currency(it.price)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t pt-4 text-sm">
                <div className="flex items-center justify-between text-zinc-700">
                  <span>Subtotal</span>
                  <span>{currency(totals.subtotal)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-zinc-700">
                  <span>Travel (estimate)</span>
                  <span>
                    {totals.callout === 0 ? "Free" : currency(totals.callout)}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-lg font-extrabold">
                  <span>Total estimate</span>
                  <span>{currency(totals.total)}</span>
                </div>
              </div>

              {/* Customer details */}
              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-600">
                    Your name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Alex"
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-600">
                    Postcode / Suburb code
                  </label>
                  <input
                    type="number"
                    value={postcode}
                    onChange={(e) => setPostcode(Number(e.target.value))}
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => window.open(makeWhatsAppLink(), "_blank")}
                >
                  Book on WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={() =>
                    navigator.clipboard.writeText(makeWhatsAppLink())
                  }
                >
                  Copy booking link
                </Button>
              </div>

              <p className="mt-3 text-xs text-zinc-600">
                No payment taken online. We confirm on WhatsApp, then install.
                30-day taste & flow tune-up.
              </p>
            </Card>

            <Card className="mt-4 text-xs text-zinc-600">
              <div className="font-semibold text-zinc-800">
                Install checklist (what we do)
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Shoe covers, dust mats, neat bracketry & labeling</li>
                <li>Bypass & isolation valves; dual gauge set; sample taps</li>
                <li>
                  Pre/post tests: chlorine (DPD1), turbidity, pH, flow &
                  pressure
                </li>
                <li>
                  Commissioning + QR code handover (report, SKUs, service dates)
                </li>
                {housePlan === "signature" ? (
                  <li>Smart leak sensor + auto shutoff</li>
                ) : null}
              </ul>
              <p className="mt-2">
                *Flow capability depends on housings, layout, and configuration.
                Filtration does not increase building/municipal pressure.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="pt-0">
        <h2 className="text-2xl font-bold">Compare options</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-lg font-semibold">Whole-Home plans</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Plan</th>
                    <th className="px-4 py-3 text-left">Assurance</th>
                    <th className="px-4 py-3 text-left">Instrumentation</th>
                    <th className="px-4 py-3 text-left">Install</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Signature</td>
                    <td className="px-4 py-3">UV + smart leak shutoff</td>
                    <td className="px-4 py-3">
                      Bypass + dual gauges + sample taps
                    </td>
                    <td className="px-4 py-3">4–6 hrs</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Premier</td>
                    <td className="px-4 py-3">Scale inhibitor</td>
                    <td className="px-4 py-3">
                      Bypass + dual gauges + sample tap
                    </td>
                    <td className="px-4 py-3">3–5 hrs</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Essential</td>
                    <td className="px-4 py-3">Sediment + CTO carbon</td>
                    <td className="px-4 py-3">
                      Bypass + single gauge + sample tap
                    </td>
                    <td className="px-4 py-3">2–4 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <div className="text-lg font-semibold">Room/tap add-ons</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Package</th>
                    <th className="px-4 py-3 text-left">Best rooms</th>
                    <th className="px-4 py-3 text-left">Taste & odour</th>
                    <th className="px-4 py-3 text-left">Sediment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Under-Sink Dual</td>
                    <td className="px-4 py-3">Kitchen, Main Bath, Ensuite</td>
                    <td className="px-4 py-3">Excellent</td>
                    <td className="px-4 py-3">Excellent</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Under-Sink Single</td>
                    <td className="px-4 py-3">Kitchen, Bar</td>
                    <td className="px-4 py-3">Great</td>
                    <td className="px-4 py-3">Good</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Tap-Mount Quick</td>
                    <td className="px-4 py-3">Kitchen, Guests, Bar</td>
                    <td className="px-4 py-3">Good</td>
                    <td className="px-4 py-3">Light</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">
                      Pressure & Flow Kit
                    </td>
                    <td className="px-4 py-3">Baths, Ensuite, Kitchen</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <p className="mt-3 text-xs text-zinc-600">
          *Flow feel depends on supply and internal tap condition; we clean and
          optimise but do not change building pressure.
        </p>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="pt-0">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <div className="font-semibold">
              Does this make borehole water safe?
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              These plans target municipal potable water. For boreholes/unknown
              sources, we’ll test and specify UV and/or RO where required.
            </p>
          </Card>
          <Card>
            <div className="font-semibold">
              Will this increase my water pressure?
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Filtration improves clarity/taste and protects fixtures but does
              not increase building/municipal pressure. We measure ΔP and advise
              if supply issues exist.
            </p>
          </Card>
          <Card>
            <div className="font-semibold">
              How often are cartridges changed?
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Whole-home: sediment 3–6 mo, carbon 9–12 mo, UV lamp ~12 mo.
              Add-ons typically 3–6 mo. The Annual Service Plan covers this.
            </p>
          </Card>
          <Card>
            <div className="font-semibold">
              What’s included in the handover?
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Digital report (photos, serials, readings), QR at unit, SKUs for
              refills, service dates, and a 30-day tune-up appointment.
            </p>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-600">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                💧
              </div>
              <div>
                <div className="font-semibold text-zinc-800">ClearTap CPT</div>
                <div className="text-xs">
                  Cape Town • City Bowl • Atlantic Seaboard • Southern Suburbs
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Pill>PRB-supervised installs</Pill>
              <Pill>Public liability insured</Pill>
              <Pill>30-day tune-up guarantee</Pill>
            </div>
          </div>
          <div className="mt-4 text-xs">
            Designed for municipal potable water. For non-municipal sources,
            UV/RO may be required. © {new Date().getFullYear()} ClearTap CPT.
          </div>
        </div>
      </footer>
    </div>
  );
}
