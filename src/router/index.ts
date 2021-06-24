import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Layout from '@/pages/layout/index.vue'

const routes = [
  {
    name: 'layout',
    path: '/layout',
    redirect: '/',
    component: Layout,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home,
      },
      // {
      //   name: 'analysis',
      //   path: '/analysis',
      //   component: () => import('@/views/analysis/index.vue'),
      // },
      // {
      //   name: 'table',
      //   path: '/table',
      //   component: () => import('@/views/table/index.vue'),
      // },
      // {
      //   name: 'count',
      //   path: '/count',
      //   component: () => import('@/views/count/index.vue'),
      // },
      {
        name: '403',
        path: '/403',
        component: () => import('@/pages/error/403.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
