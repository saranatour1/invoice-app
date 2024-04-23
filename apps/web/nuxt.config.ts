// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@vueuse/nuxt','@pinia/nuxt'],
  devtools: { enabled: true },
  pages:true,
  tailwindcss: {
    // Options
    cssPath: '~/assets/css/tailwind.css',
    viewer: true,
  },
  pinia: {
    // pinia options
  },
})
