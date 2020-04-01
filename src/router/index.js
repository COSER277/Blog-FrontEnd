import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/articles',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articles.vue')
  },
  {
    path: '/articles/:id',
    component: () => import(/* webpackChunkName: "about" */ '../components/ArticleDetail.vue'),
    props: true
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "about" */ '../views/Archive.vue')
  },
  {
    path: '/codes',
    name: 'code',
    component: () => import(/* webpackChunkName: "about" */ '../views/Code.vue')
  },
  {
    path: '/sources',
    name: 'source',
    component: () => import(/* webpackChunkName: "about" */ '../views/Source.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
