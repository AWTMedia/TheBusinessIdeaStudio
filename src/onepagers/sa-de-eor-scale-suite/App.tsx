"use client";

import React, { useState, useEffect } from "react";

/**
 * South Africa–Germany EOR + Scale Management
 * Three-page React + Tailwind single-file app:
 * 1) Client-facing deck
 * 2) One-page landing
 * 3) Contract pack (MSA, SOW, DPA, Employment Agreement)
 */

// ---------- Utility UI Primitives ----------
const Container: React.FC<{ children: React.ReactNode; wide?: boolean }> = ({
  children,
  wide,
}) => (
  <div
    className={`mx-auto ${wide ? "max-w-7xl" : "max-w-5xl"} px-4 sm:px-6 lg:px-8`}
  >
    {children}
  </div>
);

const Card: React.FC<{
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, children, className = "" }) => (
  <section
    className={`bg-white/90 border border-slate-200 shadow-sm rounded-2xl p-6 ${className}`}
  >
    {title && (
      <header className="mb-3">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        {subtitle && <p className="text-slate-600 text-sm mt-1">{subtitle}</p>}
      </header>
    )}
    <div className="prose prose-slate max-w-none">{children}</div>
  </section>
);

const Badge: React.FC<{
  children: React.ReactNode;
  tone?: "green" | "blue" | "amber" | "slate" | "rose";
}> = ({ children, tone = "slate" }) => {
  const tones: Record<string, string> = {
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    blue: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
};

const Divider: React.FC = () => <hr className="my-8 border-slate-200" />;

const Table: React.FC<{ cols: string[]; rows: React.ReactNode[][] }> = ({
  cols,
  rows,
}) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden">
      <thead className="bg-slate-50">
        <tr>
          {cols.map((c, i) => (
            <th
              key={i}
              className="text-left text-sm font-semibold text-slate-700 px-4 py-3 border-b border-slate-200"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="even:bg-slate-50/50">
            {r.map((cell, j) => (
              <td
                key={j}
                className="align-top text-sm text-slate-800 px-4 py-3 border-b border-slate-100"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ---------- Top Navigation ----------
type Page = "deck" | "landing" | "contracts";

const Nav: React.FC<{ page: Page; setPage: (p: Page) => void }> = ({
  page,
  setPage,
}) => {
  const tabs = [
    { id: "deck", label: "Client Deck", desc: "Executive narrative & metrics" },
    { id: "landing", label: "Landing Page", desc: "Offer & CTA marketing" },
    { id: "contracts", label: "Contract Pack", desc: "MSA, SOW, DPA, Employment" },
  ] as const;
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <Container wide>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              South Africa–Germany EOR + Scale Management
            </h1>
            <p className="text-slate-600 text-sm">
              Three comprehensive pages: client deck, marketing one-pager, and contract pack.
            </p>
          </div>
          <button
            onClick={() => typeof window !== "undefined" && window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            🖨️ Print
          </button>
        </div>
        <div className="flex gap-2 pb-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setPage(t.id)}
              className={`rounded-2xl px-4 py-2 text-sm font-medium border ${
                page === t.id
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
              title={t.desc}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

// ---------- Pages ----------
const PageDeck = () => <div className="py-10"><Container><Card title="Executive Summary">...</Card></Container></div>;
const PageLanding = () => <div className="py-10"><Container><Card title="Landing Page">...</Card></Container></div>;
const PageContracts = () => <div className="py-10"><Container><Card title="Contract Pack">...</Card></Container></div>;

// ---------- Root App ----------
export default function App() {
  const [page, setPage] = useState<Page>("deck");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromHash = window.location.hash.replace("#", "");
    if (["deck", "landing", "contracts"].includes(fromHash)) {
      setPage(fromHash as Page);
    }
    const handler = () => {
      const h = window.location.hash.replace("#", "");
      if (["deck", "landing", "contracts"].includes(h)) setPage(h as Page);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash.replace("#", "") !== page) window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Nav page={page} setPage={setPage} />
      {page === "deck" && <PageDeck />}
      {page === "landing" && <PageLanding />}
      {page === "contracts" && <PageContracts />}
      <footer className="py-10 border-t border-slate-200 mt-10">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between text-sm text-slate-600">
            <p>© {new Date().getFullYear()} SA–DE EOR + Scale Management</p>
            <div className="flex gap-3">
              <a href="#contracts" className="hover:underline">Contracts</a>
              <a href="#landing" className="hover:underline">Landing</a>
              <a href="#deck" className="hover:underline">Deck</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}