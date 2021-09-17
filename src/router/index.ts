import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Movies',
    name: 'Movies',
    component: require('@/views/Movies.vue').default
  },
  {
    path: '/Music',
    name: 'Music',
    component: require('@/views/Music.vue').default
  },
  {
    path: '/Books',
    name: 'Books',
    component: require('@/views/Books.vue').default
  },
  {
    path: '/About',
    name: 'About',
    component: require('@/views/About.vue').default
  },
  {
    path: '*',
    redirect: '/Movies'
  }
]

const router = new VueRouter({
  routes
})

export default router
