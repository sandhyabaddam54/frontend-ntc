import React, { useState } from 'react'
import Temp from './Temp'
export default function Footer() {
  const[name, setName] = useState();
  const greet = () => {
      alert(name)
  }
  const greet1 = (name) => {
    alert(name)
  }

  return (
    <div>
      <hr></hr>
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      <button onClick={greet}>Click</button>
      {/* <button onClick={() => greet1("John")}>Click</button> */}
      <Temp name = "Cathy"/>            
      <h3>@Copyright 2023. All rights reserved.</h3>
    </div>
  )
}
