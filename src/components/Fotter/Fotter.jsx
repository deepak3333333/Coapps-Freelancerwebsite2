import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className="fotter" id="footer">
        <div className="fotter-content">

            <div className="footer-content-left">
                <img   src={assets.logo1} alt="" />
                <p>Welcome to our freelancer platform, where freelancers and clients converge to create amazing work together. We believe in the power of connection, collaboration, and creativity. Here, freelancers unlock their potential, one project at a time, while businesses discover the perfect talent to fulfill their needs. Our platform is more than just a marketplace; it's a community where talent meets opportunity. We empower freelancers to take control of their careers and businesses to find the right expertise for their projects. Join us in the freelance revolution and experience the freedom to work on your own terms, build meaningful relationships, and achieve success</p>
                <div className="footer-social-icons">

                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <ul>
                <h2>company</h2>
                <li>home</li>
                <li>about us</li>
                <li> News</li>
                <li>Teams</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 620420839</li>
                    <li>contact @freelancer.com</li>
                </ul>


            </div>
            
        </div>
        <hr/>
       
        <p className="footer-copyright">Copyright 2024 @ Freelancer.com -All Right Reserver.</p>

        

      
    </div >
  )
}

export default Fotter
