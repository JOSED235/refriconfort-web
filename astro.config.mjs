import { defineConfig } from 'astro/config';

// SITE/BASE los define el workflow de GitHub Pages (subruta /refriconfort-web/); local y dominio propio usan la raíz.
export default defineConfig({
  site: process.env.SITE ?? 'https://refriconfortcool.com',
  base: process.env.BASE ?? '/',
});
