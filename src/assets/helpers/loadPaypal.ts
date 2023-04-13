import { loadScript } from '@paypal/paypal-js'

export async function loadPaypal(
  totalPrice: number,
  shippingCost: number,
  hidePayment: CallableFunction,
  showSuccessMessage: CallableFunction
) {
  const price = totalPrice + shippingCost

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
                    value: price + ''
                  }
                }
              ]
            })
          },
          // @ts-ignore
          onApprove: function (data, actions) {
            return actions.order?.capture().then(function () {
              hidePayment()
              showSuccessMessage()
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
}
