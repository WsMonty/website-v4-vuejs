<script setup lang="ts">
// import { reactive } from 'vue'
// const state = reactive({})
import { useWorldStore } from '@/stores/world'
import NewsMusic from '../components/music/NewsMusic.vue'
import QuartetMusic from '../components/music/QuartetMusic.vue'
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

    <NewsMusic />
    <QuartetMusic />
    <ConcertsMusic />
    <ShopMusic />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/base.scss' as *;

.music {
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;

  &_switch {
    &--btn {
      background-color: transparent;
      border: none;
      width: 4em;
      position: absolute;
      top: 5%;
      right: 5%;
      z-index: 100;
    }

    &--icon {
      color: black;
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
