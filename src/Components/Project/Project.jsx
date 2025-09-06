import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiSocketdotio, SiSpringboot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiEjs } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiZod } from "react-icons/si";

import { CarouselContext } from "../../Context/CarouselContext";

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
import proj2Image5 from "../../assets/project2/proj2S5.webp";
import proj2Image6 from "../../assets/project2/proj2S6.webp";
import proj2Image7 from "../../assets/project2/proj2S7.webp";
import proj2Image8 from "../../assets/project2/proj2S8.webp";
import proj2Image9 from "../../assets/project2/proj2S9.webp";
import proj2Image10 from "../../assets/project2/proj2S10.webp";
import proj2Image11 from "../../assets/project2/proj2S11.webp";
import proj2Image12 from "../../assets/project2/proj2S12.webp";
import proj2Image13 from "../../assets/project2/proj2S13.webp";
import proj2Image14 from "../../assets/project2/proj2S14.webp";

import proj3Image1 from "../../assets/project3/proj3S1.webp";
import proj3Image2 from "../../assets/project3/proj3S2.webp";
import proj3Image3 from "../../assets/project3/proj3S3.webp";
import proj3Image4 from "../../assets/project3/proj3S4.webp";
import proj3Image5 from "../../assets/project3/proj3S5.webp";
import proj3Image6 from "../../assets/project3/proj3S6.webp";
import proj3Image7 from "../../assets/project3/proj3S7.webp";
import proj3Image8 from "../../assets/project3/proj3S8.webp";
import proj3Image9 from "../../assets/project3/proj3S9.webp";
import proj3Image10 from "../../assets/project3/proj3S10.webp";
import proj3Image11 from "../../assets/project3/proj3S11.webp";
import proj3Image12 from "../../assets/project3/proj3S12.webp";

import proj4Image1 from "../../assets/project4/proj4S1.webp";
import proj4Image2 from "../../assets/project4/proj4S2.webp";
import proj4Image3 from "../../assets/project4/proj4S3.webp";
import proj4Image4 from "../../assets/project4/proj4S4.webp";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";
import { useTranslation } from "react-i18next";
import { RiTailwindCssFill } from "react-icons/ri";

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
  const proj2Imgs = [
    proj2Image1,
    proj2Image2,
    proj2Image3,
    proj2Image4,
    proj2Image5,
    proj2Image6,
    proj2Image7,
    proj2Image8,
    proj2Image9,
    proj2Image10,
    proj2Image11,
    proj2Image12,
    proj2Image13,
    proj2Image14,
  ];

  const proj3Imgs = [
    proj3Image1,
    proj3Image2,
    proj3Image3,
    proj3Image4,
    proj3Image5,
    proj3Image6,
    proj3Image7,
    proj3Image8,
    proj3Image9,
    proj3Image10,
    proj3Image11,
    proj3Image12,
  ];

  const proj4Imgs = [proj4Image1, proj4Image2, proj4Image3, proj4Image4];
  const { t } = useTranslation();

  return (
    <div className={styles.projectfunc} id="Projects">
      <Reveal>
        <p className={styles.pTitle}>{t("projects.ProjectTitle")}</p>
        <p className={styles.smallTitle} data-theme={isDark ? "Dark" : "Light"}>
          {t("projects.ProjectIntro")}
        </p>
      </Reveal>

      <div className={styles.project}>
        <CarouselContext.Provider value={proj1Imgs}>
          <ProjectCard
            imageSrc={proj1Image1}
            projName={t("projects.Proj1Title")}
            projDescription={t("projects.Proj1Description")}
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
            projName={t("projects.Proj2Title")}
            projDescription={t("projects.Proj2Description")}
            techStack={[
              { icon: FaNodeJs, name: "NodeJS" },
              { icon: SiExpress, name: "Express" },
              { icon: DiMongodb, name: "MongoDb" },
              { icon: SiJsonwebtokens, name: "JWT" },
              { icon: SiEjs, name: "EJS" },
            ]}
            githubLink={
              "https://github.com/Njahi98/Recipe-Management-Application"
            }
            externalLink={
              "https://recipe-management-application-1.onrender.com/"
            }
          />{" "}
        </CarouselContext.Provider>

        <CarouselContext.Provider value={proj3Imgs}>
          <ProjectCard
            imageSrc={proj3Image1}
            projName={t("projects.Proj3Title")}
            projDescription={t("projects.Proj3Description")}
            techStack={[
              { icon: FaReact, name: "React" },
              {icon:RiTailwindCssFill, name: "Tailwind CSS" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: FaNodeJs, name: "NodeJS" },
              { icon: SiExpress, name: "Express" },
              { icon: SiPrisma, name: "Prisma" },
              { icon: DiPostgresql, name: "PostgreSQL" },
              { icon: SiJsonwebtokens, name: "JWT" },
              { icon: SiZod, name: "ZOD" },
              {icon: SiSocketdotio, name: "Socket.io" },
              { icon: SiReacthookform, name: "Reacthook Form" },
            ]}
            githubLink={"https://github.com/Njahi98/textile-frontend"}
          />{" "}
        </CarouselContext.Provider>

        <CarouselContext.Provider value={proj4Imgs}>
          <ProjectCard
            imageSrc={proj4Image1}
            projName={t("projects.ProjTitle4")}
            projDescription={t("projects.Proj4Description")}
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
      </div>
    </div>
  );
}

export default Project;
