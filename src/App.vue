<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import DogsDropdown from '@/components/DogsDropdown.vue';



</script>

<template>
  <Header/>

  <DogsDropdown/>
  
  <RouterView />
  
  <Footer/>



</template>

<style lang="scss" scoped>

</style>
