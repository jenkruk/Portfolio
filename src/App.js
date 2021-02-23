import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App() {
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
            color: "#009E98",
            opacity: 1,
            width: 1
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              // color: "#f9ab00"
              color: "#f9ab00"
            }
          }
        }}
      }
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
