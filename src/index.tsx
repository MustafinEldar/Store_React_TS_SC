import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App'
import './fonts/Dosis/static/Dosis-ExtraLight.ttf'
import { GlobalStyle } from './GlobalStyle.styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
