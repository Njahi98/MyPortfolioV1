import { motion } from "framer-motion";
import PropTypes from "prop-types";

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

export const MenuItem = ({ i, item, setburgerMenuOpen }) => {
  const style = {
    border: `2px solid ${colors[i]}`,
    borderRadius: "5px",
    width: "auto",
    height: "40px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setburgerMenuOpen(false);
    
    setTimeout(() => {
      if (item.href.startsWith('#')) {
        // Internal link
        const targetId = item.href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // External link
        window.open(item.href, '_blank');
      }
    }, 300); // Adjust this delay if needed
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={style}>
        <a
          href={item.href}
          onClick={handleClick}
          style={{ color: colors[i], textDecoration: 'none' }}
        >
          {item.text}
        </a>
      </div>
    </motion.li>
  );
};

MenuItem.propTypes = {
  i: PropTypes.number,
  item: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  setburgerMenuOpen: PropTypes.func.isRequired,
};