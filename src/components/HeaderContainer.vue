<template>
    <section class="header-container max-width-1280">
        <h1 class="header-logo">
            <img src="../assets/img/headerLogo.png" alt="OASIS logo">
        </h1>
        <nav class="header-menu navbar navbar-expand-md">
            <!-- <li class="nav-item"><a class="nav-link" href="#section-01">会社概要</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-02">代表メッセージ</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-03">事業内容</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-04">お問い合わせ</a></li> -->
            <li class="nav-item" v-for="data in data" :key="data">
                <a class="nav-link" :href="data.href">{{ data.value }}</a>
            </li>
        </nav>
    </section>
</template>
<script lang="ts" setup>
const data = [
  {
    value: '会社概要',
    href: '#section-01'
  },
  {
    value: '代表メッセージ',
    href: '#section-02'
  },
  {
    value: '事業内容',
    href: '#section-03'
  },
  {
    value: 'お問い合わせ',
    href: '#section-04'
  }
]
</script>
<style scoped>
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        margin: 0 auto;
    }
    .header-logo {
        margin: .5rem 1rem;
    }
    .header-menu {
        display: flex;
        align-items: center;
        list-style: none;
    }
    .nav-item {
        margin: 0 1rem;
    }
</style>
