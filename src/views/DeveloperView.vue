<template>
  <div class="developer">
    <v-icon
      class="developer_switch--icon developer_switch--btn"
      name="co-chevron-double-left"
      scale="2"
      @click="handleChangeWorld"
    />

    <HomeDeveloper />
    <SkillsDeveloper />
    <ContactDeveloper />
  </div>
</template>

<script setup lang="ts">
import HomeDeveloper from '@/components/developer/HomeDeveloper.vue'
import SkillsDeveloper from '@/components/developer/SkillsDeveloper.vue'
import ContactDeveloper from '@/components/developer/ContactDeveloper.vue'
import router from '@/router'

function handleChangeWorld() {
  router.push('/')
}
</script>

<style scoped lang="scss">
@use '../assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

.developer {
  width: 100vw;
  height: 100vh;
  background-color: $clr-secondary;
  color: $clr-primary;
  font-family: 'Space Grotesk', sans-serif;
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
      float: left;
      margin-left: 8%;
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
