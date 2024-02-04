import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'
import { useDispatch } from 'react-redux'
import { login } from 'src/redux/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const { closeDialog, handleToast } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    try {
      const resultAction = dispatch(login(values))
      unwrapResult(resultAction)
      if (closeDialog) {
        closeDialog()
      }
      handleToast({ message: 'Đăng nhập thành công !', severity: 'success' })
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      handleToast({ message: error, severity: 'error' })
    }
  }

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

Login.propTypes = { closeDialog: PropTypes.func, handleToast: PropTypes.func }

export default Login
