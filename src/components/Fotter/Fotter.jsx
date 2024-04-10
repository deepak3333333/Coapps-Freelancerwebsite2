import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className="fotter" id="footer">
        <div className="fotter-content">

            <div className="footer-content-left">
                <img   src={assets.logo1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nihil adipisci suscipit accusantium quidem exercitationem debitis, voluptas officiis! Quasi, voluptatum explicabo ullam doloremque eum recusandae! Vero nam laboriosam excepturi omnis.</p>
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
