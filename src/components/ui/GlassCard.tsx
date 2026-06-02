import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "purple" | "gold" | "green" | "none"
}

export function GlassCard({ className, children, glowColor = "none", ...props }: GlassCardProps) {
  
  const glowStyles = {
    none: "",
    blue: "hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:border-[#00D4FF]/30",
    purple: "hover:shadow-[0_0_30px_rgba(67,35,113,0.3)] hover:border-[#432371]/50",
    gold: "hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:border-[#FFD700]/30",
    green: "hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] hover:border-[#00FF88]/30",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-none transition-all duration-300",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle top glare */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {children}
    </div>
  )
}
