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
  const iconStyle = { width: "auto", height: "50px" };

  return (
    <div className={styles.about} id="About">
      <Reveal>
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

          <div className={styles.firstRow}>
            <PiLightning /> Stacks
            <div className={styles.wrapper}>
              <div
                className={`${styles.leftitem}  ${styles.leftitem1} ${styles.bubble}`}
                title="HTML5"
                data-tooltip="HTML5"
              >
                <FaHtml5 style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem2} ${styles.bubble}`}
                title="CSS3"
                data-tooltip="CSS3"
              >
                <FaCss3 style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem3} ${styles.bubble}`}
                title="Javascript"
                data-tooltip="Javascript"
              >
                <IoLogoJavascript style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem4} ${styles.bubble}`}
                title="Java"
                data-tooltip="Java"
              >
                <FaJava style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem5} ${styles.bubble}`}
                title="React"
                data-tooltip="React"
              >
                <FaReact style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem6} ${styles.bubble}`}
                title="SpringBoot"
                data-tooltip="SpringBoot"
              >
                <SiSpringboot style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem7} ${styles.bubble}`}
                title="Bootstrap"
                data-tooltip="Bootstrap"
              >
                <FaBootstrap style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem8} ${styles.bubble}`}
                title="MongoDB"
                data-tooltip="MongoDB"
              >
                <SiMongodb style={iconStyle} />
              </div>

              <div
                className={`${styles.leftitem}  ${styles.leftitem9} ${styles.bubble}`}
                title="Firebase"
                data-tooltip="Firebase"
              >
                <IoLogoFirebase style={iconStyle} />
              </div>
            </div>
          </div>

          <div className={styles.secondRow}>
            <VscTools /> Tools
            <div className={styles.wrapper2}>
              <div
                className={`${styles.rightitem} ${styles.rightitem1} ${styles.bubble}`}
                title="VScode"
                data-tooltip="VScode"
              >
                <VscVscode style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem2} ${styles.bubble}`}
                title="Intellij Idea"
                data-tooltip="Intellij Idea"
              >
                <SiIntellijidea style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem3} ${styles.bubble}`}
                title="Figma"
                data-tooltip="Figma"
              >
                <IoLogoFigma style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem4} ${styles.bubble}`}
                title="PostMan"
                data-tooltip="PostMan"
              >
                <SiPostman style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem5} ${styles.bubble}`}
                title="Swagger"
                data-tooltip="Swagger"
              >
                <SiSwagger style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem6} ${styles.bubble}`}
                title="Git"
                data-tooltip="Git"
              >
                <FaGitAlt style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem7} ${styles.bubble}`}
                title="Github"
                data-tooltip="Github"
              >
                <FaGithub style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem8} ${styles.bubble}`}
                title="chad Linux user"
                data-tooltip="chad Linux user"
              >
                <FaLinux style={iconStyle} />
              </div>

              <div
                className={`${styles.rightitem} ${styles.rightitem9} ${styles.bubble}`}
                title="Vite"
                data-tooltip="Vite"
              >
                <SiVite style={iconStyle} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
