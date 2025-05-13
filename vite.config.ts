import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias '@' points to 'src' folder
    },
  },
});
