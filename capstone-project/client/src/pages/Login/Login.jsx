import "../Login/Login.scss"
import React from "react";

const Login = () => {

    return (
        <div>
         <h1>Registration</h1>
           <form>
                    <div>
                    <label className="label__style" htmlFor="username">Username</label>
                    <input name="username" type="text" className ="form-control"/>
                    <label className="label__style" htmlFor="password">Password</label>
                    <input name="password" type="text" className ="form-control"/>
                    </div>
            </form>
        </div>
    )
}

export default Login