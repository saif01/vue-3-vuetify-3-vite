import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./../views/Dashboard.vue')
    },
    {
      path: '/date-picker',
      name: 'DatePicker',
      component: () => import('../views/pages/date-picker/index.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/pages/test/index.vue')
    },
    {
      path: '/test-2',
      name: 'Test2',
      component: () => import('../views/pages/test2/index.vue')
    },
  ]
})

export default router
