"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, Briefcase, Star, Code, GraduationCap, Award, Wrench, Download } from "lucide-react";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";

export function MissionDossier() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-10 left-10 z-40">
        <Button 
          variant="default" 
          size="lg" 
          onClick={() => setIsOpen(true)}
          className="group relative overflow-hidden bg-space border-mission-blue/30 text-mission-blue hover:text-white"
        >
          <div className="absolute inset-0 bg-mission-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <FileText className="w-5 h-5 mr-2 relative z-10" />
          <span className="relative z-10 font-bold tracking-widest">MISSION DOSSIER</span>
        </Button>
      </div>

      {/* The Dossier Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl"
          >
            <GlassCard glowColor="blue" className="w-full max-w-5xl h-[85vh] flex flex-col bg-space/95 border-white/20">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-mission-blue" />
                  <div className="flex flex-col">
                    <h2 className="font-heading text-xl md:text-2xl tracking-widest text-white">KARTIK AGRAWAL</h2>
                    <span className="font-mono text-xs text-white/90">kartik221203@gmail.com | +91-9301977530</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/90 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
                
                {/* Objective */}
                <section>
                  <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                    <Star className="w-4 h-4" /> Objective
                  </h3>
                  <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
                    <p className="text-white leading-relaxed font-sans">
                      Full-stack developer with hands-on experience designing and deploying scalable web applications using the MERN stack and modern development tools. Demonstrated ability to build secure REST APIs, integrate database architectures, and ship end-to-end solutions across frontend and backend layers. Seeking a software engineering role to contribute to production-grade applications, solve complex technical problems, and deliver measurable business impact.
                    </p>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Skills */}
                  <section>
                    <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                      <Wrench className="w-4 h-4" /> Technical Arsenal
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                        <span className="text-mission-blue font-bold text-sm block mb-1">Languages</span>
                        <p className="text-white/90 text-sm">C, C++, Python, JavaScript (ES6+), TypeScript, SQL</p>
                      </div>
                      <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                        <span className="text-mission-blue font-bold text-sm block mb-1">Frameworks & Web Tech</span>
                        <p className="text-white/90 text-sm">React.js, Next.js, Express.js, Node.js, HTML, CSS, Tailwind CSS</p>
                      </div>
                      <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                        <span className="text-mission-blue font-bold text-sm block mb-1">Databases & Cloud</span>
                        <p className="text-white/90 text-sm">MongoDB, Supabase, MySQL, SQLite, AWS (Fundamentals), Vercel</p>
                      </div>
                    </div>
                  </section>

                  {/* Experience & Education */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Experience
                      </h3>
                      <div className="space-y-6">
                        <div className="border-l border-white/10 pl-4 relative">
                          <div className="absolute w-2 h-2 bg-mission-blue rounded-full -left-[4px] top-1.5" />
                          <h4 className="font-bold text-white text-lg">Full Stack Developer Intern</h4>
                          <p className="text-white text-sm font-mono mb-2">TecnovaCore | May 2025 - Jul 2025</p>
                          <ul className="text-white text-sm list-disc pl-4 space-y-1">
                            <li>Designed and deployed 3+ full-stack web applications using React.js, Node.js, and Express.js.</li>
                            <li>Implemented JWT-based secure authentication with session management.</li>
                            <li>Integrated MongoDB schemas with proper indexing strategies, improving query performance by ~40%.</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" /> Education
                      </h3>
                      <div className="border-l border-white/10 pl-4 relative">
                        <div className="absolute w-2 h-2 bg-green-400 rounded-full -left-[4px] top-1.5 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        <h4 className="font-bold text-white text-lg">ITM University Gwalior</h4>
                        <p className="text-white text-sm font-mono mb-1">B.Tech in Computer Science Engineering</p>
                        <p className="text-green-400/80 text-xs font-mono">Sep 2022 - May 2026 | CGPA: 8.0</p>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Projects */}
                  <section>
                    <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                      <Code className="w-4 h-4" /> Major Projects
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <h4 className="font-bold text-white mb-1">FarmDirect</h4>
                        <p className="text-white text-xs font-mono mb-2">React, TypeScript, Supabase, Gemini API</p>
                        <p className="text-white text-sm">Multilingual digital marketplace with real-time chat, RBAC, and an AI-powered Crop Expert chatbot.</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <h4 className="font-bold text-white mb-1">Medi-Connect Plus</h4>
                        <p className="text-white text-xs font-mono mb-2">MERN, WebRTC, Socket.io, face-api.js</p>
                        <p className="text-white text-sm">Serverless telemedicine platform with WebRTC peer-to-peer video consultations and biometric AI face detection.</p>
                      </div>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section>
                    <h3 className="font-mono text-sm tracking-widest text-mission-blue mb-4 uppercase flex items-center gap-2">
                      <Award className="w-4 h-4" /> Certifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        'TCS CodeVita (Global Rank 7142)',
                        'Google Android Developer Virtual Internship',
                        'Compiler Design - NPTEL',
                        'Microsoft AI Skills Challenge'
                      ].map((cert) => (
                        <div key={cert} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                          <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                          <span className="text-sm text-white/90">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-white/10 flex justify-between items-center bg-black/20 shrink-0">
                <span className="font-mono text-xs text-white hidden md:block">CLASSIFIED CLEARANCE: RECRUITER</span>
                <a href="/resume.pdf" download="Kartik_Agrawal_Resume.pdf" className="w-full md:w-auto">
                  <Button className="w-full bg-mission-blue text-space hover:bg-mission-blue/90 font-bold flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> DOWNLOAD FULL RESUME (PDF)
                  </Button>
                </a>
              </div>

            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



