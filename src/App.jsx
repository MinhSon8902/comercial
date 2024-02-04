import '@stripe/stripe-js'
import { RouterProvider } from 'react-router-dom'
import './assets/scss/index.scss'
import router from './routers/router'

function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
