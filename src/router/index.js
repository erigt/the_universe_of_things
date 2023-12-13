import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import LoginView from '../views/LoginView.vue'
import PerretesView from '../views/PerretesView.vue'
import { useAuthStore } from '../assets/store/auth'

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
      component: FavoritesView,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login', 
      component: LoginView
    },
    {
      path: '/perretes',
      name: 'perretes', 
      component: PerretesView
    },
    
  ]
})
router.beforeEach( (to,from) =>{
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.user.isAuthenticated){
    return { name: 'login'}
  }
})

export default router
