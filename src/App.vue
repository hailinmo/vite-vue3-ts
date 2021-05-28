<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    provide('theme', 'dark')
  },
})
</script>

<style>
#app {
  height: 100%;
}
</style>
