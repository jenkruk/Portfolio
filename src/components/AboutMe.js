import React from "react";
import sara from "../images/sara.jpeg"

const AboutMe = () => {
    return (
        <div className="container py-5" id="about">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
                    <img className="profile-img" src={sara} alt="Sara"/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h2 className="about-heading">about me</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita facere illum ipsam quam cumque fugit repellat perspiciatis, blanditiis voluptatum dignissimos sapiente repellendus nobis! Optio dignissimos dolores nihil soluta ad.
                </p>
            </div>
            </div>

        </div>
    )
}

export default AboutMe