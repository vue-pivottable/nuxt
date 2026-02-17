import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // Main entry (Nuxt 3)
    { input: 'src/module', name: 'module' },
    // Nuxt 2 entry
    { input: 'src/nuxt2/module', name: 'nuxt2' },
    // Nuxt 2 plugin (must be named 'plugin' for resolve(__dirname, 'plugin.js'))
    { input: 'src/nuxt2/plugin', name: 'plugin' },
    // Nuxt 3 entry (explicit)
    { input: 'src/nuxt3/module', name: 'nuxt3' },
    // Runtime plugin for Nuxt 3
    { input: 'src/nuxt3/runtime/plugin', name: 'runtime/plugin' }
  ],
  externals: [
    'vue',
    'vue-pivottable',
    '@nuxt/kit',
    '@nuxt/schema',
    'nuxt',
    '#app'
  ],
  declaration: true,
  rollup: {
    emitCJS: true
  },
  failOnWarn: false
})
