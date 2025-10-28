// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup"; // <-- default import (function)
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO = "TheBusinessIdeaStudio";

export default defineConfig({
  base: `/${REPO}/`,
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
      // You can add rehype plugins later if needed
    }),
  ],
});
