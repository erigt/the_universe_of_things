<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'








</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>
  </header>
  

  
  
  
  <RouterView />

  <Footer />
  

  

</template>

<style lang="scss" scoped>

</style>
