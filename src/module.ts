/**
 * @vue-pivottable/nuxt
 *
 * Nuxt module for vue-pivottable
 * Supports both Nuxt 2 and Nuxt 3
 *
 * @example Nuxt 3
 * // nuxt.config.ts
 * export default defineNuxtConfig({
 *   modules: ['@vue-pivottable/nuxt']
 * })
 *
 * @example Nuxt 2
 * // nuxt.config.js
 * export default {
 *   modules: ['@vue-pivottable/nuxt/nuxt2']
 * }
 */

// Default export is for Nuxt 3
export { default, type ModuleOptions } from './nuxt3/module'
