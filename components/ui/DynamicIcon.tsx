import * as React from "react";
import * as LucideIcons from "lucide-react";
import { Code } from "lucide-react";

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "w-5 h-5", ...props }: DynamicIconProps) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const IconComponent = icons[name];

  if (!IconComponent) {
    return <Code className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
}
