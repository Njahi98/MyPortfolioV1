import PropTypes from "prop-types";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import { AnimatePresence } from "framer-motion";
import Modal from "./ProjectModal/ProjectModal";

function ProjectCard(props) {
  const [isHover, setIsHover] = useState(false);
  const { modalOpen, close, open } = useModal();

  const styles = {
    position: "relative",
    borderStyle: "solid",
    borderRadius: "15px",
    borderColor: isHover ? "white" : "#97949c2b",
    borderWidth: "thin",
    padding: "1rem",
    cursor: "pointer",
    overflow: "hidden",
    transition: "border-color 0.6s ease",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    transition: "filter 0.6s ease",
    filter: isHover ? "brightness(100%)" : "brightness(70%)",
  };
  const nameStyle = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "transform 0.6s ease",
    transform: isHover ? "translateY(-100)" : "translateY(0)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    opacity: isHover ? 0 : 1,
    transform: isHover ? "translateY(-100%)" : "translateY(0)",
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        {props.imageSrc && <img src={props.imageSrc} style={imgStyle} alt="" />}
        <div style={overlayStyle}>
          <p style={nameStyle}>{props.projName}</p>
        </div>
      </div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal  projDescription={props.projDescription}
           projName={props.projName}
             modalOpen={modalOpen}
             handleClose={close}
             techStack={props.techStack}
            githubLink={props.githubLink}
            liveLink={props.liveLink}
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
  projDescription:PropTypes.any,
  techStack:PropTypes.any,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default ProjectCard;
