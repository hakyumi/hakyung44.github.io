import { motion } from "motion/react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from "recharts";
import { Layout, Video, Layers, Sparkles } from "lucide-react";
import { SpringReveal, SpringSection } from "./AIInteractions";

const RADAR_DATA = [
  { subject: '기획력', A: 95, fullMark: 100 },
  { subject: '연출감각', A: 90, fullMark: 100 },
  { subject: 'AI활용', A: 92, fullMark: 100 },
  { subject: '협업능력', A: 88, fullMark: 100 },
  { subject: '데이터분석', A: 85, fullMark: 100 },
  { subject: '트렌드캐칭', A: 94, fullMark: 100 },
];

const TOOL_CAPABILITIES = [
  {
    category: "Planning",
    tools: "Figma, Office Suite",
    description: "전략적 제안서 작성",
    icon: Layout,
  },
  {
    category: "Production",
    tools: "Adobe CC, AI Tools",
    description: "고퀄리티 영상 및 이미지 생성",
    icon: Video,
  },
  {
    category: "Direction",
    tools: "Sound Design, Storyboarding",
    description: "몰입형 경험 설계",
    icon: Layers,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-40 bg-white overflow-hidden relative">
      <SpringSection className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <SpringReveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-brand-primary mb-4">
              Expertise
            </h2>
          </SpringReveal>
          <SpringReveal delay={0.1}>
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
              Capabilities
            </h3>
          </SpringReveal>
        </div>

        {/* Visual: Radar Chart Section */}
        <div className="relative mb-32 flex flex-col items-center">
          {/* Decorative Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <SpringReveal delay={0.2} className="w-full h-[450px] md:h-[550px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                <defs>
                  <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0066ff" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#1a1a1a', fontSize: 13, fontWeight: 800, letterSpacing: '0.05em' }}
                />
                <Radar
                  name="Choi Ha-kyung"
                  dataKey="A"
                  stroke="#0066ff"
                  strokeWidth={3}
                  fill="url(#colorA)"
                  fillOpacity={1}
                  dot={{ r: 4, fill: '#0066ff', strokeWidth: 2, stroke: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </SpringReveal>
          
          <SpringReveal delay={0.4} className="mt-12 flex items-center gap-3 px-6 py-2 bg-brand-primary/5 rounded-full border border-brand-primary/10">
            <Sparkles size={16} className="text-brand-primary animate-pulse" />
            <span className="text-brand-primary font-bold text-sm tracking-tight">기획 × 연출 × 기술의 퍼펙트 밸런스</span>
          </SpringReveal>
        </div>

        {/* Details: Tool Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TOOL_CAPABILITIES.map((item, idx) => (
            <SpringReveal key={item.category} delay={0.3 + idx * 0.1} className="h-full">
              <div className="h-full group p-10 bg-white border border-black/5 rounded-3xl hover:border-brand-primary/30 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary/5 transition-colors">
                  <item.icon className="w-7 h-7 text-black/20 group-hover:text-brand-primary transition-colors" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">
                  [{item.category}]
                </h4>
                <p className="text-xl font-bold text-text-dark mb-2">
                  {item.tools}
                </p>
                <p className="text-sm text-text-muted font-medium mt-auto">
                  {item.description}
                </p>
              </div>
            </SpringReveal>
          ))}
        </div>
      </SpringSection>
    </section>
  );
}
