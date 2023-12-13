<script setup>
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useAuthStore } from '../assets/store/auth';



const username = ref('');
const password = ref('');
const store = useAuthStore()

const router = useRouter();
const route = useRoute();


function login() {
  if (username.value == store.user.username&&password.value == store.user.password){
    store.user.isAuthenticated = true
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } else {
    const redirectPath = route.query.redirect || '/login'
    router.push(redirectPath)
  }
}

</script>

<template>
    <div class="login-container">
        <img class="logo" src="/src/assets/images/LogoSample_ByTailorBrands (1) 2.png">
    
    <form class="login-form" @submit.prevent="login">
      <label for="username">User:</label>
      <input class="input-field" type="text" v-model="username" required>
      
      <label for="password">Password:</label>
      <input class="input-field" type="password" v-model="password" required>
      
      <button  class="login-button" type="submit">Login</button>
    </form>
  </div>

</template>
<style scoped>
.logo{
    width:40%;
    margin-left: 28%;
}

.login-container {

  width: 450px;
  height: 400px;
  margin: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, rgb(148, 243, 185) 0%, rgb(79, 225, 245) 100%);
}

.login-form {
  display: flex;
  flex-direction: column;
  padding:10px ;
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
  background-color: #45a049;
}

</style>