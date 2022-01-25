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


    return (
        <div>
            mhiii

        </div>
    )
}

export default Login
