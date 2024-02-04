import { unwrapResult } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { register } from 'src/redux/userSlice'
import RegisterForm from '../RegisterForm'

function Register(props) {
  const { closeDialog, handleToast } = props
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    try {
      const action = register(values)
      const resultAction = dispatch(action)
      unwrapResult(resultAction)
      handleToast({ message: 'Đăng ký thành công !', severity: 'success' })
      if (closeDialog) {
        closeDialog()
      }
    } catch (error) {
      console.log('Failed to register:', error)
    }
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}

Register.propTypes = { closeDialog: PropTypes.func, handleToast: PropTypes.func }

export default Register
