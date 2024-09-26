import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import PropTypes from "prop-types";
import cvPdf from "../../../assets/Oussama-Njahi-Resume.pdf";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
};

const menuItems = [
  { href: "#About", text: "About" },
  { href: "#Projects", text: "Projects" },
  { href: "#Contact", text: "Contact" },
  { href: cvPdf, text: "Resume" },
];

export const Navigation = ({ setburgerMenuOpen }) => (
  <motion.ul style={ulStyle} variants={variants}>
    {menuItems.map((item, i) => (
      <MenuItem key={i} i={i} item={item} setburgerMenuOpen={setburgerMenuOpen} />
    ))}
  </motion.ul>
);

Navigation.propTypes = {
  setburgerMenuOpen: PropTypes.func.isRequired,
};




