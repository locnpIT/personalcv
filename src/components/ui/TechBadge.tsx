import React from "react";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent" | "mono" | "highlight";
  size?: "sm" | "md";
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = "default",
  size = "sm",
}) => {
  const sizeClasses = size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5";

  const variantClasses = {
    default:
      "bg-zinc-900/90 text-zinc-300 border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-100",
    accent:
      "bg-emerald-950/30 text-emerald-300 border-emerald-800/40 hover:border-emerald-700/60",
    mono: "bg-slate-900/80 text-cyan-300 border-cyan-900/40 font-mono tracking-tight hover:border-cyan-700/60",
    highlight:
      "bg-amber-950/30 text-amber-300 border-amber-800/40 hover:border-amber-700/60",
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border transition-all duration-200 select-none ${sizeClasses} ${variantClasses}`}
    >
      {label}
    </span>
  );
};
