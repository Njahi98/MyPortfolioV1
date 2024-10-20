import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handleSmoothClick } from "../Navbar/SmoothClick";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Footer() {

  const isDark = useContext(ThemeContext)

  return (
    <div className={styles.footer}>
      <div className={styles.title} data-theme={isDark ? "Dark" : "Light"}>
        <a href="#" onClick={handleSmoothClick()}>
          Home
        </a>
        <a href="#About" onClick={handleSmoothClick("About")}>
          About
        </a>
        <a href="#Projects" onClick={handleSmoothClick("Projects")}>
          Projects
        </a>   <a
          href="https://github.com/Njahi98/MyPortfolioV1"
          target="_blank"
          rel="noopener noreferrer"
        >Source Code</a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
     
      </div>

      <div className={styles.icons} data-theme={isDark ? "Dark" : "Light"}>
        <a
          href="https://www.linkedin.com/in/oussama-njahi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} />{" "}
        </a>
        <a
          href="https://github.com/njahi98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={22} />{" "}
        </a>
        <a href="mailto:njahioussama75@gmail.com">
          <MdEmail size={22} />
        </a>
      </div>

      <div className={styles.phrase} data-theme={isDark ? "Dark" : "Light"}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Designed & Developed by Oussama Njahi
        </a>
      </div>
    </div>
  );
}

export default Footer;
