import React from 'react'
import './BottomFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import visa from "../asset/visa-logo-png-transparent.png"
import master from "../asset/master.jpg"

const BottomFooter = () => {
  return (
    <div className='bottomFooterWrapper'>
        <div className='sectionStyle'>
            <h2 style={headingStyle} >metta muse</h2>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
        </div>
        <div className='sectionStyle'>
            <h2 style={headingStyle} >QUICK LINKS</h2>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refund</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='sectionStyle'>
            <h2 style={headingStyle} >FOLLOW US</h2>
            <div style={{display:"flex", gap:"5px"}} >
                <div style={iconWrapperStyle} >
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div style={iconWrapperStyle} >
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
            <h2 style={headingStyle} >meta muse ACCEPTS</h2>
            <div style={{display:"flex", gap:"3px"}} >
                <img style={imageStyle} alt='visa image' src={visa} />
                <img style={imageStyle} alt='master card image' src={master} />
            </div>
        </div>
    </div>
  )
}

export default BottomFooter

const imageStyle = {
    height: "40px",
    width: "40px"
}

const iconWrapperStyle = {
    height: "30px",
    width:"30px",
    border: "1px solid white",
    borderRadius: "50%",
    display:"flex",
    justifyContent : "center",
    alignItems: "center",
    cursor: "pointer"
}

const headingStyle = {
    fontSize:"20px",
    fontWeight: 700
}
