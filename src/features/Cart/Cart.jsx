import { Add, Close, HighlightOff, LocalOffer, Remove } from '@mui/icons-material'
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useOrders } from 'src/contexts/ordersContext'
import { cartItemSelector, cartTotalSelector } from 'src/redux/selector'
import { removeFromCart, setQuantity } from 'src/redux/userSlice'
import { formatPrice, randomNumber } from 'src/utils/helper'
import CheckoutForm from '../Payment/Stripe'
import { Button, Result } from 'antd'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

function Cart() {
  const { createOrder } = useOrders()
  const itemCartList = useSelector(cartItemSelector)
  const totalPrice = useSelector(cartTotalSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const options = {
    mode: 'payment',
    amount: totalPrice > 99999999 ? 100000 : totalPrice,
    currency: 'vnd',
    appearance: {},
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    },
    paymentMethodOrder: ['card'],
  }

  const handleFormSubmit = async (formValue) => {
    const { billing_details } = formValue.paymentMethod
    const currentDate = new Date()
    const data = {
      userId: localStorage.getItem('uid'),
      orderId: randomNumber(9999),
      nameOrder: billing_details.name,
      numberOrder: billing_details.phone,
      emailOrder: billing_details.email,
      addressOrder: billing_details.address,
      productOrder: itemCartList,
      date: currentDate.toISOString(),
    }
    const newOrderId = await createOrder(data)
    setTimeout(() => {
      navigate(`/order/${newOrderId}`)
    }, 1000)
  }

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) return
    const newValue = {
      id,
      quantity: Number.parseInt(quantity),
    }
    dispatch(setQuantity(newValue))
  }

  const handleDeleteItemsCart = (item, id) => {
    dispatch(removeFromCart(id))
  }

  if (itemCartList.length === 0) {
    return (
      <Result
        title="Bạn chưa có thêm sản phẩm nào vào giỏ hàng"
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate('/')
            }}
          >
            Trang Chủ
          </Button>
        }
      />
    )
  }

  return (
    <Box sx={{ maxWidth: '800px', margin: '10px auto 0' }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ padding: '5px' }}>
                Sản phẩm
              </TableCell>
              <TableCell align="center" sx={{ padding: '5px' }}>
                Giá
              </TableCell>
              <TableCell align="center" sx={{ padding: '5px' }}>
                Số lượng
              </TableCell>
              <TableCell align="center" sx={{ padding: '5px' }}>
                Tạm tính
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemCartList.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell sx={{ padding: 0 }}>
                  <List>
                    <ListItem>
                      <IconButton
                        size="large"
                        aria-label="delete item"
                        onClick={() => {
                          handleDeleteItemsCart(item, index)
                        }}
                      >
                        <HighlightOff color="error" />
                      </IconButton>
                      <Box sx={{ width: '110px', height: 'auto', marginRight: '13px' }}>
                        <img
                          src={item.product.imageUrl}
                          alt={item.title}
                          loading="lazy"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </Box>

                      <ListItemText
                        primary={
                          <Typography
                            component="span"
                            sx={{
                              fontSize: '14px',
                              color: '#000',
                              fontWeight: '500',
                              marginBottom: '10px',
                            }}
                          >
                            {item.product.nameProduct}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              component="span"
                              sx={{ display: 'block', fontSize: '12px', color: '#000' }}
                            >
                              Màu sắc: {item.selectedColor}
                            </Typography>
                            <Typography
                              component="span"
                              sx={{ display: 'block', fontSize: '12px', color: '#000' }}
                            >
                              Dung Lượng Ổ Cứng: {item.selectedStorage}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell align="center" sx={{ color: '#d70018', fontWeight: 'bold' }}>
                  {formatPrice(item.product.productPrice)}
                </TableCell>
                <TableCell align="center" sx={{ padding: '0', minWidth: '70px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #DDD',
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        handleQuantityChange(item.id, item.quantity - 1)
                      }}
                    >
                      <Remove sx={{ fontSize: '15px' }} />
                    </IconButton>
                    <Box>{item.quantity}</Box>
                    <IconButton
                      onClick={() => {
                        handleQuantityChange(item.id, item.quantity + 1)
                      }}
                    >
                      <Add sx={{ fontSize: '15px' }} />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="center" sx={{ color: '#d70018', fontWeight: 'bold' }}>
                  {formatPrice(Number.parseInt(item.product.productPrice * item.quantity))}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                colSpan={4}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '10px' }}
                >
                  <LocalOffer sx={{ color: '#AAAAAA', fontSize: '15px' }} />
                  <Typography component="span" sx={{ fontSize: '14px', fontWeight: '700' }}>
                    PHIẾU ƯU ĐÃI
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <input
                    type="text"
                    placeholder="Mã ưu đãi"
                    style={{ border: 'solid 1px #eee', padding: '5px', marginRight: '10px' }}
                  />
                  <button
                    style={{
                      backgroundColor: '#d70018',
                      color: '#fff',
                      padding: '6px',
                      borderRadius: '3px',
                      width: '100px',
                      cursor: 'pointer',
                    }}
                  >
                    Áp dụng
                  </button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography component="span" sx={{ fontSize: '14px', fontWeight: '700' }}>
                    Tổng
                  </Typography>
                  <Typography component="span" sx={{ color: '#d70018', fontWeight: 'bold' }}>
                    {formatPrice(totalPrice)}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={4}>
                <button
                  style={{
                    backgroundColor: '#d70018',
                    borderRadius: '6px',
                    color: '#fff',
                    padding: '5px',
                    marginTop: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={handleClickOpen}
                >
                  Thanh Toán
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        disableEscapeKeyDown
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose(event, reason)
          }
        }}
        fullWidth
        scroll="body"
      >
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0, outline: 'none' }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography
            component="span"
            sx={{
              fontSize: '16px',
              fontWeight: 'bolder',
            }}
          >
            THÔNG TIN THANH TOÁN
          </Typography>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm closeDialog={handleClose} onSubmit={handleFormSubmit} />
          </Elements>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

Cart.propTypes = {}

export default Cart
