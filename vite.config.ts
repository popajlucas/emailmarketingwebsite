import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { studies } from "./src/data";

const pages = [
  "process",
  "work",
  "about",
  "careers",
  "contact",
  ...studies.map((study) => `work/${study.slug}`),
];

function publishablePages(): Plugin {
  let outDir = "";
  return {
    name: "publishable-pages",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const index = resolve(outDir, "index.html");
      for (const page of pages) {
        const directory = resolve(outDir, page);
        mkdirSync(directory, { recursive: true });
        copyFileSync(index, resolve(directory, "index.html"));
      }
      copyFileSync(index, resolve(outDir, "404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), publishablePages()],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
