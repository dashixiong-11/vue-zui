<template>
  <div class='api-table'>
    <table>
      <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>First name</td>
        <td>Last name</td>
        <td>Last name</td>
        <td>Last name</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='ts'>
type TableData = {
  name: string,
  explain: string,
  type: string,
  default: string
}

interface Props {
  tableData: TableData[]
}

</script>

<style lang='scss' scoped>
.api-table {
  table{
    width: 100%;
    th {
      text-align: start;
    }
  }
}
</style>