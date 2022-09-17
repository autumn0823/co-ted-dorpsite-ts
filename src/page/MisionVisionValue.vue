<template>
    <section id="section-01" class="mvv-container">
        <MisionText :h2="h2" :h3="h3" :p="p"/>
        <MisionText :className="className" :h2="h22" :h3="h32" :p="p2"/>
        <MisionText :h2="h23" :h3="h33" :p="p3"/>
    </section>
</template>
<script lang="ts" setup>
import MisionText from '../components/MisionText.vue'

const h2 = 'Mission'
const h3 = '日本を強くし、刺激のある社会にする'
const p = ['日本国を経済、エネルギー、地政等の観点から強化し後世に戦うための資源と人材を遣す']

const h22 = 'Vision'
const h32 = '挑戦できる社会に'
const p2 = ['やるべきこと、やりたいこと、新しいことに挑戦できる社会に']
const className = 'mvv-item-right'

const h23 = 'Value'
const h33 = '「キョウソウ」と「シンカ」の追求'
const p3 = ['共創しているか  真価しているか', '競争しているか  深化しているか', '共想しているか  進化しているか']
</script>
<style scoped>
</style>
