<template>
  <div class="shop" id="shop">
    <div class="shop_content">
      <div class="item">
        <div class="item_wrapper">
          <img src="../../assets/images/SoM-cover.jpeg" alt="State of Mind Cover" width="150" />
          <h2>State of Mind - Gilles Grethen Quartet & Strings (2022)</h2>
        </div>
        <h3>VINYL (Double Vinyl, 180g)</h3>
        <p>Price: 35€ (+shipping)</p>
        <button @click="putItemIntoBasket">
          Put into basket
          <v-icon class="item_btn" name="ri-shopping-basket-line"></v-icon>
        </button>
      </div>
      <div class="item">
        <div class="item_wrapper">
          <img src="../../assets/images/SoM-cover.jpeg" alt="State of Mind Cover" width="150" />
          <h2>State of Mind - Gilles Grethen Quartet & Strings (2022)</h2>
        </div>
        <h3>CD</h3>
        <p>Price: 15€ (+shipping)</p>
        <button @click="putItemIntoBasket">
          Put into basket
          <v-icon class="item_btn" name="ri-shopping-basket-line"></v-icon>
        </button>
      </div>
      <div class="item">
        <div class="item_wrapper">
          <img src="../../assets/images/cover-timeSuite.jpeg" alt="Time Suite Cover" width="150" />
          <h2>Time Suite - Gilles Grethen Quartet (2021)</h2>
        </div>
        <h3>CD</h3>
        <p>Price: 15€ (+shipping)</p>
        <button @click="putItemIntoBasket">
          Put into basket
          <v-icon class="item_btn" name="ri-shopping-basket-line"></v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function putItemIntoBasket() {}
</script>

<style scoped lang="scss">
@use '../../assets/styles/base.scss' as *;

.shop {
  background-color: $clr-primary;
  color: $clr-secondary;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3em;

  h3 {
    font-size: 1.3em;
  }

  p {
    font-size: 1.2em;
  }

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

.item {
  border-bottom: 1px solid $clr-blue;
  padding: 1em;

  &_wrapper {
    display: flex;
    align-items: center;
    gap: 4em;
  }
}

button {
  background: none;
  border: 1px solid $clr-secondary;
  border-radius: 20px;
  padding: 1em 2em;
  color: $clr-secondary;
  position: absolute;
  bottom: 20%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  transition: 150ms ease-in-out;

  &:hover {
    background-color: $clr-secondary;
    color: $clr-primary;
  }
}
</style>
