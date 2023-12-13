<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import DogsDropdown from '@/components/DogsDropdown.vue';







</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Login">Login</RouterLink>
      <RouterLink to="/Favorites">Favorites</RouterLink>
    </nav>
  </header>
  

  <DogsDropdown/>
  
  
  <RouterView />

  <Footer />
  


  

  <!-- <CheckLoging/> -->

 <Footer/>

</template>

<style lang="scss" scoped>

</style>
