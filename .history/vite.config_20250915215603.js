import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/",
  plugins: [vue()],
  optimizeDeps: {
    include: ["vue"],
  },
  build: {
    rollupOptions: {
      external: [], // ensure nothing is treated as external
    },
  },
});
