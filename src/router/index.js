import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import First from '../components/First.vue'
import Video from '../components/Video.vue'
import Swipertest from '../components/Swipertest.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/first', name: 'First', component: First },
  { path: '/video', name: 'Video', component: Video },
  { path: '/Swipertest', name: 'Swipertest', component: Swipertest }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router