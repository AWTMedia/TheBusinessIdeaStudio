import React from "react";
const modules = import.meta.glob("./*/index.tsx", { eager: true });

type LegacyModule = {
  default: {
    slug: string;
    title?: string;
    Component: React.ComponentType<any>;
  };
};

export const legacyPages = Object.values(modules).map(
  (m) => (m as LegacyModule).default
);

const map = new Map(legacyPages.map((p) => [p.slug, p]));
export function getOnePager(slug: string) {
  return map.get(slug);
}
