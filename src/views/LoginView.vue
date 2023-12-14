<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../assets/store/auth';

const { user, login } = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref('');
const password = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  try {
    await login(username.value, password.value);
    const redirectPath = route.query.redirect || '/';
    router.push(redirectPath);
  } catch (error) {
    console.error('Error during login:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="login-container">
    <img class="logo" src="/src/assets/images/LogoSample_ByTailorBrands (1) 2.png">
    <form class="login-form" @submit.prevent="handleSubmit">
      <label for="username">User:</label>
      <input class="input-field" type="text" v-model="username" required>
      <label for="password">Password:</label>
      <input class="input-field" type="password" v-model="password" required>
      <button class="login-button" type="submit" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </div>
</template>




<style scoped>
body {
  margin: 0;
}
.logo{
    width:40%;
    margin-left: 28%;
}
.login-container {
  justify-content: center;
  width: 450px;
  height: 400px;
  margin:5%;
  margin-left: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, rgb(148, 243, 185) 0%, rgb(79, 225, 245) 100%);
}
.login-form {
  display: flex;
  flex-direction: column;
  padding:20px ;
}
.input-field {
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.login-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width:30%;
  margin-left: 35%;
  margin-top: 10%;
}
.login-button:hover {
  background-color: #45A049;
}
</style>

