import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  hoverLift = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        hoverLift && "hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5",
        glow && "glow-ambient",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
