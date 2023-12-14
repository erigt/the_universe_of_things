<script setup></script>


	<template>
		<header>
		<img src="/src/assets/LogoSample_ByTailorBrands (1) 1.png" alt="Logo">
	

		<nav>
			<div class="nav-link">
      <RouterLink to="/">Home</RouterLink>
			</div>
			<div class="nav-link">
      <RouterLink to="/Login">Login</RouterLink>
			</div>
			<div class="nav-link">
      <RouterLink to="/Favorites">Favorites</RouterLink>
			</div>
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
	height: 125px;
	width: 125px;
	}
	nav {
		width: 22rem;
		display: flex;
		justify-content: space-around;

		a {
		text-decoration: none;
		margin: 0.6rem;
		
		}
		
	}

}



</style>