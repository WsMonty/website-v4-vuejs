<template>
  <div v-if="paymentIsShown" class="payment">
    <button class="payment_closebtn" @click="handleBackToStore">Back to store</button>
    <div class="paypal" id="paypal-button"></div>
  </div>
  <div v-if="successMessageShown" class="success">
    <h2>Payment was successful! Thank your for your order!</h2>
    <button @click="hideSuccessMessage" class="close">Back to shop</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { loadPaypal } from '../../../assets/helpers/loadPaypal'

const store = useCartStore()
const { paymentIsShown, successMessageShown, totalPrice, shippingCost } = storeToRefs(store)
const { hidePayment, hideSuccessMessage, showSuccessMessage } = store

onMounted(() => {
  if (!document.getElementById('#paypal-button')) return
  loadPaypal(totalPrice.value, shippingCost.value, hidePayment, showSuccessMessage)
})

function handleBackToStore() {
  hidePayment()
}
</script>

<style scoped lang="scss">
@use '../../../assets/styles/base.scss' as *;
.payment {
  width: 80vw;
  min-height: 80vh;
  background-color: $clr-secondary;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 10vh;
  margin-left: 10vw;
  z-index: 999;
  border-radius: 20px;
  padding: 1em 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &_closebtn {
    position: absolute;
    top: 4%;
    right: 2%;
    background-color: transparent;
    border: 1px solid $clr-blue;
    border-radius: 20px;
    padding: 1em 2em;
    color: $clr-blue;

    transition: 150ms ease-in-out;

    &:hover {
      background-color: $clr-blue;
      color: $clr-secondary;
      transform: scale(1.1);
    }
  }
}

.success {
  width: 80vw;
  height: 80vh;
  background-color: $clr-secondary;
  color: $clr-blue;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 10vh;
  margin-left: 10vw;
  z-index: 999;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
}

.close {
  background-color: transparent;
  border: 1px solid $clr-blue;
  color: $clr-blue;
  border-radius: 20px;
  padding: 1em 2em;
  transform: scale(1.2);

  transition: 150ms ease-in-out;

  &:hover {
    background-color: $clr-blue;
    color: $clr-secondary;
    transform: scale(1.3);
  }
}

.paypal {
  color: $clr-blue;
  width: 50%;
  z-index: 1000;
}

@media (max-width: 800px) {
  .payment {
    padding: 5em 0;
  }
  .paypal {
    width: 90%;
  }
}
</style>
