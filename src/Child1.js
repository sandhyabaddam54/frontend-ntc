import React, { useContext } from 'react'
import { UserContext } from './App5'
export default function Child1() {
    const {user, setUser} = useContext(UserContext);   // we are extracting user form userContext then we can use it anywhere

    const handleSubmit = () => {
          setUser("Cathy")
    }
  return (
    <div>
      {user}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
