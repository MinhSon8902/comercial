import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Controller, useController } from 'react-hook-form'
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function PasswordField(props) {
  const { form, name, label, disable } = props
  const { control } = form
  const [showPassword, setShowPassword] = useState(false)
  const {
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl sx={{ marginBottom: 1 }} variant="outlined" fullWidth error={invalid}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
          />
        )}
      ></Controller>
      <FormHelperText error={invalid}>{error?.message}</FormHelperText>
    </FormControl>
  )
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
}

export default PasswordField
