
<script>
import { defineProps } from 'vue';
const props = defineProps({
    dog: Object
})
export default {
  data() {
    return {
      dogBreeds: [],
      selectedBreed: null
    };
  },
  mounted() {
    
    this.getDogBreeds();
  },
  methods: {
    async getDogBreeds() {
      try {
        
        const response = await this.$axios.get('https://api.thedogapi.com/v1/breeds');
        
        
        this.dogBreeds = response.data.map(breed => breed.name);
      } catch (error) {
        console.error('Error al obtener las razas de perros:', error);
      }
    }
  }
};
</script>
<template>
    <div>
      <label for="dogBreed">Selecciona una raza :</label>
      <select id="dogBreed" v-model="selectedBreed">
        <option v-for="breed in dogBreeds" :key="breed" :value="breed">{{ breed }}</option>
      </select>
    </div>
  </template>
  <style scoped>
  /* Agrega estilos según sea necesario */
  </style>