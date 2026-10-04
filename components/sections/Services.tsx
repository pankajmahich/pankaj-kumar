import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Check } from "lucide-react";

export function Services() {
  const { services, settings } = portfolioData;

  if (!settings.enableServices || !services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Solutions"
          title="What I Deliver"
          subtitle="From initial architectural design to high-throughput production systems and creative 3D web experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              hoverLift
              className="p-8 border-black/5 dark:border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-indigo-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={service.icon} className="w-6 h-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2.5"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
