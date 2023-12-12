<script setup>

import { ref } from 'vue';

const corazonTransparente = ref(true);
const cambiarColor = () => {
  corazonTransparente.value = !corazonTransparente.value;
};
const store = useAuthStore()

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
};

const corazonSrc = ref("/src/components/icons/Image20231205125028.png");

watchEffect(() => {
  corazonSrc.value = corazonTransparente.value
    ? "/src/components/icons/Image20231205125028.png"
    : "/src/components/icons/corazon.png";
});
</script>

<template>
<div>
    <img
      v-if="corazonTransparente"
      :src="require('/src/components/icons/Image20231205125028.png')"
      alt="Corazón Transparente"
      @click="cambiarColor"
    />
    <img
      v-else
      :src="require('/src/components/icons/corazon.png')"
      alt="Corazón Rojo"
      @click="cambiarColor"
    />
  </div>

</template>

<style>
img {
  width: 50px;
  cursor: pointer;
}
</style>
