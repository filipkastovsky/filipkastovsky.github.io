import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    solidJs(),
    preact(),
    mdx({
      gfm: false,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
