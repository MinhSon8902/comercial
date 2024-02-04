import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/Product/productSlice'
import userSlice from 'src/redux/userSlice'
import filtersSlice from 'src/components/Filters/filtersSlice'

const rootReducer = {
  productList: productSlice.reducer,
  user: userSlice.reducer,
  filter: filtersSlice.reducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
