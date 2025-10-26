export type OnePager = {
  key: string;
  question: string;
  hook: string;
  summary: string;
  bullets: string[];
  steps: { t: string; d: string }[];
  kpis?: string[];   // optional
  tools?: string[];  // optional
  cta: string;
  // optional
  category?: string; // e.g., "Growth & Demand"

  /**
   * When present, the viewer will render this instead of the schema sections.
   * Use for legacy one-pagers that already render their own UI.
   */
  render?: () => JSX.Element;

  /**
   * Optional per-pager video config.
   * If omitted, the viewer will try VIDEO_MAP[pager.key].
   */
  video?: {
    url: string;        // any YouTube form: watch?v=, youtu.be, shorts, embed
    title?: string;     // accessible title for iframe
    start?: number;     // start time in seconds
  };
};