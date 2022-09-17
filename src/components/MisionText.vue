<template>
    <div>
      <div class="mvv-item" :class="className">
        <h2 class="mvv-title">{{ h2 }}</h2>
        <h3 class="mvv-sub-title">{{ h3 }}</h3>
        <p class="mvv-text" v-for="p in p" :key="p">{{ p }}</p>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    className: string
    h2: string
    h3: string
    p: string[]
  }>(),
  {
    className: '',
    h2: '',
    h3: '',
    p: () => ['']
  }
)

</script>
<script lang="ts">
export default {
  name: 'MisionText'
}
</script>
<style>
    .mvv-container {
        max-width: 1280px;
        margin: 100px auto;
    }
    .mvv-item {
        color: #2D0425;
        text-align: left;
    }
    .mvv-item-right {
        text-align: right;
    }
</style>
