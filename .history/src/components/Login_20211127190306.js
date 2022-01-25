import React, {useState} from 'react'

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
           <div className"
       )}

        </div>
    )
}

export default Login
