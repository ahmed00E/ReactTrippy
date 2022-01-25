 import React,{useState} from 'react'
 
 
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
         <div>
             {(user.email != "") ? (
                 <div className="welcome">
            
              <h2>welcome, <span>{user.name} </span></h2>
              <button>lLogout</button>
              </div>
             ) : (
                 <
             )}
             
         </div>
     )
 }
 
 export default Login





 

 