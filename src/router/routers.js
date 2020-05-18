const routers =
  [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/errorPage/404.vue')
    },
    {
      path: '/404',
      name: 'axios',
      component: () => import('@/views/errorPage/404.vue')
    }
  ]

export default routers
