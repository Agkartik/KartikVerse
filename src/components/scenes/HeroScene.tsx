"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { useOrionStore } from "@/lib/store/orionStore";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const singularityRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { speak, setIsExplorerMode } = useOrionStore();

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      // FAST Default Load
      gsap.to(contentRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out" 
      });
      
      speak("Welcome to KartikVerse. Select your mission profile.");
    }, containerRef);

    return () => ctx.revert();
  }, [speak]);

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative w-full h-screen flex flex-col items-start justify-center overflow-hidden px-10 md:px-24"
    >

      {/* The Singularity (Big Bang Origin) */}
      <div 
        ref={singularityRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,1)] z-10"
        style={{ opacity: 0 }}
      />

      {/* Main Content Overlay - Positioned on the left side based on video composition */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-start text-left opacity-0 translate-y-10 max-w-2xl">
        <SectionHeading subtitle="FULL STACK DEVELOPER">
          KARTIK AGRAWAL
        </SectionHeading>
        
        <p className="max-w-xl text-white/80 font-sans text-lg md:text-xl mb-12 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/5">
          From Gwalior to the Stars. Building AI-powered, healthcare, agriculture, and publishing products that matter.
        </p>
      </div>

    </section>
  );
}

