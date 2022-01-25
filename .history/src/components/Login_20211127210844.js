import React, {useState} from 'react'
import LoginForm from './LoginForm'

function Login() {
const adminUser = {
    email: "konexio@konexio.com",
    password: "12345678"
}


const [user, setUser] =   useState({name: "", email: ""})
const [error, setUrror] =  useState("")


const Login = details => {
    console.log(details)  


    if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("Loggedin")
        setUser({
            name: details.name,
            email: details.email
        })
    } else {
        console.log("Details do not match!");
    }
}


const Logout = () => {
   setUser({name: "", email: ""})
}


    return (
        <div>
       {(user.email != "") ? (
          <div className="welcome">
              <h2>Welcome, <span>{user.name} </span></h2>
              <button onClick= >Logout</button>
          </div>
       ) : (
           <LoginForm Login={Login} error={error} />
       )}

        </div>
    )
}

export default Login
