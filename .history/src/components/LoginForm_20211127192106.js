import React from 'react'

function LoginForm() {
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
               <input type="text" password="pass" id="email"/> 
               
           </div>

           </div>
       </form>
    )
}

export default LoginForm
