import React from 'react'
import './Footer.css'
import TopFooter from '../components/TopFooter'
import BottomFooter from '../components/BottomFooter'

const Footer = () => {
  return (
    <div className='footerWrapper'>
        <TopFooter/>
        <BottomFooter/>
    </div>
  )
}

export default Footer


