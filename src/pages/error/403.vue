<template>
  <div class="mt-40">
    <n-result
      status="403"
      title="403 禁止访问"
      description="总有些门是对你关闭的"
    >
      <template #footer>
        <n-button>联系管理员</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '403',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
