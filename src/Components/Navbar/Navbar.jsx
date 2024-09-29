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

import { useContext } from "react";
import { DarkContext } from "../../Context/DarkContext";


function NavBar({ isDark, toggleLightMode, toggleDarkMode }) {
  const [burgerVisible, setburgerVisible] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

const toggleTheme = useContext(DarkContext);

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

  const sidebar = {
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

  const handleBurgerMenu = () => {
    burgerMenuOpen ? setBurgerMenuOpen(false) : setBurgerMenuOpen(true);
  };

  return (
    <>
      {burgerVisible && (
        <div
          className={styles.burgerStyle}
          data-theme={isDark ? "Dark" : "Light"}
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
          variants={sidebar}
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
        <div
          className={styles.NavBar}
          data-theme={toggleTheme ? "Dark" : "Light"}
        >
          <div className={styles.logo}>
            <a href="#" onClick={handleSmoothClick()}>
              NJ
            </a>
          </div>

          <div className={styles.titles} >
            <a href="#About" onClick={handleSmoothClick("About")}>
              About
            </a>
            <a href="#Projects" onClick={handleSmoothClick("Projects")}>
              Projects
            </a>
            <a href="#Contact" onClick={handleSmoothClick("Contact")}>
              Contact
            </a>
            <a href={cvPdf} target="_blank">
              Resume
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
              <MdLightMode onClick={toggleLightMode} size={25} />
            ) : (
              <MdDarkMode onClick={toggleDarkMode} size={25} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  isDark: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
  toggleLightMode: PropTypes.func,
};
