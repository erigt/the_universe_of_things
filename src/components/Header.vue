<script setup></script>


	<template>
		<header>
		<img src="/src/assets/LogoSample_ByTailorBrands (1) 1.png" alt="Logo">
	

		<nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Login">Login</RouterLink>
      <RouterLink to="/Favorites">Favorites</RouterLink>
    </nav>

	</header>
</template>

<style lang="scss" scoped>

header {
	background-color: #89EE99;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
	height: 150px;
	width: 150px;
}
nav {
	width: 12rem;
	display: flex;
	justify-content: space-around;

	a {
		text-decoration: none;
	}
	
}

}



</style>