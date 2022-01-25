import React from 'react'

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                {*/ERROE! */}
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name">
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="name" id="name">
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="name">
                </div>
            </div>
        </form>
    )
}

export default LoginForm
