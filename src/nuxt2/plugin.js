/**
 * Vue Pivottable Plugin for Nuxt 2
 * This file is injected as a client-side plugin
 */

import Vue from 'vue'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'

// Register components globally
Vue.component('VuePivottable', VuePivottable)
Vue.component('VuePivottableUi', VuePivottableUi)

// Export for manual usage
export { VuePivottable, VuePivottableUi }
