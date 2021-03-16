import React, { useEffect, useState } from "react";
import projectOne from "../images/projectPics/qsm.jpg";
import projectTwo from "../images/projectPics/zoo.jpg";
import projectThree from "../images/projectPics/googleBooks.jpg";
import projectFour from "../images/projectPics/recipe.jpg";
import projectFive from "../images/projectPics/friendFinder.jpg";
import projectSix from "../images/projectPics/taskMgr.jpg";
import projectEight from "../images/projectPics/homes.jpg";
import projectNine from "../images/projectPics/giftStack.gif";
import projectTen from "../images/projectPics/travelTrivia.jpg";
import projectEleven from "../images/projectPics/crystals.jpg";
import projectTwelve from "../images/projectPics/treeOfLives.jpg";

// FONTAWESOME IMPORTS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // projectOne
    const openPopupboxProjectOne = () => {
        const content = (
            <>
    <img className = "portfolio-image-popupbox" src={projectOne} alt="Queen St. Market"/>
    <p>A collaberation full-stack e-commerce store utilizing React Hooks, bCrypt, React-Stripe-Checkout, Passport, MongoDB, Express, Node and Concurrently among others.</p>
    <b>Demo: </b> <a className="hyper-link" href="https://queen-st-market.herokuapp.com/" rel="noreferrer" target="_blank">https://queen-st-market.herokuapp.com/</a>
    <br/>
    <b>GitHub: </b> <a className="hyper-link" href="https://github.com/niashagrant/mern-store" rel="noreferrer" target="_blank">https://github.com/niashagrant/mern-store</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Queen St. Market"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }


    const popupboxConfigProjectOne = {
        titleBar: {
            enable: true,
            text: "Queen St. Market"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }

    // projectTwo
    const openPopupboxProjectTwo = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectTwo} alt="Zootopia"/>
            <p>A matching game made using React, JSX, ES6, uifx and Bootstrap.</p>
            <p>How many zoo cards can you click before your memory fails you?</p>
            <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/zootopia/" rel="noreferrer" target="_blank">https://jenkruk.github.io/zootopia/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/zootopia" rel="noreferrer" target="_blank">https://github.com/jenkruk/zootopia</a>
          </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Zootopia"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }
    
    const popupboxConfigProjectTwo = {
        titleBar: {
            enable: true,
            text: "Zootopia"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectThree
    const openPopupboxProjectThree = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectThree} alt="Google Books"/>
            <p>A collaberation project utilizing Axios to call the Google Books API.</p>
            <p>Also utilizes React, Express, MongoDB, Mongoose and Bootstrap.</p>
            <b>Demo: </b> <a className="hyper-link" href="https://google-books-search-171113.herokuapp.com/" rel="noreferrer" target="_blank">https://google-books-search-171113.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/googleBooks" rel="noreferrer" target="_blank">https://github.com/SaraNP-33/googleBooks</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Google Books"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectThree = {
        titleBar: {
            enable: true,
            text: "Google Books"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFour
    const openPopupboxProjectFour = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFour} alt="Recipe Scraper"/>
            <p>A recipe app that scrapes the recipes from Real Simple Magazine.</p>
            <p>Have you made your quarantine sourdough bread yet?</p>
            <b>Demo: </b> <a className="hyper-link" href="https://realsimplerecipescraper.herokuapp.com/" rel="noreferrer" target="_blank">https://realsimplerecipescraper.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/scraper" rel="noreferrer" target="_blank">https://github.com/jenkruk/scraper</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Recipe Scraper",
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFour = {
        titleBar: {
            enable: true,
            text: "Recipe Scraper"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFive
    const openPopupboxProjectFive = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFive} alt="Friend Finder"/>
            <p>A Friend Matching App made with Node, Express, jQuery, javaScript, and Bootstrap.</p>
            <p>Because a party of one is just no fun!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://damp-mountain-00831.herokuapp.com/" rel="noreferrer" target="_blank">https://damp-mountain-00831.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/FriendFinder" rel="noreferrer" target="_blank">https://github.com/jenkruk/FriendFinder</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Friend Finder"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFive = {
        titleBar: {
            enable: true,
            text: "Friend Finder"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectSix
    const openPopupboxProjectSix = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectSix} alt="Task Manager"/>
            <p>A to-do list made with Sequelize, Node, Express, Handlebars, jQuery, javaScript and Bootstrap.</p>
            <p>Keep on track with this helpful list!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://quiet-bayou-82536.herokuapp.com/" rel="noreferrer" target="_blank">https://quiet-bayou-82536.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/taskManagerSequel" rel="noreferrer" target="_blank">https://github.com/jenkruk/taskManagerSequel</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Task Manager"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }

        const popupboxConfigProjectSix = {
          titleBar: {
              enable: true,
              text: "Task Manager"
          },
          fadeIn: true,
          fadeInSpeed: 500
      }

// projectSeven
const openPopupboxProjectSeven = () => {
  const content = (
    <>
      <div className="portfolio-image-popupbox trainPopUp row inline-block d-flex justify-content-center align-items-center">
        <div id="popUpTime" className="row d-flex justify-content-center">{ hours + minutes + seconds }</div>
        <div className="row subline sublinePopUp inline-block">
          <p className="inline-block">Hours</p>
          <p className="inline-block">Minutes</p>
          <p className="inline-block">Seconds</p>
        </div>
        </div>
      <p>A train scheduler utilizing Momentjs, Firebase, jQuery & javaScript timing events.</p>
      <p>All Aboard!</p>
      <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/TrainSchedule/" rel="noreferrer" target="_blank">https://jenkruk.github.io/TrainSchedule/</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/TrainSchedule" rel="noreferrer" target="_blank">https://github.com/jenkruk/TrainSchedule</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Train Scheduler"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectSeven = {
    titleBar: {
        enable: true,
        text: "Train Scheduler"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// projectEight
const openPopupboxProjectEight = () => {
  const content = (
    <>
      <img className = "portfolio-image-popupbox" src={projectEight} alt="Home Finder"/>
      <p>A collaberation real-estate site utilizing API's from Realtor.com, Google Maps, Yelp & OpenWeather.</p>
      <p>Find your new home today!</p>
      <b>Demo: </b> <a className="hyper-link" href="https://hishamss.github.io/Project1-Real-Estate/" rel="noreferrer" target="_blank">https://hishamss.github.io/Project1-Real-Estate/</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/hishamss/Project1-Real-Estate" rel="noreferrer" target="_blank">https://github.com/hishamss/Project1-Real-Estate</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Home Finder"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectEight = {
    titleBar: {
        enable: true,
        text: "Home Finder"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

    // projectNine
    const openPopupboxProjectNine = () => {
      const content = (
          <>
  <img className = "portfolio-image-popupbox gifGiver gifGiverPopupImg" src={projectNine} alt="Gif-Giver"/>
  <p>An interactive gif generator utilizing the Giphy API, Bootstrap & the jQuery javaScript library.</p>
  <p>Enjoy the gifs!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/Gif-Giver/" rel="noreferrer" target="_blank">https://jenkruk.github.io/Gif-Giver/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/Gif-Giver" rel="noreferrer" target="_blank">https://github.com/jenkruk/Gif-Giver</a>
  </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Gif-Giver"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }


  const popupboxConfigProjectNine = {
      titleBar: {
          enable: true,
          text: "Gif-Giver"
      },
      fadeIn: true,
      fadeInSpeed: 500
      }

    // projectTen
    const openPopupboxProjectTen = () => {
      const content = (
          <>
  <img className = "portfolio-image-popupbox" src={projectTen} alt="Travel Trivia"/>
  <p>A travel quiz made with the jQuery javaScript library and Bootstrap.</p>
  <p>Show off your world knowledge before the timer runs out!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/TriviaGame/" rel="noreferrer" target="_blank">https://jenkruk.github.io/TriviaGame/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/TriviaGame" rel="noreferrer" target="_blank">https://github.com/jenkruk/TriviaGame</a>
  </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Travel Trivia"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }


  const popupboxConfigProjectTen = {
      titleBar: {
          enable: true,
          text: "Travel Trivia"
      },
      fadeIn: true,
      fadeInSpeed: 500
      }

  // projectEleven
    const openPopupboxProjectEleven = () => {
      const content = (
          <p>
  <img className = "portfolio-image-popupbox" src={projectEleven} alt="Crystal Collector"/>
  <p>A numbers game made with the jQuery javaScript library and Bootstrap.</p>
  <p>Collect the correct amount of crystals without going over!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/unit-4-game/" rel="noreferrer" target="_blank">https://jenkruk.github.io/unit-4-game/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/unit-4-game" rel="noreferrer" target="_blank">https://github.com/jenkruk/unit-4-game</a>
  </p>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Crystal Collector"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }


  const popupboxConfigProjectEleven = {
      titleBar: {
          enable: true,
          text: "Crystal Collector"
      },
      fadeIn: true,
      fadeInSpeed: 500
      }

  // projectTwelve
    const openPopupboxProjectTwelve = () => {
      const content = (
          <>
  <img className = "portfolio-image-popupbox" src={projectTwelve} alt="Tree of Lives"/>
  <p>A word guessing game made with vanilla javaScript and Bootstrap.</p>
  <p>Can you guess the word before the tree runs out of lives?!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/Word-Guess-Game/" rel="noreferrer" target="_blank">https://jenkruk.github.io/Word-Guess-Game/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/Word-Guess-Game" rel="noreferrer" target="_blank">https://github.com/jenkruk/Word-Guess-Game</a>
  </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Tree of Lives"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }


  const popupboxConfigProjectTwelve = {
      titleBar: {
          enable: true,
          text: "Tree of Lives"
      },
      fadeIn: true,
      fadeInSpeed: 500
      }


      // ******************* CLOCK ******************* 


    // const [clock, setClock] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
      setInterval(() => {
        const time = new Date();
        // setClock(time.toLocaleTimeString());
        setHours((time.getHours() % 12 || 12) + ":");
        setMinutes((time.getMinutes()<10?'0':'') + time.getMinutes()  + ":");
        setSeconds((time.getSeconds()<10?'0':'') + time.getSeconds() );
      }, 1000);
    }, []);


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h2 className="text-uppercase text-center pb-5" id="portfolio">portfolio</h2>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxProjectOne}>
                        <img className = "portfolio-image" src={projectOne} alt="Queen St. Market"/>
                        <div className="overlay"></div>
                        <h4 className="title">Queen Street Market</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwo}>
                        <img className = "portfolio-image" src={projectTwo} alt="Zootopia"/>
                        <div className="overlay"></div>
                        <h4 className="title">Zootopia</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectThree}>
                        <img className = "portfolio-image" src={projectThree} alt="Google Books"/>
                        <div className="overlay"></div>
                        <h4 className="title">Google Books</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFour}>
                        <img className = "portfolio-image" src={projectFour} alt="Recipe Scraper"/>
                        <div className="overlay"></div>
                        <h4 className="title">Recipe Scraper</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFive}>
                        <img className = "portfolio-image" src={projectFive} alt="Friend Finder"/>
                        <div className="overlay"></div>
                        <h4 className="title">Friend Finder</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSix}>
                        <img className = "portfolio-image" src={projectSix} alt="Task Manager"/>
                        <div className="overlay"></div>
                        <h4 className="title">Task Manager</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box  train-image-box" onClick={openPopupboxProjectSeven}>
                        <div className="train row inline-block">
                          <div id="hours">{ hours }</div>
                          <div id="minutes">{ minutes }</div>
                          <div id="seconds">{ seconds }</div>
                        </div>
                        <div className="row subline inline-block">
                          <p className="inline-block">Hours</p>
                          <p className="inline-block">Minutes</p>
                          <p className="inline-block">Seconds</p>
                        </div>
                        <div className="overlay"></div>
                        <h4 className="title">Train Scheduler</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEight}>
                        <img className = "portfolio-image" src={projectEight} alt="Home Finder"/>
                        <div className="overlay"></div>
                        <h4 className="title">Home Finder</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box gif-giver-image-box" onClick={openPopupboxProjectNine}>
                        <img className = "portfolio-image" src={projectNine} alt="Gif-Giver"/>
                        <div className="overlay"></div>
                        <h4 className="title">Gif Giver</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTen}>
                        <img className = "portfolio-image" src={projectTen} alt="Travel Trivia"/>
                        <div className="overlay"></div>
                        <h4 className="title">Travel Trivia</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEleven}>
                        <img className = "portfolio-image" src={projectEleven} alt="Crystal Collector"/>
                        <div className="overlay"></div>
                        <h4 className="title">Crystal Collector</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwelve}>
                        <img className = "portfolio-image" src={projectTwelve} alt="Tree of Lives"/>
                        <div className="overlay"></div>
                        <h4 className="title">Tree of Lives</h4>
                        {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigProjectOne} />
            <PopupboxContainer {...popupboxConfigProjectTwo} />
            <PopupboxContainer {...popupboxConfigProjectThree} />
            <PopupboxContainer {...popupboxConfigProjectFour} />
            <PopupboxContainer {...popupboxConfigProjectFive} />
            <PopupboxContainer {...popupboxConfigProjectSix} />
            <PopupboxContainer {...popupboxConfigProjectSeven} />
            <PopupboxContainer {...popupboxConfigProjectEight} />
            <PopupboxContainer {...popupboxConfigProjectNine} />
            <PopupboxContainer {...popupboxConfigProjectTen} />
            <PopupboxContainer {...popupboxConfigProjectEleven} />
            <PopupboxContainer {...popupboxConfigProjectTwelve} />
        </div>
    )
}


export default Portfolio;
