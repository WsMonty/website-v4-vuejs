<template>
  <div class="chroma">
    <!-- <a href="/"></a> -->
    <div class="chroma_content">
      <h1>CHROMA</h1>
      <img src="../../assets/images/chroma-new.jpeg" alt="Chroma Duo" />
      <p class="chroma_content_text">
        Schon bei ihrem ersten Zusammentreffen spürten Sebastian Voltz und Gilles Grethen eine
        starke musikalische Anziehungskraft. Klavier und Gitarre schienen sich komplementär zu
        ergänzen, mühelos konnten ihre Klangfarben gemischt werden. <br /><br />
        Klavier und Gitarre sind seltene Duopartner - Gilles Grethen und Sebastian Voltz ziehen
        daraus ihren Vorteil. Im Zusammenspiel malen sie farbenfroh, verknüpfen ihre Rhythmen zu
        einem dichten doch immer auch durchsichtigen Gewebe und spielen gekonnt mit der Tatsache,
        dass beide Instrumente eben die gleichen Fähigkeiten besitzen.
      </p>
      <img src="../../assets/images/chroma_page3.jpeg" alt="Presskit Chroma Gilles und Sebastian" />
      <p class="chroma_content_text">
        Die Kompositionen der beiden Künstler bewegen sich zwischen ruhigeren, ausgedehnten Passagen
        und intensiveren, dichten Momenten. In ihrem modernem Jazz steht jedoch immer wieder die
        Improvisation im Vordergrund, durch welche die Virtuosität der beiden Musiker zu Tage tritt.
        Hier zeigt sich dann die lange Erfahrung der beiden Musiker im Bereich der klassischen
        Musik.
        <br />
        <br />
        Kammermusikalisches Zusammenspiel, lebendig, frei und intuitiv.
      </p>
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

const glare = new Audio(glareSrc)
const gretchen = new Audio(gretchenSrc)

const isPlaying = reactive({ current: '' })

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
    border-radius: 20px;
    border: 1px solid $clr-secondary;

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
      margin-block: 1em;
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
