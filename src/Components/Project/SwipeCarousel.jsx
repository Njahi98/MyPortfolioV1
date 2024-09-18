import { useContext, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import PropTypes from "prop-types";
import { CarouselContext } from "./CarouselContext";


//thanks to YT@Tom is Loading
//https://www.youtube.com/watch?v=mn_fh7pRj7w




const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#030303',
    padding: '2rem 0',
  },
  dragContainer: {
    display: 'flex',
    cursor: 'grab',
    alignItems: 'center',
  },
  dragContainerActive: {
    cursor: 'grabbing',
  },
  image: {
    aspectRatio: '16 / 9',
    width: '100%',
    flexShrink: 0,
    borderRadius: '0.75rem',
    backgroundColor: '#262626',
    objectFit: 'cover',
  },
  dotsContainer: {
    marginTop: '1rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  dot: {
    height: '0.75rem',
    width: '0.75rem',
    borderRadius: '9999px',
    transition: 'background-color 0.3s',
    backgroundColor: '#737373',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  dotActive: {
    backgroundColor: '#fafafa',
  },
  gradientLeft: {
    pointerEvents: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
    width: '10vw',
    maxWidth: '100px',
    background: 'linear-gradient(to right, rgba(3, 3, 3, 0.5), rgba(3, 3, 3, 0))',
  },
  gradientRight: {
    pointerEvents: 'none',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    width: '10vw',
    maxWidth: '100px',
    background: 'linear-gradient(to left, rgba(3, 3, 3, 0.5), rgba(3, 3, 3, 0))',
  },
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const imgs = useContext(CarouselContext) || [];

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0 && imgs.length > 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [imgs, dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  if (imgs.length === 0) {
    return null; 
  }

  return (
    <div style={styles.container}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
          ...styles.dragContainer,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  const imgs = useContext(CarouselContext) || [];

  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
        whileTap={{ scale: 0.9 }}
        
          key={idx}
          style={{
            ...styles.image,
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
        />
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  const imgs = useContext(CarouselContext) || [];

  return (
    <div style={styles.dotsContainer}>
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          style={{
            ...styles.dot,
            ...(idx === imgIndex ? styles.dotActive : {}),
          }}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>

    </>
  );
};

Images.propTypes = {
  imgIndex: PropTypes.number.isRequired,
};

Dots.propTypes = {
  imgIndex: PropTypes.number.isRequired,
  setImgIndex: PropTypes.func.isRequired,
};
