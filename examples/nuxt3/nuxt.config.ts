export default defineNuxtConfig({
  modules: [
    process.env.NODE_ENV === 'development'
      ? '../../src/nuxt3/module'
      : '@vue-pivottable/nuxt'
  ],
  devtools: { enabled: true }
})
