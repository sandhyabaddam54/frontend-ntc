import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate = useNavigate()
    const toLogin = () => {
         Navigate("/login");
    };
  return (
    <div>
      Sign Up
      <p><input type='text' placeholder='Enter Name' /></p>
      <p><input type='text' placeholder='Enter Email' /></p>
      <p>
        Date of Birth:<input type='datetime-local' /></p>
        <button>Signup</button>
        <hr></hr>
        <button onClick={toLogin}>Alread a member? Login Here...</button>

    </div>
  )
}
