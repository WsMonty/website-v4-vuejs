<template>
  <div class="blog">
    <h1>Gilles' Story Time</h1>
    <div class="mailchimp">
      <div id="mc_embed_shell">
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            action="https://gillesgrethen.us11.list-manage.com/subscribe/post?u=bde638547092615ef443acfbd&amp;id=52c1770b4b&amp;f_id=007a5ae0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2 class="mailchimp_title">Subscribe to my blog!</h2>
              <div class="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  class="required email mailchimp_email_input"
                  id="mce-EMAIL"
                  required
                  value=""
                  placeholder="Your email address"
                />
              </div>
              <div hidden><input type="hidden" name="tags" value="9341081" /></div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none"></div>
                <div class="response" id="mce-success-response" style="display: none"></div>
              </div>
              <div aria-hidden="true" style="position: absolute; left: -5000px">
                /* real people should not fill this in and expect good things - do not remove this
                or risk form bot signups */
                <input
                  type="text"
                  name="b_bde638547092615ef443acfbd_52c1770b4b"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="blogs">
      <article v-for="(blog, index) in blogPosts" :key="blog.date">
        <h2>{{ blog.title }}</h2>
        <p class="date">{{ 'Published on ' + dateFormatter(blog.date) + ' by ' + blog.author }}</p>
        <br />
        <div v-for="(par, index) in blog.article.json.content" :key="'Paragraph No.' + index">
          <p
            class="text"
            v-for="(p, index) in par.content"
            v-html="renderTextWithLineBreaks(p.value)"
            :key="'Small paragraph No.' + index"
          ></p>
          <br />
        </div>
        <hr v-if="index != blogPosts.length - 1" />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dateFormatter } from './assets/helpers/dateTimeFormatter'

async function getBlogPosts() {
  const query = `
  query {
  blogPostCollection {
    items {
      title
      date
      article {
        json
      }
      author
    }
  }
}`
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }`
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  }

  const response = await fetch(fetchUrl, fetchOptions)
    .then((response) => response.json())
    .catch((err) => console.log(err))

  return response.data.blogPostCollection.items
}

interface IBlogPost {
  title: string
  date: string
  article: string
  author: string
}

const blogPosts = await getBlogPosts()
blogPosts.sort((a: IBlogPost, b: IBlogPost) => Number(new Date(b.date)) - Number(new Date(a.date)))

function renderTextWithLineBreaks(text: String) {
  return text.replace(/\n/g, '<br />')
}
</script>

<style lang="scss" scoped>
@use './assets/styles/base.scss' as *;
.blog {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;

  overflow: auto;
}

h1 {
  padding: 1em 0 0 1em;
  color: $clr-blue;
}

h2 {
  font-size: 1.6em;
}

.blogs {
  width: 80%;
  height: fit-content;

  margin: 2em auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // border: 1px solid $clr-secondary;
  // border-radius: 20px;
}

.mailchimp {
  width: 30%;

  position: absolute;

  top: -0.5em;
  right: -2em;

  scale: 0.8;

  border: 1px solid $clr-blue;
  border-radius: 20px;

  z-index: 101;

  &_title {
    margin: 0 !important;
    color: $clr-blue;
  }

  &_email {
    color: $clr-blue;

    &_input {
      background: transparent;
      border: none !important;
      border-bottom: 1px solid $clr-blue !important;

      color: $clr-secondary;
      font-size: 0.9em;

      margin: 1em 0 0 0 !important;

      &::placeholder {
        color: $clr-blue;
        opacity: 0.6;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .asterisk {
    color: $clr-blue !important;
  }

  .button {
    background-color: $clr-blue !important;

    &:hover {
      background-color: $clr-secondary !important;
      scale: 1.1;
    }
  }
}

.date {
  font-style: italic;
  font-size: 0.9em;
  color: $clr-blue;
  opacity: 0.7;
}

.text {
  color: $clr-blue;
}

hr {
  border: none;
  height: 1px;
  background-color: $clr-blue-lighter;
}

article {
  width: 70%;
  padding: 2em 2em 0 2em;
}

@media (max-width: 800px) {
  .blog {
    font-size: 1rem;
  }

  .blogs {
    width: 85%;
    margin-bottom: 5em;
  }

  h2 {
    font-size: 1.5em;
  }

  article {
    width: 100%;
    padding: 0;
  }

  .mailchimp {
    position: relative;

    width: 90%;
    scale: 1;
    margin: 2em 1em 1em -0.5em !important;
    padding: 0 !important;

    &_title {
      padding: 0 !important;
    }

    .validate {
      margin: 1em !important;
    }
  }
}
</style>
