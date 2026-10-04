import * as React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Card
      hoverLift
      className="p-0 border-black/5 dark:border-white/10 flex flex-col justify-between overflow-hidden group h-full"
    >
      <div>
        {/* Project Image Banner */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          {project.image && !imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-950 via-slate-900 to-cyan-950 p-6 text-center">
              <Sparkles className="w-10 h-10 text-indigo-400 mb-2 animate-pulse" />
              <span className="text-sm font-semibold text-white">{project.title}</span>
            </div>
          )}

          {/* Overlay Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/60 backdrop-blur-md text-white border border-white/15">
              {project.category}
            </span>
            {project.featured && (
              <Badge variant="accent" className="bg-indigo-600/90 text-white border-white/20 text-[10px] shadow-sm">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Problem Solved callout */}
          {project.problemSolved && (
            <div className="mt-4 p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-indigo-600 dark:text-cyan-400">Impact: </strong>
                {project.problemSolved}
              </span>
            </div>
          )}

          {/* Technologies Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="px-6 py-5 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            external
            rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            className="flex-1"
          >
            Live Demo
          </Button>
        ) : (
          <div className="flex-1" />
        )}

        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            external
            leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
          >
            Source
          </Button>
        )}
      </div>
    </Card>
  );
}
