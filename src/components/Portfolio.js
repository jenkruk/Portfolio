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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // projectOne
    const openPopupboxProjectOne = () => {
        const content = (
            <>
    <img className = "portfolio-image-popupbox" src={projectOne} alt="Queen St. Market"/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident        quisrecusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
      <b>Demo: </b> <a className="hyper-link" href="https://hishamss.github.io/Project1-Real-Estate/" rel="noreferrer" target="_blank">https://hishamss.github.io/Project1-Real-Estate/</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/hishamss/Project1-Real-Estate" rel="noreferrer" target="_blank">https://github.com/SaraNP-33</a>
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
  <img className = "portfolio-image-popupbox gifGiver" src={projectNine} alt="Gif-Giver"/>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/Gif-Giver/" rel="noreferrer" target="_blank">https://jenkruk.github.io/Gif-Giver/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/Gif-Giver" rel="noreferrer" target="_blank">https://github.com/SaraNP-33</a>
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
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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
          <>
  <img className = "portfolio-image-popupbox" src={projectEleven} alt="Crystal Collector"/>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
  <b>Demo: </b> <a className="hyper-link" href="https://jenkruk.github.io/unit-4-game/" rel="noreferrer" target="_blank">https://jenkruk.github.io/unit-4-game/</a>
  <br/>
  <b>GitHub: </b> <a className="hyper-link" href="https://github.com/jenkruk/unit-4-game" rel="noreferrer" target="_blank">https://github.com/jenkruk/unit-4-game</a>
  </>
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
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
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


    // var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",  "November",  "December"];
    // var thisday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const day = new Date().getDate();
    // var dayOfWeek = thisday[new Date().getDay()];
    // const thisMonth = month[new Date().getMonth()];
    // const year = new Date().getFullYear();


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
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwo}>
                        <img className = "portfolio-image" src={projectTwo} alt="Zootopia"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectThree}>
                        <img className = "portfolio-image" src={projectThree} alt="Google Books"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFour}>
                        <img className = "portfolio-image" src={projectFour} alt="Recipe Scraper"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFive}>
                        <img className = "portfolio-image" src={projectFive} alt="Friend Finder"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSix}>
                        <img className = "portfolio-image" src={projectSix} alt="Task Manager"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box  train-image-box" onClick={openPopupboxProjectSeven}>
                        <div className="train row inline-block">
                          {/* <div id="date">{ thisMonth } { day }, { year }</div> */}
                          {/* <div id="time">{ clock }</div> */}
                          <div id="hours">{ hours }</div>
                          <div id="minutes">{ minutes }</div>
                          <div id="seconds">{ seconds }</div>

                          {/* <div id="day">{ dayOfWeek }'s Train Schedule</div> */}
                        </div>
                        <div className="row subline inline-block">
                          <p className="inline-block">Hours</p>
                          <p className="inline-block">Minutes</p>
                          <p className="inline-block">Seconds</p>
                        </div>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEight}>
                        <img className = "portfolio-image" src={projectEight} alt="Home Finder"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box gif-giver-image-box" onClick={openPopupboxProjectNine}>
                        <img className = "portfolio-image" src={projectNine} alt="Gif-Giver"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTen}>
                        <img className = "portfolio-image" src={projectTen} alt="Travel Trivia"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEleven}>
                        <img className = "portfolio-image" src={projectEleven} alt="Crystal Collector"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwelve}>
                        <img className = "portfolio-image" src={projectTwelve} alt="Tree of Lives"/>
                        <div className="overlay"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
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
