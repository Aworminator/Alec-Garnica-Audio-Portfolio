import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/", // 👈 important for custom domain
  plugins: [vue()],
});

