import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from 'src/services/firebase'
import userApi from 'src/services/userApi'
import StorageKeys from 'src/utils/constants'

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload)
  return data
})

export const login = createAsyncThunk('user/login', async (payload, thunkAPI) => {
  try {
    const data = await userApi.login(payload)
    localStorage.setItem('uid', data.uid)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data))
    localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(data.stsTokenManager.accessToken))
    thunkAPI.dispatch(getCart())
    return data
  } catch (error) {
    throw new Error('Failed to login. ', error)
  }
})

export const getCart = createAsyncThunk('user/getCart', async () => {
  try {
    const cartRef = doc(db, 'carts', localStorage.getItem('uid'))
    const cartSnapshot = await getDoc(cartRef)
    if (cartSnapshot.exists()) {
      const currentData = cartSnapshot.data()
      return currentData.items
    } else {
      return []
    }
  } catch (error) {
    throw new Error('Failed to load cart')
  }
})

export const addToCart = createAsyncThunk('user/addToCart', async (payload) => {
  const cartRef = doc(db, 'carts', localStorage.getItem('uid'))
  try {
    const cartSnapshot = await getDoc(cartRef)
    if (cartSnapshot.exists()) {
      const currentData = cartSnapshot.data()
      const index = currentData.items.findIndex((x) => {
        return !!(
          x.productId === payload.productId &&
          x.selectedColor === payload.selectedColor &&
          x.selectedStorage === payload.selectedStorage
        )
      })
      if (index >= 0) {
        currentData.items[index].quantity += payload.quantity
      } else {
        currentData.items.push(payload)
      }
      await updateDoc(cartRef, {
        items: currentData.items,
      })
      return currentData.items
    }
  } catch (error) {
    throw new Error('Failed to add product to cart')
  }
})

export const setQuantity = createAsyncThunk('user/quantity', async (payload) => {
  const cartRef = doc(db, 'carts', localStorage.getItem('uid'))
  const { id, quantity } = payload

  try {
    const cartSnapshot = await getDoc(cartRef)
    if (cartSnapshot.exists()) {
      const currentData = cartSnapshot.data()
      const index = currentData.items.findIndex((x) => x.id === id)
      if (index >= 0) {
        currentData.items[index].quantity = quantity
      }
      await updateDoc(cartRef, {
        items: currentData.items,
      })
      return currentData.items
    }
  } catch (error) {
    throw new Error('Failed to set quantity product in cart')
  }
})

export const removeFromCart = createAsyncThunk('user/removeFromCart', async (payload) => {
  const cartRef = doc(db, 'carts', localStorage.getItem('uid'))
  const idNeedToRemove = payload

  try {
    const cartSnapshot = await getDoc(cartRef)
    if (cartSnapshot.exists()) {
      const currentData = cartSnapshot.data()
      currentData.items = currentData.items.filter((x, idx) => idx !== idNeedToRemove)
      await updateDoc(cartRef, {
        items: currentData.items,
      })
      return currentData.items
    }
  } catch (error) {
    throw new Error('Failed to remove product in cart')
  }
})

export default createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    items: JSON.parse(localStorage.getItem('cart')) || [],
    loading: false,
  },
  reducers: {
    logout(state) {
      localStorage.clear()
      state.current = {}
      window.location.reload()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = true
        state.current = action.payload
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        localStorage.setItem('cart', JSON.stringify(state.items))
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        localStorage.setItem('cart', JSON.stringify(state.items))
      })
      .addCase(setQuantity.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        localStorage.setItem('cart', JSON.stringify(state.items))
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        localStorage.setItem('cart', JSON.stringify(state.items))
      })
  },
})
