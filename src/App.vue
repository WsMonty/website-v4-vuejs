<template>
  <div class="dot" ref="dotRef" :style="{ top: state.y, left: state.x }"></div>

  <Suspense>
    <!-- main content -->
    <!-- <MusicView
      :class="{ 'music--active': musicWorld, 'music--close': !musicWorld }"
      ref="containerRef"
    /> -->
    <RouterView />

    <!-- loading state -->
    <template #fallback> Loading... </template>
  </Suspense>

  <DeveloperView
    class="developer"
    :class="{ 'developer--active': developerWorld, 'developer--close': !developerWorld }"
  />
</template>

<script setup lang="ts">
// import { reactive } from 'vue'

import DeveloperView from './views/DeveloperView.vue'
import { useWorldStore } from './stores/world'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

// const state = reactive({})

const store = useWorldStore()

const { developerWorld } = storeToRefs(store)

const state = reactive({ x: '', y: '', xN: 0, yN: 0 })

function updateDotPosition(event: MouseEvent) {
  state.xN = event.clientX
  state.yN = event.clientY
  state.x = event.clientX - 10 + 'px'
  state.y = event.clientY - 10 + 'px'
}

// Add event listener to update the dot and afterglow positions on mousemove
document.addEventListener('mousemove', (e) => {
  updateDotPosition(e)
  // updateDotColor()
})
</script>

<style scoped lang="scss">
@use './assets/styles/base.scss' as *;
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

@media (hover: none) and (pointer: coarse) {
  .dot {
    visibility: hidden;
  }
}

@media (max-width: 800px) {
  .navbar {
    visibility: hidden;
  }
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
</style>
