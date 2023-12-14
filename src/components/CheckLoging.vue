<template>
  <div>
    <img
      :src="corazonSrc"
      alt="Corazón"
      @click="manejarClicCorazon"
    />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useAuthStore } from '../assets/store/auth';
import { useRouter, useRoute } from 'vue-router';


const { user, addToFavorites } = useAuthStore();
const router = useRouter();
const route = useRoute();

const corazonTransparente = ref(true);
const corazonSrc = ref("/src/components/icons/Image20231205125028.png");

const cambiarColor = () => {
  corazonTransparente.value = !corazonTransparente.value; 
};

const manejarClicCorazon = () => {
  if (user.isAuthenticated) {
    cambiarColor();
    const breed = 'Nombre de la raza'; 
    const image = 'URL de la imagen'; 
    addToFavorites({ breed, image });
  } else {
    const redirectPath = route.fullPath;
    router.push(`/login?redirect=${redirectPath}`);
  }
};

watchEffect(() => {
  corazonSrc.value = corazonTransparente.value
    ? "/src/components/icons/Image20231205125028.png"
    : "/src/components/icons/corazon.png";
});
</script>
