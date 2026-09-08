import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="03"
          title="Selected Engineering Work"
          subtitle="Real-world backend architectural case studies solving concurrency, rate limiting, and database performance bottlenecks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
