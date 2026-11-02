// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://khatirkoohi.com",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
