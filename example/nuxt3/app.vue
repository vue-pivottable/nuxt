<template>
  <div class="container">
    <h1>@vue-pivottable/nuxt - Nuxt 3 Example</h1>
    <p>SSR-safe Nuxt module for vue-pivottable with automatic component registration</p>

    <div class="tabs">
      <button :class="{ active: activeTab === 'table' }" @click="activeTab = 'table'">
        VuePivottable
      </button>
      <button :class="{ active: activeTab === 'ui' }" @click="activeTab = 'ui'">
        VuePivottableUi
      </button>
    </div>

    <div class="pivot-container" v-if="activeTab === 'table'">
      <h2>VuePivottable (without UI controls)</h2>
      <p class="description">Direct pivot table rendering with pre-configured rows, cols, and aggregator</p>
      <ClientOnly>
        <VuePivottable
          :data="data"
          :rows="['region']"
          :cols="['product']"
          aggregator-name="Sum"
          :vals="['sales']"
        />
      </ClientOnly>
    </div>

    <div class="pivot-container" v-if="activeTab === 'ui'">
      <h2>VuePivottableUi (with drag-and-drop UI)</h2>
      <p class="description">Interactive pivot table with draggable fields and aggregator selection</p>
      <ClientOnly>
        <VuePivottableUi
          :data="data"
          :rows="['region']"
          :cols="['product']"
          aggregator-name="Sum"
          :vals="['sales']"
        />
      </ClientOnly>
    </div>

    <div class="data-info">
      <h3>Sample Data</h3>
      <pre>{{ JSON.stringify(data.slice(0, 3), null, 2) }}
... ({{ data.length }} records total)</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('table')

const data = [
  { region: 'East', product: 'Apple', sales: 100, quantity: 10 },
  { region: 'East', product: 'Banana', sales: 80, quantity: 20 },
  { region: 'East', product: 'Orange', sales: 120, quantity: 15 },
  { region: 'West', product: 'Apple', sales: 150, quantity: 12 },
  { region: 'West', product: 'Banana', sales: 90, quantity: 25 },
  { region: 'West', product: 'Orange', sales: 110, quantity: 18 },
  { region: 'North', product: 'Apple', sales: 130, quantity: 14 },
  { region: 'North', product: 'Banana', sales: 70, quantity: 22 },
  { region: 'North', product: 'Orange', sales: 95, quantity: 16 },
  { region: 'South', product: 'Apple', sales: 140, quantity: 11 },
  { region: 'South', product: 'Banana', sales: 85, quantity: 19 },
  { region: 'South', product: 'Orange', sales: 105, quantity: 17 }
]
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  color: #1a1a2e;
  margin-bottom: 8px;
  font-size: 1.8em;
}

h2 {
  color: #333;
  margin-bottom: 8px;
  font-size: 1.2em;
}

h3 {
  color: #555;
  margin-bottom: 10px;
  font-size: 1em;
}

p {
  color: #666;
  margin-bottom: 20px;
}

.description {
  font-size: 0.9em;
  color: #888;
  margin-bottom: 15px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs button {
  padding: 12px 24px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  color: #555;
}

.tabs button:hover {
  background: #f0f0f0;
  border-color: #ccc;
}

.tabs button.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

.pivot-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin-bottom: 20px;
  overflow-x: auto;
}

.data-info {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-top: 20px;
}

.data-info pre {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  font-size: 12px;
  overflow-x: auto;
  color: #555;
}
</style>
