import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templates/App/index'
import { GlobalStyles } from './styles/global-styles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>,
)
