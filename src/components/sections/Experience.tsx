import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceData } from "@/data/experience";
import { TechBadge } from "@/components/ui/TechBadge";
import { Briefcase, Calendar, MapPin, Check } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="04"
          title="Experience"
          subtitle="Production engineering contributions, service maintenance, and infrastructure scaling."
        />

        <div className="max-w-4xl">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-emerald-500 before:via-zinc-800 before:to-transparent"
            >
              {/* Timeline marker */}
              <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 hover:border-zinc-700/90 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 font-sans">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6 text-sm text-zinc-300">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-zinc-800/70 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-1">Stack:</span>
                  {item.techStack.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="default" size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
