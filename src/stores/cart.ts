import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart: Ref<string[]> = ref([])
  const totalPrice: Ref<number> = ref(0)
  const paymentIsShown: Ref<boolean> = ref(false)

  function addToCart(item: string) {
    if (cart.value.includes(item)) return alert('already in cart')
    cart.value = [...cart.value, item]
  }

  function removeFromCart(item: string) {
    const index: number = cart.value.indexOf(item)

    cart.value.splice(index, 1)
  }

  function updateTotalPrice(price: number) {
    totalPrice.value = price
  }

  function showPayment() {
    paymentIsShown.value = true
  }

  function hidePayment() {
    paymentIsShown.value = false
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateTotalPrice,
    totalPrice,
    paymentIsShown,
    showPayment,
    hidePayment
  }
})
