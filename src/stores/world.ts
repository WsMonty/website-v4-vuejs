import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWorldStore = defineStore('world', () => {
  const musicWorld = ref(true)
  const developerWorld = ref(false)

  function showMusicWorld() {
    musicWorld.value = true
  }
  function showDeveloperWorld() {
    developerWorld.value = true
  }
  function hideMusicWorld() {
    musicWorld.value = false
  }
  function hideDeveloperWorld() {
    developerWorld.value = false
  }

  return {
    musicWorld,
    developerWorld,
    showDeveloperWorld,
    showMusicWorld,
    hideMusicWorld,
    hideDeveloperWorld
  }
})
