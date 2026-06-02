"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useOrionStore } from "@/lib/store/orionStore";
import { Orion } from "@/components/universe/Orion";

export function KartikVerseExperience() {
  const { speak, setIsExplorerMode } = useOrionStore();
  
  // State to track if video finished
  const [isVideoDone, setIsVideoDone] = useState(false);
  const [isVideoDestroyed, setIsVideoDestroyed] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Universe Formation
  const titleContainerRef = useRef<HTMLDivElement>(null);
  
  // Explorer & Worlds
  const horizonRef = useRef<HTMLDivElement>(null);
  const orionContainerRef = useRef<HTMLDivElement>(null);
  const bookhubRef = useRef<HTMLDivElement>(null);
  const mediconnectRef = useRef<HTMLDivElement>(null);
  const farmdirectRef = useRef<HTMLDivElement>(null);
  
  // Portal & Countdown
  const portalRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const countdownTextRef = useRef<HTMLSpanElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  // Subtitles overlay
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [subtitleText, setSubtitleText] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      timelineRef.current = tl;

      // INITIAL STATE
      tl.set(containerRef.current, { backgroundColor: "#000000" })
        .set(titleContainerRef.current, { opacity: 0, scale: 0.9 })
        .set(horizonRef.current, { opacity: 0, scale: 1.1 })
        .set(orionContainerRef.current, { opacity: 0, scale: 0 })
        .set([bookhubRef.current, mediconnectRef.current, farmdirectRef.current], { opacity: 0, y: 20 })
        .set(portalRef.current, { scale: 0, opacity: 0, rotationX: 70 })
        .set(countdownRef.current, { opacity: 0, scale: 0.5 })
        .set(flashRef.current, { opacity: 0 })
        .set(subtitleRef.current, { opacity: 0 });

      // SCENE 1: KARTIKVERSE Title
      tl.addLabel("scene1", 0.5)
        .to(titleContainerRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }, "scene1")
        .to(titleContainerRef.current, { opacity: 0, duration: 1, ease: "power2.in" }, "scene1+3.5");

      // SCENE 2: Explorer Horizon & ORION
      tl.addLabel("scene2", 5)
        .to(horizonRef.current, { opacity: 1, scale: 1, duration: 3, ease: "power1.out" }, "scene2")
        .to(orionContainerRef.current, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" }, "scene2+1")
        .call(() => {
          setSubtitleText("Meet the Explorer. A builder. A dreamer. A software engineer.");
          speak("Meet the Explorer. A builder. A dreamer. A software engineer.");
        }, undefined, "scene2+1.5")
        .to(subtitleRef.current, { opacity: 1, duration: 0.5 }, "scene2+1.5")
        .to(subtitleRef.current, { opacity: 0, duration: 0.5 }, "scene2+4.5");

      // SCENE 3: Worlds Awaken
      tl.addLabel("scene3", 10.5)
        // BookHub
        .to(bookhubRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "scene3")
        .call(() => {
          setSubtitleText("A world built for readers and writers.");
          speak("A world built for readers and writers.");
        }, undefined, "scene3")
        .to(subtitleRef.current, { opacity: 1, duration: 0.2 }, "scene3")
        .to(subtitleRef.current, { opacity: 0, duration: 0.2 }, "scene3+1.8")
        
        // MediConnect
        .to(mediconnectRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "scene3+2")
        .call(() => {
          setSubtitleText("A healthcare civilization powered by technology.");
          speak("A healthcare civilization powered by technology.");
        }, undefined, "scene3+2")
        .to(subtitleRef.current, { opacity: 1, duration: 0.2 }, "scene3+2")
        .to(subtitleRef.current, { opacity: 0, duration: 0.2 }, "scene3+3.8")
        
        // FarmDirect
        .to(farmdirectRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "scene3+4")
        .call(() => {
          setSubtitleText("Connecting farmers directly to opportunity.");
          speak("Connecting farmers directly to opportunity.");
        }, undefined, "scene3+4")
        .to(subtitleRef.current, { opacity: 1, duration: 0.2 }, "scene3+4")
        .to(subtitleRef.current, { opacity: 0, duration: 0.2 }, "scene3+5.8");

      // SCENE 4: Portal Forms
      tl.addLabel("scene4", 17.5)
        .to(horizonRef.current, { filter: "brightness(0.2)", duration: 1.5, ease: "power2.inOut" }, "scene4")
        .to(orionContainerRef.current, { x: "20vw", y: "-20vh", scale: 1.5, duration: 2, ease: "power2.inOut" }, "scene4")
        .to(portalRef.current, { opacity: 1, scale: 1, rotationX: 0, duration: 2, ease: "power3.out" }, "scene4")
        .call(() => {
          setSubtitleText("The worlds are ready. Your journey begins now.");
          speak("The worlds are ready. Your journey begins now.");
        }, undefined, "scene4+1")
        .to(subtitleRef.current, { opacity: 1, duration: 0.5 }, "scene4+1")
        .to(subtitleRef.current, { opacity: 0, duration: 0.5 }, "scene4+2.5");

      // Continuous Portal Rotation
      gsap.to(".portal-ring", { rotation: 360, duration: 10, repeat: -1, ease: "none" });

      // SCENE 5: Countdown
      tl.addLabel("scene5", 21)
        .call(() => { if (countdownTextRef.current) countdownTextRef.current.innerText = "3"; }, undefined, "scene5")
        .fromTo(countdownRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4 }, "scene5")
        .to(countdownRef.current, { opacity: 0, scale: 1.5, duration: 0.4 }, "scene5+1.0")

        .call(() => { if (countdownTextRef.current) countdownTextRef.current.innerText = "2"; }, undefined, "scene5+1.5")
        .fromTo(countdownRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4 }, "scene5+1.5")
        .to(countdownRef.current, { opacity: 0, scale: 1.5, duration: 0.4 }, "scene5+2.5")

        .call(() => { if (countdownTextRef.current) countdownTextRef.current.innerText = "1"; }, undefined, "scene5+3.0")
        .fromTo(countdownRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4 }, "scene5+3.0")
        .to(countdownRef.current, { opacity: 0, scale: 1.5, duration: 0.4 }, "scene5+4.0")

        .call(() => { if (countdownTextRef.current) countdownTextRef.current.innerText = "INITIATE JUMP"; }, undefined, "scene5+4.5")
        .fromTo(countdownRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 }, "scene5+4.5")
        .to(countdownRef.current, { opacity: 0, scale: 1.2, duration: 0.5 }, "scene5+5.5");

      // SCENE 6: Flash & Exit
      tl.addLabel("scene6", 28)
        .to(portalRef.current, { scale: 15, duration: 0.8, ease: "power4.in" }, "scene6")
        .to(flashRef.current, { opacity: 1, duration: 0.4, ease: "power2.in" }, "scene6+0.4")
        .to(containerRef.current, { opacity: 0, duration: 0.5 }, "scene6+1.0")
        .call(() => {
          setIsExplorerMode(false);
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, undefined, "scene6+1.5");

    }, containerRef);

    return () => ctx.revert();
  }, [speak, setIsExplorerMode]);

  // When video naturally ends, play the GSAP timeline and trigger cleanup
  useEffect(() => {
    if (isVideoDone && timelineRef.current) {
      timelineRef.current.play();
      
      // Wait for CSS fade, then destroy video completely to free memory
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.removeAttribute('src');
          videoRef.current.load();
        }
        setIsVideoDestroyed(true);
      }, 1500);
    }
  }, [isVideoDone]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center">
      
      {/* Skip Button */}
      <button 
        onClick={() => {
          setIsExplorerMode(false);
          setTimeout(() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="absolute top-6 right-6 md:top-8 md:right-10 z-[9999] text-white/50 hover:text-white font-mono text-xs md:text-sm uppercase tracking-[0.2em] transition-colors duration-300 pointer-events-auto"
      >
        Skip Experience &rarr;
      </button>

      {/* SCENE 1: The Video */}
      {!isVideoDestroyed && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-50 transition-opacity duration-[1500ms] ${isVideoDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onEnded={() => setIsVideoDone(true)}
        >
          <source src="/videos/hero_intro.mp4" type="video/mp4" />
        </video>
      )}

      {/* SCENE 2: KARTIKVERSE Title */}
      <div ref={titleContainerRef} className="absolute z-30 flex flex-col items-center pointer-events-none">
        <h1 className="font-mono text-5xl md:text-7xl lg:text-9xl text-white tracking-[0.2em] font-bold drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
          KARTIKVERSE
        </h1>
        <p className="mt-6 font-sans text-xl md:text-3xl text-white/80 tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          The Tale of Kartik Agrawal
        </p>
      </div>

      {/* SCENE 3-5: Explorer Horizon, ORION, Worlds, Portal */}
      <div ref={horizonRef} className="absolute inset-0 w-full h-full z-20">
        {/* The character watching ORION image */}
        <div className="absolute inset-0 bg-[url('/assets/explorer/explorer_horizon.png')] bg-cover bg-center pointer-events-none" />
        
        {/* Project Worlds */}
        <div className="absolute inset-0 pointer-events-none">
          <div ref={bookhubRef} className="absolute left-[51.9%] top-[63.0%] -translate-x-1/2 -translate-y-1/2 w-48 h-48">
            <div className="w-full h-full bg-[url('/assets/worlds/bookhub/bookhub.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]" />
          </div>
          <div ref={mediconnectRef} className="absolute left-[66.4%] top-[65.7%] -translate-x-1/2 -translate-y-1/2 w-56 h-56">
            <div className="w-full h-full bg-[url('/assets/worlds/mediconnect/mediconnect.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]" />
          </div>
          <div ref={farmdirectRef} className="absolute left-[80.8%] top-[68.3%] -translate-x-1/2 -translate-y-1/2 w-40 h-40">
            <div className="w-full h-full bg-[url('/assets/worlds/farmdirect/farmdirect.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_0_25px_rgba(0,255,0,0.6)]" />
          </div>
        </div>

        {/* ORION */}
        <div ref={orionContainerRef} className="absolute left-[30%] bottom-[30%] z-30">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <Orion />
          </div>
        </div>

        {/* Portal */}
        <div ref={portalRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] flex items-center justify-center z-40 pointer-events-none">
          <div className="portal-ring absolute w-full h-full rounded-full border-4 border-dashed border-cyan-500/50 shadow-[0_0_50px_rgba(0,255,255,0.4)]" />
          <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-blue-400/60 shadow-[0_0_30px_rgba(59,130,246,0.5)] bg-black/40 backdrop-blur-sm" />
        </div>
      </div>

      {/* Subtitles Overlay */}
      <div className="absolute bottom-[15%] w-full flex justify-center z-50 pointer-events-none">
        <p ref={subtitleRef} className="text-white text-2xl md:text-4xl font-sans tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,1)] text-center max-w-3xl">
          {subtitleText}
        </p>
      </div>

      {/* Countdown Overlay */}
      <div ref={countdownRef} className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none">
        <span ref={countdownTextRef} className="font-mono text-7xl md:text-[20vh] text-white font-bold leading-none tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,1)] text-center">
        </span>
      </div>

      {/* White Flash */}
      <div ref={flashRef} className="absolute inset-0 bg-white z-[70] pointer-events-none opacity-0" />
    </div>
  );
}
