import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about/index.html"),
        portfolio: resolve(import.meta.dirname, "portfolio/index.html"),
        manufacturing: resolve(import.meta.dirname, "manufacturing/index.html"),
        contacts: resolve(import.meta.dirname, "contacts/index.html"),
        notFound: resolve(import.meta.dirname, "404.html"),
      },
    },
  },
});
