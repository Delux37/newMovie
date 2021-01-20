import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import movieDetail from '../components/movieDetail.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/movie/:id', component: movieDetail, name:'movieDetail'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
