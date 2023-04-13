import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

import App from './App.vue'
// import router from './router'

import './assets/styles/main.scss'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoChevronDoubleRight,
  CoChevronDoubleLeft,
  CoNewspaper,
  LaMusicSolid,
  BiShop,
  BiTicketPerforated,
  RiShoppingBasketLine,
  BiTrash,
  CoJavascript,
  CoTypescript,
  CoVueJs,
  CoReact,
  CoGatsby,
  CoElectron,
  CoGit,
  CoSassAlt,
  CoNextJs,
  CoGithub,
  CoInstagram,
  CoLinkedin,
  SiFiverr,
  BiMailbox,
  CoFacebook,
  CoYoutube,
  HiSolidMenuAlt1
} from 'oh-vue-icons/icons'

addIcons(
  CoChevronDoubleRight,
  CoChevronDoubleLeft,
  CoNewspaper,
  LaMusicSolid,
  BiShop,
  BiTicketPerforated,
  RiShoppingBasketLine,
  BiTrash,
  CoJavascript,
  CoTypescript,
  CoVueJs,
  CoReact,
  CoGatsby,
  CoElectron,
  CoGit,
  CoSassAlt,
  CoNextJs,
  CoGithub,
  CoInstagram,
  CoLinkedin,
  SiFiverr,
  BiMailbox,
  CoFacebook,
  CoYoutube,
  HiSolidMenuAlt1
)

const app = createApp(App)

const pinia = createPinia()
const installPersistedStatePlugin = createPersistedStatePlugin()
pinia.use((context) => installPersistedStatePlugin(context))

app.use(pinia)
// app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
