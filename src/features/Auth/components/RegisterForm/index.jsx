import { ThemeProvider } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
  createTheme,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import InputField from 'src/components/form-controls/Input-Field'
import PasswordField from 'src/components/form-controls/PasswordField'
import * as yup from 'yup'
import logoUser from 'src/assets/images/icons8-user2-100.png'

const defaultTheme = createTheme()

function RegisterForm({ onSubmit = null }) {
  const schema = yup.object({
    name: yup.string().required('Vui lòng nhập tên của bạn.'),
    email: yup
      .string()
      .required('Vui lòng nhập email của bạn.')
      .email('Vui lòng nhập đúng địa chỉ email.'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu của bạn.')
      .min(6, 'Vui lòng nhập mật khẩu tối thiểu 6 ký tự'),
    retypePassword: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu của bạn.')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp !'),
  })

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    }
    if (onSubmit) onSubmit(data)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <img alt="" src={logoUser} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField name="name" label="Name" form={form} />
              </Grid>
              <Grid item xs={12}>
                <InputField name="email" label="Email" form={form} />
              </Grid>
              <Grid item xs={12}>
                <PasswordField name="password" label="Password" form={form} />
              </Grid>
              <Grid item xs={12}>
                <PasswordField name="retypePassword" label="Retype Password" form={form} />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

RegisterForm.propTypes = { onSubmit: PropTypes.func }

export default RegisterForm
