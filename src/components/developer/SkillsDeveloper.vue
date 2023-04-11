<template>
  <div class="skills">
    <div class="skills_content">
      <div class="skills_content--left">
        <h2>Some recent projects</h2>
        <div class="project">
          <img
            src="../../assets/images/grethen-edition.jpeg"
            alt="Grethen Edition Webpage Example"
            width="400"
            height="200"
            class="img img--1"
            @click="handleOpenLink('edition')"
            @mouseover="handleMouseOver('edition')"
            @mouseleave="handleMouseLeave"
          />
          <div class="project_overlay project_overlay--1">
            <h3>
              Webshop with express.js backend <br />
              Click to visit!
            </h3>
          </div>
        </div>
        <div class="project">
          <img
            src="../../assets/images/jazz-chordle.jpg"
            alt="Jazz Chordle Webpage Example"
            width="400"
            height="200"
            class="img img--2"
            @click="handleOpenLink('chordle')"
            @mouseover="handleMouseOver('chordle')"
            @mouseleave="handleMouseLeave"
          />
          <div class="project_overlay project_overlay--2">
            <h3>
              Wordle style game to guess jazz chord progressions <br />
              Click to try it out!
            </h3>
          </div>
        </div>
        <div class="project">
          <img
            src="../../assets/images/the-team.jpg"
            alt="TheTeam Webpage Example"
            width="400"
            height="200"
            class="img img--3"
            @mouseover="handleMouseOver('team')"
            @mouseleave="handleMouseLeave"
          />
          <div class="project_overlay project_overlay--3">
            <h3>
              WEB3 integrated Football Manager <br />
              Not online yet.
            </h3>
          </div>
        </div>
      </div>
      <div class="skills_content--right">
        <div
          class="skills_used"
          @mouseover="handleMouseOver('website')"
          @mouseleave="handleMouseLeave"
        >
          <p>Used for this website</p>
        </div>
        <div
          class="skills_content--right_list"
          :key="'Skill nr' + i"
          v-for="(skill, i) in skills"
          :id="skill.name"
        >
          <v-icon :name="skill.icon" scale="2.5" class="skills--icon"></v-icon>
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
  next: {
    name: 'Next.js',
    icon: 'co-next-js'
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

function handleOpenLink(option: string) {
  switch (option) {
    case 'edition':
      window.open('https://grethen-edition.com/')
      return
    case 'chordle':
      window.open('https://jazzchordle.gatsbyjs.io/')
      return
  }
}

interface ISkillsUsed {
  [index: string]: string[]
}

const skillsUsed: ISkillsUsed = {
  edition: ['Javascript', 'Gatsby', 'Git', 'SASS'],
  chordle: ['Typescript', 'Gatsby', 'SASS', 'Git'],
  team: ['Typescript', 'Electron.js', 'Next.js', 'Git', 'SASS'],
  website: ['Typescript', 'Vue.js', 'Git', 'SASS']
}

function handleMouseOver(option: string) {
  document.querySelectorAll('.skills_content--right_list').forEach((icon: Element) => {
    if (skillsUsed[option].includes(icon.id))
      icon.classList.add('skills_content--right_list--active')
  })
}

function handleMouseLeave() {
  document.querySelectorAll('.skills_content--right_list').forEach((icon: Element) => {
    icon.classList.remove('skills_content--right_list--active')
  })
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

  &_used {
    position: absolute;
    top: 1%;
    right: 2%;
    width: 7em;
    height: 7em;
    text-align: center;
    border-radius: 50%;
    border: 1px solid $clr-blue;
    padding: 1em;

    transition: 150ms ease-in-out;

    &:hover {
      background-color: $clr-blue;
      color: $clr-secondary;
    }
  }

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

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
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
        padding: 0.75em 1em;

        &--active {
          color: $clr-blue-intense;
        }
      }
    }
  }
}

.project_overlay {
  width: 100%;
  height: 97%;
  border-radius: 10px;
  background-color: rgba(223, 223, 223, 0.759);
  color: $clr-blue;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  transition: transform 250ms ease-in-out;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.img {
  border-radius: 10px;
  transition: transform 250ms ease-in-out;

  &--1 {
    z-index: 98;
    &:hover {
      z-index: 99;
      transform: scale(1.3) translate(2em, 1em);
      border: 1px solid $clr-neutral-300;
    }
    &:hover + .project_overlay--1 {
      visibility: visible;
      transform: scale(1.3) translate(2em, 1em);
    }
  }
  &--2 {
    z-index: 98;

    &:hover {
      z-index: 99;
      transform: scale(1.3) translate(2em, 0);
      border: 1px solid $clr-neutral-300;
    }
    &:hover + .project_overlay--2 {
      visibility: visible;
      transform: scale(1.3) translate(2em, 0);
    }
  }
  &--3 {
    z-index: 98;

    &:hover {
      z-index: 99;
      transform: scale(1.3) translate(2em, -1em);
      border: 1px solid $clr-neutral-300;
    }
    &:hover + .project_overlay--3 {
      visibility: visible;
      transform: scale(1.3) translate(2em, -1em);
    }
  }
}
</style>
