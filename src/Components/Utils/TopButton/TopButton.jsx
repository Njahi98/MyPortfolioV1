import { useEffect, useState } from "react";
import "./TopButton.css";
import { motion } from "framer-motion";
import { handleSmoothClick } from "../../Navbar/SmoothClick";
import { FaChevronUp } from "react-icons/fa";

function TopButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showTopButton && (
        <motion.a
          className="topButton"
          href="#"
          onClick={handleSmoothClick()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
        >
          <FaChevronUp size={25} />
        </motion.a>
      )}
    </>
  );
}

export default TopButton;
