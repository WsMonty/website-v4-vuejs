<template>
  <div class="contact">
    <div class="contact_content">
      <div class="contact_info">
        <h2>Email me if you have any questions or to hire me!</h2>
        <a href="mailto:gilles@gillesgrethen.com" target="_blank">gilles@gillesgrethen.com</a>
      </div>
      <div class="socials">
        <div class="socials_link">
          <a href="https://github.com/WsMonty/" target="_blank"
            ><v-icon name="co-github" scale="3"></v-icon>
          </a>
        </div>
        <div class="socials_link">
          <a href="https://www.instagram.com/gilles_grethen_/" target="_blank"
            ><v-icon name="co-instagram" scale="3"></v-icon>
          </a>
        </div>
        <div class="socials_link">
          <a href="https://www.linkedin.com/in/gilles-grethen-3a762a2b/" target="_blank"
            ><v-icon name="co-linkedin" scale="3"></v-icon>
          </a>
        </div>
        <div class="socials_link">
          <a href="https://www.fiverr.com/gillesgrethen" target="_blank"
            ><v-icon name="si-fiverr" scale="4"></v-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;
.contact {
  width: 100%;
  height: 100%;
  background-color: $clr-secondary;
  color: $clr-blue;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  &_content {
    border: 1px solid $clr-blue;
    border-radius: 20px;
    width: 70%;
    height: 80%;
    margin-block: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;
    font-size: 2em;
  }

  &_info {
    text-align: center;

    h2 {
      padding: 1em;
    }
  }
}

.socials {
  display: flex;
  align-items: center;
}
.socials_link {
  padding: 1em;
  transition: 150ms ease-in-out;
}

@media (max-width: 800px) {
  .contact {
    height: fit-content;

    font-size: 1em;

    &_content {
      border: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 4em 0;
    }
  }

  .socials {
    transform: scale(0.8);
  }
}
</style>
