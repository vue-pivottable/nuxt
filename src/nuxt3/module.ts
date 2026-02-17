/**
 * Nuxt 3 Module for vue-pivottable (vue3-pivottable)
 *
 * @example
 * // nuxt.config.ts
 * export default defineNuxtConfig({
 *   modules: [
 *     '@vue-pivottable/nuxt'
 *   ]
 * })
 */

import { defineNuxtModule, addPlugin, addComponent, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Include CSS automatically
   * @default true
   */
  css?: boolean

  /**
   * Register components globally
   * @default true
   */
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@vue-pivottable/nuxt',
    configKey: 'pivottable',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    css: true,
    global: true
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add CSS
    if (options.css) {
      nuxt.options.css.push('vue-pivottable/dist/vue-pivottable.css')
    }

    // Add plugin for client-side only
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'client'
    })

    // Register components globally
    if (options.global) {
      addComponent({
        name: 'VuePivottable',
        export: 'VuePivottable',
        filePath: 'vue-pivottable',
        mode: 'client'
      })

      addComponent({
        name: 'VuePivottableUi',
        export: 'VuePivottableUi',
        filePath: 'vue-pivottable',
        mode: 'client'
      })
    }
  }
})
