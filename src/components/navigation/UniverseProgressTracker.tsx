"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const nodes = [
  { id: "arrival", label: "Arrival" },
  { id: "explorer", label: "Explorer Station" },
  { id: "bookhub", label: "BookHub" },
  { id: "mediconnect", label: "MediConnect" },
  { id: "farmdirect", label: "FarmDirect" },
  { id: "flavorhaven", label: "FlavourHaven" },
  { id: "journey", label: "Builder Journey" },
  { id: "skills", label: "Skill Galaxy" },
  { id: "terminal", label: "Mission Terminal" },
];

import { useOrionStore } from "@/lib/store/orionStore";

export function UniverseProgressTracker() {
  const { focusMode, setActiveScene } = useOrionStore();
  const [activeNode, setActiveNode] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      const index = Math.min(Math.floor(progress * nodes.length), nodes.length - 1);
      
      if (index >= 0) {
        const newSceneId = nodes[index].id;
        setActiveNode(newSceneId);
        useOrionStore.getState().setActiveScene(newSceneId);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToNode = (index: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // Map the index to the exact scroll position percentage
    const targetScroll = (index / (nodes.length - 1)) * maxScroll;
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  if (focusMode) return null;

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 pointer-events-none">
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-mission-blue/70 tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Mission Progress
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-mission-blue/50 mb-2" />
        
        {nodes.map((node, i) => {
          const isActive = activeNode === node.id;
          const isPast = nodes.findIndex(n => n.id === activeNode) > i;
          
          return (
            <div 
              key={node.id} 
              onClick={() => jumpToNode(i)}
              className="relative group flex items-center justify-center w-8 h-8 pointer-events-auto cursor-pointer"
            >
              {/* Connecting Line */}
              {i !== nodes.length - 1 && (
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-px h-4 transition-colors duration-500",
                  isPast || isActive ? "bg-mission-blue/50" : "bg-white/10"
                )} />
              )}
              
              {/* The Node */}
              <motion.div 
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  isActive ? "bg-mission-blue shadow-[0_0_10px_rgba(0,212,255,0.8)] scale-150" : 
                  isPast ? "bg-mission-blue/60" : "bg-white/20 hover:bg-white/50 hover:scale-125"
                )}
              />
              
              {/* Hover Label */}
              <div className="absolute right-10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/10">
                <span className="font-mono text-xs text-white/90">{node.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
