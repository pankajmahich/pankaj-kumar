"use client";

import * as React from "react";
import { Search, X, ArrowRight, Copy, Check, FileDown, ExternalLink } from "lucide-react";
import { portfolioData } from "@/constants/constants";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "action-email",
      title: "Copy Email Address",
      subtitle: portfolioData.personal.email,
      icon: <Copy className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      },
    },
    {
      id: "action-resume",
      title: "View / Download Resume",
      subtitle: "PDF Document",
      icon: <FileDown className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        window.open(portfolioData.personal.resumeUrl, "_blank");
        onClose();
      },
    },
    {
      id: "action-github",
      title: "Visit GitHub Profile",
      subtitle: portfolioData.socialLinks.github,
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        if (portfolioData.socialLinks.github) {
          window.open(portfolioData.socialLinks.github, "_blank");
        }
        onClose();
      },
    },
  ];

  const sections = [
    { id: "hero", title: "Home / Hero", href: "#hero" },
    { id: "about", title: "About Alex", href: "#about" },
    { id: "skills", title: "Skills & Tech Stack", href: "#skills" },
    ...(portfolioData.settings.enableExperience ? [{ id: "experience", title: "Career Experience", href: "#experience" }] : []),
    ...(portfolioData.settings.enableServices ? [{ id: "services", title: "Services & Offerings", href: "#services" }] : []),
    { id: "projects", title: "Featured Projects", href: "#projects" },
    ...(portfolioData.settings.enableTestimonials ? [{ id: "testimonials", title: "Client Testimonials", href: "#testimonials" }] : []),
    { id: "contact", title: "Contact Me", href: "#contact" },
  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = portfolioData.projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.subtitle?.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl glass-panel rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-black/10 dark:border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-sm md:text-base outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4">
          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                Quick Actions
              </div>
              <div className="space-y-1 mt-1">
                {filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.perform}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-200 dark:bg-white/5">
                        {action.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {action.title}
                        </div>
                        {action.subtitle && (
                          <div className="text-xs text-slate-500 truncate max-w-xs">
                            {action.subtitle}
                          </div>
                        )}
                      </div>
                    </div>
                    {copied && action.id === "action-email" ? (
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Sections */}
          {filteredSections.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                Navigation
              </div>
              <div className="space-y-1 mt-1">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleNavigate(sec.href)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      {sec.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                Projects
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleNavigate("#projects")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {p.category} · {p.technologies.slice(0, 3).join(", ")}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredActions.length === 0 &&
            filteredSections.length === 0 &&
            filteredProjects.length === 0 && (
              <div className="py-8 text-center text-sm text-slate-400">
                No matching actions or sections found for &quot;{query}&quot;
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
