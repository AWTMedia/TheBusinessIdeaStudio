// src/types/OnePager.ts
import type React from "react";

/** Base one-pager (your existing .ts/.tsx pages still satisfy this) */
export type BaseOnePager = {
  key: string;
  question: string;
  hook?: string;
  summary?: string;
  bullets: string[];
  steps: Array<{ t: string; d: string }>;
  kpis?: string[];
  tools?: string[];
  cta?: string;
  video?: { url: string; title?: string; start?: number };
  /** legacy renderer (old pages) */
  render?: () => React.ReactNode;
};

/** Document-like unions for MDX/PDF/Embed fallback viewer */
export type DocLike =
  | {
      type: "mdx";
      title: string;
      /** If using raw MDX fetch via URL */
      url?: string;
      /** If bundling MDX as a component */
      Component?: React.ComponentType<any>;
    }
  | {
      type: "pdf";
      title: string;
      url: string;
    }
  | {
      type: "embed";
      title: string;
      url: string;
    }
  | {
      /** Not a DocViewer page; normal OnePager */
      type?: undefined;
    };

export type OnePager = BaseOnePager & DocLike;
