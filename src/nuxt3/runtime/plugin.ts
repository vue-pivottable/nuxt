/**
 * Vue Pivottable Plugin for Nuxt 3
 * Client-side only plugin
 */

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Components are auto-registered via the module
  // This plugin can be used for additional setup if needed

  return {
    provide: {
      pivottable: {
        // Expose utilities if needed
      }
    }
  }
})
