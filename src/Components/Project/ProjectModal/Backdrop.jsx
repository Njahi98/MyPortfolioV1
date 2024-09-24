import { motion } from 'framer-motion'
import PropTypes from "prop-types"

function Backdrop(props) {

    const styles={
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

  return (
    <motion.div
    className="backdrop"
    onClick={props.onClick}
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    style={styles}
    >
        {props.children}
    </motion.div>
  )
}

Backdrop.propTypes ={
    onClick:PropTypes.any,
    children:PropTypes.any,
}



export default Backdrop