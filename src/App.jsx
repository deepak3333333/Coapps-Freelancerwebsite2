import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import FindJobs from './pages/FindJobs/FindJobs'
import HierFreelancer from './pages/HierFreelancer/HierFreelancer'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
     <Routes>
      <Route  path="/" element={<Home />}></Route>
       <Route path="/findjobs" element={<FindJobs/> }> </Route>
       <Route path="/HierFreelancer" element={<HierFreelancer />}>
        
       </Route>

     </Routes>
      

     
     
    </div>
  )
}

export default App
