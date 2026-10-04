import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

export function Experience() {
  const { experience, settings } = portfolioData;

  if (!settings.enableExperience || !experience || experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Work Experience"
          subtitle="A track record of engineering leadership, scalable product delivery, and technical impact."
        />

        <div className="relative border-l-2 border-indigo-500/20 dark:border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300" />

              {/* Optional Date Callout on wide screens */}
              <div className="hidden md:block absolute -left-36 top-6 text-right w-28 text-xs font-mono font-semibold text-indigo-600 dark:text-cyan-400">
                {item.period}
              </div>

              <Card hoverLift className="p-6 sm:p-8 border-black/5 dark:border-white/10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5 dark:border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      {item.companyUrl && (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
                          aria-label={`Visit ${item.company}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <div className="text-base font-semibold text-indigo-600 dark:text-cyan-400 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="md:hidden inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <Badge variant="outline" className="text-[11px]">
                      {item.type}
                    </Badge>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities bullets */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
