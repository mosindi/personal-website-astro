---
title: "Adım Adım: Kişisel Web Sitemi Nasıl Oluşturdum?"
description: "Astro ve TailwindCSS kullanarak çok dilli, hızlı ve sade bir kişisel web sitesi inşa süreci."
pubDate: 2025-06-03
heroImage: "/post_img.webp"
badge: "NEW"
---

<div class="text-right my-4">
  <a href="/blog/step-by-step-how-i-built-my-personal-website" class="text-blue-600 hover:underline text-sm">
    🇬🇧 View this post in English
  </a>
</div>
Kişisel portföyümü, blog yazılarımı ve projelerimi paylaşabileceğim bir site oluşturmak istiyordum. Modern, sade ve hızlı bir yapı hedefledim. Bu yazıda, sıfırdan kendi kişisel web sitemi nasıl yaptığımı adım adım anlatacağım.

---

## 🧱 1. Proje Yapısını Belirleme

İlk olarak hedefimi netleştirdim:

- **Çok dilli destek (Türkçe ve İngilizce)**
- **Statik site olması**
- **Blog, projeler, CV gibi sayfaların olması**
- **Responsive tasarım**

Bu hedefler doğrultusunda teknoloji seçimim:

- **[Astro](https://astro.build/)**: Static site generation ve bileşen bazlı yapı için.
- **TailwindCSS**: Hızlı stil vermek ve mobil uyumlu tasarım için.
- **Lucide Icons**: Şık ve sade ikonlar.
- **GitHub Pages**: Ücretsiz hosting.

---

## ⚙️ 2. Projeyi Başlatma

```bash
npm create astro@latest
cd my-personal-site
npm install
npm run dev
```

- Tailwind kurulumu için `@astrojs/tailwind` entegresi eklendi.
- Dil yapısı için `/en/`, `/tr/` klasörlerine özel sayfalar oluşturuldu.
- `/src/layouts/BaseLayout.astro` ile tüm sayfalarda kullanılan ortak layout hazırlandı.

---

## 🏗️ 3. Sayfaları Oluşturma

```bash
src/pages/en/index.astro
src/pages/tr/index.astro
src/pages/en/projects.astro
src/pages/en/cv.astro
src/content/blog/FirstBlog.md
```

Her sayfa `BaseLayout` üzerine kurulu. CV sayfası `TimeLine` yapısında, `Projects` sayfası ise `HorizontalCard` bileşeniyle oluşturuldu.

---

## 🌍 4. Çok Dilli Yapı (i18n)

- Her dil için ayrı dizin: `/en`, `/tr`
- `/` URL'sinden gelenleri `/en`'e yönlendirmek için `middleware.ts`:

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

- `lang` prop'u `BaseLayout` ile `Header`, `Footer`, `SideBar` gibi bileşenlere aktarıldı.
- Dil seçici menü aktif dilde görsel olarak vurgulu.

---

## 🧩 5. Bileşen Geliştirme

- `HorizontalCard.astro` → Proje tanıtımı için kart bileşeni.
- `Icon.astro` → Dinamik olarak `lucide` SVG ikonlarını yükleyen sade bir bileşen.
- `TimeLineElement.astro` → CV sayfasında deneyim ve eğitimleri göstermek için zaman çizelgesi elemanı.

SVG ikonlar `src/icons/lucide/` klasörüne `.svg` olarak indirildi.  
Dinamik yükleme için `src/lib/loadIcon.ts` dosyası oluşturuldu:

```ts
// src/lib/loadIcon.ts
import fs from 'fs/promises';

export async function loadIcon(name: string): Promise<string> {
  try {
    const iconPath = new URL(`../icons/lucide/${name}.svg`, import.meta.url);
    return await fs.readFile(iconPath, 'utf-8');
  } catch {
    return `<svg><text x="0" y="15" fill="red">Icon not found</text></svg>`;
  }
}
```

Ve `Icon.astro` bileşeninde kullanımı:

```astro
---
// src/components/Icon.astro
import { loadIcon } from "../lib/loadIcon.ts";
const { name, className = "" } = Astro.props;

let svgContent = await loadIcon(name);
svgContent = svgContent.replace('<svg', `<svg class="${className}"`);
---

<Fragment set:html={svgContent} />
```

---

## 🎨 6. Tasarım

TailwindCSS ile hızlı, temiz ve responsive tasarım yapıldı:

- `data-theme="lofi"` ile açık tema
- `hover:scale-[102%]`, `transition` gibi mikro animasyonlar
- Grid ve flex yapılarla uyumlu yerleşim

---

## 🚀 7. Yayına Alma

```bash
npm run build
```

- GitHub Pages için `gh-pages` branşı ayarlandı.
- `.github/workflows/deploy.yml` ile otomatik deployment tanımlandı.
- `astro.config.mjs` içinde base path belirtildi:

```ts
export default defineConfig({
  base: "/my-personal-site/",
});
```

---

## 💡 Sonuç ve Öğrenilenler

- Astro ile performanslı ve sade statik site oluşturmak çok kolay.
- Lucide ikonlarını local olarak kullanmak stil özgürlüğü sağladı.
- Çok dilli yapı, middleware ile pratik bir şekilde çözüldü.
- Markdown tabanlı blog sistemi içerik üretimini çok rahat hale getirdi.

---

> Bu yazı bu sitenin ilk blog yazısıdır. Yakında oyun altyapısı, .NET mimarileri ve performans üzerine içerikler de paylaşacağım.

---

Teşekkürler 🙌  
_Mustafa Ozan Şindi_