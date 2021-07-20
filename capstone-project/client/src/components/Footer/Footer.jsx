import "../Footer/Footer.scss"
import { Link, NavLink } from 'react-router-dom'
import youtube from "../../assets/logo/yt_logo.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content__style">
                <div className="support__style">
                    <p className="supported-content__style" >
                        Supported Content:</p>
                    <img className="youtube-logo__style" src={youtube} alt="youtube-logo"/>
                </div>

                <div className="contact-details__style">
                    <h4 className="contact__style"> Contact Us </h4>
                    <p className="contact__style"> Email: <a class = "footer__link" rel="noreferrer" href= "mailto:franklinokeke9@gmail.com" target="_blank">franklinokeke9@gmail.com</a> </p>
                    <p className="contact__style"> Address </p>
                </div>
            </div>
        </div>
    )
}

export default Footer