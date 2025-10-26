import type { OnePager } from "@/types/OnePager";

/**
 * Renders document-like one-pagers:
 * - { type: "mdx", Component?: React.FC, url?: string }
 * - { type: "pdf", url: string }
 * - { type: "embed", url: string }
 * If pager.type is undefined, returns null (non-doc one-pagers).
 */
export default function DocViewer({ pager }: { pager: OnePager }) {
  if (!pager.type) return null;

  const { type, title } = pager;

  if (type === "mdx") {
    if (pager.Component) {
      const Cmp = pager.Component;
      return (
        <article className="prose prose-neutral max-w-none bg-white rounded-2xl border p-6 md:p-8 mt-8">
          <h2 className="sr-only">{title}</h2>
          <Cmp />
        </article>
      );
    }
    if (pager.url) {
      return (
        <article className="prose prose-neutral max-w-none bg-white rounded-2xl border p-6 md:p-8 mt-8">
          <h2 className="mb-4">{title}</h2>
          <p>
            MDX file:{" "}
            <a
              className="underline"
              href={pager.url}
              target="_blank"
              rel="noreferrer"
            >
              {pager.url}
            </a>
          </p>
          <p className="text-sm opacity-70">
            (If you want to bundle MDX, import it and pass as{" "}
            <code>Component</code>.)
          </p>
        </article>
      );
    }
    return null;
  }

  if (type === "pdf" && pager.url) {
    return (
      <div className="mt-8 rounded-2xl border bg-white/90 p-2">
        <iframe
          src={pager.url}
          title={title}
          className="w-full h-[80vh] rounded-xl"
        />
      </div>
    );
  }

  if (type === "embed" && pager.url) {
    return (
      <div className="mt-8 rounded-2xl border bg-white/90 p-2">
        <iframe
          src={pager.url}
          title={title}
          className="w-full h-[80vh] rounded-xl"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return null;
}
