import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <Link to="/" className="logo">
                            Louitzkie
                        </Link>

                        <div className="hamburger">
                            <span>
                                <FaBars />
                            </span>
                        </div>

                        <ul className="navUl ">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project">Project</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
