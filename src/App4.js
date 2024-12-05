import React, { useState } from 'react'

export default function App4() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState();
    const [resultAdd, setResultAdd] = useState();
    const [resultSub, setResultSub] = useState();
    const [result, setResult] = useState();
    var count = 0;
    const handleAdd = () => {
        // setResultAdd(Number(num1)+ Number(num2));
        //    count = Number(num1) + 1;
           setNum1(Number(num1)+1);
    }
    const handleSubtract = () => {
        // setResultSub(Number(num1) - Number(num2))
        // count = Number(num1) - 1;
        setNum1(Number(num1)-1);
    }
    const handleSubmit = () => {
          count  = Number(num1) + 1;
          setNum1(count);
    }
  return (
    <div>
      <p><input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}></input></p>
      {/* <p><input type = "number" onChange={(e) => setNum2(e.target.value)}></input></p> */}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <hr></hr>
      {num1}
      {/* <hr></hr>
      {resultSub} */}
    </div>
  )
}
