const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  text: "#1C2431",
  accent: "#C9F93E",
  gray: "#E8E6DE",
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  const linkCls =
    "opacity-80 hover:opacity-100 underline decoration-1 underline-offset-4";

  return (
    <footer
      className="border-t mt-12"
      style={{ borderColor: C.gray, background: "#FFF" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold" style={{ color: C.ink }}>
            The Business Idea Studio
          </div>
          <p className="mt-2 opacity-80">
            Evidence-led playbooks, systems, and tools for operators.
          </p>
        </div>

        <nav>
          <div className="text-xs uppercase tracking-widest opacity-60">
            Pages
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <a className={linkCls} style={{ color: C.ink }} href="#/">
              Home
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/repo">
              Repository
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/faq">
              FAQ
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/governance">
              Governance
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/community">
              Community
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/systems">
              Software
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/ai">
              AI (Private)
            </a>
            <a className={linkCls} style={{ color: C.ink }} href="#/graph">
              Knowledge Graph
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="#/book-a-call"
            >
              Book a Call
            </a>
          </div>
        </nav>

        <nav>
          <div className="text-xs uppercase tracking-widest opacity-60">
            Elsewhere
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="https://www.youtube.com/@yourchannel"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="mailto:hello@yourapp.com"
            >
              Email
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="https://www.skool.com/your-group"
              target="_blank"
              rel="noreferrer"
            >
              Skool
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="https://yourapp.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              className={linkCls}
              style={{ color: C.ink }}
              href="https://yourapp.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </div>
        </nav>
      </div>

      <div className="text-center text-xs opacity-70 py-4">
        © {year} The Business Idea Studio. All rights reserved.
      </div>
    </footer>
  );
}
