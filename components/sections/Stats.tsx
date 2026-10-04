import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { Card } from "@/components/ui/Card";

export function Stats() {
  const { stats, settings } = portfolioData;

  if (!settings.enableStats || !stats || stats.length === 0) {
    return null;
  }

  return (
    <section className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              hoverLift
              className="text-center p-6 sm:p-8 flex flex-col items-center justify-center border-black/5 dark:border-white/10"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
