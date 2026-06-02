"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    name: "Frontend Constellation",
    skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js"]
  },
  {
    name: "Backend Constellation",
    skills: ["Node.js", "Express", "REST APIs", "WebRTC", "Socket.io", "JWT"]
  },
  {
    name: "Database Constellation",
    skills: ["MongoDB", "Mongoose", "MySQL", "Redis", "Supabase"]
  },
  {
    name: "AI & Tools Constellation",
    skills: ["Gemini API", "Prompt Engineering", "Git", "Postman", "Vercel"]
  }
];

export function SkillsScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-node", {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-32 px-6 flex flex-col items-center">
      <SectionHeading subtitle="TECHNICAL ARSENAL" className="items-center text-center mb-24">
        SKILL CONSTELLATION
      </SectionHeading>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {skillCategories.map((category) => (
          <div key={category.name} className="flex flex-col items-center md:items-start">
            <h3 className="font-mono text-mission-blue text-sm uppercase tracking-[0.2em] mb-8 text-center md:text-left w-full border-b border-white/10 pb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {category.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="skill-node px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/10 hover:border-mission-blue/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all cursor-default"
                >
                  <span className="text-white/80 font-sans text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
