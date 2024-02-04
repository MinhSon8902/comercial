import { Close } from '@mui/icons-material'
import ReorderIcon from '@mui/icons-material/Reorder'
import SearchIcon from '@mui/icons-material/Search'
import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'
import banner from 'src/assets/images/banner.png'
import user from 'src/assets/images/icons8-user-50.png'
import iconCart from 'src/assets/images/Link.svg'
import logo from 'src/assets/images/logo.png'
import phoneCart from 'src/assets/images/phone-call.svg'
import Login from 'src/features/Auth/components/Login'
import Register from 'src/features/Auth/components/Register'
import LanguageSelector from 'src/features/Language/LanguageSelector'
import { cartItemSelector } from 'src/redux/selector'
import userSlice from 'src/redux/userSlice'
import { auth } from 'src/services/firebase'
import filtersSlice from '../Filters/filtersSlice'
import { Toast } from '../Notification/Toast'
import MenuCategories from 'src/features/Menu'

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

function Header() {
  const loggedInUser = useSelector((state) => state.user.current)
  const isLoggedIn = !!loggedInUser.uid
  const [mode, setMode] = useState(MODE.LOGIN)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchText, setSearchText] = useState('')
  const cartItemsCount = useSelector(cartItemSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [userProfile, setUserProfile] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsDrawerOpen(open)
  }

  const [openToast, setOpenToast] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('warning')

  const closeToast = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenToast(false)
  }

  const handleToast = ({ message, severity }) => {
    setMessage(message)
    setSeverity(severity)
    setOpenToast(true)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfile(user.displayName)
      }
    })
  }, [auth])

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value))
    navigate({
      pathname: '/searchProduct',
      search: `?${createSearchParams({ query: e.target.value })}`,
    })
  }

  useEffect(function () {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = () => {
    const header = document.querySelector('.header-content')
    const scrollTop = window.scrollY
    scrollTop >= 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseAnchor = () => {
    setAnchorEl(null)
  }

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleUserLogout = () => {
    dispatch(userSlice.actions.logout())
    signOut(auth)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <a href="/#" className="header-banner">
            <img src={banner} alt="banner" style={{ width: '100%' }} />
          </a>
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div className="header-nav">
            <span className="header-menu">
              <IconButton onClick={toggleDrawer(true)}>
                <ReorderIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ width: '50%' }}
              >
                <MenuCategories />
              </Drawer>
            </span>
            <a href="/#" className="header-logo">
              <img src={logo} alt="" />
            </a>
            <div className="header-input">
              <TextField
                variant="outlined"
                placeholder="Tìm kiếm..."
                fullWidth
                value={searchText}
                onChange={handleSearchTextChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 50,
                    backgroundColor: '#FFFFFF',
                    '&:hover': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused': {
                      borderColor: 'transparent',
                      boxShadow: 'none',
                    },
                  },
                }}
                size="small"
              />
            </div>
            <div className="header-list">
              <div className="header-contact">
                <span className="header-contact__icon">
                  <img src={phoneCart} alt="" />
                </span>
                <div
                  className="header-contact__text"
                  style={{ display: 'flex', flexFlow: 'column nowrap' }}
                >
                  <span>{t('header.a')}</span>
                  <span className="header-contact__text--bold">0972495xxx</span>
                </div>
              </div>
              <LanguageSelector />
            </div>
            {!isLoggedIn && (
              <button
                className="button-user"
                onClick={handleClickOpen}
                style={{
                  marginInline: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #1111114f',
                  borderRadius: '5px',
                  height: '34px',
                  paddingBlock: '18px',
                  cursor: 'pointer',
                }}
              >
                <img alt="" src={user} style={{ width: '25px', height: '25px' }} />
                <span
                  style={{
                    backgroundColor: 'initial',
                    fontSize: '13px',
                    fontWeight: '600',
                    lineHeight: '16px',
                  }}
                >
                  Đăng Nhập
                </span>
              </button>
            )}
            {isLoggedIn && (
              <button
                className="button-user"
                onClick={handleUserClick}
                style={{
                  marginInline: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #1111114f',
                  borderRadius: '5px',
                  height: '34px',
                  padding: '17px',
                  cursor: 'pointer',
                }}
              >
                <img
                  alt=""
                  src={user}
                  style={{ width: '25px', height: '25px', marginRight: '5px' }}
                />
                <div
                  style={{
                    backgroundColor: 'initial',
                    lineHeight: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Xin Chào</span>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>{userProfile}</span>
                </div>
              </button>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseAnchor}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{ zIndex: '999999' }}
            >
              <MenuItem onClick={handleCloseAnchor}>{t('menu.a')}</MenuItem>
              <MenuItem
                onClick={() => {
                  navigate('/orderHistory')
                }}
              >
                {t('menu.b')}
              </MenuItem>
              <MenuItem onClick={handleUserLogout}>{t('menu.c')}</MenuItem>
            </Menu>
            <div className="header-cart">
              <IconButton size="large" color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={cartItemsCount.length} color="error">
                  <img alt="" src={iconCart} />
                </Badge>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        disableEscapeKeyDown
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose(event, reason)
          }
        }}
        fullWidth={true}
        scroll="body"
      >
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0, outline: 'none' }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} handleToast={handleToast} />
              <Grid container>
                <Grid item xs={6}>
                  <Button color="primary" onClick={() => {}}>
                    Quên Mật Khẩu
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    color="primary"
                    onClick={() => {
                      setMode(MODE.REGISTER)
                    }}
                  >
                    Tôi chưa có tài khoản. Đăng ký ở đây
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} handleToast={handleToast} />
              <Box textAlign="right">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.LOGIN)
                  }}
                >
                  Đã có tài khoản, Đăng Nhập
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Toast message={message} severity={severity} showToast={openToast} closeToast={closeToast} />
    </header>
  )
}

Header.propTypes = {}

export default Header
