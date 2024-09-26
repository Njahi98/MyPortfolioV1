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
    borderBottom: `2px solid ${colors[i]}`,
    borderRadius: "10px",
    width: "80%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#333", // Dark background color
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Darker shadow
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setburgerMenuOpen(false);

    setTimeout(() => {
      if (item.href.startsWith('#')) {
        const targetId = item.href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.open(item.href, '_blank');
      }
    }, 300);
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ borderRadius: "10px", overflow: "hidden",display:"flex",justifyContent:"center" }}
      onClick={handleClick}

    >
      <div style={style}>
        <a
          href={item.href}
          style={{ color: colors[i], textDecoration: 'none', fontWeight: 'bold' }}
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