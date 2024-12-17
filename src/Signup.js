import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Main from './Main'
import { userContextSignUp } from './App';
export default function Signup() {
    const Navigate = useNavigate()
    const {result, setResult } = useContext(userContextSignUp); // Access setResult from context
    const toLogin = () => {
         Navigate("/login");
    };
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPswd] = useState();
    // const [result, setResult] = useState();
    const url = 'http://localhost:8080/users'
    const handleSignUp = async () => {
      const result = await axios.post(url, {name: name, email: email, pass: pass})
      setResult(name)
      console.log("nameres: ","is: "+name);
      Navigate("/Main")
      
    }
  return (
    // <userContextSignUp.Provider value={{result, setResult}}>

    <div>
      Sign Up
      <p><input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/></p>
      <p><input type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/></p>
      <p><input type='password' placeholder='Enter Password' onChange={(e) => setPswd(e.target.value)}/></p>
        <button onClick={handleSignUp}>Signup</button>
        <hr></hr>
        <button onClick={toLogin}>Alread a member? Login Here...</button>

    </div>
    // </userContextSignUp.Provider>
  )
}
