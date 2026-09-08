import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article className="group relative rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20">
      <div>
        {/* Top bar: project index & highlight metric */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs text-zinc-500 font-semibold">
            {`0${index + 1} // CASE STUDY`}
          </span>
          {project.highlightMetric && (
            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
              {project.highlightMetric}
            </span>
          )}
        </div>

        {/* Title & Arrow */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
            <Link href={`/projects/${project.slug}`} className="hover:underline focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View architecture details for ${project.title}`}
            className="p-1.5 rounded-lg text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-950/30 transition-all"
          >
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Short description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Key architectural highlights */}
        <div className="space-y-2 mb-6 pt-2 border-t border-zinc-800/60">
          {project.technicalHighlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 mt-0.5 shrink-0" />
              <span>
                <strong className="text-zinc-200 font-medium">{h.title}:</strong> {h.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack footer */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} variant="default" size="sm" />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-medium"
        >
          View Architecture →
        </Link>
      </div>
    </article>
  );
};
