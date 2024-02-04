import React from 'react'
import PropTypes from 'prop-types'
import { Controller, useController } from 'react-hook-form'
import { Box, FormControl, IconButton, OutlinedInput, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

function QuantityField(props) {
  const { form, name, label, disable } = props
  const { control, setValue } = form

  const {
    fieldState: { invalid },
  } = useController({
    name,
    control,
  })

  return (
    <FormControl sx={{ marginBottom: 1 }} variant="outlined" fullWidth error={invalid}>
      <Typography sx={{ textAlign: 'left' }}>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <Box>
            <IconButton
              onClick={() => {
                setValue(name, Number.parseInt(value) - 1 > 0 ? Number.parseInt(value) - 1 : 1)
              }}
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disable}
            />
            <IconButton
              onClick={() => {
                setValue(name, Number.parseInt(value) + 1)
              }}
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
    </FormControl>
  )
}

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
}

export default QuantityField
