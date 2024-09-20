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

import { CarouselContext } from "../../Context/CarouselContext"

import proj1Image1 from "../../assets/project1/proj1S1.png";
import proj1Image2 from "../../assets/project1/proj1S2.png";
import proj1Image3 from "../../assets/project1/proj1S3.png";
import proj1Image4 from "../../assets/project1/proj1S4.png";
import proj1Image5 from "../../assets/project1/proj1S5.png";
import proj1Image6 from "../../assets/project1/proj1S6.png";

import proj2Image1 from "../../assets/project2/proj2S1.png";
import proj2Image2 from "../../assets/project2/proj2S2.png";
import proj2Image3 from "../../assets/project2/proj2S3.png";
import proj2Image4 from "../../assets/project2/proj2S4.png";

function Project() {
  const proj1Imgs = [
    proj1Image1,
    proj1Image2,
    proj1Image3,
    proj1Image4,
    proj1Image5,
    proj1Image6,
  ];

  const proj2Imgs = [proj2Image1, proj2Image2, proj2Image3, proj2Image4];

  return (
    <div className={styles.projectfunc}>
      <p>Projects</p>
      <p>A variety of cool projects I have worked on.</p>
      <div className={styles.project}>
        <CarouselContext.Provider value={proj1Imgs}>
          <ProjectCard
            imageSrc={proj1Image1}
            projName="ERP project"
            projDescription="During my internship (iWare, Sousse), I enhanced a web application by adding advanced features with React, MongoDB, Spring Boot, and JWT. I contributed to developing a super admin management system, license validation, internship and candidate management with Google Meet scheduling, employee training modules, notifications, and real-time communication via WebSockets. These upgrades improved the platform's services and user experience."
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
            projName={"Personal Portfolio"}
            projDescription="A continuous portfolio project by Njahi Oussama"
            techStack={[
              { icon: FaHtml5, name: "HTML5" },
              { icon: FaCss3, name: "CSS3" },
              { icon: IoLogoJavascript, name: "JavaScript" },
              { icon: FaReact, name: "React" },
              { icon: FiFramer, name: "Framer Motion" },
            ]}
            githubLink={"https://github.com/Njahi98/MyPortfolioV1"}
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
