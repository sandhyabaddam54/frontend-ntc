import React, { useEffect, useState } from 'react'

export default function App3() {
  const [num, setNum] = useState("1");
  const [num2, setNum2] = useState();
  useEffect(() => {
    // setNum2("useEffect called")
    if(num === "1") setNum2("one")
        else if(num2 === "2") setNum2("Two")
    else setNum2("Unknown");
  }, [num]);
  //   }, [num, num2]);               //we can single and multiple value we can pass here
    return (
    <div>
      <p><input type='text' value={num} onChange={(e) => setNum(e.target.value)}></input></p>
      <p><input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}></input></p>
      <hr></hr>
    </div>
  )
}
