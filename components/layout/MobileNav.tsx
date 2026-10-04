"use client";

import * as React from "react";
import { X, FileDown, ExternalLink } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/constants/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { id: string; name: string; href: string }[];
  activeSection: string;
}

export function MobileNav({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}: MobileNavProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col md:hidden bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm ml-auto h-full glass-panel border-l border-white/10 p-6 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600/10 text-indigo-600 dark:text-cyan-400 font-semibold border border-indigo-500/20"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-3">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium shadow-md shadow-indigo-500/20"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>

          {portfolioData.socialLinks.github && (
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              GitHub Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
