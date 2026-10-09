interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ number, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="section-heading">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
