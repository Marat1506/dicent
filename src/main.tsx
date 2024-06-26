import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CountryInfo from './components/CountryInfo/CountryInfo.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
  ,{
    path: '/countryInfo',
    element: <CountryInfo />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>,
)
