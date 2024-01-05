import React from 'react'

const Header = () => {
  return (
    <div style={headerStle} >
        <div style={descriptionStyle} >
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p >Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    </div>
  )
}

export default Header

const headerStle = {
    display: "flex",
    justifyContent: "center",
    padding: "60px 15px"
}


const descriptionStyle = {
    width:"500px"
}