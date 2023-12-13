<script>
export default {
  data() {
    return {
      dogBreeds: [],
      selectedBreed: null,
      selectedBreedImages: []
    };
  },
  mounted() {
    this.getDogBreeds();
  },
  watch: {
    selectedBreed() {
      this.getImagesByBreed();
    }
  },
  methods: {
    async getDogBreeds() {
      try {
        const apiDogs = new ApiDogs();
        const dogBreeds = await apiDogs.getAll();
        this.dogBreeds = dogBreeds.map(breed => breed.name);
      } catch (error) {
        console.error('Error al obtener las razas de perros:', error);
      }
    },
    async getImagesByBreed() {
      try {
        const apiDogs = new ApiDogs();
        const breedImages = await apiDogs.getBreedImages(this.selectedBreed);
        this.selectedBreedImages = breedImages;
      } catch (error) {
        console.error('Error al obtener las imágenes de la raza:', error);
      }
    }
  }
};

class ApiDogs {
  #BaseUrl;

  constructor() {
    this.#BaseUrl = 'https://dog.ceo/api/';
  }

  async getAll() {
    const response = await fetch(`${this.#BaseUrl}breeds/list/all`);
    const json = await response.json();

    let breeds = [];

    for (const breed in json.message) {
      breeds.push({
        name: breed
      });
    }

    return breeds;
  }

  async getBreedImages(breed) {
    const response = await fetch(`${this.#BaseUrl}breed/${breed}/images/random/1`);
    const json = await response.json();

    return json.message;
  }
}
</script>

<template>
  <div>
    <label for="dogBreed">Selecciona una raza:</label>
    <select id="dogBreed" v-model="selectedBreed">
      <option v-for="breed in dogBreeds" :key="breed" :value="breed">{{ breed }}</option>
    </select>

    <div v-if="selectedBreedImages.length > 0">
      <h2>Fotos de la raza seleccionada:</h2>
      <div v-for="image in selectedBreedImages" :key="image">
        <img :src="image" alt="Dog Image" style="max-width: 300px; margin: 10px;">
      </div>
    </div>
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
  
  width: 20%;
  padding: 7px;
  
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

select:hover {
  color: bisque;
}
</style>
