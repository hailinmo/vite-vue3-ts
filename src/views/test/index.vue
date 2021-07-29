<template>
  <ComponentTest />
</template>

<script lang="ts">
import ComponentTest from '@/components/scrollbar/test.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    ComponentTest,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
