import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { watchContextProvider } from './component/watchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <watchContextProvider>
      <App />
    </watchContextProvider>
  </React.StrictMode>,
)