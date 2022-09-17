import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BussinessType from '../page/BussinessType.vue'
import AboutCompany from '../page/AboutCompany.vue'
import HeaderContainer from '../components/HeaderContainer.vue'
import MisionVisionValue from '../page/MisionVisionValue.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/aboutCompany',
    name: 'AboutCompany',
    component: AboutCompany
  },
  {
    path: '/headerContainer',
    name: 'HeaderContainer',
    component: HeaderContainer
  },
  {
    path: '/misionVisionValue',
    name: 'MisionVisionValue',
    component: MisionVisionValue
  },
  {
    path: '/',
    name: 'BussinessType',
    component: BussinessType
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
