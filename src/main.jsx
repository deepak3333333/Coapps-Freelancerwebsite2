import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom'
import Categories from './components/Categories/Categories.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import Freelancer from './pages/Freelancer/Freelancer'
import HierFreelancer from './pages/HierFreelancer/HierFreelancer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>

  <App />
 
  </StoreContextProvider>
 
  
   
    </BrowserRouter>
  

  
  
)
