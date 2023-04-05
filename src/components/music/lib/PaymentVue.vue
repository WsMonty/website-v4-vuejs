<template>
  <div v-if="paymentIsShown" class="payment">
    <button class="payment_closebtn" @click="handleBackToStore">Back to store</button>
    <div class="paypal" id="paypal-button"></div>
  </div>
  <div v-if="state.showSuccessMessage" class="success">
    <h2>Payment was successful! Thank your for your order!</h2>
    <button @click="state.showSuccessMessage = false" class="close">Back to shop</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { loadScript } from '@paypal/paypal-js'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const state = reactive({ showSuccessMessage: false })

const store = useCartStore()
const { totalPrice, paymentIsShown } = storeToRefs(store)
const { hidePayment } = store

onMounted(async () => {
  loadScript({
    'client-id': 'AZuOJhphk2lqHP76TcBJzx9pernNN8M0ZphLh8u04xv8HCLCF-KzP-FKie_mLKYAdLf3N-59ZqRzgQWq',
    currency: 'EUR'
  })
    .then((paypal) => {
      // @ts-ignore
      paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'EUR',
                    value: totalPrice.value + ''
                  }
                }
              ]
            })
          },
          // @ts-ignore
          onApprove: function (data, actions) {
            return actions.order?.capture().then(function () {
              hidePayment()
              state.showSuccessMessage = true
            })
          }
        })
        .render('#paypal-button')
        .catch((error) => {
          console.error('failed to render the PayPal Buttons', error)
        })
    })
    .catch((error) => {
      console.error('failed to load the PayPal JS SDK script', error)
    })
})

function handleBackToStore() {
  //@ts-ignore
  document.querySelector('.payment').classList.add('hidden')
}
</script>

<style scoped lang="scss">
@use '../../../assets/styles/base.scss' as *;
.payment {
  width: 80vw;
  height: 80vh;
  background-color: $clr-secondary;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 10vh;
  margin-left: 10vw;
  z-index: 999;
  border-radius: 20px;

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
</style>
