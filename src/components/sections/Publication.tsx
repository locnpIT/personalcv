import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publicationData } from "@/data/education";
import { BookOpen, Calendar, Users, ArrowUpRight } from "lucide-react";

export const Publication: React.FC = () => {
  return (
    <section id="research" className="py-16 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="06"
          title="Research & Publication"
          subtitle="Understated academic and engineering investigation into telemetry ingestion and predictive machine learning models."
        />

        <div className="max-w-4xl">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 hover:border-zinc-700 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {publicationData.year}
              </span>
              <span className="font-mono text-xs text-emerald-400">
                {publicationData.conferenceOrJournal}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 leading-snug">
              {publicationData.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-4 font-mono">
              <Users className="w-3.5 h-3.5 text-zinc-500" />
              <span>{publicationData.authors}</span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-5 font-normal">
              {publicationData.abstract}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800/70">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1 mr-1">
                  <BookOpen className="w-3.5 h-3.5" /> Topics:
                </span>
                {publicationData.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {publicationData.url && (
                <a
                  href={publicationData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                >
                  <span>View on IEEE Xplore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
