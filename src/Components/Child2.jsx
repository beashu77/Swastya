import React from 'react'
import { useState } from 'react'

const Child2 = ({first,sec,add}) => {

   const [one,setOne] = useState(0)
   const [two,setTwo] = useState(0)
  
  return (
    <div style={{border:'1px solid',width:'300px',height:'200px'}}>
        <h1>Child2</h1>
        {first ? first :"NaN"} 
        <input value={first} />{!+first*2 ? "" : +first*2}
        <br/>
        {!sec ? "NaN":sec} 
        <input value={sec} />{!+sec*2 ? "" : +sec*2}
        <br/>
        {!add ?   "" :add}<input value={add}/>{!+add*2 ? "" : +add*2}
    </div>
  )
}

export default Child2