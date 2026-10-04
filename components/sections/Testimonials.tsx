import * as React from "react";
import Image from "next/image";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const { testimonials, settings } = portfolioData;

  if (!settings.enableTestimonials || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Endorsements"
          title="What Collaborators Say"
          subtitle="Feedback from engineering leaders, founders, and design partners who value velocity and craftsmanship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Card
              key={idx}
              hoverLift
              className="p-8 border-black/5 dark:border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  {item.rating && (
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/5 dark:border-white/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border-2 border-indigo-500/30">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-xs text-indigo-500">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role} · <span className="text-indigo-600 dark:text-cyan-400">{item.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
