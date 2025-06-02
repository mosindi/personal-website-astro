import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://sindi.xyz',
  integrations: [mdx(), sitemap(), tailwind()],
  middleware: true, // bu satırı ekle
  output: "static",
  base: "/personal-website-astro/", // Örn: "/personal-website/"
});

