import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState();
  const[pass, setPass] = useState();
  const [result, setResult] = useState();
  const url = 'http://localhost:8080/find'
    const navigate = useNavigate();
    const handleSubmit = () => {
          navigate("/signup")
    }
    const handleLogin = async () => {
      const result = await axios.post(url, {email, pass})
       console.log("loginss: ","is: "+result.status);
      let flag=  (result.data.message) ? "Access Granted" : "Access denied"
        //  setResult(flag) 
      if(result.data.message){
          // alert("successfully login")
          navigate("/main")
       }else{
        // alert("user not found")
        setResult("Access denied")
       }
    }
  return (
    <div>
      Login
      <h2>{result}</h2>
      <p><input type='text' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/></p>
      <p><input type='password' placeholder='Enter password' onChange={(e) => setPass(e.target.value)}/></p>
      <button onClick={handleLogin}>Login</button>
      <hr></hr>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  )
}
