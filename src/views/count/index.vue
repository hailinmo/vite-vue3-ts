<template>
  <div>
    <p>{{ count }}</p>
    <a-button @click="increase">增加</a-button>
    <a-button :disabled="isStop" @click="reduce">减少</a-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)

    const increase = () => {
      count.value++
    }

    const isStop = computed(() => count.value === 0)

    const reduce = () => {
      count.value--
    }

    return { count, increase, reduce, isStop }
  },
})
</script>

<style scoped></style>
