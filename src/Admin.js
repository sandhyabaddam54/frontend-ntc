import axios from 'axios';
import React, { useState } from 'react'

export default function Admin() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [result, setResult] = useState();
    const url = "http://localhost:8080/"
    const handleSave = async () => {
        // setResult(name, price);
     try{
       const result= await axios.post(url, {name, price})
       setResult("Product added successfully.")
       alert(result);
     } catch(error) {
        setResult("Failed to add product")
        alert(result);
     }
        
    }
  return (
    <div>
        <p>Admin</p>
      <p><input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter product name'></input></p>
      <p><input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='enter price'></input></p>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}
