<template>
  <div class="mt-40">
    <n-result
      status="404"
      title="404 找不到了"
      description="总有些门是对你关闭的"
    >
      <template #footer>
        <n-button>返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
