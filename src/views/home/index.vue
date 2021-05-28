<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <p ref="index" class="flex items-center">首页</p>
    <p class="flex items-start">{{ theme }}</p>
    <a-button @click="toLink">跳转</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const index = ref(null)
    onMounted(() => {
      console.log(index.value)
    })

    const route = useRoute()
    console.log(route)

    const router = useRouter()
    const toLink = () => {
      router.push({ path: '/' })
    }

    const theme = inject('theme', 'light')

    return { toLink, theme, index }
  },
})
</script>

<style scoped></style>
