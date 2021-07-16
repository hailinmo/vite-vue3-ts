<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  mounted() {
    console.dir(this.$el)
  },
})
</script>

<style scoped></style>
