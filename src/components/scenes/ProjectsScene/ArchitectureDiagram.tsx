import * as React from "react";
import { cn } from "@/lib/utils";
import { ProjectArchitecture } from "@/lib/types";
import { Database, LayoutTemplate, Server, Cpu } from "lucide-react";

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
  className?: string;
}

export function ArchitectureDiagram({ architecture, className }: ArchitectureDiagramProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      
      {/* Frontend */}
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="flex items-center gap-2 text-mission-blue/80 mb-1">
          <LayoutTemplate className="w-4 h-4" />
          <span className="font-mono text-xs font-bold tracking-wider">FRONTEND</span>
        </div>
        {architecture.frontend.map((item, i) => (
          <div key={i} className="text-white/70 text-xs">{item}</div>
        ))}
      </div>

      {/* Backend */}
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="flex items-center gap-2 text-[#00FF88]/80 mb-1">
          <Server className="w-4 h-4" />
          <span className="font-mono text-xs font-bold tracking-wider">BACKEND</span>
        </div>
        {architecture.backend.map((item, i) => (
          <div key={i} className="text-white/70 text-xs">{item}</div>
        ))}
      </div>

      {/* Database */}
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="flex items-center gap-2 text-[#FFD700]/80 mb-1">
          <Database className="w-4 h-4" />
          <span className="font-mono text-xs font-bold tracking-wider">DATABASE</span>
        </div>
        {architecture.database.map((item, i) => (
          <div key={i} className="text-white/70 text-xs">{item}</div>
        ))}
      </div>

      {/* AI Layer */}
      {architecture.aiLayer.length > 0 && (
        <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-2 text-[#432371]/80 mb-1">
            <Cpu className="w-4 h-4" />
            <span className="font-mono text-xs font-bold tracking-wider">AI LAYER</span>
          </div>
          {architecture.aiLayer.map((item, i) => (
            <div key={i} className="text-white/70 text-xs">{item}</div>
          ))}
        </div>
      )}

    </div>
  );
}
