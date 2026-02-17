/**
 * Nuxt 2 Module for vue-pivottable
 *
 * @example
 * // nuxt.config.js
 * export default {
 *   modules: [
 *     '@vue-pivottable/nuxt/nuxt2'
 *   ]
 * }
 */

import { resolve } from 'path'

export default function VuePivottableModule(moduleOptions) {
  const options = {
    ...this.options.pivottable,
    ...moduleOptions
  }

  // Add plugin (client-side only)
  this.addPlugin({
    src: resolve(__dirname, 'plugin.cjs'),
    fileName: 'vue-pivottable.client.js',
    mode: 'client',
    options
  })

  // Add CSS
  if (options.css !== false) {
    this.options.css = this.options.css || []
    this.options.css.push('vue-pivottable/dist/vue-pivottable.css')
  }
}

// Required for Nuxt 2
export const meta = {
  name: '@vue-pivottable/nuxt',
  version: '0.1.0'
}
