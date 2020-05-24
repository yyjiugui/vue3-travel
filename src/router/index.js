import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test/Test.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/city/City.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
