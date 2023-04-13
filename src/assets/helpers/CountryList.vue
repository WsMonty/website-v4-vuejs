<template>
  <select
    id="country"
    className="userentry_select"
    name="country"
    required
    @change="getShippingCost"
  >
    <option value="" hidden>Select your country</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Italy">Italy</option>
    <option value="Austria">Austria</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Spain">Spain</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="USA">United States of America</option>
  </select>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const store = useCartStore()
const { updateShippingCost } = store
const { totalPrice } = storeToRefs(store)

function getShippingCost(e: Event) {
  const country = (e.target as HTMLSelectElement).value

  if (country === 'Germany') {
    const shippingCost = [35, 50, 65].includes(totalPrice.value) ? 6.99 : 1.6
    updateShippingCost(shippingCost)
    return
  }
  if (['France', 'Netherlands', 'Italy', 'Austria', 'Spain'].includes(country)) {
    const shippingCost = [35, 50, 65].includes(totalPrice.value) ? 15.99 : 3.7
    updateShippingCost(shippingCost)
    return
  }
  if (country === 'United Kingdom') {
    const shippingCost = [35, 50, 65].includes(totalPrice.value) ? 26.9 : 3.7
    updateShippingCost(shippingCost)
    return
  }
  if (country === 'USA') {
    const shippingCost = [35, 50, 65].includes(totalPrice.value) ? 47.99 : 3.7
    updateShippingCost(shippingCost)
    return
  }
}
</script>

<style scoped lang="scss">
@use '../styles/base.scss' as *;

select {
  background-color: transparent;
  border: 1px solid $clr-blue;
  border-radius: 10px;
  padding: 1em 2em;
  margin: 2em 1em 0 1em;
  color: $clr-blue;

  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    border: 1px solid $clr-secondary;
  }
}
</style>
