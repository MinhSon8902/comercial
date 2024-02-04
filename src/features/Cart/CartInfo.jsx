import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from 'src/components/form-controls/Input-Field'

function CartInfo({ onSubmit = null }) {
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should has at least two words', 'Please enter at least two words.', (value) => {
        return value.split(' ').length >= 2
      }),
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    number: yup
      .number()
      .required('Please enter your number.')
      .min(6, 'Please enter at least 6 characters'),
    address: yup.string().required('Please retype your address.'),
    note: yup.string().required('Please retype your note.'),
  })

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      number: '',
      address: '',
      note: '',
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    if (!onSubmit) return
    onSubmit({
      nameOrder: values.fullName,
      numberOrder: values.number,
      emailOrder: values.email,
      addressOrder: values.address,
      noteOrder: values.note,
    })
  }
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: 2,
        border: '1px solid red',
        marginBottom: '50px',
      }}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Typography variant="h6" color="secondary">
        THÔNG TIN THANH TOÁN
      </Typography>
      <InputField name="fullName" label="Full Name" form={form} />
      <InputField name="email" label="Email" form={form} />
      <InputField name="number" label="Number" form={form} />
      <InputField name="address" label="Address" form={form} />
      <InputField name="note" label="Note" form={form} />
      <Button variant="contained" color="secondary" type="submit" sx={{ alignSelf: 'flex-start' }}>
        ĐẶT HÀNG
      </Button>
    </Box>
  )
}

CartInfo.propTypes = {
  onSubmit: PropTypes.func,
}

export default CartInfo
