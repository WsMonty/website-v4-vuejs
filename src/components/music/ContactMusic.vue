<template>
  <div class="contact" id="contact">
    <div class="contact_content">
      <div class="contact_info">
        <div class="contact_management">
          <h3>Management & Booking</h3>
          <h4>Stephanie Baustert</h4>
          <p>+352 691824515</p>
          <p>
            <a
              href="mailto:stephanie@stephaniebaustert.com"
              class="mail_link"
              target="_blank"
              rel="noreferrer"
            >
              stephanie@stephaniebaustert.com
            </a>
          </p>
        </div>
        <div class="contact_gilles">
          <h3>Direct Contact</h3>
          <h4>Gilles Grethen</h4>
          <p>
            <a
              href="mailto:gilles@gillesgrethen.com"
              class="mail_link"
              target="_blank"
              rel="noreferrer"
            >
              gilles@gillesgrethen.com
            </a>
          </p>
        </div>
      </div>

      <div class="socials">
        <div class="socials_link">
          <a href="https://www.facebook.com/gillesgrethen" target="_blank"
            ><v-icon name="co-facebook" scale="3"></v-icon>
          </a>
        </div>
        <div class="socials_link">
          <a href="https://www.instagram.com/gilles_grethen_/" target="_blank"
            ><v-icon name="co-instagram" scale="3"></v-icon>
          </a>
        </div>
        <div class="socials_link">
          <a href="https://www.youtube.com/channel/UCgZez7ebsQQFIO83RDIj8zQ" target="_blank"
            ><v-icon name="co-youtube" scale="3.2"></v-icon>
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
  background-color: $clr-secondary;
  width: 100vw;
  height: 100vh;
  color: $clr-primary;
  font-size: 1.2em;

  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  &_content {
    width: 80%;
    height: 80%;
    margin-block: 2em;
    border: 1px solid $clr-blue-lighter;
    border-radius: 20px;
    padding: 1em;
    overflow: hidden;
    font-size: 2em;
  }

  &_info {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  &_gilles {
    border-left: 1px solid $clr-blue;
    padding-left: 1em;
  }
  &_management {
    padding-right: 1em;
  }
}
.socials {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.socials_link {
  padding: 0.5em 1em;
  transition: 150ms ease-in-out;
}

@media (max-width: 1200px) {
  .contact {
    font-size: 0.9em;

    &_content {
      overflow-y: auto;
    }
    &_info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 1em;
      font-size: 0.8em;
    }
    &_gilles {
      border-left: none;
      border-top: 1px solid $clr-blue;
      padding: 1em 0 0 0;
    }
    &_management {
      padding: 0 0 1em 0;
    }
  }
}

@media (max-width: 800px) {
  .contact {
    min-height: 100vh;

    font-size: 1em;

    &_content {
      border: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      padding-top: 2em;
    }
  }
  .socials {
    transform: scale(0.7);
  }
}
</style>
