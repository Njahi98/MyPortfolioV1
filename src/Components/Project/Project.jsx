import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import proj1S1 from "../../assets/project1/proj1S1.png";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";



function Project() {



  return (
    <div className={styles.projectfunc}>
      <p>Projects</p>
      <p>A variety of cool projects I have worked on.</p>
      <div className={styles.project}>
        <ProjectCard
          imageSrc={proj1S1}
          projName="ERP PROJECT"
          projDescription="During my internship (iWare, Sousse), I enhanced a web application by adding advanced features with React, MongoDB, Spring Boot, and JWT. I contributed to developing a super admin management system, license validation, internship and candidate management with Google Meet scheduling, employee training modules, notifications, and real-time communication via WebSockets. These upgrades improved the platform's services and user experience."
        techStack={[
          {icon:FaReact,name:"react"},
          {icon:SiSpringboot,name:"SpringBoot"},
          {icon:DiMongodb,name:"MongoDb"},
          {icon:SiJsonwebtokens,name:"JWT"},
          {icon:IoLogoFirebase,name:"Firebase"},
        ]}
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> 
      </div>

    </div>
  );
}

export default Project;
