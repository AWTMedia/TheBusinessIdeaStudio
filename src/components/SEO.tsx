import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/graph"
  ogImage?: string; // e.g. "/og-default.jpg"
  noindex?: boolean;
  jsonLd?: object | object[];
};

// ——— helpers (only used in effect on client) ———
function upsertMetaByName(name: string, content: string) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProp(property: string, content: string) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// keep canonical as a single <link>, but allow multiple preconnects
function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function ensurePreconnect(href: string) {
  if (!href) return;
  let el = document.querySelector<HTMLLinkElement>(
    `link[rel="preconnect"][href="${href}"]`
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = "preconnect";
    el.href = href;
    document.head.appendChild(el);
  }
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogImage,
  noindex,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Guard for any non-browser context
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    try {
      // Title
      if (title) document.title = title;

      // Description
      if (description) upsertMetaByName("description", description);

      // Canonical (preserve # for hash routing)
      const origin = window.location.origin;
      const canonical = canonicalPath
        ? `${origin}/#${
            canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`
          }`
        : window.location.href;
      upsertCanonical(canonical);

      // Robots
      upsertMetaByName(
        "robots",
        noindex ? "noindex, nofollow" : "index, follow"
      );

      // Open Graph / Twitter
      upsertMetaByProp("og:title", title);
      if (description) upsertMetaByProp("og:description", description);
      upsertMetaByProp("og:url", canonical);
      upsertMetaByProp("og:type", "website");
      if (ogImage) upsertMetaByProp("og:image", ogImage);

      upsertMetaByName(
        "twitter:card",
        ogImage ? "summary_large_image" : "summary"
      );
      upsertMetaByName("twitter:title", title);
      if (description) upsertMetaByName("twitter:description", description);
      if (ogImage) upsertMetaByName("twitter:image", ogImage);

      // JSON-LD (clear previous blocks first so indexes don’t dangle)
      const existing = Array.from(
        document.querySelectorAll('script[id^="jsonld-"]')
      );
      existing.forEach((n) => n.parentElement?.removeChild(n));
      if (jsonLd) {
        const list = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
        list.forEach((block, i) => upsertJsonLd(`jsonld-${i}`, block));
      }

      // Perf
      ensurePreconnect("https://www.youtube.com");
      ensurePreconnect("https://i.ytimg.com");
    } catch (err) {
      // Fail-safe: never let SEO setup crash the app render
      // eslint-disable-next-line no-console
      console.warn("[SEO] meta setup failed:", err);
    }
  }, [title, description, canonicalPath, ogImage, noindex, jsonLd]);

  return null;
}
