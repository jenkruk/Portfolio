import React from "react";
import kyle from "../images/koala.jpg";

const AboutMe = () => {
    return (
        <div className="container pb-5 mb-3 aboutMe">
            <div className="row about">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="profile-img" src={kyle} alt="Kyle the Koala"/>
                    </div>
                    <div className="row koalaRow text-center">
                    <div>It's Kyle the Koala's playtime!  <br /> Hover over Kyle's picture so he can show you his favorite trick!</div>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h2 className="about-heading pt-5 pb-3 text-center" id="about">about me</h2>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                    </p>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                    </p>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe