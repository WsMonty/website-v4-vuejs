<template>
  <div class="music_home">
    <div class="music_home_content">
      <h1>
        Hey, I'm Gilles, <br />
        a musician.
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;

.music_home {
  background-color: $clr-primary;
  color: $clr-secondary;
  width: 100%;
  height: 100%;

  scroll-snap-align: start;

  h1 {
    font-size: 4em;
    margin: 2em 0 0 4em;
  }

  &_content {
    padding: 4em;
  }
}
</style>
