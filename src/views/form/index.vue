<template>
  <div ref="countRef">
    <div class="flex justify-between">
      <div class="flex-1 min-w-0 break-words">test</div>
      <div class="w-80 ml-2">test</div>
    </div>
    <Example />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { Example } from '@/components/index'
export default defineComponent({
  components: {
    Example,
  },
  setup() {
    const countRef = ref(null)
    watch(
      countRef,
      (value) => {
        console.log(value)
      },
      {
        flush: 'post',
      }
    )
    return {
      countRef,
    }
  },
})
</script>

<style scoped></style>
