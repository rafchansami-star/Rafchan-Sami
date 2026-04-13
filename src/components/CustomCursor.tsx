import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        className="fixed top-0 left-0 w-8 h-8 border border-neon-blue rounded-full pointer-events-none z-[9999] hidden md:block"
      />
      <motion.div
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
        className="fixed top-0 left-0 w-1 h-1 bg-neon-blue rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_rgba(0,245,255,1)]"
      />
    </>
  );
}
