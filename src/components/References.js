import React from 'react'
import TestimonialsCarousel from "./TestimonialsCarousel";

const References = () => {
    return (
        <div className="references">
            <h2 className="pb-0 pt-5" id="references">linkedin recommendations</h2>
            <em className="linkedInTag" >Hover over the slide to pause.</em>
            <div className="references-content">
                <TestimonialsCarousel/>
            </div>
        </div>
    )
}

export default References
