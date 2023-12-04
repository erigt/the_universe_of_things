<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginView from '../src/views/LoginView.vue'



</script>

<template>
  <Header/>
  
  <RouterView />
  
  <Footer/>

  <LoginView/>



</template>

<style lang="scss" scoped>

</style>
