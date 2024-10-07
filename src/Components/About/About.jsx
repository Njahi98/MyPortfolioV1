import styles from "./About.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";

function About() {
  const isDark = useContext(ThemeContext);

  return (
    <div className={styles.about} id="About">
      <Reveal >
        {" "}
        <p className={styles.aboutMeP}>About me</p>
      
        <div className={styles.boxes} data-theme={isDark ? "Dark" : "Light"}>
          <div className={styles.paragraph}>
            <IoLocationOutline /> Tunisia
            <p>
              {" "}
              I am a passionate Full Stack developer from Tunisia. My journey in
              web development began with a fascination for how lines of code can
              transform into interactive, beautiful, and functional websites and
              applications. This fascination has grown into a pursuit of
              knowledge and skills across both front-end and back-end
              technologies.
            </p>
          </div>
          {/* infinite Marquee without Javascript, only CSS, thank you 'Slaying the dragon' */}
          <div>
            <PiLightning /> Stacks
            <div className={styles.wrapper}>
              <FaHtml5
                className={`${styles.leftitem} ${styles.leftitem1}`}
                title="HTML5"
              />
              <FaCss3
                className={`${styles.leftitem} ${styles.leftitem2}`}
                title="CSS3"
              />
              <IoLogoJavascript
                className={`${styles.leftitem} ${styles.leftitem3}`}
                title="Javascript"
              />
              <FaJava
                className={`${styles.leftitem} ${styles.leftitem4}`}
                title="Java"
              />
              <FaReact
                className={`${styles.leftitem} ${styles.leftitem5}`}
                title="React"
              />
              <SiSpringboot
                className={`${styles.leftitem} ${styles.leftitem6}`}
                title="SpringBoot"
              />
              <FaBootstrap
                className={`${styles.leftitem} ${styles.leftitem7}`}
                title="Bootstrap"
              />
              <SiMongodb
                className={`${styles.leftitem} ${styles.leftitem8}`}
                title="Mongodb"
              />
              <IoLogoFirebase
                className={`${styles.leftitem} ${styles.leftitem9}`}
                title="Firebase"
              />
            </div>
          </div>

          <div>
            <VscTools /> Tools
            <div className={styles.wrapper2}>
              <VscVscode
                className={`${styles.rightitem} ${styles.rightitem1}`}
                title="VScode"
              />
              <SiIntellijidea
                className={`${styles.rightitem} ${styles.rightitem2}`}
                title="Intellj Idea"
              />
              <IoLogoFigma
                className={`${styles.rightitem} ${styles.rightitem3}`}
                title="Figma"
              />
              <SiPostman
                className={`${styles.rightitem} ${styles.rightitem4}`}
                title="PostMan"
              />
              <SiSwagger
                className={`${styles.rightitem} ${styles.rightitem5}`}
                title="Swagger"
              />
              <FaGitAlt
                className={`${styles.rightitem} ${styles.rightitem6}`}
                title="Git"
              />
              <FaGithub
                className={`${styles.rightitem} ${styles.rightitem7}`}
                title="Github"
              />
              <FaLinux
                className={`${styles.rightitem} ${styles.rightitem8}`}
                title="chad Linux user"
              />

              <SiVite
                className={`${styles.rightitem} ${styles.rightitem9}`}
                title="Vite"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
