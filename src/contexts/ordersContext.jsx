import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { createContext, useCallback, useContext, useMemo, useReducer } from 'react'
import { db } from 'src/services/firebase'

const OrdersContext = createContext()

const initState = {
  orderDetail: JSON.parse(localStorage.getItem('orders')) || [],
  user: localStorage.getItem('uid'),
  currentOrder: JSON.parse(localStorage.getItem('order')) || {},
  isLoading: false,
  error: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true }
    case 'orders/loaded':
      return {
        ...state,
        isLoading: false,
        orderDetail: action.payload,
      }
    case 'order/loaded':
      return {
        ...state,
        isLoading: false,
        currentOrder: action.payload,
      }
    case 'order/created':
      return {
        ...state,
        isLoading: false,
        orderDetail: [...state.orderDetail, action.payload],
        currentOrder: action.payload,
      }
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      throw new Error('Unknown action type')
  }
}

const OrderProvider = ({ children }) => {
  const [{ orderDetail, isLoading, user, currentOrder, error }, dispatch] = useReducer(
    reducer,
    initState
  )

  const fetchOrders = useCallback(
    async function fetchOrders() {
      dispatch({ type: 'loading' })
      try {
        const ordersQuery = query(collection(db, 'orders'), where('userId', '==', user))
        const querySnapshot = await getDocs(ordersQuery)
        const orders = querySnapshot.docs.map((doc) => doc.data())
        dispatch({ type: 'orders/loaded', payload: orders })
        localStorage.setItem('orders', JSON.stringify(orders))
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading order...',
        })
      }
    },
    [user]
  )

  const getOrder = useCallback(async function getOrder(id) {
    dispatch({ type: 'loading' })
    try {
      const orderDocRef = doc(db, 'orders', id)
      const orderDocSnap = await getDoc(orderDocRef)
      if (orderDocSnap.exists()) {
        dispatch({ type: 'order/loaded', payload: orderDocSnap.data() })
        localStorage.setItem('order', JSON.stringify(orderDocSnap.data()))
      }
      return orderDocSnap.data()
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error loading order...',
      })
    }
  }, [])

  const createOrder = useCallback(async function createOrder(newOrder) {
    dispatch({ type: 'loading' })
    try {
      const ordersCollection = collection(db, 'orders')
      const orderDocRef = await addDoc(ordersCollection, newOrder)
      const cartRef = doc(db, 'carts', localStorage.getItem('uid'))
      await updateDoc(cartRef, {
        items: [],
      })
      localStorage.setItem('cart', JSON.stringify([]))
      dispatch({ type: 'order/created', payload: newOrder })
      return orderDocRef.id
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating order...',
      })
    }
  }, [])

  const value = useMemo(
    () => ({
      orderDetail,
      isLoading,
      user,
      currentOrder,
      getOrder,
      fetchOrders,
      createOrder,
      error,
    }),
    [orderDetail, isLoading, user, currentOrder, getOrder, fetchOrders, createOrder, error]
  )

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
}

const useOrders = () => {
  const context = useContext(OrdersContext)
  if (context === undefined) {
    throw new Error('Order context was use outside the OrderProvider')
  }
  return context
}

export { OrderProvider, useOrders }
