import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // root for custom domain
  plugins: [vue()],
});``

export default {
  server: {
    host: true
  }
}