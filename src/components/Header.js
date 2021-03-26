import React from "react";
import Typed from "react-typed";
import { Link } from 'react-scroll';

const Header = () => {
    
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Jennifer Kruk</h1>
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
                <div className="headerMenu">
                    <ul className="ml-auto">
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-90} className="nav-link" href="#">skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">contact</Link>
                        </li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default Header
