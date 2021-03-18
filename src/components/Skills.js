import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGitSquare,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import jQueryIcon from "../images/skills/jquery-logo.png";
import mongoDbIcon from "../images/skills/mongodb.png";
import jsonIcon from "../images/skills/json.png";
import sqlIcon from "../images/skills/sql.png";
import postmanIcon from "../images/skills/postman.png";
import sequelizeIcon from "../images/skills/sequelize.png";
import ajaxIcon from "../images/skills/ajax.png";
import herokuIcon from "../images/skills/heroku.png";
import agileIcon from "../images/skills/agile.png";
import bootstrapIcon from "../images/skills/bootstrap.png";

const Skills = () => {
  return (
    <div className="skills">
      <h2 id="skills">skills</h2>
      <div className="skillsTagline font-italic pb-5">
        Pssst.... have a little fun and hover over your favorites!
      </div>
      <div className="container pb-5">
        <div className="row pb-3">
          <div className="col-sm-3 col-6">
            <div className="circle steelCircle">
              <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
            </div>
            <div className="skillName mb-3">React</div>
            <div className="circle sageCircle">
              <FontAwesomeIcon className="icon" icon={faNodeJs} size="2x" />
            </div>
            <div className="skillName mb-3">Node JS</div>
            <div className="circle cornflowerCircle">
              <FontAwesomeIcon className="icon" icon={faJs} size="2x" />
            </div>
            <div className="skillName mb-3">JavaScript</div>
            <div className="circle terracottaCircle">
              <FontAwesomeIcon className="icon" icon={faGitSquare} size="2x" />
            </div>
            <div className="skillName mb-3">Git</div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="circle terracottaCircle">
              <FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
            </div>
            <div className="skillName mb-3">Html</div>
            <div className="circle steelCircle">
              <FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" />
            </div>
            <div className="skillName mb-3">CSS</div>
            <div className="circle sageCircle">
              <img
                className="skillsLogo icon jQueryIcon"
                src={jQueryIcon}
                alt=""
              />
            </div>
            <div className="skillName mb-3">jQuery</div>
            <div className="circle cornflowerCircle">
              <img className="skillsLogo icon" src={mongoDbIcon} alt="" />
            </div>
            <div className="skillName mb-3">MongoDB</div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="circle cornflowerCircle">
              <img className="skillsLogo icon" src={jsonIcon} alt="" />
            </div>
            <div className="skillName mb-3">JSON</div>
            <div className="circle terracottaCircle">
              <img className="skillsLogo icon" src={sqlIcon} alt="" />
            </div>
            <div className="skillName mb-3">SQL</div>
            <div className="circle steelCircle">
              <img className="skillsLogo icon" src={postmanIcon} alt="" />
            </div>
            <div className="skillName mb-3">Postman</div>
            <div className="circle sageCircle">
              <img className="skillsLogo icon" src={sequelizeIcon} alt="" />
            </div>
            <div className="skillName mb-3">Sequelize</div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="circle sageCircle">
              <img className="skillsLogo icon" src={ajaxIcon} alt="" />
            </div>
            <div className="skillName mb-3">Ajax</div>
            <div className="circle cornflowerCircle">
              <img className="skillsLogo icon" src={herokuIcon} alt="" />
            </div>
            <div className="skillName mb-3">Heroku</div>
            <div className="circle terracottaCircle">
              <img className="skillsLogo icon" src={agileIcon} alt="" />
            </div>
            <div className="skillName mb-3">Agile</div>
            <div className="circle steelCircle">
              <img className="skillsLogo icon" src={bootstrapIcon} alt="" />
            </div>
            <div className="skillName mb-3">Bootstrap</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
