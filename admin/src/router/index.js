import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../App.vue'
import Layout from '../views/Main.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: Layout },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router