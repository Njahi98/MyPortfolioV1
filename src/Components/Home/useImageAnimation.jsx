import { useEffect, useRef } from "react";

const useImageAnimation = () => {

 //added React Component with 3D Hover Effect Using Refs
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const imageContainer = containerRef.current;
    const image = imageRef.current;
    
    if (!imageContainer || !image) return;
    
    // Variables for tilt effect
    const maxTilt = 15;
    const maxMove = 25;
    const glowIntensity = 40;
    const baseColor = '155, 93, 229';
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 2;
      const yPercent = (y / rect.height - 0.5) * 2;
      
      const rotateX = -yPercent * maxTilt;
      const rotateY = xPercent * maxTilt;
      const translateX = xPercent * maxMove;
      const translateY = yPercent * maxMove;
      
      image.style.transform = `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
      
      const distance = Math.sqrt(xPercent * xPercent + yPercent * yPercent);
      const intensity = Math.max(0.5, 1 - distance);
      image.style.boxShadow = `
        ${-xPercent * 20}px ${-yPercent * 20}px ${glowIntensity * intensity}px rgba(${baseColor}, 0.3),
        0 5px 15px #9b5de5
      `;
    };
    
    const handleMouseLeave = () => {
      image.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0) scale(1)';
      image.style.boxShadow = '0 5px 15px #9b5de5';
      image.style.animation = 'move 7s infinite';
    };
    
    const handleMouseEnter = () => {
      image.style.animation = 'none';
    };
    
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  return { containerRef, imageRef };
}

export default useImageAnimation;
