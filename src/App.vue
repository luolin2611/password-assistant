<template>
  <div class="app-container">
    <router-view />
    <tab-bar />
  </div>
</template>

<script lang="ts" setup>
import TabBar from './components/TabBar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  background: #f7f8fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.app-container {
  min-height: 100%;
  padding-bottom: 50px; /* 为底部导航栏留出空间 */
}
</style> 