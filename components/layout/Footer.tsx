import * as React from "react";
import Link from "next/link";
import { portfolioData } from "@/constants/constants";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIconMap: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    twitter: <TwitterIcon className="w-4 h-4" />,
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    ...(portfolioData.settings.enableExperience ? [{ name: "Experience", href: "#experience" }] : []),
    ...(portfolioData.settings.enableServices ? [{ name: "Services", href: "#services" }] : []),
    { name: "Projects", href: "#projects" },
    ...(portfolioData.settings.enableTestimonials ? [{ name: "Testimonials", href: "#testimonials" }] : []),
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-slate-50/50 dark:bg-black/30 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/5 dark:border-white/5">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-mono font-extrabold shadow-md shadow-indigo-500/20">
                {portfolioData.personal.avatarFallback || "AV"}
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {portfolioData.personal.shortBio}
            </p>
            {portfolioData.personal.availability.isAvailable && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {portfolioData.personal.availability.status}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {Object.entries(portfolioData.socialLinks).map(([key, url]) => {
                if (!url || !socialIconMap[key]) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all"
                    aria-label={`${portfolioData.personal.name} on ${key}`}
                  >
                    {socialIconMap[key]}
                  </a>
                );
              })}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              {portfolioData.personal.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js, Three.js & Tailwind CSS</span>
            <a
              href="#hero"
              className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
