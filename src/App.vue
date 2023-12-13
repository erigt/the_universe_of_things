<script setup>
import { RouterLink, RouterView } from 'vue-router'






</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Login">Login</RouterLink>
      <RouterLink to="/Favorites">Favorites</RouterLink>
    </nav>
  </header>
  <RouterView />

  



</template>

<style lang="scss" scoped>

</style>
