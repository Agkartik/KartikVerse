import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtitle?: string;
}

export function SectionHeading({ className, children, subtitle, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-8", className)}>
      {subtitle && (
        <span className="font-mono text-sm tracking-[0.2em] text-mission-blue/80 uppercase">
          {subtitle}
        </span>
      )}
      <h2 
        className="font-heading text-3xl md:text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50"
        {...props}
      >
        {children}
      </h2>
    </div>
  )
}
