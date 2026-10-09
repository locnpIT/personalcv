import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Architectural case studies in distributed rate limiting, Redis ranking, concurrency control, and database optimization.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="case-study">
      <div className="container">
        <Link href="/#projects" className="back-link">← Back to Home</Link>
        <header className="case-header">
          <p className="eyebrow">CASE STUDIES &amp; ARCHITECTURES</p>
          <h1>Selected Engineering Work</h1>
          <p className="case-tagline">Detailed technical breakdowns of backend systems, concurrency control, Redis data structures, and database query tuning.</p>
        </header>
        <div className="project-grid">
          {projectsData.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </main>
  );
}
