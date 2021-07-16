<template>
  <n-button type="primary" @click="refreshData">刷新</n-button>
  <n-data-table :data="tableData" :columns="columns" style="width: 100%">
  </n-data-table>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue'
const data = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
]
const data2 = [
  {
    date: '2016-05-05',
    name: '王大虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-05',
    name: '王大虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
]
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
