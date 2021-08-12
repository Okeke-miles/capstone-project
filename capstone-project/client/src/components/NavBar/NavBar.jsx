import "../NavBar/NavBar.scss"
import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
    const user = null;

    return (
        <div className="login__style">
            <div className="footer-content__style">
               <form>
                   <label className="label__style" htmlFor="username">Username</label>
                   <input name="username" type="text" className ="form-control"/>
                   <label className="label__style" htmlFor="password">Password</label>
                   <input name="password" type="text" className ="form-control"/>
               </form>
            <div>
                {user ? (
                    <div>
                        {user.result.name}
                        <button className="logout__button"> Log Out </button>
                    </div>
                ) : (
                    <Link to= "/auth">
                        <button>Sign In</button>
                    </Link>
                ) }
            </div>

            </div>
        </div>
    )
}

export default NavBar
