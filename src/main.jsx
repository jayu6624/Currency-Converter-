import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.getElementById('root').style.backgroundImage=`url('/assets/images/back.jpg')`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>,
)
