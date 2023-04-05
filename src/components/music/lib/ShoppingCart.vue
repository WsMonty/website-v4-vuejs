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
    <div v-if="cart.length > 0" class="shoppingcart_bottom_wrapper">
      <h2>
        Total price:
        {{ getTotalPrice() }}
      </h2>
      <button @click="handleToPayment" class="shoppingcart_payment--btn">Proceed to payment</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const store = useCartStore()

const { cart } = storeToRefs(store)
const { removeFromCart, updateTotalPrice, showPayment } = store

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
  return price + '€'
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
  state.cartOpen = false
  //@ts-ignore
  document.querySelector('.payment').classList.remove('hidden')
  showPayment()
}
</script>

<style scoped lang="scss">
@use '../../../assets/styles/base.scss' as *;
.shoppingcart {
  position: absolute;
  width: 60%;
  height: 80%;
  background-color: $clr-blue-lighter;
  border-radius: 20px;
  top: 1%;
  right: 3%;
  z-index: 98;
  padding: 2em;
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
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
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
</style>
