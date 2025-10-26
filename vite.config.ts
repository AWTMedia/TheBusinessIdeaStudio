// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  const plugins: any[] = [react()];

  // Try to enable MDX only if it's installed (prevents dev crash)
  try {
    const { default: mdx } = await import("@mdx-js/rollup");
    const remarkGfm = (await import("remark-gfm")).default;
    const remarkFrontmatter = (await import("remark-frontmatter")).default;

    plugins.push(
      mdx({
        remarkPlugins: [remarkGfm, remarkFrontmatter],
      })
    );
  } catch (e) {
    console.warn(
      "[vite] MDX plugin not installed; skipping. MDX docs won't compile until deps are present."
    );
  }

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@ui": path.resolve(__dirname, "src/ui"),
        "@layout": path.resolve(__dirname, "src/layout"),
      },
    },
    plugins,
  };
});
