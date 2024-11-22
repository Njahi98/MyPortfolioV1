import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handleSmoothClick } from "../Navbar/SmoothClick";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

function Footer() {
  const isDark = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.title} data-theme={isDark ? "Dark" : "Light"}>
        <a href="#" onClick={handleSmoothClick()}>
          {t("footer.Home")}
        </a>
        <a href="#About" onClick={handleSmoothClick("About")}>
          {t("footer.About")}
        </a>
        <a href="#Projects" onClick={handleSmoothClick("Projects")}>
          {t("footer.Projects")}
        </a>{" "}
        <a
          href="https://github.com/Njahi98/MyPortfolioV1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.SourceCode")}{" "}
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          {t("footer.Resume")}
        </a>
      </div>

      <div className={styles.icons} data-theme={isDark ? "Dark" : "Light"}>
        <a
          href="https://www.linkedin.com/in/oussama-njahi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={22} />{" "}
        </a>
        <a
          href="https://github.com/njahi98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={22} />{" "}
        </a>
        <a href="mailto:njahioussama75@gmail.com" aria-label="Send Email">
          <MdEmail size={22} />
        </a>
      </div>

      <div className={styles.phrase} data-theme={isDark ? "Dark" : "Light"}>
        <a href="" target="_blank" rel="noopener noreferrer">
          {t("footer.endPhrase")}
        </a>
      </div>
    </div>
  );
}

export default Footer;
