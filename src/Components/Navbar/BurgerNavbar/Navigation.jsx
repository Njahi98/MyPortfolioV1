import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ulStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: 0,
  width: "80%",
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  border: 'thin solid',
  borderColor: "#444", // Darker border color
  borderRadius: "15px",
  backgroundColor: "#222", // Dark background color
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Darker shadow
};



export const Navigation = ({ setburgerMenuOpen }) => {
  const {t}=useTranslation();

  const menuItems = [
    { href: "#About", text: t('navBar.About') },
    { href: "#Projects", text:t('navBar.Projects') },
    { href: "#Contact", text: 'Contact' },
    { href: "Resume.pdf", text: 'Resume' },
  ];

  return (
  <motion.ul style={ulStyle} variants={variants}>
    {menuItems.map((item, i) => (
      <MenuItem key={i} i={i} item={item} setburgerMenuOpen={setburgerMenuOpen} />
    ))}
  </motion.ul>
)};

Navigation.propTypes = {
  setburgerMenuOpen: PropTypes.func.isRequired,
};



