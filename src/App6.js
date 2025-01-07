import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import GoogleLogin from './GoogleLogin'

export default function App6() {
  return (
    <div>
      <GoogleOAuthProvider clientId='166577575223-h7h7rtqbe54c329dta85q54t4oj1dr4s.apps.googleusercontent.com'>
        <GoogleLogin />
      </GoogleOAuthProvider>
    </div>
  )
}
