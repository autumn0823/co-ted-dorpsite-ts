<template>
  <section id="section-04" class="max-width-1280">
    <div class="section-title">
      <h2>会社概要</h2>
    </div>
    <div class="table-container">
      <table class="table">
        <tr v-for="(tableData, index) in tableData" :key="index">
          <th class="th" :class="tableData.className">{{ tableData.itemName}}</th>
          <td class="td" :class="tableData.className">{{ tableData.value }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>
<script lang="ts" setup>
const tableData = [
  {
    itemName: '会社名',
    value: '株式会社 Co-ted',
    className: 'item1'
  },
  {
    itemName: '所在地',
    value: '〒102-0072\n東京都千代田区九段南1丁目5番6号 りそな九段ビル5F KSフロア',
    className: 'item2'
  },
  {
    itemName: '設立日',
    value: '2022年3月1日',
    className: 'item3'
  },
  {
    itemName: '資本金',
    value: '120万円',
    className: 'item3'
  },
  {
    itemName: '代表取締役',
    value: '大谷 光輝',
    className: 'item4'
  }
]
</script>
<style>
    .table-container {
      margin: 0 auto;
      text-align: left;
    }
    .table {
      color: #2D0425;
      margin: 0 auto
    }
    .th,
    .td {
        padding: 1rem;
        border-bottom: 1px solid #2D0425;
    }
    .td {
        border-left: 1px solid #2D0425;
    }
    .item2 {
        white-space: pre-wrap;
    }
    .item4 {
        border-bottom: unset!important;
    }
</style>
