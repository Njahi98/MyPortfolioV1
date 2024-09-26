import { motion } from "framer-motion";
import Proptypes from "prop-types"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];



export const MenuItem = ({ i,item }) => {
  const style = {
    border: `2px solid ${colors[i]}`,
    borderRadius: "5px",
    width: "200px",
    height: "20px", 
    flex: 1,
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={style}>
      
      <a href={item.href}
       onClick={item.onClick}
       style={{ color: colors[i], textDecoration: 'none' }}>
        {item.text}
            </a>

      </div>
    </motion.li>
  );
};

MenuItem.propTypes= {
  i:Proptypes.any,
 item:Proptypes.any,

}