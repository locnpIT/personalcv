import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Gauge, Cpu, Database, Zap, ShieldCheck, Cloud } from "lucide-react";

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: "Performance",
      description: "Reducing latency bottlenecks, optimizing GC overhead, and profiling execution paths.",
      icon: Gauge,
    },
    {
      title: "Concurrency",
      description: "Writing thread-safe code, handling race conditions, and managing lock contention.",
      icon: Cpu,
    },
    {
      title: "Database Optimization",
      description: "Refactoring slow queries, designing composite B+ Tree indexes, and tuning transactions.",
      icon: Database,
    },
    {
      title: "Caching",
      description: "Designing multi-tier caching architectures and atomic Redis data operations.",
      icon: Zap,
    },
    {
      title: "System Reliability",
      description: "Building resilient services with graceful degradation, timeouts, and fault boundaries.",
      icon: ShieldCheck,
    },
    {
      title: "Cloud Infrastructure",
      description: "Containerizing services with Docker and deploying stable workloads across cloud environments.",
      icon: Cloud,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="Engineering backend systems engineered for predictability, throughput, and clean maintainability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Natural narrative copy */}
          <div className="lg:col-span-6 space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              I am a backend-focused software engineer who enjoys digging into the mechanics of how software behaves under real production load. Rather than focusing on surface-level abstractions, I care about predictable latency, thread safety, clean relational schemas, and robust data integrity.
            </p>
            <p>
              My primary ecosystem centers around Java and Spring Boot, combined with Redis for fast in-memory operations and MySQL/PostgreSQL for durable, ACID-compliant persistence. I believe the best backend systems are simple to reason about, heavily tested, and built with clear operational boundaries.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              Currently engineering backend services at Rikkeisoft, where I focus on scalable service development, database query tuning, and distributed Redis solutions.
            </p>
          </div>

          {/* Core Problem-Solving Focus Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/90 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-zinc-100">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
