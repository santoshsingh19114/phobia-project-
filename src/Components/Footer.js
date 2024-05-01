import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <section className='footer'>
            <div>
                <h2>NeuroVR</h2>
                <p>Muradnagar,<br>
                </br>
                ghaziabad,<br></br>
                uttarpradesh
                </p>

            </div>
            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="aboutus">About Us</a></li>
                    <li><a href="contactus">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

            <div>
            <h2>our Services </h2>
            </div>
            <div>
                <h2>Follow us on Social Media:</h2>
                <div classname="social-icons">
                    <a href="https://www.facebook.com/neuroworkout" target="_blank"><FaLinkedin className="linkedin"/></a>
                    <a href="https://www.facebook.com/neuroworkout" target="_blank"><FaInstagram className="instagram"/></a>
                    <a href="https://www.facebook.com/neuroworkout" target="_blank"><FaXTwitter className='twitter'/></a>
                    
                 </div>
                 </div>
            

        </section>
    </div>
  )
}

export default Footer