import "./App.css";
import rectangle9521 from "./assets/backgrounds/Rectangle 9521.webp";
import rectangle9522 from "./assets/backgrounds/Rectangle 9522.webp";
import rectangle9523 from "./assets/backgrounds/Rectangle 9523.webp";
import rectangle9524 from "./assets/backgrounds/Rectangle 9524.webp";
import rectangle9525 from "./assets/backgrounds/Rectangle 9525.webp";

import rectangle9521light from "./assets/backgrounds/Rectangle 9521light.webp";
import rectangle9522light from "./assets/backgrounds/Rectangle 9522light.webp";
import rectangle9523light from "./assets/backgrounds/Rectangle 9523light.webp";
import rectangle9524light from "./assets/backgrounds/Rectangle 9524light.webp";
import rectangle9525light from "./assets/backgrounds/Rectangle 9525light.webp";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { handleSmoothClick } from "./Components/Navbar/SmoothClick";
import NavBar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import useLocalStorage from "use-local-storage";
import { motion } from "framer-motion";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", prefersDark.matches);
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "system");

  const applyTheme = useCallback(
    (mode) => {
      setThemeMode(mode);
      if (mode === "system") {
        setIsDark(prefersDark.matches);
      } else {
        setIsDark(mode === "dark");
      }
    },
    [setIsDark, setThemeMode, prefersDark]
  );

  useEffect(() => {
    const handleChange = (e) => {
      if (themeMode === "system") {
        setIsDark(e.matches);
      }
    };

    prefersDark.addListener(handleChange);
    return () => prefersDark.removeListener(handleChange);
  }, [themeMode, setIsDark]);

  const toggleDarkMode = () => applyTheme("dark");
  const toggleLightMode = () => applyTheme("light");
  const toggleSystemMode = () => applyTheme("system");

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider value={isDark}>
      <div className="App">
        {isDark && (
          <div className="background-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
        )}

        <NavBar
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
          toggleLightMode={toggleLightMode}
          toggleSystemMode={toggleSystemMode}
        />

        <Home />

        {isDark ? (
          <img className="background2" src={rectangle9522} alt="background2" />
        ) : (
          <img
            className="background2"
            src={rectangle9522light}
            alt="background2Light"
          />
        )}
        {isDark ? (
          <img className="background3" src={rectangle9523} alt="background3" />
        ) : (
          <img
            className="background3"
            src={rectangle9523light}
            alt="background3Light"
          />
        )}
        <About />
        {isDark ? (
          <img className="background4" src={rectangle9524} alt="background4" />
        ) : (
          <img
            className="background4"
            src={rectangle9524light}
            alt="background4Light"
          />
        )}
        {isDark ? (
          <img className="background5" src={rectangle9525} alt="background5" />
        ) : (
          <img
            className="background5"
            src={rectangle9525light}
            alt="background5Light"
          />
        )}

        <Project />

        <Contact />
        <Footer />
        {isDark ? (
          <img className="background1" src={rectangle9521} alt="background1" />
        ) : (
          <img
            className="background1"
            src={rectangle9521light}
            alt="background1Light"
          />
        )}

        {showTopButton && (
   <motion.a
   className="topButton"
   href="#"
   onClick={handleSmoothClick()}
   initial={{ scale: 0, opacity: 0 }}
   animate={{ rotate: 360, scale: 1, opacity: 1 }}
   transition={{
     type: "spring",
     stiffness: 100,   
     damping: 10,      
     duration: 0.8,    
   }}
 >
   <FaChevronUp size={25} />
 </motion.a>
 
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
