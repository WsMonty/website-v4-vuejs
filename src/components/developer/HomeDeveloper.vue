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

<style lang="scss">
@use '../../assets/styles/base.scss' as *;

.developer_home {
  color: $clr-blue;

  h1 {
    font-size: 4em;
    margin: 5em 0 0 5em;
  }

  &_content {
    padding: 4em;
  }
}
</style>
