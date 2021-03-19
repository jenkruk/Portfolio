import React from "react";
import kyle from "../images/koala.jpg";

const AboutMe = () => {
    return (
        <div className="container aboutMe">
            <div className="photo-wrap" id="about">
                <img className="profile-img"  src={kyle} alt="Kyle the Koala"/>
            </div>
            <div className="koalaRow text-center">
                <div>It's Kyle the Koala's playtime!  <br /> Hover over Kyle's picture so he can show you his favorite trick!</div>
            </div>
            <div className="aboutPs">
                <h2 className="about-heading pb-3 pt-5 text-center">about</h2>
                <p className="text-justify">
                Full Stack Web Developer with a focus on Frontend Technologies & Design.
                </p>
                <p className="text-justify">
                After receiving her Master's Degree in Acting from Mason Gross School of the Arts at Rutgers University, Jennifer found herself using her innate computer skills as an Executive Administrative Assistant at Warner Brother Studios in Burbank, CA. After moving to Arizona, she continued the role of Executive Administrative Assistant for a father-son financial advisor team at Wells Fargo Advisors. She also started a photography business so that she would have a good excuse to play with Photoshop in her spare time. It was this love of computer software that led her to coding.
                </p>
                <p className="text-justify" >
                Being always curious to know more and a forever learner, Jennifer has found her perfect career path as a Full Stack Web Developer. As technology is ever-changing, Jennifer enjoys the challenge of staying up-to-date with the newest software improvements and loves making the internet a little more fun, functional and beautiful...one code at a time.
                </p>
            </div>
        </div>
    )
}

export default AboutMe