import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="infoRow">
        <p className="footer-name">Jennifer Kruk</p>
        <div className="email">
          <a href="mailto: jenkruk@gmail.com" rel="noreferrer" target="_blank">
            contactkruk@gmail
          </a>
        </div>
        <div className="town">
          <p>Mesa, AZ</p>
        </div>
      </div>
      <div className="github">
        <a href="https://github.com/jenkruk" rel="noreferrer" target="_blank">
          <div>
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </div>
        </a>
        <p>Github</p>
      </div>
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/jenkruk/" rel="noreferrer" target="_blank"
        >
          <div>
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" href="https://www.linkedin.com/in/jenkruk/" rel="noreferrer" target="_blank"/>
          </div>
        </a>
        <p>LinkedIn</p>
      </div>
      <div className="resume">
        <a
          href="https://docs.google.com/document/d/14dZDhUKdKUiveZPzRoiWjDhoSF6HngUHoE2wYr2lV5o/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <FontAwesomeIcon className="icon" icon={faFileAlt} size="2x" />
          </div>
        </a>
        <p>Resume</p>
      </div>
      <div className="linksRow">
        <Link smooth={true} to="about" href="#">
          About
        </Link>
        <br />
        <Link smooth={true} to="skills" href="#">
          Skills
        </Link>
        <br />
        <Link smooth={true} to="experience" href="#">
          Experience
        </Link>
        <br />
        <Link smooth={true} to="portfolio" href="#">
          Portfolio
        </Link>
      </div>
      <div className="copyright">
        Copyright &copy;{new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
