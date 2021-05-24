import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const TestimonialsCarousel = () => {
    return (
        <Carousel
        // showArrows={true} commented out because this is the default value so it's not necessary to declare it
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        stopOnHover={true}
        useKeyboardArrows={true}
        interval={7000}
        >
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEGzogFScsa5w/profile-displayphoto-shrink_800_800/0/1554162300050?e=1627516800&v=beta&t=WiKT3_WtXyHVAJx2J_WPS0bbKpLjV9Qqm31PIT7MLWg" alt="Greg Mash"/>
            <div className="myCarousel">
            <h3>Gregory Mash</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left mr-4"></i></span>
            <p className="pl-5">Jennifer is extremely devoted to her work. She always puts in extra time and effort on her assignments to put them above and beyond requirements. She has both a great work ethic and a positive attitude. She was fantastic with her communication and comprehension skills throughout class. All of her coding assignments and projects throughout the bootcamp were of the highest quality. I am sure she will be excellent in any role she pursues in the future. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHOHOUTOZoWrw/profile-displayphoto-shrink_800_800/0/1595273711043?e=1627516800&v=beta&t=Jht_8LTQ458yedIDFLZDmkIlOnHJidv3G3HkqC9_JL4"alt="Sara Neves Pereira"/>
            <div className="myCarousel">
            <h3>Sara Neves Pereira</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left mr-4"></i></span>
            <p>I had the pleasure of being Jennifer Kruk's colleague and teammate during our Full Stack Developer Certificate at the University of Arizona. Working with Jen was an amazing and valuable experience. She is dedicated, detail orientated and is always eager and ready to step out of her comfort zone and learn new things. Her ability to communicate and lead teams greatly improves the flow of work and the cohesiveness of a project. Jen is also a great problem solver and never shies away from a challenge. The quality of her work reflects all the skills, but they also show how talented she is a Full Stack Developer. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
            <>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQG-YPaE47Tf_Q/profile-displayphoto-shrink_800_800/0/1605124929056?e=1627516800&v=beta&t=qdVjq3sFaRoj0VDwFpCbHK2k24hToEXC7jmqWNO_wz0" alt="Hisham Saymeh"/>
            <div className="myCarousel">
            <h3>Hisham Saymeh</h3>
            <span className="w-100 display-flex "><i className="fas fa-quote-left fa-2x float-left mr-4"></i></span>
            <p>I worked with Jennifer on the same project during our coding Bootcamp. I really enjoyed working with Jeniffer; she is very organized, detail-oriented, and highly skilled in the Frontend development. she was very interactive and communicate every day during the project. I'm very confident that Jennifer will bo a great addition to any team she will join in the future. <i className="ml-3 fas fa-quote-right fa-2x d-inline"></i></p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
