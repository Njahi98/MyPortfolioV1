import styles from "./Home.module.css";
import devPic from "../../assets/devPicture.webp";
import { handleSmoothClick } from "../Navbar/Navbar";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <p>Hello There!</p>
        <h2>
          I&apos;m <span className={styles.name}>Oussama Njahi</span>
        </h2>
        <p className={styles.description}>
          A passionate fullstack developer, creating amazing websites using
          React & Spring Boot.
        </p>
        <div className={styles.skills}>
          <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            React
          </motion.span>
          <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            Spring Boot
          </motion.span>
          <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            JavaScript
          </motion.span>
          <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            Java
          </motion.span>
          <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            HTML/CSS
          </motion.span>
        </div>
        <div className={styles.linkBtns}>
          <a
            href="#Projects"
            onClick={handleSmoothClick("Projects")}
            className={styles.button}
          >
            View My Work
          </a>
          <a
            href="#Contact"
            onClick={handleSmoothClick("Contact")}
            className={styles.button}
          >
            Get in Touch
          </a>
        </div> <br />
        <p style={{textAlign:"center"}} className={styles.description}>
          - portfolio is still under construction -
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={devPic} alt="Developer" />
      </div>
    </div>
  );
}

export default Home;
