import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import theme from "postcss-material-colors";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [theme()],
    },
  },
});
