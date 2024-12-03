import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = () => {
          navigate("/signup")
    }
  return (
    <div>
      Login
      <p><input type='text' placeholder='Enter email' /></p>
      <p><input type='password' placeholder='Enter password' /></p>
      <button>Login</button>
      <hr></hr>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  )
}
