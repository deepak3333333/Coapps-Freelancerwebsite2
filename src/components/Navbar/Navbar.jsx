import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import{Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
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

            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href="#explre-categories" onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>find jobs</a>
            <a href="#categories-display" onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Hire Freelancer</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
<div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-search-icon">
       
        

    </div>
    
    <button onClick={()=>setShowLogin(true)}>Log In</button>
</div>
</div>
    
    
    
)
}

export default Navbar
