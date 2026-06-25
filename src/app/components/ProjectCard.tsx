import { Link } from "react-router-dom";
import { Clock, BarChart2, Award } from "lucide-react";

const domainColors: Record<string, { bg: string; text: string }> = {
  Marketing: { bg: "var(--domain-marketing-bg)", text: "var(--domain-marketing-text)" },
  Finance: { bg: "var(--domain-finance-bg)", text: "var(--domain-finance-text)" },
  HR: { bg: "var(--domain-hr-bg)", text: "var(--domain-hr-text)" },
  Operations: { bg: "var(--domain-operations-bg)", text: "var(--domain-operations-text)" },
  "Business Analytics": { bg: "var(--domain-analytics-bg)", text: "var(--domain-analytics-text)" },
  Consulting: { bg: "var(--domain-consulting-bg)", text: "var(--domain-consulting-text)" },
};

const difficultyColor: Record<string, string> = {
  Beginner: "var(--workxd-green)",
  Intermediate: "var(--workxd-orange)",
  Advanced: "#EF4444",
};

export interface ProjectCardProps {
  title: string;
  domain: string;
  brand: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  href?: string;
  compact?: boolean;
}

export function ProjectCard({
  title,
  domain,
  brand,
  duration,
  difficulty,
  skills,
  href = "/project/go-to-market",
  compact = false,
}: ProjectCardProps) {
  const domainStyle = domainColors[domain] || { bg: "var(--domain-marketing-bg)", text: "var(--domain-marketing-text)" };

  return (
    <div
      className="rounded-xl border flex flex-col h-full hover:shadow-md transition-shadow"
      style={{ borderColor: "var(--workxd-border)", backgroundColor: "var(--workxd-card)" }}
    >
      {/* Domain color bar */}
      <div className="h-1.5 rounded-t-xl" style={{ backgroundColor: domainStyle.text }} />

      <div className={`p-5 flex flex-col flex-1 gap-3 ${compact ? "p-4" : "p-5"}`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: domainStyle.bg, color: domainStyle.text }}
          >
            {domain}
          </span>
          <span className="text-xs font-medium" style={{ color: "var(--workxd-text-subtle)" }}>{brand}</span>
        </div>

        <h3 className="font-semibold leading-snug" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>
          {title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--workxd-text-muted)" }}>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          <span
            className="flex items-center gap-1 font-medium"
            style={{ color: difficultyColor[difficulty] }}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            {difficulty}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 flex-1">
          {skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "var(--workxd-surface)", color: "var(--workxd-text-muted)", border: "1px solid var(--workxd-border)" }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Certificate + CTA */}
        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--workxd-border-subtle)" }}>
          <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--workxd-green)" }}>
            <Award className="w-3.5 h-3.5" />
            Certificate Included
          </span>
          <Link
            to={href}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--workxd-blue)", color: "white" }}
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
