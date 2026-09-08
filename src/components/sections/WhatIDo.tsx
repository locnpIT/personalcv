import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { TechBadge } from "@/components/ui/TechBadge";
import { Server, Database, Cpu } from "lucide-react";

export const WhatIDo: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  };

  return (
    <section id="what-i-do" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="02"
          title="What I Do"
          subtitle="Core engineering specializations spanning application services, database internals, and cloud systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                    {iconMap[cat.icon]}
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 font-semibold tracking-wider">
                    {cat.categoryTag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-2.5">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-zinc-800/70">
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
                  Technologies &amp; Competencies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} variant="default" size="sm" />
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
