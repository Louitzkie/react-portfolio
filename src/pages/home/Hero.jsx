import { Link } from "react-router-dom";
import {
    FaLinkedin,
    FaGithubSquare,
    FaInstagramSquare,
    FaFacebookSquare,
} from "react-icons/fa";

import HeroImg from "../../../public/Hero-template.png";

const Hero = () => {
    const currentYear = new Date();
    const year = currentYear.getFullYear();
    return (
        <section className="hero">
            <div className="container flex">
                <div className="hero__content flow-content">
                    <h2 className="hero__content-subtitle">Hi, I am Louis!</h2>
                    <h1 className="hero__content-title">
                        Don't have <span>website</span> in {year}?
                    </h1>
                    <p className="hero__content-copy">
                        You're on the right place and time i will help you build
                        your bussiness and attracted potential customer.
                    </p>

                    <Link to="/contact" className="btn btn-primary">
                        Get in Touch
                    </Link>
                </div>

                <div>
                    <img className="hero__img" src={HeroImg} alt="" />
                </div>

                <div className="socials">
                    <Link
                        to="https://www.linkedin.com/in/louis-andrie-cruz-7a4154193/"
                        target="_blank"
                        title="linkedin.com/@Louitzkie"
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
