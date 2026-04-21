/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { CustomCursor } from "./components/AIInteractions";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white bg-white">
      <CustomCursor />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Capabilities />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
}

