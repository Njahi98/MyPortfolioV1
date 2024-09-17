import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SwipeCarousel } from "../SwipeCarousel";
import { useState } from "react";

function Modal(props) {
  const [openGithubBubble, setOpenGithubBubble] = useState(false);
  const [openLiveBubble, setOpenLiveBubble] = useState(false);

  const modalStyles = {
    width: "clamp(50%,1200px,90%)",
    height: "min(50%,600px)",
    marginTop: "100rem",
    padding: "1rem",
    borderRadius: "12px",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: "thin",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 100,
    color: "white",
  };
  //handle popup animations
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 1,
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
      opacity: 1,
    },
  };

  const dropOut = {
    hidden: {
      y: "100vh",
      opacity: 1,
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
      y: "-100vh",
      opacity: 1,
    },
  };

  const closeButtonStyle = {
    cursor: "pointer",
    size: "10px",
    alignSelf: "flex-end",
  };

  const detailsStyle = {
    width: "100%",
    height: "90%",
    borderTop: "solid thin",
    borderBottom: "solid thin",
    marginTop: "1rem",
    display: "flex",
  };

  const textDetailsStyle = {
    width: "40%",
    fontFamily: "poppins",
    overflow: "auto",
    color: "#BABABA",
  };

  const imageDetailsStyle = {
    width: "70%",
    height: "100%",
  };

  const linksStyle = {
    justifyContent: "flex-end",
    marginRight: "1rem",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "2%",
    padding: "1rem",
    gap: "4rem",
  };

  const techsStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const TechItem = ({ Icon, name }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "5px",
        color: "white",
        borderStyle: "solid",
        borderWidth: "thin",
        borderRadius: "12px",
        padding: "5px",
      }}
    >
      <Icon size={24} style={{ marginRight: "10px" }} />
      <span>{name}</span>
    </div>
  );

  const handleGithubClick = () => {
    openGithubBubble ? setOpenGithubBubble(false) : setOpenGithubBubble(true);
  };

  const handleLiveClick = () => {
    openLiveBubble ? setOpenLiveBubble(false) : setOpenLiveBubble(true);
  };

  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        style={modalStyles}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <RiCloseLargeLine
          size="25px"
          style={closeButtonStyle}
          onClick={props.handleClose}
        />

        <div style={detailsStyle} className="details">
          <div style={textDetailsStyle} className="textDetails">
            <p
              style={{
                fontFamily: "poppins",
                fontSize: "2rem",
                marginBottom: 0,
                marginTop: 0,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {props.projName}
            </p>
            <p style={{ color: "white", fontWeight: "bold" }}>Description.</p>
            <p>{props.projDescription}</p>
            <p style={{ color: "white", fontWeight: "bold" }}>Technologies.</p>
            <div style={techsStyle} className="technologies">
              {props.techStack &&
                props.techStack.map((tech, index) => (
                  <TechItem key={index} Icon={tech.icon} name={tech.name} />
                ))}
            </div>
          </div>
          <div style={imageDetailsStyle} className="imageDetails">
            <SwipeCarousel />
          </div>
        </div>
        <div className="links" style={linksStyle}>
          <div
            onClick={handleGithubClick}
            style={{
              cursor: "pointer",
              borderStyle: "solid",
              borderWidth: "thin",
              borderRadius: "12px",
              padding: "5px",
            }}
            className="github-link"
          >
            <FaGithub style={{ position: "relative" }} /> Github
          </div>

          {openGithubBubble && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={dropOut}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bubble wrapper"
              style={{ position: "absolute", bottom: "5rem", right: "21rem" }}
            >
              <div
                className="speechBubble"
                style={{
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: "thin",
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.6)",
                  width: "8rem",
                  height: "3rem",
                  borderRadius: "10px",
                  zIndex: 120,
                }}
              ></div>
              <div
                className="speech-bubbleafter"
                style={{
                  content: "",
                  position: "absolute",
                  bottom: 0,
                  left: "80%",
                  width: 0,
                  height: 0,
                  border: "20px solid transparent",
                  borderTopColor: "white",
                  borderBottom: 0,
                  borderRight: 0,
                  marginLeft: "-10px",
                  marginBottom: "-20px",
                  zIndex: 121,
                }}
              ></div>
            </motion.div>
          )}
          <div
            onClick={handleLiveClick}
            style={{
              cursor: "pointer",
              borderStyle: "solid",
              borderWidth: "thin",
              borderRadius: "12px",
              padding: "5px",
            }}
            className="live-link"
          >
            <MdLiveTv style={{ position: "relative" }} /> Live
          </div>
          {openLiveBubble && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={dropOut}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bubble wrapper2"
              style={{ position: "absolute", bottom: "5rem", right: "12rem" }}
            >
              <div
                className="speechBubble2"
                style={{
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: "thin",
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.6)",
                  width: "8rem",
                  height: "3rem",
                  borderRadius: "10px",
                  zIndex: 120,
                }}
              ></div>
              <div
                className="speech-bubbleafter2"
                style={{
                  content: "",
                  position: "absolute",
                  bottom: 0,
                  left: "80%",
                  width: 0,
                  height: 0,
                  border: "20px solid transparent",
                  borderTopColor: "white",
                  borderBottom: 0,
                  borderRight: 0,
                  marginLeft: "-10px",
                  marginBottom: "-20px",
                  zIndex: 121,
                }}
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
};

export default Modal;
