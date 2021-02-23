import React from "react";
import projectOne from "../images/projects/imgOne.jpg";
import projectTwo from "../images/projects/imgTwo.jpg";
import projectThree from "../images/projects/imgThree.jpg";
import projectFour from "../images/projects/imgFour.jpg";
import projectFive from "../images/projects/imgFive.jpg";
import projectSix from "../images/projects/imgSix.jpg";
import projectSeven from "../images/projects/imgSeven.jpg";
import projectEight from "../images/projects/imgEight.jpg";
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
    <img className = "portfolio-image-popupbox" src={projectOne} alt="Project One"/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
    <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
    <br/>
    <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Project One"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }


    const popupboxConfigProjectOne = {
        titleBar: {
            enable: true,
            text: "Project One"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }

    // projectTwo
    const openPopupboxProjectTwo = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectTwo} alt="Project Two"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro vero reprehenderit provident        quisrecusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
          </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Project Two"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }
    
    const popupboxConfigProjectTwo = {
        titleBar: {
            enable: true,
            text: "Project Two"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectThree
    const openPopupboxProjectThree = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectThree} alt="Project Three"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovident quis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Project Three"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectThree = {
        titleBar: {
            enable: true,
            text: "Project Three"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFour
    const openPopupboxProjectFour = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFour} alt="Project Four"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Project Four"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFour = {
        titleBar: {
            enable: true,
            text: "Project Four"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFive
    const openPopupboxProjectFive = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFive} alt="Project Five"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Project Five"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFive = {
        titleBar: {
            enable: true,
            text: "Project Five"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectSix
    const openPopupboxProjectSix = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectSix} alt="Project Six"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
            <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Project Six"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }

        const popupboxConfigProjectSix = {
          titleBar: {
              enable: true,
              text: "Project Six"
          },
          fadeIn: true,
          fadeInSpeed: 500
      }

// projectSeven
const openPopupboxProjectSeven = () => {
  const content = (
    <>
      <img className = "portfolio-image-popupbox" src={projectSeven} alt="Project Seven"/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
      <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Project Seven"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectSeven = {
    titleBar: {
        enable: true,
        text: "Project Seven"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// projectEight
const openPopupboxProjectEight = () => {
  const content = (
    <>
      <img className = "portfolio-image-popupbox" src={projectEight} alt="Project Eight"/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure illum quam nobis impedit libero porro veroreprehenderiprovidentquis recusandae fugit, voluptatibus quod tempore facilis ab modi sed magni!</p>
      <b>Demo: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33">https://github.com/SaraNP-33</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Project Eight"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectEight = {
    titleBar: {
        enable: true,
        text: "Project Eight"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h2 className="text-uppercase text-center py-5">portfolio</h2>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxProjectOne}>
                        <img className = "portfolio-image" src={projectOne} alt="Project One"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwo}>
                        <img className = "portfolio-image" src={projectTwo} alt="Project Two"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectThree}>
                        <img className = "portfolio-image" src={projectThree} alt="Project Three"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFour}>
                        <img className = "portfolio-image" src={projectFour} alt="Project Four"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFive}>
                        <img className = "portfolio-image" src={projectFive} alt="Project Five"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSix}>
                        <img className = "portfolio-image" src={projectSix} alt="Project Six"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSeven}>
                        <img className = "portfolio-image" src={projectSeven} alt="Project Seven"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEight}>
                        <img className = "portfolio-image" src={projectEight} alt="Project Eight"/>
                        <div className="overflow"></div>
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
        </div>
    )
}


export default Portfolio;
