"use client";

import { useOrionStore } from "@/lib/store/orionStore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Settings, X, Music, Sparkles, Zap, EyeOff, 
  Book, HeartPulse, Leaf, Utensils, FileText, Users, GitBranch, Mail, 
  CheckCircle2, Circle
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Orion() {
  const { 
    currentDialogue, isVisible, clearDialogue, speak,
    isControlCenterOpen, toggleControlCenter,
    musicEnabled, setMusicEnabled,
    meteorsEnabled, setMeteorsEnabled,
    starsEnabled, setStarsEnabled,
    performanceMode, setPerformanceMode,
    focusMode, setFocusMode,
    hasPromptedMusic, setHasPromptedMusic,
    activeScene
  } = useOrionStore();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle Initial Music Prompt
  useEffect(() => {
    if (!hasPromptedMusic && !musicEnabled) {
      setTimeout(() => {
        speak("Enable KartikVerse Atmosphere? (Open Control Center)");
        setHasPromptedMusic(true);
      }, 5000); // Wait 5 seconds before asking
    }
  }, [hasPromptedMusic, musicEnabled, speak, setHasPromptedMusic]);

  // Handle Music Playback & Fading
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/sounds/KartikVerse%20Horizon.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0; // Start at 0 for fade in
    }

    if (musicEnabled) {
      audioRef.current.play().catch(e => console.log("Audio play prevented", e));
      
      // Determine target volume based on active scene
      let targetVol = 0.35; // Default 35%
      
      if (activeScene === "arrival") targetVol = 0.05; // Muted/Extremely low for creation
      else if (activeScene === "terminal") targetVol = 0.45; // Portal countdown - increase
      else if (activeScene === "journey" || activeScene === "skills") targetVol = 0.25; // Portfolio Arrival - reduce
      
      gsap.to(audioRef.current, { volume: targetVol, duration: 2, ease: "power2.inOut" });
    } else {
      // Fade out over 1 second, then pause
      gsap.to(audioRef.current, { 
        volume: 0, 
        duration: 1, 
        onComplete: () => {
          if (audioRef.current) audioRef.current.pause();
        } 
      });
    }

    return () => {
      // Cleanup is handled by standard pause on unmount
    };
  }, [musicEnabled, activeScene]);

  const jumpToDestination = (index: number, name: string) => {
    speak(`Navigating to ${name}...`);
    toggleControlCenter(); // Close the panel
    
    setTimeout(() => {
      // 8 is the total number of segments based on UniverseProgressTracker logic (9 nodes total, so 8 segments)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = (index / 8) * maxScroll;
      
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
      });
    }, 1000); // 1 second delay as requested
  };

  if (!isVisible) return null;

  const ToggleItem = ({ label, icon: Icon, state, toggleFn }: any) => (
    <div 
      onClick={() => toggleFn(!state)}
      className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-4 h-4 ${state ? 'text-mission-blue' : 'text-white/40'}`} />
        <span className={`font-mono text-sm ${state ? 'text-white' : 'text-white/50'}`}>{label}</span>
      </div>
      {state ? (
        <CheckCircle2 className="w-5 h-5 text-mission-blue" />
      ) : (
        <Circle className="w-5 h-5 text-white/20" />
      )}
    </div>
  );

  return (
    <>
      {/* Invisible Audio Element */}
      <audio ref={audioRef} src="/assets/sounds/KartikVerse%20Horizon.mp3" loop />

      {/* Control Center Panel */}
      <AnimatePresence>
        {isControlCenterOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-black/90 backdrop-blur-md border-l border-white/10 z-[70] shadow-[-20px_0_50px_rgba(0,0,0,0.8)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,212,255,0.8)] border border-mission-blue/50">
                  <div className="w-4 h-4 rounded-full bg-white blur-[1px]" />
                </div>
                <h2 className="font-heading tracking-widest text-white text-lg">ORION CONTROL</h2>
              </div>
              <button 
                onClick={toggleControlCenter}
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Mission Status */}
              <section>
                <h3 className="font-mono text-xs tracking-widest text-mission-blue mb-4 uppercase">Mission Status</h3>
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/50 text-sm">Status</span>
                    <span className="text-success-green font-bold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" /> Open To Work
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/50 text-sm">Projects Built</span>
                    <span className="text-white font-mono text-sm">5</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/50 text-sm">Internships</span>
                    <span className="text-white font-mono text-sm">2</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/50 text-sm">Technologies</span>
                    <span className="text-white font-mono text-sm">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">Location</span>
                    <span className="text-white font-mono text-sm">Gurugram, Haryana</span>
                  </div>
                </div>
              </section>

              {/* Universe Controls */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs tracking-widest text-mission-blue uppercase">Universe Controls</h3>
                  {performanceMode && (
                    <span className="font-mono text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20 flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Performance: Optimal
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <ToggleItem label="Music" icon={Music} state={musicEnabled} toggleFn={setMusicEnabled} />
                  <ToggleItem label="Meteors" icon={Sparkles} state={meteorsEnabled} toggleFn={setMeteorsEnabled} />
                  <ToggleItem label="Stars" icon={Sparkles} state={starsEnabled} toggleFn={setStarsEnabled} />
                  <ToggleItem label="Performance Mode" icon={Zap} state={performanceMode} toggleFn={setPerformanceMode} />
                  <ToggleItem label="Focus Mode" icon={EyeOff} state={focusMode} toggleFn={setFocusMode} />
                </div>
              </section>

              {/* Destinations */}
              <section>
                <h3 className="font-mono text-xs tracking-widest text-mission-blue mb-4 uppercase">Destinations</h3>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => jumpToDestination(2, "BookHub")} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 hover:border-mission-blue/30 transition-colors text-left group">
                    <Book className="w-4 h-4 text-white/40 group-hover:text-mission-blue" />
                    <span className="text-sm text-white/80 group-hover:text-white">BookHub</span>
                  </button>
                  <button onClick={() => jumpToDestination(3, "MediConnect")} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 hover:border-mission-blue/30 transition-colors text-left group">
                    <HeartPulse className="w-4 h-4 text-white/40 group-hover:text-red-400" />
                    <span className="text-sm text-white/80 group-hover:text-white">MediConnect</span>
                  </button>
                  <button onClick={() => jumpToDestination(4, "FarmDirect")} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 hover:border-mission-blue/30 transition-colors text-left group">
                    <Leaf className="w-4 h-4 text-white/40 group-hover:text-green-400" />
                    <span className="text-sm text-white/80 group-hover:text-white">FarmDirect</span>
                  </button>
                  <button onClick={() => jumpToDestination(5, "Flavor Haven")} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 hover:border-mission-blue/30 transition-colors text-left group">
                    <Utensils className="w-4 h-4 text-white/40 group-hover:text-yellow-400" />
                    <span className="text-sm text-white/80 group-hover:text-white">Flavor Haven</span>
                  </button>
                </div>
              </section>

              {/* Mission Actions */}
              <section>
                <h3 className="font-mono text-xs tracking-widest text-mission-blue mb-4 uppercase">Mission Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="/resume.pdf" download="Kartik_Agrawal_Resume.pdf" className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 transition-colors gap-2">
                    <FileText className="w-5 h-5 text-white/60" />
                    <span className="text-xs text-white/80">Resume</span>
                  </a>
                  <a href="https://www.linkedin.com/in/kartik221203/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 transition-colors gap-2">
                    <Users className="w-5 h-5 text-[#0A66C2]" />
                    <span className="text-xs text-white/80">LinkedIn</span>
                  </a>
                  <a href="https://github.com/Agkartik/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 transition-colors gap-2">
                    <GitBranch className="w-5 h-5 text-white" />
                    <span className="text-xs text-white/80">GitHub</span>
                  </a>
                  <a href="mailto:kartik221203@gmail.com" className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/10 transition-colors gap-2">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span className="text-xs text-white/80">Contact</span>
                  </a>
                </div>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating ORION Orb / Dialogue */}
      <div className="fixed bottom-10 right-10 z-[60] flex items-end justify-end gap-4 pointer-events-none transition-opacity duration-500">
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {currentDialogue && !isControlCenterOpen && !focusMode && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-6 max-w-[280px] p-4 rounded-2xl rounded-br-none bg-black/60 backdrop-blur-md border border-mission-blue/30 shadow-[0_0_20px_rgba(0,212,255,0.15)] pointer-events-auto"
            >
              <p className="font-mono text-sm leading-relaxed text-white">
                {currentDialogue}
              </p>
              <button 
                onClick={clearDialogue}
                className="mt-2 text-xs text-mission-blue/60 hover:text-mission-blue transition-colors uppercase tracking-wider"
              >
                [ Dismiss ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ORION Orb */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-16 h-16 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer group"
          onClick={toggleControlCenter}
        >
          {/* Glow behind the orb */}
          <div className="absolute inset-0 rounded-full bg-mission-blue blur-xl opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
          
          {/* The orb itself */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,212,255,0.8)] relative z-10 border border-mission-blue/50">
            {/* Cyan Energy Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border-2 border-transparent border-t-mission-blue border-b-mission-blue opacity-50"
            />
            {/* Inner core */}
            <div className="w-8 h-8 rounded-full bg-white blur-[2px]" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

