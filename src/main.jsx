import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Page2 from './components/Page2.jsx'
import Page3 from './components/Page3.jsx'
import Page4 from './components/Page4.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Page2/>
    <Page3/>
    <Page4/>
    <Footer/>
    
  </React.StrictMode>,
)
