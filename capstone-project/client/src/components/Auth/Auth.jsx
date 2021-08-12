import "../Auth/Auth.scss"
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from "react-google-login"

const Auth = () => {
 
    const [isSignup, setIsSignup] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        
    }

    const switchMode = (e) => {
        e.preventDefault()
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: "AUTH", data: { result, token }})
        } catch(error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log("Google sign in unsuccessful. Try again later")
    }


    return (
        <div>
           {/* <button>{isSignup ? "Sign Up" : "Sign In"}</button> */}
           <form >
               {
                isSignup ? (
                    <div>
                        <label className="label__style" htmlFor="firstname">First Name</label>
                        <input name="firstname" type="text" className ="form-control"/>
                        <label className="label__style" htmlFor="lastname">Last Name</label>
                        <input name="lastname" type="text" className ="form-control"/>
                        <label className="label__style" htmlFor="password">Password</label>
                        <input name="password" type="password" className ="form-control"/>
                        <label className="label__style" htmlFor="email">Email</label>
                        <input name="email" type="email" className ="form-control"/>
                    </div>
                ) :  
                <div>
                    <label className="label__style" htmlFor="email">Email</label>
                    <input name="email" type="email" className ="form-control"/>
                    <label className="label__style" htmlFor="password">Password</label>
                    <input name="password" type="password" className ="form-control"/>
                </div>
               }
               <button type="submit">
                   {isSignup ? 'Sign Up' : 'Sign In'}
               </button>
               <GoogleLogin 
                    clientId= "451443583910-qft7rn4qkave0eogl6te37e21i9vt7ok.apps.googleusercontent.com"
                    render={(renderProps)=> (
                        <button className="googlebutton" onClick={renderProps.onClick}disabled={renderProps.disabled}>
                            Google Sign In
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
               />
               <button onClick = {switchMode}>
               {isSignup ? 'Already have an account?Sign In' : "Don't have an account? Sign up"}
               </button>
            </form>
        </div>
    )
}

export default Auth