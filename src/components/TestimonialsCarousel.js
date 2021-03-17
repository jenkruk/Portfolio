import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={15000}
        >
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEGzogFScsa5w/profile-displayphoto-shrink_800_800/0/1554162300050?e=1621468800&v=beta&t=zH6DDK22KZuwb8gQl6iSawjEfKLL84URSRFINuZqa7o" alt="John Doe 1"/>
            <div className="myCarousel">
            <h3>Gregory Mash</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left "></i></span>
            <p className="pl-5">Jennifer is extremely devoted to her work. She always puts in extra time and effort on her assignments to put them above and beyond requirements. She has both a great work ethic and a positive attitude. She was fantastic with her communication and comprehension skills throughout class. All of her coding assignments and projects throughout the bootcamp were of the highest quality. I am sure she will be excellent in any role she pursues in the future. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHOHOUTOZoWrw/profile-displayphoto-shrink_800_800/0/1595273711043?e=1621468800&v=beta&t=wiFfOcWltglS1WyyYG5oIKTrFz0BFHxuhxJtvvk6qD4 "alt="Jane Doe 2"/>
            <div className="myCarousel">
            <h3>Sara Neves Pereira</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left "></i></span>
            <p>I had the pleasure of being Jennifer Kruk's colleague and teammate during our Full Stack Developer Certificate at the University of Arizona. Working with Jen was an amazing and valuable experience. She is dedicated, detail orientated and is always eager and ready to step out of her comfort zone and learn new things. Her ability to communicate and lead teams greatly improves the flow of work and the cohesiveness of a project. Jen is also a great problem solver and never shies away from a challenge. The quality of her work reflects all the skills, but they also show how talented she is a Full Stack Developer. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQG-YPaE47Tf_Q/profile-displayphoto-shrink_800_800/0/1605124929056?e=1621468800&v=beta&t=TgSVEuPr9KXG2whIXXZHkikFa9kpuE5IGJMhSGjialo" alt="John Doe 3"/>
            <div className="myCarousel">
            <h3>Hisham Saymeh</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left "></i></span>
            <p>I worked with Jennifer on the same project during our coding Bootcamp. I really enjoyed working with Jeniffer; she is very organized, detail-oriented, and highly skilled in the Frontend development. she was very interactive and communicate every day during the project. I'm very confident that Jennifer will bo a great addition to any team she will join in the future. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
            {/* <>
            <img src={avatar4} alt="John Doe 4"/>
            <div className="myCarousel">
            <h3>John Doe 4</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic, vel impedit sapiente animi illo quo, ducimus iste delectus fuga id obcaecati sint ad dolorem optio. Dignissimos non hic magnam.</p>
            </div>
            </> */}
        </Carousel>
    )
}

export default TestimonialsCarousel
