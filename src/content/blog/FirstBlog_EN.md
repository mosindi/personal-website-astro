---
title: "Step-by-Step: How I Built My Personal Website"
description: "The journey of creating a fast, multilingual, and minimalist personal website using Astro and TailwindCSS."
pubDate: 2025-06-03
heroImage: "/post_img.webp"
badge: "NEW"
---
<div class="text-right my-4">
  <a href="/blog/adm-adm-kiisel-web-sitemi-nasl-oluturdum" class="text-blue-600 hover:underline text-sm">
    🇹🇷 Bu yazının Türkçe versiyonunu oku
  </a>
</div>
I wanted to build a personal website where I could share my portfolio, blog posts, and projects. My goal was to have a modern, minimalist, and fast structure. In this post, I’ll walk you through how I built my personal website from scratch.

---

## 🧱 1. Defining the Project Structure

First, I clarified my objectives:

- **Multilingual support (Turkish and English)**
- **Static site generation**
- **Pages like Blog, Projects, and Resume**
- **Responsive design**

Based on these goals, my tech stack was:

- **[Astro](https://astro.build/)**: For static site generation and a component-based structure.
- **TailwindCSS**: For rapid styling and mobile-responsive design.
- **Lucide Icons**: Clean and elegant icons.
- **GitHub Pages**: Free hosting.

---

## ⚙️ 2. Starting the Project

```bash
npm create astro@latest
cd personal-website
npm install
```

Choose the minimal starter and TypeScript options. Then run the dev server:

```bash
npm run dev
```

---

## 📄 3. Setting Up the Pages

I created the following pages inside the `src/pages` directory:

- `/index.astro` – Home page
- `/cv.astro` – Resume page
- `/projects.astro` – Projects list
- `/blog/` – Blog posts

I also created language folders: `en/` and `tr/`.

---

## 🎨 4. Styling with TailwindCSS

TailwindCSS was already included. I customized `tailwind.config.js` to include new font sizes and themes, and used utility classes for spacing, responsiveness, and colors.

---

## 🌐 5. Multilingual Support

Using Astro middleware, I redirected the root (`/`) to `/en` by default:

```ts
// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/") {
    return context.redirect("/en");
  }

  return next();
});
```

Then I used `lang` props in `BaseLayout.astro` and passed them through each page.

---

## 🧩 6. Components and Layouts

I created reusable components like `Header.astro`, `Footer.astro`, `SideBar.astro`, and `Icon.astro`. This helped maintain consistency and speed up development.

---

## 🛠️ 7. Deployment

I deployed the site using GitHub Pages by adding this to `astro.config.mjs`:

```js
site: "https://yourusername.github.io",
base: "/personal-website/"
```

Then I used:

```bash
npm run build
npx astro deploy
```

---

## ✅ Conclusion

This project helped me build a clean and multilingual personal site using modern frontend tools. You can explore the full source code [here](#). Contributions and feedback are always welcome!

