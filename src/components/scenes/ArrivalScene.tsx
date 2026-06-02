"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export function ArrivalScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation for when the cinematic finishes and drops the user here
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        "-=1"
      )
      .fromTo(scrollPromptRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" },
        "-=0.5"
      );

      // Removed the heavy textShadow breathing animation to maintain 60FPS during scale transitions.
      // GPU cannot handle animating text-shadows while simultaneously running CSS transforms.

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Nebula Drifts specific to Arrival - using cheap radial gradients instead of expensive blur filters */}
      <div className="nebula-blue absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-40 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="nebula-purple absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-40 animate-[pulse_10s_ease-in-out_infinite_alternate]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 
          ref={titleRef}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-[7rem] leading-none tracking-wider text-white"
        >
          WELCOME TO
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
            KARTIKVERSE
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="mt-8 font-mono text-lg md:text-2xl text-blue-200/80 tracking-widest uppercase"
        >
          A Universe Built Through Code
        </p>
      </div>

      <div 
        ref={scrollPromptRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-white/50 uppercase">
          Scroll To Begin Exploration
        </span>
        <ArrowDown className="w-5 h-5 text-white/50 animate-bounce" />
      </div>
      
    </section>
  );
}

