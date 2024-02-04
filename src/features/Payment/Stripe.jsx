import { Box } from '@mui/material'
import {
  AddressElement,
  CardElement,
  LinkAuthenticationElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { Input } from 'antd'
import { useState } from 'react'

const cardStyle = {
  style: {
    base: {
      padding: '10px',
    },
  },
}

const CheckoutForm = ({ onSubmit, closeDialog }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState(null)
  const [emailValue, setEmailValue] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (elements) {
      const { error: submitError } = await elements.submit()

      if (submitError) {
        setErrorMessage(submitError.message)
      }
    }

    const addressElement = elements.getElement('address')
    const { complete, value } = await addressElement.getValue()
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: emailValue,
        address: {
          city: value.address.city,
          country: value.address.country,
          line1: value.address.line1,
          postal_code: value.address.postal_code,
          state: value.address.state,
        },
        name: value.name,
        phone: phoneNumber,
      },
    })

    if (complete) {
      onSubmit(payload)
      closeDialog()
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        onChange={(event) => {
          setEmailValue(event.value.email)
        }}
      />
      <AddressElement
        options={{
          mode: 'shipping',
          autocomplete: { mode: 'disabled' },
        }}
      />
      <Box
        sx={{
          border: '1px solid #D1D5DB',
          padding: '12px',
          marginTop: '10px',
          borderRadius: '5px',
        }}
      >
        <CardElement options={cardStyle} />
      </Box>
      <Box>
        <Input
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          onChange={(event) => {
            const reg = /^-?\d*(\.\d*)?$/
            if (
              reg.test(event.target.value) ||
              event.target.value === '' ||
              event.target.value === '-'
            ) {
              setPhoneNumber(event.target.value)
            }
          }}
          style={{
            paddingBlock: '10px',
            marginBlock: '10px',
          }}
        />
      </Box>
      <button
        type="submit"
        disabled={!stripe || !elements}
        style={{
          backgroundColor: '#d70018',
          borderRadius: '6px',
          color: '#fff',
          padding: '5px',
          minWidth: '120px',
          cursor: 'pointer',
          margin: '10px auto 0',
          textAlign: 'center',
        }}
      >
        Đặt Hàng
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  )
}

export default CheckoutForm
