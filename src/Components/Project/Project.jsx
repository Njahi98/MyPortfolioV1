import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import proj1S1 from "../../assets/project1/proj1S1.png"
function Project() {
  return (
    <div className={styles.projectfunc}>
      <p>Projects</p>
      <p>A variety of cool projects I
         have worked on.</p>
         <div className={styles.project}>
       
        <ProjectCard imageSrc={proj1S1} projName={"ERP PROJECT"}/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>



         </div>
    </div>
  );
}

export default Project;
