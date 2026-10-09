interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent" | "mono" | "highlight";
  size?: "sm" | "md";
}

export function TechBadge({ label, size = "sm", variant = "default" }: TechBadgeProps) {
  return <span className={`tech-badge tech-badge--${variant}${size === "md" ? " tech-badge--md" : ""}`}>{label}</span>;
}
