import React, { useEffect, useState } from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import LeftFilter from '../components/LeftFilter'

const Product = () => {
const [products, setProducts] = useState([])
const [showFilter, setShowFilter] = useState(true)
const [showRecommended, setShowRecommended] = useState(false)
const [filterName, setFilterName] = useState("RECOMMENDED")

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
},[])


  return (
    <div className='productSectionStyle'>
        <div style={topBar} >
            <div className='topBarLeftItems' >
                <span>{products.length} Items</span>
                {showFilter ? 
                <div style={{cursor:"pointer", color:"#888792"}}  onClick={()=>setShowFilter(false)}>
                <FontAwesomeIcon icon={faAngleLeft} />
                <span style={filterShowHideText} >Hide Filter</span>
                </div>
                : 
                <div style={{cursor:"pointer", color:"#888792"}}  onClick={()=>setShowFilter(true)} >
                <FontAwesomeIcon icon={faAngleRight} />
                <span style={filterShowHideText} >Show Filter</span>
                </div>
                }
            </div>
            <div className="showFilterButton">
                <p>FILTER</p>
            </div>
            <div style={{position:"relative"}}  >
                <div onClick={()=>{setShowRecommended(prev => !prev)}} >
                <span style={{paddingRight:"5px", fontWeight:700}}>{filterName}</span>
                <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div style={showRecommended ? recommendedDropDownStyle : hideRecommendedDropDownStyle } >
                    {
                        RecommendedFilterArray.map((item)=>{
                            return <p key={item} style={{cursor: "pointer"}} onClick={()=>{setFilterName(item)}} value={item} >{item}</p>
                        })
                    }
                </div>
            </div>
        </div>
        <div style={mainProductSection} >

            <div className={showFilter ? 'leftProductBar' : 'hideleftProductBar'}>
                {FilterOptions.map((FilterOption)=>{
                    return <LeftFilter key={FilterOption.title} FilterOption = {FilterOption} />
                })}

            </div>
            <div className={showFilter ? 'rightProductBar' : 'rightProductBarFull'}>
                {products.map((product)=>{
                    return <ProductCard key={product.title} product={product}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Product

const FilterOptions = [
    {
        title : "IDEAL FOR",
        options: ["Men", "Women", "Baby & Kids" ]
    },
    {
        title : "OCCATION",
        options: ["Party", "Cultural Activity", "Wedding" ]
    },
    {
        title : "FABRIC",
        options: ["Cotton", "Silk", "Rayon" ]
    },
    {
        title : "WORK",
        options: ["Casual", "Outdoor", "Office" ]
    },
    {
        title : "SEGMENT",
        options: ["Party", "Cultural Activity", "Wedding" ]
    },
    {
        title : "PATTERN",
        options: ["Solid", "Horizontal Stripe", "Vertical Stripe" ]
    }
]

const RecommendedFilterArray = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE - LOW TO HIGH",
    "PRICE - HIGH TO LOW"
]

const recommendedDropDownStyle = {
    position:"absolute",
    width:"180px", 
    backgroundColor:"white",
    top: "30px",
    right:"0px",
    boxShadow: "0px 0px 2px 0px",
    textAlign: "right",
    padding:"0px 5px"
}

const hideRecommendedDropDownStyle = {
    display:"none"
}


const filterShowHideText = {paddingLeft:"5px", textDecoration:"underline"}


const topBar = {
    padding:"20px 0px",
    display: "flex",
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
    justifyContent: "space-between"
}


const mainProductSection ={
    display:"flex",
    gap:"5px",
    marginTop:"25px"
}

