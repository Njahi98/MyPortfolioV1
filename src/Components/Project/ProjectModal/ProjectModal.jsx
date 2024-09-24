import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SwipeCarousel } from "../SwipeCarousel";
import { useState } from "react";
import styles from "./ProjectModal.module.css";

function Modal({githubLink,externalLink,...props}) {
  const [openGithubBubble, setOpenGithubBubble] = useState(false);
  const [openExternalLinkBubble, setOpenExternalLinkBubble] = useState(false);


  //handle popup animations
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
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
  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } },
  };


  const TechItem = ({ Icon, name }) => (
    <div
      className={styles.TechItemStyle}
    >
      <Icon size={24}/>
      <span>{name}</span>
    </div>
  );

  const handleGithubClick = () => {
    if (githubLink) {
      window.open(githubLink, '_blank','noopener noreferrer');
    } else {
      setOpenGithubBubble(!openGithubBubble);
    }
  };

  const handleExternalLinkClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    } else {
      setOpenExternalLinkBubble(!openExternalLinkBubble);
    }
  };

  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div className={styles.modalStyles}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.closeButton}>
        <RiCloseLargeLine
          size="25px"
          style={{cursor:"pointer",}}
          onClick={props.handleClose}
        />
        </div>
        <div className={styles.detailsStyle}>
          <div className={styles.textDetailsStyle}>
            <p
            className={styles.projNameStyle}
            >
              {props.projName}
            </p>
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
          <div  className={styles.imageDetailsStyle}>
            <SwipeCarousel />
          </div>
        </div>

        <div className={styles.linksStyle}>
          <div
            onClick={handleGithubClick}
            className={styles.iconLink}
          >
            <FaGithub/> Github
          </div>

          {openGithubBubble && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.githubBubbleWrapper}
            >
              <div
                className={styles.speechBubble}
              >Unavailable

                </div>
              <div
                className={styles.speechBubbleAfter}
              ></div>
            </motion.div>
          )}
          <div
            onClick={handleExternalLinkClick}
            className={styles.iconLink}
          >
            <FaExternalLinkAlt/> Live
          </div>
          {openExternalLinkBubble && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.externalLinkBubbleWrapper}
            >
              <div
                className={styles.speechBubble}
              >Unavailable
                </div>
              <div
                className={styles.speechBubbleAfter}      
              ></div>
            </motion.div>
          )}
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
