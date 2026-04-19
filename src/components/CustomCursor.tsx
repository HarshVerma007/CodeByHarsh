/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .clickable")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className={`w-full h-full border rounded-full transition-all duration-300 ${isHovering ? "border-neon-red bg-neon-red/20 scale-150" : "border-white/50 scale-100"}`} />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-red rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
