<template>
  <div class="music" :class="{ 'music--active': musicWorld, 'music--close': !musicWorld }">
    <div v-if="musicWorld" class="music_mobile_topbar"></div>

    <div @click="handleOpenNavbar" class="hamburger" :class="{ hidden: developerWorld }">
      <v-icon name="hi-solid-menu-alt-1" scale="2.5"></v-icon>

      <div
        class="mobile_navbar"
        :class="{ 'mobile_navbar--active': state.mobileNavbar }"
        id="mobile_navbar"
        v-if="state.mobileNavbar"
      >
        <li v-if="state.mobileNavbarIcons">
          <a href="#news"><v-icon class="navbar--icon" name="co-newspaper" scale="2.5" /></a>
        </li>
        <li v-if="state.mobileNavbarIcons">
          <a href="#projects"> <v-icon class="navbar--icon" name="la-music-solid" scale="2.5" /></a>
        </li>
        <li v-if="state.mobileNavbarIcons">
          <a href="#concerts"
            ><v-icon class="navbar--icon" name="bi-ticket-perforated" scale="2.5"
          /></a>
        </li>
        <li v-if="state.mobileNavbarIcons">
          <a href="#shop"><v-icon class="navbar--icon" name="bi-shop" scale="2.5" /></a>
        </li>
        <li v-if="state.mobileNavbarIcons">
          <a href="#contact"><v-icon class="navbar--icon" name="bi-mailbox" scale="2.5" /></a>
        </li>
        <p v-if="state.mobileNavbarIcons" @click="handleCloseMobileNavbar">Close</p>
      </div>
    </div>
    <button v-if="!developerWorld" class="music_switch--btn" @click="handleChangeWorld">
      <v-icon class="music_switch--icon" name="co-chevron-double-right" scale="2" />
    </button>
    <HomeMusic />
    <NewsMusic />
    <ProjectsMusic />
    <ConcertsMusic />
    <ShopMusic />
    <ContactMusic />
  </div>
</template>

<script setup lang="ts">
import { useWorldStore } from '@/stores/world'
import HomeMusic from '@/components/music/HomeMusic.vue'
import NewsMusic from '../components/music/NewsMusic.vue'
import ProjectsMusic from '../components/music/ProjectsMusic.vue'
import ConcertsMusic from '../components/music/ConcertsMusic.vue'
import ShopMusic from '../components/music/ShopMusic.vue'
import ContactMusic from '@/components/music/ContactMusic.vue'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, watchEffect } from 'vue'

const store = useWorldStore()
const { showDeveloperWorld, hideMusicWorld } = store
const { developerWorld, musicWorld } = storeToRefs(store)

const state = reactive({ mobileNavbar: false, mobileNavbarIcons: false })

function handleChangeWorld() {
  showDeveloperWorld()
  hideMusicWorld()
}

function handleOpenNavbar() {
  if (state.mobileNavbar) {
    document.getElementById('mobile_navbar')?.classList.add('mobile_navbar--close')
    state.mobileNavbarIcons = false

    setTimeout(() => {
      state.mobileNavbar = false
      document.getElementById('mobile_navbar')?.classList.remove('mobile_navbar--close')
    }, 500)
    return
  }
  if (!state.mobileNavbar) {
    state.mobileNavbar = true
    setTimeout(() => {
      state.mobileNavbarIcons = true
    }, 500)
  }
}

function handleCloseMobileNavbar() {
  document.getElementById('mobile_navbar')?.classList.add('mobile_navbar--close')
  state.mobileNavbarIcons = false

  setTimeout(() => {
    state.mobileNavbar = false
    document.getElementById('mobile_navbar')?.classList.remove('mobile_navbar--close')
  }, 500)
}

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const targetElementId = window.location.hash.slice(1) // Remove the '#' from the hash
  if (targetElementId) {
    scrollToElement(targetElementId)
  }
})

watchEffect(() => {
  const targetElementId = window.location.hash.slice(1) // Remove the '#' from the hash
  if (targetElementId) {
    scrollToElement(targetElementId)
  }
})
</script>

<style scoped lang="scss">
@use '../assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

.music {
  font-family: 'Amatic SC', 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;
  overflow-y: overlay;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;

  &_switch {
    &--btn {
      background-color: transparent;
      border: none;
      width: 4em;
      position: sticky;
      top: 3%;
      float: right;
      margin-right: 8%;
      z-index: 100;
    }

    &--icon {
      color: $clr-blue;
      z-index: 100;
      cursor: pointer;
      animation: wiggle 2000ms cubic-bezier(0, 0.51, 0.98, 1.43) infinite;
    }
  }

  @keyframes wiggle {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(1em);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
}

.hamburger {
  display: none;
}

.mobile_navbar {
  height: 0%;
  width: 4em;
  padding: 1em 0;
  border-radius: 20px;
  background-color: $clr-blue;
  position: absolute;
  top: 100%;
  left: 2%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  transition: 250ms ease-in-out;

  &--active {
    animation: openMobileNavbar 500ms ease-in-out forwards;
  }

  &--close {
    animation: closeMobileNavbar 500ms ease-in-out forwards;
  }

  li {
    list-style: none;
    z-index: 1000;
  }

  p {
    font-size: 1.3em;
    color: $clr-secondary;
  }
}

.music_mobile_topbar {
  display: none;
}

@keyframes openMobileNavbar {
  0% {
    height: 0;
  }
  100% {
    height: 20em;
  }
}

@keyframes closeMobileNavbar {
  0% {
    height: 20em;
  }
  100% {
    height: 0;
  }
}
// .navbar--icon {
//   color: $clr-primary;
// }

@media (max-width: 800px) {
  .hamburger {
    display: block;
    width: fit-content;
    color: $clr-blue;
    position: sticky;
    top: 2.5%;
    margin-left: 3%;
    z-index: 999;
  }

  .music_mobile_topbar {
    display: block;
    width: 100%;
    height: 10%;
    background-color: $clr-primary;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
  }
}
</style>
