import { Link } from "react-router-dom";
import "./Footer.css";
import {
    FaLinkedin,
    FaGithubSquare,
    FaInstagramSquare,
    FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container flex">
                    <small>
                        Made with love ❤️ <br /> &copy; Louis Andrie Cruz
                    </small>
                    <ul className="footer-socials">
                        <Link
                            to="https://www.linkedin.com/in/louis-andrie-cruz-7a4154193/"
                            target="_blank"
                            title="github.com/@Louitzkie"
                            className="social-btn linkedin"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            to="https://github.com/Louitzkie"
                            target="_blank"
                            title="github.com/@Louitzkie"
                            className="social-btn github"
                        >
                            <FaGithubSquare />
                        </Link>
                        <Link
                            to="https://www.instagram.com/ruisukruz/"
                            target="_blank"
                            title="instagram.com/@ruisukruz"
                            className="social-btn instagram"
                        >
                            <FaInstagramSquare />
                        </Link>
                        <Link
                            to="https://www.facebook.com/LouiTzkie"
                            title="facebook.com/@Louitzkie"
                            target="_blank"
                            className="social-btn facebook"
                        >
                            <FaFacebookSquare />
                        </Link>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
