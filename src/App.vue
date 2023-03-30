<script setup lang="ts">
// import { reactive } from 'vue'
import MusicView from './views/MusicView.vue'
import DeveloperView from './views/DeveloperView.vue'
import { useWorldStore } from './stores/world'
import { storeToRefs } from 'pinia'

// const state = reactive({})

const store = useWorldStore()

const { musicWorld, developerWorld } = storeToRefs(store)
</script>

<template>
  <MusicView :class="{ 'music--active': musicWorld, 'music--close': !musicWorld }" />
  <ul class="navbar" :class="{ hidden: developerWorld }">
    <li>
      <a href="#news"><v-icon class="navbar--icon" name="co-newspaper" scale="2.5" /></a>
    </li>
    <li>
      <a href="#quartet"> <v-icon class="navbar--icon" name="la-music-solid" scale="2.5" /></a>
    </li>
    <li>
      <a href="#concerts"
        ><v-icon class="navbar--icon" name="bi-ticket-perforated" scale="2.5"
      /></a>
    </li>
    <li>
      <a href="#shop"><v-icon class="navbar--icon" name="bi-shop" scale="2.5" /></a>
    </li>
  </ul>
  <DeveloperView
    class="developer"
    :class="{ 'developer--active': developerWorld, 'developer--close': !developerWorld }"
  />
</template>

<style scoped lang="scss">
@use './assets/base.scss' as *;
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
  }
}
</style>
