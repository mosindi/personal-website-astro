// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // Root path'e gelenleri "/en" altına yönlendir
  if (pathname === "/") {
    return context.redirect("/en");
  }

  // Dil ayarını context.locals'e ekle
  const lang = pathname.startsWith("/tr") ? "tr" : "en";
  context.locals.lang = lang;

  return next();
});
