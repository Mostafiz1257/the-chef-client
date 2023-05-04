import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={route}></RouterProvider>
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>,
)
