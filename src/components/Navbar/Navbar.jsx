import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <img src={assets.logo1} alt="" className="logo" />
       <h2><span>F</span>ree
            <span>L</span>ancer.
            
            </h2>
        </div>
        <ul className="navbar-menu">

            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>find jobs</li>
            <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Hire Freelancer</li>
            <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
<div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-search-icon">
       
        

    </div>
    <button>Sign In</button>
    <button>Log In</button>
</div>
</div>
    
    
    
)
}

export default Navbar
