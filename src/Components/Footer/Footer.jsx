import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="URL" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

      <div className={styles.icons}>
      <FaLinkedin size={22}/>
      <FaGithub size={22}/>
      <MdEmail size={22}/>
      </div>

      <div className={styles.phrase}>
     <a href="URL" target="_blank" rel="noopener noreferrer">Design & Built by Oussama Njahi</a>

      </div>
    </div>
  );
}

export default Footer;
