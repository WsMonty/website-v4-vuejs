import { createRouter, createWebHistory } from 'vue-router'
import ChromaMusic from '@/components/music/ChromaMusic.vue'
import MusicView from '@/views/MusicView.vue'
import BlogPage from '@/BlogPage.vue'
import DeveloperView from '@/views/DeveloperView.vue'
import CashflowingPrivacyPolicy from '@/CashflowingPrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Music',
    component: MusicView
  },
  {
    path: '/developer',
    name: 'Developer',
    component: DeveloperView
  },
  {
    path: '/chroma',
    name: 'Chroma',
    component: ChromaMusic
  },
  {
    path: '/cashflowing',
    name: 'Cashflowing Privacy Policy',
    component: CashflowingPrivacyPolicy
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
