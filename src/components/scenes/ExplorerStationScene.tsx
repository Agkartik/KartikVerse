"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { X, Briefcase, Award } from "lucide-react";

export function ExplorerStationScene() {
  const [dossierOpen, setDossierOpen] = useState(false);
  useEffect(() => {
    if (dossierOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [dossierOpen]);
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4">
      
      {/* Station Background Glow - using cheap radial gradients */}
      <div className="nebula-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-20" />

      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Avatar/Hologram Representation */}
        <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 relative">
          <div className="absolute inset-0 rounded-full border border-white/20 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-mission-blue/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full bg-mission-blue/10 flex items-center justify-center overflow-hidden z-20">
            {/* The user's portrait */}
            <img src="/assets/kartik.png" alt="Kartik Agrawal" className="w-full h-full object-cover rounded-full shadow-[inset_0_0_20px_rgba(0,212,255,0.5)]" />
          </div>
        </div>

        {/* Right Side: The Story */}
        <div className="flex-1 flex flex-col space-y-6">
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-mission-blue"></span>
              <span className="font-mono text-sm tracking-[0.3em] text-mission-blue uppercase">Identity Verified</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl text-white font-bold tracking-wider">
              THE EXPLORER
            </h2>
          </div>

          <GlassCard glowColor="blue" className="p-8 border-white/10 bg-black/40 backdrop-blur-xl">
            <h3 className="font-mono text-xl text-white mb-6 tracking-wide">
              Every universe begins with a creator.
            </h3>
            
            <p className="font-sans text-lg text-white/90 leading-relaxed">
              What started as curiosity became a relentless passion for building complex systems, solving intricate problems, and creating immersive digital experiences. 
            </p>
            
            <p className="font-sans text-lg text-white/90 leading-relaxed mt-4">
              I don't just write code—I engineer worlds. From high-performance healthcare platforms to expansive publishing ecosystems, my mission is to push the boundaries of what the web can do.
            </p>

            {/* System Status & Action */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-mission-blue animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mission-blue animate-pulse delay-75"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mission-blue animate-pulse delay-150"></span>
                </div>
                <span className="font-mono text-xs text-white tracking-widest uppercase">System Online</span>
              </div>
              
              <Button 
                onClick={() => setDossierOpen(true)}
                className="bg-mission-blue/10 border border-mission-blue/30 text-mission-blue hover:bg-mission-blue/20 pointer-events-auto"
              >
                VIEW CREDENTIALS
              </Button>
            </div>
          </GlassCard>

        </div>
      </div>

      {/* Side-Sliding Credentials Dossier */}
      <AnimatePresence>
        {dossierOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-24 bottom-4 right-4 z-50 w-[95%] md:w-[600px] rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
          >
            {/* Dossier Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-mission-blue/5">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-mission-blue tracking-[0.2em]">CLASSIFIED LOG</span>
                <h3 className="font-heading text-2xl text-white font-bold">Explorer Credentials</h3>
              </div>
              <button 
                onClick={() => setDossierOpen(false)}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Dossier Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 custom-scrollbar">
              
              {/* Internships */}
              <section>
                <h4 className="font-mono text-sm text-white/90 tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1 h-4 bg-mission-blue" />
                  INTERNSHIPS & EXPERIENCE
                </h4>
                <div className="space-y-6">
                  
                  <GlassCard className="p-6 bg-white/5 border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-lg">Full Stack Developer Intern</h5>
                        <p className="text-mission-blue font-mono text-sm mb-2">TecnovaCore | May 2025 - July 2025</p>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Engineered scalable web applications using the MERN stack. Optimized database queries and implemented robust, secure authentication flows.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6 bg-white/5 border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-lg">Android Developer Intern</h5>
                        <p className="text-purple-400 font-mono text-sm mb-2">Codec Technologies | 2023</p>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Developed native Android applications with a strong focus on intuitive UX and efficient background processing.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                  
                </div>
              </section>

              {/* Certificates */}
              <section>
                <h4 className="font-mono text-sm text-white/90 tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1 h-4 bg-mission-blue" />
                  CERTIFICATIONS
                </h4>
                  <div className="space-y-4">
                    <GlassCard className="p-4 bg-white/5 border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <div>
                        <h5 className="text-white font-bold text-sm">Google Android Certification</h5>
                        <p className="text-white/90 font-mono text-xs">Google</p>
                      </div>
                    </GlassCard>
                    <GlassCard className="p-4 bg-white/5 border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <div>
                        <h5 className="text-white font-bold text-sm">AWS Cloud Practitioner</h5>
                        <p className="text-white/90 font-mono text-xs">Amazon Web Services</p>
                      </div>
                    </GlassCard>
                    <GlassCard className="p-4 bg-white/5 border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <div>
                        <h5 className="text-white font-bold text-sm">Full Stack Developer Bootcamp</h5>
                        <p className="text-white/90 font-mono text-xs">Udemy</p>
                      </div>
                    </GlassCard>
                    <GlassCard className="p-4 bg-white/5 border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <div>
                        <h5 className="text-white font-bold text-sm">MongoDB Certified Developer</h5>
                        <p className="text-white/90 font-mono text-xs">MongoDB University</p>
                      </div>
                    </GlassCard>
                  </div>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


