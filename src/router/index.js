import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites', 
      component: FavoritesView
    },
    {
      path: '/login',
      name: 'login', 
      component: LoginView
    },
    
  ]
})

export default router
