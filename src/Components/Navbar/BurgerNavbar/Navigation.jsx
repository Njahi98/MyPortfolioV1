import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { handleSmoothClick } from "../SmoothClick";
import cvPdf from "../../../assets/Oussama-Njahi-Resume.pdf";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ulStyle={
listStyle:'none',
display:'flex',
flexDirection:'column',
gap:'1rem',
padding:'1rem',
}

const menuItems = [
  { href: "#About", text: "About", onClick: () => handleSmoothClick("About") },
  { href: "#Projects", text: "Projects", onClick: () => handleSmoothClick("Projects") },
  { href: "#Contact", text: "Contact", onClick: () => handleSmoothClick("Contact") },
  { href: {cvPdf}, text: "Resume", onClick: null },
];

export const Navigation = () => (
  <motion.ul style={ulStyle} variants={variants}>
      {menuItems.map((item, i) => (
      <MenuItem item={item} i={i} key={i} />
    ))}
  </motion.ul>
);



