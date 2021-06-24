<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <p ref="index" class="flex items-center">首页</p>
    <n-button @click="toLink">跳转</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
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

    return { toLink, index }
  },
})
</script>

<style scoped></style>
