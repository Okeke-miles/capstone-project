import "../Header/Header.scss"
// import logo from '../../assets/logo/inStock-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="page-header">
            <div className="page-header__logo-wrapper">
                <p className="header-name__style">WiiWatch</p>
            </div>
            <div className="page-header__wrapper">
                <Link 
                    // className={path === "/" ? "page-header__link page-header__link--active" : "page-header__link"} 
                    to="/">
                        Home
                </Link>
                <Link 
                    // className={path === "/" ? "page-header__link  page-header__link--active" : "page-header__link"} 
                    to="/schedule">
                        Schedule
                </Link>
                <Link 
                    // className={path === "/" ? "page-header__link  page-header__link--active" : "page-header__link"} 
                    to="/videos">
                        Get Started
                </Link>
                <Link 
                    to="/videos">
                        Sign In
                </Link>
                <Link 
                    to="/nextvideo">
                        Next Video
                </Link>
            </div>
        </nav>
    )
}

export default Header