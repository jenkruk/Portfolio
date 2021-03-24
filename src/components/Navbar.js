import React, { useState } from "react";
import { Link } from 'react-scroll';
//  REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);

    const revealNav = () => {
        if (window.scrollY >= 400) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }
        window.addEventListener("scroll", revealNav)

    return (
    <nav className={navbar ? 'navbar active navbar-expand-lg fixed-top' : 'navbar navbar-expand-lg fixed-top'} >
        {/* <div className="container"> */}
            <div className="navbar-brand pl-5" href="#">Jennifer Kruk</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setOpen(open ? false : "open")}>
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
                </button>
            {/* </div> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: open ? 'block' : 'none'}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" offset={-100} className="nav-link" href="#" onClick={() => {setOpen(false)}}>⇧top<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" offset={-100} className="nav-link" href="#" onClick={() => {setOpen(false)}}>about</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="skills" offset={-90} className="nav-link" href="#" onClick={() => {setOpen(false)}}>skills</Link>
                    </li>
                    <li className="nav-item" >
                        <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#" onClick={() => {setOpen(false)}}>experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#" onClick={() => {setOpen(false)}}>portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#" onClick={() => {setOpen(false)}}>contact</Link>
                    </li>
                </ul>
            </div>
    </nav>
    )
}

    export default Navbar;
