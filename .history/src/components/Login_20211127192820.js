import React, {useState} from 'react'
import LoginForm from './LoginForm'

function Login() {
const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
}


const [user, setUser] =   useState({name: "", email: ""})
const [error, setUrror] =  useState("")


const Login = datails => {
    console.log(datails);  
}

const Logout = () => {
    console.log("Logout");
}


    return (
        <div>
       {(user.email != "") ? (
          <div className="welcome">
              <h2>Welcome, <span>{user.name} </span></h2>
              <button>Logout</button>
          </div>
       ) : (
           <LoginForm Login={Login} ER />
       )}

        </div>
    )
}

export default Login
