import { createRouter, createWebHistory } from 'vue-router'
import AddCategory from '../views/Category/AddCategory'
import ListCategory from '../views/Category/ListCategory'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/admin/category/create',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/list',
    name: 'ListCategory',
    component: ListCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router