import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Set base to the repository name for GitHub Pages deployment
  base: "/portfolio/",
});
