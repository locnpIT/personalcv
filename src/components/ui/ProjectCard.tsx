import Link from "next/link";
import type { Project } from "@/types";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number">CASE {String(index + 1).padStart(2, "0")}</div>
      <h3>{project.title}</h3>
      {project.slug === "database-optimization" ? (
        <div className="project-performance">
          <strong>~13s → ~100ms</strong>
          <span>latency reduction (99% improvement)</span>
        </div>
      ) : (
        <p className="project-metric">
          {project.slug === "hotword-search"
            ? "O(log N) ranking with time-decay scoring."
            : `${project.highlightMetric}.`}
        </p>
      )}
      <p className="project-description">{project.description}</p>
      <ul className="tech-list">
        {project.tech.map((tech) => <li key={tech}><TechBadge label={tech} /></li>)}
      </ul>
      <Link href={`/projects/${project.slug}/`} className="project-link">
        View Architecture <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
