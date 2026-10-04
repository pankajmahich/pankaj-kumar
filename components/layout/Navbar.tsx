"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search, FileDown } from "lucide-react";
import { portfolioData } from "@/constants/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { CommandPalette } from "./CommandPalette";

export function Navbar() {
  const { scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cmdOpen, setCmdOpen] = React.useState(false);

  // Dynamic navigation links based on settings
  const navLinks = React.useMemo(() => {
    const links = [
      { id: "hero", name: "Home", href: "#hero" },
      { id: "about", name: "About", href: "#about" },
      { id: "skills", name: "Skills", href: "#skills" },
    ];

    if (portfolioData.settings.enableExperience) {
      links.push({ id: "experience", name: "Experience", href: "#experience" });
    }
    if (portfolioData.settings.enableServices) {
      links.push({ id: "services", name: "Services", href: "#services" });
    }

    links.push({ id: "projects", name: "Projects", href: "#projects" });

    if (portfolioData.settings.enableTestimonials) {
      links.push({ id: "testimonials", name: "Testimonials", href: "#testimonials" });
    }

    links.push({ id: "contact", name: "Contact", href: "#contact" });

    return links;
  }, []);

  const sectionIds = React.useMemo(() => navLinks.map((l) => l.id), [navLinks]);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "glass-nav shadow-lg shadow-black/5 dark:shadow-black/20"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo / Brand Name */}
            <Link
              href="#hero"
              className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-mono font-extrabold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                {portfolioData.personal.avatarFallback || "AV"}
              </div>
              <span className="text-base font-semibold hidden sm:inline-block">
                {portfolioData.personal.name}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-cyan-400 font-semibold bg-indigo-500/10 dark:bg-white/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Command Palette Trigger */}
              {portfolioData.settings.enableCommandPalette && (
                <button
                  type="button"
                  onClick={() => setCmdOpen(true)}
                  className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-black/10 dark:border-white/10 glass-panel text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer"
                  title="Search & Commands (Ctrl+K or ⌘K)"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Search</span>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10">
                    ⌘K
                  </kbd>
                </button>
              )}

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Resume Button */}
              {portfolioData.personal.resumeUrl && (
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Resume
                </a>
              )}

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-xl border border-black/10 dark:border-white/10 glass-panel text-slate-700 dark:text-slate-200"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />

      {/* Command Palette Modal */}
      {portfolioData.settings.enableCommandPalette && (
        <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      )}
    </>
  );
}
