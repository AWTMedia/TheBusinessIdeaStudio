import CTA from "./CTA";

// Local brand palette + minimal icons so file is standalone
const C = {
  blue: "#2F5DE8",
  cream: "#F2EDDF",
  ink: "#0B0F19",
  gray: "#E8E6DE",
};

function Knight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M18 56h28v-5H18v5zm31-7H15V41c0-4.4 3.6-8 8-8h5l-4-5 9-15 7 5 6-4 5 6-8 7 5 6-8 8h-8c-2.2 0-4 1.8-4 4v6h21v5z"
        fill="currentColor"
      />
    </svg>
  );
}

type HeaderProps = {
  onNavHome: () => void;
  onNavRepo: () => void;
};

function Header({ onNavHome, onNavRepo }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur"
      style={{ borderColor: C.gray }}
    >
      <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button onClick={onNavHome} className="flex items-center gap-2">
          <span
            className="p-2 rounded-xl text-white"
            style={{ background: C.blue }}
          >
            <Knight />
          </span>
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: C.ink }}
          >
            THE BUSINESS IDEA STUDIO
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={onNavHome} className="hover:opacity-80">
            Home
          </button>
          <button onClick={onNavRepo} className="hover:opacity-80">
            Open Library
          </button>
          <a href="#/faq" className="hover:opacity-80">
            FAQ
          </a>
          <a href="#/compliance" className="hover:opacity-80">
            Governance
          </a>
        </nav>

        <CTA href="#/book-a-call" variant="lime">
          Book a Call
        </CTA>
      </div>
    </header>
  );
}

export default Header;