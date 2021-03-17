import React from 'react'
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>linkedin recommendations</h2>
            <div className="container testimonialContainer">
                <div className="testimonials-content">
                    <TestimonialsCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
