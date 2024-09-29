import styles from "./Home.module.css";
import devPic from "../../assets/devPicture.webp";
import { motion } from "framer-motion";
import { handleSmoothClick } from "../Navbar/SmoothClick";
import { useContext } from "react";
import { DarkContext } from "../../Context/DarkContext";


function Home() {
  const isDark = useContext(DarkContext);
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <p>Hello There!</p>
        <h2 data-theme={isDark ? "Dark" : "Light"}>
          I&apos;m <span className={styles.name}>Oussama Njahi</span>
        </h2>
        <p className={styles.description} data-theme={isDark ? "Dark" : "Light"}>
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
        <div className={styles.linkBtns} data-theme={isDark ? "Dark" : "Light"}>
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
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={devPic} alt="Developer" />
      </div>
    </div>
  );
}

export default Home;
