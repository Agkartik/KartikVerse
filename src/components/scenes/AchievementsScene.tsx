"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const achievements = [
  { title: "Google Android Developer", desc: "Certified by Google for native Android app development." },
  { title: "TCS CodeVita", desc: "Top percentile competitive programming achievement." },
  { title: "Microsoft AI Specialist", desc: "Recognized proficiency in Azure AI services." },
  { title: "NPTEL Certification", desc: "Advanced data structures and algorithms." }
];

export function AchievementsScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for asteroids
      gsap.to(".asteroid", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={containerRef} className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center">
      <SectionHeading subtitle="RECOGNITION" className="items-center text-center mb-24 z-10">
        ACHIEVEMENT BELT
      </SectionHeading>

      <div className="relative w-full max-w-6xl h-[60vh] flex flex-wrap justify-center items-center gap-8 md:gap-16 z-10">
        {achievements.map((item, i) => (
          <GlassCard 
            key={i}
            glowColor="gold"
            className="asteroid w-64 p-6 cursor-pointer flex flex-col items-center text-center bg-space border-achievement-gold/20"
          >
            <div className="w-12 h-12 rounded-full bg-achievement-gold/10 flex items-center justify-center mb-4">
              <span className="text-achievement-gold text-xl">🏆</span>
            </div>
            <h3 className="font-heading text-lg text-white mb-2">{item.title}</h3>
            <p className="font-sans text-white/60 text-sm">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
