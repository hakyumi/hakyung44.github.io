import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { SpringReveal, SpringSection } from "./AIInteractions";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <SpringSection className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Left Side: Profile Image & Info */}
          <div className="flex flex-col items-center md:items-start md:pt-12">
            {/* Circular Image Area */}
            <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-50 rounded-full overflow-hidden border border-black/5 flex items-center justify-center relative group mb-10 shadow-2xl">
              {/* Thematic Content Director Image */}
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                alt="Content Direction Visual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Sparkles className="text-white w-8 h-8 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
              </div>
            </div>

            {/* Role & Info */}
            <div className="w-full space-y-6 pt-6 border-t border-black/5">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">Name</span>
                <span className="text-base font-bold text-text-dark">최하경 / Hakyung Choi</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">Role</span>
                <span className="text-sm font-medium text-text-dark">Contents Director</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">Birth</span>
                <span className="text-sm font-medium text-text-dark">2003.04.30</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">Contact</span>
                <span className="text-sm font-medium text-text-dark">010-6717-6898</span>
                <span className="text-sm font-medium text-text-dark">hakyeong6898@naver.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-12">
            <div>
              <SpringReveal>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-brand-primary mb-8">
                  About Me
                </h2>
              </SpringReveal>
              
              <SpringReveal delay={0.1}>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-text-dark">
                  상상에 <span className="text-brand-primary">논리</span>를 더해 <br />
                  현실의 <span className="text-brand-primary">경험</span>으로 만듭니다.
                </h3>
              </SpringReveal>

              <SpringReveal delay={0.2}>
                <p className="text-text-muted text-lg leading-relaxed max-w-[60ch]">
                  기획은 마음이 움직일 경로를 설계하는 일입니다. 미디어 PD 전공자로서 다듬어온 연출 감각과 트렌드 분석을 바탕으로, 낯선 상상을 선명한 브랜드 가치로 구현하는 콘텐츠 디렉터 최하경입니다.
                </p>
              </SpringReveal>
            </div>

            {/* Additional Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-black/5">
              {/* Education */}
              <SpringReveal delay={0.3}>
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-brand-primary flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-brand-primary"></span>
                    Education
                  </h4>
                  <ul className="space-y-3 text-sm font-medium text-text-dark">
                    <li className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs">2024.03 ~</span>
                      <span>한성대학교 문학문화콘텐츠학과 재학</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs">2022.01</span>
                      <span>천안여자고등학교 졸업</span>
                    </li>
                  </ul>
                </div>
              </SpringReveal>

              {/* Certificates & Awards */}
              <div className="space-y-10">
                <SpringReveal delay={0.4}>
                  <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-brand-primary flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-brand-primary"></span>
                      Certificates
                    </h4>
                    <div className="flex gap-4 text-sm font-bold text-text-dark">
                      <span className="px-3 py-1 bg-gray-50 rounded-lg">GTQ 1급</span>
                      <span className="px-3 py-1 bg-gray-50 rounded-lg">OPIC IH</span>
                    </div>
                  </div>
                </SpringReveal>

                <SpringReveal delay={0.5}>
                  <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-brand-primary flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-brand-primary"></span>
                      Awards
                    </h4>
                    <div className="flex flex-col gap-1 text-sm font-bold text-text-dark leading-snug">
                      <span className="text-text-muted text-xs">2025.11</span>
                      <span>한성 SW중심대학 페스티벌 최우수상 수상</span>
                    </div>
                  </div>
                </SpringReveal>
              </div>
            </div>
          </div>
        </div>
      </SpringSection>
    </section>
  );
}
