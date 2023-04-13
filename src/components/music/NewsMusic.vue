<template>
  <div class="news" id="news">
    <div class="news_content">
      <div class="mobile_header">
        <h1>NEWS</h1>
        <p><a href="#projects" class="a-nostyling">(skip to projects)</a></p>
      </div>
      <template v-for="(article, i) in news" :key="'article-nr' + i">
        <div class="article" v-if="i < 3">
          <h2>{{ article.title }}</h2>
          <div class="article_wrapper">
            <img
              v-if="article.media"
              class="article_image"
              :src="article.media.url"
              :alt="article.media.title"
              width="300"
            />
            <p class="article_newsText">{{ article.newsText }}</p>
          </div>
          <div class="article_wrapper2">
            <a class="article_link" :href="article.link" target="_blank"
              >Click here for more info!</a
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
async function getNews() {
  const query = `
  query {
  newsCollection {
    items {
      title
      date
      media {
        url
        title
        description
      }
      newsText
      link
			mediaContent
    }
  }
}
`
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

  return response.data.newsCollection.items
}
const news = await getNews()
</script>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;
.news {
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
    padding: 2em;
    overflow: auto;
  }
}

.article {
  padding: 2em;
  border-bottom: 1px solid $clr-blue-lighter;
  font-size: 1.2em;

  &_wrapper {
    display: flex;
    align-items: center;
    gap: 8em;

    margin-bottom: 2em;
  }

  &_wrapper2 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-bottom: 2em;
    padding-left: 3em;
  }

  h2 {
    margin-bottom: 1em;
    font-size: 3em;
  }

  &_newsText {
    color: $clr-blue;
    font-size: 1.3em;
  }

  &_image {
    border-radius: 20px;
  }

  &_link {
    white-space: nowrap;
    font-size: 2em;
  }
}

@media (max-width: 800px) {
  .news {
    height: fit-content;

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

  .article {
    padding: 1em;
    h2 {
      margin-bottom: 0;
      font-size: 2em;
    }

    &_wrapper {
      display: block;
    }

    &_wrapper2 {
      display: block;
      margin-bottom: 2em;
      padding-left: 0em;
    }

    &_link {
      font-size: 1.5em;
    }
  }
}
</style>
