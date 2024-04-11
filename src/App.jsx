import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import FindJobs from './pages/FindJobs/FindJobs'
import HierFreelancer from './pages/HierFreelancer/HierFreelancer'
import Fotter from './components/Fotter/Fotter'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (<>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route  path="/" element={<Home />}></Route>
       <Route path="/findjobs" element={<FindJobs/> }> </Route>
       <Route path="/HierFreelancer" element={<HierFreelancer />}>
        
       </Route>

     </Routes>
      
</div>
    <Fotter/>
    </>

  )
}

export default App
