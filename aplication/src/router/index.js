import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/af',
    name: 'Af',
    // route level code-splitting
    // this generates a separate chunk (af.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "af" */ '../views/Af.vue')
    }
  },
  {
    path: '/appfinanceiro',
    name: 'appfinanceiro',
    // route level code-splitting
    // this generates a separate chunk (af.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "appfinanceiro" */ '../views/appFinanceiro.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
