<script setup>

import { ref } from "vue"; const color = ref(transparent);
const cambiarColor = () => { color.value = color.value === "transparent" ? "red" : "transparent";

}

</script>


<template>
    <div class="container">
    <img src='/src/components/icons/Image20231205125028.png' alt="heart transp" />
    <button @click="cambiarColor">
      <img: src="color === 'transparent' ? '/src/components/icons/Image20231205125028.png' : '/src/components/icons/corazon.png'" alt="heart" />
    </button>
  </div>
</template>

  <style lang="scss" scoped>
.container {
  display: flex; 
 
  align-items: center; 
}
</style>
	