import React from "react";
import Typed from "react-typed";
import { Link } from 'react-scroll';
import Navbar from './Navbar'

const Header = () => {
    
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Jennifer Kruk</h1>
                <h2 className="pb-3 title">Full Stack Web Developer</h2>
                <Typed className="typed-text"
                strings={
                    [
                    "JavaScript", 
                    "React", 
                    "jQuery", 
                    "HTML", 
                    "git", 
                    "SASS", 
                    "Bootstrap", 
                    "Agile", 
                    "Photoshop", 
                    "Node", 
                    "AdobeXD", 
                    "CSS", 
                    "JSON", 
                    "MongoDB", 
                    "API", 
                    "Ajax", 
                    "Illustrator"
                ]
            }
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Navbar />
                <div className="headerMenu">
                <ul className="ml-auto">
                <li className="nav-item">
                    <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#">skills</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">contact</Link>
                </li>
            </ul>
            </div>
                {/* <a href="#contact" className="btn-main-offer">Contact Me</a> */}
            </div>
        </div>
    )
}

export default Header
