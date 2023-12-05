
<script>

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

        const response = await this.$axios.get('https://dog.ceo/api/breeds/list/all');


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
div {
  margin: 20px;
}


label {
  display: flex;
  margin-bottom: 8px;
}

select {
  width: 30%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}

select :hover {
  color: bisque;
}
</style>