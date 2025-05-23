import styles from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineTranslate } from "react-icons/md";

import Backdrop from "../Project/ProjectModal/Backdrop";
import { RiCloseLargeLine } from "react-icons/ri";
import { handleSmoothClick } from "./SmoothClick";
import { Navigation } from "./BurgerNavbar/Navigation";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import PropTypes from "prop-types";
import { motion,useScroll,useMotionValueEvent } from "framer-motion";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";

import { useTranslation } from "react-i18next";

function NavBar({ isDark, toggleDarkMode, toggleLightMode, toggleSystemMode }) {
  const [burgerVisible, setburgerVisible] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [themeSwitcherMenuOpen, setThemeSwitcherMenuOpen] = useState(false);
  const [languageSwitcherMenuOpen, setLanguageSwitcherMenuOpen] = useState(false);
  const [navBarHidden,setNavBarHidden]=useState(false);

  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY,"change",(latest)=>{
    const previous = scrollY.getPrevious();
    (latest>previous && latest > 150 ) ? setNavBarHidden(true) : setNavBarHidden(false) 
  })
  

  const toggleTheme = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  const burgerMenuBackdrop = {
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.8)",

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "column",
    zIndex: 1,
  };

  const sidebarAnimation = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
  
    const handleChange = (e) => setburgerVisible(e.matches);
    mediaQuery.addEventListener("change", handleChange);
  
    handleChange(mediaQuery);
  
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    switch (isDark) {
      case true:
        toggleDarkMode();
        break;
      case false:
        toggleLightMode();
        break;
    }
  }, [isDark, toggleDarkMode, toggleLightMode]);

  const handleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const openThemeSwitcherMenu = () => {
    setThemeSwitcherMenuOpen(!themeSwitcherMenuOpen);
  };
  const openLanguageSwitcherMenu = () => {
    setLanguageSwitcherMenuOpen(!languageSwitcherMenuOpen);
  };

  return (
    <>
      {burgerVisible ? (
        <div
          className={styles.burgerStyle}
          data-theme={toggleTheme ? "Dark" : "Light"}
        >
          <div className={styles.burgerLogo}>
            <a href="#" onClick={handleSmoothClick()}>
              NJ
            </a>
          </div>
          {!burgerMenuOpen && (
            <CiMenuBurger
              size={30}
              onClick={handleBurgerMenu}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      ) : (
        <Reveal
          style={{ position: "sticky", top: "3%", zIndex: "1000" }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.div
            className={styles.NavBar}
            data-theme={toggleTheme ? "Dark" : "Light"}
            variants={{
              visible:{y:0},
              hidden:{y:"-150%"}
            }}
            animate={navBarHidden ? "hidden" : "visible"}
            transition={{duration:0.35,ease:"easeInOut"}}
          >
            <div className={styles.logo}>
              <a href="#" onClick={handleSmoothClick()}>
                NJ
              </a>
            </div>

            <div className={styles.titles}>
              <a href="#About" onClick={handleSmoothClick("About")}>
                {t("navBar.About")}
              </a>
              <a href="#Projects" onClick={handleSmoothClick("Projects")}>
                {t("navBar.Projects")}
              </a>
              <a href="#Contact" onClick={handleSmoothClick("Contact")}>
                Contact
              </a>
            </div>

            <div className={styles.socialMedia}>
              <a
                href="https://www.linkedin.com/in/oussama-njahi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/njahi98"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={25} />
              </a>
              <a href="mailto:njahioussama@outlook.com" aria-label="Send Email">
                <MdEmail size={25} />
              </a>
              <div>
                <MdOutlineTranslate
                  onClick={openLanguageSwitcherMenu}
                  size={25}
                />
              </div>

              {isDark ? (
                <div className={styles.themeSwitcher}>
                  <MdLightMode onClick={openThemeSwitcherMenu} size={25} />
                </div>
              ) : (
                <div className={styles.themeSwitcher}>
                  <MdDarkMode onClick={openThemeSwitcherMenu} size={25} />
                </div>
              )}
              {languageSwitcherMenuOpen && (
                <motion.div
                  className={styles.languageMenu}
                  variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  data-theme={isDark ? "Dark" : "Light"}
                >
                  <span
                    onClick={() => i18n.changeLanguage("en")}
                    disabled={i18n.resolvedLanguage === "en"}
                  >
                    {t("navBar.English")}
                  </span>
                  <span
                    onClick={() => i18n.changeLanguage("fr")}
                    disabled={i18n.resolvedLanguage === "fr"}
                  >
                    {t("navBar.French")}
                  </span>
                </motion.div>
              )}
              {themeSwitcherMenuOpen && (
                <motion.div
                  className={styles.themeMenu}
                  variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  data-theme={isDark ? "Dark" : "Light"}
                >
                  <span onClick={toggleLightMode}>{t("navBar.Light")}</span>
                  <span onClick={toggleDarkMode}>{t("navBar.Dark")}</span>
                  <span onClick={toggleSystemMode}>{t("navBar.System")}</span>
                </motion.div>
              )}
              <a
                href="./Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  border: "1px solid",
                  borderRadius: "1px",
                  padding: "0.3rem",
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        </Reveal>
      )}

      {burgerMenuOpen && (
        <Backdrop
          backdropStyle={burgerMenuBackdrop}
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarAnimation}
        >
          <div
            className={styles.burgerStyle}
            data-theme={toggleTheme ? "Dark" : "Light"}
          >
            {isDark ? (
              <MdLightMode
                style={{
                  position: "absolute",
                  top:"80%",
                  left:"25%",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={toggleLightMode}
                size={25}
              />
            ) : (
              <MdDarkMode
                style={{
                  position: "absolute",
                  top:"80%",
                  left:"25%",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={toggleDarkMode}
                size={25}
              />
            )}
          
              <MdOutlineTranslate
                style={{
                  position: "absolute",
                  top:"130%",
                  left:"25%",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={()=>{
                  i18n.changeLanguage(localStorage.getItem('i18nextLng').includes('en') ?'fr':'en')
                }}
                size={25}
              />

            <RiCloseLargeLine
              className={styles.burgerCloseStyle}
              size={30}
              onClick={handleBurgerMenu}
            />
          </div>

          <Navigation setburgerMenuOpen={setBurgerMenuOpen} />
        </Backdrop>
      )}
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  isDark: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
  toggleLightMode: PropTypes.func,
  toggleSystemMode: PropTypes.func,
};
