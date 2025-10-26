// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  // Try to load MDX plugin & remark helpers only if they’re installed
  let mdxPlugin: any = null;
  try {
    const [
      { default: mdx },
      { default: remarkGfm },
      { default: remarkFrontmatter },
    ] = await Promise.all([
      import("@mdx-js/rollup"),
      import("remark-gfm"),
      import("remark-frontmatter"),
    ]);
    mdxPlugin = mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      providerImportSource: "@mdx-js/react",
    });
  } catch (e: any) {
    console.warn("[vite] MDX plugin not loaded (optional):", e?.message || e);
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
  };
});
