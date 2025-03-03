import styles from "./Home.module.css";
import devPic from "../../assets/devPicture.webp";
import { motion } from "framer-motion";
import { handleSmoothClick } from "../Navbar/SmoothClick";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";
import { useTranslation } from "react-i18next";

function Home() {
  const isDark = useContext(ThemeContext);
  const { t } = useTranslation();

  //added React Component with 3D Hover Effect Using Refs
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const imageContainer = containerRef.current;
    const image = imageRef.current;
    
    if (!imageContainer || !image) return;
    
    // Variables for tilt effect
    const maxTilt = 15;
    const maxMove = 25;
    const glowIntensity = 40;
    const baseColor = '155, 93, 229';
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 2;
      const yPercent = (y / rect.height - 0.5) * 2;
      
      const rotateX = -yPercent * maxTilt;
      const rotateY = xPercent * maxTilt;
      const translateX = xPercent * maxMove;
      const translateY = yPercent * maxMove;
      
      image.style.transform = `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
      
      const distance = Math.sqrt(xPercent * xPercent + yPercent * yPercent);
      const intensity = Math.max(0.5, 1 - distance);
      image.style.boxShadow = `
        ${-xPercent * 20}px ${-yPercent * 20}px ${glowIntensity * intensity}px rgba(${baseColor}, 0.3),
        0 5px 15px #9b5de5
      `;
    };
    
    const handleMouseLeave = () => {
      image.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0) scale(1)';
      image.style.boxShadow = '0 5px 15px #9b5de5';
      image.style.animation = 'move 7s infinite';
    };
    
    const handleMouseEnter = () => {
      image.style.animation = 'none';
    };
    
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);



  return (
    <div className={styles.home}>
      <Reveal
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className={styles.content}>
          <p>{t("home.Hello")}</p>
          <h2 data-theme={isDark ? "Dark" : "Light"}>
            {t("home.Name")} <span className={styles.name}>Oussama Njahi</span>
          </h2>
          <p
            className={styles.description}
            data-theme={isDark ? "Dark" : "Light"}
          >
            {t("home.Intro")}
          </p>
          <div className={styles.skills} data-theme={isDark ? "Dark" : "Light"}>
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
          <div
            className={styles.linkBtns}
            data-theme={isDark ? "Dark" : "Light"}
          >
            <a
              href="#Projects"
              onClick={handleSmoothClick("Projects")}
              className={styles.button}
            >
              {t("home.ProjectButton")}
            </a>
            <a
              href="#Contact"
              onClick={handleSmoothClick("Contact")}
              className={styles.button}
            >
              {t("home.ContactButton")}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
    <div className={styles.imageContainer} ref={containerRef}>
      <img src={devPic} alt="Developer" ref={imageRef} />
    </div>
      </Reveal>
    </div>
  );
}

export default Home;
