"use client";

import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CanvasContainer } from "@/components/3d/CanvasContainer";
import { ArrowRight, ChevronDown, FileDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, DiscordIcon } from "@/components/ui/Icons";

export function Hero() {
  const { hero, personal, socialLinks, settings } = portfolioData;

  const socialIconMap: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    twitter: <TwitterIcon className="w-4 h-4" />,
    discord: <DiscordIcon className="w-4 h-4" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      {/* Background ambient gradient spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            {hero.badge && (
              <div className="inline-flex">
                <Badge variant="success" dot className="py-1.5 px-3.5 text-xs shadow-sm">
                  {hero.badge}
                </Badge>
              </div>
            )}

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
                {hero.greeting} {personal.name}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Engineering{" "}
                <span className="text-gradient">
                  {hero.headlineHighlight}
                </span>{" "}
                Web Architectures
              </h1>
            </div>

            {/* Role & Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={hero.primaryCta.href}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {hero.primaryCta.text}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.text}
              </Button>
              {personal.resumeUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  href={personal.resumeUrl}
                  external
                  leftIcon={<FileDown className="w-4 h-4" />}
                >
                  Resume
                </Button>
              )}
            </div>

            {/* Social Icons Quick Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-500 font-medium">Follow & Connect:</span>
              <div className="flex items-center gap-2">
                {Object.entries(socialLinks).map(([key, url]) => {
                  if (!url || !socialIconMap[key]) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all"
                      aria-label={`${personal.name} on ${key}`}
                    >
                      {socialIconMap[key]}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene Viewport (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            {settings.enable3DHero ? (
              <CanvasContainer />
            ) : (
              <div className="w-full max-w-sm aspect-square rounded-3xl glass-panel flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-indigo-500 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="pt-12 md:pt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span>Explore Experience</span>
            <div className="w-6 h-9 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-start justify-center p-1.5 group-hover:border-indigo-500 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-indigo-500 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
