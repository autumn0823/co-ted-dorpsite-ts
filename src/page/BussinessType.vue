<template>
    <section id="section-03" class="business-type max-width-1280">
        <div class="section-title">
            <h2>事業内容</h2>
        </div>
        <imageTextArea :h3="h3" :p="p" :items="a"/>
        <imageTextArea :h3="h32" :p="p2" :items="a2"/>
        <imageTextArea :h3="h33" :p="p3" :items="a3"/>
    </section>
</template>
<script lang="ts" setup>
import imageTextArea from '../components/imageTextArea.vue'

const h3 = 'コンサルティング事業'
const p = '各分野のトップコンサルタントがお客様の悩み発見から解決まで伴走型で承ります。'
const a = ['新規事業コンサルティング', '戦略コンサルティング', 'ブランドコンサルティング', 'マーケティングコンサルティング', '業務改善コンサルティング', 'ＧＸコンサルティング']

const h32 = 'リスクマネジメント事業'
const p2 = '昨今、環境問題や自然災害、経済安全保障等、企業を取り巻く環境はより一層厳しくなりました。当社ではそのようなお客様をサポートするために会社全体から部門単位での支援を行っております。'
const a2 = ['全社的リスクマネジメント（ERM）', '事業継続計画（BCP）', 'サイバーセキュリティ', 'ESG/CSR', '経済安全保障']

const h33 = '教育事業'
const p3 = '国際情勢・外交・安全保障の勉強やニュース、セミナー等の情報をWebサイト内にてワンストップで確認できるオンライン学習プラットフォーム「OASIS」を運営しております。'
const a3 = ['国際情勢、外交、安全保障を学ぶオンラインプラットフォーム「OASIS」']

</script>
<style>
</style>
