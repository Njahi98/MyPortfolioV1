import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

function Modal(props) {
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
    width:"40%",
    fontFamily:"poppins",
    overflow:"auto",
    color:"#BABABA"
  }

  const imageDetailsStyle = {
    width:"60%"
  }

  const linksStyle = {
    justifyContent:"flex-end",
    alignItems:"center",
    display:"flex",
    width:"100%",
    height:"3%",
    padding:"1rem",
    gap:"2rem",
  }

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
            <p style={{fontFamily:"poppins",fontSize:"2rem",marginBottom:0,marginTop:0, color:"white",}}>{props.projName}</p>
            <p style={{color:"white",}}>Description.</p>
            <p>{props.projDescription}</p>
            <p style={{color:"white",}}>Technologies.</p>
            <div className="technologies">
          
            </div>
          </div>
          <div style={imageDetailsStyle} className="imageDetails">
            <img src="" alt="alt" />
          </div>
        </div>

        <div className="links" style={linksStyle}>
        <div style={{cursor:"pointer"}} className="github-link">
        <FaGithub /> Github
        </div>
        <div style={{cursor:"pointer"}} className="live-link">
        <MdLiveTv /> Live

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
  projDescription:PropTypes.string,
};

export default Modal;
