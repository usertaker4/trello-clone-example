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
      component: () => import('../views/Home.vue'),
      meta: {
        layout: 'general-layout'
      }
    },
    {
      path: '/boards',
      name: 'boards',
      component: () => import('../views/BoardsPage.vue'),
      meta: {
        layout: 'general-layout'
      }
    },
    {
      path: '/board/:id',
      name: 'board',
      props: true,
      component: () => import('../views/BoardPage.vue')
    }
  ]
})
