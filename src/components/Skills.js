import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs, faGitSquare, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import jQueryIcon from "../images/skills/jquery-logo.png";
import mongoDbIcon from "../images/skills/mongodb.png";
import jsonIcon from "../images/skills/json.png";
import sqlIcon from "../images/skills/sql.png";
import postmanIcon from "../images/skills/postman.png";
import sequelizeIcon from "../images/skills/sequelize.png";
import ajaxIcon from "../images/skills/ajax.png";
import herokuIcon from "../images/skills/heroku.png";
import agileIcon from "../images/skills/agile.png";
import bootstrapIcon from "../images/skills/bootstrap.png"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h2 className="py-5">skills</h2>
                <div className="container pb-5">
                    <div className="row pb-3">
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect pinkCircle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
                            <div>React</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect lightTurquoiseCircle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x" /></div>
                            <div>Node JS</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect orangeCircle"><FontAwesomeIcon className="icon" icon={faJs} size="2x" /></div>
                            <div>JavaScript</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect darkTurquoiseCircle"><FontAwesomeIcon className="icon" icon={faGitSquare} size="2x" /></div>
                            <div>Git</div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect darkTurquoiseCircle"><FontAwesomeIcon className="icon" icon={faHtml5} size="2x" /></div>
                            <div>Html</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect pinkCircle"><FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" /></div>
                            <div>CSS</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                        <div className="circle effect lightTurquoiseCircle">
                            <img className="skillsLogo icon jQueryIcon" src={jQueryIcon} alt=""/>
                        </div>
                            <div>jQuery</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect orangeCircle">
                                <img className="skillsLogo icon" src={mongoDbIcon} alt=""/>
                            </div>
                            <div>MongoDB</div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                        <div className="circle effect orangeCircle">
                                <img className="skillsLogo icon" src={jsonIcon} alt=""/>
                            </div>
                            <div>JSON</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect darkTurquoiseCircle">
                                <img className="skillsLogo icon" src={sqlIcon} alt=""/>
                            </div>
                            <div>SQL</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect pinkCircle">
                                <img className="skillsLogo icon" src={postmanIcon} alt=""/>
                            </div>
                            <div>Postman</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect lightTurquoiseCircle">
                                <img className="skillsLogo icon" src={sequelizeIcon} alt=""/>
                            </div>
                            <div>Sequelize</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect lightTurquoiseCircle">
                                <img className="skillsLogo icon" src={ajaxIcon} alt=""/>
                            </div>
                            <div>Ajax</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect orangeCircle">
                                <img className="skillsLogo icon" src={herokuIcon} alt=""/>
                            </div>
                            <div>Heroku</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect darkTurquoiseCircle">
                                <img className="skillsLogo icon" src={agileIcon} alt=""/>
                            </div>
                            <div>Agile</div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="circle effect pinkCircle">
                                <img className="skillsLogo icon" src={bootstrapIcon} alt=""/>
                            </div>
                            <div>Bootstrap</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Skills
