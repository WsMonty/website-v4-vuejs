<script setup lang="ts">
import { useWorldStore } from '@/stores/world'
import HomeDeveloper from '@/components/developer/HomeDeveloper.vue'

const store = useWorldStore()
const { hideDeveloperWorld, showMusicWorld } = store

function handleChangeWorld() {
  showMusicWorld()
  hideDeveloperWorld()
}
</script>

<template>
  <div class="developer">
    <button class="developer_switch--btn" @click="handleChangeWorld">
      <v-icon class="developer_switch--icon" name="co-chevron-double-left" scale="2" />
    </button>
    <HomeDeveloper />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

.developer {
  width: 100vw;
  height: 100vh;
  background-color: $clr-secondary;
  color: $clr-primary;
  font-family: 'Space Grotesk', sans-serif;

  &_switch {
    &--btn {
      background-color: transparent;
      border: none;
      width: 4em;
      position: absolute;
      top: 5%;
      left: 5%;
      z-index: 100;
    }

    &--icon {
      color: $clr-primary;
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
      transform: translateX(-1em);
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
