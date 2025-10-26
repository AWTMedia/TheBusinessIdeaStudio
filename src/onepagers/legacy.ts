import { ComponentType } from "react";

export type LegacyOnePager = {
  slug: string; // URL slug, e.g. "demand-os"
  title?: string; // optional, for menus/SEO
  Component: ComponentType<any>; // your old app.tsx default export
  meta?: Record<string, any>; // optional extras
};

// Helper to keep a consistent shape
export function createLegacyOnePager(p: LegacyOnePager) {
  return p;
}
