import React, {useState} from 'react'

function LoginForm({ Login, errror}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

      const submitHandler =

    return (
       <form>
           <div className="form_inner">
               <h2>Login</h2>
               {/*ERROR*/}
               <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name"/> 
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="text" email="email" id="email"/> 
               
           </div>
           <div className="form-group">
               <label htmlFor="passxord">Password</label>
               <input type="text" password="password" id="password"/> 
               
           </div>
           <input type="submit" value="LOGIN" /> 

           </div>
       </form>
    )
}

export default LoginForm
