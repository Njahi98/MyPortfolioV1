import { useEffect, useState } from "react";
import "./TopButton.css";
import { motion, AnimatePresence } from "framer-motion";
import { handleSmoothClick } from "../../Navbar/SmoothClick";
import { FaChevronUp } from "react-icons/fa";

function TopButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    let ticking = false;
  
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowTopButton(window.pageYOffset > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const buttonVariants = {
    initial: { 
      scale: 0.5,
      opacity: 0,
      y: 20
    },
    animate: { 
      scale: 1,
      opacity: 1,
      y: 0
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      y: 20
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <AnimatePresence>
      {showTopButton && (
        <motion.a
          className="topButton"
          href="#"
          onClick={handleSmoothClick()}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <motion.div
            initial={{ rotate: 90 }}
            animate={{ 
              rotate: 180,
              y: [0, -2, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
          >
            <FaChevronUp size={25} />
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default TopButton;
