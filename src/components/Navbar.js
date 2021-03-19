import React, { useState } from "react";
import { Link } from 'react-scroll';
//  REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const revealNav = () => {
        if (window.scrollY >= 400) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }
        window.addEventListener("scroll", revealNav)

    return (
    <Navbar className={navbar ? 'navbar active navbar-expand-lg fixed-top' : 'navbar navbar-expand-lg fixed-top'} showMenu={showMenu}>
        <div className="container">
        <div className="navbar-brand" href="#">Jennifer Kruk</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link smooth={true} to="home" offset={-100} className="nav-link" href="#" onClick={() => setShowMenu(false)}>⇧top<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="about" offset={-100} className="nav-link" href="#"  onClick={() => setShowMenu(false)}>about</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="skills" offset={-90} className="nav-link" href="#"  onClick={() => setShowMenu(false)}>skills</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#" onClick={() => setShowMenu(false)}>experience</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#" onClick={() => setShowMenu(false)}>portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#" onClick={() => setShowMenu(false)}>contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </Navbar>
    )
    }

    export default Navbar
