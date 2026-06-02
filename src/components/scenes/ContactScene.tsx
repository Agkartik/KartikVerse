"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactScene() {
  return (
    <section id="contact" className="relative w-full h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center flex flex-col items-center z-10">
        
        {/* Emotional Ending Text */}
        <p className="font-mono text-mission-blue text-sm uppercase tracking-widest mb-6">
          Mission Complete
        </p>
        <SectionHeading>
          LET'S BUILD SOMETHING TOGETHER
        </SectionHeading>
        
        <p className="text-white/60 font-sans text-lg mb-12">
          Thanks for exploring KartikVerse. The universe is vast, but the best products are built when the right people connect.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="bg-white text-space hover:bg-white/90">
            <Mail className="w-5 h-5 mr-2" />
            INITIATE CONTACT
          </Button>
          <Button variant="outline" size="lg" className="border-mission-blue/50 text-mission-blue hover:bg-mission-blue/10">
            <LinkedinIcon className="w-5 h-5 mr-2" />
            LINKEDIN
          </Button>
          <Button variant="ghost" size="lg">
            <GithubIcon className="w-5 h-5 mr-2" />
            GITHUB
          </Button>
        </div>
        
      </div>
      
      {/* Background glow for terminal effect */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-mission-blue/10 to-transparent pointer-events-none" />
    </section>
  );
}
