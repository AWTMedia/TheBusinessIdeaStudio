import React from "react";

type Tone = "slate" | "emerald" | "amber" | "rose" | "indigo" | "violet";

export function Card({
  children,
  tone,
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const ring: Record<Tone, string> = {
    slate: "ring-1 ring-slate-100",
    emerald: "ring-1 ring-emerald-100",
    amber: "ring-1 ring-amber-100",
    rose: "ring-1 ring-rose-100",
    indigo: "ring-1 ring-indigo-100",
    violet: "ring-1 ring-violet-100",
  };
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-sm ${tone ? ring[tone] : ""} ${className}`}>
      {children}
    </div>
  );
}