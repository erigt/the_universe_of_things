<script setup>

</script>
<template>
	<div id="app">
		<img v-on:click="toggleLike"  src="like ? require('@/assets/components/icons/icon-I-like.png'): require('@/assets/components/icons/icon-heart-red.png')"  :class= "like ? 'img-like': 'image-normal' " alt ="Me gusta">
		
		
	</div>
</template>


<script setup>

export default {
	name: "app",
	data() {
		return {
			like: false
		};
	},
	methods: {
		toggleLike() {
			this.like = !this.like;
		}
	}
	
};
</script>

<style lang="scss" scoped>
img {
	width: 50px;
	height: 15px;
}
.img-normal {
	filter: grayscale(100%);
    position: absolute;
    right: 0;
    width: 50px;
    height: 15px;
    top: 0;
}
.img-like {
	filter: none;
    position: absolute;
    right: 0;
    width: 50px;
    height: 15px;
    top: 0;
}




</style>