<template>
  <n-button type="primary" @click="refreshData">刷新</n-button>
  <n-data-table :data="tableData" :columns="columns" style="width: 100%">
  </n-data-table>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue'
import data from './data.json'
import data2 from './data2.json'
export default defineComponent({
  name: 'DataBase',
  setup() {
    let tableData = shallowRef(data)
    const columns = [
      { key: 'date', title: '日期', width: 180 },
      { key: 'name', title: '姓名', width: 180 },
      { key: 'address', title: '地址' },
    ]
    const refreshData = () => {
      tableData.value = data2
    }
    return { columns, tableData, refreshData }
  },
})
</script>

<style scoped></style>
