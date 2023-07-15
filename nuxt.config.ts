// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/nmf2npd.css' }]
    }
  }
})
