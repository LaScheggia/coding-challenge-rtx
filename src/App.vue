
<template>
  <div class="">
    <NavBar/>

    <div class="">
      <router-view/>
    </div>
    
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
  @import './assets/style/main.css';
  @import url('https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&display=swap');
</style>