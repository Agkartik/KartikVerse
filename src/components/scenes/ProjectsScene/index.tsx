"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { useOrionStore } from "@/lib/store/orionStore";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const { speak, markSceneVisited, hasVisited } = useOrionStore();
  
  // Dynamic Spotlight logic
  const [highlightProject, setHighlightProject] = useState(projects[0]);

  useEffect(() => {
    // Pick a random featured project for today's highlight
    const featured = projects.filter(p => p.featured);
    if (featured.length > 0) {
      const random = featured[Math.floor(Math.random() * featured.length)];
      setHighlightProject(random);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const sections = gsap.utils.toArray(".project-panel");
      
      if (scrollWrapperRef.current && sections.length > 0) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            // Adjust length of scroll based on number of sections
            end: () => "+=" + scrollWrapperRef.current!.offsetWidth,
            onEnter: () => {
              if (!hasVisited("projects")) {
                speak(`Entering the Project Universe. Today's highlight is ${highlightProject.name}.`);
                markSceneVisited("projects");
              }
            }
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [speak, markSceneVisited, hasVisited, highlightProject]);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-transparent"
    >
      <div 
        ref={scrollWrapperRef}
        className="flex h-full w-[500vw]" // 5 projects = 500vw
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-panel relative w-screen h-full flex flex-col justify-center px-10 md:px-24"
          >
            {/* Title & Stats */}
            <div className="absolute top-32 left-10 md:left-24 z-20">
              <SectionHeading subtitle={project.theme}>
                {project.name}
              </SectionHeading>
              
              {/* Dynamic Spotlight Tag */}
              {project.id === highlightProject.id && (
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-mission-blue/10 border border-mission-blue/30">
                  <span className="font-mono text-xs text-mission-blue">★ TODAY'S HIGHLIGHT</span>
                </div>
              )}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 mt-20 w-full max-w-7xl mx-auto z-10">
              
              {/* Left Column: Visual Asset (Hybrid World Placeholder) */}
              <div className="w-full lg:w-1/2 h-[40vh] lg:h-[60vh] relative flex items-center justify-center">
                {/* 
                  This is where the actual 3D or Video asset goes.
                  For now, we render a placeholder sphere that represents the "Hybrid World".
                */}
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-mission-blue/20 to-nebula-purple/20 blur-xl animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center border border-white/5 rounded-full">
                  <span className="font-mono text-white/30 text-sm tracking-widest uppercase">
                    [ {project.theme} ASSET ]
                  </span>
                </div>
              </div>

              {/* Right Column: Data & Architecture */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <GlassCard className="p-6" glowColor="blue">
                  <p className="text-white/80 font-sans leading-relaxed text-lg mb-6">
                    {project.description}
                  </p>
                  
                  {/* Real Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-1">
                          {metric.label}
                        </span>
                        <span className="font-mono text-sm text-mission-blue font-bold">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Visualization */}
                  <ArchitectureDiagram architecture={project.architecture} />
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                    {project.liveUrl && (
                      <Button onClick={() => window.open(project.liveUrl, "_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LIVE DEMO
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <GithubIcon className="w-4 h-4 mr-2" />
                        SOURCE
                      </Button>
                    )}
                  </div>
                </GlassCard>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
