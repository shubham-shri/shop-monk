import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HGp9rHw8iS73Yo9Re8347Q8f52KAq1uVhpzCw3yuSUoIMTMVNE340Lor39qlhczgWyg1LJcnKg0Eg6IyoSKUI4m00RqtaEu0K'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop Monk"
      billingAddress
      shippingAddress
      image="https://svgShare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
