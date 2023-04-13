<template>
  <v-icon
    @click="handleOpenCart"
    class="shoppingcart--icon"
    name="ri-shopping-basket-line"
    scale="2.5"
  ></v-icon>

  <div v-if="state.cartOpen" class="shoppingcart shoppingcart--open">
    <h1>Shopping cart</h1>
    <template v-for="(item, i) in cart" :key="'item-nr' + i">
      <div class="shoppingcart_item" :id="item">
        <h2>
          {{ item.split('-').join(' ') }} <span>{{ item.includes('vinyl') ? '35€' : '15€' }}</span>
        </h2>
        <v-icon
          class="shoppingcart_item--delete"
          @click="handleRemoveFromCart"
          name="bi-trash"
          scale="1.5"
        ></v-icon>
      </div>
    </template>
    <form action="submit" @submit.prevent="handleToPayment" v-if="cart.length > 0">
      <CountryList />
      <p>
        If your country isn't listed, you wish to pick it up or have your copy signed, please
        contact me!
      </p>
      <div class="shoppingcart_bottom_wrapper">
        <div class="flex-wrapper">
          <p>(Shipping Cost: {{ shippingCost }})</p>
          <h2>
            Total price:
            {{ getTotalPrice() }}
          </h2>
        </div>
        <button type="submit" class="shoppingcart_payment--btn">Proceed to payment</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { loadPaypal } from '@/assets/helpers/loadPaypal'
import CountryList from '@/assets/helpers/CountryList.vue'

const store = useCartStore()

const { cart, totalPrice, shippingCost } = storeToRefs(store)
const { removeFromCart, updateTotalPrice, showPayment, showSuccessMessage, hidePayment } = store

const state = reactive({ cartOpen: false })

function getTotalPrice() {
  const price =
    cart.value.length === 3
      ? 65
      : cart.value.includes('state-of-mind-vinyl')
      ? cart.value.length === 2
        ? 50
        : 35
      : cart.value.length * 15

  updateTotalPrice(price)
  return price + shippingCost.value + '€'
}

function handleOpenCart() {
  const cart = document.querySelector('.shoppingcart')
  if (state.cartOpen) {
    cart?.classList.remove('shoppingcart--open')
    cart?.classList.add('shoppingcart--close')
    setTimeout(() => {
      state.cartOpen = false
    }, 1000)
    return
  }
  if (!state.cartOpen) {
    cart?.classList.add('shoppingcart--open')
    cart?.classList.remove('shoppingcart--close')
    state.cartOpen = true
    return
  }
}

function handleRemoveFromCart(e: Event) {
  const el = e.target as HTMLElement
  const item = el.closest('.shoppingcart_item') as HTMLElement
  const id = item.id

  removeFromCart(id)
}

function handleToPayment() {
  showPayment()
  loadPaypal(totalPrice.value, shippingCost.value, hidePayment, showSuccessMessage)
  state.cartOpen = false
}
</script>

<style scoped lang="scss">
@use '../../../assets/styles/base.scss' as *;
.shoppingcart {
  position: absolute;
  width: 60%;
  height: 98%;
  background-color: $clr-blue-lighter;
  border-radius: 20px;
  top: 1%;
  right: 3%;
  z-index: 98;
  padding: 2em;
  padding-top: 3em;
  color: $clr-blue;
  overflow-y: auto;
  overflow-x: hidden;

  h1 {
    border-bottom: 1px solid $clr-blue;
  }

  &--open {
    animation: expand 1s ease-in-out forwards;
    transform-origin: top right;
  }

  &--close {
    animation: close 1s ease-in-out forwards;
    transform-origin: top right;
  }

  &--icon {
    position: absolute;
    top: 3%;
    right: 5%;

    color: $clr-blue;
    z-index: 99;
  }

  &_bottom_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &_item {
    border-bottom: 1px solid $clr-blue;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    position: relative;

    &--delete {
      position: absolute;
      right: 5%;

      transition: 150ms ease-in-out;

      &:hover {
        color: $clr-secondary;
        transform: scale(1.2);
      }
    }
  }

  &_payment--btn {
    height: fit-content;
    background: none;
    border: 1px solid $clr-blue;
    border-radius: 20px;
    padding: 1em 2em;
    color: $clr-blue;
    font-size: 0.6em;

    transition: 150ms ease-in-out;

    &:hover {
      background-color: $clr-blue;
      color: $clr-secondary;
      transform: scale(1.05);
    }
  }
}

form {
  p {
    margin-top: 0.5em;
  }
}

.flex-wrapper {
  display: flex;
  flex-direction: column;
}

@keyframes expand {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes close {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

@media (max-width: 800px) {
  .shoppingcart {
    width: 90%;
    height: 80vh;
    right: 0;
    left: 5%;

    &--open {
      transform-origin: top left;
    }

    &--close {
      transform-origin: top left;
    }

    &--icon {
      right: 0;
      left: 25%;
      top: 1.2%;
    }

    &_item {
      padding: 1em 0;
    }

    &_bottom_wrapper {
      display: block;
      width: 100%;

      h2 {
        float: right;
        padding: 0.5em;
      }
    }

    &_payment--btn {
      width: 100%;
      margin-top: 1em;
      font-size: 0.8em;
    }
  }

  form {
    p {
      font-size: 1.2em;
    }
  }
}
</style>
