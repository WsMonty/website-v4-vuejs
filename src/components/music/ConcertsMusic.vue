<script setup lang="ts">
import { dateFormatter, getTime } from '../../assets/helpers/dateTimeFormatter'
async function getConcerts() {
  const query = `
  query {
  concertCollection {
    items {
      tickets
      date
      description
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

  return response.data.concertCollection.items
}

interface IConcert {
  description: string
  date: string
  tickets: string
}

const concerts = await getConcerts()
concerts.sort((a: IConcert, b: IConcert) => Number(new Date(a.date)) - Number(new Date(b.date)))
</script>

<template>
  <div class="concerts" id="concerts">
    <div class="concerts_content">
      <template v-for="(concert, i) in concerts" :key="'concert-nr' + i">
        <div class="concert" v-if="new Date(concert.date) > new Date()">
          <h3>{{ concert.description }}</h3>
          <p>{{ dateFormatter(concert.date) }}</p>
          <p>{{ 'Start time: ' + getTime(concert.date) }}</p>
          <a class="concert_tickets" :href="concert.tickets" target="_blank">{{
            concert.tickets && 'Get tickets or more information!'
          }}</a>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;

.concerts {
  background-color: $clr-primary;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  &_content {
    width: 70%;
    height: 80%;
    margin-block: 2em;
    border: 1px solid $clr-blue-lighter;
    border-radius: 20px;
    padding: 2em;
    overflow: auto;
  }
}

.concert {
  border-bottom: 1px solid $clr-blue-lighter;
  padding: 2em;

  &_tickets {
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-decoration: none;
    color: $clr-blue;
  }
}
</style>
