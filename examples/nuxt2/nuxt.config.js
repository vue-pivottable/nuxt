export default {
  target: 'static',

  modules: [
    process.env.NODE_ENV === 'development'
      ? '../../src/nuxt2/module'
      : '@vue-pivottable/nuxt/nuxt2'
  ],

  head: {
    title: 'Nuxt 2 + vue-pivottable Example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
