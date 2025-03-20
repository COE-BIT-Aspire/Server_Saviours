import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} width="200px" height="200px"></img>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Foodiebay</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 8870172063</li>
                    <li>foodiebay@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className="footer-copyright">&copy; 2024 Foodiebay.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer