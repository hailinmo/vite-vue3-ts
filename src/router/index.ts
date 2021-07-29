import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Layout from '@/pages/layout/index.vue'

const commonRoutes: RouteRecordRaw[] = [
  {
    name: '403',
    path: '/403',
    meta: {
      title: '403',
    },
    component: () => import('@/pages/error/403.vue'),
  },
  {
    name: '404',
    path: '/:w+',
    meta: {
      title: '404',
    },
    component: () => import('@/pages/error/404.vue'),
  },
]

const menuRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'analysis',
    path: '/analysis',
    meta: {
      title: '统计',
    },
    component: () => import('@/views/analysis/index.vue'),
  },
  {
    name: 'table',
    path: '/table',
    meta: {
      title: '表格',
    },
    component: () => import('@/views/table/index.vue'),
  },
  {
    name: 'form',
    path: '/form',
    meta: {
      title: '表单',
    },
    component: () => import('@/views/form/index.vue'),
  },
  {
    name: 'test',
    path: '/test',
    meta: {
      title: '测试',
    },
    component: () => import('@/views/test/index.vue'),
  },
]

const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/layout',
    redirect: '/',
    component: Layout,
    children: menuRoutes,
  },
  ...commonRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { menuRoutes }
export default router
