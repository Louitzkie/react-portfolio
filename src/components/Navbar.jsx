import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <Link to="/" className="logo">
                            Louitzkie
                        </Link>

                        <button className="navBtn" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </button>

                        <ul className={click ? "navUl navOpen" : " navUl"}>
                            <li>
                                <NavLink onClick={closeMenu} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={closeMenu} to="/project">
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={closeMenu} to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
