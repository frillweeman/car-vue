import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Audio from "@/views/Audio"
import Terminal from "@/views/Terminal"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/audio',
    name: "Audio",
    component: Audio
  },
  {
    path: '/ssh',
    name: "SSH",
    component: Terminal
  },
  {
    path: '/settings',
    name: "Settings",
    component: null
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
