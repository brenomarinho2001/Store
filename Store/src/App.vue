<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'





</script>

<template>
  <div class="site">
    <Header/>

    <RouterView :oi="oi"/>

    <Footer/>
  </div>
</template>

<style >
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  .site{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #1f1c23;
  }

 
</style>
