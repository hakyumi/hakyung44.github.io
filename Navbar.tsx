import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { SpringReveal, SpringSection } from "./AIInteractions";

export default function Footer() {
  return (
    <footer id="contact" className="py-40 bg-white border-t border-black/5 relative overflow-hidden">
      <SpringSection className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <SpringReveal>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-text-dark">
              Let's build the <br />
              <span className="text-brand-primary italic font-serif">next big thing.</span>
            </h2>
          </SpringReveal>

          {/* Body Text */}
          <SpringReveal delay={0.1}>
            <p className="text-text-muted text-xl md:text-2xl max-w-2xl mb-16 leading-[1.8] font-light">
              새로운 시각으로 세상을 바라보고, <br /> 콘텐츠로 가치를 증명합니다. <br className="hidden md:block" />
              협업 제안이나 궁금한 점이 있다면 언제든 연락주세요.
            </p>
          </SpringReveal>

          {/* Email Card/Button */}
          <SpringReveal delay={0.2}>
            <a 
              href="mailto:hakyeong6898@naver.com"
              className="group relative inline-flex items-center gap-4 px-10 py-6 bg-brand-primary text-white rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
              <span className="relative">
                hakyeong6898@naver.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-500" />
              </span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              
              {/* Sparkle effect on hover */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
            </a>
          </SpringReveal>
        </div>

        {/* Footer Detail */}
        <div className="mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs font-bold text-black/20 uppercase tracking-[0.2em]">
            © 2026 Choi Ha-kyung. Media & Content Director.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-bold text-black/10 uppercase tracking-widest">Seoul, South Korea</span>
            <span className="text-[10px] font-bold text-black/10 uppercase tracking-widest">Available for Projects</span>
          </div>
        </div>
      </SpringSection>
    </footer>
  );
}
