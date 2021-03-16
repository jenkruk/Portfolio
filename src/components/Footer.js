import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
 import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="row h-100">
                            <div className="col">
                                <p className="d-flex w-100">
                                    Jennifer Kruk
                                </p>
                                <div className="d-flex w-100">
                                    <a href="mailto: jenkruk@gmail.com" rel="noreferrer" target="_blank">contactkruk@gmail.com</a>
                                </div>
                                <div className="d-flex w-100">
                                    <p>Mesa, AZ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/jenkruk" rel="noreferrer" target="_blank">
                                <div><FontAwesomeIcon className="footerIcon github" icon={faGithubSquare} size="2x" /></div>
                            </a>
                            <a href="https://www.linkedin.com/in/jenkruk/" rel="noreferrer" target="_blank">
                                <div><FontAwesomeIcon className="footerIcon linkedin" icon={faLinkedin} size="2x" /></div>
                            </a>
                        </div>
                        <div className="row">
                        <p className="m-auto pt-3 copyright">
                            Copyright &copy;{new Date().getFullYear()} | All Rights Reserved
                        </p>
                    </div>
                </div>
                <div className="col-sm-4">
                        <div className="row h-100">
                            <div className="col text-right">
                                <Link smooth={true} to="about" className="" href="#">About</Link>
                                <br/>
                                <Link smooth={true} to="skills" className="" href="#">Skills</Link>
                                <br/>
                                <Link smooth={true} to="experience" className="" href="#">Experience</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" className="" href="#">Portfolio</Link>
                            </div>
                        </div>
                    </div> 
            </div> 
        </div> 
        </div> 
    )
}

export default Footer
