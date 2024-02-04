import { Alert, Snackbar } from '@mui/material'
import PropTypes from 'prop-types'
export const Toast = ({ message, severity, showToast, closeToast }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={showToast}
      onClose={closeToast}
      autoHideDuration={3000}
    >
      <Alert onClose={closeToast} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  showToast: PropTypes.bool.isRequired,
  closeToast: PropTypes.func.isRequired,
}
