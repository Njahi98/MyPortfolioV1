import PropTypes from "prop-types";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import { AnimatePresence } from "framer-motion";
import Modal from "./ProjectModal/ProjectModal";
import styles from "./ProjectCard.module.css";
import { Reveal } from "../Utils/Reveal";

function ProjectCard(props) {


  const [isHover, setIsHover] = useState(false);
  const { modalOpen, close, open } = useModal();

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div
        className={`${styles.projectCard} ${isHover ? styles.hovered : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <Reveal>
        {props.imageSrc && <img src={props.imageSrc} className={`${styles.projectImage} ${isHover ? styles.brightImage : ''}`} alt="" />}
        <div className={`${styles.overlay} ${isHover ? styles.hiddenOverlay : ''}`}>
          <p className={`${styles.projectName} ${isHover ? styles.hiddenName : ''}`}>{props.projName}</p>
        </div></Reveal>
      </div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            projDescription={props.projDescription}
            projName={props.projName}
            modalOpen={modalOpen}
            handleClose={close}
            techStack={props.techStack}
            githubLink={props.githubLink}
            externalLink={props.externalLink}
          />
        )}
      </AnimatePresence>
    </>
  );
}

ProjectCard.propTypes = {
  imageSrc: PropTypes.string,
  projName: PropTypes.string,
  onClick: PropTypes.any,
  projDescription: PropTypes.any,
  techStack: PropTypes.any,
  githubLink: PropTypes.string,
  externalLink: PropTypes.string,
};

export default ProjectCard;