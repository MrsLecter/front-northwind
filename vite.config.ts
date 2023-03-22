import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
});
