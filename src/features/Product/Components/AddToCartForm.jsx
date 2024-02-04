import { Add, Remove } from '@mui/icons-material'
import { Box, Button, ButtonGroup, IconButton } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Toast } from 'src/components/Notification/Toast'
import { formatPrice } from 'src/utils/helper'

function AddToCartForm({ product, onSubmit = null }) {
  const [selectedColor, setSelectedColor] = useState(product.productColor[0])
  const [selectedStorage, setSelectedStorage] = useState(product.productStorages[0])
  const [actionType, setActionType] = useState('')
  const [count, setCount] = useState(1)
  const [openToast, setOpenToast] = useState(false)
  const [message, setMessage] = useState('')

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const closeToast = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenToast(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!localStorage.getItem('uid')) {
      setOpenToast(true)
      setMessage('Bạn hãy đăng nhập để thực hiện chức năng !')
      return
    }

    onSubmit({
      actionType,
      quantity: count,
      selectedColors: selectedColor.color,
      selectedStorages: selectedStorage.storage,
    })
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <h4 style={{ marginBottom: '7px', fontSize: '15px', fontWeight: '700' }}>
          Màu sắc:{' '}
          <span style={{ fontSize: '15px', fontWeight: '400' }}>
            {selectedColor.color} ({formatPrice(selectedColor.price)})
          </span>
        </h4>
        <ButtonGroup variant="outlined" sx={{ marginBottom: '10px' }} className="detail-color">
          {product.productColor.map((item) => (
            <Button
              key={item.id}
              onClick={() => setSelectedColor(item)}
              style={{
                color: selectedColor.id === item.id ? '#D70018' : '#000000',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '10px',
                fontWeight: '600',
                marginRight: '7px',
                borderRadius: '6px',
                border: '1px solid #FFD600',
                minWidth: '120px',
                fontFamily: 'Inter, sans-serif',
              }}
              sx={{
                backgroundColor: selectedColor.id === item.id ? '#FFFCEE' : '#FFFFF',
              }}
            >
              <span>{item.color}</span>
              <span>({formatPrice(item.price)})</span>
            </Button>
          ))}
        </ButtonGroup>
        <h4 style={{ marginBottom: '7px', fontSize: '15px', fontWeight: '700' }}>
          Dung lượng ổ cứng:{' '}
          <span style={{ fontSize: '15px', fontWeight: '400' }}>
            {selectedStorage.storage} ({formatPrice(selectedStorage.price)})
          </span>
        </h4>
        <ButtonGroup variant="outlined" className="detail-storage">
          {product.productStorages.map((item) => (
            <Button
              key={item.id}
              onClick={() => setSelectedStorage(item)}
              style={{
                color: selectedStorage.id === item.id ? '#D70018' : '#000000',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '10px',
                fontWeight: '600',
                marginRight: '7px',
                borderRadius: '6px',
                border: '1px solid #FFD600',
                minWidth: '120px',
                fontFamily: 'Inter, sans-serif',
              }}
              sx={{ backgroundColor: selectedStorage.id === item.id ? '#FFFCEE' : '#FFFFF' }}
            >
              <span>{item.storage}</span>
              <span>({formatPrice(item.price)})</span>
            </Button>
          ))}
        </ButtonGroup>
        <Box sx={{ marginBlock: '30px 19px', display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              marginRight: '30px',
            }}
          >
            <IconButton onClick={handleDecrement}>
              <Remove />
            </IconButton>
            <Box sx={{ margin: '0 10px' }}>{count}</Box>
            <IconButton onClick={handleIncrement}>
              <Add />
            </IconButton>
          </Box>
          <Button
            type="primary"
            onClick={() => setActionType('AddToCart')}
            style={{
              color: '#FFFFFF',
              backgroundColor: '#F5A300',
              fontSize: '15px',
              fontWeight: '700',
              borderRadius: '10px',
            }}
          >
            Thêm Vào Giỏ
          </Button>
        </Box>
        <Button
          type="primary"
          onClick={() => setActionType('BuyNow')}
          style={{
            color: '#FFFFFF',
            backgroundColor: '#F5A300',
            fontSize: '15px',
            fontWeight: '700',
            borderRadius: '10px',
          }}
        >
          Mua Ngay
        </Button>
      </form>
      <Toast message={message} severity="info" showToast={openToast} closeToast={closeToast} />
    </Box>
  )
}

AddToCartForm.propTypes = {
  product: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default AddToCartForm
