// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------------------------------------
//  VITE CONFIG
// ---------------------------------------------------------------------------

export default defineConfig(({ mode }) => ({
  // 👇 Required for GitHub Pages to serve under /<repo-name>/
  base: mode === "production" ? "/TheBusinessIdeaStudio/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@layout": path.resolve(__dirname, "src/layout"),
    },
  },

  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 5173,
    open: true,
  },
}));
