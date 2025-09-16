import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NOTE: When deploying to GitHub Pages for a project site (username/repo),
// you should set `base` to the repository name path and output the build to
// the `docs/` folder (or configure Pages to serve from the `gh-pages` branch).
// This ensures the built index.html uses absolute paths that point to
// /<repo-name>/assets/... and prevents the browser from trying to load
// bare-imports like "vue" at runtime.

const repoName = "Alec-Garnica-Audio-Portfolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [vue()],
  optimizeDeps: {
    include: ["vue"],
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      external: [], // ensure nothing is treated as external
    },
  },
});
