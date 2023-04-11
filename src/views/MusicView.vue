<script setup lang="ts">
import { useWorldStore } from '@/stores/world'
import HomeMusic from '@/components/music/HomeMusic.vue'
import NewsMusic from '../components/music/NewsMusic.vue'
import ProjectsMusic from '../components/music/ProjectsMusic.vue'
import ConcertsMusic from '../components/music/ConcertsMusic.vue'
import ShopMusic from '../components/music/ShopMusic.vue'

const store = useWorldStore()
const { showDeveloperWorld, hideMusicWorld } = store

function handleChangeWorld() {
  showDeveloperWorld()
  hideMusicWorld()
}
</script>

<template>
  <div class="music">
    <button class="music_switch--btn" @click="handleChangeWorld">
      <v-icon class="music_switch--icon" name="co-chevron-double-right" scale="2" />
    </button>
    <HomeMusic />
    <NewsMusic />
    <ProjectsMusic />
    <ConcertsMusic />
    <ShopMusic />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

.music {
  font-family: 'Amatic SC', cursive;
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
      top: 5%;
      float: right;
      margin-right: 5%;
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
</style>
