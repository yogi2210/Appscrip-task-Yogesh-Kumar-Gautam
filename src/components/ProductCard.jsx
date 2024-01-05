import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({product}) => {
  return (
    <div style={cardStyle}>
        <img style={imageStyle} alt={product.title} src={product.image}/>
        <div style={{lineHeight:"0px"}} >
        <div style={{fontWeight:700, textAlign:"left"}} >{product.title.length > 20 ? <p >{product.title.slice(0, 20).toUpperCase()}...</p> : <p>{product.title.toUpperCase()}</p> }</div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >
        <p style={cardTextStyle} ><span style={{textDecoration:"underline", cursor:"pointer"}} >sign in</span> to see the price</p>
        <FontAwesomeIcon icon={faHeart} />
        </div>
        </div>
    </div>
  )
}

export default ProductCard

const cardStyle = {
    height:"462px",
    border:"1px solid lightgray",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0px 4px"
}

const imageStyle ={
    width:"100%",
    height:"80%"
}

const cardTextStyle = { textAlign:"left", color:"#888792", fontSize:"14px"}