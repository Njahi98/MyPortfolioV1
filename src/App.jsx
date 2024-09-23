import "./App.css";
import NavBar, { handleSmoothClick } from "./Components/Navbar/Navbar";
import rectangle9521 from "./assets/backgrounds/Rectangle 9521.png";
import rectangle9522 from "./assets/backgrounds/Rectangle 9522.png";
import rectangle9523 from "./assets/backgrounds/Rectangle 9523.png";
import rectangle9524 from "./assets/backgrounds/Rectangle 9524.png";
import rectangle9525 from "./assets/backgrounds/Rectangle 9525.png";


import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = ()=>{
      setShowTopButton(window.pageYOffset>300);
    }
    window.addEventListener("scroll",handleScroll)
  
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  }, [])



  return (
    <div className="App">
    <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <NavBar />

      <Home />
  
      <img className="background2" src={rectangle9522} alt="background2" />
      <img className="background3" src={rectangle9523} alt="background3" />
      <About/>
      <img className="background4" src={rectangle9524} alt="background4" />
      <img className="background5" src={rectangle9525} alt="background5" />

      <Project/>

      <Contact/>
      <Footer/>
      <img className="background1" src={rectangle9521} alt="background1" />

      {showTopButton && <a className="topButton" href="#"  onClick={handleSmoothClick()}>
      <FaChevronUp size={25}/>
      </a>}

    </div>
  );
}

export default App;
