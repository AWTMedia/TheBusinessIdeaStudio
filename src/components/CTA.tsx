import React from "react";

// Local brand palette (kept minimal so this file is standalone)
const C = {
  blue: "#2F5DE8",
  accent: "#C9F93E",
};

type CTAProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "blue" | "ghost" | "lime" | "ghostLight";
  onClick?: (e: React.MouseEvent) => void;
};

function CTA({
  href = "#",
  children,
  variant = "blue",
  onClick,
}: CTAProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[.98]";

  if (variant === "ghost") {
    return (
      <a
        onClick={onClick}
        href={href}
        className={`${base} border`}
        style={{ borderColor: C.blue, color: C.blue }}
      >
        {children}
      </a>
    );
  }

  if (variant === "ghostLight") {
    return (
      <a
        onClick={onClick}
        href={href}
        className={`${base} border`}
        style={{ borderColor: "#fff", color: "#fff" }}
      >
        {children}
      </a>
    );
  }

  if (variant === "lime") {
    return (
      <a
        onClick={onClick}
        href={href}
        className={base}
        style={{ background: C.accent, color: "#111" }}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      onClick={onClick}
      href={href}
      className={`${base} text-white`}
      style={{ background: C.blue }}
    >
      {children}
    </a>
  );
}

export default CTA;