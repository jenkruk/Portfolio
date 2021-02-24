import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faGithubSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
 import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
                        <div className="d-flex">
                            <a href="mailto: jenkruk@gmail.com" rel="noreferrer" target="_blank">contactkruk@gmail.com</a>
                        </div>
                        <div className="d-flex">
                            <p>Mesa, AZ</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav" href="#">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" className="footer-nav" href="#">About Me</Link>
                                <br/>
                                <Link smooth={true} to="skills" className="footer-nav" href="#">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" className="footer-nav" href="#">Experience</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" className="footer-nav" href="#">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contact" className="footer-nav" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/jenkruk" rel="noreferrer" target="_blank">
                                <div><FontAwesomeIcon className="footerIcon github" icon={faGithubSquare} size="2x" /></div>
                            </a>
                            <a href="https://www.linkedin.com/in/jenkruk/" rel="noreferrer" target="_blank">
                                <div><FontAwesomeIcon className="footerIcon linkedin" icon={faLinkedin} size="2x" /></div>
                            </a>
                        </div>
                        <p className="pt-3 text-center">
                            Jennifer Kruk
                        </p>
                        <p className="pt-3 text-center">
                            Copyright&copy;{new Date().getFullYear()} | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
