import "../Header/Header.scss"
import { Link, NavLink } from 'react-router-dom'
import wwlogo from '../../assets/logo/ww_.png'

const Header = () => {
    const user = null;
    return (
        <div className="header-container">
            <nav className="page-header">
                <div className="page-header__logo-wrapper">
                    <Link className="logo-link__style" to= "/">
                    <p className="header-name__style">WiiWatch
                    <img className="wwLogo" src={wwlogo} alt="ww logo" /></p>
                    </Link>
                </div>
                <div className="page-header__wrapper">
                    <NavLink className="nav-list__item" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-list__item" to="/videos">
                        Video List
                    </NavLink>
                    <NavLink className="nav-list__item" to="/nextvideo">
                        Watch Live
                    </NavLink>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <NavLink className="menu-list__item" to="/nextvideo">
                            Watch Next Video
                        </NavLink>
                        <NavLink className="menu-list__item" to="/videos">
                            Content
                        </NavLink>
                        <NavLink className="menu-list__item" to="/">
                            Home
                        </NavLink>
                    </div>
                </div>
                {/* <div>
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
            </div> */}
            </nav>
        </div>
    )
}

export default Header