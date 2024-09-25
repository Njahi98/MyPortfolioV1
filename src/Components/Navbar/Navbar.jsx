import styles from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cvPdf from "../../assets/Oussama-Njahi-Resume.pdf";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Backdrop from "../Project/ProjectModal/Backdrop";
import { RiCloseLargeLine } from "react-icons/ri";

export const handleSmoothClick = (id) => (e) => {
  e.preventDefault();
  const element = id ? document.getElementById(id) : document.body;
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function NavBar() {
  const [burgerVisible, setburgerVisible] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const burgerMenuBackdrop={
    position:'absolute',
    top:0,
    left:'30%',
    height:'100%',
    width:'70%',
    background:'rgba(0, 0, 0, 0.6)',
    display:'flex', 
    alignItems:'flex-end',
    justifyContent:'flex-start',
    flexDirection:'column',
    zIndex:1  
};


  useEffect(() => {
    const handleBurger = () => {
      setburgerVisible(window.innerWidth < 1160);
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
        <div className={styles.burgerStyle}>
          <div className={styles.burgerLogo}>
            <a href="#" onClick={handleSmoothClick()}>
              NJ
            </a>
          </div>
          {!burgerMenuOpen && (
            <CiMenuBurger
              size={30}
              onClick={handleBurgerMenu}
              style={{cursor:"pointer"}}
            />
          )}
        </div>
      )}


      {burgerMenuOpen && <Backdrop backdropStyle={burgerMenuBackdrop}
      >
      <div className={styles.burgerStyle}>

      <RiCloseLargeLine
            className={styles.burgerCloseStyle}
            size={30}
            onClick={handleBurgerMenu}
          />
</div>
        </Backdrop>}
      {!burgerVisible && (
        <div className={styles.NavBar}>
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
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
