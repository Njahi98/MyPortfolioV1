import { motion } from 'framer-motion'
import PropTypes from "prop-types"

function Backdrop(props) {

  return (
    <motion.div
    className="backdrop"
    onClick={props.onClick}
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    style={props.backdropStyle}
    >
        {props.children}
    </motion.div>
  )
}

Backdrop.propTypes ={
    onClick:PropTypes.any,
    children:PropTypes.any,
    backdropStyle:PropTypes.object,
}



export default Backdrop