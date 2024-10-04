import styles from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cvPdf from "../../assets/Oussama-Njahi-Resume.pdf";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Backdrop from "../Project/ProjectModal/Backdrop";
import { RiCloseLargeLine } from "react-icons/ri";
import { handleSmoothClick } from "./SmoothClick";
import { Navigation } from "./BurgerNavbar/Navigation";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";

function NavBar({ isDark, toggleDarkMode, toggleLightMode, toggleSystemMode }) {
  const [burgerVisible, setburgerVisible] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [themeSwitcherMenuOpen, setThemeSwitcherMenuOpen] = useState(false);

  const toggleTheme = useContext(ThemeContext);

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
    const handleBurger = () => {
      setburgerVisible(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleBurger);

    handleBurger();

    return () => {
      window.removeEventListener("resize", handleBurger);
    };
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
    burgerMenuOpen ? setBurgerMenuOpen(false) : setBurgerMenuOpen(true);
  };

  const openThemeSwitcherMenu = () => {
    setThemeSwitcherMenuOpen(!themeSwitcherMenuOpen);
  };

  return (
    <>
      {burgerVisible && (
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
                  position: "relative",
                  right: "-50%",
                  top: "150%",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor:"pointer",

                }}
                onClick={toggleLightMode}
                size={25}
              />
            ) : (
              <MdDarkMode
                style={{
                  position: "relative",
                  right: "-50%",
                  top: "150%",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor:"pointer",
                }}
                onClick={toggleDarkMode}
                size={25}
              />
            )}

            <RiCloseLargeLine
              className={styles.burgerCloseStyle}
              size={30}
              onClick={handleBurgerMenu}
            />
          </div>

          <Navigation setburgerMenuOpen={setBurgerMenuOpen} />
        </Backdrop>
      )}
      {!burgerVisible && (
        <Reveal style={{ position: "sticky", top: "3%", zIndex: "1000" }}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        >
          <div
            className={styles.NavBar}
            data-theme={toggleTheme ? "Dark" : "Light"}
          >
            <div className={styles.logo}>
              <a href="#" onClick={handleSmoothClick()}>
                NJ
              </a>
            </div>

            <div className={styles.titles}>
              <a href="#About" onClick={handleSmoothClick("About")}>
                About
              </a>
              <a href="#Projects" onClick={handleSmoothClick("Projects")}>
                Projects
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
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/njahi98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a href="mailto:njahioussama75@gmail.com">
                <MdEmail size={25} />
              </a>

              {isDark ? (
                <div className={styles.themeSwitcher}>
                  <MdLightMode onClick={openThemeSwitcherMenu} size={25} />
                </div>
              ) : (
                <div className={styles.themeSwitcher}>
                  <MdDarkMode onClick={openThemeSwitcherMenu} size={25} />
                </div>
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
                  <span onClick={toggleLightMode}>Light</span>
                  <span onClick={toggleDarkMode}>Dark</span>
                  <span onClick={toggleSystemMode}>System</span>
                </motion.div>
              )}
              <a href={cvPdf} target="_blank" style={{ textDecoration: "none", border: "1px solid", borderRadius: "1px", padding: "0.3rem" }}>
                Resume
              </a>
            </div>
          </div>
        </Reveal>
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
