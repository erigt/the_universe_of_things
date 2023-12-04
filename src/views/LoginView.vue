<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const username = ref('');
const password = ref('');

const router = useRouter();

const login = () => {
  
  console.log("Usuario:", username.value);
  console.log("Contraseña:", password.value);
  console.log("Usuario autenticado:", username.value);
  router.push('/favorites');
}

</script>

<template>
    <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required>
      
      <label for="password">Password:</label>
      <input type="password" v-model="password" required>
      
      <button type="submit">Login</button>
    </form>
  </div>

</template>
<style scoped>

.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 10px;
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
}

.login-button:hover {
  background-color: #45a049;
}
</style>