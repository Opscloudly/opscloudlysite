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

  // Add these configurations for GitHub Pages
  target: 'static', // Ensure the target is set to 'static'
  router: {
    base: '/opscloudlysite/', // Replace with your repository name
  },
});
