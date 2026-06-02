"use client";

import { LivingUniverse } from "@/components/universe/LivingUniverse";
import { UniverseJourney } from "@/components/scenes/UniverseJourney";
import { KartikVerseExperience } from "@/components/scenes/KartikVerseExperience";
import { useOrionStore } from "@/lib/store/orionStore";

export default function Home() {
  const { isExplorerMode } = useOrionStore();

  return (
    <main className="relative w-full text-foreground bg-black overflow-hidden">
      
      {/* 
        PHASE 1: CINEMATIC INTRO 
        This is the full cinematic (Video -> Title -> Orion -> Portal -> Flash).
        It runs entirely on its own to guarantee maximum GPU performance without fighting the rest of the app.
      */}
      {isExplorerMode && (
        <KartikVerseExperience />
      )}

      {/* 
        PHASE 2: UNIVERSE JOURNEY
        ONLY mounts after the cinematic portal flashes and isExplorerMode becomes false.
        This provides a flawless transition from the blinding flash into deep space Arrival.
      */}
      {!isExplorerMode && (
        <>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <LivingUniverse />
          </div>
          <div className="relative z-10 w-full">
            <UniverseJourney />
          </div>
        </>
      )}
      
    </main>
  );
}

