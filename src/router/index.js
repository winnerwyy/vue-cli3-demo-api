import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
Vue.use(Router)
const otherRoutes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "login" */ '@/views/auth/login')
  // },
  {
    path: '/404',
    name: 'error',
    component: () => import('@/views/errorPage/404')
  }, {
    path: '/500',
    name: 'error500',
    component: () => import('@/views/errorPage/500')
  },
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    name: 'notFound',
    hidden: true,
    component: () => import('@/views/errorPage/404')
  }
]
// export default new Router({
//   mode: 'history',
//   routes: routers
// })
// const appRoutes = routers
const routes = [...otherRoutes, ...routers]
const routerArr = new Router({
  mode: 'history',
  routes: routes
})
export default routerArr
