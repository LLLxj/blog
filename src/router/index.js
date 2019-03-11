import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/views/dashboard/index'

Vue.use(Router)

export const constantRouterMap = [
    {
      component: dashBoard,
      path: '/',
      name: 'mains',
      redirect: { name: 'home' },
      // component: () => import('@/views/dashboard/index'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index'),
        },
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/index'),
    },
]

const asyncRouterMap = [
  
 

  
]

// 临时处理路由权限 全部可以访问
const allRoyterMap = constantRouterMap.concat(asyncRouterMap)
export default new Router({
  // mode: 'history', //后端支持可开
  routes: allRoyterMap
})
