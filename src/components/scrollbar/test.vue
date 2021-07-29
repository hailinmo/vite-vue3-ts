<template>
  <ResizeObserver style="height: 400px; outline: auto">
    <div v-for="item in Array(30)" :key="item">测试数据-一行</div>
  </ResizeObserver>
</template>

<script lang="ts">
import ResizeObserver from './index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ResizeObserver,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
