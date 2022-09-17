<template>
    <div>
      <div class="business-type-container">
        <div class="business-type-text">
          <h3 class="business-type-name color-white">{{ h3 }}</h3>
          <p class="business-type-description color-white">{{ p }}</p>
          <li class="business-type-li color-white" v-for="item in items" :key="item">{{ item }}</li>
        </div>
        <div class="business-type-img">
          <img :src="require(`@/assets/img/${h3}.png`)" alt="コンサル事業">
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    h3: string
    p: string
    items: string[]
  }>(),
  {
    h3: '',
    p: '',
    items: () => ['a', 'b']
  }
)

</script>
<script lang="ts">
export default {
  name: 'imageTextArea'
}
</script>
<style>
.business-type-container {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        margin: 40px 0;
    }
    .business-type-text {
        position: absolute;
        width: 60%;
        padding: 0 2rem;
    }
    .business-type-name {
        font-size: 32px;
        line-height: 32px;
        margin: 1rem 0;
        font-weight: bold;
    }
    .business-type-description {
        line-height: 2;
        margin: .5rem;
    }
    .business-type-li {
        line-height: 2;
    }
    .color-white {
        color: white!important;
    }
    .business-type-img {
        width: 60%;
        display: block;
        margin: 0 auto;
    }
</style>
