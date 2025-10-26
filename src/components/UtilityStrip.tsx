const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

// Include all pages that can set the active state
export type Active =
  | "home"
  | "repo"
  | "faq"
  | "governance"
  | "community"
  | "systems"
  | "ai"
  | "graph";

type NavHandlers = {
  onNavFaq?: () => void;
  onNavGovernance?: () => void;
  onNavCommunity?: () => void;
  onNavSystems?: () => void;
  onNavAi?: () => void;
  onNavGraph?: () => void;
};

function Eye({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M32 14C18 14 7 28 7 32s11 18 25 18 25-14 25-18S46 14 32 14zm0 28c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function UtilityStrip(
  props: {
    leftLabel?: string;
    leftMeta?: string[];
    active?: Active;
  } & NavHandlers
) {
  const {
    leftLabel = "Knowledge Graph",
    leftMeta = ["60+ Mental Models", "Evidence-led"],
    active,
  } = props;

  const linkCls = (key: Active) =>
    `hover:opacity-80 ${active === key ? "font-semibold" : ""}`;

  // helper to support hash routing without full reload when handlers are provided
  const handleClick = (fn?: () => void) => (e: any) => {
    if (fn) {
      e.preventDefault();
      fn();
    }
  };

  return (
    <div className="border-b bg-white/80" style={{ borderColor: C.gray }}>
      <div className="mx-auto max-w-6xl h-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 opacity-80">
          <span className="inline-flex items-center gap-1">
            <Eye /> {leftLabel}
          </span>
          {leftMeta.map((m, i) => (
            <span key={i}>• {m}</span>
          ))}
        </div>

        <nav className="hidden sm:flex items-center gap-4">
          <a
            href="#/community"
            className={linkCls("community")}
            onClick={handleClick(props.onNavCommunity)}
          >
            Community
          </a>
          <a
            href="#/systems"
            className={linkCls("systems")}
            onClick={handleClick(props.onNavSystems)}
          >
            Software
          </a>
          <a
            href="#/ai"
            className={linkCls("ai")}
            onClick={handleClick(props.onNavAi)}
          >
            AI (Private)
          </a>
        </nav>
      </div>
    </div>
  );
}
