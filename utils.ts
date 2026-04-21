import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import { Project } from "../types";
import { useState } from "react";
import { SpringReveal, SpringSection } from "./AIInteractions";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI & Media Production",
    description: "AI 생성 기술을 활용하여 상상을 시각화하고, 새로운 관점의 미디어 콘텐츠를 기획 및 제작합니다.",
    tags: ["AI Video", "Content Planning", "Visual Design"],
    imageUrl: "https://picsum.photos/seed/ai-media/800/600",
    items: [
      {
        title: "AI Concert Trailer: The New Vision",
        description: "AI 생성 기술을 활용하여 콘서트의 세계관을 감각적으로 시각화하고, 관객의 기대감을 극대화하는 몰입형 티저 트레일러",
        link: "https://canva.link/x0vw5tk0c1eyyt3",
      },
      {
        title: "방문자: The Guest",
        description: "생성형 AI 기술을 활용하여 흡연의 위험성을 SF 단편영화 형식으로 재구성한 실험적 영상 프로젝트 (기획, AI 영상/이미지 제작, 디자인)",
        link: "https://youtu.be/6wdYSdxIA7o?si=NGOKPR2PUAGZS-8T",
      },
      {
        title: "단양갱 페스타 (Danyang-gaeng Festa)",
        description: "단양의 지역 특색과 매력을 홍보하기 위해 생성형 AI 기술을 활용하여 제작한 감각적인 캠페인 영상 (기획, AI 영상 제작, 편집)",
        link: "https://youtu.be/hBq-Bvs0qwM",
      }
    ]
  },
  {
    id: "2",
    title: "Strategic Planning",
    description: "문제 해결을 위한 날카로운 통찰, 전략적 사고의 기획 리포트",
    tags: ["Strategy", "Planning", "Insight"],
    imageUrl: "https://picsum.photos/seed/strategy-plan/800/600",
    items: [
      {
        title: "윌라 오디오북 광고 리뉴얼 제안서",
        description: "윌라 오디오북 제품을 선정하여 타겟 분석을 통한 새로운 광고 시안 및 캠페인 전략 기획",
        link: "https://www.miricanvas.com/login?redirect=%2Fdesign%2F14nmb9x%3Flocation%3Dworkspace%26type%3Dcopy_link",
      }
    ]
  },
  {
    id: "3",
    title: "Collaborative Projects",
    description: "함께 만드는 시너지의 결과, 협업으로 완성한 실무 프로젝트",
    tags: ["Collaboration", "Teamwork", "Synergy"],
    imageUrl: "https://picsum.photos/seed/collaboration-team/800/600",
    items: [
      {
        title: "광고 기획서 (스트레스 케어 쉼, 비락식혜)",
        description: "시장 분석을 통해 제품의 새로운 가치를 발견하고, AI 이미지 기술을 활용하여 시각적 설득력을 극대화한 광고 캠페인 제안서",
        link: "https://www.notion.so/1ce77ddc83a780beabbcc65b3de6033f?source=copy_link",
      },
      {
        title: "K-POP 글로벌 확산 기획안 (방안 1)",
        description: "한류 콘텐츠의 핵심인 K-POP을 세계에 널리 알리기 위한 전략적 기획 및 PPT 제작 (방안 1)",
        link: "https://canva.link/helunblgn03ysa8",
      },
      {
        title: "K-POP 글로벌 확산 기획안 (방안 2)",
        description: "한류 콘텐츠의 핵심인 K-POP을 세계에 널리 알리기 위한 전략적 기획 및 PPT 제작 (방안 2)",
        link: "https://canva.link/o2qghlecj4uy3el",
      },
      {
        title: "K-POP 글로벌 확산 기획안 (방안 3)",
        description: "한류 콘텐츠의 핵심인 K-POP을 세계에 널리 알리기 위한 전략적 기획 및 PPT 제작 (방안 3)",
        link: "https://canva.link/dii54khgylu92a6",
      },
      {
        title: "공연 통합 가이드 플랫폼 기획안",
        description: "공연 및 콘서트 관람객을 위한 통합 가이드 서비스를 제공하는 혁신적인 플랫폼 기획",
        link: "https://canva.link/nsj0f61nddjxacn",
      },
      {
        title: "상상력 프로젝트 <힐러키친>",
        description: "현실에 없는 것을 상상력을 이용하여 새로운 결과물을 만들어냄 (기획, 최종 메타버스 결과물 제작)",
        link: "https://canva.link/gnncupg6gvicd60",
      }
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <SpringSection className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <SpringReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-text-dark tracking-[-0.02em] inline-block relative">
              [Project Archive]
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-[1px] bg-brand-primary/40"
              />
            </h2>
          </SpringReveal>
          <SpringReveal delay={0.1}>
            <p className="text-text-muted max-w-2xl mx-auto">
              카드를 클릭하여 각 카테고리의 상세 프로젝트들을 확인해보세요.
            </p>
          </SpringReveal>
        </div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, idx) => (
            <SpringReveal key={project.id} delay={0.2 + idx * 0.1}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:border-brand-primary/50 transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white/40 backdrop-blur-sm">
                  <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-brand-primary/5 text-brand-primary rounded-full border border-brand-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-dark group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:translate-x-2 transition-transform">
                    <span>프로젝트 리스트 보기</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </SpringReveal>
          ))}
        </div>
      </SpringSection>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-dark">{selectedProject.title}</h2>
                  <p className="text-text-muted mt-1">총 {selectedProject.items?.length || 0}개의 프로젝트</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {selectedProject.items?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl border border-black/5 bg-gray-50/50 hover:border-brand-primary/30 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-text-dark mb-2 group-hover:text-brand-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-brand-primary/20 transition-all active:scale-95 whitespace-nowrap"
                      >
                        <ExternalLink size={16} />
                        <span>상세 보기</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
