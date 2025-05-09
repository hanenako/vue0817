import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Introduce from '../components/Introduce.vue'
import Video from '../components/Video.vue'
import Swipertest from '../components/Swipertest.vue'
import IntroSite from '../components/Introduce/IntroSite.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/introduce', name: 'Introduce', component: Introduce },
  { path: '/video', name: 'Video', component: Video },
  { path: '/Swipertest', name: 'Swipertest', component: Swipertest },
  { path: '/Introduce/IntroSite', name: 'IntroSite', component: IntroSite }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router