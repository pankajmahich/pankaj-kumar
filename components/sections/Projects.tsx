"use client";

import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Layers } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  // Extract unique categories dynamically from projects
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) {
        set.add(p.category);
      }
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Showcase"
          title="Featured Projects"
          subtitle="A selection of high-performance web applications, interactive 3D tools, and distributed cloud systems."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                    : "glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="transition-all duration-300">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center glass-panel rounded-2xl p-8 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No projects found in &quot;{selectedCategory}&quot;
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-3 text-xs text-indigo-500 hover:underline"
            >
              Reset to all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
