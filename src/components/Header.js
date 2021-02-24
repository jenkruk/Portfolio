import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Jennifer Kruk</h1>
                <h2 className="pb-3">Full Stack Web Developer</h2>
                <Typed className="typed-text"
                strings={["React", "Node", "jQuery", "JavaScript", "git", "SASS", "Bootstrap", "AdobeXD", "Photoshop", "Node", "AdobeXD", "HTML", "JSON", "MongoDB", "API's", "Ajax", "Illustrator"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Navbar />
                {/* <a href="#contact" className="btn-main-offer">Contact Me</a> */}
            </div>
        </div>
    )
}

export default Header
