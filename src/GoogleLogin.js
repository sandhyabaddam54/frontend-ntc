import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google';

export default function GoogleLogin() {
    const [usr, setUsr] = useState([]);
    const login = useGoogleLogin({
        onSuccess: (res) => {setUsr(res)
            console.log("succss: "," "+res.access_token)
        },
        onError: (error) => console.log("Login failed", error)
    });

    useEffect(() => {
        if(usr) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${usr.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${usr.access_token}`,
                        Accept: "Application/json"
                    },
                }
            )
            .then((res) => {
                console.log(res.data.name);
                console.log(res.data.email);
            })
            .catch((err) => console.log(err));
        }
    }, [usr]);

  return (
    <div>
      <button onClick={login}>Sign In with Google</button>
    </div>
  )
}
