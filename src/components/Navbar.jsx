import React from 'react'
import './Navbar.css'
import logo from '../asset/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <>
    <div className='topBlackBar' >
         <span className='topBlackBarText' >ecommerce website</span>
         <span style={topBalckBarText}>ecommerce website</span>
         <span className='topBlackBarText'>ecommerce website</span>
    </div>
    <div className='navBarSection'>
        <div className='logoAndIconSection'>
            <div>
                <img height="50px" width="50px" src={logo} alt='companyLogo' />
            </div>
            <div className='middleLogoStyle'>LOGO</div>
            <div className='iconStyle'  >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBagShopping} />
            <FontAwesomeIcon className='hideIcon' icon={faUser} />
            <div className='hideIcon' >
            <span style={languageStyle}>ENG</span>
            <FontAwesomeIcon icon={faAngleDown} />
            </div>
            </div>
        </div>
        <div className='pageLinkStyles'>
            <a style={linkStyle}>SHOP</a>
            <a style={linkStyle}>SKILLS</a>
            <a style={linkStyle}>STORIES</a>
            <a style={linkStyle}>ABOUT</a>
            <a style={linkStyle}>CONTACT US</a>
        </div>
    </div>
    
    </>
  )
}

export default Navbar


const topBalckBarText = {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14px",
    letterSpacing: "1px",
    textAlign: "left",
    color: "#EB4C6B"

}

const languageStyle = {
    fontSize: "15px",
    fontWeight: 700,
    paddingRight: "5px"
}

const linkStyle = {
    fontWeight: 700,
    cursor:"pointer"
}