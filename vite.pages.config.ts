import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(import.meta.dirname, "github-pages"),
  base: "/Cafe-Xperience/",
  publicDir: resolve(import.meta.dirname, "public"),
  plugins: [react()],
  resolve: {
    alias: {
      "next/image": resolve(import.meta.dirname, "github-pages/next-image.tsx"),
    },
  },
  build: {
    outDir: resolve(import.meta.dirname, "dist-pages"),
    emptyOutDir: true,
  },
});
