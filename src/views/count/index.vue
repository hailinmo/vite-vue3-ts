<template>
  <div>
    <p>{{ count }}</p>
    <n-button @click="increase">增加</n-button>
    <n-button :disabled="isStop" @click="reduce">减少</n-button>
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
