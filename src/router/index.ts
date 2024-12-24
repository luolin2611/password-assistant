import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: () => import('../views/profile/edit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 