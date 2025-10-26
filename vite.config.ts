// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  let mdxPlugin: any | null = null;

  // Try to load MDX only if deps are present
  try {
    const [{ default: mdx }, { default: remarkGfm }, { default: remarkFrontmatter }] =
      await Promise.all([
        import("@mdx-js/rollup"),
        import("remark-gfm"),
        import("remark-frontmatter"),
      ]);

    mdxPlugin = mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    });
  } catch (e: any) {
    console.warn("[vite] MDX plugin not loaded (optional):", e?.message ?? e);
  }

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@ui": path.resolve(__dirname, "src/ui"),
        "@layout": path.resolve(__dirname, "src/layout"),
      },
    },
    plugins: [react(), ...(mdxPlugin ? [mdxPlugin] : [])],
    optimizeDeps: {
      include: ["@mdx-js/react"], // harmless even if MDX plugin didn't load
    },
    build: {
      chunkSizeWarningLimit: 1200, // silence large bundle warning
    },
  };
});