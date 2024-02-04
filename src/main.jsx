import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { OrderProvider } from 'src/contexts/ordersContext.jsx'
import './services/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback="...is loading">
    <Provider store={store}>
      <OrderProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </OrderProvider>
    </Provider>
  </Suspense>
)
