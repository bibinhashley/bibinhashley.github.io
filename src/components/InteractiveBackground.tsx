import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowSize, setGlowSize] = useState(256);

  useEffect(() => {
    // Update glow size based on screen width
    const updateGlowSize = () => {
      if (window.innerWidth >= 1024) {
        setGlowSize(200); // lg: 400px / 2
      } else if (window.innerWidth >= 768) {
        setGlowSize(192); // md: 384px / 2
      } else {
        setGlowSize(128); // mobile: 256px / 2
      }
    };

    updateGlowSize();
    window.addEventListener('resize', updateGlowSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateGlowSize);
    };
  }, []);

  return (
    <>
      {/* Mouse-following glow */}
      <motion.div
        className="pointer-events-none fixed z-0 w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
        animate={{
          x: mousePosition.x - glowSize,
          y: mousePosition.y - glowSize,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="fixed top-1/3 left-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="fixed bottom-1/4 right-1/3 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </>
  );
};

export default InteractiveBackground;
