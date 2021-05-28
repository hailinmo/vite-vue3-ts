import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Layout from '@/pages/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'layout',
      path: '',
      component: Layout,
      children: [
        {
          name: 'home',
          path: '/home',
          component: Home,
        },
        {
          name: 'database',
          path: '/database',
          component: () => import('@/views/database/index.vue'),
        },
        {
          name: 'count',
          path: '/count',
          component: () => import('@/views/count/index.vue'),
        },
      ],
    },
  ],
})

export default router
