"use client";

import { GlassCard } from "../ui/GlassCard";
import { MapPin, Briefcase, Code, Award } from "lucide-react";

import { useOrionStore } from "@/lib/store/orionStore";

export function MissionControl() {
  const { focusMode } = useOrionStore();
  if (focusMode) return null;
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-4xl pointer-events-none">
      <GlassCard glowColor="blue" className="px-6 py-3 flex items-center justify-between pointer-events-auto">
        
        {/* Left: Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-success-green"></span>
          </div>
          <span className="font-mono text-xs md:text-sm tracking-widest text-white/90">OPEN TO WORK</span>
        </div>

        {/* Center/Right: Quick Stats (Hidden on very small screens) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-white/70">
            <Briefcase className="w-4 h-4 text-mission-blue" />
            <span className="font-mono text-xs tracking-wider">FULL STACK DEVELOPER</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="w-4 h-4 text-mission-blue" />
            <span className="font-mono text-xs tracking-wider">Gurugram, Haryana</span>
          </div>
          
          <div className="flex items-center gap-4 text-white/70 border-l border-white/10 pl-4">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Code className="w-3.5 h-3.5" />
              <span className="font-mono text-xs font-bold text-mission-blue">5</span>
              <span className="font-mono text-xs">CIVILIZATIONS</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Award className="w-3.5 h-3.5" />
              <span className="font-mono text-xs font-bold text-achievement-gold">2</span>
              <span className="font-mono text-xs">STATIONS</span>
            </div>
          </div>
        </div>

      </GlassCard>
    </div>
  );
}

