<script setup lang="ts"></script>

<template>
  <div class="developer_home">
    <div class="developer_home_content">
      <h1>
        Hey, I'm Gilles, <br />
        a web developer.
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;

.developer_home {
  color: $clr-blue;
  width: 100%;
  height: 100%;

  scroll-snap-align: start;

  h1 {
    font-size: 4em;
    margin: 5em 0 0 5em;
  }

  &_content {
    padding: 4em;
  }
}

@media (max-width: 500px) {
  .developer_home_content {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .developer_home {
    h1 {
      font-size: 3em;
      margin: 0;
    }
  }
}
</style>
