import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";


import { CarouselContext } from "../../Context/CarouselContext"

import proj1Image1 from "../../assets/project1/proj1S1.webp";
import proj1Image2 from "../../assets/project1/proj1S2.webp";
import proj1Image3 from "../../assets/project1/proj1S3.webp";
import proj1Image4 from "../../assets/project1/proj1S4.webp";
import proj1Image5 from "../../assets/project1/proj1S5.webp";
import proj1Image6 from "../../assets/project1/proj1S6.webp";

import proj2Image1 from "../../assets/project2/proj2S1.webp";
import proj2Image2 from "../../assets/project2/proj2S2.webp";
import proj2Image3 from "../../assets/project2/proj2S3.webp";
import proj2Image4 from "../../assets/project2/proj2S4.webp";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";
import { useTranslation } from "react-i18next";



function Project() {

 const isDark = useContext(ThemeContext); 

  const proj1Imgs = [
    proj1Image1,
    proj1Image2,
    proj1Image3,
    proj1Image4,
    proj1Image5,
    proj1Image6,
  ];

  const proj2Imgs = [proj2Image1, proj2Image2, proj2Image3, proj2Image4];
  const {t}=useTranslation();

  return (
    
    <div className={styles.projectfunc} id="Projects">
      <Reveal><p className={styles.pTitle}>{t('projects.ProjectTitle')}</p>
      <p className={styles.smallTitle} data-theme={isDark ? "Dark" : "Light"}>{t('projects.ProjectIntro')}</p></Reveal>
      
      <div className={styles.project}>
        <CarouselContext.Provider value={proj1Imgs}>
          <ProjectCard
            imageSrc={proj1Image1}
            projName={t('projects.Proj1Title')}
            projDescription={t('projects.Proj1Description')}
            techStack={[
              { icon: FaReact, name: "React" },
              { icon: SiSpringboot, name: "SpringBoot" },
              { icon: DiMongodb, name: "MongoDb" },
              { icon: SiJsonwebtokens, name: "JWT" },
              { icon: IoLogoFirebase, name: "Firebase" },
            ]}
          />{" "}
        </CarouselContext.Provider>

        <CarouselContext.Provider value={proj2Imgs}>
          <ProjectCard
            imageSrc={proj2Image1}
            projName={t('projects.Proj2Title')}
            projDescription={t('projects.Proj2Description')}
            techStack={[
              { icon: FaHtml5, name: "HTML5" },
              { icon: FaCss3, name: "CSS3" },
              { icon: IoLogoJavascript, name: "JavaScript" },
              { icon: FaReact, name: "React" },
              { icon: FiFramer, name: "Framer Motion" },
              { icon: SiReacthookform, name: "Reacthook Form" },
            ]}
            githubLink={"https://github.com/Njahi98/MyPortfolioV1"}
            externalLink={"https://njahi-oussama.vercel.app"}
          />{" "}
        </CarouselContext.Provider>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>

  );
}

export default Project;
