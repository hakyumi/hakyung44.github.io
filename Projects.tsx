import { motion, useMotionValue, useSpring } from "motion/react";
import { MousePointer2 } from "lucide-react";
import { useEffect } from "react";
import { SpringReveal, SpringSection } from "./AIInteractions";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Interactive Blur Circle */}
      <motion.div 
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Glassmorphism Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-black/5 to-transparent z-0" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

      <SpringSection className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        <div className="max-w-4xl">
          {/* Sub-headline 1: Small & Dark */}
          <SpringReveal>
            <p className="text-sm md:text-base font-medium text-text-dark mb-2 tracking-tight max-w-[65ch]">
              상상을 기획하고, 새로운 경험을 연출하는
            </p>
          </SpringReveal>

          {/* Sub-headline 2: Medium & Highlighted */}
          <SpringReveal delay={0.1}>
            <h2 className="text-xl md:text-3xl font-semibold text-text-dark mb-6 tracking-tight">
              콘텐츠 제작자 <span className="text-brand-primary relative inline-block">
                최하경
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-1 left-0 h-2 bg-brand-primary/10 -z-10"
                />
              </span>입니다
            </h2>
          </SpringReveal>

          {/* Headline: Large & Bold (Reduced size) */}
          <SpringReveal delay={0.2}>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-12 leading-[0.85] text-text-dark">
              PORTFOLIO
            </h1>
          </SpringReveal>

          {/* Glassmorphism CTA Card */}
          <SpringReveal delay={0.3}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-2 glass-card border-black/5 bg-white/20">
              <a 
                href="#projects" 
                className="group px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:shadow-2xl hover:shadow-brand-primary/30 transition-all active:scale-95"
              >
                Explore Works
                <MousePointer2 size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 text-text-dark font-bold hover:bg-black/5 rounded-2xl transition-all"
              >
                Get in Touch
              </a>
            </div>
          </SpringReveal>
        </div>
      </SpringSection>

      {/* Side Label (Glassmorphism style) */}
      <div className="absolute right-12 bottom-24 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 0.2, rotate: 90 }}
          className="origin-right text-[10px] font-mono uppercase tracking-[1em] text-text-dark whitespace-nowrap"
        >
          Creative Direction & Planning
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 opacity-20">
        <div className="w-12 h-[1px] bg-text-dark" />
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
