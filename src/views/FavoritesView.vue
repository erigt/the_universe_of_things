<script setup>
import Pagination from '@/components/Pagination.vue';


</script>

<template>
  <Pagination/>
  <ApiPerretes/>
</template>

<style lang="scss" scoped>

main {
    background-color:#F4C3A0;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    padding: 0.5%;
   
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
    align-items: center;
}
p  {
    margin-block-start: 0.5% !important;
    margin-block-end:0.5% !important;
}

.heart {
    height: 25px;
    width: 25px;
    padding: 0.5%;

}
.heart2 {
    height: 27.5px;
    width: 27.5px;
    display: none;

}
.container-img {
    display: flex;
    justify-content: end;
    align-items: end;

}

 .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0.5%;

} 


</style>