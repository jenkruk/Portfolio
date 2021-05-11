import React, { useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'
import Header from "./components/Header";
import Navbar from './components/Navbar';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import References from "./components/References";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from "react-ga";




function App() {
  
  useEffect(()=> {
    ReactGA.initialize('G-F6SWW95DMN');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Particles
        className="particles-canvas"
        params = {{
          particles: {
            number: {
              value: 30,
              density: {
              enable: true,
              value_area: 900
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#B3C7CE",
            opacity: 1,
            width: 1
          },
          shape: {
            type: "star",
            stroke: {
              width: 3,
              color: "#F6BC60"
            }
          }
        }}
      }
      />
      <Router>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <References />
      <Contact />
      <Footer />
      </Router>
    </>
  );
}

export default App;
