import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export function Skills() {
  const { skills } = portfolioData;

  const levelColorMap: Record<string, "accent" | "success" | "outline" | "default"> = {
    Expert: "accent",
    Proficient: "success",
    Intermediate: "outline",
    Beginner: "default",
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities"
          title="Skills & Tech Stack"
          subtitle="A comprehensive toolkit refined over years of engineering scalable, resilient, and interactive software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              hoverLift
              className="p-6 sm:p-8 border-black/5 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/5 dark:border-white/10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {items.length} Technologies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-indigo-500/40 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                          <DynamicIcon name={skill.icon} className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <Badge
                        variant={levelColorMap[skill.level] || "outline"}
                        className="text-[10px] px-2 py-0.5 shrink-0"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
