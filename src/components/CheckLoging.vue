<script setup>

import { ref } from 'vue';

const corazonTransparente = ref(true);

const cambiarColor = () => {
  corazonTransparente.value = !corazonTransparente.value;
};

import { ref } from 'vue';

const usuarioLogeado = ref(false);

const manejarClicCorazon = () => {
  if (usuarioLogeado.value) {
    cambiarColor();
  } else {
    abrirFormulario();
  }
};


const abrirFormulario = () => {
  

  console.log("Abrir formulario de inicio de sesión");
};

const corazonSrc = ref("/src/components/icons/Image20231205125028.png");

// Actualiza la fuente del corazón según el estado de autenticación
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
