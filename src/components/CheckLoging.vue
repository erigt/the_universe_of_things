<script setup>
import { watchEffect} from 'vue';
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useAuthStore } from '../assets/store/auth';
import { useChangeHeart } from '../src/models/perrete/ChangeHeart.js';

const {
  

  
} = useChangeHeart();

const username = ref('');
const password = ref('');
const store = useAuthStore()
const router = useRouter();
const route = useRoute();
const corazonTransparente = ref(true);
const cambiarColor = () => {
  corazonTransparente.value = !corazonTransparente.value; 
};

const usuarioLogeado = ref(false);

const manejarClicCorazon = () => {
  if (usuarioLogeado.value) {
    cambiarColor();
  } else {
    abrirFormulario();
  }
};

const abrirFormulario = () => {
  if (username.value == store.user.username&&password.value == store.user.password){
    store.user.isAuthenticated = false
    const redirectPath = route.query.redirect || '/loging'
    router.push(redirectPath)


  console.log("Abrir formulario de inicio de sesión");
  }};

const corazonSrc = ref("/src/components/icons/Image20231205125028.png");

watchEffect(() => {
  corazonSrc.value = corazonTransparente.value
    ? "/src/components/icons/Image20231205125028.png"
    : "/src/components/icons/corazon.png"
});

</script>

<template>
<div>
    <img
      v-if="corazonTransparente"
      :src="'/src/components/icons/Image20231205125028.png'"
      alt="Corazón Transparente"
      @click="manejarClicCorazon"
    />
    <img
      v-else
      :src="require('/src/components/icons/corazon.png')"
      alt="Corazón Rojo"
      @click="manejarClicCorazon"
    />
  </div>

</template>

<style>
img {
  width: 50px;
  cursor: pointer;
}
</style>
