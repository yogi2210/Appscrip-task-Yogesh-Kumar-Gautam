import React from 'react'
import './TopFooter.css'
import flag from '../asset/united-states.png'

const TopFooter = () => {
  return (
    <div>
        <div className='topFooter'  >
            <div className='subscribeSectionStyle'>
                <div>
                    <h2 style={headingStyle} >BE THE FIRST ONE TO KNOW</h2>
                    <p>Sign up for updates from mettā muse.</p>
                    <div style={inputWrapperStyle} >
                    <input className='inputStyle'/>
                    <button style={subscribeButtonStyle} >SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div style={contactUsStyle} >
                <h2 style={headingStyle} >CONTACT US</h2>
                <p>+91 7060357307</p>
                <p>customercare@mettamuse.com</p>
                <h2 style={headingStyle} >CURRENCY</h2>
                <div style={{display:"flex", alignItems :"center", gap:"5px", lineHeight:"0px"}} >
                    <img height="16px" width={"16px"} alt='USA flag' src={flag} />
                    <p>USD</p>
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
    </div>
  )
}

export default TopFooter

const inputWrapperStyle={
    display: "flex",
    alignItems: "center",
    gap: "8px"
}


const subscribeButtonStyle = {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    height: "45px",
    width: "110px",
    borderRadius: "7px",
    cursor: "pointer"
}

const headingStyle = {
    fontSize:"20px",
    fontWeight: 700
}

const contactUsStyle = {
    width:"50%",
    textAlign:"left"
}