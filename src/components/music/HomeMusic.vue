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

@media (max-width: 800px) {
  .music_home_content {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music_home {
    h1 {
      font-size: 3em;
      margin: 0;
    }
  }
}
</style>
