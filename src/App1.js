import React, { useState } from 'react'

export default function App1() {
    const [num, setNum] = useState(0);        //num is a value and setNum is a function to use to update value in mum variable it can be a, b also
    const [result, setResult] = useState(0);
    const handleClick = () => {
        setResult(num * num)
    };
    const handleSubmit = (name) => {
        alert(name)
    };
  return (
    <div>
      <p><input type="number" onChange={(e) => setNum(e.target.value)}></input></p>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleSubmit("sandhya")}>Submit</button>
      <hr></hr>
      {result}
    </div>
  )
}
