import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { mainTechnologies } from "@/data/skills";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArchitectureVisual } from "@/components/ui/ArchitectureVisual";
import { ArrowRight, FileText, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Identity & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for Backend Engineering Roles</span>
            </div>

            {/* Name and Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 font-sans">
                {profileData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-mono font-medium text-emerald-400 tracking-tight">
                {profileData.role}
              </p>
            </div>

            {/* Suggested Main and Secondary Copy */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed">
                “{profileData.heroHeadline}”
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                {profileData.heroSecondary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-950/40"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/50 hover:border-emerald-700 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Core Tech Stack Strip */}
            <div className="pt-6 border-t border-zinc-800/80">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Core Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {mainTechnologies.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="default" size="sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Backend Architecture Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
