import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Index.jsx'
import App from './App.jsx'
import Footer from './components/Footer/Index.jsx'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
