"use client";

import { Code2, Server, Database, Cloud } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

function SkillIcon({ src, alt, className = "", title, description }: { src: string, alt: string, className?: string, title: string, description: string }) {
  return (
    <div className="relative group flex justify-center">
      <img src={src} alt={alt} className={`w-8 h-8 md:w-10 md:h-10 hover:scale-110 hover:-translate-y-1 transition-transform cursor-crosshair ${className}`} />
      
      {/* Custom Floating Tooltip */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 flex flex-col items-center shadow-xl backdrop-blur-md">
        <strong className="text-white font-bold">{title}</strong>
        <span className="text-white font-mono mt-1">{description}</span>
      </div>
    </div>
  );
}

export function SkillGalaxyScene() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-start pt-20 md:pt-32 px-4 overflow-y-auto pointer-events-auto custom-scrollbar pb-32">
      
      {/* Title block - no longer absolutely positioned to prevent overlap */}
      <div className="flex flex-col items-center pointer-events-none mb-8 md:mb-16 shrink-0 z-10">
        <h2 className="font-heading text-3xl md:text-6xl text-white font-bold tracking-wider drop-shadow-lg text-center">
          SKILL GALAXY
        </h2>
        <p className="font-mono text-white/90 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-2 text-xs md:text-base text-center">
          Technical Constellations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl z-10 pb-10">
        
        {/* Frontend Card */}
        <GlassCard className="p-5 md:p-8 flex flex-col items-center text-center gap-4 md:gap-6 bg-black/40 hover:bg-white/10 transition-colors !overflow-visible">
          <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
            <SkillIcon title="React" description="Component-based UI" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
            <SkillIcon title="Next.js" description="Production Framework" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="bg-white rounded-full p-1" />
            <SkillIcon title="Tailwind" description="Utility-first styling" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
            <SkillIcon title="HTML5" description="Structural Foundation" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
            <SkillIcon title="CSS3" description="Advanced Styling" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">Frontend</h3>
            <p className="text-white/70 font-mono text-xs md:text-sm">React, Next.js, HTML5, CSS3, Tailwind</p>
          </div>
        </GlassCard>

        {/* Backend Card */}
        <GlassCard className="p-5 md:p-8 flex flex-col items-center text-center gap-4 md:gap-6 bg-black/40 hover:bg-white/10 transition-colors !overflow-visible">
          <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
            <SkillIcon title="Node.js" description="V8 JavaScript Runtime" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <SkillIcon title="Python" description="Data & AI Scripts" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
            <SkillIcon title="GraphQL" description="API Query Language" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">Backend</h3>
            <p className="text-white/70 font-mono text-xs md:text-sm">Node.js, Express, Python, Django, GraphQL</p>
          </div>
        </GlassCard>

        {/* Database Card */}
        <GlassCard className="p-5 md:p-8 flex flex-col items-center text-center gap-4 md:gap-6 bg-black/40 hover:bg-white/10 transition-colors !overflow-visible">
          <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
            <SkillIcon title="MongoDB" description="NoSQL Document DB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <SkillIcon title="PostgreSQL" description="Relational SQL DB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
            <SkillIcon title="Firebase" description="Realtime BaaS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">Database</h3>
            <p className="text-white/70 font-mono text-xs md:text-sm">MongoDB, PostgreSQL, Redis, Firebase</p>
          </div>
        </GlassCard>

        {/* DevOps Card */}
        <GlassCard className="p-5 md:p-8 flex flex-col items-center text-center gap-4 md:gap-6 bg-black/40 hover:bg-white/10 transition-colors !overflow-visible">
          <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
            <SkillIcon title="AWS" description="Cloud Infrastructure" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="bg-white rounded-md p-1" />
            <SkillIcon title="Docker" description="Containerization" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />
            <SkillIcon title="GitHub" description="Version Control" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="bg-white rounded-full" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">DevOps</h3>
            <p className="text-white/70 font-mono text-xs md:text-sm">AWS, Docker, CI/CD, Git Actions, Vercel</p>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
