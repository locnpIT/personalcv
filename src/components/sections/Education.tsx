import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationData } from "@/data/education";
import { GraduationCap, Award, Calendar, MapPin, BookCheck } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="07"
          title="Education"
          subtitle="Formal foundation in computer science, software engineering, and database systems."
        />

        <div className="max-w-4xl">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {educationData.institution}
                  </h3>
                  <p className="text-base font-semibold text-emerald-400 mt-0.5">
                    {educationData.degree}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="inline-flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {educationData.period}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {educationData.location}
                </span>
              </div>
            </div>

            {/* GPA Callout */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/50 px-3.5 py-1.5 rounded-lg mb-5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-zinc-300">
                Cumulative GPA: <strong className="text-emerald-300 font-bold">{educationData.gpa}</strong>
              </span>
            </div>

            {/* Relevant Coursework */}
            {educationData.coursework && (
              <div className="pt-4 border-t border-zinc-800/70">
                <p className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider">
                  <BookCheck className="w-3.5 h-3.5" /> Core Curriculum &amp; Foundations
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
