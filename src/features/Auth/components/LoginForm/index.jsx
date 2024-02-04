import { yupResolver } from '@hookform/resolvers/yup'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import InputField from 'src/components/form-controls/Input-Field'
import PasswordField from 'src/components/form-controls/PasswordField'
import * as yup from 'yup'
import logoUser from 'src/assets/images/icons8-user-100.png'

const defaultTheme = createTheme()

function LoginForm({ onSubmit = null }) {
  const schema = yup.object({
    email: yup
      .string()
      .required('Vui lòng nhập email của bạn.')
      .email('Vui lòng nhập đúng địa chỉ email.'),
    password: yup.string().required('Vui lòng nhập mật khẩu của bạn.'),
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values)
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 1 }}>
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default LoginForm
