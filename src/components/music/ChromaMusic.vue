<template>
  <div class="chroma">
    <!-- <a href="/"></a> -->
    <div class="chroma_content">
      <div class="chroma_localization">
        <h2
          :class="locale.current === 'de' && 'chroma_localization--active'"
          @click="() => (locale.current = 'de')"
        >
          DE
        </h2>
        <p>|</p>
        <h2
          :class="locale.current === 'en' && 'chroma_localization--active'"
          @click="() => (locale.current = 'en')"
        >
          EN
        </h2>
      </div>
      <h1>CHROMA</h1>
      <img src="../../assets/images/chroma-new.jpeg" alt="Chroma Duo" />
      <p class="chroma_content_text">{{ localizedTexts[locale.current].news }}</p>
      <div class="chroma_content_player">
        <div class="chroma_flexwrapper">
          <v-icon
            class="chrome_content_player--icon"
            @click="() => musicHandler('glare')"
            :name="isPlaying.current === 'glare' ? 'md-pausecirclefilled' : 'md-playcirclefilled'"
            scale="3"
          />
          <p class="chroma_content_player--label">Glare</p>
        </div>
        <div class="chroma_flexwrapper">
          <v-icon
            @click="() => musicHandler('gretchen')"
            :name="
              isPlaying.current === 'gretchen' ? 'md-pausecirclefilled' : 'md-playcirclefilled'
            "
            scale="3"
          />
          <p class="chroma_content_player--label">Gretchen-Frage</p>
        </div>
      </div>
      <p class="chroma_content_text">
        {{ localizedTexts[locale.current].first }} <br /><br />
        {{ localizedTexts[locale.current].second }}
      </p>
      <img
        v-if="locale.current === 'de'"
        src="../../assets/images/chroma_page3_de.jpeg"
        alt="Presskit Chroma Gilles und Sebastian"
      />
      <img
        v-if="locale.current === 'en'"
        src="../../assets/images/chroma_page3_en.jpeg"
        alt="Presskit Chroma Gilles und Sebastian"
      />
      <p class="chroma_content_text">
        {{ localizedTexts[locale.current].third }}
        <br />
        <br />
        {{ localizedTexts[locale.current].fourth }}
      </p>

      <h3>
        Booking: Gilles Grethen <br />
        +352 691954500 <br />
        <a href="mailto:gilles@gillesgrethen.com">gilles@gillesgrethen.com</a>
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import glareSrc from '../../assets/music/glare.mp3'
import gretchenSrc from '../../assets/music/gretchen-frage.mp3'
import { localizedTexts } from '../../assets/chroma/texts'

const glare = new Audio(glareSrc)
const gretchen = new Audio(gretchenSrc)

const isPlaying = reactive({ current: '' })

const locale = reactive({ current: 'en' })

function musicHandler(option: string) {
  if (option === 'glare') {
    if (isPlaying.current === 'glare') {
      glare.pause()
      isPlaying.current = ''
      return
    }
    gretchen.pause()
    glare.play()
    isPlaying.current = 'glare'
    return
  }
  if (option === 'gretchen') {
    if (isPlaying.current === 'gretchen') {
      gretchen.pause()
      isPlaying.current = ''
      return
    }
    glare.pause()
    gretchen.play()
    isPlaying.current = 'gretchen'
    return
  }
}
</script>
<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;
.chroma {
  width: 100%;
  height: 100%;
  background-color: rgb(236, 236, 236);
  padding: 2em;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-family: 'Helvetica Neue', sans-serif;

  overflow: auto;

  position: relative;

  &_localization {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1em;
    right: 5%;
    top: 1%;

    h2 {
      transition: 150ms ease-in-out;
      &:hover {
        color: $clr-chroma;
      }
    }

    &--active {
      text-decoration: underline;
    }
  }

  &_flexwrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em 2em;
    gap: 1em;
  }

  &_content {
    width: 80%;
    height: fit-content;
    // border-radius: 20px;
    // border: 1px solid $clr-secondary;

    padding: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3em;
      margin-block: 1em;
    }

    img {
      width: 80%;
      border-radius: 20px;
    }

    h3 {
      width: 60%;
      margin-block: 1em;
      border: 1px solid $clr-secondary;
      border-radius: 20px;
      padding-block: 1em;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    a {
      color: $clr-secondary;
      transition: 150ms;
    }

    &_text {
      padding: 2em;
      width: 80%;
      text-align: justify;
      font-size: 1.5em;
    }

    &_player {
      width: 80%;

      border: 1px solid $clr-secondary;
      border-radius: 20px;
      padding: 2em;
      margin-top: 2em;

      &--label {
        font-size: 3em;
      }
    }
  }
}

@media (max-width: 800px) {
  .chroma {
    padding: 0.5em;

    &_content {
      border: none;
      width: 100%;
      margin-bottom: 3em;

      img {
        width: 100%;
      }

      &_text {
        padding: 1em;
        width: 100%;
      }

      &_player {
        border: none;
        width: 100%;

        &--label {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>
