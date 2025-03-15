import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/login/index.vue'),
    meta: { public: true }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { showTabBar: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/account/register/index.vue'),
    meta: { public: true }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/account/forgot/index.vue'),
    meta: { public: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/account/profile/index.vue'),
    meta: { showTabBar: true }
  },
  {
    path: '/password-detail/:id',
    name: 'PasswordDetail',
    component: () => import('@/views/home/detail.vue')
  },
  {
    path: '/add-password',
    name: 'AddPassword',
    component: () => import('@/views/home/add.vue')
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: () => import('@/views/account/profile/edit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  const isPublicPage = to.meta.public
  
  if (isPublicPage && isLoggedIn) {
    next('/home')
    return
  }
  
  if (!isPublicPage && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router 