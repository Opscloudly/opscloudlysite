export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],

  // GitHub Pages configuration
  target: 'static',
  router: {
    base: '/opscloudlysite/',
  },
  generate: {
    fallback: "404.html", // Ensures Nuxt handles direct links
    routes: ["/", "/pricing", "/about","/contact"], // Pre-generate static routes
  },
});
