"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setHovering(
        !!e.target.closest(
          "a, button, [role='button'], input, textarea"
        )
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer animated ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: hovering ? 65 : 38,
          height: hovering ? 65 : 38,
          borderColor: hovering ? "#818cf8" : "#6366f1",
          rotate: hovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
      >
        <span className="cursor-cross">+</span>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: hovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}