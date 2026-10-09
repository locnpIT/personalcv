import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  ArrowLeft,
  Server,
  Layers,
  CheckCircle2,
  Lightbulb,
  Terminal,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Nguyen Phuoc Loc - Backend Software Engineer`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Backend Architecture Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="case-study">
      <div className="container">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Selected Work
        </Link>
        <header className="case-header">
          <p className="eyebrow">ARCHITECTURE CASE STUDY</p>
          <h1>{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>
          <ul className="tech-list">
            {project.tech.map((tech) => <li key={tech}><TechBadge label={tech} /></li>)}
          </ul>
          {project.highlightMetric && <p className="case-metric">{project.highlightMetric}</p>}
        </header>

        <section className="case-section case-columns" aria-label="Problem and solution">
          <div className="case-panel">
            <h2>The Architectural Problem</h2>
            <p>{project.problem}</p>
          </div>
          <div className="case-panel">
            <h2>Engineered Solution</h2>
            <p>{project.solution}</p>
          </div>
        </section>

        <section className="case-section">
          <h2><Layers aria-hidden="true" /> System Architecture &amp; Request Flow</h2>
          <div className="case-panel">
            <ol className="request-flow">
              {project.architectureDetails.map((step, index) => (
                <li key={step}>
                  <span className="step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section">
          <h2><Server aria-hidden="true" /> Deep-Dive Technical Decisions</h2>
          <div className="case-highlights">
            {project.technicalHighlights.map((highlight) => (
              <div key={highlight.title} className="case-panel">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {project.codeSnippet && (
          <section className="case-section">
            <h2><Terminal aria-hidden="true" /> Implementation Snapshot</h2>
            <figure className="code-panel">
              <figcaption className="code-caption">
                <span>{project.codeSnippet.filename}</span>
                <span>{project.codeSnippet.language.toUpperCase()}</span>
              </figcaption>
              <pre tabIndex={0} aria-label={`Code example: ${project.codeSnippet.filename}`}>
                <code>{project.codeSnippet.code}</code>
              </pre>
            </figure>
          </section>
        )}

        <section className="case-section">
          <h2><CheckCircle2 aria-hidden="true" /> Measured Impact &amp; Results</h2>
          <div className="case-panel">
            <ul className="result-list">{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
          </div>
        </section>

        {project.futureConsiderations && (
          <section className="case-section">
            <h2><Lightbulb aria-hidden="true" /> Future Scaling Iterations</h2>
            <ul className="result-list">
              {project.futureConsiderations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}

        <nav className="case-navigation" aria-label="Project navigation">
          <Link href="/projects/" className="back-link">← Back to All Projects</Link>
          <Link href="/#contact" className="pill-link">Discuss this Architecture →</Link>
        </nav>
      </div>
    </main>
  );
}
