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
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors p-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Title & Metadata */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2.5 py-0.5 rounded">
              ARCHITECTURE CASE STUDY
            </span>
            {project.highlightMetric && (
              <span className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                {project.highlightMetric}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 font-sans">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-300 font-medium">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} variant="mono" size="sm" />
            ))}
          </div>
        </header>

        {/* Problem & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-6 rounded-xl border border-red-900/30 bg-zinc-900/40">
            <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Architectural Problem
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-emerald-900/30 bg-zinc-900/40">
            <div className="flex items-center gap-2 mb-3 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Engineered Solution
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Execution Flow & System Architecture */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2.5 font-sans">
            <Layers className="w-5 h-5 text-emerald-400" />
            System Architecture &amp; Request Flow
          </h2>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            {project.architectureDetails.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 shrink-0 mt-0.5">
                  {`0${idx + 1}`}
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2.5 font-sans">
            <Server className="w-5 h-5 text-cyan-400" />
            Deep-Dive Technical Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.technicalHighlights.map((th, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 space-y-2"
              >
                <h3 className="font-mono text-sm font-semibold text-zinc-200">
                  {th.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {th.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Code Snippet / Configuration */}
        {project.codeSnippet && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 font-sans">
                <Terminal className="w-5 h-5 text-amber-400" />
                Implementation Snapshot
              </h2>
              <span className="font-mono text-xs text-zinc-400">
                {project.codeSnippet.filename}
              </span>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 overflow-hidden font-mono text-xs shadow-xl">
              <div className="px-4 py-2 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between text-zinc-400 text-[11px]">
                <span>{project.codeSnippet.filename}</span>
                <span className="text-zinc-500 uppercase">{project.codeSnippet.language}</span>
              </div>
              <pre className="p-5 overflow-x-auto text-zinc-200 leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Measured Results */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2.5 font-sans">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            Measured Impact &amp; Results
          </h2>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            {project.results.map((res, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                  {res}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Considerations */}
        {project.futureConsiderations && (
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-zinc-200 flex items-center gap-2 font-sans">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Future Scaling Iterations
            </h2>
            <ul className="space-y-2 text-xs text-zinc-400 list-disc list-inside">
              {project.futureConsiderations.map((fc, i) => (
                <li key={i}>{fc}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-zinc-800/80 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            ← Back to All Projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/40 transition-colors"
          >
            Discuss this Architecture →
          </Link>
        </div>
      </div>
    </main>
  );
}
