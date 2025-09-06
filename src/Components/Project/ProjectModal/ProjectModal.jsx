import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SwipeCarousel } from "../SwipeCarousel";
import { useState } from "react";
import styles from "./ProjectModal.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

function Modal({ githubLink, externalLink, ...props }) {
  const [openGithubBubble, setOpenGithubBubble] = useState(false);
  const [openExternalLinkBubble, setOpenExternalLinkBubble] = useState(false);

  const isDark = useContext(ThemeContext);
  const { t } = useTranslation();

  const modalBackdrop = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1001,
    padding: "1rem",
    boxSizing: "border-box",
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const TechItem = ({ Icon, name }) => (
    <div
      className={styles.TechItemStyle}
      data-theme={isDark ? "Dark" : "Light"}
    >
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
    <Backdrop
      onClick={props.handleClose}
      backdropStyle={modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalStyles}
        data-theme={isDark ? "Dark" : "Light"}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
        <div className={styles.modalHeader}>
          <h2 className={styles.projNameStyle} data-theme={isDark ? "Dark" : "Light"}>
            {props.projName}
          </h2>
          <button 
            className={styles.closeButton}
            onClick={props.handleClose}
            aria-label="Close modal"
          >
            <RiCloseLargeLine size="24px" />
          </button>
        </div>

        
        <div className={styles.modalContent}>
          <div className={styles.contentSection}>
            <h3 className={styles.sectionTitle} data-theme={isDark ? "Dark" : "Light"}>
              Description
            </h3>
            <p className={styles.description}>{props.projDescription}</p>

            <h3 className={styles.sectionTitle} data-theme={isDark ? "Dark" : "Light"}>
              Technologies
            </h3>
            <div className={styles.techsGrid}>
              {props.techStack &&
                props.techStack.map((tech, index) => (
                  <TechItem key={index} Icon={tech.icon} name={tech.name} />
                ))}
            </div>
          </div>

          <div className={styles.carouselSection}>
            <SwipeCarousel />
          </div>
        </div>

        
        <div className={styles.modalFooter}>
          <button
            onClick={handleGithubClick}
            className={styles.actionButton}
            data-theme={isDark ? "Dark" : "Light"}
            title={
              githubLink
                ? t('projects.githubAvailable')
                : t('projects.githubNotAvailable')
            }
          >
            <FaGithub size="18px" />
            <span>GitHub</span>
          </button>
          
          <button
            onClick={handleExternalLinkClick}
            className={styles.actionButton}
            data-theme={isDark ? "Dark" : "Light"}
            title={
              externalLink
                ? t('projects.liveAvailable')
                : t('projects.liveNotAvailable')
            }
          >
            <FaExternalLinkAlt size="18px" />
            <span>Live Demo</span>
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  projName: PropTypes.string,
  projDescription: PropTypes.string,
  techStack: PropTypes.array,
  githubLink: PropTypes.string,
  externalLink: PropTypes.string,
  Icon: PropTypes.elementType,
  name: PropTypes.string,
};

export default Modal;