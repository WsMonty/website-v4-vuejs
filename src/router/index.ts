import { createRouter, createWebHistory } from 'vue-router'
import ChromaMusic from '@/components/music/ChromaMusic.vue'
import MusicView from '@/views/MusicView.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: MusicView
  },
  {
    path: '/chroma',
    name: 'chroma',
    component: ChromaMusic
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
