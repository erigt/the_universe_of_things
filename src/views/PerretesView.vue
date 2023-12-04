<script setup>
import { ref, reactive, onBeforeMount, onMounted } from 'vue'

let perretes = reactive([])
let isLoaded = ref(false)

onBeforeMount( async () => {
    isLoaded.value = true
})


</script>

<template>
    <div id="perretes-world">
        <h1>Perretes</h1>

        <main class="flex-wrap">
            <div v-for="perrete in perretes" v-if="isLoaded" >
                <div class="card">
                    <img :src="perrete.image"  alt="...">
                    <div>
                        <p>{{ perrete.name }}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <span></span>
            </div>
        </main>

    </div>
</template>

<style lang="scss">
#perretes-world {
    text-align: center;

    .flex-wrap {
        display: flex;
        flex-wrap: wrap;
    }

    h1 {
        margin: 20px;
    }

    .card {
        max-width: 100px;
        min-height: 250px;
    }
}
</style>