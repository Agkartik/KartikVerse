"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrivalScene } from "./ArrivalScene";
import { ExplorerStationScene } from "./ExplorerStationScene";
import { ProjectUniverseScene } from "./ProjectUniverseScene";
import { MediConnectWorld } from "./MediConnectWorld";
import { FarmDirectWorld } from "./FarmDirectWorld";
import { FlavorHavenWorld } from "./FlavorHavenWorld";
import { BuilderJourneyScene } from "./BuilderJourneyScene";
import { SkillGalaxyScene } from "./SkillGalaxyScene";
import { MissionTerminalScene } from "./MissionTerminalScene";

gsap.registerPlugin(ScrollTrigger);

export function UniverseJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a master timeline that scrubs based on the entire scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=8000", // Expanded distance for the new journey timeline
          scrub: 0.8, // Increased scrub smoothing for "buttery" feel
          pin: true, // Pins the viewport in place while we animate children
          snap: {
            snapTo: "labels", // Snap to our defined scene labels automatically
            duration: { min: 0.4, max: 1.2 }, // Allow snappy, but smooth transitions
            delay: 0.05, // Wait a tiny fraction of a second after scrolling stops before snapping
            ease: "power3.inOut" // Incredibly smooth deceleration into the snap point
          }
        }
      });

      // Label 1: Arrival is currently visible at timeline 0
      tl.addLabel("arrival", 0);

      // --- PHASE 1: LEAVE ARRIVAL, ENTER EXPLORER ---
      tl.to(".scene-arrival", { 
          autoAlpha: 0, 
          scale: 4, // Massive scale to fly past camera
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-explorer", 
          { autoAlpha: 0, scale: 0.1, y: 50 }, 
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5" 
        );
        
      tl.addLabel("explorer");
      tl.to(".scene-explorer", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-explorer", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-bookhub",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5" 
        );
        
      tl.addLabel("bookhub");
      tl.to(".scene-bookhub", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-bookhub", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-mediconnect",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("mediconnect");
      tl.to(".scene-mediconnect", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-mediconnect", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-farmdirect",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("farmdirect");
      tl.to(".scene-farmdirect", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-farmdirect", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-flavorhaven",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("flavorhaven");
      tl.to(".scene-flavorhaven", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-flavorhaven", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-journey",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("journey");
      tl.to(".scene-journey", { autoAlpha: 1, duration: 2 }); 
      
      tl.to(".scene-journey", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-skills",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("skills");
      tl.to(".scene-skills", { autoAlpha: 1, duration: 1 });
      
      tl.to(".scene-skills", { 
          autoAlpha: 0, 
          scale: 4, 
          duration: 1.5,
          ease: "power2.in"
        })
        .fromTo(".scene-terminal",
          { autoAlpha: 0, scale: 0.1, y: 50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "<0.5"
        );
        
      tl.addLabel("terminal");
      tl.to(".scene-terminal", { autoAlpha: 1, duration: 2 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* This wrapper is pinned by ScrollTrigger, creating the 100vh viewport */}
      <div ref={wrapperRef} className="h-screen w-full overflow-hidden perspective-[1000px] flex items-center justify-center">
        
        {/* We will layer the scenes in absolute space (z-index and translateZ) */}
        <div className="scene-arrival absolute inset-0 z-10">
          <ArrivalScene />
        </div>
        
        <div className="scene-explorer absolute inset-0 z-20 invisible">
          <ExplorerStationScene />
        </div>
        
        <div className="scene-bookhub absolute inset-0 z-30 invisible">
          <ProjectUniverseScene />
        </div>

        <div className="scene-mediconnect absolute inset-0 z-40 invisible">
          <MediConnectWorld />
        </div>

        <div className="scene-farmdirect absolute inset-0 z-50 invisible">
          <FarmDirectWorld />
        </div>

        <div className="scene-flavorhaven absolute inset-0 z-50 invisible">
          <FlavorHavenWorld />
        </div>

        <div className="scene-journey absolute inset-0 z-[55] invisible">
          <BuilderJourneyScene />
        </div>
        
        <div className="scene-skills absolute inset-0 z-[60] invisible">
          <SkillGalaxyScene />
        </div>
        
        <div className="scene-terminal absolute inset-0 z-[70] invisible">
          <MissionTerminalScene />
        </div>
        
      </div>
    </div>
  );
}
