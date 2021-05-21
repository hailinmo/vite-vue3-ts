<template>
  <el-button type="primary" @click="refreshData">刷新</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      v-bind="column"
    ></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import data from './data.json'
import data2 from './data2.json'
export default defineComponent({
  setup() {
    let tableData = ref(data)
    const columns = [
      { prop: 'date', label: '日期', width: 180 },
      { prop: 'name', label: '姓名', width: 180 },
      { prop: 'address', label: '地址' },
    ]
    const refreshData = () => {
      tableData.value = data2
    }
    return { columns, tableData, refreshData }
  },
})
</script>

<style scoped></style>
