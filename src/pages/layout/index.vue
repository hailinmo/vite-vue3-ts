<template>
  <a-layout class="h-full">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="overflow-x-auto" width="256px">
        <Aside />
      </a-layout-sider>
      <a-layout-content>
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
    return {}
  },
})
</script>

<style scoped></style>
