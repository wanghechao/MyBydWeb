import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// component: () => import('../views/AboutView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:'/',
          component:() => import('@/views/LayOut/CarShow.vue')
        },
        {
          path:'/WangCar',
          component:() => import('@/views/LayOut/WangCarShow.vue')
        },
        {
          path:'/HaiCar',
          component:() => import('@/views/LayOut/HaiCarShow.vue')
        },
        {
          path:'/login',
          component: () => import('@/views/User/UserLogin.vue')
        },
        {
          path:'/user',
          component:() => import('@/views/User/AboutUser.vue')
        }
      ]
    },
    
  ]
})

export default router
