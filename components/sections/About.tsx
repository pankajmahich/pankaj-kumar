import * as React from "react";
import Image from "next/image";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, ArrowRight, FileDown, CheckCircle2 } from "lucide-react";

export function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Highlights Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.highlights.map((item, idx) => (
                <Card
                  key={idx}
                  hoverLift
                  className="p-4 border-black/5 dark:border-white/10 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                href="#contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Let&apos;s Work Together
              </Button>
              {personal.resumeUrl && (
                <Button
                  variant="secondary"
                  href={personal.resumeUrl}
                  external
                  leftIcon={<FileDown className="w-4 h-4" />}
                >
                  Download CV
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Portrait Card with Glass Border (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm">
              {/* Ambient Glow behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />

              <div className="glass-panel p-3 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={personal.profileImage}
                    alt={personal.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle glass gradient overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
                    <span className="font-bold text-lg">{personal.name}</span>
                    <span className="text-xs text-slate-300">{personal.role}</span>
                  </div>
                </div>

                {/* Location & Status Bar */}
                <div className="p-4 pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4 text-cyan-500" />
                    <span>{personal.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
