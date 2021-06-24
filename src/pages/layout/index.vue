<template>
  <n-layout class="h-full">
    <n-layout-header style="height: 60px" bordered>
      <Header />
    </n-layout-header>
    <n-layout position="absolute" style="top: 60px" has-sider>
      <n-layout-sider
        collapse-mode="width"
        :native-scrollbar="false"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        bordered
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <Aside :collapsed="collapsed" />
      </n-layout-sider>
      <n-layout-content
        content-style="padding: 16px;"
        :native-scrollbar="false"
      >
        <Main />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Main from './main.vue'
import Header from './header.vue'
import Aside from './aside.vue'

export default defineComponent({
  components: {
    Main,
    Header,
    Aside,
  },
  setup() {
    const collapsed = ref<boolean>(false)
    return {
      collapsed,
    }
  },
})
</script>

<style scoped></style>
