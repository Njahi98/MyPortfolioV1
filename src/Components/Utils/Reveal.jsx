import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Proptypes from "prop-types";

export const Reveal = ({ children, style,variants={
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
}  }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={style}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      
    </div>
  );
};

Reveal.propTypes = {
  children: Proptypes.any,
  style: Proptypes.any,
  variants: Proptypes.object,
};
