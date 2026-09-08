import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringInterests } from "@/data/interests";
import { Compass } from "lucide-react";

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="05"
          title="Engineering Interests"
          subtitle="Topics in backend systems, distributed architectures, and database internals that I actively study and explore."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {engineeringInterests.map((interest) => (
            <div
              key={interest.title}
              className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[10px] text-emerald-400/80 uppercase tracking-wider bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded">
                    {interest.category}
                  </span>
                  <Compass className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2 font-sans">
                  {interest.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {interest.description}
                </p>
              </div>

              {/* Key concepts */}
              <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                {interest.keyConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800/80"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
