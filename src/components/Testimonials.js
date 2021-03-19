import React from 'react'
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2 className="pb-0">linkedin recommendations</h2>
            <em className="linkedInTag">Hover over the slide to pause.</em>
            <div className="testimonials-content">
                <TestimonialsCarousel/>
            </div>
        </div>
    )
}

export default Testimonials
