import React, { useState } from 'react'
import Child1 from './Child1'
import { useContext, createContext } from 'react'
export const UserContext = createContext();

export default function App5() {
    const [user, setUser ] = useState("sandhya");
const handleSubmit = () => {
    setUser("Mike")
}
  return (
    <UserContext.Provider value={{user, setUser}}>
        {user}
        <button onClick={handleSubmit}>Submit</button>
        <hr></hr>
      <Child1 />             
    </UserContext.Provider>
  )
}
