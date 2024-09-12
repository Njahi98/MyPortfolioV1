import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
function Project() {
  return (
    <div className={styles.projectfunc}>
      <p>Projects</p>
      <p>A variety of cool projects I
         have worked on.</p>
         <div className={styles.project}>
       
        <ProjectCard/>
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
