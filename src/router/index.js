import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/boards',
      name: 'boards',
      component: () => import('../views/BoardsPage.vue')
      // meta: {
      //   layout: 'default-layout'
      // }
    }
  ]
})
