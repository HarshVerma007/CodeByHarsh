/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-red/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-maroon/10 blur-[120px] rounded-full" />
      
      {/* Moving Light Streaks */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-red/20 to-transparent"
      />
      
      <motion.div
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent"
      />

      {/* Futuristic Lens Flare */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-red/5 blur-[100px] rounded-full animate-pulse-slow" />
    </div>
  );
}
