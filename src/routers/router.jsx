import { createBrowserRouter } from 'react-router-dom'
import Filters from 'src/components/Filters'
import Login from 'src/features/Auth/components/Login'
import Cart from 'src/features/Cart/Cart'
import Order from 'src/features/Order/Pages/Order'
import OrderHistory from 'src/features/Order/Pages/OrderHistory'
import DetailPage from 'src/features/Product/Pages/DetailPage'
import ListPages from 'src/features/Product/Pages/ListPages'
import AppLayout from 'src/layouts/AppLayout'
import { HomePage } from 'src/layouts/HomePage/HomePage'
import NotFound from 'src/layouts/NotFound'
import { ProtectedRoute } from './ProtectedRoute'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { element: <HomePage />, path: '/' },
      { element: <Login />, path: 'login' },
      {
        element: <ListPages />,
        path: 'products',
      },
      {
        element: <DetailPage />,
        path: 'products/:productId',
      },
      {
        element: <Filters />,
        path: 'searchProduct',
      },
      {
        element: <ProtectedRoute />,
        children: [
          { element: <Cart />, path: 'cart' },
          { element: <Order />, path: 'order/:orderId' },
          { element: <OrderHistory />, path: 'orderHistory' },
        ],
      },
    ],
  },
])

export default router
