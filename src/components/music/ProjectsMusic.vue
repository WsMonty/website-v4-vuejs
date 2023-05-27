<template>
  <div class="projects" id="projects">
    <div class="projects_content">
      <div class="mobile_header">
        <h1>Projects</h1>
        <p><a href="#concerts" class="a-nostyling--2">(skip to concerts)</a></p>
      </div>
      <div class="project">
        <h2 class="hover" @click="handleClickImg('quartet')">Gilles Grethen Quartet</h2>
        <div class="flex-wrapper">
          <div class="text-align">
            <div class="img-wrapper">
              <img
                src="../../assets/images/gg4tet.jpg"
                alt="Gilles Grethen Quartet Outdoors"
                width="500"
                @click="handleClickImg('quartet')"
              />
              <div class="project_overlay project_overlay--quartet">
                <h3>Click here for more info!</h3>
              </div>
              <a
                class="project_link_press"
                href="https://drive.google.com/drive/folders/10PGGtQ78Vma6O3YF0T8ZA1V_p7ghgVkL?usp=sharing"
                target="_blank"
                >Get Press Material!</a
              >
            </div>
          </div>
          <p>
            Luxembourg guitarist Gilles Grethen’s quartet convinces with a rich sound diversity and
            compositions oscillating between traditional and modern jazz. Warm harmonies and lyrical
            melodies, combined with a captivating rhythm and underlined by Grethen’s warm yet
            vibrant guitar sound, are the ingredients of their music. Both motives developed in
            unison and bold improvisations reveal the complicity of the four musicians. The Gilles
            Grethen Quartet released its debut album 'Time Suite' in May 2021 on Double Moon Records
            and its second album 'State of Mind' in Octobre 2022.
          </p>
        </div>
      </div>
      <hr />
      <div class="project">
        <h2 class="hover" @click="handleClickImg('linq')">Linq</h2>
        <div class="flex-wrapper">
          <p>
            Have you ever yearned for the freshness of Hip-Hop to be delivered with a punk rock
            energy while simultaneously being elevated to the highest standard of musical virtuosity
            and freedom by modern-day Jazz? Well, no need to look further than Mateus Wojda’s brand
            new fusion-potpourri called LINQ. Rather a delicately cooked gourmet dish than a brutely
            put together ratatouille, the project links all of Wojda’s influences in a true
            cross-over and boundary pushing fashion. LINQ embodies the frontman’s childhood dream to
            fully express and truly present himself to music enthusiasts and casual listeners alike.
            And his past is key for his music. With more than 13 years of musical experience the
            Conservatorium van Amsterdam-graduate experiments with the iconic 90s video game music
            from games like the Zelda series that won’t only trigger his nostalgia. Let LINQ take
            you on an exciting audio adventure. A well-prepared adventure, because Wojda’s
            compositions are guided by a central question: "how abstract can one go without losing
            the clarity and understanding of modern-day music?"
          </p>
          <div class="img-wrapper">
            <img
              src="../../assets/images/linq.jpg"
              alt="Mateus Wojda as Leader of Linq"
              width="500"
              @click="handleClickImg('linq')"
            />
            <div class="project_overlay project_overlay--linq">
              <h3>Click here for more info!</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="project">
        <h2 class="hover" @click="handleClickImg('jem')">JEM</h2>
        <div class="flex-wrapper">
          <div class="img-wrapper">
            <img
              src="../../assets/images/jem.jpg"
              alt="JEM inside Castle"
              width="500"
              @click="handleClickImg('jem')"
            />
            <div class="project_overlay project_overlay--jem">
              <h3>Click here for more info!</h3>
            </div>
          </div>
          <p>
            "KlezFire" means joy of life, top-notch entertainment, and an enthusiastic audience!
            Once again, Helmut Eisel, with his "Speaking Clarinet," skillfully bridges styles and
            cultures with a cheerful disposition. Through his music, he tells stories to his
            audience - cheerful, melancholic, irresistibly seductive. And all of this is done at the
            highest level of musical performance! The program "KlezFire" was co-developed by Michael
            Marx, the legendary guitarist and co-founder of the group. His untimely death in August
            2022 has deeply affected us all. But the show goes on! Through his music, Michael Marx
            remains present in the performances of the trio, and Gilles Grethen has found a worthy
            successor.
          </p>
        </div>
      </div>
      <hr />
      <div class="project">
        <h2>CHROMA</h2>
        <div class="flex-wrapper">
          <p>
            From their very first encounter, Sebastian Voltz and Gilles Grethen felt a strong
            musical attraction. Piano and guitar seemed to complement each other effortlessly,
            allowing their tones to be mixed harmoniously. Piano and guitar are rare duet partners,
            and Gilles Grethen and Sebastian Voltz take advantage of this. In their interplay, they
            paint vividly with colors, intertwining their rhythms into a dense yet transparent
            fabric, skillfully playing with the fact that both instruments possess the same
            capabilities.
          </p>
          <RouterLink to="/chroma" target="_blank">
            <div class="img-wrapper">
              <img src="../../assets/images/chroma.jpg" alt="Collage of CHROMA" width="500" />
              <div class="project_overlay project_overlay--chroma">
                <h3>Click here for more info!</h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

function handleClickImg(opt: string) {
  switch (opt) {
    case 'jem':
      window.open('https://helmut-eisel.de/')
      return
    case 'linq':
      window.open('https://www.instagram.com/linq.music/')
      return
    case 'quartet':
      window.open('https://www.instagram.com/gilles_grethen_/')
      return
  }
}
</script>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.projects {
  background-color: $clr-primary;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $clr-secondary;

  &_content {
    width: 80%;
    height: 80%;
    border: 1px solid $clr-blue-lighter;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 2em 2em 2em;
    padding-bottom: 8em;
  }
}

.project_overlay {
  width: 100%;
  border-radius: 10px;
  background-color: rgba(223, 223, 223, 0.609);
  color: $clr-blue;
  font-size: 2em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  transition: transform 350ms ease-in-out;
  transform: scale(0.1);
  transform-origin: center;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &--quartet {
    height: 75.4%;
  }

  &--linq {
    height: 97.9%;
  }

  &--jem {
    height: 97.3%;
  }
  &--chroma {
    height: 96.8%;
  }
}

h2 {
  margin: 1em;
  font-size: 3em;

  transition: 150ms ease-in-out;
}

.hover:hover {
  color: $clr-blue;
  text-decoration: underline;
}

hr {
  border: none;
  background-color: $clr-blue-lighter;
  height: 1px;
  width: 95%;
  margin: 4em 0 0 2.5%;
}

img {
  border-radius: 10px;

  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:hover + .project_overlay {
    visibility: visible;
    transform: scale(1.1);
  }
}

.flex-wrapper {
  display: flex;
  align-items: center;
  gap: 2em;

  p {
    font-size: 0.9em;
    font-family: 'Comfortaa', cursive;
  }
}

.text-align {
  text-align: center;
}

.project_link_press {
  font-size: 3em;
}

@media (max-width: 800px) {
  .projects {
    height: fit-content;

    font-size: 1em;

    &_content {
      border: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 2em 0;
    }
  }
  .project_overlay {
    display: none;
  }

  h2 {
    margin: 0.5em;
  }

  .flex-wrapper {
    display: block;

    img {
      width: 100%;
      border-radius: 0;
    }

    p {
      padding: 1em;
    }
  }
}
</style>
