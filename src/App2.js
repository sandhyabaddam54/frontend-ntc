import React, { useState } from 'react'

export default function App2() {
    const [num1, setNum1] =useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();
    const handleAdd = () => {
          setResult(Number(num1) + Number(num2))
    }
  return (
    <div>
      <p><input type='number' onChange={(e) => setNum1(e.target.value)}></input></p>
      <p><input type='number' onChange={(e) => setNum2(e.target.value)}></input></p>
      <button onClick={handleAdd}>Add</button>
      <hr></hr>
      {result}
    </div>
  )
}
