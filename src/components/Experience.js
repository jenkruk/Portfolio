import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h2 id="experience">experience</h2>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Nov 2020 - <span>Current</span></h4>
            <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Tutor</b> | 2U 
            <p> Online Tutor for students that attend coding bootcamps through 2U/Trilogy
              in <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>full stack</b> and <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>UI/UX </b>applications including <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Javascript, jQuery, HTML,
              CSS, Bootstrap, MongoDB, React, Node, Express.js, Responsive Design,
              GitHub</b> et al
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Sept 2020</h4>
            <p>Received Certification from The Job Hackers <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Agile MBA</b> class</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4> July 2020</h4>
            <p>
              Certificate in <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Full Stack Web Development </b> from the
              University of Arizona
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>2011 - 2020</h4>
            <p>
            <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Owner </b>| Jennifer Kruk Photography <br/> Specializing in high school senior portraits and real estate
              photography <br/> Photographer - Editor | <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Photoshop, </b>Lightroom <br/>
              Graphic Designer | <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Illustrator, </b>InDesign Web Design
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>2016 - 2008</h4>
            <p>
            <b style={{fontWeight: "bolder", color: "black", letterSpacing: "2px"}}>Client Associate</b> | Wells Fargo Advisors
            <br />
                Executive Administrative Assistant and Client Associate for Lentini Wealth Management Group.  Main responsibilities included opening accounts, customer service, transactions and event planning
            </p>
          </div>
        </div>
        {/* - */}
        {/* <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>2018-2020</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
              maiores enim mollitia voluptatibus minus quisquam reiciendis quas
              laboriosam asperiores quo eum molestiae non temporibus rerum
              cupiditate dolorum culpa minima nemo tenetur, hic eveniet soluta
              perspiciatis commodi doloribus? Natus, nesciunt voluptatem.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
