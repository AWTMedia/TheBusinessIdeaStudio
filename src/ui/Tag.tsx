import React from "react";

type Tone = "slate" | "emerald" | "indigo" | "amber" | "rose" | "violet";

export default function Tag({
  children,
  color = "slate",
}: {
  children: React.ReactNode;
  color?: Tone;
}) {
  const map: Record<Tone, string> = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <span className={`px-2 py-1 rounded-full ${map[color]} border border-black/5`}>
      {children}
    </span>
  );
}