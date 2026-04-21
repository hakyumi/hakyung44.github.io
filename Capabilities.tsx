import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";

/**
 * Spring Reveal Effect for elements (Text, Cards)
 * Slide-up with a bouncy spring finish
 */
export const SpringReveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30, 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Spring Section Wrapper
 * Adds a subtle bouncy entrance to the entire section content
 */
export const SpringSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        mass: 1.2
      }}
      className={className}
    >
      <LightStreak />
      {children}
    </motion.div>
  );
};

/**
 * Light Streak Effect
 * A fast, bright blue streak that sweeps down once when the section enters view
 */
export const LightStreak = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: "200%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1], // Custom fast-out ease
        }}
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-40 shadow-[0_0_20px_rgba(0,102,255,0.8)]"
      />
    </div>
  );
};

/**
 * Custom Cursor Effect Component
 */
export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Glow Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-brand-primary/30 rounded-full pointer-events-none z-[9999] blur-lg"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 6 : 1,
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Dense Core Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-primary rounded-full pointer-events-none z-[10000]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
