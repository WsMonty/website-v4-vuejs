<template>
  <div class="dot" ref="dotRef" :style="{ top: state.y, left: state.x }"></div>
  <ul class="navbar" :class="{ hidden: developerWorld }">
    <li>
      <a href="#news"><v-icon class="navbar--icon" name="co-newspaper" scale="2.5" /></a>
    </li>
    <li>
      <a href="#projects"> <v-icon class="navbar--icon" name="la-music-solid" scale="2.5" /></a>
    </li>
    <li>
      <a href="#concerts"
        ><v-icon class="navbar--icon" name="bi-ticket-perforated" scale="2.5"
      /></a>
    </li>
    <li>
      <a href="#shop"><v-icon class="navbar--icon" name="bi-shop" scale="2.5" /></a>
    </li>
    <li>
      <a href="#contact"><v-icon class="navbar--icon" name="bi-mailbox" scale="2.5" /></a>
    </li>
  </ul>

  <Suspense>
    <!-- main content -->
    <!-- <MusicView
    :class="{ 'music--active': musicWorld, 'music--close': !musicWorld }"
    ref="containerRef"
  /> -->
    <RouterView class="routerView" />

    <!-- loading state -->
    <template #fallback> Loading... </template>
  </Suspense>

  <DeveloperView
    class="developer"
    :class="{ 'developer--active': developerWorld, 'developer--close': !developerWorld }"
  />
  <div v-if="$route.name !== 'chroma'" class="player">
    <v-icon
      :name="state.isPlaying ? 'md-musicnote' : 'md-musicoff-sharp'"
      @click="startMusicHandler"
      scale="3"
    />
    <h2>listen to some music</h2>
  </div>
</template>

<script setup lang="ts">
import DeveloperView from './views/DeveloperView.vue'
import { useWorldStore } from './stores/world'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import stateOfMind from './assets/music/state-of-mind.mp3'

const store = useWorldStore()

const { developerWorld } = storeToRefs(store)

const state = reactive({ x: '', y: '', xN: 0, yN: 0, isPlaying: false })

function updateDotPosition(event: MouseEvent) {
  state.xN = event.clientX
  state.yN = event.clientY
  state.x = event.clientX - 10 + 'px'
  state.y = event.clientY - 10 + 'px'
}

// Add event listener to update the dot and afterglow positions on mousemove
document.addEventListener('mousemove', (e) => {
  updateDotPosition(e)
})

const music = new Audio(stateOfMind)

function startMusicHandler() {
  if (state.isPlaying) {
    music.pause()
    state.isPlaying = false
    return
  }
  music.play()
  state.isPlaying = true
}
</script>

<style lang="scss">
@use './assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

.music--active {
  animation: slideInMusic 1000ms ease-in-out forwards;
}

.music--close {
  animation: slideOutMusic 1000ms ease-in-out forwards;
}

.developer--close {
  animation: slideOutDev 1000ms ease-in-out forwards;
}

.developer--active {
  animation: slideInDev 1000ms ease-in-out forwards;
}

.navbar {
  list-style: none;
  height: 70%;
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4em;
  padding: 0;

  background-color: $clr-primary;

  position: fixed;
  left: 2%;
  top: 15%;
  border-radius: 30px;

  z-index: 99;

  &--icon {
    color: $clr-secondary;

    transition: color 150ms ease-in-out;

    &:hover {
      color: $clr-blue;
    }
  }
}

.player {
  position: fixed;
  bottom: 1%;
  right: 1%;
  color: $clr-blue;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Amatic SC', 'Helvetica Neue', sans-serif;
  }
}

@keyframes slideOutMusic {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideOutDev {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slideInMusic {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slideInDev {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.dot {
  position: absolute;
  background-color: rgba(29, 29, 104, 0.747);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
}

@media (max-height: 720px) {
  .navbar {
    height: 80%;
    top: 10%;
    transform: scale(0.8);
  }
}
@media (max-height: 620px) {
  .navbar {
    height: 90%;
    top: 5%;
    transform: scale(0.8);
  }
}
@media (max-height: 540px) {
  .navbar {
    height: 100%;
    top: 0;
    transform: scale(0.8);
  }
}
@media (max-width: 1200px) {
  .navbar {
    width: 7%;
  }
}

@media (hover: none) and (pointer: coarse) {
  .dot {
    visibility: hidden;
  }
}

@media (max-width: 800px) {
  .navbar {
    visibility: hidden;
  }

  .player {
    top: 0;
    transform: scale(0.75);
    left: 30%;
  }
}
</style>
