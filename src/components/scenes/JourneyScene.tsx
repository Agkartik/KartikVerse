"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useOrionStore } from "@/lib/store/orionStore";
import { cn } from "@/lib/utils";

const timelineEvents = [
  { year: "2022", title: "ITM University", desc: "Computer Science Foundation" },
  { year: "2023", title: "Android Development", desc: "Codec Technologies, Google Android Cert, Medicare App" },
  { year: "2024", title: "MERN Expansion", desc: "React, Node, MongoDB Architecture" },
  { year: "2025", title: "TecnovaCore Internship", desc: "Full Stack Growth, Book Review System" },
  { year: "2026", title: "Product Builder", desc: "BookHub, FarmDirect, MediConnect+" }
];

export function JourneyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const { speak, markSceneVisited, hasVisited } = useOrionStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline Line Drawing
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => {
              if (!hasVisited("journey")) {
                speak("Charting the trajectory from Android beginnings to Full Stack mastery.");
                markSceneVisited("journey");
              }
            }
          }
        }
      );

      // Node pop-ins
      const nodes = gsap.utils.toArray(".timeline-node");
      nodes.forEach((node: any) => {
        gsap.from(node, {
          opacity: 0,
          x: node.classList.contains("left-node") ? -50 : 50,
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speak, markSceneVisited, hasVisited]);

  return (
    <section id="journey" ref={containerRef} className="relative w-full py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeading subtitle="THE TRAJECTORY" className="items-center text-center mb-24">
          JOURNEY
        </SectionHeading>
        
        <div className="relative w-full max-w-3xl">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mission-blue via-nebula-purple to-achievement-gold origin-top -translate-x-1/2" 
          />

          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div 
                key={event.year} 
                className={cn(
                  "timeline-node relative w-full flex items-center mb-32 last:mb-0",
                  isLeft ? "justify-start left-node" : "justify-end right-node"
                )}
              >
                {/* Connecting Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mission-blue shadow-[0_0_15px_rgba(0,212,255,0.8)] z-10" />
                
                {/* Content Card */}
                <div className={cn("w-[45%] flex flex-col gap-2", isLeft ? "text-right pr-8" : "text-left pl-8")}>
                  <span className="font-heading text-4xl font-bold text-white/20">{event.year}</span>
                  <h3 className="font-mono text-xl text-white">{event.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
