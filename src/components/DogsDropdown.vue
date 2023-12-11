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
        const apiDogs = new ApiDogs();
        const dogBreeds = await apiDogs.getAll();
        this.dogBreeds = dogBreeds.map(breed => breed.name);
      } catch (error) {
        console.error('Error al obtener las razas de perros:', error);
      }
    }
  }
};

class ApiDogs {
  #Url;

  constructor() {
    this.#Url = 'https://dog.ceo/api/breeds/list/all';
  }

  async getAll() {
    const response = await fetch(this.#Url);
    const json = await response.json();

    let charactersPure = [];
    let charactersReturn = [];

    
    for (const breed in json.message) {
      const breedResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const breedJson = await breedResponse.json();

      charactersPure.push({
        name: breed,
        image: breedJson.message
      });
    }

    for (const character of charactersPure) {
      const characterToAdd = {
        name: character.name,
        image: character.image,
        
      };

      charactersReturn.push(characterToAdd);
    }

    return charactersReturn;
  }
}
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

select:hover {
  color: bisque;
}
</style>
