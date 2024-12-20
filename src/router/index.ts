import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/password-detail/:id',
    name: 'PasswordDetail',
    component: () => import('../views/PasswordDetail.vue')
  },
  {
    path: '/add-password',
    name: 'AddPassword',
    component: () => import('../views/AddPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 