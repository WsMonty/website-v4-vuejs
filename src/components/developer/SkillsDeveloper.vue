<template>
  <div class="skills">
    <div class="skills_content">
      <div class="skills_content--left">
        <div class="project">
          <img
            src="../../assets/images/grethen-edition.jpeg"
            alt="Grethen Edition Webpage Example"
            width="400"
            height="200"
          />
        </div>
        <div class="project">
          <img
            src="../../assets/images/jazz-chordle.jpg"
            alt="Jazz Chordle Webpage Example"
            width="400"
            height="200"
          />
        </div>
        <div class="project">
          <img
            src="../../assets/images/the-team.jpg"
            alt="TheTeam Webpage Example"
            width="400"
            height="200"
          />
        </div>
      </div>
      <div class="skills_content--right">
        <div class="skills_content--right_list" :key="'Skill nr' + i" v-for="(skill, i) in skills">
          <v-icon :name="skill.icon" scale="2.5"></v-icon>
          <h2>{{ skill.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = {
  js: {
    name: 'Javascript',
    icon: 'co-javascript'
  },
  ts: {
    name: 'Typescript',
    icon: 'co-typescript'
  },
  vue: {
    name: 'Vue.js',
    icon: 'co-vue-js'
  },
  react: {
    name: 'React',
    icon: 'co-react'
  },
  gatsby: {
    name: 'Gatsby',
    icon: 'co-gatsby'
  },
  electron: {
    name: 'Electron.js',
    icon: 'co-electron'
  },
  git: {
    name: 'Git',
    icon: 'co-git'
  },
  sass: {
    name: 'SASS',
    icon: 'co-sass-alt'
  }
}
</script>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;
.skills {
  width: 100%;
  height: 100%;
  background-color: $clr-primary;
  color: $clr-blue;

  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  &_content {
    border: 1px solid $clr-blue-lighter;
    border-radius: 20px;
    width: 70%;
    height: 80%;
    margin-block: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    &--left {
      width: 50%;
      height: 100%;
      border-radius: 20px 0 0 20px;
      background-color: $clr-blue;
      color: $clr-secondary;
    }

    &--right {
      width: 50%;
      height: 100%;
      border-radius: 0 20px 20px 0;
      background-color: $clr-secondary;
      color: $clr-blue;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 10%;

      &_list {
        display: flex;
        align-items: center;
        gap: 2em;
        padding: 1em;
      }
    }
  }
}
</style>
