 import React,{useState} from 'react'
 import LoginForm from './LoginForm'
 
 function Login ()  {
     const adminUser = {
         email :"adiman@admin",
         password: "admin123"

     }

     const [user, setUser] = useState ({name:"", email: ""})
     const [error, setEerror] = useStata("")
     const login = details => {
         console.log(details)
     }
     const logout = () => {
        console.log(logout);
     }
     
                         
    

   return (

     )
 }
 
 export default Login





 

 