import React, {useState} from 'react'
import './Login.css';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

      const submitHandler = e => {
          e.preventDefault()

          Login(details)
      }

    return (
      
    )
}

export default LoginForm
