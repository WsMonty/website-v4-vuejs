<template>
  <div class="blog">
    <h1>Gilles Grethen's Story Time</h1>
    <div class="blogs">
      <article v-for="(blog, index) in blogPosts">
        <h2>{{ blog.title }}</h2>
        <p class="date">{{ 'Published on ' + dateFormatter(blog.date) + ' by ' + blog.author }}</p>
        <br />
        <div v-for="par in blog.article.json.content">
          <p class="text" v-for="p in par.content" v-html="renderTextWithLineBreaks(p.value)"></p>
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
}
</style>
