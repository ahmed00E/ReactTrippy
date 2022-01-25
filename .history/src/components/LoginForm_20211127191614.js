import React from 'react'

function LoginForm() {
    return (
       <form>
           <div className="form_inner">
               <h2>Login</h2>
               {/*ERROR*/}
               <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text"></input>
               
           </div>

           </div>
       </form>
    )
}

export default LoginForm
