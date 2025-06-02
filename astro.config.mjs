import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: 'https://mosindi.github.io/personal-website-astro/',
  base: isProd ? "/personal-website-astro/" : "/", // ✅ sadece prod için base ver
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
});
