import { motion } from "framer-motion";
import PropTypes from "prop-types";



function Backdrop({ children, backdropStyle,onClick,initial,animate,exit,variants }) {
  return (
    <motion.div
    className="backdrop"
    onClick={onClick}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      style={backdropStyle}
    >
      {children}
    </motion.div>
  );
}

Backdrop.propTypes = {
  onClick:PropTypes.any,
  children: PropTypes.node,
  backdropStyle: PropTypes.object,
  isOpen: PropTypes.bool,
  initial:PropTypes.any,
  animate:PropTypes.any,
  exit:PropTypes.any,
  variants:PropTypes.any,

};

export default Backdrop;
