<script setup>
import { ref, reactive, onBeforeMount, onMounted } from 'vue';
import Pagination from '@/components/Pagination.vue';
import Perretes from '../models/perrete/Perrete';


let dogs = reactive([])

onBeforeMount(async () => {
    const uri = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(uri)
    const data = await response.json()

    
    for (const breed in data.message) {
        let uriImg = `https://dog.ceo/api/breed/${breed}/images`
        const response = await fetch(uriImg)
        const data = await response.json()

        let dog = new Perretes(breed, data.message[0])
        dogs.push(dog)
    }

})

</script>

<template>
    <main>

        <div class="card" v-for="dog in dogs">
            <h4 class="breed">{{ dog.breed }}</h4>
            <img class="img" v-bind:src="dog.image" :alt="dog.breed" srcset="">
        </div>

    </main>
    <Pagination />
</template>

<style lang="scss" scoped>

main {
    background-color:#F4C3A0;
}
.breed {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: medium;
    font-weight: bold;
}
.img {
    height: 200px;
    width: 200px;
}

.card {
    display: grid;
	grid-template-columns: 25px 25px 25px;
	grid-template-rows: 30px 30px 30px;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	margin: 3%;
	padding: 5%;
}


</style>