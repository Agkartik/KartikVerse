"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useOrionStore } from "@/lib/store/orionStore";

export function ExperienceScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { speak, markSceneVisited, hasVisited } = useOrionStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".station-card");
      
      cards.forEach((card: any, i: number) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              if (i === 0 && !hasVisited("experience")) {
                speak("Approaching orbital stations. These signify periods of professional growth.");
                markSceneVisited("experience");
              }
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speak, markSceneVisited, hasVisited]);

  return (
    <section id="experience" ref={containerRef} className="relative w-full py-32 px-6 flex flex-col items-center">
      <SectionHeading subtitle="ORBITAL OUTPOSTS" className="items-center text-center mb-20">
        EXPERIENCE STATIONS
      </SectionHeading>

      <div className="w-full max-w-6xl flex flex-col gap-32">
        
        {/* TecnovaCore Station */}
        <div className="station-card w-full flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 h-[40vh] relative flex items-center justify-center">
            {/* 3D Station / Image Placeholder */}
            <div className="w-64 h-64 border-4 border-mission-blue/20 border-dashed rounded-full animate-[spin_30s_linear_infinite] flex items-center justify-center">
              <span className="font-mono text-xs text-white/30 tracking-widest">[ TECNOVACORE ASSET ]</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <GlassCard glowColor="blue" className="p-8">
              <h3 className="font-heading text-2xl text-white mb-2">TECNOVACORE STATION</h3>
              <p className="font-mono text-mission-blue text-sm mb-6 uppercase tracking-wider">Full Stack Developer Intern • 2024</p>
              <ul className="space-y-4 text-white/70 text-sm leading-relaxed list-disc list-inside">
                <li>Engineered a robust Book Review System using the MERN stack.</li>
                <li>Architected scalable backend infrastructure to handle high concurrent user traffic.</li>
                <li>Transitioned from foundational learning to production-level engineering processes.</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Codec Station */}
        <div className="station-card w-full flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 h-[40vh] relative flex items-center justify-center">
            {/* 3D Station / Image Placeholder */}
            <div className="w-48 h-48 border-2 border-white/20 border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse] flex items-center justify-center">
              <span className="font-mono text-xs text-white/30 tracking-widest">[ CODEC ASSET ]</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <GlassCard glowColor="none" className="p-8">
              <h3 className="font-heading text-2xl text-white mb-2">CODEC STATION</h3>
              <p className="font-mono text-white/60 text-sm mb-6 uppercase tracking-wider">Android Developer Intern • 2023</p>
              <ul className="space-y-4 text-white/70 text-sm leading-relaxed list-disc list-inside">
                <li>Developed native Android applications focused on responsive UI.</li>
                <li>Gained the foundational mobile architecture experience that later shaped the 'Medicare' project.</li>
                <li>Earned the Google Android Developer certification.</li>
              </ul>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
}
