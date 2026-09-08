import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
          {number}
        </span>
        <div className="h-px bg-gradient-to-r from-emerald-500/30 via-zinc-800 to-transparent flex-1 max-w-xs" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
