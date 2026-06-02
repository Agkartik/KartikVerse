"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink, Activity, Shield, Cpu } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export function MediConnectWorld() {
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
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden pointer-events-auto">
      
      {/* Background Glow */}
      <div className="nebula-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20" />

      {/* The Planet */}
      <div 
        className="relative z-10 w-64 h-64 md:w-96 md:h-96 cursor-pointer group transition-transform duration-500 hover:scale-105"
        onClick={() => setDossierOpen(true)}
      >
        <div className="absolute inset-4 rounded-full shadow-[0_0_60px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_100px_rgba(6,182,212,0.5)] transition-shadow duration-500" />
        <div className="w-full h-full bg-[url('/assets/worlds/mediconnect/mediconnect.png')] bg-contain bg-center bg-no-repeat animate-[float_6s_ease-in-out_infinite_reverse]" />
        
        {/* Connection UI */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest bg-black/50 px-4 py-2 rounded-full border border-cyan-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            SECURE HANDSHAKE
          </div>
        </div>
      </div>

      <div className="absolute top-32 md:top-40 flex flex-col items-center pointer-events-none">
        <h2 className="font-heading text-5xl md:text-7xl text-white font-bold tracking-wider drop-shadow-lg">
          MEDICONNECT+
        </h2>
        <p className="font-mono text-cyan-400/80 tracking-[0.3em] uppercase mt-2 text-center">
          Healthcare Telemetry Network
        </p>
      </div>

      {/* Side-Sliding Mission Dossier */}
      <AnimatePresence>
        {dossierOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-24 bottom-4 right-4 z-50 w-[95%] md:w-[600px] rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Dossier Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-cyan-500/5">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-cyan-500 tracking-[0.2em]">CLASSIFIED LOG</span>
                <h3 className="font-heading text-2xl text-white font-bold">MediConnect Protocol</h3>
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
              
              {/* Goal */}
              <section>
                <h4 className="font-mono text-sm text-white/90 tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyan-500" />
                  OBJECTIVE
                </h4>
                <p className="text-white font-sans leading-relaxed text-lg">
                  To engineer a HIPAA-compliant telemedicine platform capable of handling real-time vital telemetry, secure messaging, and high-definition video consultations between patients and specialists across global networks.
                </p>
              </section>

              {/* Tech Stack */}
              <section>
                <h4 className="font-mono text-sm text-white/90 tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyan-500" />
                  TECHNOLOGY MATRIX
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard className="p-4 flex items-center gap-3 bg-white/5">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-bold text-sm">WebRTC</div>
                      <div className="text-white text-xs font-mono">Video/Audio</div>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-4 flex items-center gap-3 bg-white/5">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-bold text-sm">OAuth 2.0</div>
                      <div className="text-white text-xs font-mono">Security</div>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-4 flex items-center gap-3 bg-white/5">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-bold text-sm">PostgreSQL</div>
                      <div className="text-white text-xs font-mono">Database</div>
                    </div>
                  </GlassCard>
                </div>
              </section>

              {/* Architecture/Challenges */}
              <section>
                <h4 className="font-mono text-sm text-white/90 tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyan-500" />
                  CHALLENGES OVERCOME
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                    <p className="text-white/90 font-sans">
                      <strong className="text-white">Latency Reduction:</strong> Optimized WebRTC signaling servers using Socket.io to drop connection establishment latency below 200ms.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                    <p className="text-white/90 font-sans">
                      <strong className="text-white">Data Integrity:</strong> Engineered a robust fallback mechanism for PostgreSQL transactions to prevent vital data loss during intermittent client network drops.
                    </p>
                  </li>
                </ul>
              </section>

            </div>

            {/* Dossier Footer */}
            <div className="p-6 border-t border-white/10 bg-black/40">
              <a href="https://medi-connect-plus.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center justify-center gap-2">
                  ACCESS SYSTEM <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


