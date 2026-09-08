import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Projects | Nguyen Phuoc Loc - Backend Software Engineer",
  description:
    "Explore architectural case studies, distributed rate limiting, real-time Redis ranking, concurrency control, and database query optimization.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors p-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
            CASE STUDIES &amp; ARCHITECTURES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 font-sans mt-3">
            Selected Engineering Work
          </h1>
          <p className="mt-2 text-base text-zinc-400 max-w-2xl leading-relaxed">
            Detailed technical breakdowns of real-world backend implementations, concurrency control, Redis data structures, and database query tuning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
