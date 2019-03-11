import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/views/dashboard/index'

Vue.use(Router)

export const constantRouterMap = [
    {
      component: dashBoard,
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
    },
]

const asyncRouterMap = [
  
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/index'),
  },
]

// 临时处理路由权限 全部可以访问
const allRoyterMap = constantRouterMap.concat(asyncRouterMap)
export default new Router({
  // mode: 'history', //后端支持可开
  routes: allRoyterMap
})
