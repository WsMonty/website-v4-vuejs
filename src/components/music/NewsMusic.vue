<template>
  <div class="news" id="news"></div>
</template>

<style scoped lang="scss">
@use '../../assets/base.scss' as *;
.news {
  background-color: $clr-primary;
  width: 100vw;
  height: 100vh;

  scroll-snap-align: start;
}
</style>
