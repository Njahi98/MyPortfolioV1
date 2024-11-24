import "./About.css";
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
import { useTranslation } from "react-i18next";

function About() {
  const isDark = useContext(ThemeContext);
  const iconStyle = { width: "auto", height: "50px" };
  const { t } = useTranslation();

  const leftItems = [
    {
      className: "leftitem1",
      title: "HTML5",
      datatooltip: "HTML5",
      iconName: FaHtml5,
    },
    {
      className: "leftitem2",
      title: "CSS3",
      datatooltip: "CSS3",
      iconName: FaCss3,
    },
    {
      className: "leftitem3",
      title: "Javascript",
      datatooltip: "Javascript",
      iconName: IoLogoJavascript,
    },
    {
      className: "leftitem4",
      title: "Java",
      datatooltip: "Java",
      iconName: FaJava,
    },
    {
      className: "leftitem5",
      title: "React",
      datatooltip: "React",
      iconName: FaReact,
    },
    {
      className: "leftitem6",
      title: "SpringBoot",
      datatooltip: "SpringBoot",
      iconName: SiSpringboot,
    },
    {
      className: "leftitem7",
      title: "Bootstrap",
      datatooltip: "Bootstrap",
      iconName: FaBootstrap,
    },
    {
      className: "leftitem8",
      title: "MongoDB",
      datatooltip: "MongoDB",
      iconName: SiMongodb,
    },
    {
      className: "leftitem9",
      title: "Firebase",
      datatooltip: "Firebase",
      iconName: IoLogoFirebase,
    },
  ];

  const rightItems = [
    {
      className: "rightitem bubble rightitem1",
      title: "VScode",
      datatooltip: "VScode",
      iconName: VscVscode,
    },
    {
      className: "rightitem bubble rightitem2",
      title: "Intellij Idea",
      datatooltip: "Intellij Idea",
      iconName: SiIntellijidea,
    },
    {
      className: "rightitem bubble rightitem3",
      title: "Figma",
      datatooltip: "Figma",
      iconName: IoLogoFigma,
    },
    {
      className: "rightitem bubble rightitem4",
      title: "PostMan",
      datatooltip: "PostMan",
      iconName: SiPostman,
    },
    {
      className: "rightitem bubble rightitem5",
      title: "Swagger",
      datatooltip: "Swagger",
      iconName: SiSwagger,
    },
    {
      className: "rightitem bubble rightitem6",
      title: "Git",
      datatooltip: "Git",
      iconName: FaGitAlt,
    },
    {
      className: "rightitem bubble rightitem7",
      title: "Github",
      datatooltip: "Github",
      iconName: FaGithub,
    },
    {
      className: "rightitem bubble rightitem8",
      title: "Linux",
      datatooltip: "Linux",
      iconName: FaLinux,
    },
    {
      className: "rightitem bubble rightitem9",
      title: "Vite",
      datatooltip: "Vite",
      iconName: SiVite,
    },
  ];

  return (
    <div className="about" id="About">
      <Reveal>
        {" "}
        <p className="aboutMeP">{t("about.AboutMe")}</p>
        <div className="boxes" data-theme={isDark ? "Dark" : "Light"}>
          <div className="paragraph">
            <IoLocationOutline /> {t("about.Location")}
            <p>{t("about.Paragraph")}</p>
          </div>
          {/* infinite Marquee without Javascript, only CSS, thank you 'Slaying the dragon' */}

          <div className="firstRow">
            <PiLightning /> {t("about.Stacks")}
            <div className="wrapper">
              {leftItems.map((leftItem) => {
                return (
                  <div
                    className={`leftitem bubble ${leftItem.className}`}
                    title={leftItem.title}
                    data-tooltip={leftItem.datatooltip}
                    key={leftItem.className}
                  >
                    <leftItem.iconName style={iconStyle} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="secondRow">
            <VscTools /> {t("about.Tools")}
            <div className="wrapper2">
              {rightItems.map((rightItem) => {
                return (
                  <div
                    className={`rightitem bubble ${rightItem.className}`}
                    title={rightItem.title}
                    data-tooltip={rightItem.datatooltip}
                    key={rightItem.className}
                  >
                    <rightItem.iconName style={iconStyle} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
