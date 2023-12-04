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
            <h4>{{ dog.breed }}</h4>
            <img v-bind:src="dog.image" :alt="dog.breed" srcset="">
        </div>

    </main>
    <Pagination />
</template>

<style lang="scss" scoped></style>