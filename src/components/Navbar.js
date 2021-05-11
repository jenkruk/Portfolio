import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [navVisible, setNavVisible] = useState("appBarTransparent")

    const navRef = React.useRef();
    navRef.current = navVisible;

    useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY > 550;

            if(show) {
                setNavVisible('fixed-navbar');
                // console.log("navbar is visible");
            } else {
                setNavVisible("appBarTransparent");
                // console.log("navbar is invisible");
            }
        }
            document.addEventListener('scroll', handleScroll)
            return () => {
            document.removeEventListener('scroll', handleScroll)
            }
        }, [])

    return (
        <div id="nav" className={navRef.current}>
            <h3 className="name">Jennifer Kruk</h3>
            <ul className={isMobile? "nav-links-mobile" : "nav-links"}>
                <Link smooth={true} to="home" offset={-100} href="#" className="nav-home">
                    <li onClick={() => setIsMobile(false)}>⇧top</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="about" offset={-100} href="#" className="nav-about">
                    <li onClick={() => setIsMobile(false)}>about</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="skills" offset={-100} href="#" className="nav-skills">
                    <li onClick={() => setIsMobile(false)}>skills</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="experience" offset={-100} href="#" className="nav-experience">
                    <li onClick={() => setIsMobile(false)}>experience</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="portfolio" offset={-100} href="#" className="nav-portfolio">
                    <li onClick={() => setIsMobile(false)}>portfolio</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="references" offset={-70} href="#" className="nav-references">
                    <li onClick={() => setIsMobile(false)}>references</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="contact" offset={-100} href="#" className="nav-contact">
                    <li onClick={() => setIsMobile(false)}>contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<i className="close">X</i>) : (<i className="fas fa-bars fa-xs"></i>)}
            </button>
        </div>
    )
}

export default Navbar
