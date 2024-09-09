import styles from './Navbar.module.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function NavBar() {
  return (
    <>
    <div className={styles.container}>

    <div className={styles.logo}>
      <a href="#">NJ</a>
      </div>  

      <div className={styles.titles}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Resume</a>
      </div>

      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/oussama-njahi/" target='_blank' rel='noopener noreferrer'>
        <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/njahi98" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} />
        </a>
      <a href="mailto:njahioussama75@gmail.com">
      <MdEmail size={25}/>
      </a>
        </div>


    </div>
    </>
  )
}

export default NavBar