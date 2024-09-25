import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SwipeCarousel } from "../SwipeCarousel";
import { useState } from "react";
import styles from "./ProjectModal.module.css";

function Modal({ githubLink, externalLink, ...props }) {
  const [openGithubBubble, setOpenGithubBubble] = useState(false);
  const [openExternalLinkBubble, setOpenExternalLinkBubble] = useState(false);

  const modalBackdrop={
    position:'absolute',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    background:'rgba(0, 0, 0, 0.8)',
    display:'flex', 
    alignItems:'center',
    justifyContent:'center',
    zIndex:1  
};


  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "70vh",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const TechItem = ({ Icon, name }) => (
    <div className={styles.TechItemStyle}>
      <Icon size={24} />
      <span>{name}</span>
    </div>
  );

  const handleGithubClick = () => {
    if (githubLink) {
      window.open(githubLink, "_blank", "noopener noreferrer");
    } else {
      setOpenGithubBubble(!openGithubBubble);
    }
  };

  const handleExternalLinkClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank");
    } else {
      setOpenExternalLinkBubble(!openExternalLinkBubble);
    }
  };

  return (
    <Backdrop onClick={props.handleClose} backdropStyle={modalBackdrop}>
      <motion.div
        className={styles.modalStyles}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.closeButton}>
          <RiCloseLargeLine
            size="25px"
            style={{ cursor: "pointer" }}
            onClick={props.handleClose}
          />
        </div>
        <div className={styles.detailsStyle}>
          <div className={styles.textDetailsStyle}>
            <p className={styles.projNameStyle}>{props.projName}</p>
            <p className={styles.smallTitle}>Description.</p>
            <p>{props.projDescription}</p>
            <p className={styles.smallTitle}>Technologies.</p>
            <div className={styles.techsStyle}>
              {props.techStack &&
                props.techStack.map((tech, index) => (
                  <TechItem key={index} Icon={tech.icon} name={tech.name} />
                ))}
            </div>
          </div>
          <div className={styles.imageDetailsStyle}>
            <SwipeCarousel />
          </div>
        </div>

        <div className={styles.linksStyle}>
          <div
            onClick={handleGithubClick}
            className={styles.iconLink}
            data-tooltip={githubLink ? "View on GitHub" : "Not available"}
          >
            <FaGithub /> Github
          </div>
          <div
            onClick={handleExternalLinkClick}
            className={styles.iconLink}
            data-tooltip={externalLink ? "View live site" : "Not available"}
          >
            <FaExternalLinkAlt /> Live
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.any,
  text: PropTypes.string,
  projName: PropTypes.string,
  projDescription: PropTypes.string,
  techStack: PropTypes.any,
  name: PropTypes.any,
  Icon: PropTypes.any,
  githubLink: PropTypes.string,
  externalLink: PropTypes.string,
};

export default Modal;