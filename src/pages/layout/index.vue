<template>
  <el-container class="h-full">
    <el-header height="50px" class="bg-gray-500">
      <Header />
    </el-header>
    <el-container class="min-h-0">
      <el-aside width="200px" class="bg-gray-200">
        <Aside />
      </el-aside>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
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
