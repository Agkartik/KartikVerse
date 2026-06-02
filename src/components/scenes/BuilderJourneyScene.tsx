"use client";

import { GlassCard } from "../ui/GlassCard";
import { Award, Briefcase, Code2, Smartphone } from "lucide-react";

export function BuilderJourneyScene() {
  const journeySteps = [
    {
      year: "2026",
      title: "Open For Software Engineering Roles",
      organization: "B.Tech Graduation (CGPA: 8.0)",
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      description: "Ready to deploy my full-stack expertise to build highly scalable, impactful systems in a fast-paced engineering team.",
      color: "yellow"
    },
    {
      year: "2025",
      title: "Full Stack Product Building Era",
      organization: "AI Integration & Advanced Platforms",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      description: "Built end-to-end ecosystems like FarmDirect and Medi-Connect. Seamlessly integrated AI capabilities into production-ready web platforms.",
      color: "blue"
    },
    {
      year: "2024",
      title: "Web Development Era",
      organization: "MERN Stack, React, Node.js",
      icon: <Code2 className="w-5 h-5 text-green-400" />,
      description: "Transitioned to modern web development. Mastered scalable backend architectures and interactive frontend frameworks to build dynamic systems.",
      color: "green"
    },
    {
      year: "2023",
      title: "Android Development Era",
      organization: "Codec Technologies Intern & Medicare App",
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      description: "Earned Google Android Certification. Developed native applications focusing on user experience, complex REST API integration, and performance.",
      color: "purple"
    },
    {
      year: "2022",
      title: "Started B.Tech (Computer Science)",
      organization: "ITM University",
      icon: <Award className="w-5 h-5 text-green-400" />,
      description: "Began my formal journey into software engineering, mastering data structures, algorithms, and advanced web technologies.",
      color: "green"
    }
  ];

  return (
    <section className="relative w-full h-screen flex flex-col items-center pt-32 pb-24 px-4 overflow-y-auto overflow-x-hidden pointer-events-auto">
      
      {/* Background Glow */}
      <div className="nebula-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10" />

      <div className="flex flex-col items-center mb-8 z-10">
        <h2 className="font-heading text-3xl md:text-5xl text-white font-bold tracking-wider">
          BUILDER'S JOURNEY
        </h2>
        <p className="font-mono text-white/90 tracking-[0.3em] uppercase mt-1 text-xs md:text-sm text-center">
          Timeline of Exploration
        </p>
      </div>

      <div className="relative w-full max-w-5xl z-10">
        
        {/* The Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
        
        <div className="flex flex-col gap-4 md:gap-6">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center shrink-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
                
                {/* Timeline Node (Center Dot) */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-black border border-white/50 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className={`w-1 h-1 rounded-full bg-${step.color}-400 animate-pulse`} />
                </div>

                {/* Timeline Content */}
                <div className={`w-full md:w-1/2 pl-10 pr-2 md:px-10 ${isEven ? 'md:text-right' : 'md:text-left'} flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <GlassCard className="p-4 bg-white/5 hover:bg-white/10 transition-colors w-full md:w-[95%]">
                    
                    <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full bg-${step.color}-500/20 flex items-center justify-center shrink-0`}>
                        {step.icon}
                      </div>
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className={`font-mono text-[10px] font-bold tracking-widest text-${step.color}-400`}>
                          {step.year}
                        </span>
                        <h3 className="text-white font-bold text-base">{step.title}</h3>
                      </div>
                    </div>

                    <p className="font-mono text-[10px] text-white/90 mb-1 uppercase tracking-wider">{step.organization}</p>
                    <p className="text-white/90 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">{step.description}</p>
                    
                  </GlassCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

