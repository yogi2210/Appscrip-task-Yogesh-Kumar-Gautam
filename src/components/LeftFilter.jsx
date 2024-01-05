import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons'


const LeftFilter = ({FilterOption}) => {
    const [show, setShow] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid lightgray", paddingBottom:"25px"}} >
        <div style={filterStyle} onClick={()=>setShow(prev => !prev)} >
                    <p>{FilterOption.title}</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div style={{textAlign: "left", paddingBottom: "10px"}} >All</div>
                <div style={show ? dropDownStyle : hideDropDown} >
                   { FilterOption.options.map((option)=>{
                    return <div key={option} style={optionStyle} ><input
                    type='checkbox'
                    value={option}
                    />
                    <label>{option}</label>
                    </div>
                   })}
                    
                </div>
    </div>
  )
}

export default LeftFilter

const optionStyle = {
    display:"flex",
    flexDirection: "row",
    gap:"3px",

}

const filterStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent : "space-between",
    fontWeight: 700
}

const dropDownStyle ={
    
}

const hideDropDown ={
    display:"none"
}