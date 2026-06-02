"use client";

import { useState } from "react";
import { Send, Terminal, Mail, MapPin } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

export function MissionTerminalScene() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleTransmit = () => {
    if (!name.trim() || !message.trim()) {
      alert("Please enter an Identifier and Transmission Data before sending.");
      return;
    }
    
    const subject = encodeURIComponent(`KartikVerse Terminal: Transmission from ${name}`);
    const body = encodeURIComponent(`Incoming transmission from: ${name}\n\nMessage:\n${message}`);
    
    // Trigger the device's default email client
    window.location.href = `mailto:kartik221203@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden pointer-events-auto">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-heading text-4xl md:text-6xl text-white font-bold tracking-wider">
          MISSION TERMINAL
        </h2>
        <p className="font-mono text-white/50 tracking-[0.3em] uppercase mt-2 text-center">
          Establish Secure Communication
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <GlassCard className="p-6 bg-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => window.location.href='mailto:kartik221203@gmail.com'}>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-white/50 font-mono text-xs uppercase tracking-widest">Direct Link</p>
              <p className="text-white font-bold">kartik221203@gmail.com</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => window.open('https://github.com/Agkartik/', '_blank')}>
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-white/50 font-mono text-xs uppercase tracking-widest">GitHub Repository</p>
              <p className="text-white font-bold hover:text-green-400 transition-colors">
                github.com/Agkartik
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-white/50 font-mono text-xs uppercase tracking-widest">Current Coordinates</p>
              <p className="text-white font-bold">Gurugram, Haryana</p>
            </div>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <GlassCard className="p-8 flex flex-col gap-6 bg-black/40">
          <div className="flex flex-col gap-2">
            <label className="text-white/50 font-mono text-xs uppercase tracking-widest">Identifier</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/50 font-mono text-xs uppercase tracking-widest">Transmission Data</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Enter your message"
            />
          </div>
          <Button 
            onClick={handleTransmit}
            className="w-full bg-blue-500 hover:bg-blue-400 text-black font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            TRANSMIT <Send className="w-4 h-4" />
          </Button>
        </GlassCard>

      </div>
    </section>
  );
}
