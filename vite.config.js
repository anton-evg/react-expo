import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function makeStylesheetNonBlocking() {
  return {
    name: "stylesheet-non-blocking",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(/<link rel="stylesheet"([^>]*?)>/g, (tag, attributes) => {
          if (!attributes.includes("href=")) {
            return tag;
          }

          return `<link rel="preload" as="style"${attributes} onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"${attributes}></noscript>`;
        });
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), makeStylesheetNonBlocking()],
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
