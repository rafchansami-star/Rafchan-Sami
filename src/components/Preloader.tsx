import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 border-2 border-neon-blue/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-neon-blue/50 shadow-[0_0_15px_rgba(0,245,255,0.5)]">
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocILypF1qekDEWmMAGdIIBt5ajvIwAGyDn0E2MMAu9h80n5lecU=s288-c-no" 
              alt="Rafchan Sami" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-20 h-0.5 bg-neon-blue/30 overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-neon-blue shadow-[0_0_10px_rgba(0,245,255,1)]"
        />
      </motion.div>
    </motion.div>
  );
}
