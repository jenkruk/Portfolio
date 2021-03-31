import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        <div className="footer">
            <div className="infoRow">
                    <p className="footer-name">
                        Jennifer Kruk
                    </p>
                    <div className="email">
                        <a href="mailto: jenkruk@gmail.com" rel="noreferrer" target="_blank">contactkruk@gmail.com</a>
                    </div>
                    <div className="town">
                        <p>Mesa, AZ</p>
                    </div>
            </div>
            <div className="github">
                <a href="https://github.com/jenkruk" rel="noreferrer" target="_blank">
                    <div><FontAwesomeIcon icon={faGithubSquare} size="2x" /></div>
                </a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/jenkruk/" rel="noreferrer" target="_blank">
                    <div><FontAwesomeIcon icon={faLinkedin} size="2x" /></div>
                </a>
            </div>
            <div className="linksRow">
                    <Link smooth={true} to="about" href="#">About</Link>
                    <br/>
                    <Link smooth={true} to="skills" href="#">Skills</Link>
                    <br/>
                    <Link smooth={true} to="experience" href="#">Experience</Link>
                    <br/>
                    <Link smooth={true} to="portfolio" href="#">Portfolio</Link>
            </div>
            <div className="copyright">
                Copyright &copy;{new Date().getFullYear()} | All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
