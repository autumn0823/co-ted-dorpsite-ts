<script setup>
import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'
import MainVisual from './components/MainVisual.vue'
import MisionVisionValue from './page/MisionVisionValue.vue'
import RepresentativeMessge from './components/RepresentativeMessge.vue'
import BussinessType from './page/BussinessType.vue'
import AboutCompany from './page/AboutCompany.vue'
</script>

<template>
  <div class="wrap">
    <HeaderContainer />
    <main>
      <MainVisual />
      <MisionVisionValue />
      <RepresentativeMessge />
      <BussinessType />
      <AboutCompany />
    </main>
    <FooterContainer />
  </div>
</template>

<style>
  @import './assets/css/normalize.css';
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: white;
  }
  img {
    width: 100%;
  }
  body, h1, h2, h3, h4, h5, a, ul, li, p {
    margin: 0;
    padding: 0;
    color: #2D0425;
    font-family: serif;
  }
  ul, li {
    list-style: none;
  }
  .section-title {
        margin: 80px 0;
        padding: 1rem 2rem;
        border: 1px solid #2D0425;
        display: inline-block;
    }
    .max-width-1280 {
      max-width: 1280px;
        margin: 100px auto;
    }
    #app {
      padding: 0;
      max-width: none;
    }
</style>
