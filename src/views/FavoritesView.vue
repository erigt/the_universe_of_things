<template>
  <div>
    <h2>Favorites</h2>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.breed">
        <p>{{ favorite.breed }}</p>
        <img :src="favorite.image" :alt="favorite.breed" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useAuthStore } from '../assets/store/auth';

const { user } = useAuthStore();
const favorites = ref([]);


watchEffect(() => {
  favorites.value = user.favorites;
});
</script>
