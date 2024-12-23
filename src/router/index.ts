import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/index.vue')
  },
  {
    path: '/password-detail/:id',
    name: 'PasswordDetail',
    component: () => import('../views/home/detail.vue')
  },
  {
    path: '/add-password',
    name: 'AddPassword',
    component: () => import('../views/home/add.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 